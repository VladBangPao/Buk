import {THE_ILIAD} from "../../Cases/Books/IndividualBooks/TheIliad.js"
import {Strowffer} from "./Strowffer.js"
class StrowfferTest{
	constructor(){
		this.rowInterface()
		this.stringInterface()
		this.bufferInterface()

		this.rowData()
		this.stringData()
		this.bufferData()

	}

	rowInterface(){
		console.log('rowData() with full array, full type array, full index string, SHOULD PASS')
		var stwfr = new Strowffer(
			[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 
			['int', 'str', 'utf-8', 'int', 'str', 'utf-8', 'int', 'str', 'utf-8', 'int'], 
			'arbitrary row data'
		)

		console.log('rowData() with full array, index replaces type, SHOULD FAIL')
		try{
			stwfr = new Strowffer(
			[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],  
			'arbitrary row data'
			)
		}catch(err){
		}

		console.log('rowData() with full array, null type, null index, SHOULD PASS')
		stwfr = new Strowffer(
			[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
		)

		console.log('rowData() with empty array, empty type array, empty index string, SHOULD FAIL')

		try{
			stwfr = new Strowffer(
				[],
				[],
				''
			)
		}catch(err){
		}


		console.log('rowData() with full array, empty type array, empty index string, SHOULD FAIL')
		try{
			stwfr = new Strowffer(
				[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
				[],
				''
			)
		}catch(err){

		}

		console.log('rowData() with empty array, full type array, empty index string, SHOULD FAIL')
		try{
			stwfr = new Strowffer(
				[],
				['int', 'str', 'utf-8', 'int', 'str', 'utf-8', 'int', 'str', 'utf-8', 'int'], 
				''
			)
		}catch(err){
		}

	}

	stringInterface(){
		console.log()
		stwfr = new Strowffer("hello world!", 'utf-8', 'greeting')
		stwfr = new Strowffer("", 'utf-8', 'greeting')
		stwfr = new Strowffer("hello world!", 'utf-8')
		stwfr = new Strowffer("hello world!")
		stwfr = new Strowffer("", '', '')
	}

	bufferInterface(){

	}




	rowData(){

	}

	stringData(){

	}

	bufferData(){

	}
}


new StrowfferTest()