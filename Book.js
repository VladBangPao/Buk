import * as assert from "node:assert"
import * as util from "node:util"
import * as fs from "node:fs"

//Every line needs a map to the original file location
//A size field (for choosing the most efficent search types)
//Some sort of indexing metadata

//Pages can be delimited by a litteral, or a pattern (you don't suffer regex performance hit more than once
//if you store into book file)

//Pages can be delimited by a byte or bit count (with a bitty count)
//(a bitty count is the number of bits at the end of a bit buffer that allows it to be an Octal 
//compliant buffer)
//it matters because you might be parsing nibbles or actual bit patterns and not necessarily
//byte patterns, but you still need the return of a page to be octal for processing

//Chapters are meant for loose association virtual indexing.
//Pages are are meant for closer NLP associations
//Line ordering can be optimized for even faster searches, or for helping humans visualize a page
//or chapter...

// "Library":{
//     "book index":{

//     },
//     "book":{
//         "chapter_index":{
    
//         },
//         //chapter 1
//         "1":{
//             "page_index":{
    
//             },
//             "pages":{
//                 "line_index":{
    
//                 },
//                 "lines":{
//                     "1":{
    
//                     }
                
//                 }
//             },
//         },
//         //chapter 2
//         "2":{
//             "page_index":{
    
//             },
//             "pages":{
//                 "line_index":{
                    
//                 },
    
//             },
//         }
    
//     }
// }




//Its just a book...
export class Book{
    constructor(file, string, tools){
        this.tools=tools;
        if(file && string){
            tools=string
            string=file
        }
        this.string=string;
        this.book;
        this.index;//for the future!
        if(file&&string){
            this.bookify(string, tools, this);
        }else{
            this.import(file, this)
        }
    }

    //PUBLIC GETTERS
    getPageCount(_Book){
        if(!_Book){_Book=this;}
		return parseInt(_Book.book['pageCount']);
	}
	getLineCount(page){
        return parseInt(page['lineCount']);
    }

    //PUBLIC UTILS
    bookify(string, tools, _Book){
        if(!_Book){_Book=this;}
		if(!(string&&tools)){
			tools = this.tools;
		}
		if(!_Book.book){
			_Book.book=this._getEmptyBook();
		}
		var page=this._getEmptyPage();

        if(('lineCount' in tools)&&('anchor' in tools)){
            var line="";
            for(var i=0; i<string.length; i++){
				//LEAVE THIS -1 after tools['lineCount'] because we are looking for the last enscribe to the queue!
				if(string[i]==tools['anchor'] && this.getLineCount(page)==tools['lineCount']-1){
					line+=string[i];	//adds the anchor to the string
					this._enscribeLineToPage(line, page);
                    this._setCharOffsetToPage(i, page);
					this._addPageToBook(page, _Book);
					page=this._getEmptyPage();
					line="";
				//LEAVE THIS -1 after tools['lineCount'] because we are looking for anything BEFORE THE LAST enscribe TO THE QUEUE!
				}else if(string[i]==tools['anchor'] && this.getLineCount(page)<tools['lineCount']-1){
					line+=string[i];	//adds the anchor to the string
                    this._enscribeLineToPage(line, page);
					line="";
				}else{
					line+=string[i];
				}
        	}
			//THIS IS ALWAYS HIDDEN
            this._enscribeLineToPage(line, page);
			this._addPageToBook(page, _Book);
		}
	}
    import(file, _Book, virtualize=false){
        if(!_Book){_Book=this;}
        _Book.book = JSON.parse(fs.readFileSync(file))
    }
    
    virtualize(string){
        
    }
    exportToBookFile(fileName, _Book){
        if(!_Book){_Book=this;}
        fs.writeFileSync(fileName+'.book', JSON.stringify(_Book.book))
    }

    scrollify(_Book){
        if(!_Book){_Book=this;}
        return this.scrollifyPagesNtoM(null, null, _Book)
    }

    //if you need to scrollify large ranges, your pages are too small
    scrollifyPagesNtoM(pageN, pageM, _Book){
        if(!_Book){_Book=this;}
        if(!_Book.book){
            throw Error("Book is needed for scrollify to work")
        }
        if(pageN && pageM){
            //if pageN or pageM
            return _Book._scrollifyPagesNtoM(pageN, pageM, _Book);
        }else if(pageN){
            return _Book._scrollifyPagesNtoM(pageN, _Book.getPageCount(_Book), _Book);
        }else if(pageM){
            return _Book._scrollifyPagesNtoM(0, pageM, _Book);
        }else{
            var string="";
            for (const [pageNumber, page] of Object.entries(_Book.book['pages'])) {
                for (const [lineNumber, line] of Object.entries(page['lines'])){
                    string+=line;
                }
            }    
            return string;
        }
    }

    enscribeToBook(string, tools, _Book){
        if(!_Book){_Book=this;}
        if(!string && !_Book.book){
            throw Error("you need to provide a string and a book");
        }
        if(!tools){
            tools=this.tools;
        }
		this.bookify(string, tools, _Book);
	}

    printBook(_Book){
        if(!_Book){_Book=this;}
		console.log(util.inspect(_Book.book, {showHidden: true, depth: null, colors: true}));
	}

    //PRIVATE GETTERS
    _getLineNFromPageM(pageM, lineN, _Book){
        if(!_Book){_Book=this;}
        return this.getPageN(pageM, _Book)['lines'][lineN.toString];
    }

    _getPageN(pageN, _Book){
        if(!_Book){_Book=this;}
        return _Book.book['pages'][pageN.toString()];
    }

    _getEmptyLine(){
        return {'charCount':'0', 'line':""}
    }
    _getEmptyPage(){
		return {'lineCount':'0','lines':{}, 'charOffset':'0'};
	}
	_getEmptyBook(){
		return {'pageCount':'0','pages':{}};
	}
    
    //PRIVATE SETTERS

    //calls regex once on every n pages (non-cumulative way), and returns the first non null regex value
    matchOnEveryNPages(nPages, first=true){
		var i;
		var matches = []
        for(var i = 1; i<=this.pageCount(); i++){
            if(i+nPages>this.pageCount()){
                return matches
            }else{
                matches.push(_Book.matchOnPageRange(regex, i, i+nPages, _Book))
            }
        }
        return matches;
    }

    //calls regex once on n pages (in cumulative way), and returns the first non null regex value
    matchEveryNPagesCumulitive(nPages){

    }
    //calls regex once on a page range, and returns the regex return value
    matchPageRange(regex, pageN, pageM, _Book){
        if(!_Book){_Book=this;}
        var scroll = this.scrollifyPagesNtoM(pageN, pageM, _Book)
        return scroll.match(regex)
	}

   //PRIVATE UTILS
    
    //O(n^2) where n is the number of pages n to m, pagination should be balanced
    //to avoid performance issues
    _scrollifyPagesNtoM(pageN, pageM, _Book){
        if(!_Book){_Book=this;}
        if(pageN>_Book.getPageCount()||pageM>_Book.getPageCount()){
            throw Error("pages must be within range of 0 and _Book.pageCount()")
        }
        var string="";
        for (var i = pageN; i<=pageM; i++){
            var page = _Book.book['pages'][i.toString()];
            for(const [lineNumber, line] of Object.entries(page['lines'])){
                string+=line;
            }
        }
        return string;
    }

    _scrollifyPageN(pageN, _Book){
        if(!_Book){_Book=this;}
        return this._scrollifyPagesNtoM(pageN, pageN, _Book);
    }


    _removePagesNtoM(pageN, pageM, _Book){
        if(!_Book){_Book=this;}
		assert.equal(pageM>=pageN, true);
		for (var i=pageN; i<=pageM; i++){
			this._removePageN(i, _Book);
		}
	}

	_removePageN(n, _Book){
        if(!_Book){_Book=this;}
		delete _Book.book['pages'][n.toString()];
		var tmp = _Book.book['pages'][(n+1).toString()];
		delete _Book.book['pages'][(n+1).toString()];
		_Book.book['pages'][n.toString()]=tmp;
		_Book.book['pageCount']=(parseInt(_Book.book['pageCount'])-1).toString();
	}

    
    //this should be tested when its actually used, leave it here for now.
    _popNPagesFrom(nPages, _Book){
        if(!_Book){_Book=this;}
		for(var i = 0; i<nPages; i++){
			this._popPageFromBook(_Book);
		}
	}
	
    _popPageFromBook(_Book){
        if(!_Book){_Book=this;}
        delete _Book.book['pages'][_Book.book['pageCount']]; 
        _Book.book['pageCount']=(parseInt(_Book.book['pageCount'])-1).toString();
    }

    
    _addPageToBook(page, _Book){
        if(!_Book){_Book=this;}
        _Book.book['pages'][(parseInt(_Book.book['pageCount'])+1).toString()]=page;
        _Book.book['pageCount']=(parseInt(_Book.book['pageCount'])+1).toString();
    }
    _enscribeLineToPage(line, page){
        page['lines'][(parseInt(page['lineCount'])+1).toString()]=line;
        page['lineCount']=(parseInt(page['lineCount'])+1).toString();
    }
}
