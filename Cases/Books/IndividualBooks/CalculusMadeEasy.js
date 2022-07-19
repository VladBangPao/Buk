export const CALCULUS_MADE_EASY=`%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% %
%                                                                         %
% The Project Gutenberg EBook of Calculus Made Easy, by Silvanus Thompson %
%                                                                         %
% This eBook is for the use of anyone anywhere in the United States and   %
% most other parts of the world at no cost and with almost no restrictions%
% whatsoever. You may copy it, give it away or re-use it under the terms  %
% of the Project Gutenberg License included with this eBook or online at  %
% www.gutenberg.org. If you are not located in the United States, you     %
% will have to check the laws of the country where you are located before %
% using this eBook.                                                       %
%                                                                         %
%                                                                         %
% Title: Calculus Made Easy                                               %
%        Being a very-simplest introduction to those beautiful            %
%        methods which are generally called by the terrifying names       %
%        of the Differentia                                               %
%                                                                         %
% Author: Silvanus Thompson                                               %
%                                                                         %
% Release Date: October 9, 2012 [eBook #33283]                            %
% Most recently updated: November 18, 2021                     %
%                                                                         %
% Language: English                                                       %
%                                                                         %
% Character set encoding: UTF-8                                           %
%                                                                         %
% *** START OF THIS PROJECT GUTENBERG EBOOK CALCULUS MADE EASY ***        %
%                                                                         %
% %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% %

\def\ebook{33283}
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%                                                                  %%
%% Packages and substitutions:                                      %%
%%                                                                  %%
%% book:     Required.                                              %%
%% inputenc: Standard DP encoding. Required.                        %%
%%                                                                  %%
%% ifthen:   Logical conditionals. Required.                        %%
%%                                                                  %%
%% amsmath:  AMS mathematics enhancements. Required.                %%
%% amssymb:  Additional mathematical symbols. Required.             %%
%%                                                                  %%
%% alltt:    Fixed-width font environment. Required.                %%
%% array:    Enhanced tabular features. Required.                   %%
%% dcolumn:  Decimal-aligned data columns. Required.                %%
%%                                                                  %%
%% footmisc: Extended footnote capabilities. Required.              %%
%% perpage:  Start footnote numbering on each page. Required.       %%
%%                                                                  %%
%% indentfirst: Indent first word of each sectional unit. Optional. %%
%%                                                                  %%
%% calc:     Length calculations. Required.                         %%
%%                                                                  %%
%% fancyhdr: Enhanced running headers and footers. Required.        %%
%%                                                                  %%
%% graphicx: Standard interface for graphics inclusion. Required.   %%
%% wrapfig:  Illustrations surrounded by text. Required.            %%
%%                                                                  %%
%% geometry: Enhanced page layout package. Required.                %%
%% hyperref: Hypertext embellishments for pdf output. Required.     %%
%%                                                                  %%
%%                                                                  %%
%% Producer's Comments:                                             %%
%%                                                                  %%
%%   Changes are noted in this file in three ways.                  %%
%%   1. \DPnote{} for in-line 'placeholder' notes.                  %%
%%   2. \DPtypo{}{} for typographical corrections, showing original %%
%%      and replacement text side-by-side.                          %%
%%   3. [** PP: Note]s for lengthier or stylistic comments.         %%
%%                                                                  %%
%%                                                                  %%
%% Compilation Flags:                                               %%
%%                                                                  %%
%%   The following behavior may be controlled by boolean flags.     %%
%%                                                                  %%
%%   ForPrinting (false by default):                                %%
%%   Compile a screen-optimized PDF file. Set to false for print-   %%
%%   optimized file (pages cropped, one-sided, blue hyperlinks).    %%
%%                                                                  %%
%%                                                                  %%
%% PDF pages: 292 (if ForPrinting set to false)                     %%
%% PDF page size: 6 x 8in (non-standard)                            %%
%% PDF bookmarks: created, point to ToC entries                     %%
%% PDF document info: filled in                                     %%
%% Images: 74 pdf diagrams                                          %%
%%                                                                  %%
%% Summary of log file:                                             %%
%% * Five invisible overfull hboxes in alignments.                  %%
%% * Two underfull hboxes.                                          %%
%%                                                                  %%
%%                                                                  %%
%% Compile History:                                                 %%
%%                                                                  %%
%% July, 2010: adhere (Andrew D. Hwang)                             %%
%%             texlive2007, GNU/Linux                               %%
%%                                                                  %%
%% Command block:                                                   %%
%%                                                                  %%
%%     pdflatex x3                                                  %%
%%                                                                  %%
%%                                                                  %%
%% October 2012: pglatex.                                           %%
%%   Compile this project with:                                     %%
%%   pdflatex 33283-t.tex ..... THREE times                         %%
%%                                                                  %%
%%   pdfTeX, Version 3.1415926-1.40.10 (TeX Live 2009/Debian)       %%
%%                                                                       %%
%% November 2021: okrick.                                                %%
%%         MiKTeX Console 4.3, Windows 10 Home                           %%
%%         TeXworks 0.6.6 used to generate PDF output.                   %%
%%                                                                       %%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
\listfiles
\documentclass[12pt]{book}[2005/09/16]

%%%%%%%%%%%%%%%%%%%%%%%%%%%%% PACKAGES %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
\usepackage[utf8]{inputenc}[2006/05/05]

\usepackage{ifthen}[2001/05/26]  %% Logical conditionals

\usepackage{amsmath}[2000/07/18] %% Displayed equations
\usepackage{amssymb}[2002/01/22] %% and additional symbols

\usepackage{alltt}[1997/06/16]   %% boilerplate, credits, license

\usepackage{array}[2005/08/23]   %% extended array/tabular features
\usepackage{dcolumn}

                                 %% extended footnote capabilities
\usepackage[symbol,perpage]{footmisc}[2005/03/17]
\usepackage{perpage}[2006/07/15]

\usepackage{multicol}

\usepackage{graphicx}[1999/02/16]%% For diagrams
\usepackage{wrapfig}%% For diagram on 219.png

\IfFileExists{indentfirst.sty}{%
  \usepackage{indentfirst}[1995/11/23]
}{}

\usepackage{calc}[2005/08/06]

% for running heads
\usepackage{fancyhdr}

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%% Interlude:  Set up PRINTING (default) or SCREEN VIEWING %%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

% ForPrinting=true (default)           false
% Asymmetric margins                   Symmetric margins
% Black hyperlinks                     Blue hyperlinks
% Start Preface, ToC, etc. recto       No blank verso pages
%
% Chapter-like ''Sections'' start both recto and verso in the scanned
% book. This behavior has been retained.
\newboolean{ForPrinting}

%% UNCOMMENT the next line for a PRINT-OPTIMIZED VERSION of the text %%
%\setboolean{ForPrinting}{true}

%% Initialize values to ForPrinting=false
\newcommand{\Margins}{hmarginratio=1:1}     % Symmetric margins
\newcommand{\HLinkColor}{blue}              % Hyperlink color
\newcommand{\PDFPageLayout}{SinglePage}
\newcommand{\TransNote}{Transcriber's Note}
\newcommand{\TransNoteCommon}{%
  Minor presentational changes, and minor typographical and numerical
  corrections, have been made without comment. All textual changes are
  detailed in the \LaTeX\ source file.
  \bigskip
}

\newcommand{\TransNoteText}{%
  \TransNoteCommon

  This PDF file is optimized for screen viewing, but may easily be
  recompiled for printing. Please see the preamble of the \LaTeX\
  source file for instructions.
}
%% Re-set if ForPrinting=true
\ifthenelse{\boolean{ForPrinting}}{%
  \renewcommand{\Margins}{hmarginratio=2:3} % Asymmetric margins
  \renewcommand{\HLinkColor}{black}         % Hyperlink color
  \renewcommand{\PDFPageLayout}{TwoPageRight}
  \renewcommand{\TransNote}{Transcriber's Note}
  \renewcommand{\TransNoteText}{%
    \TransNoteCommon

    This PDF file is optimized for printing, but may easily be
    recompiled for screen viewing. Please see the preamble of the
    \LaTeX\ source file for instructions.
  }
}{% If ForPrinting=false, don't skip to recto
  \renewcommand{\cleardoublepage}{\clearpage}
}
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%  End of PRINTING/SCREEN VIEWING code; back to packages  %%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

\ifthenelse{\boolean{ForPrinting}}{%
  \setlength{\paperwidth}{8.5in}%
  \setlength{\paperheight}{11in}%
  \usepackage[body={5in,7in},\Margins]{geometry}[2002/07/08]
}{%
  \setlength{\paperwidth}{6in}%
  \setlength{\paperheight}{8in}%
  \raggedbottom
  \usepackage[body={5in,7in},\Margins,includeheadfoot]{geometry}[2002/07/08]
}
% \usepackage[body={5.25in,8.4in},\Margins]{geometry}[2002/07/08]

\providecommand{\ebook}{00000}    % Overridden during white-washing
\usepackage[pdftex,
  hyperfootnotes=false,
  pdftitle={The Project Gutenberg eBook \#\ebook: Calculus Made Easy, 2nd Edition},
  pdfauthor={Silvanus Phillips Thompson},
  pdfkeywords={Paula Appling, Don Bindner, Chris Curnow, Andrew D. Hwang,
               Project Gutenberg Online Distributed Proofreading Team},
  pdfstartview=Fit,    % default value
  pdfstartpage=1,      % default value
  pdfpagemode=UseNone, % default value
  bookmarks=true,      % default value
  linktocpage=false,   % default value
  pdfpagelayout=\PDFPageLayout,
  pdfdisplaydoctitle,
  pdfpagelabels=true,
  bookmarksopen=true,
  bookmarksopenlevel=0,
  colorlinks=true,
  linkcolor=\HLinkColor]{hyperref}[2007/02/07]

% Re-crop screen-formatted version, accommodating wide displays
\ifthenelse{\boolean{ForPrinting}}
  {}
  {\hypersetup{pdfpagescrop= 20 0 412 580}}


%%%% Fixed-width environment to format PG boilerplate %%%%
\newenvironment{PGtext}{%
\begin{alltt}
\fontsize{9.2}{10.5}\ttfamily\selectfont}%
{\end{alltt}}

\newcounter{mytnote}
\newcommand{\TNote}[1]{%
  \refstepcounter{mytnote}%
  \begin{minipage}{0.85\textwidth}
    \small
    \phantomsection
    \pdfbookmark[0]{Transcriber's Note}{TransNote\themytnote}
    \subsection*{\centering\normalfont\scshape%
      \normalsize\MakeLowercase{\TransNote}}%

    \raggedright
    #1
  \end{minipage}
}

\newcommand{\Corrections}{%
  The diagrams have been re-created, using accompanying formulas or
  descriptions from the text where possible.
  \bigskip

  In Chapter~XIV, pages \Pageref[]{erratum0}--\Pageref[]{erratum0a},
  numerical values of $\left(1+\frac{1}{n}\right)^n$, $\epsilon^x$,
  and related quantities of British currency have been verified and
  rounded to the nearest digit.
  \bigskip

  On \Pageref[page]{erratum1} (page~146 in the original), the graphs
  of the natural logarithm and exponential functions, Figures
  38~and~39, have been interchanged to match the surrounding text.
  \medskip

  The vertical dashed lines in the natural logarithm graph, Figure~39
  (Figure~38 in the original), have been moved to match the data in
  the corresponding table.
  \bigskip

  On \Pageref[page]{erratum2} (page~167 in the original), the graphs
  of the sine and cosine functions, Figures 44~and~45, have been
  interchanged to match the surrounding text.
}

% Misc text formatting tricks
\newlength{\TmpLen}
\newlength{\MySkip}
\newcommand{\PadTxt}[3][c]{%
  \settowidth{\TmpLen}{#2}%
  \makebox[\TmpLen][#1]{#3}%
}

\newcommand{\PadTo}[3][c]{\PadTxt[#1]{$#2$}{$#3$}}

% Style-setting
\renewcommand{\footnoterule}{}
\newcommand{\loosen}{\spaceskip0.5em plus 0.5em minus 0.25em}
\setlength{\emergencystretch}{1.5em}

\renewcommand{\topfraction}{0.6}
\renewcommand{\bottomfraction}{0.6}
\renewcommand{\textfraction}{0.1}
\DeclareMathSizes{12}{12}{8}{7}
\newcommand{\ds}{\displaystyle}

%% No hrule in page header
\renewcommand{\headrulewidth}{0pt}
\renewcommand{\baselinestretch}{1.33}

% Top-level footnote numbers restart on each page
\MakePerPage{footnote}

% Stretch-fit argument to a box as wide as \TmpLen
\newcommand{\SetBox}[2][s]{%
  \ifthenelse{\equal{#1}{s}}{%
    \makebox[\TmpLen][#1]{\loosen #2}%
  }{%
    \makebox[\TmpLen][#1]{#2}%
  }%
}

% For Table of Standard Forms
\newcommand{\ColumnHead}[1]{%
  \multicolumn{3}{|c|}{\textbf{#1}}
}

%% Macro for reducing space between adjacent display environments
\newcommand{\CancelMathSkip}{\vspace{-\belowdisplayskip}}
\newcommand{\BindMath}[1]{%
{\vspace{\abovedisplayskip}%
{\setlength{\abovedisplayskip}{0pt}%
\setlength{\belowdisplayskip}{0pt}%
#1}\vspace{\belowdisplayskip}}%
}

% Running heads
\newcommand{\Heading}[1]{\textbf{\footnotesize\MakeUppercase{#1}}}

\newcommand{\SetOddHead}[1]{%
  \fancyhead{}%
  \setlength{\headheight}{15pt}%
  \fancyhead[CE]{\Heading{Calculus Made Easy}}%
  \fancyhead[CO]{\Heading{#1}}%
  \ifthenelse{\boolean{ForPrinting}}%
             {\fancyhead[RO,LE]{\thepage}}%
             {\fancyhead[R]{\thepage}}%
}

\newcommand{\SetBothHeads}[1]{%
  \fancyhead{}%
  \fancyhead[C]{\Heading{#1}}%
}

% Table of Contents
% Redefine headings for table of contents & index
\renewcommand{\contentsname}{%
  \protect\Large\protect\normalfont\protect\centering%
  CONTENTS.\\
}

\newcommand{\ToCBox}[1]{%
  \PadTxt[r]{XVIII.}{#1}\quad%
}

\newcommand{\ToCAnchor}{}

%\ToCLine[font style]{Chapter}{Title}{label}
\newcommand{\ToCLine}[4][\scshape]{%
  \par\noindent\label{toc:#4}%
  \ifthenelse{\not\equal{\pageref{toc:#4}}{\ToCAnchor}}{%
    \noindent\textsc{\scriptsize Chapter\hfill Page}\medskip%
    \renewcommand{\ToCAnchor}{\pageref{toc:#4}}\par%
  }{}%
  \settowidth{\TmpLen}{9999}%
  \noindent\parbox[b]{\linewidth-\TmpLen}{\ToCBox{#2}%
    \rule{0pt}{16pt}#1\hangindent6em #3\dotfill}% [** TN: Hard-coded spaces]
  \PadTxt[r]{9999}{\pageref{#4}}\smallskip%
}

\newcommand{\ChapterSkip}{\vspace*{0.1\linewidth}}
\newcommand{\flushpage}{\clearpage\fancyhf{}\cleardoublepage}

% Numbered: \Chapter[Running Head]{number}{Title}
\newcommand{\Chapter}[3][]{%
  \flushpage
  \phantomsection\label{chap:#2}\pdfbookmark[0]{Chapter #2}{Chapter #2}%
  \ifthenelse{\not\equal{#1}{}}{%
    \SetOddHead{#1}%
  }{%
    \SetOddHead{#3}%
  }%

  \addtocontents{toc}{\protect\ToCLine{#2.}{#3}{chap:#2}}
  \thispagestyle{empty}
  \ChapterSkip%
  \section*{\centering\normalfont\Large CHAPTER #2.}
  \subsection*{\centering\normalfont\large\MakeUppercase{#3}.}
}


% Unnumbered, but has a ToC entry: \AltChapter[Running Head]{Title}
%[** TN: Uses the book's chapter structure to select ToC entry font]
\newcommand{\AltChapter}[2][]{%
  \ifthenelse{\equal{#2}{Prologue}}{%
    \pagestyle{fancy}
  }{}
  \flushpage
  \phantomsection\label{#2}\pdfbookmark[0]{#2}{#2}%
  \ifthenelse{\not\equal{#1}{}}{%
    \SetOddHead{#1}%
    \addtocontents{toc}{\protect\ToCLine{}{#1}{#2}}%
  }{%
    \SetOddHead{#2}%
    \ifthenelse{\equal{#2}{Table of Standard Forms}}{%
      \addtocontents{toc}{\protect\ToCLine[\bfseries]{}{#2}{#2}}%
    }{%
      \addtocontents{toc}{\protect\ToCLine{}{#2}{#2}}%
      \ChapterSkip%
    }%
  }%

  \thispagestyle{empty}
  \section*{\centering\normalfont\Large\MakeUppercase{#2.}}
}


% For the Preface and Epilogue; no ToC entry
\newcommand\ChapterStar[2][]{%
  \flushpage
  \phantomsection

  \ifthenelse{\not\equal{#1}{}}{%
    \SetOddHead{#1}%
    \pdfbookmark[0]{#1}{#1}%
  }{%
    \SetOddHead{#2}%
    \pdfbookmark[0]{#2}{#2}%
  }%
  \thispagestyle{empty}
  \ChapterSkip%
  \section*{\centering\normalfont\Large\MakeUppercase{#2.}}
}

\newcounter{SectionNo}
\setcounter{SectionNo}{0}

\newcommand\Section[2][]{%
  \section*{\centering\normalfont\normalsize\bfseries#2}%
  \refstepcounter{SectionNo}%
  \phantomsection\pdfbookmark[1]{#2}{#2}\label{section:\theSectionNo}%
  \ifthenelse{\not\equal{#1}{}}{\SetOddHead{#1}}{}%
}

%tweaking \subsection - added italics & indent
\newcommand\Subsection[1]{%
  \medskip\pagebreak[1]\par\textit{#1}\pagebreak[0]\par%
}

%tweaking \paragraph - added italics & indent
\newcommand{\Paragraph}[1]{\medskip\pagebreak[1]\par\textit{#1}}

\newcommand{\Note}[1]{%
  \clearpage
  \section*{\centering\normalfont\normalsize #1}
}

% Dedicated structural macros
\newcommand{\Case}[1]{\Subsection{Case~\upshape{#1}.}}

% "Example." goes on its own line; otherwise, run-in heading
\newcommand{\Example}[1]{%
  \ifthenelse{\equal{#1}{.}}{%
    \Subsection{\textit{Example.}}%
  }{%
    \Paragraph{\textit{Example}~\upshape{#1}}%
  }%
}

\newcommand{\Examples}[1]{%
  \ifthenelse{\equal{#1}{.}}{%
    \Subsection{\textit{Examples.}}%
  }{%
    \Subsection{\textit{#1}}%
  }
}


% Exercises section heading
% \Exercises[Running Head]{I} (See p.~254 for Answers.)
\newcommand{\Exercises}[2][]{%
  \tb\textit{Exercises~#2.}\quad
  \phantomsection\pdfbookmark[1]{Exercises #2}{Exercises #2}\label{Ex:#2}%
  \ifthenelse{\not\equal{#1}{}}{\SetOddHead{#1}}{}%
}

% Loosen up page spacing
%\setlength{\parsep}{1ex plus 0.5ex minus 1ex}
%\setlength{\partopsep}{0.5ex plus 1.5ex minus 0.25ex}
%\setlength{\itemsep}{1ex plus 1ex minus 1ex}

\newboolean{InMulticols}% true iff we're in a multicolumn envt

% List item formatting
\newcommand{\ListInit}{%
  \setlength{\leftmargin}{0pt}%
  \setlength{\labelwidth}{\parindent}%
  \setlength{\labelsep}{0.5em}%
  \setlength{\itemsep}{0pt}%
  \setlength{\listparindent}{\parindent}
  \setlength{\itemindent}{2\parindent}%
}

\newcommand{\SublistInit}{%
  \setlength{\leftmargin}{\parindent}%
  \setlength{\rightmargin}{3em}%
  \setlength{\labelwidth}{1em}%
  \setlength{\labelsep}{0.5em}%
  \setlength{\itemsep}{0pt}%
  \setlength{\listparindent}{\parindent}
  \setlength{\itemindent}{2.5em}%
}


% List environment initializer for Answers section
\newcommand{\ListInitAns}{%
  \setlength{\leftmargin}{\parindent}%0pt
  \setlength{\labelwidth}{\parindent}%
  \setlength{\labelsep}{0.5em}%
  \setlength{\itemsep}{2pt}%
  \setlength{\listparindent}{\parindent}
  \setlength{\itemindent}{0pt}%
}

% Reset number of columns *within a Problems or Answers environment*
\newcommand{\ResetCols}[1]{%
  \ifthenelse{\boolean{InMulticols}}{%
  \end{multicols}%
}{}
\ifthenelse{\equal{#1}{1}}{%
  \setboolean{InMulticols}{false}%
}{%
  \setboolean{InMulticols}{true}%
  \begin{multicols}{#1}[\raggedcolumns]%
  }%
}

% #1 = number of columns
\newenvironment{Problems}[1][1]{%
  \begin{list}{}{\ListInit}%
  \ifthenelse{\equal{#1}{1}}{%
    \setboolean{InMulticols}{false}%
  }{%
    \setboolean{InMulticols}{true}%
    \begin{multicols}{#1}
    }%
  }{% End of envt code
    \ifthenelse{\boolean{InMulticols}}{%
    \end{multicols}%
  }{}%
  \setboolean{InMulticols}{false}
\end{list}%
}

\newenvironment{SubProbs}{%
  \begin{list}{}{\SublistInit}%
  }{%
  \end{list}%
}

\newenvironment{Answers}[4][1]{%
  \ifthenelse{\not\equal{#2}{I}}{\vspace{12pt plus 24pt minus 12pt}\tb#4}{}%
%
  \section*{\centering\normalsize Exercises~#2.\quad\normalfont#3\label{AnsEx:#2}}%
  \begin{list}{}{\ListInitAns}%
    \ifthenelse{\equal{#1}{1}}{%
      \setboolean{InMulticols}{false}% Update state; else
    }{%
      \setboolean{InMulticols}{true}%
      \begin{multicols}{#1}[\raggedcolumns]%
      }%
    }{% End of envt code
      \ifthenelse{\boolean{InMulticols}}{\end{multicols}}{}%
  \end{list}%
  \setboolean{InMulticols}{false}%
}

% Exercise and answer numbers
\newcommand\Item[2][]{%
   \item[#2]%
   \ifthenelse{\not\equal{#1}{}}{\phantomsection\label{#1}}{}%
}

% Table entries
\newcolumntype{.}[1]{D{.}{.}{#1}}

\newcommand{\Td}[2][r]{%
  \settowidth{\TmpLen}{9999}%
  \ifthenelse{\equal{#1}{r}}{%
    \makebox[\TmpLen][#1]{$#2$\;}%
  }{%
    \ifthenelse{\equal{#1}{l}}{%
      \makebox[\TmpLen][#1]{\;$#2$}%
    }{%
      \makebox[\TmpLen][#1]{$#2$}%
    }%
  }%
}

% polynomial division on 051.png
\newcommand\TmpColA{%
  \begin{tabular}{@{}c|}$v + dv$\DStrut\\\hline\end{tabular}%
}

\newcommand\TmpColB{%
  \;\begin{tabular}{@{}l@{}}$u + \dfrac{u· dv}{v}\DStrut$ \\\hline\end{tabular}%
}

% Catalogue macros
\newcommand{\Catalogue}{%
  \flushpage
  \thispagestyle{empty}
  \phantomsection\pdfbookmark[0]{Catalogue}{Catalogue}
  \SetBothHeads{Catalogue}
  \begin{center}
    \large A SELECTION OF \\
    % [** TN: Fake boldface smallcaps to avoid loading fontenc package]
    \bfseries \Huge M\Large ATHEMATICAL \Huge W\Large ORKS
    \tb
  \end{center}
}

\newcommand{\License}{%
  \flushpage
  \thispagestyle{empty}
  \phantomsection\pdfbookmark[0]{License}{License}
  \SetBothHeads{License}
}

\newcommand{\Title}[1]{{\Large #1}}
\newcommand{\Author}[1]{\textsc{#1}}

\newcommand{\Book}[1]
  {\smallskip\par\noindent\hangindent\parindent #1}


% Illustrations
\newcommand{\Graphic}[2][]{%
  \ifthenelse{\equal{#1}{}}{%
    \includegraphics{./images/#2.pdf}%
  }{%
    \includegraphics[width=#1]{./images/#2.pdf}%
  }%
}

% Usage: \Figure[optional width]{File name}{Fig number}
\newcommand{\Figure}[3][2.25in]{%
  \begin{figure}[hbt]
    \centering%
    \Graphic[#1]{#2}%
    \phantomsection\label{fig:#3}%
  \end{figure}%
}

% For pairs of side-by-side images
\newcommand{\Figures}[5][2.25in]{%
  \begin{figure}[hbt]
    \centering%
    \makebox[0pt][c]{% Force centering even if sum of widths is large
      \Graphic[#1]{#2}\qquad\Graphic[#1]{#3}%
    }%
    \phantomsection\label{fig:#4}\label{fig:#5}%
  \end{figure}%
}

% Cross-referencing: anchors
\newcommand{\DPPageSep}[2]{\Pagelabel{#2}}

\newcommand{\Pagelabel}[1]
  {\phantomsection\label{#1}}

% and links
\newcommand{\Pageref}[2][p.]{%
  \ifthenelse{\not\equal{#1}{}}{%
    \hyperref[#2]{#1~\pageref{#2}}%
  }{%
    \hyperref[#2]{\pageref{#2}}%
  }%
}

\newcommand{\Pagerange}[2]{%
  \ifthenelse{\equal{\pageref{#1}}{\pageref{#2}}}{%
    \hyperref[#1]{p.~\pageref{#1}}%
  }{%
%[** TN: Formatting as pp. m--n instead of pp. n, n+1.]
    pp.~\hyperref[#1]{\pageref{#1}}--\hyperref[#2]{\pageref{#2}}%
  }%
}

\newcommand{\Fig}[1]{\hyperref[fig:#1]{Fig.~#1}}

\newcommand{\Figs}[3]{%
  Figs.\ \hyperref[fig:#1]{#1}~#2~\hyperref[fig:#3]{#3}}

\newcommand{\NB}{\textit{N.B.}}
\newcommand{\IE}{\textit{i.e.}}

% Thought break
\newcommand{\tb}[1][1.5in]{%
%  \pagebreak[0]\begin{center}\rule{#1}{0.5pt}\end{center}\pagebreak[3]%
  \pagebreak[0]\par{\centering\rule{#1}{0.5pt}\pagebreak[3]\par}%
}


\newcommand{\DPtypo}[2]{#2}% Corrections.
\newcommand{\DPchg}[2]{#2}%  Stylistic tweaks
\newcommand{\DPnote}[1]{}%   Notes to posterity

\DeclareUnicodeCharacter{00A3}{\pounds}
\DeclareUnicodeCharacter{00B0}{{}^\circ}
\DeclareUnicodeCharacter{00B1}{\pm}
\DeclareUnicodeCharacter{00B7}{\cdot}
\DeclareUnicodeCharacter{00D7}{\times}
\DeclareUnicodeCharacter{00F7}{\div}


\newcommand{\Z}{\phantom{0}}
\newcommand{\DStrut}{\rule[-12pt]{0pt}{32pt}}
\newcommand{\Strut}{\rule{0pt}{16pt}}

\newcommand{\First}[1]{\noindent\textsc{#1}}

% "exponent fraction" factored out for special handling, if desired
\newcommand{\efrac}[2]{\frac{#1}{#2}}

\DeclareMathOperator{\Arccos}{arc\,cos}
\renewcommand{\arccos}{\Arccos}

\DeclareMathOperator{\Arcsin}{arc\,sin}
\renewcommand{\arcsin}{\Arcsin}

\DeclareMathOperator{\Arctan}{arc\,tan}
\renewcommand{\arctan}{\Arctan}

\DeclareMathOperator{\arcsec}{arc\,sec}
\DeclareMathOperator{\cosec}{cosec}
\DeclareMathOperator{\cotan}{cotan}
\DeclareMathOperator{\sech}{sech}

% DPalign
\makeatletter
\providecommand\shortintertext\intertext
\newcount\DP@lign@no
\newtoks\DP@lignb@dy
\newif\ifDP@cr
\newif\ifbr@ce
\def\f@@zl@bar{\null}
\def\addto@DPbody#1{\global\DP@lignb@dy\@xp{\the\DP@lignb@dy#1}}
\def\parseb@dy#1{\ifx\f@@zl@bar#1\f@@zl@bar
    \addto@DPbody{{}}\let\@next\parseb@dy
  \else\ifx\end#1
    \let\@next\process@DPb@dy
    \ifDP@cr\else\addto@DPbody{\DPh@@kr&\DP@rint}\@xp\addto@DPbody\@xp{\@xp{\the\DP@lign@no}&}\fi
    \addto@DPbody{\end}
  \else\ifx\intertext#1
    \def\@next{\eat@command0}%
  \else\ifx\shortintertext#1
    \def\@next{\eat@command1}%
  \else\ifDP@cr\addto@DPbody{&\DP@lint}\@xp\addto@DPbody\@xp{\@xp{\the\DP@lign@no}&\DPh@@kl}
          \DP@crfalse\fi
    \ifx\begin#1\def\begin@stack{b}
      \let\@next\eat@environment
  \else\ifx\lintertext#1
    \let\@next\linter@text
  \else\ifx\rintertext#1
    \let\@next\rinter@text
  \else\ifx\\#1
    \addto@DPbody{\DPh@@kr&\DP@rint}\@xp\addto@DPbody\@xp{\@xp{\the\DP@lign@no}&\\}\DP@crtrue
    \global\advance\DP@lign@no\@ne
    \let\@next\parse@cr
  \else\check@braces#1!Q!Q!Q!\ifbr@ce\addto@DPbody{{#1}}\else
    \addto@DPbody{#1}\fi
    \let\@next\parseb@dy
  \fi\fi\fi\fi\fi\fi\fi\fi\@next}
\def\process@DPb@dy{\let\lintertext\@gobble\let\rintertext\@gobble
  \@xp\start@align\@xp\tw@\@xp\st@rredtrue\@xp\m@ne\the\DP@lignb@dy}
\def\linter@text#1{\@xp\DPlint\@xp{\the\DP@lign@no}{#1}\parseb@dy}
\def\rinter@text#1{\@xp\DPrint\@xp{\the\DP@lign@no}{#1}\parseb@dy}
\def\DPlint#1#2{\@xp\def\csname DP@lint:#1\endcsname{\text{#2}}}
\def\DPrint#1#2{\@xp\def\csname DP@rint:#1\endcsname{\text{#2}}}
\def\DP@lint#1{\ifbalancedlrint\@xp\ifx\csname
DP@lint:#1\endcsname\relax\phantom
  {\csname DP@rint:#1\endcsname}\else\csname DP@lint:#1\endcsname\fi
  \else\csname DP@lint:#1\endcsname\fi}
\def\DP@rint#1{\ifbalancedlrint\@xp\ifx\csname
DP@rint:#1\endcsname\relax\phantom
  {\csname DP@lint:#1\endcsname}\else\csname DP@rint:#1\endcsname\fi
  \else\csname DP@rint:#1\endcsname\fi}
\def\eat@command#1#2{\ifcase#1\addto@DPbody{\intertext{#2}}\or
  \addto@DPbody{\shortintertext{#2}}\fi\DP@crtrue
  \global\advance\DP@lign@no\@ne\parseb@dy}
\def\parse@cr{\new@ifnextchar*{\parse@crst}{\parse@crst{}}}
\def\parse@crst#1{\addto@DPbody{#1}\new@ifnextchar[{\parse@crb}{\parseb@dy}}
\def\parse@crb[#1]{\addto@DPbody{[#1]}\parseb@dy}
\def\check@braces#1#2!Q!Q!Q!{\def\dp@lignt@stm@cro{#2}\ifx
  \empty\dp@lignt@stm@cro\br@cefalse\else\br@cetrue\fi}
\def\eat@environment#1{\addto@DPbody{\begin{#1}}\begingroup
  \def\@currenvir{#1}\let\@next\digest@env\@next}
\def\digest@env#1\end#2{%
  \edef\begin@stack{\push@begins#1\begin\end \@xp\@gobble\begin@stack}%
  \ifx\@empty\begin@stack
    \@checkend{#2}
    \endgroup\let\@next\parseb@dy\fi
    \addto@DPbody{#1\end{#2}}
    \@next}
\def\lintertext{lint}\def\rintertext{rint}
\newif\ifbalancedlrint
\let\DPh@@kl\empty\let\DPh@@kr\empty
\def\DPg@therl{&\omit\hfil$\displaystyle}
\def\DPg@therr{$\hfil}

\newenvironment{DPalign*}[1][a]{%
  \if m#1\balancedlrintfalse\else\balancedlrinttrue\fi
  \global\DP@lign@no\z@\DP@crfalse
  \DP@lignb@dy{&\DP@lint0&}\parseb@dy
}{%
  \endalign
}
\newenvironment{DPgather*}[1][a]{%
  \if m#1\balancedlrintfalse\else\balancedlrinttrue\fi
  \global\DP@lign@no\z@\DP@crfalse
  \let\DPh@@kl\DPg@therl
  \let\DPh@@kr\DPg@therr
  \DP@lignb@dy{&\DP@lint0&\DPh@@kl}\parseb@dy
}{%
  \endalign
}
\makeatother

%%%%%%%%%%%%%%%%%%%%%%%% START OF DOCUMENT %%%%%%%%%%%%%%%%%%%%%%%%%%

\begin{document}

\pagestyle{empty}
\pagenumbering{Alph}

\phantomsection
\pdfbookmark[-1]{Front Matter}{Front Matter}

%%%% PG BOILERPLATE %%%%
\phantomsection
\pdfbookmark[0]{Boilerplate}{Boilerplate}

\begin{center}
\begin{minipage}{\textwidth}
\small
\begin{PGtext}
The Project Gutenberg EBook of Calculus Made Easy, by Silvanus Thompson

This eBook is for the use of anyone anywhere in the United States and   
most other parts of the world at no cost and with almost no restrictions
whatsoever. You may copy it, give it away or re-use it under the terms  
of the Project Gutenberg License included with this eBook or online at  
www.gutenberg.org. If you are not located in the United States, you     
will have to check the laws of the country where you are located before 
using this eBook.                                                       


Title: Calculus Made Easy
       Being a very-simplest introduction to those beautiful
       methods which are generally called by the terrifying names
       of the Differentia

Author: Silvanus Thompson

Release Date: October 9, 2012 [eBook #33283]
Most recently updated: November 18, 2021

Language: English

Character set encoding: UTF-8     

*** START OF THIS PROJECT GUTENBERG EBOOK CALCULUS MADE EASY ***
\end{PGtext}
\end{minipage}
\end{center}

\clearpage


%%%% Credits and transcriber's note %%%%
\begin{center}
\begin{minipage}{\textwidth}
\begin{PGtext}
\end{PGtext}
\end{minipage}
\end{center}
\vfill
\TNote{\TransNoteText}
%%%%%%%%%%%%%%%%%%%%%%%%%%% FRONT MATTER %%%%%%%%%%%%%%%%%%%%%%%%%%

\frontmatter
\pagenumbering{roman}
\DPPageSep{001.png}{i}%


% half-title page
\cleardoublepage
\null\vfill
\thispagestyle{empty}
\begin{center}
\Huge CALCULUS MADE EASY
\end{center}
\vfill
\DPPageSep{002.png}{ii}%


% publisher's page
\newpage
\null\vfill
\thispagestyle{empty}
\begin{center}
\setlength{\MySkip}{4pt}%
\Graphic[2in]{pubmark} \\[3\MySkip]
%
\small MACMILLAN AND CO., \textsc{Limited} \\[\MySkip]
\scriptsize LONDON : BOMBAY : CALCUTTA \\[\MySkip]
MELBOURNE \\[3\MySkip]
%
\small THE MACMILLAN COMPANY \\[\MySkip]
\scriptsize NEW YORK : BOSTON : CHICAGO \\[\MySkip]
DALLAS : SAN FRANCISCO \\[3\MySkip]
%
\small THE MACMILLAN CO. OF CANADA, \textsc{Ltd.} \\[\MySkip]
\scriptsize TORONTO \\[\MySkip]
\end{center}
\vfill
\DPPageSep{003.png}{iii}%


% title page
\cleardoublepage
\thispagestyle{empty}
\begin{center}
\setlength{\MySkip}{12pt}%
\Huge \textbf{CALCULUS MADE EASY:}
\vspace{2\MySkip}

\normalsize\settowidth{\TmpLen}{THOSE BEAUTIFUL METHODS OF RECKONING }%
\SetBox{BEING A VERY-SIMPLEST INTRODUCTION TO} \\
\SetBox{THOSE BEAUTIFUL METHODS OF RECKONING} \\
\SetBox{WHICH ARE GENERALLY CALLED BY THE} \\
\SetBox[c]{TERRIFYING NAMES OF THE}
\vspace{2\MySkip}

\large DIFFERENTIAL CALCULUS \\[\MySkip]
\small AND THE \\[\MySkip]
\large INTEGRAL CALCULUS.
\vfill

\small BY \\
\Large F.~R.~S.
\vfill\vfill

\textit{\large SECOND EDITION, ENLARGED}
\vfill\vfill\vfill\vfill

\large\settowidth{\TmpLen}{ST. MARTIN'S STREET, LONDON}%
\SetBox{MACMILLAN AND CO., LIMITED} \\
\SetBox{ST. MARTIN'S STREET, LONDON} \\
\SetBox[c]{\oldstylenums{1914}}
\end{center}
\DPPageSep{004.png}{iv}%


% copyright page
\newpage
\null\vfill
\thispagestyle{empty}
\begin{center}
\footnotesize
\textit{COPYRIGHT.}
\bigskip

First Edition 1910.\\
Reprinted 1911 (twice), 1912, 1913.\\
Second Edition 1914.
\end{center}
\vfill
\DPPageSep{005.png}{v}%


\cleardoublepage
\thispagestyle{empty}
\null\vfill
\begin{quote}
What one fool can do, another can. \\
\raggedleft(\textit{Ancient Simian Proverb.})
\end{quote}
\vfill
\DPPageSep{006.png}{vi}%
%[Blank Page]
\DPPageSep{007.png}{vii}%


\ChapterStar[Preface]{Preface to the Second Edition}

\First{The} surprising success of this work has led the
author to add a considerable number of worked
examples and exercises. Advantage has also been
taken to enlarge certain parts where experience
showed that further explanations would be useful.

The author acknowledges with gratitude many
valuable suggestions and letters received from teachers,
students, and---critics.

\medskip
\emph{October}, 1914.
\DPPageSep{008.png}{viii}%
%[Blank Page]
\DPPageSep{009.png}{ix}%

\cleardoublepage
\tableofcontents
\iffalse %%%% Original ToC text %%%%

CONTENTS.

CHAPTER        PAGE

Prologue  xi

I. To deliver you from the Preliminary Terrors   1

II. On Different Degrees of Smallness  3

III. On Relative Growings   9

IV. Simplest Cases 18

V. Next Stage. What to do with Constants  26

VI. Sums, Differences, Products, and Quotients  35

VII. Successive Differentiation  49

VIII. When Time varies   52

IX. Introducing a Useful Dodge  67

X. Geometrical Meaning of Differentiation 76

XI. Maxima and Minima   93

XII. Curvature of Curves   112

XIII. Other Useful Dodges   121

XIV. On true Compound Interest and the Law of
Organic Growth   134

XV. How to deal with Sines and Cosines  165

XVI. Partial Differentiation  175

XVII. Integration     182

\DPPageSep{010.png}{x}%

XVIII. Integrating as the Reverse of Differentiating  191

XIX. On Finding Areas by Integrating  206

XX. Dodges, Pitfalls, and Triumphs   226

XXI. Finding some Solutions  234

XXII. Epilogue and Apologue  249

Table of Standard Forms    252

Answers to Exercises  254

\fi%%%% End of original ToC %%%%
\DPPageSep{011.png}{xi}%


\AltChapter{Prologue}

\First{Considering} how many fools can calculate, it is
surprising that it should be thought either a difficult
or a tedious task for any other fool to learn how to
master the same tricks.

Some calculus-tricks are quite easy. Some are
enormously difficult. The fools who write the textbooks
of advanced mathematics---and they are mostly
clever fools---seldom take the trouble to show you how
easy the easy calculations are. On the contrary, they
seem to desire to impress you with their tremendous
cleverness by going about it in the most difficult way.

Being myself a remarkably stupid fellow, I have
had to unteach myself the difficulties, and now beg
to present to my fellow fools the parts that are not
hard. Master these thoroughly, and the rest will
follow. What one fool can do, another can.
\DPPageSep{012.png}{xii}%
\DPPageSep{013.png}{1}%
\mainmatter
\phantomsection\pdfbookmark[-1]{Main Matter}{Main Matter}


\Chapter{I}{To deliver you from the Preliminary Terrors}

\First{The} preliminary terror, which chokes off most fifth-form
boys from even attempting to learn how to
calculate, can be abolished once for all by simply stating
what is the meaning---in common-sense terms---of the
two principal symbols that are used in calculating.

These dreadful symbols are:

(1) $d$ which merely means ''a little bit of.''

Thus $dx$ means a little bit of~$x$; or $du$ means a
little bit of~$u$. Ordinary mathematicians think it
more polite to say ''an element of,'' instead of ''a little
bit of.'' Just as you please. But you will find that
these little bits (or elements) may be considered to be
indefinitely small.

(2) $\ds\int$ which is merely a long $S$, and may be called
(if you like) ''the sum of.''

Thus $\ds\int dx$ means the sum of all the little bits
of~$x$; or $\ds\int dt$ means the sum of all the little bits
of~$t$. Ordinary mathematicians call this symbol ''the
\DPPageSep{014.png}{2}%
integral of.'' Now any fool can see that if $x$~is
considered as made up of a lot of little bits, each of
which is called~$dx$, if you add them all up together
you get the sum of all the~$dx$'s, (which is the same
thing as the whole of~$x$). The word ''integral'' simply
means ''the whole.'' If you think of the duration
of time for one hour, you may (if you like) think of
it as cut up into $3600$ little bits called seconds. The
whole of the $3600$ little bits added up together make
one hour.

When you see an expression that begins with this
terrifying symbol, you will henceforth know that it
is put there merely to give you instructions that you
are now to perform the operation (if you can) of
totalling up all the little bits that are indicated by
the symbols that follow.

That's all.
\DPPageSep{015.png}{3}%


\Chapter[DIFFERENT DEGREES OF SMALLNESS]
{II}{On Different Degrees of Smallness}

\First{We} shall find that in our processes of calculation we
have to deal with small quantities of various degrees
of smallness.

We shall have also to learn under what circumstances
we may consider small quantities to be so minute
that we may omit them from consideration. Everything
depends upon relative minuteness.

Before we fix any rules let us think of some
familiar cases. There are $60$~minutes in the hour,
$24$~hours in the day, $7$~days in the week. There are
therefore $1440$~minutes in the day and $10080$~minutes
in the week.

Obviously $1$~minute is a very small quantity of
time compared with a whole week. Indeed, our
forefathers considered it small as compared with an
% [** TN: [sic] accent, though "minùte" seems to be neither French nor Latin]
hour, and called it ''one minùte,'' meaning a minute
fraction---namely one sixtieth---of an hour. When
they came to require still smaller subdivisions of time,
they divided each minute into $60$ still smaller parts,
which, in Queen Elizabeth's days, they called ''second
minùtes''\DPnote{** TN: [sic]} (\IE~small quantities of the second order of
minuteness). Nowadays we call these small quantities
\DPPageSep{016.png}{4}%
of the second order of smallness ''seconds.'' But few
people know \emph{why} they are so called.

Now if one minute is so small as compared with a
whole day, how much smaller by comparison is one
second!

Again, think of a farthing as compared with a
sovereign: it is barely worth more than $\frac{1}{1000}$ part.
A farthing more or less is of precious little importance
compared with a sovereign: it may certainly be regarded
as a \emph{small} quantity. But compare a farthing
with £$1000$: relatively to this greater sum, the
farthing is of no more importance than $\frac{1}{1000}$ of a
farthing would be to a sovereign. Even a golden
sovereign is relatively a negligible quantity in the
wealth of a millionaire.

Now if we fix upon any numerical fraction as
constituting the proportion which for any purpose
we call relatively small, we can easily state other
fractions of a higher degree of smallness. Thus if,
for the purpose of time, $\frac{1}{60}$ be called a \emph{small} fraction,
then $\frac{1}{60}$ of $\frac{1}{60}$ (being a \emph{small} fraction of a \emph{small}
fraction) may be regarded as a \emph{small quantity of the
second order}\Pagelabel{smallness} of smallness.\footnote
  {The mathematicians talk about the second order of ''magnitude''
  (\IE~greatness) when they really mean second order of \emph{smallness}.
  This is very confusing to beginners.}

Or, if for any purpose we were to take $1$~per~cent.\
(\IE~$\frac{1}{100}$) as a \emph{small} fraction, then $1$~per~cent.\ of
$1$~per~cent.\ (\IE~$\frac{1}{10,000}$) would be a small fraction
of the second order of smallness; and $\frac{1}{1,000,000}$ would
\DPPageSep{017.png}{5}%
be a small fraction of the third order of smallness,
being $1$~per~cent.\ of $1$~per~cent.\ of $1$~per~cent.

Lastly, suppose that for some very precise purpose
we should regard $\frac{1}{1,000,000}$ as ''small.'' Thus, if a
first-rate chronometer is not to lose or gain more than
half a minute in a year, it must keep time with an
accuracy of $1$~part in $1,051,200$. Now if, for such a
purpose, we regard $\frac{1}{1,000,000}$ (or one millionth) as a
small quantity, then $\frac{1}{1,000,000}$ of $\frac{1}{1,000,000}$, that is
$\frac{1}{1,000,000,000,000}$ (or one billionth) will be a small
quantity of the second order of smallness, and may
be utterly disregarded, by comparison.

Then we see that the smaller a small quantity itself
is, the more negligible does the corresponding small
quantity of the second order become. Hence we
know that \emph{in all cases we are justified in neglecting
the small quantities of the second---or third \emph{(or
higher)}---orders}, if only we take the small quantity
of the first order small enough in itself.

But, it must be remembered, that small quantities
if they occur in our expressions as factors multiplied
by some other factor, may become important if the
other factor is itself large. Even a farthing becomes
important if only it is multiplied by a few hundred.

Now in the calculus we write $dx$ for a little bit
of~$x$. These things such as~$dx$, and~$du$, and~$dy$, are
called ''differentials,'' the differential of~$x$, or of~$u$,
or of~$y$, as the case may be. [You \emph{read} them as
\emph{dee-eks}, or \emph{dee-you}, or \emph{dee-wy}.] If $dx$ be a small bit
of~$x$, and relatively small of itself, it does not follow
\DPPageSep{018.png}{6}%
that such quantities as $x · dx$, or $x^2\, dx$, or $a^x\, dx$ are
negligible. But $dx × dx$ would be negligible, being a
small quantity of the second order.

A very simple example will serve as illustration.

Let us think of $x$ as a quantity that can grow by
a small amount so as to become $x + dx$, where $dx$~is
the small increment added by growth. The square
of this is $x^2 + 2x · dx + (dx)^2$. The second term is
not negligible because it is a first-order quantity;
while the third term is of the second order of smallness,
being a bit of,
a bit of $x^2$. Thus if we took
$dx$ to mean numerically, say, $\frac{1}{60}$~of~$x$, then the second
term would be $\frac{2}{60}$~of~$x^2$, whereas the third term would
be $\frac{1}{3600}$~of~$x^2$. This last term is clearly less important
than the second. But if we go further and take
$dx$ to mean only $\frac{1}{1000}$~of~$x$, then the second term
will be $\frac{2}{1000}$~of~$x^2$, while the third term will be
only $\frac{1}{1,000,000}$~of~$x^2$.

\Figure[1.5in]{018a}{1}

Geometrically this may be depicted as follows:
Draw a square (\Fig{1}) the side of which we will
take to represent~$x$. Now suppose the square to
grow by having a bit~$dx$ added to its size each
\DPPageSep{019.png}{7}%
way. The enlarged square is made up of the original
square~$x^2$, the two rectangles at the top and on the
right, each of which is of area $x · dx$ (or together
$2x · dx$), and the little square at the top right-hand
corner which is~$(dx)^2$. In \Fig{2} we have taken $dx$ as
\Figures[]{019a}{019b}{2}{3}
quite a big fraction of $x$---about~$\frac{1}{5}$. But suppose we
had taken it only $\frac{1}{100}$---about the thickness of an
inked line drawn with a fine pen. Then the little
corner square will have an area of only $\frac{1}{10,000}$ of~$x^2$,
and be practically invisible. Clearly $(dx)^2$ is negligible
if only we consider the increment~$dx$ to be itself
small enough.

Let us consider a simile.

Suppose a millionaire were to say to his secretary:
next week I will give you a small fraction of any
money that comes in to me. Suppose that the
secretary were to say to his boy: I will give you a
small fraction of what I get. Suppose the fraction
in each case to be $\frac{1}{100}$ part. Now if Mr.~Millionaire
received during the next week £$1000$, the secretary
\DPPageSep{020.png}{8}%
would receive £$10$ and the boy $2$~shillings. Ten
pounds would be a small quantity compared with
£$1000$; but two shillings is a small small quantity
indeed, of a very secondary order. But what would
be the disproportion if the fraction, instead of being~$\frac{1}{100}$,
had been settled at $\frac{1}{1000}$ part? Then, while
Mr.~Millionaire got his £$1000$, Mr.~Secretary would
get only~£$1$, and the boy less than one farthing!

The witty Dean Swift\footnote
  {\textit{On Poetry: a Rhapsody} (p.~20), printed 1733---usually misquoted.}
once wrote:\enlargethispage{12pt}
\begin{center}\small%
\settowidth{\TmpLen}{''And these have smaller Fleas to bite 'em,}%
\begin{minipage}{\TmpLen}\raggedright
''So, Nat'ralists observe, a Flea\\
''Hath smaller Fleas that on him prey.\\
''And these have smaller Fleas to bite 'em,\\
''And so proceed \textit{ad infinitum}.''
\end{minipage}
\end{center}

An ox might worry about a flea of ordinary
size---a small creature of the first order of smallness.
But he would probably not trouble himself about a
flea's flea; being of the second order of smallness, it
would be negligible. Even a gross of fleas' fleas
would not be of much account to the ox.
\DPPageSep{021.png}{9}%


\Chapter{III}{On Relative Growings}

\First{All} through the calculus we are dealing with quantities
that are growing, and with rates of growth.
We classify all quantities into two classes: \emph{constants}
and \emph{variables}. Those which we regard as of fixed
value, and call \emph{constants}, we generally denote algebraically
by letters from the beginning of the
alphabet, such as $a$,~$b$, or~$c$; while those which we
consider as capable of growing, or (as mathematicians
say) of ''varying,'' we denote by letters from the end
of the alphabet, such as $x$,~$y$,~$z$, $u$,~$v$,~$w$, or sometimes~$t$.

Moreover, we are usually dealing with more than
one variable at once, and thinking of the way in
which one variable depends on the other: for instance,
we think of the way in which the height reached
by a projectile depends on the time of attaining that
height. Or we are asked to consider a rectangle of
given area, and to enquire how any increase in the
length of it will compel a corresponding decrease in
the breadth of it. Or we think of the way in which
any variation in the slope of a ladder will cause the
height that it reaches,\DPnote{** TN: [sic], awkward, but serves a purpose} to vary.

Suppose we have got two such variables that
\DPPageSep{022.png}{10}%
depend one on the other. An alteration in one will
bring about an alteration in the other, \emph{because} of this
dependence. Let us call one of the variables~$x$, and
the other that depends on it~$y$.

Suppose we make $x$ to vary, that is to say, we
either alter it or imagine it to be altered, by adding
to it a bit which we call~$dx$. We are thus causing $x$
to become $x + dx$. Then, because $x$~has been altered,
$y$~will have altered also, and will have become $y + dy$.
Here the bit~$dy$ may be in some cases positive, in
others negative; and it won't (except by a miracle) be
the same size as~$dx$.


\Subsection{Take two examples.}
(1) Let $x$ and $y$ be respectively the base and the
height of a right-angled triangle (\Fig{4}), of which
\Figure[2.5in]{022a}{4}
the slope of the other side is fixed at~$30°$. If we
suppose this triangle to expand and yet keep its
angles the same as at first, then, when the base grows
so as to become $x + dx$, the height becomes $y + dy$.
Here, increasing~$x$ results in an increase of~$y$. The
little triangle, the height of which is~$dy$, and the base
\DPPageSep{023.png}{11}%
of which is~$dx$, is similar to the original triangle; and
it is obvious that the value of the ratio $\dfrac{dy}{dx}$ is the
same as that of the ratio $\dfrac{y}{x}$. As the angle is~$30°$ it
will be seen that here
\[
\frac{dy}{dx} = \frac{1}{1.73}.
\]

(2) Let $x$ represent, in \Fig{5}, the horizontal distance,
from a wall, of the bottom end of a ladder,~$AB$,
\Figure[2in]{023a}{5}
of fixed length; and let $y$~be the height it
reaches up the wall. Now $y$~clearly depends on~$x$.
It is easy to see that, if we pull the bottom end~$A$ a
bit further from the wall, the top end~$B$ will come
down a little lower. Let us state this in scientific
language. If we increase $x$~to $x + dx$, then $y$~will
become $y - dy$; that is, when $x$~receives a positive
\DPPageSep{024.png}{12}%
increment, the increment which results to~$y$ is
negative.

Yes, but how much? Suppose the ladder was so
long that when the bottom end~$A$ was $19$~inches from
the wall the top end~$B$ reached just $15$~feet from the
ground. Now, if you were to pull the bottom end
out $1$~inch more, how much would the top end come
down? Put it all into inches: $x = 19$ inches, $y = 180$
inches. Now the increment of~$x$ which we call~$dx$,
is $1$~inch: or $x + dx = 20$ inches.

How much will~$y$ be diminished? The new height
will be $y - dy$. If we work out the height by Euclid
I.~47, then we shall be able to find how much $dy$~will
be. The length of the ladder is
\[
\sqrt{ (180)^2 + (19)^2 } = 181 \text{ inches}.
\]
Clearly then, the new height, which is $y - dy$, will be
such that
\begin{align*}
(y - dy)^2 &= (181)^2 - (20)^2 = 32761 - 400 = 32361,   \\
y - dy     &= \sqrt{32361} = 179.89 \text{ inches}.
\end{align*}
Now $y$ is $180$, so that $dy$ is $180 - 179.89 = 0.11$ inch.

So we see that making $dx$ an increase of $1$~inch
has resulted in making $dy$ a decrease of $0.11$~inch.

And the ratio of $dy$~to~$dx$ may be stated thus:
\[
\frac{dy}{dx} = - \frac{0.11}{1}.
\]

It is also easy to see that (except in one particular
position) $dy$~will be of a different size from~$dx$.

Now right through the differential calculus we
are hunting, hunting, hunting for a curious thing,
\DPPageSep{025.png}{13}%
a mere ratio, namely, the proportion which $dy$~bears
to~$dx$ when both of them are indefinitely
small.

It should be noted here that we can only find
this ratio~$\dfrac{dy}{dx}$ when $y$~and~$x$ are related to each
other in some way, so that whenever $x$~varies $y$~does
vary also. For instance, in the first example just
taken, if the base~$x$ of the triangle be made longer,
the height~$y$ of the triangle becomes greater also,
and in the second example, if the distance~$x$ of the
foot of the ladder from the wall be made to increase,
the height~$y$ reached by the ladder decreases in a
corresponding manner, slowly at first, but more and
more rapidly as $x$~becomes greater. In these cases
the relation between $x$~and~$y$ is perfectly definite,
it can be expressed mathematically, being $\dfrac{y}{x} = \tan 30°$
and $x^2 + y^2 = l^2$ (where $l$~is the length of the ladder)
respectively, and $\dfrac{dy}{dx}$ has the meaning we found in
each case.

If, while $x$ is, as before, the distance of the foot
of the ladder from the wall, $y$~is, instead of the
height reached, the horizontal length of the wall, or
the number of bricks in it, or the number of years
since it was built, any change in~$x$ would naturally
cause no change whatever in~$y$; in this case $\dfrac{dy}{dx}$ has
no meaning whatever, and it is not possible to find
\DPPageSep{026.png}{14}%
an expression for it. Whenever we use differentials
$dx$,~$dy$, $dz$,~etc., the existence of some kind of
relation between $x$,~$y$, $z$,~etc., is implied, and this
relation is called a ''function''\Pagelabel{function} in $x$,~$y$, $z$, etc.; the
two expressions given above, for instance, namely
$\dfrac{y}{x} = \tan 30°$ and $x^2 + y^2 = l^2$, are functions of $x$~and~$y$.
Such expressions contain implicitly (that is, contain
without distinctly showing it) the means of expressing
either $x$ in terms of~$y$ or $y$~in terms of~$x$, and for
this reason they are called \emph{implicit functions} in
$x$~and~$y$; they can be respectively put into the forms
\begin{DPalign*}
y &= x \tan 30° \quad\text{or}\quad x = \frac{y}{\tan 30°} \\
\lintertext{and}
y &= \sqrt{ l^2 - x^2} \quad\text{or}\quad x = \sqrt{ l^2 - y^2}.
\end{DPalign*}

These last expressions state explicitly (that is, distinctly)
the value of $x$ in terms of~$y$, or of $y$ in terms
of~$x$, and they are for this reason called \emph{explicit
functions} of $x$~or~$y$. For example $x^2 + 3 = 2y - 7$ is
an implicit function in $x$~and~$y$; it may be written
$y = \dfrac{x^2 + 10}{2}$ (explicit function of~$x$) or $x = \sqrt{2y - 10}$
(explicit function of~$y$). We see that an explicit
function in $x$,~$y$, $z$,~etc., is simply something the
value of which changes when $x$,~$y$, $z$,~etc., are
changing, either one at the time or several together.
Because of this, the value of the explicit function is
called the \emph{dependent variable}, as it depends on the
value of the other variable quantities in the function;
\DPPageSep{027.png}{15}%
these other variables are called the \emph{independent
variables}\Pagelabel{indvar} because their value is not determined from
the value assumed by the function. For example,
if $u = x^2 \sin \theta$, $x$~and~$\theta$ are the independent variables,
and $u$~is the dependent variable.

Sometimes the exact relation between several
quantities $x$,~$y$,~$z$ either is not known or it is not
convenient to state it; it is only known, or convenient
to state, that there is some sort of relation
between these variables, so that one cannot alter
either $x$ or $y$ or $z$ singly without affecting the other
quantities; the existence of a function in $x$,~$y$,~$z$ is
then indicated by the notation\Pagelabel{notation} $F(x, y, z)$ (implicit
function) or by $x = F(y, z)$, $y = F(x, z)$ or $z = F(x, y)$
(explicit function). Sometimes the letter~$f$ or $\phi$ is used
instead of~$F$, so that $y = F(x)$, $y = f(x)$ and $y = \phi(x)$
all mean the same thing, namely, that the value of~$y$
depends on the value of~$x$ in some way which is
not stated.

We call the ratio $\dfrac{dy}{dx}$ ''the \emph{differential coefficient} of~$y$
with respect to~$x$.'' It is a solemn scientific name
for this very simple thing. But we are not going
to be frightened by solemn names, when the things
themselves are so easy. Instead of being frightened
we will simply pronounce a brief curse on the
stupidity of giving long crack-jaw names; and, having
relieved our minds, will go on to the simple thing
itself, namely the ratio~$\dfrac{dy}{dx}$.
\DPPageSep{028.png}{16}%

In ordinary algebra which you learned at school,
you were always hunting after some unknown
quantity which you called $x$ or~$y$; or sometimes
there were two unknown quantities to be hunted
for simultaneously. You have now to learn to go
hunting in a new way; the fox being now neither
$x$ nor~$y$. Instead of this you have to hunt for this
curious cub called~$\dfrac{dy}{dx}$. The process of finding the
value of~$\dfrac{dy}{dx}$ is called ''differentiating.'' But, remember,
what is wanted is the value of this ratio when both
$dy$~and~$dx$ are themselves indefinitely small. The
true value of the differential coefficient is that to which
it approximates in the limiting case when each of
them is considered as infinitesimally minute.

Let us now learn how to go in quest of~$\dfrac{dy}{dx}$.
\DPPageSep{029.png}{17}%


\Note{NOTE TO CHAPTER III.}

\Section{How to read Differentials.}

It will never do to fall into the schoolboy error of
thinking that $dx$ means $d$~times~$x$, for $d$ is not a
factor---it means ''an element of'' or ''a bit of''
whatever follows. One reads $dx$ thus: ''dee-eks.''

In case the reader has no one to guide him in such
matters it may here be simply said that one reads
differential coefficients in the following way. The
differential coefficient
\begin{DPgather*}%[** Abuse of semantics]
\dfrac{dy}{dx}
\text{ is read ''\emph{dee-wy by dee-eks,}'' or ''\emph{dee-wy over
dee-eks.}''} \\
\lintertext{\rlap{So also}}
\dfrac{du}{dt} \text{ is read ''\emph{dee-you by dee-tee.}''}
\end{DPgather*}

Second differential coefficients will be met with
later on. They are like this:
\[
\dfrac{d^2 y}{dx^2};
\text{ which is read ''\emph{dee-two-wy over dee-eks-squared},''}
\]
and it means that the operation of differentiating~$y$
with respect to~$x$ has been (or has to be) performed
twice over.

Another way of indicating that a function has been
differentiated is by putting an accent to the symbol of
the function. Thus if $y=F(x)$, which means that $y$
is some unspecified function of~$x$ (see \Pageref{function}), we may
write $F'(x)$ instead of $\dfrac{d\bigl(F(x)\bigr)}{dx}$. Similarly, $F''(x)$
will mean that the original function~$F(x)$ has been
differentiated twice over with respect to~$x$.
\DPPageSep{030.png}{18}%


\Chapter{IV}{Simplest Cases}

\First{Now} let us see how, on first principles, we can
differentiate some simple algebraical expression.

\Case{1}
Let us begin with the simple expression $y=x^2$.
Now remember that the fundamental notion about
the calculus is the idea of \emph{growing}. Mathematicians
call it \emph{varying}. Now as $y$~and~$x^2$ are equal to one
another, it is clear that if $x$~grows, $x^2$~will also grow.
And if $x^2$~grows, then $y$~will also grow. What we
have got to find out is the proportion between the
growing of~$y$ and the growing of~$x$. In other words
our task is to find out the ratio between $dy$~and~$dx$,
or, in brief, to find the value of~$\dfrac{dy}{dx}$.

Let $x$, then, grow a little bit bigger and become
$x + dx$; similarly, $y$~will grow a bit bigger and will
become $y + dy$. Then, clearly, it will still be true
that the enlarged~$y$ will be equal to the square of the
enlarged~$x$. Writing this down, we have:
\begin{align*}
y + dy &= (x + dx)^2.
\intertext{\indent Doing the squaring we get:}
y + dy &= x^2 + 2x · dx+(dx)^2.
\end{align*}
\DPPageSep{031.png}{19}%

What does $(dx)^2$ mean? Remember that $dx$ meant
a bit---a little bit---of~$x$. Then $(dx)^2$~will mean a little
bit of a little bit of~$x$; that is, as explained above
(\Pageref{smallness}), it is a small quantity of the second order
of smallness. It may therefore be discarded as quite
inconsiderable in comparison with the other terms.
Leaving it out, we then have:\Pagelabel{diffexample}%
\begin{align*}
y + dy &= x^2 + 2x · dx. \displaybreak[1] \\
\intertext{\indent Now $y=x^2$; so let us subtract this from the equation
and we have left}
dy &= 2x · dx. \displaybreak[1] \\
\intertext{\indent Dividing across by $dx$, we find}
\frac{dy}{dx} &= 2x.
\end{align*}

Now \emph{this}\footnote
  {\NB---This ratio $\dfrac{dy}{dx}$ is the result of differentiating $y$ with
  respect to $x$. Differentiating means finding the differential coefficient.
  Suppose we had some other function of~$x$, as, for
  example, $u = 7x^2 + 3$. Then if we were told to differentiate this
  with respect to~$x$, we should have to find $\dfrac{du}{dx}$, or, what is the same
  thing, $\dfrac{d(7x^2 + 3)}{dx}$. On the other hand, we may have a case in which
  time was the independent variable (see \Pageref{indvar}), such as this:
  $y = b + \frac{1}{2} at^2$. Then, if we were told to differentiate it, that means we
  must find its differential coefficient with respect to~$t$. So that then
  our business would be to try to find $\dfrac{dy}{dt}$, that is, to find
  $\dfrac{d(b + \frac{1}{2} at^2)}{dt}$.}
is what we set out to find. The ratio of
the growing of $y$ to the growing of $x$ is, in the case
before us, found to be $2x$.
\DPPageSep{032.png}{20}%


\Subsection{Numerical example.}
Suppose $x=100$ and $\therefore y=10,000$. Then let $x$ grow
till it becomes $101$ (that is, let $dx=1$). Then the
enlarged~$y$ will be $101 × 101 = 10,201$. But if we agree
that we may ignore small quantities of the second
order, $1$~may be rejected as compared with $10,000$; so
we may round off the enlarged~$y$ to $10,200$. $y$~has
grown from $10,000$ to $10,200$; the bit added on is~$dy$,
which is therefore~$200$.

$\dfrac{dy}{dx} = \dfrac{200}{1} = 200$. According to the algebra-working
of the previous paragraph, we find $\dfrac{dy}{dx} = 2x$. And so
it is; for $x=100$ and $2x=200$.

But, you will say, we neglected a whole unit.

Well, try again, making $dx$ a still smaller bit.

Try $dx=\frac{1}{10}$. Then $x+dx=100.1$, and
\[
(x+dx)^2 = 100.1 × 100.1 = 10,020.01.
\]

Now the last figure $1$ is only one-millionth part of
the $10,000$, and is utterly negligible; so we may
take $10,020$ without the little decimal at the end.
And this makes $dy=20$; and $\dfrac{dy}{dx} = \dfrac{20}{0.1} = 200$, which
is still the same as~$2x$.

\Case{2}
Try differentiating $y = x^3$ in the same way.

We let $y$ grow to $y+dy$, while $x$~grows to~$x+dx$.

Then we have
\[
y + dy = (x + dx)^3.
\]
\DPPageSep{033.png}{21}%

Doing the cubing we obtain
\[
y + dy = x^3 + 3x^2 · dx + 3x(dx)^2+(dx)^3.
\]

Now we know that we may neglect small quantities
of the second and third orders; since, when $dy$~and~$dx$
are both made indefinitely small, $(dx)^2$~and~$(dx)^3$
will become indefinitely smaller by comparison. So,
regarding them as negligible, we have left:
\[
y + dy=x^3+3x^2 · dx.
\]

But $y=x^3$; and, subtracting this, we have:
\begin{DPalign*}
dy &= 3x^2 · dx, \\
\lintertext{and}
\frac{dy}{dx} &= 3x^2.
\end{DPalign*}

\Case{3}
Try differentiating $y=x^4$. Starting as before by
letting both $y$~and~$x$ grow a bit, we have:
\begin{DPalign*}
y + dy &= (x+dx)^4. \displaybreak[1] \\
%
\intertext{\indent Working out the raising to the fourth power, we get}
y + dy &= x^4 + 4x^3\, dx + 6x^2(dx)^2 + 4x(dx)^3+(dx)^4. \displaybreak[1] \\
%
\intertext{\indent Then striking out the terms containing all the
higher powers of~$dx$, as being negligible by comparison,
we have}
y + dy &= x^4+4x^3\, dx. \displaybreak[1] \\
%
\intertext{\indent Subtracting the original $y=x^4$, we have left}
dy &= 4x^3\, dx, \\
\lintertext{and}
\frac{dy}{dx} &= 4x^3.
\end{DPalign*}

\tb
\DPPageSep{034.png}{22}%

Now all these cases are quite easy. Let us collect
the results to see if we can infer any general rule.
Put them in two columns, the values of~$y$ in one
and the corresponding values found for~$\dfrac{dy}{dx}$ in the
other: thus
\[
\begin{array}{|@{\quad}c@{\quad}|@{\quad}l@{\quad}|}
\hline
y   & \DStrut\dfrac{dy}{dx} \\
\hline
x^2 & 2x \Strut \\
x^3 & 3x^2  \\
x^4 & 4x^3  \\
\hline
\end{array}
\]

\Pagelabel{diffrule1}%
Just look at these results: the operation of differentiating
appears to have had the effect of diminishing
the power of~$x$ by~$1$ (for example in the last case
reducing $x^4$ to~$x^3$), and at the same time multiplying
by a number (the same number in fact which originally
appeared as the power). Now, when you have once
seen this, you might easily conjecture how the others
will run. You would expect that differentiating $x^5$
would give~$5x^4$, or differentiating $x^6$ would give~$6x^5$.
If you hesitate, try one of these, and see whether
the conjecture comes right.

Try $y = x^5$.
\begin{DPalign*}
\lintertext{\indent Then}
y+dy &= (x+dx)^5     \\
     &= x^5 + 5x^4\, dx + 10x^3(dx)^2  + 10x^2(dx)^3 \\
     &\phantom{{}= x^5 + 5x^4\, dx} + 5x(dx)^4 + (dx)^5.
\end{DPalign*}

Neglecting all the terms containing small quantities
of the higher orders, we have left
\begin{DPalign*}
y + dy &= x^5 + 5x^4\, dx, \displaybreak[1] \\
\DPPageSep{035.png}{23}%
\lintertext{\rlap{and subtracting}}
y &= x^5 \text{ leaves us} \\
dy &= 5x^4\, dx, \displaybreak[1] \\
\lintertext{whence}
\frac{dy}{dx} &= 5x^4, \text{ exactly as we supposed.}
\end{DPalign*}

\tb

Following out logically our observation, we should
conclude that if we want to deal with any higher
power,---call it $n$---we could tackle it in the same
way.
\begin{DPalign*}
\lintertext{\indent Let}
y &= x^n, \\
\intertext{then, we should expect to find that}
\frac{dy}{dx} &= nx^{(n-1)}.
\end{DPalign*}

For example, let $n=8$, then $y=x^8$; and differentiating
it would give $\dfrac{dy}{dx} = 8x^7$.

And, indeed, the rule that differentiating $x^n$ gives as
the result $nx^{n-1}$ is true for all cases where $n$ is a
whole number and positive. [Expanding $(x + dx)^n$ by
the binomial theorem will at once show this.] But
the question whether it is true for cases where $n$
has negative or fractional values requires further
consideration.


\Subsection{Case of a negative power.}
Let $y = x^{-2}$. Then proceed as before:
\begin{align*}
y+dy &= (x+dx)^{-2} \\
     &= x^{-2} \left(1 + \frac{dx}{x}\right)^{-2}.
\end{align*}
\DPPageSep{036.png}{24}%
Expanding this by the binomial theorem (see \Pageref{binomtheo}),
we get
\begin{align*}
&=x^{-2} \left[1 - \frac{2\, dx}{x} +
    \frac{2(2+1)}{1×2} \left(\frac{dx}{x}\right)^2 -
    \text{etc.}\right]  \\
&=x^{-2} - 2x^{-3} · dx + 3x^{-4}(dx)^2 - 4x^{-5}(dx)^3 + \text{etc.} \\
\intertext{%
\indent So, neglecting the small quantities of higher orders
of smallness, we have:}
       y + dy &= x^{-2} - 2x^{-3} · dx.
\intertext{Subtracting the original $y = x^{-2}$, we find}
           dy &= -2x^{-3}dx,   \\
\frac{dy}{dx} &= -2x^{-3}.
\end{align*}
And this is still in accordance with the rule inferred
above.


\Subsection{Case of a fractional power.}
Let $y= x^{\efrac{1}{2}}$. Then, as before,
\settowidth{\TmpLen}{terms with higher}%
\begin{align*}
y+dy &= (x+dx)^{\efrac{1}{2}} = x^{\efrac{1}{2}}
        \left(1 + \frac{dx}{x} \right)^{\efrac{1}{2}} \\
     &= \sqrt{x} + \frac{1}{2} \frac{dx}{\sqrt{x}} - \frac{1}{8}
        \frac{(dx)^2}{x\sqrt{x}} +
        \raisebox{-1.5ex}{\parbox[c]{\TmpLen}{\begin{center}
          terms with higher\\
          powers of $dx$.\end{center}}}\DPnote{[ **\raisebox optional]}
\end{align*}

Subtracting the original $y = x^{\efrac{1}{2}}$, and neglecting higher
powers we have left:
\[
dy = \frac{1}{2} \frac{dx}{\sqrt{x}} = \frac{1}{2} x^{-\efrac{1}{2}} · dx,
\]
and $\dfrac{dy}{dx} = \dfrac{1}{2} x^{-\efrac{1}{2}}$. Agreeing with the general rule.
\DPPageSep{037.png}{25}%

\Paragraph{Summary.} Let us see how far we have got. We
have arrived at the following rule:\Pagelabel{multipow} To differentiate~$x^n$,
multiply by the power and reduce the power by
one, so giving us~$nx^{n-1}$ as the result.


\Exercises{I} (See \Pageref{AnsEx:I} for Answers.)

Differentiate the following:
\begin{Problems}[2]
\Item{(1)} $y = x^{13}$
\Item{(2)} $y = x^{-\efrac{3}{2}}$
\ResetCols{2}

\Item{(3)} $y = x^{2a}$
\Item{(4)} $u = t^{2.4}$
\ResetCols{2}

\Item{(5)} $z = \sqrt[3]{u}$
\Item{(6)} $y = \sqrt[3]{x^{-5}}$
\ResetCols{2}

\Item{(7)} $u = \sqrt[5]{\dfrac{1}{x^8}}$
\Item{(8)} $y = 2x^a$\DPtypo{.}{}
\ResetCols{2}

\Item{(9)} $y = \sqrt[q]{x^3}$
\Item{(10)} $y = \sqrt[n]{\dfrac{1}{x^m}}$
\end{Problems}

\textit{You have now learned how to differentiate powers
of~$x$. How easy it is!}
\DPPageSep{038.png}{26}%


\Chapter[WHAT TO DO WITH CONSTANTS]
{V}{Next Stage. What to do with Constants}

\First{In} our equations we have regarded $x$ as growing,
and as a result of $x$ being made to grow $y$ also
changed its value and grew. We usually think of $x$
as a quantity that we can vary; and, regarding the
variation of~$x$ as a sort of \emph{cause}, we consider the resulting
variation of~$y$ as an \emph{effect}. In other words, we
regard the value of~$y$ as depending on that of~$x$. Both
$x$~and~$y$ are variables, but $x$ is the one that we operate
upon, and $y$~is the ''dependent variable.'' In all the
preceding chapter\DPnote{** TN: [sic], i.e., _throughout_ the preceding chapter} we have been trying to find out
rules for the proportion which the dependent variation
in $y$~bears to the variation independently made in~$x$.

\Pagelabel{diffrule2}%
Our next step is to find out what effect on the
process of differentiating is caused by the presence of
\emph{constants}, that is, of numbers which don't change
when $x$~or~$y$ change their values.


\Subsection{Added Constants.}\Pagelabel{addconst}
Let us begin with some simple case of an added
constant, thus:
\begin{DPalign*}
\lintertext{\indent Let}
y=x^3+5.
\end{DPalign*}
Just as before, let us suppose $x$ to grow to~$x+dx$ and
$y$ to grow to~$y+dy$.
\DPPageSep{039.png}{27}%
\begin{DPalign*}
\lintertext{\indent Then:}
y + dy &= (x + dx)^3 + 5 \\
       &= x^3 + 3x^2\, dx + 3x(dx)^2 + (dx)^3 + 5.
\intertext{Neglecting the small quantities of higher orders, this
becomes}
y + dy &= x^3 + 3x^2·dx + 5. \\
\intertext{Subtract the original $y = x^3 + 5$, and we have left:}
dy &= 3x^2\, dx. \\
\frac{dy}{dx} &= 3x^2.
\end{DPalign*}

So the $5$ has quite disappeared. It added nothing
to the growth of~$x$, and does not enter into the
differential coefficient. If we had put~$7$, or~$700$, or
any other number, instead of~$5$, it would have disappeared.
So if we take the letter~$a$, or~$b$, or~$c$ to
represent any constant, it will simply disappear when
we differentiate.

If the additional constant had been of negative value,
such as $-5$~or~$-b$, it would equally have disappeared.


\Subsection{Multiplied Constants.}
Take as a simple experiment this case:

Let $y = 7x^2$. \\
Then on \DPtypo{proceding}{proceeding} as before we get:
\begin{align*}
y + dy &= 7(x+dx)^2 \\
       &= 7\{x^2 + 2x·dx + (dx)^2\} \\
       &= 7x^2 + 14x·dx + 7(dx)^2. \\
\intertext{Then, subtracting the original $y = 7x^2$, and neglecting
the last term, we have}
dy &= 14x·dx.\\
\frac{dy}{dx} &= 14x.
\end{align*}
\DPPageSep{040.png}{28}%

Let us illustrate this example by working out the
graphs of the equations $y = 7x^2$ and $\dfrac{dy}{dx} = 14x$, by
assigning to~$x$ a set of successive values, $0$,~$1$, $2$, $3$,~etc.,
and finding the corresponding values of~$y$ and of~$\dfrac{dy}{dx}$.

These values we tabulate as follows:
\[
\begin{array}{|c||*{6}{r|}|*{3}{r|}}
\hline
\Strut
\Td[c]{x} & \Td[c]{0} & \Td{1} & \Td{2} & \Td{3} & \Td{4} & \Td{5} & \Td{-1} & \Td{-2} & \Td{-3} \\
\hline
\Strut
\Td[c]{y} & \Td[c]{0} & \Td{7} & \Td{28} & \Td{63} & \Td{112} & \Td{175} & \Td{7} & \Td{28} & \Td{63} \\
\hline
\DStrut
\Td[c]{\dfrac{dy}{dx}}
  & \Td[c]{0} & \Td{14} & \Td{28} & \Td{42} & \Td{56} & \Td{70} & \Td{-14} & \Td{-28} & \Td{-42} \\
\hline
\end{array}
\]

%[** TN: Include manually in order to adjust caption heights to match]
\begin{figure}[hbt]
  \centering%
  \makebox[0pt][c]{%
    \raisebox{5pt}{\Graphic[2.5in]{040a}}\qquad\Graphic[2.5in]{040b}%
  }%
  \phantomsection\label{fig:6}\label{fig:6a}%
\end{figure}%

Now plot these values to some convenient scale,
and we obtain the two curves, \Figs{6}{and}{6a}.
\DPPageSep{041.png}{29}%

Carefully compare the two figures, and verify by
inspection that the height of the ordinate of the
derived curve, \Fig{6a}, is proportional to the \emph{slope} of
the original curve,\footnote
  {See \Pageref{slope} about \emph{slopes} of curves.}
\Fig{6}, at the corresponding value
of~$x$. To the left of the origin, where the original
curve slopes negatively (that is, downward from left
to right) the corresponding ordinates of the derived
curve are negative.

\Pagelabel{differ}%
Now if we look back at \Pageref{diffexample}, we shall see that
simply differentiating~$x^2$ gives us~$2x$. So that the
differential coefficient of~$7x^2$ is just $7$~times as big as
that of~$x^2$. If we had taken~$8x^2$, the differential
coefficient would have come out eight times as great
as that of~$x^2$. If we put $y = ax^2$, we shall get
\[
\frac{dy}{dx} = a × 2x.
\]

If we had begun with $y = ax^n$, we should have had
$\dfrac{dy}{dx} = a×nx^{n-1}$. So that any mere multiplication by
a constant reappears as a mere multiplication when
the thing is differentiated. And, what is true about
multiplication is equally true about \emph{division}: for if,
in the example above, we had taken as the constant~$\frac{1}{7}$
instead of~$7$, we should have had the same~$\frac{1}{7}$ come
out in the result after differentiation.
\DPPageSep{042.png}{30}%


\Examples{Some Further Examples.}
The following further examples, fully worked out,
will enable you to master completely the process of
differentiation as applied to ordinary algebraical expressions,
and enable you to work out by yourself the
examples given at the end of this chapter.

(1) Differentiate $y = \dfrac{x^5}{7} - \dfrac{3}{5}$.

$\dfrac{3}{5}$ is an added constant and vanishes (see \Pageref{addconst}).

We may then write at once
\begin{DPgather*}
\frac{dy}{dx} = \frac{1}{7} × 5 × x^{5-1}, \\
\lintertext{or}
\frac{dy}{dx} = \frac{5}{7} x^4.
\end{DPgather*}

(2) Differentiate $y = a\sqrt{x} - \dfrac{1}{2}\sqrt{a}$.

The term~$\dfrac{1}{2}\sqrt{a}$ vanishes, being an added constant;
and as~$a\sqrt{x}$, in the index form, is written~$ax^{\efrac{1}{2}}$, we
have
\begin{DPgather*}
\frac{dy}{dx}
  = a × \frac{1}{2} × x^{\efrac{1}{2}-1}
  =     \frac{a}{2} × x^{-\efrac{1}{2}}, \\
\lintertext{or}
\frac{dy}{dx} = \frac{a}{2\sqrt{x}}.
\end{DPgather*}

(3) If $ay + bx = by - ax + (x+y)\sqrt{a^2 - b^2}$, \\ %[** TN: Line break in the orignal]
find the differential coefficient of~$y$ with respect to~$x$.

As a rule an expression of this kind will need a
little more knowledge than we have acquired so far;
\DPPageSep{043.png}{31}%
it is, however, always worth while to try whether the
expression can be put in a simpler form.

First we must try to bring it into the form $y = {}$ some
expression involving $x$~only.

The expression may be written
\[
(a-b)y + (a + b)x = (x+y) \sqrt{a^2 - b^2}.
\]

Squaring, we get%[** TN: Not breaking the next equation]
\[
(a-b)^2 y^2 + (a + b)^2 x^2 + 2(a+b)(a-b)xy = (x^2+y^2+2xy)(a^2-b^2),
\]
which simplifies to
\BindMath{%
\begin{DPalign*}
(a-b)^2y^2 + (a+b)^2 x^2 &= x^2(a^2 - b^2) + y^2(a^2 - b^2); \\
\lintertext{or}
[(a-b)^2 - (a^2 - b^2)]y^2 &= [(a^2 - b^2) - (a+b)^2]x^2, \\
\lintertext{that is}
2b(b-a)y^2 &= -2b(b+a)x^2;
\end{DPalign*}
\begin{DPgather*}
\lintertext{hence}
y = \sqrt{\frac{a+b}{a-b}} x \quad\text{and}\quad \frac{dy}{dx} = \sqrt{\frac{a+b}{a-b}}.
\end{DPgather*}}

(4) The volume of a cylinder of radius~$r$ and height~$h$
is given by the formula $V = \pi r^2 h$. Find the rate of
variation of volume with the radius when $r = 5.5$~in.\
and $h=20$~in. If $r = h$, find the dimensions of the
cylinder so that a change of $1$~in.\ in radius causes a
change of $400$~cub.~in.\ in the volume.

The rate of variation of~$V$ with regard to~$r$ is
\[
\frac{dV}{dr} = 2 \pi r h.
\]

If $r = 5.5$~in.\ and $h=20$~in.\ this becomes $690.8$. It
means that a change of radius of $1$~inch will cause a
change of volume of $690.8$~cub.~inch. This can be
easily verified, for the volumes with $r = 5$~and $r = 6$
\DPPageSep{044.png}{32}%
are $1570$~cub.~in.\ and $2260.8$~cub.~in.\ respectively, and
$2260.8 - 1570 = 690.8$.

Also, if
\[
r=h,\quad \dfrac{dV}{dr} = 2\pi r^2 = 400\quad \text{and}\quad r = h = \sqrt{\dfrac{400}{2\pi}} = 7.98~\text{in}.
\]

(5) The reading~$\theta$ of a Féry's Radiation pyrometer
is related to the Centigrade temperature~$t$ of the
observed body by the relation
\[
\dfrac{\theta}{\theta_1} = \left(\dfrac{t}{t_1}\right)^4,
\]
where $\theta_1$ is the reading corresponding to a known temperature~$t_1$
of the observed body.

Compare the sensitiveness of the pyrometer at
temperatures $800°$\;C., $1000°$\;C., $1200°$\;C., given that it
read~$25$ when the temperature was $1000°$\;C.

The sensitiveness is the rate of variation of the
reading with the temperature, that is~$\dfrac{d\theta}{dt}$. The formula
may be written
\[
\theta = \dfrac{\theta_1}{t_1^4} t^4 = \dfrac{25t^4}{1000^4},
\]
and we have
\[
\dfrac{d\theta}{dt} = \dfrac{100t^3}{1000^4} = \dfrac{t^3}{10,000,000,000}.
\]

When $t=800$, $1000$ and~$1200$, we get $\dfrac{d\theta}{dt} = 0.0512$, $0.1$~and
$0.1728$ respectively.

The sensitiveness is approximately doubled from
$800°$~to $1000°$, and becomes three-quarters as great
again up to~$1200°$.
\DPPageSep{045.png}{33}%


\Exercises{II} (See \Pageref{AnsEx:II} for Answers.)

Differentiate the following:
\begin{Problems}[2]
\Item{(1)} $y = ax^3 + 6$.
\Item{(2)} $y = 13x^{\efrac{3}{2}} - c$.
\ResetCols{2}

\Item{(3)} $y = 12x^{\efrac{1}{2}} + c^{\efrac{1}{2}}$.
\Item{(4)} $y = c^{\efrac{1}{2}} x^{\efrac{1}{2}}$.
\ResetCols{2}

\Item{(5)} $u = \dfrac{az^n - 1}{c}$.
\Item{(6)} $y = 1.18t^2 + 22.4$.
\end{Problems}

Make up some other examples for yourself, and try
your hand at differentiating them.

\begin{Problems}
\Item{(7)} If $l_t$~and $l_0$ be the lengths of a rod of iron at
the temperatures $t°$\;C.~and $0°$\;C. respectively, then
$l_t = l_0(1 + 0.000012t)$. Find the change of length of the
rod per degree Centigrade.

\Item{(8)} It has been found that if $c$~be the candle power
of an incandescent electric lamp, and~$V$ be the voltage,
$c = aV^b$, where $a$~and $b$ are constants.

Find the rate of change of the candle power with
the voltage, and calculate the change of candle power
per volt at $80$, $100$ and~$120$ volts in the case of a lamp
for which $a = 0.5×10^{-10}$~and $b=6$.

\Item{(9)} The frequency~$n$ of vibration of a string of
diameter~$D$, length~$L$ and specific gravity~$\sigma$, stretched
with a force~$T$, is given by
\[
n = \dfrac{1}{DL} \sqrt{\dfrac{gT}{\pi\sigma}}.
\]

Find the rate of change of the frequency when $D$,~$L$,
$\sigma$ and~$T$ are varied singly.

\DPPageSep{046.png}{34}%

\Item{(10)} The greatest external pressure~$P$ which a tube
can support without collapsing is given by
\[
  P = \left(\dfrac{2E}{1-\sigma^2}\right) \dfrac{t^3}{D^3},
\]
where $E$~and~$\sigma$ are constants, $t$~is the thickness of the
tube and~$D$ is its diameter. (This formula assumes
that $4t$~is small compared to~$D$.)

Compare the rate at which $P$~varies for a small
change of thickness and for a small change of diameter
taking place separately.

\Item{(11)} Find, from first principles, the rate at which
the following vary with respect to a change in
radius:
\begin{SubProbs}
\item[(\textit{a})] the circumference of a circle of radius~$r$;

\item[(\textit{b})] the area of a circle of radius~$r$;

\item[(\textit{c})] the lateral area of a cone of slant dimension~$l$;

\item[(\textit{d})] the volume of a cone of radius~$r$ and height~$h$;

\item[(\textit{e})] the area of a sphere of radius~$r$;

\item[(\textit{f})] the volume of a sphere of radius~$r$.
\end{SubProbs}

\Item{(12)} The length~$L$ of an iron rod at the temperature~$T$
being given by $L = l_t\bigl[1 + 0.000012(T-t)\bigr]$, where~$l_t$
is the length at the temperature~$t$, find the rate of
variation of the diameter~$D$ of an iron tyre suitable
for being shrunk on a wheel, when the temperature~$T$
varies.
\end{Problems}
\DPPageSep{047.png}{35}%


\Chapter[SUMS, DIFFERENCES, PRODUCTS]
{VI}{Sums, Differences, Products and Quotients}

\First{We} have learned how to differentiate simple algebraical
functions such as $x^2 + c$~or $ax^4$, and we have
now to consider how to tackle the \emph{sum}\Pagelabel{sumdiffer} of two or
more functions.

For instance, let
\[
y = (x^2+c) + (ax^4+b);
\]
what will its $\dfrac{dy}{dx}$ be? How are we to go to work
on this new job?

The answer to this question is quite simple: just
differentiate them, one after the other, thus:
\[
\dfrac{dy}{dx} = 2x + 4ax^3.\quad (\textit{Ans}.)
\]

If you have any doubt whether this is right, try
a more general case, working it by first principles.
And this is the way.

Let $y = u+v$, where $u$ is any function of~$x$, and $v$
any other function of~$x$. Then, letting $x$~increase
to~$x+dx$, $y$~will increase to~$y+dy$; and $u$ will
increase to~$u+du$; and $v$ to~$v+dv$.
\DPPageSep{048.png}{36}%

And we shall have:
\begin{align*}
  y+dy &= u+du + v+dv. \\
\intertext{\indent Subtracting the original $y = u+v$, we get}
dy &= du+dv, \\
\intertext{and dividing through by~$dx$, we get:}
\dfrac{dy}{dx} &= \dfrac{du}{dx} + \dfrac{dv}{dx}.
\end{align*}

This justifies the procedure. You differentiate each
function separately and add the results. So if now
we take the example of the preceding paragraph, and
put in the values of the two functions, we shall have,
using the notation shown (\Pageref{section:1}),
\begin{alignat*}{2}
\frac{dy}{dx}
  & = \frac{d(x^2+c)}{dx} &&+ \frac{d(ax^4+b)}{dx} \\
  & = 2x                  &&+ 4ax^3,
\end{alignat*}
exactly as before.

If there were three functions of~$x$, which we may
call $u$, $v$ and~$w$, so that
\begin{DPalign*}
y &= u+v+w; \\
\lintertext{then}
\frac{dy}{dx} &= \frac{du}{dx} + \frac{dv}{dx} + \frac{dw}{dx}.
\end{DPalign*}

As for \emph{subtraction}, it follows at once; for if the
function~$v$ had itself had a negative sign, its
differential coefficient would also be negative; so
that by differentiating
\begin{DPalign*}
y &= u-v, \\
\lintertext{we should get}
\frac{dy}{dx} &= \frac{du}{dx} - \frac{dv}{dx}.
\end{DPalign*}
\DPPageSep{049.png}{37}%

But when we come to do with \emph{Products}, the thing
is not quite so simple.

Suppose we were asked to differentiate the expression
\[
y = (x^2+c) × (ax^4+b),
\]
what are we to do? The result will certainly \emph{not}
be $2x × 4ax^3$; for it is easy to see that neither $c × ax^4$,
nor $x^2 × b$, would have been taken into that product.

Now there are two ways in which we may go
to work.

\Paragraph{First way.} Do the multiplying first, and, having
worked it out, then differentiate.

Accordingly, we multiply together $x^2 + c$~and $ax^4 + b$.

This gives $ax^6 + acx^4 + bx^2 + bc$.

Now differentiate, and we get:
\[
\dfrac{dy}{dx} = 6ax^5 + 4acx^3 + 2bx.
\]

\Paragraph{Second way.} Go back to first principles, and
consider the equation
\[
y = u × v;
\]
where $u$ is one function of~$x$, and $v$ is any other
function of~$x$. Then, if $x$ grows to be~$x+dx$; and $y$
to~$y+dy$; and $u$ becomes~$u+du$, and $v$ becomes~$v+dv$,
we shall have:
\begin{align*}
 y + dy &= (u + du) × (v + dv) \\
        &= u · v + u · dv + v · du + du · dv.
\end{align*}

Now $du · dv$ is a small quantity of the second order
of smallness, and therefore in the limit may be
discarded, leaving
\[
y + dy = u · v + u · dv + v · du.
\]
\DPPageSep{050.png}{38}%

Then, subtracting the original $y = u· v$, we have left
\[
dy = u · dv + v · du;
\]
and, dividing through by~$dx$, we get the result:
\[
\dfrac{dy}{dx} = u\, \dfrac{dv}{dx} + v\, \dfrac{du}{dx}.
\]

This shows that our instructions will be as follows:\Pagelabel{differprod}
\emph{To differentiate the product of two functions, multiply
each function by the differential coefficient of the
other, and add together the two products so obtained.}

You should note that this process amounts to
the following: Treat~$u$ as constant while you
differentiate~$v$; then treat~$v$ as constant while you
differentiate~$u$; and the whole differential coefficient~$\dfrac{dy}{dx}$
will be the sum of these two treatments.

Now, having found this rule, apply it to the
concrete example which was considered above.

We want to differentiate the product
\[
(x^2 + c) × (ax^4 + b).
\]

Call $(x^2 + c) = u$; and $(ax^4 + b) = v$.

Then, by the general rule just established, we
may write:
\begin{alignat*}{2}
\dfrac{dy}{dx}
&= (x^2 + c)\, \frac{d(ax^4 + b)}{dx} &&+ (ax^4 + b)\, \frac{d(x^2 + c)}{dx} \\
&= (x^2 + c)\, 4ax^3                  &&+ (ax^4 + b)\, 2x \\
&= 4ax^5 + 4acx^3                     &&+ 2ax^5 + 2bx,  \displaybreak[1] \\
%
\dfrac{dy}{dx}
&= 6ax^5 + 4acx^3                     &&+ 2bx,
\end{alignat*}
exactly as before.
\DPPageSep{051.png}{39}%

Lastly, we have to differentiate \emph{quotients}.
\SetOddHead{Quotients}

Think of this example, $y = \dfrac{bx^5 + c}{x^2 + a}$. In such a case
it is no use to try to work out the division beforehand,
because $x^2 + a$ will not divide into $bx^5 + c$, neither
have they any common factor. So there is nothing
for it but to go back to first principles, and find a
rule.
%[** TN: Fake a new paragraph; subsequent instances not noted.]
\begin{DPgather*}
\lintertext{\indent So we will put}
y = \frac{u}{v};
\end{DPgather*}
where $u$~and~$v$ are two different functions of the
independent variable~$x$.  Then, when $x$ becomes
$x + dx$, $y$~will become $y + dy$; and $u$ will become
$u + du$; and $v$ will become $v + dv$. So then
\[
y + dy = \dfrac{u + du}{v + dv}.
\]

Now perform the algebraic division, thus:
\begin{align*}
& \TmpColA \;
  \PadTo[l]{\TmpColB}{u + du}
  \begin{tabular}{|c@{}}
    $\dfrac{u}{v} + \dfrac{du}{v} - \dfrac{u· dv}{v^2}\DStrut$\\\hline
  \end{tabular} \\[-2.ex]
& \phantom{\TmpColA}
  \TmpColB \\
& \phantom{\TmpColA \;u + {}}
  \begin{tabular}{@{}l@{}}
    $du - \dfrac{u· dv}{v}$ \\
    $du + \dfrac{du· dv}{v}\DStrut$ \\\hline
  \end{tabular}\\
& \phantom{\TmpColA \;u + du}
  \begin{tabular}{@{}l@{}}
    ${} - \dfrac{u· dv}{v} - \dfrac{du· dv}{v}\DStrut$ \\
    ${} - \dfrac{u· dv}{v} - \dfrac{u· dv· dv}{v^2}\DStrut$ \\\hline
  \end{tabular}\\
& \phantom{\TmpColA \;u + du - \dfrac{u· dv}{v}}
  {} - \dfrac{du· dv}{v} + \dfrac{u· dv· dv}{v^2}.
\end{align*}
\DPPageSep{052.png}{40}%

As both these remainders are small quantities of
the second order, they may be neglected, and the
division may stop here, since any further remainders
would be of still smaller magnitudes.

So we have got:
\begin{DPalign*}
y + dy &= \dfrac{u}{v} + \dfrac{du}{v} - \dfrac{u· dv}{v^2}; \\
\intertext{which may be written}
%
&= \dfrac{u}{v} + \dfrac{v· du - u· dv}{v^2}. \\
\intertext{\indent Now subtract the original $y = \dfrac{u}{v}$, and we have left:}
%
dy &= \dfrac{v· du - u· dv}{v^2}; \\
%
\lintertext{whence}
\dfrac{dy}{dx}
&= \dfrac{v\, \dfrac{du}{dx} - u\, \dfrac{dv}{dx}}{v^2}.
\end{DPalign*}

This gives us our instructions as to \textit{how to differentiate
a quotient \emph{of two functions}. Multiply the
divisor function by the differential coefficient of
the dividend function; then multiply the dividend
function by the differential coefficient of the divisor
function; and subtract. Lastly divide by the square
of the divisor function}.\SetOddHead{Differentiation}%


Going back to our example $y = \dfrac{bx^5 + c}{x^2 + a}$,
\begin{DPalign*}
\lintertext{write}
bx^5 + c &= u; \\
\lintertext{and}
x^2  + a &= v.
\end{DPalign*}
\DPPageSep{053.png}{41}%

Then
\begin{align*}
\frac{dy}{dx}
&= \frac{(x^2 + a)\, \dfrac{d(bx^5 + c)}{dx} - (bx^5 + c)\, \dfrac{d(x^2 + a)}{dx}}{(x^2 + a)^2} \\
&= \frac{(x^2 + a)(5bx^4) - (bx^5 + c)(2x)}{(x^2 + a)^2}, \\
\frac{dy}{dx}
&= \frac{3bx^6 + 5abx^4 - 2cx}{(x^2 + a)^2}.\quad\text{(\textit{Answer}.)}
\end{align*}

The working out of quotients is often tedious, but
there is nothing difficult about it.

Some further examples fully worked out are given
hereafter.\Pagelabel{examples3}

(1) Differentiate $y = \dfrac{a}{b^2} x^3 - \dfrac{a^2}{b} x + \dfrac{a^2}{b^2}$.

Being a constant, $\dfrac{a^2}{b^2}$ vanishes,
and we have
\[
\frac{dy}{dx} = \frac{a}{b^2} × 3 × x^{3-1} - \frac{a^2}{b} × 1 × x^{1-1}.
\]

But $x^{1-1} = x^0 = 1$; so we get:
\[
\frac{dy}{dx} = \frac{3a}{b^2} x^2 - \frac{a^2}{b}.
\]

(2) Differentiate $y = 2a\sqrt{bx^3} - \dfrac{3b \sqrt[3]{a}}{x} - 2\sqrt{ab}$.

Putting $x$ in the index form, we get
\[
y = 2a\sqrt{b} x^{\efrac{3}{2}} - 3b \sqrt[3]{a} x^{-1} - 2\sqrt{ab}.
\]

Now
\begin{DPgather*}
\frac{dy}{dx} = 2a\sqrt{b} × \tfrac{3}{2} × x^{\efrac{3}{2}-1} - 3b\sqrt[3]{a} × (-1) × x^{-1-1}; \\
\lintertext{or,}
\frac{dy}{dx} = 3a\sqrt{bx} + \frac{3b\sqrt[3]{a}}{x^2}.
\end{DPgather*}
\DPPageSep{054.png}{42}%

(3) Differentiate $z = 1.8 \sqrt[3]{\dfrac{1}{\theta^2}} - \dfrac{4.4}{\sqrt[5]{\theta}} - 27°$.

This may be written: $z= 1.8\, \theta^{-\efrac{2}{3}} - 4.4\, \theta^{-\efrac{1}{5}} - 27°$.

The~$27°$ vanishes, and we have
\begin{DPgather*}
\frac{dz}{d\theta}
  = 1.8 × -\tfrac{2}{3} × \theta^{-\efrac{2}{3}-1}
  - 4.4 × \left(-\tfrac{1}{5}\right)\theta^{-\efrac{1}{5}-1}; \\
\lintertext{or,}
\frac{dz}{d\theta}
  = -1.2\, \theta^{-\efrac{5}{3}} + 0.88\, \theta^{-\efrac{6}{5}}; \\
\lintertext{or,}
\frac{dz}{d\theta} = \frac{0.88}{\sqrt[5]{\theta^6}}
  - \frac{1.2}{\sqrt[3]{\theta^5}}.
\end{DPgather*}

(4) Differentiate $v = (3t^2 - 1.2 t + 1)^3$.

A direct way of doing this will be explained later
(see \Pageref{dodge}); but we can nevertheless manage it now
without any difficulty.

Developing the cube, we get
\[
v = 27t^6 - 32.4t^5 + 39.96t^4 - 23.328t^3 + 13.32t^2 - 3.6t + 1; %% corrected "- 13.32t^2" to "+ 13.32t^2"
\]
hence
\[
\frac{dv}{dt} = 162t^5 - 162t^4 + 159.84t^3 - 69.984t^2 + 26.64t - 3.6.
\]

(5) Differentiate $y = (2x - 3)(x + 1)^2$.
\begin{alignat*}{2}
\frac{dy}{dx}
  &= (2x - 3)\, \frac{d\bigl[(x + 1)(x + 1)\bigr]}{dx}
     &&+ (x + 1)^2\, \frac{d(2x - 3)}{dx} \\
  &= (2x - 3) \left[(x + 1)\, \frac{d(x + 1)}{dx}\right.
     &&+ \left.(x + 1)\, \frac{d(x + 1)}{dx}\right] \\
  &  &&+ (x + 1)^2\, \frac{d(2x - 3)}{dx} \\
% [** TN: No natural second alignment point in next line; use fakery]
  &= \rlap{$2(x + 1)\bigl[(2x - 3) + (x + 1)\bigr] = 2(x + 1)(3x - 2)$;}&&
\end{alignat*}
or, more simply, multiply out and then differentiate.
\DPPageSep{055.png}{43}%

(6) Differentiate $y = 0.5 x^3(x-3)$.
\begin{align*}
\frac{dy}{dx}
  &= 0.5\left[x^3 \frac{d(x-3)}{dx} + (x-3) \frac{d(x^3)}{dx}\right] \\
  &= 0.5\left[x^3 + (x-3) × 3x^2\right] = 2x^3 - 4.5x^2.
\end{align*}

Same remarks as for preceding example.

(7) Differentiate $w = \left(\theta + \dfrac{1}{\theta}\right)
   \left(\sqrt{\theta} + \dfrac{1}{\sqrt{\theta}}\right)$.

This may be written
\begin{gather*}
w = (\theta + \theta^{-1})(\theta^{\efrac{1}{2}} + \theta^{-\efrac{1}{2}}). \\
\begin{aligned}
\frac{dw}{d\theta}
  &= (\theta + \theta^{-1})
     \frac{d(\theta^{\efrac{1}{2}} + \theta^{-\efrac{1}{2}})}{d\theta}
   + (\theta^{\efrac{1}{2}} + \theta^{-\efrac{1}{2}})
     \frac{d(\theta+\theta^{-1})}{d\theta} \\
%
  &= (\theta + \theta^{-1})(\tfrac{1}{2}\theta^{-\efrac{1}{2}}
                          - \tfrac{1}{2}\theta^{-\efrac{3}{2}})
   + (\theta^{\efrac{1}{2}} + \theta^{-\efrac{1}{2}})(1 - \theta^{-2}) \\
%
  &= \tfrac{1}{2}(\theta^{ \efrac{1}{2}} + \theta^{-\efrac{3}{2}}
                - \theta^{-\efrac{1}{2}} - \theta^{-\efrac{5}{2}})
   + (\theta^{ \efrac{1}{2}} + \theta^{-\efrac{1}{2}}
    - \theta^{-\efrac{3}{2}} - \theta^{-\efrac{5}{2}}) \\%
%
  &= \tfrac{3}{2} \left(\sqrt{\theta} - \frac{1}{\sqrt{\theta^5}}\right)
   + \tfrac{1}{2} \left(\frac{1}{\sqrt{\theta}} - \frac{1}{\sqrt{\theta^3}}\right).
\end{aligned}
\end{gather*}

This, again, could be obtained more simply by
multiplying the two factors first, and differentiating
afterwards. This is not, however, always possible;
see, for instance, \Pageref{example1}, example~8, in which the %[xref, hard-coded page]
rule for differentiating a product \emph{must} be used.

(8) Differentiate $y =\dfrac{a}{1 + a\sqrt{x} + a^2x}$.
\begin{align*}
\frac{dy}{dx}
  &= \frac{(1 + ax^{\efrac{1}{2}} + a^2x) × 0 - a\dfrac{d(1 + ax^{\efrac{1}{2}} + a^2x)}{dx}}
          {(1 + a\sqrt{x} + a^2x)^2} \\
  &= - \frac{a(\frac{1}{2}ax^{-\efrac{1}{2}} + a^2)}
            {(1 + ax^{\efrac{1}{2}} + a^2x)^2}.
\end{align*}
\DPPageSep{056.png}{44}%

(9) Differentiate $y = \dfrac{x^2}{x^2 + 1}$.
\[
\dfrac{dy}{dx} = \dfrac{(x^2 + 1)\, 2x - x^2 × 2x}{(x^2 + 1)^2} = \dfrac{2x}{(x^2 + 1)^2}.
\]

(10) Differentiate $y = \dfrac{a + \sqrt{x}}{a - \sqrt{x}}$.

In the indexed form, $y = \dfrac{a + x^{\efrac{1}{2}}}{a - x^{\efrac{1}{2}}}$.
\begin{DPgather*}
\frac{dy}{dx}
  = \frac{(a - x^{\efrac{1}{2}})( \tfrac{1}{2} x^{-\efrac{1}{2}})
        - (a + x^{\efrac{1}{2}})(-\tfrac{1}{2} x^{-\efrac{1}{2}})}
         {(a - x^{\efrac{1}{2}})^2}
  = \frac{ a - x^{\efrac{1}{2}}
         + a + x^{\efrac{1}{2}}}
        {2(a - x^{\efrac{1}{2}})^2\, x^{\efrac{1}{2}}}; \\
\lintertext{\rlap{hence}}
\frac{dy}{dx} = \frac{a}{(a - \sqrt{x})^2\, \sqrt{x}}.
\end{DPgather*}

\begin{DPalign*}
\lintertext{\indent (11) Differentiate}
\theta &= \frac{1 - a \sqrt[3]{t^2}}{1 + a \sqrt[2]{t^3}}. \\
\lintertext{\indent Now}
\theta &= \frac{1 - at^{\efrac{2}{3}}}{1 + at^{\efrac{3}{2}}}.
\end{DPalign*}
\begin{align*}
\frac{d\theta}{dt}
  &= \frac{(1 + at^{\efrac{3}{2}}) (-\tfrac{2}{3} at^{-\efrac{1}{3}})
         - (1 - at^{\efrac{2}{3}}) × \tfrac{3}{2} at^{\efrac{1}{2}}}
          {(1 + at^{\efrac{3}{2}})^2} \\
  &= \frac{5a^2 \sqrt[6]{t^7} - \dfrac{4a}{\sqrt[3]{t}} - 9a \sqrt[2]{t}}
          {6(1 + a \sqrt[2]{\DPtypo{3}{t^3}})^2}.
\end{align*}

(12) A reservoir of square cross-section has sides
sloping at an angle of $45°$ with the vertical. The side
\DPPageSep{057.png}{45}%
of the bottom is $200$~feet. Find an expression for the
quantity pouring in or out when the depth of water
varies by $1$~foot; hence find, in gallons, the quantity
withdrawn hourly when the depth is reduced from
$14$ to $10$~feet in $24$~hours.

The volume of a frustum of pyramid of height $H$,
and of bases $A$ and $a$, is $V = \dfrac{H}{3} (A + a + \sqrt{Aa} )$. It is
easily seen that, the slope being $45°$, if the depth be
$h$, the length of the side of the square surface of the
water is $200 + 2h$~feet, so that the volume of water is
\[
\dfrac{h}{3} [200^2 + (200 + 2h)^2 + 200(200 + 2h)]
= 40,000h + 400h^2 + \dfrac{4h^3}{3}.
\]

$\dfrac{dV}{dh} = 40,000 + 800h + 4h^2 = {}$ cubic feet per foot of depth
variation. The mean level from $14$ to $10$~feet is
$12$~feet, when $h = 12$, $\dfrac{dV}{dh} = 50,176$~cubic feet.

Gallons per hour corresponding to a change of depth
of $4$~ft.\ in $24$~hours ${} = \dfrac{4 × 50,176 × 6.25}{24} = 52,267$~gallons.

(13) The absolute pressure, in atmospheres, $P$, of
saturated steam at the temperature $t°$\;C. is given by
Dulong as being $P = \left( \dfrac{40 + t}{140} \right)^5$  as long as $t$ is above
$80°$. Find the rate of variation of the pressure with
the temperature at $100°$\;C.
\DPPageSep{058.png}{46}%

Expand the numerator by the binomial theorem
(see \Pageref{binomtheo}).
\[
P = \frac{1}{140^5} (40^5 + 5×40^4 t + 10 × 40^3 t^2 + 10 × 40^2 t^3
                            + 5 × 40t^4 + t^5);
\]
\CancelMathSkip%[** TN: \BindMath gives bad line spacing after DPalign]
\begin{DPalign*}
\lintertext{hence} \dfrac{dP}{dt} = &\dfrac{1}{537,824 × 10^5}\\
      &(5 × 40^4 + 20 × 40^3 t + 30 × 40^2 t^2 + 20 × 40t^3 + 5t^4),
\end{DPalign*}%
when $t = 100$ this becomes $0.036$~atmosphere per
degree Centigrade change of temperature.


\Exercises{III} (See the Answers on \Pageref{AnsEx:III}.)

\begin{Problems}
\Item{(1)} Differentiate\Pagelabel{examples2}
\begin{SubProbs}
\item[(\textit{a})] $u = 1 + x + \dfrac{x^2}{1 × 2} + \dfrac{x^3}{1 × 2 × 3} + \dotsb$.

\item[(\textit{b})] $y = ax^2 + bx + c$. \hfil (\textit{c})~$y = (x + a)^2$.

\item[(\textit{d})] $y = (x + a)^3$.
\end{SubProbs}

\Item{(2)} If $w = at - \frac{1}{2}bt^2$, find $\dfrac{dw}{dt}$.

\Item{(3)} Find the differential coefficient of
\[
y = (x + \sqrt{-1}) × (x - \sqrt{-1}).
\]

\Item{(4)} Differentiate
\[
y = (197x - 34x^2) × (7 + 22x - 83x^3).
\]

\Item{(5)} If $x = (y + 3) × (y + 5)$, find $\dfrac{dx}{dy}$.

\Item{(6)} Differentiate $y = 1.3709x × (112.6 + 45.202x^2)$.
\end{Problems}
\DPPageSep{059.png}{47}%

Find the differential coefficients of
\begin{Problems}[2]
\Item{(7)} $y = \dfrac{2x + 3}{3x + 2}$.
\Item{(8)} $y = \dfrac{1 + x + 2x^2 + 3x^3}{1 + x + 2x^2}$.
\ResetCols{2}

\Item{(9)} $y = \dfrac{ax + b}{cx + d}$.
\Item{(10)} $y = \dfrac{x^n + a}{x^{-n} + b}$.
\ResetCols{1}

\Item{(11)} The temperature~$t$ of the filament of an incandescent
electric lamp is connected to the current
passing through the lamp by the relation
\[
C = a + bt + ct^2.
\]

Find an expression giving the variation of the
current corresponding to a variation of temperature.

\Item{(12)} The following formulae have been proposed to
express the relation between the electric resistance $R$
of a wire at the temperature $t°$\;C., and the resistance
$R_0$ of that same wire at $0°$ Centigrade, $a$, $b$, $c$ being
constants.
\begin{align*}
R &= R_0(1 + at + bt^2). \\
R &= R_0(1 + at + b\sqrt{t}). \\
R &= R_0(1 + at + bt^2)^{-1}.
\end{align*}

Find the rate of variation of the resistance with
regard to temperature as given by each of these
formulae.

\Item{(13)} The electromotive-force~$E$ of a certain type of
standard cell has been found to vary with the temperature~$t$
according to the relation
\[
E = 1.4340 \bigl[1 - 0.000814(t-15)
                 + 0.000007(t-15)^2\bigr] \text{ volts}.
\]

Find the change of electromotive-force per degree,
at $15°$, $20°$ and~$25°$.
\DPPageSep{060.png}{48}%

\Item{(14)} The electromotive-force necessary to maintain
an electric arc of length~$l$ with a current of intensity~$i$
has been found by Mrs.~Ayrton to be
\[
E = a + bl + \frac{c + kl}{i},
\]
where $a$, $b$, $c$, $k$ are constants.

Find an expression for the variation of the electromotive\DPtypo{ }{-}force
(\textit{a})~with regard to the length of the arc;
(\textit{b})~with regard to the strength of the current.
\end{Problems}
\DPPageSep{061.png}{49}%



\Chapter{VII}{Successive Differentiation}

\First{Let} us try the effect of repeating several times over
the operation of differentiating a function (see \Pageref{function}).
Begin with a concrete case.

Let $y = x^5$.
\begin{alignat*}{3}
&\text{First differentiation, }  &&5x^4.              &&         \\
&\text{Second differentiation, } &&5 × 4x^3           &&= 20x^3. \\
&\text{Third differentiation, }  &&5 × 4 × 3x^2       &&= 60x^2. \\
&\text{Fourth differentiation, } &&5 × 4 × 3 × 2x     &&= 120x.  \\
&\text{Fifth differentiation, }  &&5 × 4 × 3 × 2 × 1  &&= 120.   \\
&\text{Sixth differentiation, }  &&                   &&= 0.
\end{alignat*}

There is a certain notation, with which we are
already acquainted (see \Pageref{notation}), used by some writers,
that is very convenient. This is to employ the
general symbol~$f(x)$ for any function of~$x$. Here
the symbol~$f(~)$ is read as ''function of,'' without
saying what particular function is meant. So the
statement $y=f(x)$ merely tells us that $y$ is a function
of~$x$, it may be $x^2$ or $ax^n$, or $\cos x$ or any other complicated
function of~$x$.

The corresponding symbol for the differential coefficient
is~$f'(x)$, which is simpler to write than $\dfrac{dy}{dx}$.
This is called the ''derived function'' of~$x$.
\DPPageSep{062.png}{50}%

Suppose we differentiate over again, we shall get
the ''second derived function'' or second differential
coefficient, which is denoted by~$f''(x)$; and so on.

Now let us generalize.

Let $y = f(x) = x^n$.
\begin{DPalign*}[m]
\lintertext{\indent First differentiation,}     f'(x) &= nx^{n-1}. \\
\lintertext{\indent Second differentiation,}   f''(x) &= n(n-1)x^{n-2}. \\
\lintertext{\indent Third differentiation,}   f'''(x) &= n(n-1)(n-2)x^{n-3}. \\
\lintertext{\indent Fourth differentiation,} f''''(x) &= n(n-1)(n-2)(n-3)x^{n-4}. \\
    &\llap{\text{etc.,}} \text{ etc.}
\end{DPalign*}

But this is not the only way of indicating successive
differentiations. For,
\begin{DPalign*}
\lintertext{if the original function be }             y &= f(x);  \\
\lintertext{once differentiating gives }  \frac{dy}{dx} &= f'(x); \\
\lintertext{twice differentiating gives } \frac{d\left(\dfrac{dy}{dx}\right)}{dx} &= f''(x);
\end{DPalign*}
and this is more conveniently written as~$\dfrac{d^2y}{(dx)^2}$, or
more usually~$\dfrac{d^2y}{dx^2}$. Similarly, we may write as the
result of thrice differentiating, $\dfrac{d^3y}{dx^3} = f'''(x)$.
\tb
\DPPageSep{063.png}{51}%


\Examples.
Now let us try $y = f(x) = 7x^4 + 3.5x^3 - \frac{1}{2}x^2 + x - 2$.
\begin{align*}
\frac{dy}{dx}     &= f'(x) = 28x^3 + 10.5x^2 - x + 1, \\
\frac{d^2y}{dx^2} &= f''(x) = 84x^2 + 21x - 1,        \\
\frac{d^3y}{dx^3} &= f'''(x) = 168x + 21,             \\
\frac{d^4y}{dx^4} &= f''''(x) = 168,                  \\
\frac{d^5y}{dx^5} &= f'''''(x) = 0.
\end{align*}
In a similar manner if $y = \phi(x) = 3x(x^2 - 4)$,
\begin{align*}
\phi'(x)    &= \frac{dy}{dx} = 3\bigl[x × 2x + (x^2 - 4) × 1\bigr] = 3(3x^2 - 4), \\
\phi''(x)   &= \frac{d^2y}{dx^2} = 3 × 6x = 18x, \\
\phi'''(x)  &= \frac{d^3y}{dx^3} = 18, \\
\phi''''(x) &= \frac{d^4y}{dx^4} = 0.
\end{align*}


%[** TN: Heading indented in the original]
\Exercises{IV} (See \Pageref[page]{AnsEx:III} for Answers.)

Find $\dfrac{dy}{dx}$ and $\dfrac{d^2y}{dx^2}$ for the following expressions:
\begin{Problems}[2]
\Item{(1)} $y = 17x + 12x^2$.
\Item{(2)} $y = \dfrac{x^2 + a}{x + a}$.
\ResetCols{1}

\Item{(3)} $y = 1 + \dfrac{x}{1} + \dfrac{x^2}{1×2} + \dfrac{x^3}{1×2×3} + \dfrac{x^4}{1×2×3×4}$.

\Item{(4)} Find the 2nd and~3rd derived functions in
the Exercises~III. (\Pageref{examples2}), No.~1 to No.~7, and in the
Examples given (\Pageref{examples3}), No.~1 to No.~7.
\end{Problems}
\DPPageSep{064.png}{52}%


\Chapter{VIII}{When Time Varies}

\First{Some} of the most important problems of the calculus
are those where time is the independent variable, and
we have to think about the values of some other
quantity that varies when the time varies. Some
things grow larger as time goes on; some other things
grow smaller. The distance that a train has got from
its starting place goes on ever increasing as time goes
on. Trees grow taller as the years go by. Which is
growing at the greater rate; a plant $12$~inches high
which in one month becomes $14$~inches high, or a
tree $12$~feet high which in a year becomes $14$~feet
high?

In this chapter we are going to make much use
of the word \emph{rate}. Nothing to do with poor-rate, or
water-rate (except that even here the word suggests
a proportion---a ratio---so many pence in the pound).
Nothing to do even with birth-rate or death-rate,
though these words suggest so many births or deaths
per thousand of the population. When a motor-car
whizzes by us, we say: What a terrific rate! When
a spendthrift is flinging about his money, we remark
that that young man is living at a prodigious rate.
\DPPageSep{065.png}{53}%
What do we mean by \emph{rate}? In both these cases we
are making a mental comparison of something that is
happening, and the length of time that it takes to
happen. If the motor-car flies past us going $10$~yards
per second, a simple bit of mental arithmetic will
show us that this is equivalent---while it lasts---to a
rate of $600$~yards per minute, or over $20$~miles per
hour.

Now in what sense is it true that a speed of
$10$~yards per second is the same as $600$~yards
per minute? Ten yards is not the same as $600$~yards,
nor is one second the same thing as one minute.
What we mean by saying that the \emph{rate} is the same,
is this: that the proportion borne between distance
passed over and time taken to pass over it, is the
same in both cases.

Take another example. A man may have only
a few pounds in his possession, and yet be able to
spend money at the rate of millions a year---provided
he goes on spending money at that rate for a few
minutes only. Suppose you hand a shilling over
the counter to pay for some goods; and suppose the
operation lasts exactly one second. Then, during
that brief operation, you are parting with your money
at the rate of $1$~shilling per second, which is the
same rate as £$3$~per minute, or £$180$~per hour, or
£$4320$~per day, or £$1,576,800$~per year! If you have
£$10$~in your pocket, you can go on spending money
at the rate of a million a year for just $5\frac{1}{4}$~minutes.

It is said that Sandy had not been in London
\DPPageSep{066.png}{54}%
above five minutes when ''bang went saxpence.'' If
he were to spend money at that rate all day long,
say for $12$~hours, he would be spending $6$~shillings
%[** TN: Italicized shillings (s) for overall consistency]
an hour, or £$3$.~$12$\textit{s}.\ per day, or £$21$.~$12$\textit{s}.\ a week,
not counting the Sawbbath.

Now try to put some of these ideas into differential
notation.

Let $y$ in this case stand for money, and let $t$ stand
for time.

If you are spending money, and the amount you
spend in a short time~$dt$ be called~$dy$, the \emph{rate} of
spending it will be $\dfrac{dy}{dt}$, or rather, should be written
with a minus sign, as $-\dfrac{dy}{dt}$, because $dy$ is a \emph{decrement},
not an increment. But money is not a good example
for the calculus, because it generally comes and goes
by jumps, not by a continuous flow---you may earn
£$200$ a year, but it does not keep running in all
day long in a thin stream; it comes in only weekly,
or monthly, or quarterly, in lumps: and your expenditure
also goes out in sudden payments.

A more apt illustration of the idea of a rate is
furnished by the speed of a moving body. From
London (Euston station) to Liverpool is $200$~miles.
If a train leaves London at $7$~o'clock, and reaches
Liverpool at $11$~o'clock, you know that, since it has
travelled $200$~miles in $4$~hours, its average rate must
have been $50$~miles per hour; because $\frac{200}{4} = \frac{50}{1}$. Here
you are really making a mental comparison between
\DPPageSep{067.png}{55}%
the distance passed over and the time taken to pass
over it. You are dividing one by the other. If $y$ is
the whole distance, and $t$ the whole time, clearly the
average rate is $\dfrac{y}{t}$. Now the speed was not actually
constant all the way: at starting, and during the
slowing up at the end of the journey, the speed was
less. Probably at some part, when running downhill,
the speed was over $60$~miles an hour. If, during
any particular element of time~$dt$, the corresponding
element of distance passed over was~$dy$, then at that
part of the journey the speed was~$\dfrac{dy}{dt}$. The \emph{rate} at
which one quantity (in the present instance, \emph{distance})
is changing in relation to the other quantity (in this
case, \emph{time}) is properly expressed, then, by stating the
differential coefficient of one with respect to the other.
A \emph{velocity}, scientifically expressed, is the rate at which
a very small distance in any given direction is being
passed over; and may therefore be written
\[
v = \dfrac{dy}{dt}.
\]

But if the velocity~$v$ is not uniform, then it must
be either increasing or else decreasing. The rate at
which a velocity is increasing is called the \emph{acceleration}.
If a moving body is, at any particular instant, gaining
an additional velocity~$dv$ in an element of time~$dt$,
then the acceleration~$a$ at that instant may be written
\[
a = \dfrac{dv}{dt};
\]
\DPPageSep{068.png}{56}%
but $dv$ is itself~$d\left( \dfrac{dy}{dt} \right)$. Hence we may put
\[
a = \frac{d\left( \dfrac{dy}{dt} \right)}{dt};
\]
and this is usually written $a = \dfrac{d^2y}{dt^2}$; \\
or the acceleration is the second differential coefficient
of the distance, with respect to time. Acceleration is
expressed as a change of velocity in unit time, for
instance, as being so many feet per second per second;
the notation used being $\text{feet} ÷ \text{second}^2$.

When a railway train has just begun to move, its
velocity~$v$ is small; but it is rapidly gaining speed---it
is being hurried up, or accelerated, by the effort of the
engine. So its $\dfrac{d^2y}{dt^2}$ is large. When it has got up its
top speed it is no longer being accelerated, so that
then $\dfrac{d^2y}{dt^2}$ has fallen to zero. But when it nears its
stopping place its speed begins to slow down; may,
indeed, slow down very quickly if the brakes are put
on, and during this period of \emph{deceleration} or slackening
of pace, the value of~$\dfrac{dv}{dt}$, that is, of~$\dfrac{d^2y}{dt^2}$ will be negative.

To accelerate a mass~$m$ requires the continuous
application of force. The force necessary to accelerate
a mass is proportional to the mass, and it is also
proportional to the acceleration which is being imparted.
Hence we may write for the force~$f$, the
expression
\begin{DPalign*}
f &= ma;\\
\DPPageSep{069.png}{57}%
\lintertext{or} f &= m \frac{dv}{dt}; \\
\lintertext{or} f &= m \frac{d^2y}{dt^2}.
\end{DPalign*}

The product of a mass by the speed at which it is
going is called its \emph{momentum}, and is in symbols~$mv$.
If we differentiate momentum with respect to time
we shall get~$\dfrac{d(mv)}{dt}$ for the rate of change of momentum.
But, since $m$ is a constant quantity, this
may be written $m \dfrac{dv}{dt}$, which we see above is the same
as~$f$. That is to say, force may be expressed either
as mass times acceleration, or as rate of change of
momentum.

Again, if a force is employed to move something
(against an equal and opposite counter-force), it does
\emph{work}; and the amount of work done is measured by
the product of the force into the distance (in its
own direction) through which its point of application
moves forward. So if a force~$f$ moves forward
through a length~$y$, the work done (which we may
call~$w$) will be
\[
w = f × y;
\]
where we take $f$ as a constant force. If the force
varies at different parts of the range~$y$, then we must
find an expression for its value from point to point.
If $f$ be the force along the small element of length~$dy$,
the amount of work done will be $f × dy$. But as
$dy$ is only an element of length, only an element of
\DPPageSep{070.png}{58}%
work will be done. If we write $w$ for work, then an
element of work will be~$dw$; and we have
\begin{DPalign*}
dw &= f × dy; \\
\intertext{which may be written}
dw &= ma·dy; \\
\lintertext{or}
dw &= m \frac{d^2y}{dt^2}· dy; \\
\lintertext{or}
dw &= m \frac{dv}{dt}· dy.     \\
\intertext{\indent Further, we may transpose the expression and write}
\frac{dw}{dy} &= f.
\end{DPalign*}

This gives us yet a third definition of \emph{force}; that
if it is being used to produce a displacement in any
direction, the force (in that direction) is equal to the
rate at which work is being done per unit of length
in that direction. In this last sentence the word
\emph{rate} is clearly not used in its time-sense, but in its
meaning as ratio or proportion.

Sir Isaac Newton, who was (along with Leibnitz)\DPnote{** [sic], not Leibniz}
an inventor of the methods of the calculus, regarded
all quantities that were varying as \emph{flowing}; and the
ratio which we nowadays call the differential coefficient
he regarded as the rate of flowing, or the
\emph{fluxion} of the quantity in question. He did not use
the notation of the $dy$ and~$dx$, and~$dt$ (this was due
to Leibnitz), but had instead a notation of his own.
If $y$ was a quantity that varied, or ''flowed,'' then his
symbol for its rate of variation (or ''fluxion'') was~%
\DPPageSep{071.png}{59}%
$\dot{y}$. If $x$ was the variable, then its fluxion was called~$\dot{x}$.
The dot over the letter indicated that it had been
differentiated. But this notation does not tell us
what is the independent variable with respect to
which the differentiation has been effected. When
we see $\dfrac{dy}{dt}$ we know that $y$ is to be differentiated with
respect to~$t$. If we see $\dfrac{dy}{dx}$ we know that $y$ is to be
differentiated with respect to~$x$. But if we see merely~$\dot{y}$,
we cannot tell without looking at the context
whether this is to mean $\dfrac{dy}{dx}$ or $\dfrac{dy}{dt}$ or~$\dfrac{dy}{dz}$, or what is
the other variable. So, therefore, this fluxional notation
is less informing than the differential notation,
and has in consequence largely dropped out of use.
But its simplicity gives it an advantage if only we
will agree to use it for those cases exclusively where
\emph{time} is the independent variable. In that case $\dot{y}$~will
mean~$\dfrac{dy}{dt}$ and $\dot{u}$~will mean~$\dfrac{du}{dt}$;
and $\ddot{x}$~will mean~$\dfrac{d^2x}{dt^2}$.

Adopting this fluxional notation we may write the
mechanical equations considered in the paragraphs
above, as follows:
\begin{center}
\begin{tabular}{l@{\qquad\qquad}l}
distance     &  $x$\DPtypo{}{,} \\
velocity     &  $v = \dot{x}$, \\
acceleration &  $a = \dot{v} = \ddot{x}$, \\
force        &  $f = m\dot{v} = m\ddot{x}$, \\
work         &  $w = x × m \ddot{x}$.
\end{tabular}
\end{center}

\tb
\DPPageSep{072.png}{60}%


\Examples.
(1) A body moves so that the distance~$x$ (in feet),
which it travels from a certain point~$O$, is given by
the relation $x = 0.2t^2 + 10.4$, where $t$~is the time in
seconds elapsed since a certain instant. Find the
velocity and acceleration $5$~seconds after the body
began to move, and also find the corresponding values
when the distance covered is $100$~feet. Find also
the average velocity during the first $10$~seconds of
its motion. (Suppose distances and motion to the
right to be positive.)
\begin{DPgather*}
\lintertext{\rlap{\indent Now}}
x = 0.2t^2 + 10.4 \\
v = \dot{x}  = \frac{dx}{dt} = 0.4t;\quad\text{and}\quad
a = \ddot{x} = \frac{d^2x}{dt^2} = 0.4 = \text{constant.}
\end{DPgather*}

When $t = 0$, $x = 10.4$ and $v = 0$. The body started
from a point $10.4$~feet to the right of the point~$O$;
and the time was reckoned from the instant the
body started.

When $t = 5$, $v = 0.4 × 5 = 2~\text{ft./sec.}$; $a = 0.4~\text{ft./sec}^2$.

%[ ** Some equations aligned in original.]
When $x = 100$, $100 = 0.2t^2 + 10.4$, or $t^2 = 448$,
and $t = 21.17~\text{sec.}$; $v = 0.4 × 21.17 = 8.468~\text{ft./sec.}$

When $t = 10$,
\begin{gather*}
\text{distance travelled} = 0.2 × 10^2 + 10.4 - 10.4 = 20~\text{ft.} \\
\text{Average velocity} = \tfrac{20}{10} = 2~\text{ft./sec.}
\end{gather*}

(It is the same velocity as the velocity at the middle
of the interval, $t = 5$; for, the acceleration being constant,
the velocity has varied uniformly from zero
when $t = 0$ to $4~\text{ft./sec.}$ when $t = 10$.)
\DPPageSep{073.png}{61}%

(2) In the above problem let us suppose
\begin{gather*}
x = 0.2t^2 + 3t + 10.4.\\
v = \dot{x} = \dfrac{dx}{dt} = 0.4t + 3;\quad a = \ddot{x} = \frac{d^2x}{dt^2} = 0.4 = \text{constant}.
\end{gather*}

When $t = 0$, $x = 10.4$ and $v = 3$~ft./sec, the time is
reckoned from the instant at which the body passed a
point $10.4$~ft.\ from the point~$O$, its velocity being then
already $3$~ft./sec. To find the time elapsed since it began
moving, let $v = 0$; then $0.4t + 3 = 0$, $t= -\frac{3}{\DPtypo{4}{.4}}
= -7.5$~sec.
The body began moving $7.5$~sec.\ before time was
begun to be observed; $5$~seconds after this gives
$t = -2.5$ and $v = 0.4 × -2.5 + 3 = 2$~ft./sec.

When $x = 100$~ft.,
\[
100 = 0.2t^2 + 3t + 10.4;\quad \text{or } t^2 + 15t - 448 = 0;
\]
hence $t = 14.95$~sec., $v = 0.4 × 14.95 + 3 = 8.98$~ft./sec.

To find the distance travelled during the $10$ first
seconds of the motion one must know how far the
body was from the point~$O$ when it started.

When $t = -7.5$,
\[
x = 0.2 × (-7.5)^2 - 3 × 7.5 + 10.4 = -0.85~\text{ft}.,
\]
that is $0.85$~ft.\ to the left of the point~$O$.

Now, when $t = 2.5$,
\[
x = 0.2 × 2.5^2 + 3 × 2.5 + 10.4 = 19.15.
\]

So, in $10$~seconds, the distance travelled was
$19.15 + 0.85 = 20$~ft., and
\[
\text{the average velocity } = \tfrac{20}{10} = 2 \text{ ft./sec}.
\]

(3) Consider a similar problem when the distance
is given by $x = 0.2t^2 - 3t + 10.4$. Then $v = 0.4t - 3$,
$a = 0.4 = \text{constant}$. When $t = 0$, $x = 10.4$ as before, and
\DPPageSep{074.png}{62}%
$v = -3$; so that the body was moving in the direction
opposite to its motion in the previous cases. As the
acceleration is positive, however, we see that this
velocity will decrease as time goes on, until it becomes
zero, when $v = 0$ or $0.4t - 3 = 0$; or $t = 7.5$~sec. After
this, the velocity becomes positive; and $5$~seconds
after the body started, $t = 12.5$, and
\[
v = 0.4 × 12.5 - 3 = 2 \text{ ft./sec}.
\]

When $x = 100$,
\begin{DPgather*}
100 = 0.2t^2 - 3t + 10.4,\quad \text{or } t^2 - 15t - 448 = 0, \\
\lintertext{and}
t = 29.95;\ v = 0.4 × 29.95 - 3 = 8.98~\text{ft./sec.}
\end{DPgather*}

When $v$ is zero, $x = 0.2 × 7.5^2 - 3 × 7.5 + 10.4 = -0.85$,
informing us that the body moves back to $0.85$~ft.\
beyond the point~$O$ before it stops. Ten seconds later
\[
t = 17.5 \text{ and } x = 0.2 × 17.5^2 - 3 × 17.5 + 10.4 = 19.15.
\]
$\text{The distance travelled} = .85 + 19.15 = 20.0$, and the
average velocity is again $2$~ft./sec.

(4) Consider yet another problem of the same sort
with $x = 0.2t^3 - 3t^2 + 10.4$; $v = 0.6t^2 - 6t$; $a = 1.2t - 6$.
The acceleration is no more constant.

When $t = 0$, $x = 10.4$, $v = 0$, $a = -6$. The body is
at rest, but just ready to move with a negative
acceleration, that is to gain a velocity towards the
point~$O$.

(5) If we have $x = 0.2t^3 - 3t + 10.4$, then $v = 0.6t^2 - 3$,
and $a = 1.2t$.

When $t = 0$, $x = 10.4$; $v = -3$; $a = 0$.

The body is moving towards the point~$O$ with
\DPPageSep{075.png}{63}%
a velocity of $3$~ft./sec., and just at that instant the
velocity is uniform.

We see that the conditions of the motion can always
be at once ascertained from the time-distance equation
and its first and second derived functions. In the
last two cases the mean velocity during the first
$10$~seconds and the velocity $5$~seconds after the start
will no more be the same, because the velocity is not
increasing uniformly, the acceleration being no longer
constant.

(6) The angle~$\theta$ (in radians) turned through by a
wheel is given by $\theta = 3 + 2t - 0.1t^3$, where $t$ is the
time in seconds from a certain instant; find the
angular velocity~$\omega$ and the angular acceleration~$\alpha$,
(\textit{a})~after $1$~second; (\textit{b})~after it has performed one
revolution. At what time is it at rest, and how many
revolutions has it performed up to that instant?

Writing for the acceleration
\[
\omega =  \dot{\theta} = \dfrac{d\theta}{dt} = 2 - 0.3t^2,\quad
\alpha = \ddot{\theta} = \dfrac{d^2\theta}{dt^2} = -0.6t.
\]

When $t = 0$, $\theta = 3$; $\omega = 2$~rad./sec.; $\alpha = 0$.

When $t = 1$,
\[
\omega = 2 - 0.3 = 1.7~\text{rad./sec.};\quad \alpha = -0.6~\text{rad./sec}^2.
\]

This is a retardation; the wheel is slowing down.

After $1$~revolution
\[
\theta = 2\pi = 6.28;\quad 6.28 = 3 + 2t - 0.1t^3.
\]

By plotting the graph, $\theta = 3 + 2t - 0.1t^3$, we can get
the value or values of~$t$ for which $\theta = 6.28$; these
are $2.11$ and~$3.03$ (there is a third negative value).
\DPPageSep{076.png}{64}%

When $t = 2.11$,
\begin{gather*}
\theta = 6.28;\quad\omega = 2 - 1.34 = 0.66 \text{ rad./sec.}; \\
\alpha = -1.27 \text{ rad./sec}^2. \\
\intertext{\indent When $t = 3.03$,}
\theta = 6.28;\quad \omega = 2 - 2.754 = -0.754 \text{ rad./sec.}; \\
\alpha = -1.82 \text{ rad./sec}^2.
\end{gather*}

The velocity is reversed. The wheel is evidently
at rest between these two instants; it is at rest when
$\omega = 0$, that is when $0 = 2 - 0.3t^3$, or when $t = 2.58~\text{sec.}$,
it has performed
\[
\frac{\theta}{2\pi}
  = \frac{3 + 2 × 2.58 - 0.1 × 2.58^3}{6.28} = 1.025 \text{ revolutions}.
\]


\Exercises{V} (See \Pageref[page]{AnsEx:V} for Answers.)

\begin{Problems}
\Item{(1)} If $y = a + bt^2 + ct^4$; find $\dfrac{dy}{dt}$ and $\dfrac{d^2y}{dt^2}$.
\[
\text{\textit{Ans.} $\dfrac{dy}{dt} = 2bt + 4ct^3$;\quad $\dfrac{d^2y}{dt^2} = 2b + 12ct^2$.}
\]

\Item{(2)} A body falling freely in space describes in $t$~seconds
a space~$s$, in feet, expressed by the equation
$s = 16t^2$. Draw a curve showing the relation between
$s$~and~$t$. Also determine the velocity of the body at
the following times from its being let drop: $t = 2$
seconds; $t = 4.6$ seconds; $t = 0.01$ second.

\Item{(3)} If $x = at - \frac{1}{2}gt^2$; find $\dot{x}$ and~$\ddot{x}$.

\Item{(4)} If a body move according to the law
\[
s = 12 - 4.5t + 6.2t^2,
\]
find its velocity when $t = 4$~seconds; $s$~being in feet.
\DPPageSep{077.png}{65}%

\Item{(5)} Find the acceleration of the body mentioned in
the preceding example. Is the acceleration the same
for all values of~$t$?

\Item{(6)} The angle~$\theta$ (in radians) turned through by
a revolving wheel is connected with the time~$t$ (in
seconds) that has elapsed since starting; by the law
\[
\theta = 2.1 - 3.2t + 4.8t^2.
\]

Find the angular velocity (in radians per second) of
that wheel when $1\frac{1}{2}$~seconds have elapsed. Find also
its angular acceleration.

\Item{(7)} A slider moves so that, during the first part of
its motion, its distance~$s$ in inches from its starting
point is given by the expression
\[
s = 6.8t^3 - 10.8t;\quad\text{$t$~being in seconds}.
\]

Find the expression for the velocity and the acceleration
at any time; and hence find the velocity and the
acceleration after $3$~seconds.

\Item{(8)} The motion of a rising balloon is such that its
height~$h$, in miles, is given at any instant by the
expression $h = 0.5 + \frac{1}{10}\sqrt[3]{t-125}$; $t$~being in seconds.

Find an expression for the velocity and the acceleration
at any time. Draw curves to show the variation
of height, velocity and acceleration during the first
ten minutes of the ascent.

\Item{(9)} A stone is thrown downwards into water and
its depth~$p$ in metres at any instant $t$~seconds after
reaching the surface of the water is given by the
expression
\[
p = \frac{4}{4+t^2} + 0.8t - 1.
\]
\DPPageSep{078.png}{66}%

Find an expression for the velocity and the acceleration
at any time. Find the velocity and acceleration
after $10$~seconds.

\Item{(10)} A body moves in such a way that the spaces
described in the time~$t$ from starting is given by
$s = t^n$, where $n$~is a constant. Find the value of~$n$
when the velocity is doubled from the $5$th to the $10$th
second; find it also when the velocity is numerically
equal to the acceleration at the end of the $10$th~second.
\end{Problems}
\DPPageSep{079.png}{67}%


\Chapter{IX}{Introducing a Useful Dodge}

\First{Sometimes} one is stumped by finding that the expression
to be differentiated is too complicated to
tackle directly.

Thus, the equation\Pagelabel{dodge}
\[
y = (x^2+a^2)^{\efrac{3}{2}}
\]
is awkward to a beginner.

Now the dodge to turn the difficulty is this: Write
some symbol, such as~$u$, for the expression $x^2 + a^2$;
then the equation becomes
\[
y = u^{\efrac{3}{2}},
\]
which you can easily manage; for
\[
\frac{dy}{du} = \frac{3}{2} u^{\efrac{1}{2}}.
\]
Then tackle the expression
\[
u = x^2 + a^2,
\]
and differentiate it with respect to~$x$,
\[
\frac{du}{dx} = 2x.
\]
\DPPageSep{080.png}{68}%
Then all that remains is plain sailing;
\begin{DPalign*}
\lintertext{for}
\frac{dy}{dx} &= \frac{dy}{du} × \frac{du}{dx}; \\
\lintertext{that is,}
\frac{dy}{dx}
  &= \frac{3}{2} u^{\efrac{1}{2}} × 2x \\
  &= \tfrac{3}{2} (x^2 + a^2)^{\efrac{1}{2}} × 2x \\
  &= 3x(x^2 + a^2)^{\efrac{1}{2}};
\end{DPalign*}
and so the trick is done.

By and bye,\DPnote{** TN: [sic], archaic spelling} when you have learned how to deal
with sines, and cosines, and exponentials, you will
find this dodge of increasing usefulness.

\tb

\Examples.
Let us practise this dodge on a few examples.

\Pagelabel{ExNo1}%
(1) Differentiate $y = \sqrt{a+x}$.

Let $a+x = u$.
\begin{align*}
\frac{du}{dx} &= 1;\quad y=u^{\efrac{1}{2}};\quad
  \frac{dy}{du} = \tfrac{1}{2} u^{-\efrac{1}{2}}
                = \tfrac{1}{2} (a+x)^{-\efrac{1}{2}}.\\
%
\frac{dy}{dx} &= \frac{dy}{du} × \frac{du}{dx} = \frac{1}{2\sqrt{a+x}}.
\end{align*}

(2) Differentiate  $y = \dfrac{1}{\sqrt{a+x^2}}$.

Let $a + x^2 = u$.
\begin{align*}
\frac{du}{dx} &= 2x;\quad y=u^{-\efrac{1}{2}};\quad
  \frac{dy}{du} = -\tfrac{1}{2}u^{-\efrac{3}{2}}.\\
%
\frac{dy}{dx} &= \frac{dy}{du}×\frac{du}{dx} = - \frac{x}{\sqrt{(a+x^2)^3}}.
\end{align*}
\DPPageSep{081.png}{69}%

(3) Differentiate $y = \left(m - nx^{\efrac{2}{3}} + \dfrac{p}{x^{\efrac{4}{3}}}\right)^a$.

Let $m - nx^{\efrac{2}{3}} + px^{-\efrac{4}{3}} = u$.
\begin{gather*}
\frac{du}{dx} = -\tfrac{2}{3} nx^{-\efrac{1}{3}} - \tfrac{4}{3} px^{-\efrac{7}{3}};\\
%
y = u^a;\quad \frac{dy}{du} = a u^{a-1}. \\
%
\frac{dy}{dx} = \frac{dy}{du}×\frac{du}{dx}
  = -a\left(m -nx^{\efrac{2}{3}} + \frac{p}{x^{\efrac{4}{3}}}\right)^{a-1}
     (\tfrac{2}{3} nx^{-\efrac{1}{3}} + \tfrac{4}{3} px^{-\efrac{7}{3}}).
\end{gather*}

(4) Differentiate $y=\dfrac{1}{\sqrt{x^3 - a^2}}$.

Let $u = x^3 - a^2$.
\begin{align*}
\frac{du}{dx} &= 3x^2;\quad y = u^{-\efrac{1}{2}};\quad
  \frac{dy}{du}=-\frac{1}{2}(x^3 - a^2)^{-\efrac{3}{2}}. \\
\frac{dy}{dx} &= \frac{dy}{du} × \frac{du}{dx} = -\frac{3x^2}{2\sqrt{(x^3 - a^2)^3}}.
\end{align*}

\Pagelabel{examples4}
(5) Differentiate $y=\sqrt{\dfrac{1-x}{1+x}}$.

Write this as $y=\dfrac{(1-x)^{\efrac{1}{2}}}{(1+x)^{\efrac{1}{2}}}$.
\[
\frac{dy}{dx}
  = \frac{(1+x)^{\efrac{1}{2}}\, \dfrac{d(1-x)^{\efrac{1}{2}}}{dx}
        - (1-x)^{\efrac{1}{2}}\, \dfrac{d(1+x)^{\efrac{1}{2}}}{dx}}{1+x}.
\]

(We may also write $y = (1-x)^{\efrac{1}{2}} (1+x)^{-\efrac{1}{2}}$ and differentiate
as a product.)
\DPPageSep{082.png}{70}%

Proceeding as in \DPtypo{exercise}{example}~(1) above, we get
\[
\frac{d(1-x)^{\efrac{1}{2}}}{dx} = -\frac{1}{2\sqrt{1-x}};
\quad\text{and}\quad
\frac{d(1+x)^{\efrac{1}{2}}}{dx} = \frac{1}{2\sqrt{1+x}}.
\]

Hence
\begin{DPalign*}
\frac{dy}{dx}
  &= - \frac{(1 + x)^{\efrac{1}{2}}}{2(1 + x)\sqrt{1-x}}
     - \frac{(1 - x)^{\efrac{1}{2}}}{2(1 + x)\sqrt{1+x}} \\
  &= - \frac{1}{2\sqrt{1+x}\sqrt{1-x}} - \frac{\sqrt{1-x}}{2 \sqrt{(1+x)^3}};\\
\lintertext{or}
\frac{dy}{dx}
  &= - \frac{1}{(1+x)\sqrt{1-x^2}}.
\end{DPalign*}

(6) Differentiate $y = \sqrt{\dfrac{x^3}{1+x^2}}$.

We may write this
\begin{gather*}
y = x^{\efrac{3}{2}}(1+x^2)^{-\efrac{1}{2}}; \\
\frac{dy}{dx}
  = \tfrac{3}{2} x^{\efrac{1}{2}}(1 + x^2)^{-\efrac{1}{2}}
  + x^{\efrac{3}{2}} × \frac{d\bigl[(1+x^2)^{-\efrac{1}{2}}\bigr]}{dx}.
\end{gather*}

Differentiating $(1+x^2)^{-\efrac{1}{2}}$, as shown in \DPtypo{exercise}{example}~(2)
above, we get
\[
\frac{d\bigl[(1+x^2)^{-\efrac{1}{2}}\bigr]}{dx} = - \frac{x}{\sqrt{(1+x^2)^3}};
\]
so that
\[
\frac{dy}{dx}
  = \frac{3\sqrt{x}}{2\sqrt{1+x^2}} - \frac{\sqrt{x^5}}{\sqrt{(1+x^2)^3}}
  = \frac{\sqrt{x}(3+x^2)}{2\sqrt{(1+x^2)^3}}.
\]
\DPPageSep{083.png}{71}%

(7) Differentiate $y=(x+\sqrt{x^2+x+a})^3$.

Let $x+\sqrt{x^2+x+a}=u$.
\begin{gather*}
\frac{du}{dx} = 1 + \frac{d\bigl[(x^2+x+a)^{\efrac{1}{2}}\bigr]}{dx}. \\
y = u^3;\quad\text{and}\quad \frac{dy}{du} = 3u^2= 3\left(x+\sqrt{x^2+x+a}\right)^2.
\end{gather*}

Now let $(x^2+x+a)^{\efrac{1}{2}}=v$ and $(x^2+x+a) = w$.
\begin{DPalign*}
\frac{dw}{dx}
  &= 2x+1;\quad v = w^{\efrac{1}{2}};\quad \frac{dv}{dw} = \tfrac{1}{2}w^{-\efrac{1}{2}}. \\
\frac{dv}{dx}
  &= \frac{dv}{dw} × \frac{dw}{dx} = \tfrac{1}{2}(x^2+x+a)^{-\efrac{1}{2}}(2x+1). \\
\lintertext{\indent Hence}
\frac{du}{dx}
  &= 1 + \frac{2x+1}{2\sqrt{x^2+x+a}}, \\
\frac{dy}{dx}
  &= \frac{dy}{du} × \frac{du}{dx}\\
  &= 3\left(x+\sqrt{x^2+x+a}\right)^2
      \left(1 +\frac{2x+1}{2\sqrt{x^2+x+a}}\right).
\end{DPalign*}

(8) Differentiate $y=\sqrt{\dfrac{a^2+x^2}{a^2-x^2}} \sqrt[3]{\dfrac{a^2-x^2}{a^2+x^2}}$.

We get
\begin{align*}
y &= \frac{(a^2+x^2)^{\efrac{1}{2}} (a^2-x^2)^{\efrac{1}{3}}}
          {(a^2-x^2)^{\efrac{1}{2}} (a^2+x^2)^{\efrac{1}{3}}}
  = (a^2+x^2)^{\efrac{1}{6}} (a^2-x^2)^{-\efrac{1}{6}}. \\
\frac{dy}{dx}
  &= (a^2+x^2)^{\efrac{1}{6}} \frac{d\bigl[(a^2-x^2)^{-\efrac{1}{6}}\bigr]}{dx}
   + \frac{d\bigl[(a^2+x^2)^{\efrac{1}{6}}\bigr]}{(a^2-x^2)^{\efrac{1}{6}}\, dx}.
\end{align*}
\DPPageSep{084.png}{72}%

Let $u = (a^2-x^2)^{-\efrac{1}{6}}$ and $v = (a^2 - x^2)$.
\begin{align*}
u &= v^{-\efrac{1}{6}};\quad
  \frac{du}{dv} = -\frac{1}{6}v^{-\efrac{7}{6}};\quad
  \frac{dv}{dx} = -2x. \\
%
\frac{du}{dx} &= \frac{du}{dv} × \frac{dv}{dx} = \frac{1}{3}x(a^2-x^2)^{-\efrac{7}{6}}.
\end{align*}

Let $w = (a^2 + x^2)^{\efrac{1}{6}}$ and $z = (a^2 + x^2)$.
\begin{align*}
w &= z^{\efrac{1}{6}};\quad
  \frac{dw}{dz} = \frac{1}{6}z^{-\efrac{5}{6}};\quad
  \frac{dz}{dx} = 2x. \\
%
\frac{dw}{dx} &= \frac{dw}{dz} × \frac{dz}{dx} = \frac{1}{3} x(a^2 + x^2)^{-\efrac{5}{6}}.
\end{align*}

Hence
\begin{DPalign*}
\frac{dy}{dx}
  &= (a^2+x^2)^{\efrac{1}{6}} \frac{x}{3(a^2-x^2)^{\efrac{7}{6}}}
   + \frac{x}{3(a^2-x^2)^{\efrac{1}{6}} (a^2+x^2)^{\efrac{5}{6}}}; \\
%
\lintertext{or}
\frac{dy}{dx}
  &= \frac{x}{3}
     \left[\sqrt[6]{\frac{a^2+x^2}{(a^2-x^2)^7}}
           + \frac{1}{\sqrt[6]{(a^2-x^2)(a^2+x^2)^5]}} \right].
\end{DPalign*}

(9) Differentiate $y^n$ with respect to~$y^5$.
\[
\frac{d(y^n)}{d(y^5)} = \frac{ny^{n-1}}{5y^{5-1}} = \frac{n}{5} y^{n-5}.
\]

%[** TN: Manual linebreak improves typeset appearance]
(10)\Pagelabel{Example10} Find the first and second differential coefficients \\
of $y = \dfrac{x}{b} \sqrt{(a-x)x}$.
\[
\frac{dy}{dx}
  = \frac{x}{b}\,
    \frac{d\bigl\{\bigl[(a-x)x\bigr]^{\efrac{1}{2}}\bigr\}}{dx}
  + \frac{\sqrt{(a-x)x}}{b}.
\]

Let $\bigl[(a-x)x\bigr]^{\efrac{1}{2}} = u$ and let $(a-x)x = w$; then $u = w^{\efrac{1}{2}}$.
\BindMath{\[
\frac{du}{dw}
  = \frac{1}{2} w^{-\efrac{1}{2}}
  = \frac{1}{2w^{\efrac{1}{2}}} = \frac{1}{2\sqrt{(a-x)x}}.
\]
\DPPageSep{085.png}{73}%
\begin{align*}
&\frac{dw}{dx} = a-2x.\\
&\frac{du}{dw} × \frac{dw}{dx} = \frac{du}{dx} = \frac{a-2x}{2\sqrt{(a-x)x}}.
\end{align*}}%

Hence
\[
\frac{dy}{dx}
  = \frac{x(a-2x)}{2b\sqrt{(a-x)x}} + \frac{\sqrt{(a-x)x}}{b}
  = \frac{x(3a-4x)}{2b\sqrt{(a-x)x}}.
\]

Now
\begin{align*}
\frac{d^2y}{dx^2}
  &= \frac{2b \sqrt{(a-x)x}\, (3a-8x)
           - \dfrac{(3ax-4x^2)b(a-2x)}{\sqrt{(a-x)x}}}
          {4b^2(a-x)x} \\
  &= \frac{3a^2-12ax+8x^2}{4b(a-x)\sqrt{(a-x)x}}.
\end{align*}

(We shall need these two last differential coefficients
later on. See \hyperref[Ex:X11]{Ex.~X. No.~11}.)


\Exercises{VI} (See \Pageref[page]{AnsEx:VI} for Answers.)

Differentiate the following:

\begin{Problems}[2]
\Item{(1)} $y = \sqrt{x^2 + 1}$.
\Item{(2)} $y = \sqrt{x^2+a^2}$.
\ResetCols{2}

\Item{(3)} $y = \dfrac{1}{\sqrt{a+x}}$.
\Item{(4)} $y = \dfrac{a}{\sqrt{a-x^2}}$.
\ResetCols{2}

\Item{(5)} $y = \dfrac{\sqrt{x^2-a^2}}{x^2}$.
\Item{(6)} $y = \dfrac{\sqrt[3]{x^4+a}}{\sqrt[2]{x^3+a}}$.
\ResetCols{1}

\Item{(7)} $y = \dfrac{a^2+x^2}{(a+x)^2}$.
\DPPageSep{086.png}{74}%

\Item{(8)} Differentiate $y^5$ with respect to~$y^2$.

\Item{(9)} Differentiate $y = \dfrac{\sqrt{1 - \theta^2}}{1 - \theta}$.
\end{Problems}
\tb

The process can be extended to three or more
differential coefficients, so that $\dfrac{dy}{dx} = \dfrac{dy}{dz} × \dfrac{dz}{dv} × \dfrac{dv}{dx}$.


\Examples.
(1) If $z = 3x^4$;\quad $v = \dfrac{7}{z^2}$;\quad $y =\sqrt{1+v}$, find~$\dfrac{dv}{dx}$.

We have
\begin{align*}
\frac{dy}{dv} &= \frac{1}{2\sqrt{1+v}};\quad
\frac{dv}{dz} = -\frac{14}{z^3};\quad
\frac{dz}{dx} = 12x^3. \\
%
\frac{dy}{dx} &= -\frac{168x^3}{(2\sqrt{1+v})z^3}
               = -\frac{28}{3x^5\sqrt{9x^8+7}}.
\end{align*}

(2) If $t = \dfrac{1}{5\sqrt{\theta}}$;\quad $x = t^3 + \dfrac{t}{2}$;\quad $v = \dfrac{7x^2}{\sqrt[3]{x-1}}$, find~$\dfrac{dv}{d\theta}$.
\begin{DPgather*}
\frac{dv}{dx} = \frac{7x(5x-6)}{3\sqrt[3]{(x-1)^4}};\quad
\frac{dx}{dt} = 3t^2 + \tfrac{1}{2};\quad
\frac{dt}{d\theta} = -\frac{1}{10\sqrt{\theta^3}}. \\
\lintertext{Hence}
\frac{dv}{d\theta}
  = -\frac{7x(5x-6)(3t^2+\frac{1}{2})}
          {30\sqrt[3]{(x-1)^4} \sqrt{\theta^3}},
\end{DPgather*}
an expression in which $x$ must be replaced by its
value, and $t$ by its value in terms of~$\theta$.

(3) If $\theta = \dfrac{3a^2x}{\sqrt{x^3}}$;\quad $\omega = \dfrac{\sqrt{1-\theta^2}}{1+\theta}$;\quad and $\phi = \sqrt{3} - \dfrac{1}{\omega\sqrt{2}}$,
find~$\dfrac{d\phi}{dx}$.
\DPPageSep{087.png}{75}%

We get
\begin{gather*}
\theta = 3a^2x^{-\efrac{1}{2}};\quad
\omega = \sqrt{\frac{1-\theta}{1+\theta}};\quad \text{and}\quad
\phi = \sqrt{3} \DPtypo{=}{-} \frac{1}{\sqrt{2}} \omega^{-1}. \\
\frac{d\theta}{dx} = -\frac{3a^2}{2\sqrt{x^3}};\quad
\frac{d\omega}{d\theta} = -\frac{1}{(1+\theta)\sqrt{1-\theta^2}}
\end{gather*}
(see example~5, \Pageref{examples4}); and
\[
\frac{d\phi}{d\omega} = \frac{1}{\sqrt{2}\omega^2}.
\]

So that $\dfrac{d\theta}{dx} = \dfrac{1}{\sqrt{2} × \omega^2}
  × \dfrac{1}{(1+\theta) \sqrt{1-\theta^2}}
  × \dfrac{3a^2}{2\sqrt{x^3}}$.

Replace now first~$\omega$, then~$\theta$ by its value.


\Exercises{VII}
%[ ** TN: Inconsistent formatting in original; heading on separate line]
You can now successfully try the following. (See
\Pageref[page]{AnsEx:VII} for Answers.)
\begin{Problems}
\Item{(1)} If $u = \frac{1}{2}x^3$;\quad $v = 3(u+u^2)$;\quad and $w = \dfrac{1}{v^2}$, find~$\dfrac{dw}{dx}$.

\Item{(2)} If $y = 3x^2 + \sqrt{2}$;\quad $z = \sqrt{1+y}$;\quad and $v = \dfrac{1}{\sqrt{3}+4z}$,
find~$\dfrac{dv}{dx}$.

\Item{(3)} If $y = \dfrac{x^3}{\sqrt{3}}$;\quad $z = (1+y)^2$;\quad and $u = \dfrac{1}{\sqrt{1+z}}$, find~$\dfrac{du}{dx}$.
\end{Problems}
\DPPageSep{088.png}{76}%


\Chapter[MEANING OF DIFFERENTIATION]
{X}{Geometrical Meaning of Differentiation}

\First{It} is useful to consider what geometrical meaning can
be given to the differential coefficient.

In the first place, any function of~$x$, such, for
example, as~$x^2$, or~$\sqrt{x}$, or~$ax+b$, can be plotted as
a curve; and nowadays every schoolboy is familiar
with the process of curve-plotting.

\Figure{088a}{7}

Let $PQR$, in \Fig{7}, be a portion of a curve plotted
with respect to the axes of coordinates $OX$~and~$OY$.
Consider any point~$Q$ on this curve, where the
abscissa of the point is~$x$ and its ordinate is~$y$.
Now observe how $y$~changes when $x$~is varied. If $x$
\DPPageSep{089.png}{77}%
is made to increase by a small increment~$dx$, to the
right, it will be observed that $y$ also (in \emph{this} particular
curve) increases by a small increment~$dy$ (because this
particular curve happens to be an \emph{ascending} curve).
Then the ratio of $dy$~to~$dx$ is a measure of the degree
to which the curve is sloping up between the two
points $Q$~and~$T$. As a matter of fact, it can be seen
on the figure that the curve between $Q$ and~$T$ has
many different slopes, so that we cannot very well
speak of\Pagelabel{slope} the slope of the curve between $Q$ and~$T$. If,
however, $Q$ and~$T$ are so near each other that the
small portion~$QT$ of the curve is practically straight,
then it is true to say that the ratio~$\dfrac{dy}{dx}$ is the slope of
the curve along~$QT$. The straight line~$QT$ produced
on either side touches the curve along the portion~$QT$
only, and if this portion is indefinitely small, the
straight line will touch the curve at practically
one point only, and be therefore a \emph{tangent} to the
curve.

This tangent to the curve has evidently the same
slope as~$QT$, so that $\dfrac{dy}{dx}$ is the slope of the tangent to
the curve at the point~$Q$ for which the value of~$\dfrac{dy}{dx}$ is
found.

We have seen that the short expression ''the slope
of a curve'' has no precise meaning, because a curve
has so many slopes---in fact, every small portion of a
curve has a different slope. ''The slope of a curve \emph{at
a point}'' is, however, a perfectly defined thing; it is
\DPPageSep{090.png}{78}%
the slope of a very small portion of the curve situated
just at that point; and we have seen that this is the
same as ''the slope of the tangent to the curve at that
point.''

Observe that $dx$ is a short step to the right, and
$dy$ the corresponding short step upwards. These
steps must be considered as short as possible---in fact
indefinitely short,---though in diagrams we have to
represent them by bits that are not infinitesimally
small, otherwise they could not be seen.

\textit{We shall hereafter make considerable use of this
circumstance that $\dfrac{dy}{dx}$ represents the slope of the curve
at any point.}

\Figure{090a}{8}

If a curve is sloping up at~$45°$ at a particular point,
as in \Fig{8}, $dy$ and~$dx$ will be equal, and the value
of $\dfrac{dy}{dx} = 1$.
\DPPageSep{091.png}{79}%

If the curve slopes up steeper than~$45°$ (\Fig{9}),
$\dfrac{dy}{dx}$~will be greater than~$1$.
\Figures{091a}{091b}{9}{10}

If the curve slopes up very gently, as in \Fig{10},
$\dfrac{dy}{dx}$~will be a fraction smaller than~$1$.

For a horizontal line, or a horizontal place in a
curve, $dy=0$, and therefore~$\dfrac{dy}{dx}=0$.
\Figure{091c}{11}

If a curve slopes \emph{downward}, as in \Fig{11}, $dy$~will
be a step down, and must therefore be reckoned of
\DPPageSep{092.png}{80}%
negative value; hence $\dfrac{dy}{dx}$~will have negative sign
also.

If the ''curve'' happens to be a straight line, like
that in \Fig{12}, the value of~$\dfrac{dy}{dx}$ will be the same at
all points along it. In other words its \emph{slope} is constant.

\Figure{092a}{12}

If a curve is one that turns more upwards as it
goes along to the right, the values of~$\dfrac{dy}{dx}$ will become
greater and greater with the increasing steepness, as
in \Fig{13}.
\Figure{092b}{13}
\DPPageSep{093.png}{81}%

If a curve\Pagelabel{curve} is one that gets flatter and flatter as it
goes along, the values of~$\dfrac{dy}{dx}$ will become smaller and
smaller as the flatter part is reached, as in \Fig{14}.

\Figures{093a}{093b}{14}{15}

If a curve first descends, and then goes up again,
as in \Fig{15}, presenting a concavity upwards, then
clearly $\dfrac{dy}{dx}$ will first be negative, with diminishing
values as the curve flattens, then will be zero at the
point where the bottom of the trough of the curve is
reached; and from this point onward $\dfrac{dy}{dx}$ will have
positive values that go on increasing. In such a case
$y$~is said to pass by a \emph{minimum}. The minimum
value of~$y$ is not necessarily the smallest value of~$y$,
it is that value of~$y$ corresponding to the bottom of
the trough; for instance, in \Fig{28} (\Pageref{fig:28}), the %[ ** Page number]
value of~$y$ corresponding to the bottom of the trough
is~$1$, while $y$~takes elsewhere values which are smaller
than this. The characteristic of a minimum is that
$y$~must increase \emph{on either side} of it.
\DPPageSep{094.png}{82}%

\NB---For the particular value of~$x$ that makes
$y$~\emph{a minimum}, the value of $\dfrac{dy}{dx} = 0$.

If a curve first ascends and then descends, the
values of~$\dfrac{dy}{dx}$ will be positive at first; then zero, as
the summit is reached; then negative, as the curve
slopes downwards, as in \Fig{16}. In this case $y$~is
said to pass by a \emph{maximum}, but the maximum
value of~$y$ is not necessarily the greatest value of~$y$.
In \Fig{28}, the maximum of~$y$ is~$2\frac{1}{3}$, but this is by no
means the greatest value $y$ can have at some other
point of the curve.

\Figures{094a}{094b}{16}{17}

\NB---For the particular value of~$x$ that makes
$y$~\emph{a maximum}, the value of $\dfrac{dy}{dx}= 0$.

If a curve has the peculiar form of \Fig{17}, the
values of~$\dfrac{dy}{dx}$ will always be positive; but there will
be one particular place where the slope is least steep,
where the value of~$\dfrac{dy}{dx}$ will be a minimum; that is,
less than it is at any other part of the curve.
\DPPageSep{095.png}{83}%

If a curve has the form of \Fig{18}, the value of~$\dfrac{dy}{dx}$
will be negative in the upper part, and positive in the
lower part; while at the nose of the curve where it
becomes actually perpendicular, the value of $\dfrac{dy}{dx}$ will
be infinitely great.

\Figure{095a}{18}

Now that we understand that $\dfrac{dy}{dx}$~measures the
steepness of a curve at any point, let us turn to some
of the equations which we have already learned how
to differentiate.

(1) As the simplest case take this:
\[
y=x+b.
\]

It is plotted out in \Fig{19}, using equal scales
for $x$~and~$y$. If we put $x = 0$, then the corresponding
ordinate will be $y = b$; that is to say, the ''curve''
\Figures{096a}{096b}{19}{20}%[** TN: Moved up]
crosses the $y$-axis at the height~$b$. From here it
\DPPageSep{096.png}{84}%
ascends at~$45°$; for whatever values we give to~$x$ to
the right, we have an equal~$y$ to ascend. The line
has a gradient of $1$~in~$1$.

Now differentiate $y = x+b$, by the rules we have
already learned (pp.\ \pageref{diffrule1}~and~\pageref{diffrule2} \textit{ante}), and we get $\dfrac{dy}{dx} = 1$.

The slope of the line is such that for every little
step~$dx$ to the right, we go an equal little step~$dy$
upward. And this slope is constant---always the
same slope.

(2) Take another case:\Pagelabel{Case2}
\[
y = ax+b.
\]
We know that this curve, like the preceding one, will
start from a height~$b$ on the $y$-axis. But before we
draw the curve, let us find its slope by differentiating;
which gives $\dfrac{dy}{dx} = a$. The slope will be constant, at
an angle, the tangent of which is here called~$a$. Let
us assign to~$a$ some numerical value---say~$\frac{1}{3}$. Then we
must give it such a slope that it ascends $1$~in~$3$; or
\DPPageSep{097.png}{85}%
$dx$ will be $3$~times as great as~$dy$; as magnified in
\Fig{21}. So, draw the line in \Fig{20} at this slope.

\Figure[1.75in]{097a}{21}
(3) Now for a slightly harder case.
\begin{DPalign*}
\lintertext{\indent Let}
y= ax^2 + b.
\end{DPalign*}

Again the curve will start on the $y$-axis at a height~$b$
above the origin.

Now differentiate. [If you have forgotten, turn
back to \Pageref{diffrule2}; or, rather, \emph{don't} turn back, but think %[ ** Page number]
out the differentiation.]
\[
\frac{dy}{dx} = 2ax.
\]

\Figure[3.25in]{097b}{22}

This shows that the steepness will not be constant:
it increases as $x$~increases. At the starting point~$P$,
\DPPageSep{098.png}{86}%
where $x = 0$, the curve (\Fig{22}) has no steepness---that
is, it is level. On the left of the origin, where
$x$ has negative values, $\dfrac{dy}{dx}$~will also have negative
values, or will descend from left to right, as in the
Figure.

Let us illustrate this by working out a particular
instance. Taking the equation
\[
y = \tfrac{1}{4}x^2 + 3,
\]
and differentiating it, we get
\[
\dfrac{dy}{dx} = \tfrac{1}{2}x.
\]
Now assign a few successive values, say from $0$~to~$5$,
to~$x$; and calculate the corresponding values of~$y$
by the first equation; and of~$\dfrac{dy}{dx}$ from the second
equation. Tabulating results, we have:
\[
\begin{array}{|c||*{6}{c|}}
\hline
\Strut
\Td[c]{x} & \Td[c]{0} & \Td{1\Z} & \Td[c]{2} & \Td{3\Z} & \Td[c]{4} & \Td{5\Z} \\
\hline
\Strut
\Td[c]{y} & \Td[c]{3} & \Td{3\frac{1}{4}} & \Td[c]{4} & \Td{5\frac{1}{4}} & \Td[c]{7} & \Td{9\frac{1}{4}} \\
\hline
\DStrut
\Td[c]{\dfrac{dy}{dx}} &
\Td[c]{0} & \Td{\frac{1}{2}} & \Td[c]{1} & \Td{1\frac{1}{2}} & \Td[c]{2} & \Td{2\frac{1}{2}} \\
\hline
\end{array}
\]
Then plot them out in two curves, \Figs{23}{and}{24}\DPtypo{}{,}
in \Fig{23} plotting the values of~$y$ against those of~$x$
and in \Fig{24} those of $\dfrac{dy}{dx}$ against those of~$x$. For
\DPPageSep{099.png}{87}%
any assigned value of~$x$, the \emph{height} of the ordinate
in the second curve is proportional to the \emph{slope} of the
first curve.

\Figures[2.5in]{099a}{099b}{23}{24}

If a curve comes to a sudden cusp, as in \Fig{25},
the slope at that point suddenly changes from a slope
\Figure{099c}{25}
upward to a slope downward. In that case $\dfrac{dy}{dx}$ will
clearly undergo an abrupt change from a positive to
a negative value.
\DPPageSep{100.png}{88}%

The following examples show further applications
of the principles just explained.

(4) Find the slope of the tangent to the curve
\[
y = \frac{1}{2x} + 3,
\]
at the point where $x = -1$. Find the angle which this
tangent makes with the curve $y = 2x^2 + 2$.

The slope of the tangent is the slope of the curve at
the point where they touch one another (see \Pageref{slope});
that is, it is the $\dfrac{dy}{dx}$ of the curve for that point. Here
$\dfrac{dy}{dx} = -\dfrac{1}{2x^2}$ and for $x = -1$, $\dfrac{dy}{dx} = -\dfrac{1}{2}$, which is the
slope of the tangent and of the curve at that point.
The tangent, being a straight line, has for equation
$y = ax + b$, and its slope is $\dfrac{dy}{dx} = a$, hence $a = -\dfrac{1}{2}$. Also
if $x= -1$, $y = \dfrac{1}{2(-1)} + 3 = 2\frac{1}{2}$; and as the tangent
passes by this point, the coordinates of the point must
satisfy the equation of the tangent, namely
\[
  y = -\dfrac{1}{2} x + b,
\]
so that $2\frac{1}{2} = -\dfrac{1}{2} × (-1) + b$ and $b = 2$; the equation of
the tangent is therefore $y = -\dfrac{1}{2} x + 2$.

Now, when two curves meet, the intersection being
a point common to both curves, its coordinates must
satisfy the equation of each one of the two curves;
\DPPageSep{101.png}{89}%
that is, it must be a solution of the system of simultaneous
equations formed by coupling together the
equations of the curves. Here the curves meet one
another at points given by the solution of
\begin{DPgather*}
\left\{
\begin{aligned}
  y &= 2x^2 + 2, \\
  y &= -\tfrac{1}{2} x + 2 \quad\text{or}\quad  2x^2 + 2 = -\tfrac{1}{2} x + 2;
\end{aligned}
\right. \displaybreak[1] \\
\lintertext{that is,}
x(2x + \tfrac{1}{2}) = 0.
\end{DPgather*}

This equation has for its solutions $x = 0$ and $x = -\tfrac{1}{4}$.
The slope of the curve $y = 2x^2 + 2$ at any point is
\[
\dfrac{dy}{dx} = 4x.
\]

For the point where $x = 0$, this slope is zero; the curve
is horizontal. For the point where
\[
x = -\dfrac{1}{4},\quad \dfrac{dy}{dx} = -1;
\]
hence the curve at that point slopes downwards to
the right at such an angle~$\theta$ with the horizontal that
$\tan \theta = 1$; that is, at~$45°$ to the horizontal.

The slope of the straight line is $-\tfrac{1}{2}$; that is, it slopes
downwards to the right and makes with the horizontal
an angle~$\phi$ such that $\tan \phi = \tfrac{1}{2}$; that is, an angle of
$26°~34'$. It follows that at the first point the curve
cuts the straight line at an angle of $26°~34'$, while at
the second it cuts it at an angle of $45° - 26°~34' = 18°~26'$.

(5) A straight line is to be drawn, through a point
whose coordinates are $x = 2$, $y = -1$, as tangent to the
curve $y = x^2 - 5x + 6$. Find the coordinates of the
point of contact.
\DPPageSep{102.png}{90}%

The slope of the tangent must be the same as the
$\dfrac{dy}{dx}$ of the curve; that is, $2x - 5$.

The equation of the straight line is $y = ax + b$, and
as it is satisfied for the values $x = 2$, $y = -1$, then
$-1 = a×2 + b$; also, its $\dfrac{dy}{dx} = a = 2x - 5$.

The $x$ and the $y$ of the point of contact must also
satisfy both the equation of the tangent and the
equation of the curve.

We have then
%[** TN: Omitting dot leaders.]
\begin{align*}
  y &= x^2 - 5x + 6, \tag*{(i)}   \\
  y &= ax + b,       \tag*{(ii)}  \\[-0.6\baselineskip]%[** Hard-coded dim]
% [** TN: Now set the left brace]
\smash{\left\{\begin{aligned} & \\ & \\ & \\ & \\ \end{aligned} \right.} \phantom{-1} & \\[-1.5ex]
 -1 &= 2a + b,       \tag*{(iii)} \\
  a &= 2x - 5,       \tag*{(iv)}
\end{align*}
four equations in $a$, $b$, $x$, $y$.

Equations (i) and~(ii) give $x^2 - 5x + 6 = ax+b$.

Replacing $a$ and~$b$ by their value in this, we get
\[
  x^2 - 5x + 6 = (2x - 5)x - 1 - 2(2x - 5),
\]
which simplifies to $x^2 - 4x + 3 = 0$, the solutions of
which are: $x = 3$ and $x = 1$. Replacing in~(i), we get
$y = 0$ and $y = 2$ respectively; the two points of contact
are then $x = 1$, $y = 2$, and $x = 3$, $y = 0$.

\Paragraph{Note.}---In all exercises dealing with curves, students
will find it extremely instructive to verify the deductions
obtained by actually plotting the curves.
\DPPageSep{103.png}{91}%


\Exercises{VIII} (See \Pageref[page]{AnsEx:VIII} for Answers.)

\begin{Problems}
\Item{(1)} Plot the curve $y = \tfrac{3}{4} x^2 - 5$, using a scale of
millimetres. Measure at points corresponding to
different values of~$x$, the angle of its slope.

Find, by differentiating the equation, the expression
for slope; and see, from a Table of Natural Tangents,
whether this agrees with the measured angle.

\Item{(2)} Find what will be the slope of the curve
\[
y = 0.12x^3 - 2,
\]
at the particular point that has as abscissa $x = 2$.

\Item{(3)} If $y = (x - a)(x - b)$, show that at the particular
point of the curve where $\dfrac{dy}{dx} = 0$, $x$ will have the value
$\tfrac{1}{2} (a + b)$.

\Item{(4)} Find the $\dfrac{dy}{dx}$ of the equation $y = x^3 + 3x$; and
calculate the numerical values of $\dfrac{dy}{dx}$ for the points
corresponding to $x = 0$, $x = \tfrac{1}{2}$, $x = 1$, $x = 2$.

\Item{(5)} In the curve to which the equation is $x^2 + y^2 = 4$,
find the values of~$x$ at those points where the slope ${} = 1$.

\Item{(6)} Find the slope, at any point, of the curve whose
equation is $\dfrac{x^2 }{3^2} + \dfrac{y^2}{2^2} = 1$; and give the numerical value
of the slope at the place where $x = 0$, and at that
where $x = 1$.

\Item{(7)} The equation of a tangent to the curve
$y = 5 - 2x + 0.5x^3$, being of the form $y = mx + n$, where
$m$ and~$n$ are constants, find the value of $m$ and~$n$ if
\DPPageSep{104.png}{92}%
the point where the tangent touches the curve has
$x=2$ for abscissa.

\Item{(8)} At what angle do the two curves
\[
y = 3.5x^2 + 2 \quad \text{and} \quad y = x^2 - 5x + 9.5
\]
cut one another?

\Item{(9)} Tangents to the curve $y = ± \sqrt{25-x^2}$ are drawn
at points for which $x = 3$ and $x = 4$. Find the coordinates
of the point of intersection of the tangents
and their mutual inclination.

\Item{(10)} A straight line $y = 2x - b$ touches a curve
$y = 3x^2 + 2$ at one point. What are the coordinates
of the point of contact, and what is the value of~$b$?
\end{Problems}
\DPPageSep{105.png}{93}%


\Chapter{XI}{Maxima and Minima}

\First{One} of the principal uses of the process of differentiating
is to find out under what conditions the value
of the thing differentiated becomes a maximum, or a
minimum. This is often exceedingly important in
engineering questions, where it is most desirable to
know what conditions will make the cost of working
a minimum, or will make the efficiency a maximum.

Now, to begin with a concrete case, let us take the
equation
\[
y = x^2 - 4x + 7.
\]
\Figure{105a}{26}

By assigning a number of successive values to~$x$,
and finding the corresponding values of~$y$, we can
\DPPageSep{106.png}{94}%
readily see that the equation represents a curve with
a minimum.
\[
\begin{array}{|c||c|c|c|c|c|c|}
\hline
\Strut
\Td[c]{x} & \Td[c]{0} & \Td[c]{1} & \Td[c]{2} & \Td[c]{3} & \Td[c]{4} & \Td[c]{\Z5} \\
\hline
\Strut
\Td[c]{y} & \Td[c]{7} & \Td[c]{4} & \Td[c]{3} & \Td[c]{4} & \Td[c]{7} & \Td[c]{12} \\
\hline
\end{array}
\]

These values are plotted in \Fig{26}, which shows
that $y$ has apparently a minimum value of~$3$, when~$x$
is made equal to~$2$. But are you sure that the
minimum occurs at~$2$, and not at $2 \tfrac{1}{4}$ or at $1 \tfrac{3}{4}$?

Of course it would be possible with any algebraic
expression to work out a lot of values, and in this
way arrive gradually at the particular value that
may be a maximum or a minimum.

\Figure{106a}{27}

Here is another example:

Let \hfill $y = 3x - x^2$. \hfill\null

Calculate a few values thus:
\[
\begin{array}{|c||c|c|c|c|c|c|c|}
\hline
\Strut
\Td[c]{x} & \Td[c]{-1} & \Td[c]{0} & \Td[c]{1} & \Td[c]{2} & \Td[c]{3} & \Td{4} & \Td{5} \\
\hline
\Strut
\Td[c]{y} & \Td[c]{-4} & \Td[c]{0} & \Td[c]{2} & \Td[c]{2} & \Td[c]{0} & \Td{-4} & \Td{-10} \\
\hline
\end{array}
\]
\DPPageSep{107.png}{95}%

Plot these values as in \Fig{27}.

It will be evident that there will be a maximum
somewhere between $x = 1$ and $x = 2$; and the thing
\emph{looks} as if the maximum value of~$y$ ought to be
about $2 \tfrac{1}{4}$. Try some intermediate values. If $x = 1 \tfrac{1}{4}$,
$y = 2.187$; if $x = 1 \tfrac{1}{2}$, $y = 2.25$; if $x = 1.6$, $y = 2.24$.
How can we be sure that $2.25$ is the real maximum,
or that it occurs exactly when $x = 1 \tfrac{1}{2}$?

Now it may sound like juggling to be assured that
there is a way by which one can arrive straight at a
maximum (or minimum) value without making a lot of
preliminary trials or guesses. And that way depends
on differentiating. Look back to an earlier page~(\pageref{curve}) for
the remarks about \Figs{14}{and}{15}, and you will see
that whenever a curve gets either to its maximum
or to its minimum height, at that point its $\dfrac{dy}{dx} = 0$.
Now this gives us the clue to the dodge that is
wanted. When there is put before you an equation,
and you want to find that value of~$x$ that will make
its~$y$ a minimum (or a maximum), \emph{first differentiate
it}, and having done so, write its $\dfrac{dy}{dx}$ as \emph{equal to zero},
and then solve for~$x$. Put this particular value of~$x$
into the original equation, and you will then get the
required value of~$y$. This process is commonly called
''equating to zero.''

To see how simply it works, take the example with
which this chapter opens, namely
\[
y = x^2 - 4x + 7.
\]
\DPPageSep{108.png}{96}%
%
Differentiating, we get:
\[
\dfrac{dy}{dx} = 2x - 4.
\]
Now equate this to zero, thus:
\[
2x - 4 = 0.
\]
Solving this equation for~$x$, we get:
\begin{align*}
2x &= 4, \\
 x &= 2.
\end{align*}

Now, we know that the maximum (or minimum)
will occur exactly when $x=2$.

Putting the value $x=2$ into the original equation,
we get % [ ** F1: Starting alignment on a new line]
\begin{align*}
y &= 2^2 - (4×2) + 7 \\
  &= 4 - 8 + 7       \\
  &= 3.
\end{align*}

Now look back at \Fig{26}, and you will see that the
minimum occurs when $x = 2$, and that this minimum
of $y = 3$.

Try the second example (\Fig{24}), which is
\begin{DPalign*}
y &= 3x - x^2. \\
\lintertext{\indent Differentiating,}
\frac{dy}{dx} &= 3 - 2x. \\
\intertext{\indent Equating to zero,}
3 - 2x &= 0, \\
\lintertext{whence}
x &= 1 \tfrac{1}{2}; \\
\intertext{and putting this value of~$x$ into the original equation, we find:}
y &= 4 \tfrac{1}{2} - (1 \tfrac{1}{2} × 1 \tfrac{1}{2}), \\
y &= 2 \tfrac{1}{4}.
\end{DPalign*}
This gives us exactly the information as to which
the method of trying a lot of values left us uncertain.
\DPPageSep{109.png}{97}%

Now, before we go on to any further cases, we have
two remarks to make. When you are told to equate
$\dfrac{dy}{dx}$ to zero, you feel at first (that is if you have any
wits of your own) a kind of resentment, because you
know that $\dfrac{dy}{dx}$ has all sorts of different values at
different parts of the curve, according to whether it
is sloping up or down. So, when you are suddenly
told to write
\[
\frac{dy}{dx} = 0,
\]
you resent it, and feel inclined to say that it can't be
true. Now you will have to understand the essential
difference between ''an equation,'' and ''an equation
of condition.'' Ordinarily you are dealing with equations
that are true in themselves, but, on occasions,
of which the present are examples, you have to write
down equations that are not necessarily true, but are
only true if certain conditions are to be fulfilled; and
you write them down in order, by solving them, to
find the conditions which make them true. Now we
want to find the particular value that $x$ has when
the curve is neither sloping up nor sloping down, that
is, at the particular place where $\dfrac{dy}{dx} = 0$. So, writing
$\dfrac{dy}{dx} = 0$ does \emph{not} mean that it always is $=0$; but you
write it down \emph{as a condition} in order to see how
much $x$ will come out if $\dfrac{dy}{dx}$ is to be zero.
\DPPageSep{110.png}{98}%

The second remark is one which (if you have any
wits of your own) you will probably have already
made: namely, that this much-belauded process of
equating to zero entirely fails to tell you whether
the~$x$ that you thereby find is going to give you
a \emph{maximum} value of~$y$ or a \emph{minimum} value of~$y$.
Quite so. It does not of itself discriminate; it finds
for you the right value of~$x$ but leaves you to find
out for yourselves whether the corresponding~$y$ is a
maximum or a minimum. Of course, if you have
plotted the curve, you know already which it will be.

For instance, take the equation:
\[
y = 4x + \frac{1}{x}.
\]

Without stopping to think what curve it corresponds
to, differentiate it, and equate to zero:
\begin{DPalign*}
\frac{dy}{dx}  &= 4 - x^{-2} = 4 - \frac{1}{x^2} = 0; \\
\lintertext{whence}
x &= \tfrac{1}{2}; \\
\intertext{and, inserting this value,}
y &= 4
\end{DPalign*}
will be either a maximum or else a minimum. But
which? You will hereafter be told a way, depending
upon a second differentiation, (see Chap.~XII., \Pageref{chap:XII}).
But at present it is enough if you will simply try
any other value of~$x$ differing a little from the one
found, and see whether with this altered value the
corresponding value of~$y$ is less or greater than that
already found.
\DPPageSep{111.png}{99}%

Try another simple problem in maxima and minima.
Suppose you were asked to divide any number into
two parts, such that the product was a maximum?
How would you set about it if you did not know
the trick of equating to zero? I suppose you could
worry it out by the rule of try, try, try again. Let
$60$ be the number. You can try cutting it into two
parts, and multiplying them together. Thus, $50$ times
$10$ is $500$; $52$ times $8$ is $416$; $40$ times $20$ is $800$; $45$
times $15$ is $675$; $30$ times $30$ is $900$. This looks like
a maximum: try varying it. $31$ times $29$ is $899$,
which is not so good; and $32$ times $28$ is $896$, which
is worse. So it seems that the biggest product will
be got by dividing into two equal halves.

Now see what the calculus tells you. Let the
number to be cut into two parts be called~$n$. Then
if $x$ is one part, the other will be~$n-x$, and the product
will be $x(n-x)$ or~$nx-x^2$. So we write $y=nx-x^2$.
Now differentiate and equate to zero;
\begin{DPalign*}
\dfrac{dy}{dx} = n - 2x = 0\\
\lintertext{Solving for~$x$, we get} \dfrac{n}{2} = x.\\
\end{DPalign*}
So now we \emph{know} that whatever number $n$ may be,
we must divide it into two equal parts if the product
of the parts is to be a maximum; and the value of
that maximum product will always be $ = \tfrac{1}{4} n^2$.

This is a very useful rule, and applies to any number
of factors, so that if $m+n+p=$ a constant number,
$m×n×p$ is a maximum when $m=n=p$.
\DPPageSep{112.png}{100}%


\newpage%[** TN: Text block-dependent page break]
\Subsection{Test Case.}
Let us at once apply our knowledge to a case that
we can test.
%
\begin{DPalign*}
\lintertext{\indent Let} y &= x^2 - x;
\end{DPalign*}
and let us find whether this function has a maximum
or minimum; and if so, test whether it is a maximum
or a minimum.

Differentiating, we get
\begin{DPalign*}
\frac{dy}{dx} &= 2x - 1. \\
\intertext{\indent Equating to zero, we get}
2x - 1 &= 0, \\
\lintertext{whence}
2x &= 1, \\
\lintertext{or}
x &= \tfrac{1}{2}.
\end{DPalign*}

That is to say, when $x$ is made $=\frac{1}{2}$, the corresponding
value of~$y$ will be either a maximum or a minimum.
Accordingly, putting $x=\frac{1}{2}$ in the original equation, we
get
\begin{DPalign*}
y &= (\tfrac{1}{2})^2 - \tfrac{1}{2}, \\
\lintertext{or}
y &= -\tfrac{1}{4}.
\end{DPalign*}

Is this a maximum or a minimum? To test it, try
putting $x$ a little bigger than~$\frac{1}{2}$,---say make~$x=0.6$.
Then
\[
y = (0.6)^2 - 0.6 = 0.36 - 0.6 = -0.24,
\]
which is higher up than~$-0.25$; showing that
$y = -0.25$ is a \emph{minimum}.

Plot the curve for yourself, and verify the calculation.
\DPPageSep{113.png}{101}%


\Examples{Further Examples.}
A most interesting example is afforded by a curve
that has both a maximum and a minimum. Its
equation is:
\begin{DPalign*}
y &=\tfrac{1}{3} x^3 - 2x^2 + 3x + 1. \\
\lintertext{\indent Now} \dfrac{dy}{dx} &= x^2 - 4x +3.
\end{DPalign*}

\Figure[2.5in]{113a}{28}

Equating to zero, we get the quadratic,
\[
x^2 - 4x +3 = 0;
\]
and solving the quadratic gives us \emph{two} roots, viz.
\[
\left\{
\begin{aligned}
x &= 3 \\
x &= 1.
\end{aligned}
\right.
\]

Now, when $x=3$, $y=1$; and when $x=1$, $y=2\frac{1}{3}$.
The first of these is a minimum, the second a
maximum.

The curve itself may be plotted (as in \Fig{28})
\DPPageSep{114.png}{102}%
from the values calculated, as below, from the
original equation.
\[
\begin{array}{|c||*{8}{c|}}
\hline
\Strut
\Td[c]{x} & \Td{-1\Z} & \Td[c]{0} & \Td[c]{1\Z} & \Td[c]{2\Z} & \Td[c]{3} & \Td{4\Z} & \Td{5\Z} & \Td{6} \\
\hline
\Strut
\Td[c]{y} & \Td{-4\tfrac{1}{3}} & \Td[c]{1} &  \Td[c]{2\tfrac{1}{3}} &  \Td[c]{1\tfrac{2}{3}} & \Td[c]{1} & \Td{2\tfrac{1}{3}} & \Td{7\tfrac{2}{3}} & \Td{19} \\
\hline
\end{array}
\]

A further exercise in maxima and minima is
afforded by the following example:

The equation to a circle of radius~$r$, having its
centre~$C$ at the point whose coordinates are $x=a$,
$y=b$, as depicted in \Fig{29}, is:
\[
(y-b)^2 + (x-a)^2 = r^2.
\]
\Figure[2.5in]{114a}{29} %[** TN: Moved up]

This may be transformed into
\[
y = \sqrt{r^2-(x-a)^2} + b.
\]

Now we know beforehand, by mere inspection of
the figure, that when $x=a$, $y$~will be either at its
maximum value,~$b+r$, or else at its minimum
value,~$b-r$. But let us not take advantage of this
\DPPageSep{115.png}{103}%
knowledge; let us set about finding what value
of~$x$ will make $y$ a maximum or a minimum, by the
process of differentiating and equating to zero.
\begin{align*}
\frac{dy}{dx} &= \frac{1}{2} \frac{1}{\sqrt{r^2-(x-a)^2}} × (2a-2x), \\
\intertext{which reduces to}
\frac{dy}{dx} &= \frac{a-x}{\sqrt{r^2-(x-a)^2}}.
\end{align*}

Then the condition for $y$ being maximum or
minimum is:
\[
\frac{a-x}{\sqrt{r^2-(x-a)^2}} = 0.
\]

Since no value whatever of~$x$ will make the denominator
infinite, the only condition to give zero is
\begin{align*}
x &= a. \\
\intertext{\indent Inserting this value in the original equation for
the circle, we find}
y &= \sqrt{r^2}+b;
\intertext{and as the root of $r^2$ is either $+r$ or~$-r$, we have
two resulting values of~$y$,}
%[** TN: Want to align on = while keeping left brace]
\left\{\begin{aligned}y \\ y\end{aligned}\right. &
\begin{aligned}= b & + r \\ = b & - r.\end{aligned}
\end{align*}

The first of these is the maximum, at the top;
the second the minimum, at the bottom.
\DPPageSep{116.png}{104}%

If the curve is such that there is no place that is a
maximum or minimum, the process of equating to
zero will yield an impossible result. For instance:
\begin{DPalign*}
\lintertext{\indent Let}
y &= ax^3 + bx + c. \\ % [** TN: a, b having the same sign, of course]
\lintertext{\indent Then}
\frac{dy}{dx} &= 3ax^2 + b.
\end{DPalign*}

Equating this to zero, we get $3ax^2 + b = 0$,
\[
x^2 = \frac{-b}{3a}, \quad\text{and}\quad x = \sqrt{\frac{-b}{3a}},\text{ which is impossible.}
\]
Therefore $y$ has no maximum nor\DPnote{** TN: [sic]} minimum.

A few more worked examples will enable you to
thoroughly master this most interesting and useful
application of the calculus.

(1) What are the sides of the rectangle of maximum
area inscribed in a circle of radius~$R$?

If one side be called~$x$,
\[
\text{the other side} = \sqrt{(\text{diagonal})^2 - x^2};
\]
and as the diagonal of the rectangle is necessarily a
diameter, the other side~$ = \sqrt{4R^2 - x^2}$.

Then, area of rectangle $S = x\sqrt{4R^2 - x^2}$,
\[
\frac{dS}{dx} = x × \dfrac{d\left(\sqrt{4R^2 - x^2}\,\right)}{dx} + \sqrt{4R^2 - x^2} × \dfrac{d(x)}{dx}.
\]

If you have forgotten how to differentiate $\sqrt{4R^2-x^2}$,
here is a hint: write $4R^2-x^2=w$ and $y=\sqrt{w}$, and
seek $\dfrac{dy}{dw}$ and $\dfrac{dw}{dx}$; fight it out, and only if you can't
get on refer to \Pageref[page]{dodge}.
\DPPageSep{117.png}{105}%

You will get
\[
\dfrac{dS}{dx}
  = x × -\dfrac{x}{\sqrt{4R^2 - x^2}} + \sqrt{4R^2 - x^2}
  = \dfrac{4R^2 - 2x^2}{\sqrt{4R^2 - x^2}}.
\]

For maximum or minimum we must have
\[
\dfrac{4R^2 - 2x^2}{\sqrt{4R^2 - x^2}} = 0;
\]
that is, $4R^2 - 2x^2 = 0$ and $x = R\sqrt{2}$.

The other side ${} = \sqrt{4R^2 - 2R^2} = R\sqrt{2}$; the two sides
are equal; the figure is a square the side of which is
equal to the diagonal of the square constructed on the
radius. In this case it is, of course, a maximum with
which we are dealing.

(2) What is the radius of the opening of a conical
vessel the sloping side of which has a length~$l$ when
the capacity of the vessel is greatest?

If $R$ be the radius and $H$ the corresponding height,
$H = \sqrt{l^2 - R^2}$.
\[
\text{Volume } V = \pi R^2 × \dfrac{H}{3} = \pi R^2 × \dfrac{\sqrt{l^2 - R^2}}{3}.
\]

Proceeding as in the previous problem, we get
\begin{align*}
\dfrac{dV}{dR}
  &= \pi R^2 × -\dfrac{R}{3\sqrt{l^2 - R^2}} + \dfrac{2\pi R}{3} \sqrt{l^2 - R^2} \\
  &= \dfrac{2\pi R(l^2 - R^2) - \pi R^3}{3\sqrt{l^2 - R^2}} = 0
\end{align*}
for maximum or minimum.

Or, $2\pi R(l^2 - R^2) - \pi R^2 = 0$, and $R = l\sqrt{\tfrac{2}{3}}$, for a maximum,
obviously.
\DPPageSep{118.png}{106}%

(3) Find the maxima and minima of the function
\[
y = \dfrac{x}{4-x} + \dfrac{4-x}{x}.
\]

We get
\[
\dfrac{dy}{dx} = \dfrac{(4-x)-(-x)}{(4-x)^2} + \dfrac{-x - (4-x)}{x^2} = 0
\]
for maximum or minimum; or
\[
\dfrac{4}{(4-x)^2} - \dfrac{4}{x^2} = 0 \quad\text{and}\quad x = 2.
\]

There is only one value, hence only one maximum
or minimum.
\begin{align*}
\text{For}\quad x &= 2,\phantom{.5}\quad y = 2, \\
\text{for}\quad x &= 1.5,\quad y = 2.27,   \\
\text{for}\quad x &= 2.5,\quad y = 2.27;
\end{align*}
it is therefore a minimum. (It is instructive to plot
the graph of the function.)

(4) Find the maxima and minima of the function
$y = \sqrt{1+x} + \sqrt{1-x}$. (It will be found instructive to
plot the graph.)

Differentiating gives at once (see example No.~1,
\Pageref{ExNo1})
\[
\dfrac{dy}{dx} = \dfrac{1}{2\sqrt{1+x}} - \dfrac{1}{2\sqrt{1-x}} = 0
\]
for maximum or minimum.

Hence $\sqrt{1+x} = \sqrt{1-x}$ and $x = 0$, the only solution

For $x=0$,\quad $y=2$.

For $x=±0.5$, $y= 1.932$, so this is a maximum.
\DPPageSep{119.png}{107}%

(5) Find the maxima and minima of the function
\[
y = \dfrac{x^2-5}{2x-4}.
\]

We have
\[
\dfrac{dy}{dx} = \dfrac{(2x-4) × 2x - (x^2-5)2}{(2x-4)^2} = 0
\]
for maximum or minimum; or
\[
\dfrac{2x^2 - 8x + 10}{\DPtypo{(2x - 5)^2}{(2x - 4)^2}} = 0;
\]
or $x^2 - 4x + 5 = 0$; which has for solutions
\[
x = \tfrac{5}{2} ± \sqrt{-1}.
\]

These being imaginary, there is no real value of~$x$
for which $\dfrac{dy}{dx} = 0$; hence there is neither maximum nor
minimum.

(6) Find the maxima and minima of the function
\[
(y-x^2)^2 = x^5.
\]

This may be written $y = x^2 ± x^{\efrac{5}{2}}$.
\[
\dfrac{dy}{dx} = 2x ± \tfrac{5}{2} x^{\efrac{3}{2}} = 0 \quad\text{for maximum or minimum};
\]
that is, $x(2 ± \tfrac{5}{2} x^{\efrac{1}{2}}) = 0$, which is satisfied for $x = 0$,
and for $2 ± \tfrac{5}{2} x^{\efrac{1}{2}} = 0$, that is for $x=\tfrac{16}{25}$. So there are
two solutions.

Taking first $x = 0$. If $x = -0.5$, $y = 0.25 ± \sqrt[2]{-(.5)^5}$,
and if $x = +0.5$, $y = 0.25 ± \sqrt[2]{\DPtypo{.55}{(.5)^5}}$. On one side $y$~is
imaginary; that is, there is no value of~$y$ that can be
represented by a graph; the latter is therefore entirely
on the right side of the axis of~$y$ (see \Fig{30}).

On plotting the graph it will be found that the
\DPPageSep{120.png}{108}%
curve goes to the origin, as if there were a minimum
there; but instead of continuing beyond, as it should
do for a minimum, it retraces its steps (forming what
is called a ''cusp''). There is no minimum, therefore,
although the condition for a minimum is satisfied,
namely $\dfrac{dy}{dx} = 0$. It is necessary therefore always to
check by taking one value on either side.

\Figure[2.75in]{120a}{30}

Now, if we take $x = \tfrac{16}{25} = 0.64$. If $x = 0.64$, $y = 0.7373$
and $y = 0.0819$; if $x = 0.6$, $y$~becomes $0.6389$ and~$0.0811$;
and if $x = 0.7$, $y$~becomes $0.8996$ and~$0.0804$.

This shows that there are two branches of the curve;
the upper one does not pass through a maximum, but
the lower one does.

(7) A cylinder whose height is twice the radius of
the base is increasing in volume, so that all its parts
\DPPageSep{121.png}{109}%
keep always in the same proportion to each other;
that is, at any instant, the cylinder is \emph{similar} to the
original cylinder. When the radius of the base is
$r$~feet, the surface area is increasing at the rate of
$20$~square inches per~second; at what rate is its
volume then increasing?
\begin{align*}
\text{Area}   &= S = 2(\pi r^2)+ 2 \pi r × 2r = 6 \pi r^2.\\
\text{Volume} &= V = \pi r^2 × 2r=2 \pi r^3.\\
\frac{dS}{dr} &= 12\pi r,\quad \frac{dV}{dr}=6 \pi r^2,\\
dS            &= 12\pi r\, dr=20,\quad dr=\frac{20}{12 \pi r},\\
dV            &=  6\pi r^2\, dr = 6 \pi r^2 × \frac{20}{12 \pi r} = 10r.
\end{align*}

The volume changes at the rate of $10r$ cubic inches.

\tb

Make other examples for yourself. There are few
subjects which offer such a wealth for interesting
examples.


\Exercises{IX} (See \Pageref[page]{AnsEx:IX} for Answers.)

\begin{Problems}
\Item{(1)} What values of~$x$ will make $y$ a maximum
and a minimum, if $y=\dfrac{x^2}{x+1}$?

\Item{(2)} What value of~$x$ will make $y$ a maximum in
the equation $y=\dfrac{x}{a^2+x^2}$?
\DPPageSep{122.png}{110}%

\Item{(3)} A line of length~$p$ is to be cut up into $4$~parts
and put together as a rectangle. Show that the area
of the rectangle will be a maximum if each of its
sides is equal to~$\frac{1}{4}p$.

\Item[Ex9No4]{(4)} A piece of string $30$~inches long has its two
ends joined together and is stretched by $3$~pegs so
as to form a triangle. What is the largest triangular
area that can be enclosed by the string?

\Item{(5)} Plot the curve corresponding to the equation
\[
y = \frac{10}{x} + \frac{10}{8-x};
\]
also find~$\dfrac{dy}{dx}$, and deduce the value of~$x$ that will
make $y$ a minimum; and find that minimum value
of~$y$.

\Item{(6)} If $y = x^5-5x$, find what values of~$x$ will make
$y$ a maximum or a minimum.

\Item{(7)} What is the smallest square that can be inscribed
in a given square?

\Item{(8)} Inscribe in a given cone, the height of which
is equal to the radius of the base, a cylinder
(\textit{a})~whose volume is a maximum; (\textit{b})~whose lateral
area is a maximum; (\textit{c})~whose total area is a
maximum.

\Item{(9)} Inscribe in a sphere, a cylinder (\textit{a})~whose
volume is a maximum; (\textit{b})~whose lateral area is a
maximum; (\textit{c})~whose total area is a maximum.
\DPPageSep{123.png}{111}%

\Item{(10)} A spherical balloon is increasing in volume.
If, when its radius is $r$~feet, its volume is increasing
at the rate of $4$~cubic feet per~second, at what rate is
its surface then increasing?

\Item{(11)} Inscribe in a given sphere a cone whose volume
is a maximum.

\Item{(12)} The current~$C$ given by a battery of $N$~similar
voltaic cells is $C=\dfrac{n×E}{R+\dfrac{rn^2}{N}}$, where $E$,~$R$,~$r$, are constants
and $n$~is the number of cells coupled in series. Find
the proportion of $n$~to~$N$ for which the current is
greatest.
\end{Problems}
\DPPageSep{124.png}{112}%


\Chapter{XII}{Curvature of Curves}

\First{Returning} to the process of successive differentiation,
it may be asked: Why does anybody want to
differentiate twice over? We know that when the
variable quantities are space and time, by differentiating
twice over we get the acceleration of a
moving body, and that in the geometrical interpretation,
as applied to curves, $\dfrac{dy}{dx}$~means the \emph{slope} of the
curve. But what can $\dfrac{d^2 y}{dx^2}$~mean in this case? Clearly
it means the rate (per unit of length~$x$) at which the
slope is changing---in brief, it is \emph{a measure of the
curvature of the slope}.

\Figures{124a}{124b}{31}{32}

Suppose a slope constant, as in \Fig{31}.

Here, $\dfrac{dy}{dx}$ is of constant value.
\DPPageSep{125.png}{113}%

Suppose, however, a case in which, like \Fig{32},
the slope itself is getting greater upwards, then
$\dfrac{d\left(\dfrac{dy}{dx}\right)}{dx}$, that is,~$\dfrac{d^2y}{dx^2}$, will be \emph{positive}.

If the slope is becoming less as you go to the right
(as in \Fig{14}, \Pageref{fig:14}), or as in \Fig{33}, then, even %[ ** Page]
though the curve may be going upward, since the
change is such as to diminish its slope, its $\dfrac{d^2y}{dx^2}$ will
be \emph{negative}.

\Figure{125a}{33}

It is now time to initiate you into another secret---how
to tell whether the result that you get by
''equating to zero'' is a maximum or a minimum.
The trick is this: After you have differentiated
(so as to get the expression which you equate to
zero), you then differentiate a second time, and look
whether the result of the second differentiation is
\emph{positive} or \emph{negative}. If $\dfrac{d^2y}{dx^2}$ comes out \emph{positive}, then
you know that the value of~$y$ which you got was
a \emph{minimum}; but if $\dfrac{d^2y}{dx^2}$ comes out \emph{negative}, then
\DPPageSep{126.png}{114}%
the value of~$y$ which you got must be a \emph{maximum}.
That's the rule.

The reason of it ought to be quite evident. Think
of any curve that has a minimum point in it (like
\Fig{15}, \Pageref{fig:15}), or like \Fig{34}, where the point of %[ ** Page]
minimum~$y$ is marked~$M$, and the curve is \emph{concave}
upwards. To the left of~$M$ the slope is downward,
that is, negative, and is getting less negative. To the
right of~$M$ the slope has become upward, and is
\Figures{126a}{126b}{34}{35}
getting more and more upward. Clearly the change
of slope as the curve passes through~$M$ is such that
$\dfrac{d^2y}{dx^2}$~is \emph{positive}, for its operation, as $x$~increases toward
the right, is to convert a downward slope into an
upward one.

Similarly, consider any curve that has a maximum
point in it (like \Fig{16}, \Pageref{fig:16}), or like \Fig{35}, where %[ ** Page]
the curve is \emph{convex}, and the maximum point is
marked~$M$. In this case, as the curve passes through~$M$
from left to right, its upward slope is converted
\DPPageSep{127.png}{115}%
into a downward or negative slope, so that in this
case the ''slope of the slope'' $\dfrac{d^2y}{dx^2}$ is \emph{negative}.

Go back now to the examples of the last chapter
and verify in this way the conclusions arrived at as to
whether in any particular case there is a maximum
or a minimum. You will find below a few worked
out examples.

\tb

(1) Find the maximum or minimum of
\begin{align*}
\text{(\textit{a})}\quad y &= 4x^2-9x-6; \qquad \text{(\textit{b})}\quad y = 6 + 9x-4x^2; \\
\intertext{and ascertain if it be a maximum or a minimum in
each case.}
\text{(\textit{a})}\quad \dfrac{dy}{dx}
  &= 8x-9=0;\quad x=1\tfrac{1}{8},\quad \text{and } y = -11.065.\\
%
\dfrac{d^2y}{dx^2}
  &= 8;\quad \text{it is~$+$; hence it is a minimum.} \\
%
\text{(\textit{b})}\quad \DPtypo{\dfrac{dx}{dy}}{\dfrac{dy}{dx}}
  &= 9-8x=0;\quad x = 1\tfrac{1}{8};\quad \text{and } y = +11.065.\\
%
\dfrac{d^2y}{dx^2}
  &= -8;\quad \text{it is~$-$; hence it is a maximum.}
\end{align*}

(2) Find the maxima and minima of the function
$y = x^3-3x+16$.
\begin{align*}
\dfrac{dy}{dx}
  &= 3x^2 - 3 = 0;\quad x^2 = 1;\quad \text{and } x = ±1.\\
%
\dfrac{d^2y}{dx^2}
  &= 6x;\quad \text{for $x = 1$; it is~$+$};
\end{align*}
hence $x=1$ corresponds to a minimum $y=14$. For
$x=-1$ it is~$-$; hence $x=-1$ corresponds to a maximum
$y=+18$.
\DPPageSep{128.png}{116}%

(3) Find the maxima and minima of $y=\dfrac{x-1}{x^2+2}$.
\[
\frac{dy}{dx} = \frac{(x^2+2) × 1 - (x-1) × 2x}{(x^2+2)^2}
  = \frac{2x - x^2 + 2}{(x^2 + 2)^2} = 0;
\]
or $x^2 - 2x - 2 = 0$, whose solutions are $x =+2.73$ and
$x=-0.73$.
\begin{align*}
\dfrac{d^2y}{dx^2}
  &= - \frac{(x^2 + 2)^2 × (2x-2) - (x^2 - 2x - 2)(4x^3 + 8x)}{(x^2 + 2)^4} \\
  &= - \frac{2x^5 - 6x^4 - 8x^3 - 8x^2 - 24x + 8}{(x^2 + 2)^4}.
\end{align*}

The denominator is always positive, so it is sufficient
to ascertain the sign of the numerator.

If we put $x = 2.73$, the numerator is negative; the
maximum, $y = 0.183$.

If we put $x=-0.73$, the numerator is positive; the
minimum, $y=-0.683$.

(4) The expense~$C$ of handling the products of a
certain factory varies with the weekly output~$P$
according to the relation $C = aP + \dfrac{b}{c+P} + d$, where
$a$,~$b$, $c$,~$d$ are positive constants. For what output
will the expense be least?
\[
\dfrac{dC}{dP} = a - \frac{b}{(c+P)^2} = 0\quad \text{for maximum or minimum;}
\]
hence $a = \dfrac{b}{(c+P)^2}$ and $P = ±\sqrt{\dfrac{b}{a}} - c$.

As the output cannot be negative, $P=+\sqrt{\dfrac{b}{a}} - c$.
\DPPageSep{129.png}{117}%
\begin{DPalign*}
\lintertext{\indent Now}
\frac{d^2C}{dP^2} &= + \frac{b(2c + 2P)}{(c + P)^4},
\end{DPalign*}
which is positive for all the values of~$P$; hence
$P = +\sqrt{\dfrac{b}{a}} - c$ corresponds to a minimum.

(5) The total cost per hour~$C$ of lighting a building
with $N$~lamps of a certain kind is
\[
C = N\left(\frac{C_l}{t} + \frac{EPC_e}{1000}\right),
\]
where $E$ is the commercial efficiency (watts per candle),
\begin{align*}
&\text{$P$~is the candle power of each lamp,} \\
&\text{$t$~is the average life of each lamp in hours,} \\
&\text{$C_l =$ cost of renewal in pence per hour of use,} \\
&\text{$C_e =$ cost of energy per $1000$~watts per~hour.}
\end{align*}

Moreover, the relation connecting the average life
of a lamp with the commercial efficiency at which it
is run is approximately $t = mE^n$, where $m$~and~$n$ are
constants depending on the kind of lamp.

Find the commercial efficiency for which the total
cost of lighting will be least.
%
\begin{DPalign*}
\lintertext{\indent We have}
C &= N\left(\frac{C_l}{m} E^{-n} + \frac{PC_e}{1000} E\right), \\
\dfrac{dC}{dE}
  &= \frac{PC_e}{1000} - \frac{nC_l}{m} E^{-(n+1)} = 0
\end{DPalign*}
for maximum or minimum.
\[
E^{n+1} = \frac{1000 × nC_l}{mPC_e}\quad \text{and}\quad
E = \sqrt[n+1]{\frac{1000 × nC_l}{mPC_e}}.
\]
\DPPageSep{130.png}{118}%

This is clearly for minimum, since
\[
\frac{d^2C}{dE^2} = (n + 1) \frac{nC_l}{m} E^{-(n+2)},
\]
which is positive for a positive value of~$E$.

For a particular type of $16$~candle-power lamps,
$C_l= 17$~pence, $C_e=5$~pence; and it was found that
$m=10$ and~$n=3.6$.
\[
E = \sqrt[4.6]{\frac{1000 × 3.6 × 17}{10 × 16 × 5}}
  = 2.6\text{ watts per candle-power}.
\]


\Exercises{X} (You are advised to plot the graph
of any numerical example.) (See \Pageref{AnsEx:X} for the
Answers.)
\begin{Problems}
\Item{(1)} Find the maxima and minima of
\[
y = x^3 + x^2 - 10x + 8.
\]

\Item{(2)} Given $y = \dfrac{b}{a}x - cx^2$, find expressions for~$\dfrac{dy}{dx}$, and
for~$\dfrac{d^2y}{dx^2}$, also find the value of~$x$ which makes $y$ a
maximum or a minimum, and show whether it is
maximum or minimum.

\Item{(3)} Find how many maxima and how many minima
there are in the curve, the equation to which is
\[
y = 1 - \frac{x^2}{2} + \frac{x^4}{24};
\]
and how many in that of which the equation is
\[
y = 1 - \frac{x^2}{2} + \frac{x^4}{24} - \frac{x^6}{720}.
\]
\DPPageSep{131.png}{119}%

\Item{(4)} Find the maxima and minima of
\[
y=2x+1+\frac{5}{x^2}.
\]

\Item{(5)} Find the maxima and minima of
\[
y=\frac{3}{x^2+x+1}.
\]

\Item{(6)} Find the maxima and minima of
\[
y=\frac{5x}{2+x^2}.
\]

\Item{(7)} Find the maxima and minima of
\[
y=\frac{3x}{x^2-3} + \frac{x}{2} + 5.
\]

\Item{(8)} Divide a number~$N$ into two parts in such a
way that three times the square of one part plus
twice the square of the other part shall be a
minimum.

\Item{(9)} The efficiency~$u$ of an electric generator at
different values of output~$x$ is expressed by the
general equation:
\[
u=\frac{x}{a+bx+cx^2};
\]
where $a$ is a constant depending chiefly on the energy
losses in the iron and $c$~a constant depending chiefly
on the resistance of the copper parts. Find an expression
for that value of the output at which the
efficiency will be a maximum.
\DPPageSep{132.png}{120}%

\Item{(10)} Suppose it to be known that consumption of
coal by a certain steamer may be represented by the
formula $y = 0.3 + 0.001v^3$; where $y$~is the number of
tons of coal burned per hour and $v$~is the speed
expressed in nautical miles per hour. The cost of
wages, interest on capital, and depreciation of that
ship are together equal, per hour, to the cost of
$1$~ton of coal. What speed will make the total cost
of a voyage of $1000$ nautical miles a minimum?
And, if coal costs $10$~shillings per ton, what will that
minimum cost of the voyage amount to?

\Item{(11)} Find the maxima and minima of\Pagelabel{Ex:X11}%
\[
y = ±\frac{x}{6}\sqrt{x(10-x)}.
\]

\Item{(12)} Find the maxima and minima of
\[
y= 4x^3 - x^2 - 2x + 1.
\]
\end{Problems}
\DPPageSep{133.png}{121}%


\Chapter{XIII}{Other Useful Dodges}

\Section{Partial Fractions.}

\First{We} have seen that when we differentiate a fraction
we have to perform a rather complicated operation;
and, if the fraction is not itself a simple one, the result
is bound to be a complicated expression. If we could
split the fraction into two or more simpler fractions
such that their sum is equivalent to the original
fraction, we could then proceed by differentiating
each of these simpler expressions. And the result of
differentiating would be the sum of two (or more)
differentials, each one of which is relatively simple;
while the final expression, though of course it will be
the same as that which could be obtained without
resorting to this dodge, is thus obtained with much
less effort and appears in a simplified form.

Let us see how to reach this result. Try first the
job of adding two fractions together to form a resultant
fraction. Take, for example, the two fractions $\dfrac{1}{x+1}$
and~$\dfrac{2}{x-1}$. Every schoolboy can add these together
and find their sum to be~$\dfrac{3x+1}{x^2-1}$. And in the same
\DPPageSep{134.png}{122}%
way he can add together three or more fractions.
Now this process can certainly be reversed:\Pagelabel{partfracs2} that is to
say, that if this last expression were given, it is certain
that it can somehow be split back again into its
original components or partial fractions. Only we do
not know in every case that may be presented to us
\emph{how} we can so split it. In order to find this out
we shall consider a simple case at first. But it is
important to bear in mind that all which follows
applies only to what are called ''proper'' algebraic
fractions, meaning fractions like the above, which have
the numerator of \emph{a lesser degree} than the denominator;
that is, those in which the highest index of~$x$ is less
in the numerator than in the denominator. If we
have to deal with such an expression as~$\dfrac{x^2+2}{x^2-1}$, we can
simplify it by division, since it is equivalent to
$1+\dfrac{3}{x^2-1}$; and $\dfrac{3}{x^2-1}$ is a proper algebraic fraction
to which the operation of splitting into partial fractions
can be applied, as explained hereafter.

% [** TN: Retaining inconsistent formatting; headings not on their own line]
\Paragraph{Case~I\@.} If we perform many additions of two or
more fractions the denominators of which contain only
terms in~$x$, and no terms in $x^2$,~$x^3$, or any other powers
of~$x$, we \emph{always} find that \emph{the denominator of the final
resulting fraction is the product of the denominators}
of the fractions which were added to form the result.
It follows that by factorizing the denominator of this
final fraction, we can find every one of the denominators
of the partial fractions of which we are in search.
\DPPageSep{135.png}{123}%

Suppose we wish to go back from $\dfrac{3x+1}{x^2-1}$ to the
components which we know are $\dfrac{1}{x+1}$ and~$\dfrac{2}{x-1}$. If
we did not know what those components were we can
still prepare the way by writing:
\[
\frac{3x+1}{x^2-1} = \frac{3x+1}{(x+1)(x-1)} = \frac{}{x+1} + \frac{}{x-1},
\]
leaving blank the places for the numerators until we
know what to put there. We always may assume the
sign between the partial fractions to be \emph{plus}, since, if
it be \emph{minus}, we shall simply find the corresponding
numerator to be negative. Now, since the partial
fractions are \emph{proper} fractions, the numerators are
mere numbers without~$x$ at all, and we can call them
$A$,~$B$, $C\dots$ as we please. So, in this case, we have:
\[
\frac{3x+1}{x^2-1} = \frac{A}{x+1} + \frac{B}{x-1}.
\]

If now we perform the addition of these two
partial fractions, we get $\dfrac{A(x-1)+B(x+1)}{(x+1)(x-1)}$; and this
must be equal to $\dfrac{3x+1}{(x+1)(x-1)}$. And, as the denominators
in these two expressions are the same,
the numerators must be equal, giving us:
\[
3x + 1 = A(x-1) + B(x + 1).
\]

Now, this is an equation with two unknown
quantities, and it would seem that we need another
equation before we can solve them and find $A$~and~$B$.
\DPPageSep{136.png}{124}%
But there is another way out of this difficulty. The
equation must be true for all values of~$x$; therefore
it must be true for such values of~$x$ as will cause
$x-1$ and~$x+1$ to become zero, that is for $x=1$ and
for $x=-1$ respectively. If we make $x=1$, we get
$4 = (A × 0)+(B × 2)$, so that $B=2$; and if we make
$x=-1$, we get $-2 = (A × -2) + (B × 0)$, so that $A=1$.
Replacing the $A$ and~$B$ of the partial fractions by
these new values, we find them to become $\dfrac{1}{x+1}$ and
$\dfrac{2}{x-1}$; and the thing is done.

As a farther example, let us take the fraction
$\dfrac{4x^2 + 2x - 14}{x^3 + 3x^2 - x - 3}$. The denominator becomes zero when
$x$ is given the value~$1$; hence $x-1$ is a factor of it,
and obviously then the other factor will be $x^2 + 4x + 3$;
and this can again be decomposed into $(x+1)(x+3)$.
So we may write the fraction thus:
\[
\frac{4x^2 + 2x - 14}{x^3 + 3x^2 - x - 3}
  = \frac{A}{x+1} + \frac{B}{x-1} + \frac{C}{x+3},
\]
making three partial factors.

Proceeding as before, we find
\[%[** TN: Set on two lines in the original]
4x^2 + 2x - 14 = A(x-1)(x+3) + B(x+1)(x+3) + C(x+1)(x-1).
\]

Now, if we make $x=1$, we get:
\[
-8 = (A × 0) + B(2 × 4) + (C × 0);\quad \text{that is, } B = -1.
\]

If $x= -1$, we get:
\[
-12 = A(-2 × 2) + (B × 0) + (C × 0);\quad \text{whence } A = 3.
\]
\DPPageSep{137.png}{125}%

If $x = -3$, we get:
\[
16 = (A × 0) + (B × 0) + C(-2 × -4);\quad \text{whence } C = 2.
\]

So then the partial fractions are:
\[
\frac{3}{x+1} - \frac{1}{x-1} + \frac{2}{x+3},
\]
which is far easier to differentiate with respect to~$x$
than the complicated expression from which it is
derived.

\Paragraph{Case~II\@.} If some of the factors of the denominator
contain terms in~$x^2$, and are not conveniently put
into factors, then the corresponding numerator may
contain a term in~$x$, as well as a simple number; and
hence it becomes necessary to represent this unknown
numerator not by the symbol~$A$ but by $Ax + B$; the
rest of the calculation being made as before.
%
\begin{DPgather*}
\lintertext{\rlap{\indent Try, for instance:}}
\frac{-x^2 - 3}{(x^2+1)(x+1)}. \\
\frac{-x^2 - 3}{(x^2+1)(x+1)} = \frac{Ax+B}{x^2+1} + \frac{C}{x+1};\\
-x^2 - 3 = (Ax + B)(x+1) + C(x^2+1).
\end{DPgather*}

Putting $x= -1$, we get $-4 = C × 2$; and $C = -2$;
\begin{DPalign*}
\lintertext{hence}
-x^2 - 3 &= (Ax + B)(x + 1) - 2x^2 - 2; \\
\lintertext{and}
x^2 - 1 &= Ax(x+1) + B(x+1).
\end{DPalign*}

Putting $x = 0$, we get $-1 = B$; \\
hence
\begin{DPgather*}
x^2 - 1 = Ax(x + 1) - x - 1;\quad \text{or } x^2 + x = Ax(x+1); \\
\lintertext{and}
x+1 = A(x+1),
\end{DPgather*}
\DPPageSep{138.png}{126}%
so that $A=1$, and the partial fractions are:
\[
\frac{x-1}{x^2+1} - \frac{2}{x+1}.
\]

Take as another example the fraction
\[
\frac{x^3-2}{(x^2+1)(x^2+2)}.
\]

We get
\begin{align*}
\frac{x^3-2}{(x^2+1)(x^2+2)}
  &= \frac{Ax+B}{x^2+1} + \frac{Cx+D}{x^2+2}\\
  &= \frac{(Ax+B)(x^2+2)+(Cx+D)(x^2+1)}{(x^2+1)(x^2+2)}.
\end{align*}

In this case the determination of $A$,~$B$, $C$,~$D$ is not
so easy. It will be simpler to proceed as follows:
Since the given fraction and the fraction found by
adding the partial fractions are equal, and have
\emph{identical} denominators, the numerators must also be
identically the same. In such a case, and for such
algebraical expressions as those with which we are
dealing here, \emph{the coefficients of the same powers of~$x$
are equal and of same sign}.

Hence, since
\begin{align*}
x^3-2
  &= (Ax+B)(x^2+2) + (Cx+D)(x^2+1) \\
  &= (A+C)x^3 + (B+D)x^2 + (2A+C)x + 2B+D,
\end{align*}
we have $1=A+C$;\quad $0=B+D$ (the coefficient of~$x^2$
in the left expression being zero); $0=2A+C$; and
$-2=2B+D$. Here are four equations, from which
we readily obtain $A=-1$; $B=-2$; $C=2$; $D=0$;
so that the partial fractions are $\dfrac{2(x+1)}{x^2+2} - \dfrac{x+2}{x^2+1}$.
\DPPageSep{139.png}{127}%
This method can always be used; but the method
shown first will be found the quickest in the case of
factors in~$x$ only.

\Paragraph{Case~III\@.} When, among the factors of the denominator
there are some which are raised to some power,
one must allow for the possible existence of partial
fractions having for denominator the several powers
of that factor up to the highest. For instance, in
splitting the fraction $\dfrac{3x^2-2x+1}{(x+1)^2(x-2)}$ we must allow for
the possible existence of a denominator~$x+1$ as well
as $(x+1)^2$ and~$(x-2)$.

It maybe thought, however, that, since the numerator
of the fraction the denominator of which is $(x+1)^2$
may contain terms in~$x$, we must allow for this in
writing $Ax+B$ for its numerator, so that
\[
\frac{3x^2 - 2x + 1}{(x+1)^2(x-2)}
  = \frac{Ax+B}{(x+1)^2} + \frac{C}{x+1} + \frac{D}{x-2}.
\]
If, however, we try to find $A$,~$B$,~$C$ and~$D$ in this case,
we fail, because we get four unknowns; and we have
only three relations connecting them, yet
\[
\frac{3x^2 - 2x + 1}{(x+1)^2(x-2)}
  = \frac{x-1}{(x+1)^2} + \frac{1}{x+1} + \frac{1}{x-2}.
\]

But if we write
\[
\frac{3x^2 - 2x + 1}{(x+1)^2(x-2)}
  = \frac{A}{(x+1)^2} + \frac{B}{x+1} + \frac{C}{x-2},
\]
we get
\[
3x^2 - 2x+1 = A(x-2) + B(x+1)(x-2) + C(x+1)^2,
\]
\DPPageSep{140.png}{128}%
which gives $C=1$ for $x=2$. Replacing $C$ by its value,
transposing, gathering like terms and dividing by
$x-2$, we get $-2x= A+B(x+1)$, which gives $A=-2$
for $x=-1$. Replacing $A$ by its value, we get
\[
2x = -2+B(x+1).
\]

Hence $B=2$; so that the partial fractions are:
\[
\frac{2}{x+1} - \frac{2}{(x+1)^2} + \frac{1}{x-2},
\]
instead of $\dfrac{1}{x+1} + \dfrac{x-1}{(x+1)^2} + \dfrac{1}{x-2}$ stated above as being
the fractions from which $\dfrac{3x^2-2x+1}{(x+1)^2(x-2)}$ was obtained.
The mystery is cleared if we observe that $\dfrac{x-1}{(x+1)^2}$ can
itself be split into the two fractions $\dfrac{1}{x+1} - \dfrac{2}{(x+1)^2}$, so
that the three fractions given are really equivalent to
\[
\frac{1}{x+1} + \frac{1}{x+1} - \frac{2}{(x+1)^2} + \frac{1}{x-2}
  = \frac{2}{x+1} - \frac{2}{(x+1)^2} + \frac{1}{x-2},
\]
which are the partial fractions obtained.

We see that it is sufficient to allow for one numerical
term in each numerator, and that we always get the
ultimate partial fractions.

When there is a power of a factor of~$x^2$ in the
denominator, however, the corresponding numerators
must be of the form $Ax+B$; for example,
\[
\frac{3x-1}{(2x^2-1)^2(x+1)}
  = \frac{Ax+B}{(2x^2-1)^2} + \frac{Cx+D}{2x^2-1} + \frac{E}{x+1},
\]
\DPPageSep{141.png}{129}%
which gives
\[%[** TN: Set on two lines in the original]
3x - 1 = (Ax + B)(x + 1)
       + (Cx + D)(x + 1)(2x^2 - 1) + E(2x^2 - 1)^2.
\]

For $x = -1$, this gives $E = -4$. Replacing, transposing,
collecting like terms, and dividing by $x + 1$,
we get
\[
16x^3 - 16x^2 + 3 = 2Cx^3 + 2Dx^2 + x(A - C) + (B - D).
\]

Hence $2C = 16$ and $C = 8$; $2D = -16$ and $D = -8$;
$A - C = 0$ or $A - 8 = 0$ and $A = 8$, and finally, $B - D = 3$
or $B = -5$. So that we obtain as the partial fractions:
\[
\frac{(8x - 5)}{(2x^2 - 1)^2} + \frac{8(x - 1)}{2x^2 - 1} - \frac{4}{x + 1}.
\]

It is useful to check the results obtained. The
simplest way is to replace $x$ by a single value, say~$+1$,
both in the given expression and in the partial
fractions obtained.

Whenever the denominator contains but a power of
a single factor, a very quick method is as follows:

Taking, for example, $\dfrac{4x + 1}{(x + 1)^3}$, let $x + 1 = z$; then
$x = z - 1$.

Replacing, we get
\[
\frac{4(z - 1) + 1}{z^3} = \frac{4z - 3}{z^3} = \frac{4}{z^2} - \frac{3}{z^3}.
\]

The partial fractions are, therefore,
\[
\frac{4}{(x + 1)^2} - \frac{3}{(x + 1)^3}.
\]
\DPPageSep{142.png}{130}%

Application to differentiation. Let it be required
to differentiate $y = \dfrac{5-4x}{6x^2 + 7x - 3}$; we have
\begin{align*}
\frac{dy}{dx}
  &= -\frac{(6x^2+7x-3) × 4 + (5 - 4x)(12x + 7)}{(6x^2 + 7x - 3)^2}\\
  &=  \frac{24x^2 - 60x - 23}{(6x^2 + 7x - 3)^2}.
\end{align*}

If we split the given expression into
\[
\frac{1}{3x-1} - \frac{2}{2x+3},
\]
we get, however,
\[
\frac{dy}{dx} = -\frac{3}{(3x-1)^2} + \frac{4}{(2x+3)^2},
\]
which is really the same result as above split into
partial fractions. But the splitting, if done after
differentiating, is more complicated, as will easily be
seen. When we shall deal with the \emph{integration} of
such expressions, we shall find the splitting into
partial fractions a precious auxiliary (see \Pageref{partfracs}).


\Exercises{XI} (See \Pageref[page]{AnsEx:XI} for Answers.)

Split into fractions:
\begin{Problems}[2]
\Item{(1)} $\dfrac{3x + 5}{(x - 3)(x + 4)}$.
\Item{(2)} $\dfrac{3x - 4}{(x - 1)(x - 2)}$.
\ResetCols{2}

\Item{(3)} $\dfrac{3x + 5}{x^2 + x - 12}$.
\Item{(4)} $\dfrac{x + 1}{x^2 - 7x + 12}$.
\ResetCols{2}

\Item{(5)} $\dfrac{x - 8}{(2x + 3)(3x - 2)}$.
\Item{(6)} $\dfrac{x^2 - 13x + 26}{(x - 2)(x - 3)(x - 4)}$.
\ResetCols{1}
\DPPageSep{143.png}{131}%

\Item{(7)} $\dfrac{x^2 - 3x + 1}{(x - 1)(x + 2)(x - 3)}$.

\Item{(8)} $\dfrac{5x^2 + 7x + 1}{(2x + 1)(3x - 2)(3x + 1)}$.
\ResetCols{2}

\Item{(9)} $\dfrac{x^2}{x^3 - 1}$.
\Item{(10)} $\dfrac{x^4 + 1}{x^3 + 1}$.
\ResetCols{2}

\Item{(11)} $\dfrac{5x^2 + 6x + 4}{(x +1)(x^2 + x + 1)}$.
\Item{(12)} $\dfrac{x}{(x - 1)(x - 2)^2}$.
\ResetCols{2}

\Item{(13)} $\dfrac{x}{(x^2 - 1)(x + 1)}$.
\Item{(14)} $\dfrac{x + 3}{ (x +2)^2(x - 1)}$.
\ResetCols{2}

\Item{(15)} $\dfrac{3x^2 + 2x + 1}{(x + 2)(x^2 + x + 1)^2}$.
\Item{(16)} $\dfrac{5x^2 + 8x - 12}{(x + 4)^3}$.
\ResetCols{2}

\Item{(17)} $\dfrac{7x^2 + 9x - 1}{(3x - 2)^4}$.
\Item{(18)} $\dfrac{x^2}{(x^3 - 8)(x - 2)}$.
\end{Problems}


\Section{Differential of an Inverse Function.}

Consider the function (see \Pageref{function}) $y = 3x$; it can be
expressed in the form $x = \dfrac{y}{3}$; this latter form is called
the \emph{inverse function} to the one originally given.

If $y = 3x$,\quad $\dfrac{dy}{dx} = 3$; if $x=\dfrac{y}{3}$,\quad $\dfrac{dx}{dy} = \dfrac{1}{3}$, and we see that
\[
\frac{dy}{dx} = \frac{1}{\ \dfrac{dx}{dy}\ }\quad \text{or}\quad
\frac{dy}{dx} × \frac{dx}{dy} = 1.
\]

Consider $y= 4x^2$, $\dfrac{dy}{dx} = 8x$; the inverse function is
\[
x = \frac{y^{\efrac{1}{2}}}{2},\quad \text{and}\quad
\frac{dx}{dy} = \frac{1}{4\sqrt{y}} = \frac{1}{4 × 2x} = \frac{1}{8x}.
\]
\DPPageSep{144.png}{132}%
%
\begin{DPalign*}
\lintertext{\indent Here again}
\frac{dy}{dx}×\frac{dx}{dy} &= 1.
\end{DPalign*}

It can be shown that for all functions which can be
put into the inverse form, one can always write
\[
\frac{dy}{dx} × \frac{dx}{dy} = 1\quad \text{or}\quad
\frac{dy}{dx} = \frac{1}{\ \dfrac{dx}{dy}\ }.
\]

It follows that, being given a function, if it be
easier to differentiate the inverse function, this may
be done, and the reciprocal of the differential coefficient
of the inverse function gives the differential coefficient
of the given function itself.

As an example, suppose that we wish to differentiate
$y=\sqrt[2]{\dfrac{3}{x}-1}$. We have seen one way of doing this,
by writing $u=\dfrac{3}{x}-1$, and finding $\dfrac{dy}{du}$ and~$\dfrac{du}{dx}$. This
gives
\[
\frac{dy}{dx} = -\frac{3}{2x^2\sqrt{\dfrac{3}{x} -1}}.
\]

If we had forgotten how to proceed by this method,
or wished to check our result by some other way of
obtaining the differential coefficient, or for any other
reason we could not use the ordinary method, we can
proceed as follows: The inverse function is $x=\dfrac{3}{1+y^2}$.
\[
\frac{dx}{dy} = -\frac{3 × 2y}{(1+y^2)^2} = -\frac{6y}{(1+y^2)^2};
\]
\DPPageSep{145.png}{133}%
hence
\[
\frac{dy}{dx} = \frac{1}{\ \dfrac{dx}{dy}\ }
  = -\frac{(1+y^2)^2}{6y}
  = -\frac{\left(1+\dfrac{3}{x} -1\right)^2}{6×\sqrt[2]{\dfrac{3}{x}-1}}
  = -\frac{3}{2x^2\sqrt{\dfrac{3}{x}-1}}.
\]

Let us take as an other example $y=\dfrac{1}{\sqrt[3]{\theta +5}}$.

The inverse function is $\theta=\dfrac{1}{y^3}-5$ or $\theta=y^{-3}-5$, and
\[
\frac{d\theta}{dy} = -3y^{-4} = -3\sqrt[3]{(\theta + 5)^4}.
\]

It follows that $\dfrac{dy}{dx} = -\dfrac{1}{3\sqrt{(\theta +5)^4}}$, as might have
been found otherwise.

We shall find this dodge most useful later on;
meanwhile you are advised to become familiar with
it by verifying by its means the results obtained in
Exercises~I. (\Pageref{Ex:I}), Nos.\ 5,~6,~7; Examples (\Pageref{ExNo1}), %[ ** xrefs and hard-coded pages]
Nos.\ 1,~2,~4; and Exercises~VI. (\Pageref{Ex:VI}), Nos.\ 1,~2,~3
and~4.

\tb

You will surely realize from this chapter and the
preceding, that in many respects the calculus is an
\emph{art} rather than a \emph{science}: an art only to be acquired,
as all other arts are, by practice. Hence you should
work many examples, and set yourself other examples,
to see if you can work them out, until the various
artifices become familiar by use.
\DPPageSep{146.png}{134}%


\Chapter[ON TRUE COMPOUND INTEREST]
{XIV}{On true Compound Interest and the Law of Organic Growth}

\First{Let} there be a quantity growing in such a way that
the increment of its growth, during a given time,
shall always be proportional to its own magnitude.
This resembles the process of reckoning interest on
money at some fixed rate; for the bigger the capital,
the bigger the amount of interest on it in a given
time.

Now we must distinguish clearly between two
cases, in our calculation, according as the calculation
is made by what the arithmetic books call ''simple
interest,'' or by what they call ''compound interest.''
For in the former case the capital remains fixed,
while in the latter the interest is added to the capital,
which therefore increases by successive additions.

\Paragraph{{\upshape(1)}~At simple interest.} Consider a concrete case.
Let the capital at start be~£$100$, and let the rate
of interest be $10$~per~cent.\ per~annum. Then the
increment to the owner of the capital will be £$10$
every year. Let him go on drawing his interest
every year, and hoard it by putting it by in a
\DPPageSep{147.png}{135}%
stocking, or locking it up in his safe. Then, if he
goes on for $10$~years, by the end of that time he will
have received $10$~increments of £$10$~each, or~£$100$,
making, with the original~£$100$, a total of~£$200$ in all.
His property will have doubled itself in $10$~years.
If the rate of interest had been $5$~per cent., he would
have had to hoard for $20$~years to double his property.
If it had been only $2$~per~cent., he would have had
to hoard for $50$~years. It is easy to see that if the
value of the yearly interest is $\dfrac{1}{n}$~of the capital, he
must go on hoarding for $n$~years in order to double
his property.

Or, if $y$ be the original capital, and the yearly
interest is~$\dfrac{y}{n}$, then, at the end of $n$~years, his property
will be
\[
y + n\dfrac{y}{n} = 2y.
\]

%[** TN: Several minor numerical errors below are corrected]
\Paragraph{{\upshape(2)}~At compound interest.} As before, let the owner
\Pagelabel{erratum0}%
begin with a capital of~£$100$, earning interest at the
rate of $10$~per~cent.\ per~annum; but, instead of
hoarding the interest, let it be added to the capital
each year, so that the capital grows year by year.
Then, at the end of one year, the capital will have
grown to~£$110$; and in the second year (still at~$10$\%)
this will earn £$11$~interest. He will start the third
year with~£$121$, and the interest on that will be
£$12$.~$2$\textit{s}.; so that he starts the fourth year with
£$133$.~$2$\textit{s}., and so on. It is easy to work it out, and
find that at the end of the ten years the total capital
\DPPageSep{148.png}{136}%
will have grown to £$259$.~$7$\textit{s}.~$6$\textit{d}. In fact, we see that
at the end of each year, each pound will have earned
$\tfrac{1}{10}$~of a pound, and therefore, if this is always added
on, each year multiplies the capital by~$\tfrac{11}{10}$; and if
continued for ten years (which will multiply by this
factor ten times over) will multiply the original
capital by~$\DPtypo{2.59375}{2.59374}$. Let us put this into symbols.
Put $y_0$ for the original capital; $\dfrac{1}{n}$~for the fraction
added on at each of the $n$~operations; and $y_n$ for the
value of the capital at the end of the $n$\textsuperscript{th}~operation.
Then
\[
y_n = y_0\left(1 + \frac{1}{n}\right)^n.
\]

But this mode of reckoning compound interest once
a year, is really not quite fair; for even during the
first year the~£$100$ ought to have been growing. At
the end of half a year it ought to have been at least~£$105$,
and it certainly would have been fairer had
the interest for the second half of the year been
calculated on~£$105$. This would be equivalent to
calling it $5$\%~per half-year; with $20$~operations, therefore,
at each of which the capital is multiplied by~$\tfrac{21}{20}$.
If reckoned this way, by the end of ten years the
capital would have grown to
\DPtypo{£$265$.~$8$\textit{s}.}
       {£$265$.~$6$\textit{s}.~$7$\textit{d}.}; for
\[
(1 + \tfrac{1}{20})^{20} = \DPtypo{2.654}{2.653}.
\]

But, even so, the process is still not quite fair; for,
by the end of the first month, there will be some
interest earned; and a half-yearly reckoning assumes
that the capital remains stationary for six months at
\DPPageSep{149.png}{137}%
a time. Suppose we divided the year into $10$~parts,
and reckon a one-per-cent.\ interest for each tenth of
the year. We now have $100$~operations lasting over
the ten years; or
\[
y_n = £100 \left( 1 + \tfrac{1}{100} \right)^{100};
\]
which works out to
\DPtypo{£$270$.~$8$\textit{s}.}
       {£$270$.~$9$\textit{s}.~$7\frac{1}{2}$\textit{d}.}

Even this is not final. Let the ten years be divided
into $1000$~periods, each of $\frac{1}{100}$~of a year; the interest
being $\frac{1}{10}$~per~cent.\ for each such period; then
\[
y_n = £100 \left( 1 + \tfrac{1}{1000} \right)^{1000};
\]
which works out to
\DPtypo{£$271$.~$14$\textit{s}.~$2\frac{1}{2}$\textit{d}.}
       {£$271$.~$13$\textit{s}.~$10$\textit{d}.}

Go even more minutely, and divide the ten years
into $10,000$ parts, each $\frac{1}{1000}$~of a year, with interest
at $\frac{1}{100}$~of $1$~per~cent. Then
\[
y_n = £100 \left( 1 + \tfrac{1}{10,000} \right)^{10,000};
\]
which amounts to
\DPtypo{£$271$.~$16$\textit{s}.~$4$\textit{d}.}
       {£$271$.~$16$\textit{s}.~$3\frac{1}{2}$\textit{d}.}

Finally, it will be seen that what we are trying to
find is in reality the ultimate value of the expression
$\left(1 + \dfrac{1}{n}\right)^n$, which, as we see, is greater than~$2$; and
which, as we take $n$~larger and larger, grows closer
and closer to a particular limiting value. However
big you make~$n$, the value of this expression grows
nearer and nearer to the figure
\[
2.71828\ldots
\]
a number \emph{never to be forgotten}.

Let us take geometrical illustrations of these things.
In \Fig{36}, $OP$~stands for the original value. $OT$~is
\DPPageSep{150.png}{138}%
the whole time during which the value is growing.
It is divided into $10$~periods, in each of which there is
an equal step up. Here $\dfrac{dy}{dx}$~is a constant; and if each
step up is $\frac{1}{10}$~of the original~$OP$, then, by $10$~such
steps, the height is doubled. If we had taken $20$~steps,
\Figure[2.5in]{150a}{36}
each of half the height shown, at the end the height
would still be just doubled. Or $n$~such steps, each
of $\dfrac{1}{n}$~of the original height~$OP$, would suffice to
double the height. This is the case of simple interest.
Here is $1$~growing till it becomes~$2$.

In \Fig{37}, we have the corresponding illustration of
the geometrical progression. Each of the successive
ordinates is to be $1 + \dfrac{1}{n}$, that is, $\dfrac{n+1}{n}$ times as high as
its predecessor. The steps up are not equal, because
each step up is now $\dfrac{1}{n}$~of the ordinate \emph{at that part} of
the curve. If we had literally $10$~steps, with $\left(1 + \frac{1}{10} \right)$
for the multiplying factor, the final total would be
\DPPageSep{151.png}{139}%
$(1 + \tfrac{1}{10})^{10}$ or $\DPtypo{2.593}{2.594}$~times the original~$1$. But if only
we take $n$ sufficiently large (and the corresponding
$\dfrac{1}{n}$ sufficiently small), then the final value $\left(1 + \dfrac{1}{n}\right)^n$ to
%[** TN: Minor imprecision in the value of e retained from the original.]
which unity will grow will be~$2.71828$.

\Figure[2.75in]{151a}{37}

\Paragraph{Epsilon.} To this mysterious number $2.7182818$
etc., the mathematicians have assigned as a symbol
the Greek letter~$\epsilon$ (pronounced \emph{epsilon}). All schoolboys
know that the Greek letter~$\pi$ (called \emph{pi}) stands
for $3.141592$ etc.; but how many of them know that
\emph{epsilon} means $2.71828$? Yet it is an even more
important number than~$\pi$!

What, then, is \emph{epsilon}?

Suppose we were to let $1$ grow at simple interest
till it became~$2$; then, if at the same nominal rate of
interest, and for the same time, we were to let $1$ grow
at true compound interest, instead of simple, it would
grow to the value \emph{epsilon}.

This process of growing proportionately, at every
instant, to the magnitude at that instant, some people
\DPPageSep{152.png}{140}%
call \emph{a logarithmic rate} of growing. Unit logarithmic
rate of growth is that rate which in unit time will
cause $1$ to grow to $2.718281$. It might also be
called the \emph{organic rate} of growing: because it is
characteristic of organic growth (in certain circumstances)
that the increment of the organism in a
given time is proportional to the magnitude of the
organism itself.

If we take $100$~per cent.\ as the unit of rate,
and any fixed period as the unit of time, then the
result of letting $1$ grow \emph{arithmetically} at unit rate,
for unit time, will be~$2$, while the result of letting $1$
grow \emph{logarithmically} at unit rate, for the same time,
will be $2.71828\ldots$\,.

\Paragraph{A little more about Epsilon.} We have seen that
\SetOddHead{The Law of Organic Growth}%
we require to know what value is reached by the
expression $\left(1 + \dfrac{1}{n}\right)^n$, when $n$ becomes indefinitely
great. Arithmetically, here are tabulated a lot of
values (which anybody can calculate out by the help
of an ordinary table of logarithms) got by assuming
$n = 2$; $n = 5$; $n = 10$; and so on, up to $n = 10,000$.
\begin{alignat*}{2}
&(1 + \tfrac{1}{2})^2             &&= 2.25.    \\
&(1 + \tfrac{1}{5})^5             &&= \DPtypo{2.489}{2.488}.   \\
&(1 + \tfrac{1}{10})^{10}         &&= 2.594.   \\
&(1 + \tfrac{1}{20})^{20}         &&= 2.653.   \\
&(1 + \tfrac{1}{100})^{100}       &&= \DPtypo{2.704}{2.705}.   \\
&(1 + \tfrac{1}{1000})^{1000}     &&= \DPtypo{2.7171}{2.7169}.  \\
&(1 + \tfrac{1}{10,000})^{10,000} &&= \DPtypo{2.7182}{2.7181}.
\end{alignat*}
\DPPageSep{153.png}{141}%

It is, however, worth while to find another way of
calculating this immensely important figure.

Accordingly, we will avail ourselves of the binomial
theorem, and expand the expression $\left(1 + \dfrac{1}{n}\right)^n$ in that
well-known way.

The binomial theorem\Pagelabel{binomtheo} gives the rule that
\begin{align*}
(a + b)^n &= a^n + n \dfrac{a^{n-1} b}{1!} + n(n - 1) \dfrac{a^{n-2} b^2}{2!} \\
  & \phantom{= a^n\ } + n(n -1)(n - 2) \dfrac{a^{n-3} b^3}{3!} + \text{etc}. \\
\intertext{Putting $a = 1$ and $b = \dfrac{1}{n}$, we get}
\left(1 + \dfrac{1}{n}\right)^n
  &= 1 + 1 + \dfrac{1}{2!} \left(\dfrac{n - 1}{n}\right) + \dfrac{1}{3!} \dfrac{(n - 1)(n - 2)}{n^2} \\
  &\phantom{= 1 + 1\ } + \dfrac{1}{4!} \dfrac{(n - 1)(n - 2)(n - 3)}{n^3} + \text{etc}.
\end{align*}

Now, if we suppose $n$ to become indefinitely great,
say a billion, or a billion billions, then $n - 1$, $n - 2$,
and $n - 3$, etc., will all be sensibly equal to~$n$; and
then the series becomes
\[
\epsilon = 1 + 1 + \dfrac{1}{2!} + \dfrac{1}{3!} + \dfrac{1}{4!} + \text{etc}.\ldots
\]

By taking this rapidly convergent series to as
many terms as we please, we can work out the sum to
any desired point of accuracy. Here is the working
for ten terms:
\DPPageSep{154.png}{142}%
\begin{center}
\begin{tabular}{@{}r<{\qquad}@{}l@{}}
                & $1.000000$ \\
dividing by~$1$ & $1.000000$ \\
dividing by~$2$ & $0.500000$ \\
dividing by~$3$ & $0.166667$ \\
dividing by~$4$ & $0.041667$ \\
dividing by~$5$ & $0.008333$ \\
dividing by~$6$ & $0.001389$ \\
dividing by~$7$ & $0.000198$ \\
dividing by~$8$ & $0.000025$ \\
dividing by~$9$ & $0.000002$ \\
\cline{2-2}
\multicolumn{2}{r@{}}{Total\quad $2.718281$} \\
\cline{2-2}
\end{tabular}
\end{center}

$\epsilon$ is incommensurable with~$1$, and resembles~$\pi$ in
being an interminable non-recurrent decimal.

\Paragraph{The Exponential Series.} We shall have need of yet
another series.

Let us, again making use of the binomial theorem,
expand the expression $\left(1 + \dfrac{1}{n}\right)^{nx}$, which is the same
as $\epsilon^x$ when we make~$n$ indefinitely great.
\begin{align*}
\epsilon^x
  &= 1^{nx} + nx \frac{1^{nx-1} \left(\dfrac{1}{n}\right)}{1!}
            + nx(nx - 1) \frac{1^{nx - 2} \left(\dfrac{1}{n}\right)^2}{2!} \\
  & \phantom{= 1^{nx}\ }
    + nx(nx - 1)(nx - 2) \frac{1^{nx-3} \left(\dfrac{1}{n}\right)^3}{3!}
    + \text{etc}.\\
  &= 1 + x + \frac{1}{2!} · \frac{n^2x^2 - nx}{n^2}
    + \frac{1}{3!} · \frac{n^3x^3 - 3n^2x^2 + 2nx}{n^3} + \text{etc}. \\
%\DPPageSep{155.png}{143}%
  &= 1 + x + \frac{x^2 -\dfrac{x}{n}}{2!}
    + \frac{x^3 - \dfrac{3x^2}{n} + \dfrac{2x}{n^2}}{3!} + \text{etc}.
\end{align*}

But, when $n$ is made indefinitely great, this simplifies down to the following:
\[
\epsilon^x
  = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \frac{x^4}{4!} + \text{etc.}\dots
\]

This series is called \emph{the exponential series}.

The great reason why $\epsilon$ is regarded of importance
is that $\epsilon^x$ possesses a property, not possessed by any
other function of~$x$, that \emph{when you differentiate it
its value remains unchanged}\Pagelabel{unchanged}; or, in other words, its
differential coefficient is the same as itself. This can
be instantly seen by differentiating it with respect
to~$x$, thus:
\begin{DPalign*}
\frac{d(\epsilon^x)}{dx}
  &= 0 + 1 + \frac{2x}{1 · 2} + \frac{3x^2}{1 · 2 · 3} + \frac{4x^3}{1 · 2 · 3 · 4} \\
&\phantom{= 0 + 1 + \frac{2x}{1 · 2} + \frac{3x^2}{1 · 2 · 3}\ } + \frac{5x^4}{1 · 2 · 3 · 4 · 5} + \text{etc}.  \\
\lintertext{or}
  &= 1 + x + \frac{x^2}{1 · 2} + \frac{x^3}{1 · 2 · 3} + \frac{x^4}{1 · 2 · 3 · 4} + \text{etc}.,
\end{DPalign*}
which is exactly the same as the original series.

Now we might have gone to work the other way,
and said: Go to;\DPnote{** TN: [sic], presumed archaic expression} let us find a function of~$x$, such
that its differential coefficient is the same as itself.
Or, is there any expression, involving only powers %
\DPPageSep{156.png}{144}%
of $x$, which is unchanged by differentiation? Accordingly;
let us \emph{assume} as a general expression that
\begin{align*}
y &= A + Bx + Cx^2 + Dx^3 + Ex^4 + \text{etc}.,\\
\intertext{(in which the coefficients $A$, $B$, $C$, etc.\ will have to be
determined), and differentiate it.}
\dfrac{dy}{dx} &= B + 2Cx + 3Dx^2 + 4Ex^3 + \text{etc}.
\end{align*}

Now, if this new expression is really to be the same
as that from which it was derived, it is clear that
$A$ \emph{must} $=B$; that $C=\dfrac{B}{2}=\dfrac{A}{1· 2}$; that $D = \dfrac{C}{3} = \dfrac{A}{1 · 2 · 3}$;
that $E = \dfrac{D}{4} = \dfrac{A}{1 · 2 · 3 · 4}$, etc.

The law of change is therefore that\Strut
\[
y = A\left(1 + \dfrac{x}{1} + \dfrac{x^2}{1 · 2} + \dfrac{x^3}{1 · 2 · 3} + \dfrac{x^4}{1 · 2 · 3 · 4} + \text{etc}.\right).
\]

If, now, we take $A = 1$ for the sake of further
simplicity, we have
\[
y = 1 + \dfrac{x}{1} + \dfrac{x^2}{1 · 2} + \dfrac{x^3}{1 · 2 · 3} + \dfrac{x^4}{1 · 2 · 3 · 4} + \text{etc}.
\]

Differentiating it any number of times will give
always the same series over again.

If, now, we take the particular case of $A=1$, and
evaluate the series, we shall get simply
\begin{align*}
\text{when } x &= 1,\quad & y &= 2.718281 \text{ etc.};    & \text{that is, } y &= \epsilon;   \\
\text{when } x &= 2,\quad & y &=(2.718281 \text{ etc.})^2; & \text{that is, } y &= \epsilon^2; \\
\text{when } x &= 3,\quad & y &=(2.718281 \text{ etc.})^3; & \text{that is, } y &= \epsilon^3;
\end{align*}
\DPPageSep{157.png}{145}%
and therefore
\[
\text{when } x=x,\quad y=(2.718281 \text{ etc}.)^x;\quad\text{that is, } y=\epsilon^x,
\]
thus finally demonstrating that
\[
\epsilon^x = 1 + \dfrac{x}{1} + \dfrac{x^2}{1·2} + \dfrac{x^3}{1· 2· 3} + \dfrac{x^4}{1· 2· 3· 4} + \text{etc}.
\]

[\textsc{Note}.---\textit{How to read exponentials}. For the benefit
of those who have no tutor at hand it may be of use
to state that $\epsilon^x$ is read as ''\emph{epsilon to the eksth power};''
or some people read it ''\emph{exponential eks}.'' So $\epsilon^{pt}$ is
read ''\emph{epsilon to the pee-teeth-power}'' or ''\emph{exponential
pee tee}.'' Take some similar expressions:---Thus, $\epsilon^{-2}$ is
read ''\emph{epsilon to the minus two power}'' or ''\emph{exponential
minus two}.'' $\epsilon^{-ax}$ is read ''\emph{epsilon to the minus
ay-eksth}'' or ''\emph{exponential minus ay-eks}.'']

Of course it follows that $\epsilon^y$ remains unchanged if
differentiated with respect to~$y$. Also $\epsilon^{ax}$, which is
equal to $(\epsilon^a)^x$, will, when differentiated with respect
to~$x$, be $a\epsilon^{ax}$, because $a$ is a constant.


\Subsection{Natural or Naperian Logarithms.}
Another reason why $\epsilon$ is important is because it
was made by Napier, the inventor of logarithms, the
basis of his system. If $y$ is the value of $\epsilon^x$, then $x$
is the \emph{logarithm}, to the base~$\epsilon$, of~$y$. Or, if
\begin{DPalign*}
                  y &= \epsilon^x, \\
\lintertext{then} x &= \log_\epsilon y.
\end{DPalign*}

The two curves plotted in \Figs{38}{and}{39} represent
these equations.
\DPPageSep{158.png}{146}%

The points calculated are:
\begin{align*}
\text{For \textsc{Fig}.~38} \left\{
\begin{array}{|c||*{5}{c|}}
\hline
\Strut
\Td[c]{x} & \Td[c]{0} & \Td[l]{0.5}  & \Td[l]{1}    & \Td[l]{1.5}  & \Td[l]{2} \\
\hline
\Strut
\Td[c]{y} & \Td[c]{1} & \Td[l]{1.65} & \Td[l]{2.71} & \Td[l]{4.50} & \Td[l]{\DPtypo{7.69}{7.39}} \\
\hline
\end{array}
\right. \\
\text{For \textsc{Fig}.~39} \left\{
\begin{array}{|c||*{5}{c|}}
\hline
\Strut
\Td[c]{y} & \Td[c]{1} & \Td[l]{2}    & \Td[l]{3}    & \Td[l]{4}    & \Td[l]{8} \\
\hline
\Strut
\Td[c]{x} & \Td[c]{0} & \Td[l]{0.69} & \Td[l]{1.10} & \Td[l]{1.39} & \Td[l]{2.08} \\
\hline
\end{array}
\right.
\end{align*}%
%[** TN: The graphs below are reversed in the original; exchanged.]
\Figures{158b}{158a}{38}{39}\Pagelabel{erratum1}

It will be seen that, though the calculations yield
different points for plotting, yet the result is identical.
The two equations really mean the same thing.

As many persons who use ordinary logarithms,
which are calculated to base~$10$ instead of base~$\epsilon$, are
unfamiliar with the ''natural'' logarithms, it may be
worth while to say a word about them. The ordinary
rule that adding logarithms gives the logarithm of
the product still holds good; or
\[
\log_\epsilon a + \log_\epsilon b = \log_\epsilon ab.
\]
Also the rule of powers holds good;
\[
n × \log_\epsilon a = \log_\epsilon a^n.
\]
\DPPageSep{159.png}{147}%
But as $10$~is no longer the basis, one cannot multiply
by $100$ or~$1000$ by merely adding $2$ or~$3$ to the
index. One can change the natural logarithm to
the ordinary logarithm simply by multiplying it by
$0.4343$; or
\begin{DPalign*}
\log_{10} x &= 0.4343 × \log_{\epsilon} x, \\
\lintertext{and conversely,}
\log_{\epsilon} x &= 2.3026 × \log_{10} x.
\end{DPalign*}


%[** TN: Allowed this material to float to improve page breaks.]
\begin{table}[hp]
\centering
\textsc{A Useful Table of ''Naperian Logarithms''} \\
(Also called Natural Logarithms or Hyperbolic Logarithms)
\[
\begin{array}{c<{\quad}|>{\ }c>{\qquad\qquad}cr<{\quad}|>{\ }c}
\multicolumn{1}{c}{\text{\footnotesize Number}} &
\multicolumn{1}{c}{\footnotesize\log_{\epsilon}} &&
\multicolumn{1}{c}{\text{\footnotesize Number}} &
\multicolumn{1}{c}{\footnotesize\log_{\epsilon}}\DPnote{** TN: The original uses "Log"} \\
\Strut\PadTo[l]{1.1}{1}
    & 0.0000 &&      6 & 1.7918 \\
1.1 & 0.0953 &&      7 & 1.9459 \\
1.2 & 0.1823 &&      8 & 2.0794 \\
1.5 & 0.4055 &&      9 & 2.1972 \\
1.7 & 0.5306 &&     10 & 2.3026 \\
2.0 & 0.6931 &&     20 & 2.9957 \\
2.2 & 0.7885 &&     50 & 3.9120 \\
2.5 & 0.9163 &&    100 & 4.6052 \\
2.7 & 0.9933 &&    200 & 5.2983 \\
2.8 & 1.0296 &&    500 & 6.2146 \\
3.0 & 1.0986 &&  1,000 & 6.9078 \\
3.5 & 1.2528 &&  2,000 & \DPtypo{7.6010}{7.6009} \\
4.0 & 1.3863 &&  5,000 & 8.5172 \\
4.5 & 1.5041 && 10,000 & \DPtypo{9.2104}{9.2103} \\
5.0 & 1.6094 && 20,000 & 9.9035 \\
\end{array}
\]
\end{table}


\Subsection{Exponential and Logarithmic Equations.}\Pagelabel{expolo}
Now let us try our hands at differentiating certain
expressions that contain logarithms or exponentials.

Take the equation:
\[
y = \log_\epsilon x.
\]
First transform this into
\[
\epsilon^y = x,
\]
\DPPageSep{160.png}{148}%
whence, since the differential of $\epsilon^y$ with regard to~$y$ is
the original function unchanged (see \Pageref{unchanged}),
\[
\frac{dx}{dy} = \epsilon^y,
\]
and, reverting from the inverse to the original function,
\[
\frac{dy}{dx}
  = \frac{1}{\ \dfrac{dx}{dy}\ }
  = \frac{1}{\epsilon^y}
  = \frac{1}{x}.
\]

Now this is a very curious result.  It may be
written\Pagelabel{differlog}
\[
\frac{d(\log_\epsilon x)}{dx} = x^{-1}.
\]

Note that $x^{-1}$ is a result that we could never have
got by the rule for differentiating powers. That rule
(\Pageref[page]{multipow}) is to multiply by the power, and reduce the
power by~$1$. Thus, differentiating $x^3$ gave us~$3x^2$;
and differentiating $x^2$ gave~$2x^1$. But differentiating
$x^0$ does not give us $x^{-1}$~or~$0 × x^{-1}$, because $x^0$~is itself
$= 1$, and is a constant. We shall have to come back
to this curious fact that differentiating $\log_\epsilon x$ gives us
$\dfrac{1}{x}$ when we reach the chapter on integrating.

\tb

Now, try to differentiate
\begin{DPalign*}
                              y &= \log_\epsilon(x+a),\\
\lintertext{that is} \epsilon^y &= x+a;
\end{DPalign*}
we have $\dfrac{d(x+a)}{dy} = \epsilon^y$, since the differential of~$\epsilon^y$
remains~$\epsilon^y$.
\DPPageSep{161.png}{149}%
%
\BindMath{\begin{DPalign*}
\lintertext{\indent This gives}
\frac{dx}{dy} &= \epsilon^y = x+a; \\
\intertext{hence, reverting to the original function (see \Pageref{section:3}),
we get}
\frac{dy}{dx} &= \frac{1}{\;\dfrac{dx}{dy}\;} = \frac{1}{x+a}.
\end{DPalign*}\Pagelabel{differ2}%
\tb
\begin{DPalign*}
\lintertext{\indent Next try}
y &= \log_{10} x.
\end{DPalign*}}

First change to natural logarithms by multiplying
by the modulus $0.4343$. This gives us
\begin{DPalign*}
y &= 0.4343 \log_\epsilon x; \\
\lintertext{whence}
\frac{dy}{dx} &= \frac{0.4343}{x}.
\end{DPalign*}

\tb

The next thing is not quite so simple. Try this:\Pagelabel{diffexp}
\[
y = a^x.
\]

Taking the logarithm of both sides, we get
\begin{DPalign*}
\log_\epsilon y &= x \log_\epsilon a, \\
\lintertext{or}
x  = \frac{\log_\epsilon y}{\log_\epsilon a}
  &= \frac{1}{\log_\epsilon a} × \log_\epsilon y.
\end{DPalign*}

Since $\dfrac{1}{\log_\epsilon a}$ is a constant, we get
\[
\frac{dx}{dy}
  = \frac{1}{\log_\epsilon a} × \frac{1}{y}
  = \frac{1}{a^x × \log_\epsilon a};
\]
hence, reverting to the original function.
\[
\frac{dy}{dx} = \frac{1}{\;\dfrac{dx}{dy}\;} = a^x × \log_\epsilon a.
\]
\DPPageSep{162.png}{150}%

We see that, since
\[
\frac{dx}{dy} × \frac{dy}{dx} =1\quad\text{and}\quad
\frac{dx}{dy} = \frac{1}{y} × \frac{1}{\log_\epsilon a},\quad
\frac{1}{y} × \frac{dy}{dx} = \log_\epsilon a.
\]

We shall find that whenever we have an expression
such as $\log_\epsilon y =$ a function of~$x$, we always have
$\dfrac{1}{y}\, \dfrac{dy}{dx} =$ the differential coefficient of the function of~$x$,
so that we could have written at once, from
$\log_\epsilon y = x \log_\epsilon a$,
\[
\frac{1}{y}\, \frac{dy}{dx}
  = \log_\epsilon a\quad\text{and}\quad
\frac{dy}{dx} = a^x \log_\epsilon a.
%[ **"/" presumed][ **F1 - this note was placed after 1/y]
\]

\tb

Let us now attempt further examples.


\Examples.
(1) $y=\epsilon^{-ax}$. Let $-ax=z$; then $y=\epsilon^z$.
\[
\frac{dy}{dx} = \epsilon^z;\quad
\frac{dz}{dx} = -a;\quad\text{hence}\quad
\frac{dy}{dx} = -a\epsilon^{-ax}.
\]

Or thus:
\[
\log_\epsilon y = -ax;\quad
\frac{1}{y}\, \frac{dy}{dx} = -a;\quad
\frac{dy}{dx} = -ay = -a\epsilon^{-ax}.
\]

(2) $y=\epsilon^{\efrac{x^2}{3}}$. Let $\dfrac{x^2}{3}=z$; then $y=\epsilon^z$.
\[
\frac{dy}{dz} = \epsilon^z;\quad
\frac{dz}{dx} = \frac{2x}{3};\quad
\frac{dy}{dx} = \frac{2x}{3}\, \epsilon^{\efrac{x^2}{3}}.
\]

Or thus:
\[
\log_\epsilon y = \frac{x^2}{3};\quad
\frac{1}{y}\, \frac{dy}{dx} = \frac{2x}{3};\quad
\frac{dy}{dx} = \frac{2x}{3}\, \epsilon^{\efrac{x^2}{3}}.
\]
\DPPageSep{163.png}{151}%

(3) $y = \epsilon^{\efrac{2x}{x+1}}$.
\begin{DPalign*}
\log_\epsilon y &= \frac{2x}{x+1},\quad
\frac{1}{y}\, \frac{dy}{dx} = \frac{2(x+1)-2x}{(x+1)^2}; \\
\lintertext{hence}
\frac{dy}{dx} &= \frac{2}{(x+1)^2} \epsilon^{\efrac{2x}{x+1}}.
\end{DPalign*}

Check by writing $\dfrac{2x}{x+1}=z$.

(4) $y=\epsilon^{\sqrt{x^2+a}}$.\quad $\log_\epsilon y=(x^2+a)^{\efrac{1}{2}}$.
\[
\frac{1}{y}\, \frac{dy}{dx} = \frac{x}{(x^2+a)^{\efrac{1}{2}}}\quad\text{and}\quad
\frac{dy}{dx} = \frac{x × \epsilon^{\sqrt{x^2+a}}}{(x^2+a)^{\efrac{1}{2}}}.
\]
\DPchg{(}{}For if $(x^2+a)^{\efrac{1}{2}}=u$ and $x^2+a=v$, $u=v^{\efrac{1}{2}}$,
\[
\frac{du}{dv} = \frac{1}{{2v}^{\efrac{1}{2}}};\quad
\frac{dv}{dx} = 2x;\quad
\frac{du}{dx} = \frac{x}{\DPtypo{(x^2+)a}{(x^2+a)}^{\efrac{1}{2}}}.\DPchg{)}{}
\]

Check by writing $\sqrt{x^2+a}=z$.

(5) $y=\log(a+x^3)$. Let $(a+x^3)=z$; then $y=\log_\epsilon z$.
\[
\frac{dy}{dz} = \frac{1}{z};\quad
\frac{dz}{dx} = 3x^2;\quad\text{hence}\quad
\frac{dy}{dx} = \frac{3x^2}{a+x^3}.
\]

(6) $y=\log_\epsilon\{{3x^2+\sqrt{a+x^2}}\}$. Let $3x^2 + \sqrt{a+x^2}=z$;
then $y=\log_\epsilon z$.
\begin{align*}
\frac{dy}{dz}
  &= \frac{1}{z};\quad \frac{dz}{dx} = 6x + \frac{x}{\sqrt{x^2+a}}; \\
\frac{dy}{dx}
  &= \frac{6x + \dfrac{x}{\sqrt{x^2+a}}}{3x^2 + \sqrt{a+x^2}}
   = \frac{x(1 + 6\sqrt{x^2+a})}{(3x^2 + \sqrt{x^2+a}) \sqrt{x^2+a}}.
\end{align*}
\DPPageSep{164.png}{152}%

(7) $y=(x+3)^2 \sqrt{x-2}$.
\begin{align*}
\log_\epsilon y
  &= 2 \log_\epsilon(x+3)+ \tfrac{1}{2} \log_\epsilon(x-2). \\
\frac{1}{y}\, \frac{dy}{dx}
  &= \frac{2}{(x+3)} + \frac{1}{2(x-2)}; \\
\frac{dy}{dx}
  &= (x+3)^2 \sqrt{x-2} \left\{\frac{2}{x+3} + \frac{1}{2(x-2)}\right\}.
\end{align*}

(8) $y=(x^2+3)^3(x^3-2)^{\efrac{2}{3}}$.
\begin{align*}
\log_\epsilon y
  &= 3 \log_\epsilon(x^2+3) + \tfrac{2}{3} \log_\epsilon(x^3-2); \\
\frac{1}{y}\, \frac{dy}{dx}
  &= 3 \frac{2x}{(x^2+3)} + \frac{2}{3} \frac{3x^2}{x^3-2}
   = \frac{6x}{x^2+3} + \frac{2x^2}{x^3-2}.
\end{align*}
\DPchg{(}{}For if $y=\log_\epsilon(x^2+3)$, let $x^2+3=z$ and $u=\log_\epsilon z$.
\[
\frac{du}{dz} = \frac{1}{z};\quad
\frac{dz}{dx} = 2x;\quad
\frac{du}{dx} = \frac{2x}{x^2+3}.
\]
Similarly, if $v=\log_\epsilon(x^3-2)$, $\dfrac{dv}{dx} = \dfrac{3x^2}{x^3-2}$\DPchg{)}{} and
\[
\frac{dy}{dx}
  = (x^2+3)^3(x^3-2)^{\efrac{2}{3}}
    \left\{ \frac{6x}{x^2+3} + \frac{2x^2}{x^3-2} \right\}.
\]

(9) $y=\dfrac{\sqrt[2]{x^2+a}}{\sqrt[3]{x^3-a}}$.
\begin{DPalign*}
\log_\epsilon y
  &= \frac{1}{2} \log_\epsilon(x^2+a) - \frac{1}{3} \log_\epsilon(x^3-a). \\
\frac{1}{y}\, \frac{dy}{dx}
  &= \frac{1}{2}\, \frac{2x}{x^2+a} - \frac{1}{3}\, \frac{3x^2}{x^3-a}
   = \frac{x}{x^2+a} - \frac{x^2}{x^3-a} \\
\lintertext{and}
\frac{dy}{dx}
  &= \frac{\sqrt[2]{x^2+a}}{\sqrt[3]{x^3-a}}
     \left\{ \frac{x}{x^2+a} - \frac{x^2}{x^3-a} \right\}.
\end{DPalign*}
\DPPageSep{165.png}{153}%

(10) $y=\dfrac{1}{\log_\epsilon x}$
\[
\frac{dy}{dx}
  = \frac{\log_\epsilon x × 0 - 1 × \dfrac{1}{x}}
         {\log_\epsilon^2 x}
  = -\frac{1}{x \log_\epsilon^2x}.
\]

(11) $y=\sqrt[3]{\log_\epsilon x} = (\log_\epsilon x)^{\efrac{1}{3}}$. Let $z=\log_\epsilon x$; $y=z^{\efrac{1}{3}}$.
\[
\frac{dy}{dz} = \frac{1}{3} z^{-\efrac{2}{3}};\quad
\frac{dz}{dx} = \frac{1}{x};\quad
\frac{dy}{dx} = \frac{1}{3x \sqrt[3]{\log_\epsilon^2 x}}.
\]

(12) $y=\left(\dfrac{1}{a^x}\right)^{ax}$.
\begin{DPalign*}
\log_\epsilon y
  &= ax(\log_\epsilon 1 - \log_\epsilon a^x) = -ax \log_\epsilon a^x. \\
\frac{1}{y}\, \frac{dy}{dx}
  &= -ax × a^x \log_\epsilon a - a \log_\epsilon a^x. \displaybreak[1] \\
\lintertext{and}
\frac{dy}{dx}
  &= -\left(\frac{1}{a^x}\right)^{ax}
      (x × a^{x+1} \log_\epsilon a + a \log_\epsilon a^x).
\end{DPalign*}

Try now the following exercises.


\Exercises{XII} (See \Pageref[page]{AnsEx:XII} for Answers.)
\begin{Problems}
\Item{(1)} Differentiate $y=b(\epsilon^{ax} -\epsilon^{-ax})$.

\Item{(2)} Find the differential coefficient with respect to~$t$
of the expression $u=at^2+2\log_\epsilon t$.

\Item{(3)} If $y=n^t$, find $\dfrac{d(\log_\epsilon y)}{dt}$.

\Item{(4)} Show that if $y=\dfrac{1}{b}·\dfrac{a^{bx}}{\log_\epsilon a}$,\quad $\dfrac{dy}{dx}=a^{bx}$.

\Item{(5)} If $w=pv^n$, find $\dfrac{dw}{dv}$.
\end{Problems}
\DPPageSep{166.png}{154}%

Differentiate
\begin{Problems}[2]
\Item{(6)} $y=\log_\epsilon x^n$.
\Item{(7)} $y=3\epsilon^{-\efrac{x}{x-1}}$.

\ResetCols{2}
\Item{(8)} $y=(3x^2+1)\epsilon^{-5x}$.
\Item{(9)} $y=\log_\epsilon(x^a+a)$.

\ResetCols{1}
\Item{(10)} $y=(3x^2-1)(\sqrt{x}+1)$.

\ResetCols{2}
\Item{(11)} $y=\dfrac{\log_\epsilon(x+3)}{x+3}$.
\Item{(12)} $y=a^x × x^a$.

\ResetCols{1}
\Item{(13)} It was shown by Lord Kelvin that the speed of
signalling through a submarine cable depends on the
value of the ratio of the external diameter of the core
to the diameter of the enclosed copper wire. If this
ratio is called~$y$, then the number of signals~$s$ that can
be sent per minute can be expressed by the formula
\[
s=ay^2 \log_\epsilon \frac{1}{y};
\]
where $a$ is a constant depending on the length and
the quality of the materials. Show that if these are
given, $s$~will be a maximum if $y=1 ÷ \sqrt{\epsilon}$.

\Item{(14)} Find the maximum or minimum of
\[
y=x^3-\log_\epsilon x.
\]

\Item{(15)} Differentiate $y=\log_\epsilon(ax\epsilon^x)$.

\Item{(16)} Differentiate $y=(\log_\epsilon ax)^3$.
\end{Problems}
\tb


\Section{The Logarithmic Curve.}

Let us return to the curve which has its successive
ordinates in geometrical progression, such as that
represented by the equation $y=bp^x$.

We can see, by putting $x=0$, that $b$ is the initial
height of~$y$.

Then when
\[
x=1,\quad y=bp;\qquad
x=2,\quad y=bp^2;\qquad
x=3,\quad y=bp^3,\quad \text{etc.}
\]
\DPPageSep{167.png}{155}%

Also, we see that $p$ is the numerical value of the
ratio between the height of any ordinate and that of
the next preceding it. In \Fig{40}, we have taken $p$
as~$\frac{6}{5}$; each ordinate being $\frac{6}{5}$~as high as the preceding
one.

\Figures{167a}{167b}{40}{41}

If two successive ordinates are related together
thus in a constant ratio, their logarithms will have a
constant difference; so that, if we should plot out
a new curve, \Fig{41}, with values of~$\log_\epsilon y$ as ordinates,
it would be a straight line sloping up by equal steps.
In fact, it follows from the equation, that
\begin{DPalign*}
\log_\epsilon y &= \log_\epsilon b + x · \log_\epsilon p, \\
\lintertext{whence}
\log_\epsilon y &- \log_\epsilon b = x · \log_\epsilon p.
\end{DPalign*}

Now, since $\log_\epsilon p$ is a mere number, and may be
written as $\log_\epsilon p=a$, it follows that
\[
\log_\epsilon \frac{y}{b}=ax,
\]
and the equation takes the new form
\[
y = b\epsilon^{ax}.
\]
\DPPageSep{168.png}{156}%


\Section{The Die-away Curve.}

If we were to take $p$ as a proper fraction (less than
unity), the curve would obviously tend to sink downwards,
as in \Fig{42}, where each successive ordinate
is $\frac{3}{4}$~of the height of the preceding one.

The equation is still
\[
y=bp^x;
\]
\Figure[2.5in]{168a}{42}
but since $p$ is less than one, $\log_\epsilon p$ will be a negative
quantity, and may be written~$-a$; so that $p=\epsilon^{-a}$,
and now our equation for the curve takes the form
\[
y=b\epsilon^{-ax}.
\]

The importance of this expression is that, in the
case where the independent variable is \emph{time}, the
equation represents the course of a great many
physical processes in which something is \emph{gradually
dying away}. Thus, the cooling of a hot body is
represented (in Newton's celebrated ''law of cooling'')
by the equation
\[
\theta_t=\theta_0 \epsilon^{-at};
\]
\DPPageSep{169.png}{157}%
where $\theta_0$ is the original excess of temperature of a
hot body over that of its surroundings, $\theta_t$~the excess
of temperature at the end of time~$t$, and $a$~is a constant---namely,
the constant of decrement, depending
on the amount of surface exposed by the body, and
on its coefficients of conductivity and emissivity,
etc.

A similar formula,
\[
Q_t=Q_0 \epsilon^{-at},
\]
is used to express the charge of an electrified body,
originally having a charge~$Q_0$, which is leaking away
with a constant of decrement~$a$; which constant
depends in this case on the capacity of the body and
on the resistance of the leakage-path.

Oscillations given to a flexible spring die out after
a time; and the dying-out of the amplitude of the
motion may be expressed in a similar way.

In fact $\epsilon^{-at}$ serves as a \emph{die-away factor} for all
those phenomena in which the rate of decrease
is proportional to the magnitude of that which is
decreasing; or where, in our usual symbols, $\dfrac{dy}{dt}$~is
proportional at every moment to the value that~$y$ has
at that moment. For we have only to inspect the
curve, \Fig{42} above, to see that, at every part of it,
the slope~$\dfrac{dy}{dx}$ is proportional to the height~$y$; the
curve becoming flatter as $y$~grows smaller. In symbols,
thus
\begin{DPgather*}
y=b\epsilon^{-ax}\\
\DPPageSep{170.png}{158}%
\lintertext{or}
\log_\epsilon y
  = \log_\epsilon b - ax \log_\epsilon \epsilon
  = \log_\epsilon b - ax,\\
\lintertext{\rlap{and, differentiating,}}
\frac{1}{y}\, \frac{dy}{dx} = -a;\\
\lintertext{hence} \frac{dy}{dx} = b\epsilon^{-ax} × (-a) = -ay;
\end{DPgather*}
or, in words, the slope of the curve is downward, and
proportional to~$y$ and to the constant~$a$.

We should have got the same result if we had
taken the equation in the form
\begin{DPalign*}
y &= bp^x; \\
\lintertext{for then}
\frac{dy}{dx}
  &= bp^x × \log_\epsilon p. \\
\lintertext{\indent But}
\log_\epsilon p &= -a; \\
\lintertext{giving us}
\frac{dy}{dx} &= y × (-a) = -ay,
\end{DPalign*}
as before.

\Paragraph{The Time-constant.} In the expression for the ''die-away
factor''~$\epsilon^{-at}$, the quantity~$a$ is the reciprocal of
another quantity known as ''\emph{the time-constant},'' which
we may denote by the symbol~$T$. Then the die-away
factor will be written~$\epsilon^{-\efrac{t}{T}}$; and it will be seen, by
making $t = T$ that the meaning of~$T$ $\left(\text{or of}~\dfrac{1}{a}\right)$ is that
this is the length of time which it takes for the original
quantity (called $\theta_0$ or~$Q_0$ in the preceding instances)
to die away $\dfrac{1}{\epsilon}$th~part---that is to $0.3678$---of its
original value.
\DPPageSep{171.png}{159}%

The values of $\epsilon^x$ and~$\epsilon^{-x}$ are continually required
in different branches of physics, and as they are given
in very few sets of mathematical tables, some of the
values are tabulated \DPchg{here}{on \Pageref{littletable}} for convenience.

%[** TN: Allow table to float; re-worded preceding sentence]
\begin{table}[p]
\Pagelabel{littletable}%
\[
\setlength{\arraycolsep}{1.5em}% [** Hard-coded length]
\begin{array}{| .{2,2} | .{5,4} | .{1,6} | .{1,6} |}
\hline
\multicolumn{1}{|c|}{\Strut x} &
  \multicolumn{1}{c|}{\epsilon^x} &
  \multicolumn{1}{c|}{\epsilon^{-x}} &
  \multicolumn{1}{c|}{1-\epsilon^{-x}} \\
\hline
\Strut
0.00   &     1.0000 & 1.0000   & 0.0000   \\
0.10   &     1.1052 & 0.9048   & 0.0952   \\
0.20   &     1.2214 & 0.8187   & 0.1813   \\
0.50   &     1.6487 & 0.6065   & 0.3935   \\
0.75   &     2.1170 & 0.4724   & 0.5276   \\
0.90   &     2.4596 & 0.4066   & 0.5934   \\
1.00   &     2.7183 & 0.3679   & 0.6321   \\
1.10   &     3.0042 & 0.3329   & 0.6671   \\
1.20   &     3.3201 & 0.3012   & 0.6988   \\
1.25   &     3.4903 & 0.2865   & 0.7135   \\
1.50   &     4.4817 & 0.2231   & 0.7769   \\
1.75   &     \DPtypo{5.754}{5.755}  & 0.1738   & 0.8262   \\
2.00   &     7.389  & 0.1353   & 0.8647   \\
2.50   &    \DPtypo{12.183}{12.182}  & 0.0821   & 0.9179   \\
3.00   &    \DPtypo{20.085}{20.086}  & 0.0498   & 0.9502   \\
3.50   &    33.115  & 0.0302   & 0.9698   \\
4.00   &    54.598  & 0.0183   & 0.9817   \\
4.50   &    90.017  & 0.0111   & 0.9889   \\
5.00   &   148.41   & 0.0067   & 0.9933   \\
5.50   &   244.69   & 0.0041   & 0.9959   \\
6.00   &   403.43   & 0.00248  & 0.99752  \\
7.50   &  1808.04   & \DPtypo{0.00053}{0.00055}  & 0.99947  \\
10.00  & 22026.5    & 0.000045 & 0.999955 \\
\hline
\end{array}
\]
\end{table}

As an example of the use of this table, suppose
there is a hot body cooling, and that at the beginning
\DPPageSep{172.png}{160}%
of the experiment (\IE~when $t = 0$) it is $72°$~hotter than
the surrounding objects, and if the time-constant of its
cooling is $20$~minutes (that is, if it takes $20$~minutes
for its excess of temperature to fall to $\dfrac{1}{\epsilon}$~part of~$72°$),
then we can calculate to what it will have fallen in
any given time~$t$. For instance, let $t$ be $60$~minutes.
Then $\dfrac{t}{T} = 60 ÷ 20 = 3$, and we shall have to find the
value of~$\epsilon^{-3}$, and then multiply the original~$72°$ by
this. The table shows that $\epsilon^{-3}$ is~$0.0498$. So that
at the end of $60$~minutes the excess of temperature
will have fallen to $72° × 0.0498 = 3.586°$.

\tb

\clearpage%[** TN: Page break dependent on text block size]
\Examples{Further Examples.}
(1) The strength of an electric current in a conductor
at a time $t$~secs.\ after the application of the
electromotive force producing it is given by the expression
$C = \dfrac{E}{R}\left\{1 - \epsilon^{-\efrac{Rt}{L}}\right\}$.

The time constant is~$\dfrac{L}{R}$.

If $E = 10$, $R =1$, $L = 0.01$; then when $t$~is very large
the term~$\epsilon^{-\efrac{Rt}{L}}$ becomes~$1$, and $C = \dfrac{E}{R} = 10$; also
\[
\frac{L}{R} = T = 0.01.
\]

Its value at any time may be written:
\[
C = 10 - 10\epsilon^{-\efrac{t}{0.01}},
\]
\DPPageSep{173.png}{161}%
the time-constant being~$0.01$. This means that it
takes $0.01$~sec.\ for the variable term to fall by
$\dfrac{1}{\epsilon} = 0.3678$ of its initial value $10\epsilon^{-\efrac{0}{0.01}} = 10$.

To find the value of the current when $t = 0.001~\text{sec.}$,
say, $\dfrac{t}{T} = 0.1$, $\epsilon^{-0.1} = 0.9048$ (from table).

It follows that, after $0.001$~sec., the variable term
is $0.9048 × 10 = 9.048$, and the actual current is
$10 - 9.048 = 0.952$.

Similarly, at the end of $0.1$~sec.,
\[
\frac{t}{T} = 10;\quad \epsilon^{-10} = 0.000045;
\]
the variable term is $10 × 0.000045 = 0.00045$, the current
being~$9.9995$.

(2) The intensity~$I$ of a beam of light which has
passed through a thickness $l$~cm.\ of some transparent
medium is $I = I_0\epsilon^{-Kl}$, where $I_0$~is the initial intensity
of the beam and $K$ is a ''constant of absorption.''

This constant is usually found by experiments. If
it be found, for instance, that a beam of light has
its intensity diminished by~18\% in passing through
$10$~cms.\ of a certain transparent medium, this means
that $82 = 100 × \epsilon^{-K×10}$ or $\epsilon^{-10K} = 0.82$, and from the
table one sees that $10K = 0.20$ very nearly; hence
$K = 0.02$.

To find the thickness that will reduce the intensity
to half its value, one must find the value of~$l$ which
satisfies the equality $50 = 100 × \epsilon^{-0.02l}$, or $0.5 = \epsilon^{-0.02l}$.
\DPPageSep{174.png}{162}%
It is found by putting this equation in its logarithmic
form, namely,
\[
\log 0.5 = -0.02 × l × \log \epsilon,
\]
which gives
\[
%[** TN: Original numerator supposed to mean "-1 + .6990"?]
l = \frac{\DPchg{\overset{-}{1}.6990}{-0.3010}}{-0.02 × 0.4343}
 = \DPtypo{34.5}{34.7}~\text{centimetres nearly}.
\]

(3) The quantity~$Q$ of a radio-active substance
which has not yet undergone transformation is known
to be related to the initial quantity~$Q_0$ of the substance
by the relation $Q = Q_0 \epsilon^{-\lambda t}$, where $\lambda$ is a constant
and $t$~the time in seconds elapsed since the transformation
began.

For ''Radium~$A$,'' if time is expressed in seconds,
experiment shows that $\lambda = 3.85 × 10^{-3}$. Find the time
required for transforming half the substance. (This
time is called the ''mean life'' of the substance.)

We have $0.5 = \epsilon^{-0.00385t}$.\Pagelabel{erratum0a}%
\begin{DPalign*}
\log 0.5 &= -0.00385t × \log \epsilon; \\
\lintertext{and}
t &= 3\text{ minutes very nearly}.
\end{DPalign*}


\Exercises{XIII} (See \Pageref[page]{AnsEx:XIII} for Answers.)
\begin{Problems}
\Item{(1)} Draw the curve $y = b \epsilon^{-\efrac{t}{T}}$; where $b = 12$, $T = 8$,
and $t$ is given various values from $0$~to~$20$.

\Item{(2)} If a hot body cools so that in $24$~minutes its
excess of temperature has fallen to half the initial
amount, deduce the time-constant, and find how long
it will be in cooling down to $1$~per~cent.\ of the original
excess.
\DPPageSep{175.png}{163}%

\Item{(3)} Plot the curve $y = 100(1-\epsilon^{-2t})$.

\Item[XIII:4]{(4)} The following equations give very similar curves:
\begin{align*}
\text{(i)}\   y &= \frac{ax}{x + b}; \\
\text{(ii)}\  y &= a(1 - \epsilon^{-\efrac{x}{b}}); \\
\text{(iii)}\ y &= \frac{a}{90°} \arctan \left(\frac{x}{b}\right).
\end{align*}

Draw all three curves, taking $a= 100$ millimetres;
$b = 30$ millimetres.

\Item{(5)} Find the differential coefficient of~$y$ with respect
to~$x$, if
\[
(\textit{a})~y = x^x;\quad
(\textit{b})~y = (\epsilon^x)^x;\quad
(\textit{c})~y = \epsilon^{x^x}.
\]

\Item{(6)} For ''Thorium~$A$,'' the value of~$\lambda$ is~$5$; find the
''mean life,'' that is, the time taken by the transformation
of a quantity~$Q$ of ''Thorium~$A$'' equal to
half the initial quantity~$Q_0$ in the expression
\[
Q = Q_0 \epsilon^{-\lambda t};
\]
$t$~being in seconds.

\Item{(7)} A condenser of capacity $K = 4 × 10^{-6}$, charged
to a potential $V_0 = 20$, is discharging through a resistance
of $10,000$~ohms. Find the potential~$V$ after (\textit{a})~$0.1$
second; (\textit{b})~$0.01$ second; assuming that the fall of
potential follows the rule $V = V_0 \epsilon^{-\efrac{t}{KR}}$.

\Item{(8)} The charge~$Q$ of an electrified insulated metal
sphere is reduced from $20$ to $16$~units in $10$~minutes.
Find the coefficient~$\mu$ of leakage, if $Q = Q_0 × \epsilon^{-\mu t}$; $Q_0$
being the initial charge and $t$~being in seconds. Hence
find the time taken by half the charge to leak away.
\DPPageSep{176.png}{164}%

\Item{(9)} The damping on a telephone line can be ascertained
from the relation $i = i_0 \epsilon^{-\beta l}$, where $i$~is the
strength, after $t$~seconds, of a telephonic current of
initial strength~$i_0$; $l$~is the length of the line in kilometres,
and $\beta$~is a constant. For the Franco-English
submarine cable laid in 1910, $\beta = 0.0114$. Find the
damping at the end of the cable ($40$~kilometres), and
the length along which $i$~is still $8$\%~of the original
current (limiting value of very good audition).

\Item{(10)} The pressure~$p$ of the atmosphere at an altitude
$h$~kilometres is given by $p=p_0 \epsilon^{-kh}$; $p_0$~being the
pressure at sea-level ($760$~millimetres).

The pressures at $10$,~$20$ and~$50$ kilometres being
$199.2$, $42.2$, $0.32$ respectively, find~$k$ in each case.
Using the mean value of~$k$, find the percentage error
in each case.

\Item{(11)} Find the minimum or maximum of $y = x^x$.

\Item{(12)} Find the minimum or maximum of $y = x^{\efrac{1}{x}}$.

\Item{(13)} Find the minimum or maximum of $y = xa^{\efrac{1}{x}}$.
\end{Problems}
\DPPageSep{177.png}{165}%


\Chapter[SINES AND COSINES]{XV}{How to deal with Sines and Cosines}

\First{Greek} letters being usual to denote angles, we will
take as the usual letter for any variable angle the
letter~$\theta$ (''theta'').

Let us consider the function
\[
y= \sin \theta.
\]

\Figure{177a}{43}

What we have to investigate is the value of $\dfrac{d(\sin \theta)}{d \theta}$;
or, in other words, if the angle~$\theta$ varies, we have to
find the relation between the increment of the sine
and the increment of the angle, both increments being
indefinitely small in themselves. Examine \Fig{43},   %[ **","?]
wherein, if the radius of the circle is unity, the height
of~$y$ is the sine, and $\theta$ is the angle. Now, if $\theta$ is
\DPPageSep{178.png}{166}%
supposed to increase by the addition to it of the
small angle $d \theta$---an element of angle---the height
of~$y$, the sine, will be increased by a small element~$dy$.
The new height~$y + dy$ will be the sine of the new
angle $\theta + d \theta$, or, stating it as an equation,
\[
y+dy = \sin(\theta + d \theta);
\]
and subtracting from this the first equation gives
\[
dy = \sin(\theta + d \theta)- \sin \theta.
\]

The quantity on the right-hand side is the difference
between two sines, and books on trigonometry tell
us how to work this out. For they tell us that if
$M$ and~$N$ are two different angles,
\[
\sin M - \sin N = 2 \cos\frac{M+N}{2}·\sin\frac{M-N}{2}.
\]

If, then, we put $M= \theta + d \theta$ for one angle, and
$N= \theta$ for the other, we may write
\begin{DPalign*}
dy &= 2 \cos\frac{\theta + d\theta + \theta}{2}
      · \sin\frac{\theta + d\theta - \theta}{2},\\
\lintertext{or,}
dy &= 2\cos(\theta + \tfrac{1}{2}d\theta)
     · \sin\tfrac{1}{2} d\theta.
\end{DPalign*}

But if we regard $d \theta$ as indefinitely small, then in
the limit we may neglect~$\frac{1}{2} d \theta$ by comparison with~$\theta$,
and may also take $\sin\frac{1}{2} d \theta$ as being the same as~$\frac{1}{2} d \theta$.
The equation then becomes:\Pagelabel{differsin}
\begin{DPalign*}
dy &= 2 \cos \theta × \tfrac{1}{2} d \theta; \\
dy &= \cos \theta · d \theta, \\
\lintertext{and, finally,}
\dfrac{dy}{d \theta} &= \cos \theta.
\end{DPalign*}
\DPPageSep{179.png}{167}%

The accompanying curves, \Figs{44}{and}{45}, show,
plotted to scale, the values of $y=\sin \theta$, and $\dfrac{dy}{d\theta}=\cos\theta$,
for the corresponding values of~$\theta$.
%[** TN: Graphs in the original are reversed; cos is labeled Fig. 44., etc.]
\Figure[4in]{179a}{44}\Pagelabel{erratum2}
\Figure[4in]{179b}{45}
\tb
\DPPageSep{180.png}{168}%

Take next the cosine.\Pagelabel{differcos}

Let $y=\cos \theta$.

Now $\cos \theta=\sin\left(\dfrac{\pi}{2}-\theta\right)$.

Therefore
\begin{align*}
&\begin{aligned}
dy = d\left(\sin\left(\frac{\pi}{2} - \theta\right)\right)
  &= \cos\left(\frac{\pi}{2} - \theta\right) × d(-\theta), \\
  &= \cos\left(\frac{\pi}{2} - \theta\right) × (-d\theta),
\end{aligned} \\
&\frac{dy}{d\theta} = -\cos\left(\frac{\pi}{2} - \theta\right).
\intertext{\indent And it follows that}
&\frac{dy}{d\theta} = -\sin \theta.
\end{align*}

\tb

Lastly, take the tangent.
%
\begin{DPalign*}
\lintertext{\indent Let}
y  &= \tan \theta, \\
dy &= \tan(\theta + d\theta) - \tan\theta. \\
\intertext{\indent Expanding, as shown in books on trigonometry,}
\tan(\theta + d\theta)
   &= \frac{\tan\theta + \tan d\theta}
           {1 - \tan\theta·\tan d\theta}; \\
\lintertext{whence}
dy &= \frac{\tan\theta + \tan d\theta}
           {1-\tan\theta·\tan d\theta} - \tan\theta \\
   &= \frac{(1 + \tan^2\theta)\tan d\theta}
           {1-\tan\theta·\tan d\theta}.
\end{DPalign*}
\DPPageSep{181.png}{169}%

Now remember that if $d\theta$ is indefinitely diminished,
the value of~$\tan d\theta$ becomes identical with~$d\theta$, and
$\tan\theta · d\theta$ is negligibly small compared with~$1$, so that
the expression reduces to
\begin{DPalign*}
dy &= \frac{(1+\tan^2 \theta)\, d\theta}{1}, \\
\lintertext{so that}
\frac{dy}{d\theta} &= 1 + \tan^2\theta, \\
\lintertext{or}
\frac{dy}{d\theta} &= \sec^2 \theta.
\end{DPalign*}

Collecting these results, we have:
\[
\begin{array}{|*{2}{>{\quad}c<{\quad}|}}
\hline
\DStrut y   & \dfrac{dy}{d\theta} \\
\hline
\Strut\sin\theta & \cos\theta \\
\cos\theta & -\sin\theta \\
\Strut\tan\theta & \sec^2 \theta\\
\hline
\end{array}
\]

Sometimes, in mechanical and physical questions,
as, for example, in simple harmonic motion and in
wave-motions, we have to deal with angles that increase
in proportion to the time. Thus, if $T$ be the
time of one complete \emph{period}, or movement round the
circle, then, since the angle all round the circle is $2\pi$~radians,
or~$360°$, the amount of angle moved through
in time~$t$, will be
\begin{DPalign*}
\theta &= 2\pi\frac{t}{T},\quad \text{in radians,} \\
\lintertext{or}
\theta &= 360\frac{t}{T},\quad \text{in degrees.}
\end{DPalign*}
\DPPageSep{182.png}{170}%

If the \emph{frequency}, or number of periods per second,
be denoted by~$n$, then $n = \dfrac{1}{T}$, and we may then write:
\[
\theta=2\pi nt.
\]
Then we shall have
\[
y = \sin 2\pi nt.
\]

If, now, we wish to know how the sine varies with
respect to time, we must differentiate with respect, not
to~$\theta$, but to~$t$. For this we must resort to the artifice
explained in Chapter~IX., \Pageref{chap:IX}, and put %[ ** Page]
\[
\frac{dy}{dt} = \frac{dy}{d\theta} · \frac{d\theta}{dt}.
\]

Now $\dfrac{d\theta}{dt}$ will obviously be~$2\pi n$; so that
\begin{align*}
\frac{dy}{dt} &= \cos \theta × 2\pi n \\
              &= 2\pi n · \cos 2\pi nt. \\
\intertext{\indent Similarly, it follows that}
\frac{d(\cos 2\pi nt)}{dt} &= -2\pi n · \sin 2\pi nt.
\end{align*}


\Section{Second Differential Coefficient of Sine or Cosine.}

We have seen that when $\sin \theta$ is differentiated with
respect to~$\theta$ it becomes $\cos \theta$; and that when $\cos \theta$ is
differentiated with respect to~$\theta$ it becomes $-\sin \theta$;
or, in symbols,
\[
\frac{d^2(\DPtypo{\cos \theta}{\sin \theta})}{d\theta^2} = -\sin \theta.
\]
\DPPageSep{183.png}{171}%

So we have this curious result that we have found
a function such that if we differentiate it twice over,
we get the same thing from which we started, but
with the sign changed from $+$~to~$-$.

The same thing is true for the cosine; for differentiating
$\cos\theta$ gives us $-\sin\theta$, and differentiating
$-\sin\theta$ gives us $-\cos\theta$; or thus:
\[
\frac{d^2(\cos\theta)}{d\theta^2} = -\cos\theta.
\]

\emph{Sines and cosines are the only functions of which
the second differential coefficient is equal \emph{(and of
opposite sign to)} the original function.}

\tb

\Examples.\Pagelabel{intex3}
With what we have so far learned we can now
differentiate expressions of a more complex nature.

(1) $y=\arcsin x$.

If $y$ is the arc whose sine is~$x$, then $x = \sin y$.
\[
\frac{dx}{dy}=\cos y.
\]

Passing now from the inverse function to the original
one, we get
\begin{DPalign*}
\frac{dy}{dx}
  &= \frac{1}{\;\dfrac{dx}{dy}\;} = \frac{1}{\cos y}. \\
\lintertext{\indent Now}
\cos y
  &= \sqrt{1-\sin^2 y}=\sqrt{1-x^2}; \\
\lintertext{hence}
\frac{dy}{dx}
  &= \frac{1}{\sqrt{1-x^2}},
\end{DPalign*}
a rather unexpected result\DPtypo{}{.}
\DPPageSep{184.png}{172}%

(2) $y=\cos^3 \theta$.

This is the same thing as $y=(\cos \theta)^3$.

Let $\cos\theta=v$;\quad then $y=v^3$;\quad $\dfrac{dy}{dv}=3v^2$.
\begin{align*}
\frac{dv}{d\theta} &= -\sin\theta.\\
\frac{dy}{d\theta} &=  \frac{dy}{dv} × \frac{dv}{d\theta}
                    = -3 \cos^2 \theta \sin\theta.
\end{align*}

(3) $y=\sin(x+a)$.

Let $x+a=v$;\quad then $y=\sin v$.
\[
\frac{dy}{dv}=\cos v;\qquad
\frac{dv}{dx}=1 \quad\text{and}\quad
\frac{dy}{dx}=\cos(x+a).
\]

(4) $y=\log_\epsilon \sin \theta$.

Let $\sin\theta=v$;\quad $y=\log_\epsilon v$.
\begin{align*}
\frac{dy}{dv}      &= \frac{1}{v};\quad \frac{dv}{d\theta}=\cos\theta;\\
\frac{dy}{d\theta} &= \frac{1}{\sin\theta} × \cos\theta = \cot\theta.
\end{align*}

(5) $y=\cot\theta=\dfrac{\cos\theta}{\sin\theta}$.
\begin{align*}
\frac{dy}{d\theta}
  &= \frac{-\sin^2\theta - \cos^2 \theta}{\sin^2 \theta}\\
  &= -(1+\cot^2 \theta) = -\cosec^2 \theta.
\end{align*}

(6) $y=\tan 3\theta$.

Let $3\theta=v$;\quad $y=\tan v$;\quad $\dfrac{dy}{dv}=\sec^2 v$.
\[
\frac{dv}{d\theta}=3;\quad
\frac{dy}{d\theta}=3 \sec^2 3\theta.
\]
\DPPageSep{185.png}{173}%

(7) $y = \sqrt{1+3\tan^2\theta}$;\quad $y=(1+3 \tan^2 \theta)^{\efrac{1}{2}}$.

Let $3\tan^2\theta=v$.
\begin{DPalign*}
y &= (1+v)^{\efrac{1}{2}};\quad
\frac{dy}{dv} = \frac{1}{2\sqrt{1+v}} \text{ (see \Pageref{ExNo1});} \\
%
\frac{dv}{d\theta}
  &= 6\tan\theta \sec^2 \theta \\
%
\intertext{(for, if $\tan \theta = u$,}
v &= 3u^2;\quad \frac{dv}{du} = 6u;\quad \frac{du}{d\theta} = \sec^2 \theta; \\
%
\lintertext{hence}
\frac{dv}{d\theta}
  &= 6 \DPtypo{}{(}\tan \theta \sec^2 \theta) \\
\lintertext{hence}
%
\frac{dy}{d\theta}
  &= \frac{6\tan\theta \sec^2\theta}{2\sqrt{1 + 3\tan^2\theta}}.
\end{DPalign*}

(8) $y=\sin x \cos x$. \Pagelabel{example1}
\begin{align*}
\frac{dy}{dx}
  &= \sin x(-\sin x) + \cos x × \cos x \\
  &= \cos^2 x - \sin^2 x.
\end{align*}


\Exercises{XIV} (See \Pageref[page]{AnsEx:XIV} for Answers.)
\begin{Problems}
\Item{(1)} Differentiate the following:
\begin{align*}
\text{(i)}\quad   y &= A \sin\left(\theta - \frac{\pi}{2}\right).\\
\text{(ii)}\quad  y &= \sin^2 \theta;\quad \text{and } y = \sin 2\theta.\\
\text{(iii)}\quad y &= \sin^3 \theta;\quad \text{and } y = \sin 3\theta.
\end{align*}

\Item{(2)} Find the value of~$\theta$ for which $\sin\theta × \cos\theta$ is a
maximum.

\Item{(3)} Differentiate $y=\dfrac{1}{2\pi} \cos 2\pi nt$.
\DPPageSep{186.png}{174}%

\Item{(4)} If $y = \sin a^x$, find~$\dfrac{dy}{dx}$.

\Item{(5)} Differentiate $y=\log_\epsilon \cos x$.

\Item{(6)} Differentiate $y=18.2 \sin(x+26°)$.

\Item{(7)} Plot the curve $y=100 \sin(\theta-15°)$; and show
that the slope of the curve at $\theta = 75°$ is half the
maximum slope.

\Item{(8)} If $y=\sin \theta·\sin 2\theta$, find~$\dfrac{dy}{d\theta}$.

\Item{(9)}  If $y=a·\tan^m(\theta^n)$, find the differential coefficient
of~$y$ with respect to~$\theta$.

\Item{(10)} Differentiate $y=\epsilon^x \sin^2 x$.

\Item{(11)} Differentiate the three equations of Exercises~XIII.
(\Pageref{XIII:4}), No.~4, and compare their differential
coefficients, as to whether they are equal, or nearly
equal, for very small values of~$x$, or for very large
values of~$x$, or for values of~$x$ in the neighbourhood
of $x=30$.

\Item{(12)} Differentiate the following:
\begin{align*}%[** TN: Reformatted in two columns]
\text{(i)}\quad   y &= \sec x.    &
\text{(ii)}\quad  y &= \arccos x. \\
\text{(iii)}\quad y &= \arctan x. &
\text{(iv)}\quad  y &= \arcsec x. \\
\text{(v)}\quad   y &= \tan x × \sqrt{3 \sec x}. &&
\end{align*}

\Item{(13)} Differentiate $y=\sin(2\theta +3)^{2.3}$.

\Item{(14)} Differentiate $y=\theta^3+3 \sin(\theta+3)-3^{\sin \theta} - 3^\theta$.

\Item{(15)} Find the maximum or minimum of $y=\theta \cos \theta$.
\end{Problems}
\DPPageSep{187.png}{175}%


\Chapter{XVI}{Partial Differentiation}

\First{We} sometimes come across quantities that are functions
of more than one independent variable. Thus,
we may find a case where $y$ depends on two other
variable quantities, one of which we will call $u$ and
the other~$v$. In symbols\Pagelabel{partialdiff}
\begin{DPalign*}
y &= f(u, v). \\
\intertext{\indent Take the simplest concrete case.}
\lintertext{\indent Let }  y &= u×v. \\
\intertext{What are we to do? If we were to treat $v$ as a
constant, and differentiate with respect to~$u$, we
should get}
dy_v &= v\, du; \\
\intertext{or if we treat $u$ as a constant, and differentiate with
respect to~$v$, we should have:}
dy_u &= u\, dv.
\end{DPalign*}

The little letters here put as subscripts are to show
which quantity has been taken as constant in the
operation.

Another way of indicating that the differentiation
has been performed only \emph{partially}, that is, has been
performed only with respect to \emph{one} of the independent
\DPPageSep{188.png}{176}%
variables, is to write the differential coefficients with
Greek deltas, like~$\partial$, instead of little~$d$. In this way
\begin{align*}
\DStrut
\frac{\partial y}{\partial u} &= v, \\
\frac{\partial y}{\partial v} &= u.
\end{align*}

If we put in these values for $v$~and~$u$ respectively,
we shall have
\[
\left.
\begin{aligned}
\DStrut
dy_v &= \frac{\partial y}{\partial u}\, du, \\
dy_u &= \frac{\partial y}{\partial v}\, dv,
\end{aligned} \right\}
\quad\text{which are \emph{partial differentials}.}
\]

But, if you think of it, you will observe that the
total variation of~$y$ depends on \emph{both} these things at
the same time. That is to say, if both are varying,
the real $dy$ ought to be written
\[
dy = \frac{\partial y}{\partial u}\, du + \dfrac{\partial y}{\partial v}\, dv;
\]
and this is called a \emph{total differential}. In some books
it is written $dy = \left(\dfrac{dy}{du}\right)\, du + \left(\dfrac{dy}{dv}\right)\, dv$.


\Example{(1).} Find the partial differential coefficients
of the expression $w = 2ax^2 + 3bxy + 4cy^3$.
The answers are:
\[
\left.
\begin{aligned}
\frac{\partial w}{\partial x} &= 4ax + 3by. \\
\frac{\partial w}{\partial y} &= 3bx + 12cy^2.
\end{aligned} \right\}
\]
\DPPageSep{189.png}{177}%

The first is obtained by supposing $y$ constant, the
second is obtained by supposing $x$ constant; then
\[
dw = (4ax+3by)\, dx + (3bx+12cy^2)\, dy.
\]


\Example{(2).} Let $z = x^y$. Then, treating first $y$
and then $x$ as constant, we get in the usual way
\[
\left.
\begin{aligned}
\dfrac{\partial z}{\partial x} &= yx^{y-1}, \\
\dfrac{\partial z}{\partial y} &= x^y × \log_\epsilon x,
\end{aligned}\right\}
\]
so that $dz = yx^{y-1}\, dx + x^y \log_\epsilon x \, dy$.


\Example{(3).} A cone having height $h$ and radius
of base~$r$\DPchg{,}{} has volume $V=\frac{1}{3} \pi r^2 h$. If its height remains
constant, while $r$ changes, the ratio of change of
volume, with respect to radius, is different from ratio
of change of volume with respect to height which
would occur if the height were varied and the radius
kept constant, for
\[
\left.
\begin{aligned}
\frac{\partial V}{\partial r} &= \dfrac{2\pi}{3} rh, \\
\frac{\partial V}{\partial h} &= \dfrac{\pi}{3} r^2.
\end{aligned}\right\}
\]

The variation when both the radius and the height
change is given by $dV = \dfrac{2\pi}{3} rh\, dV + \dfrac{\pi}{3} r^2\, dh$.


\Example{(4).} \Pagelabel{Example4} In the following example $F$~and~$f$
denote two arbitrary functions of any form whatsoever.
For example, they may be sine-functions, or
exponentials, or mere algebraic functions of the two
\DPPageSep{190.png}{178}%
independent variables, $t$~and~$x$. This being understood,
let us take the expression
\begin{DPalign*}
                    y &= F(x+at) + f(x-at), \\
\lintertext{or, }   y &= F(w) + f(v); \\
\lintertext{where } w &= x+at,\quad \text{and}\quad v = x-at. \\
\lintertext{\indent Then } \frac{\partial y}{\partial x}
                      &= \frac{\partial F(w)}{\partial w} · \frac{\partial w}{\partial x}
                       + \frac{\partial f(v)}{\partial v} · \frac{\partial v}{\partial x} \\
                      &= F'(w) · 1 + f'(v) · 1
\intertext{(where the figure~$1$ is simply the coefficient of~$x$ in
$w$~and~$v$);}
\lintertext{and }     \frac{\partial^2 y}{\partial x^2}
                      &= F''(w) + f''(v). && \\
\lintertext{\indent Also } \frac{\partial y}{\partial t}
                      &= \frac{\partial F(w)}{\partial w} · \frac{\partial w}{\partial t}
                      + \frac{\partial f(v)}{\partial v} · \frac{\partial v}{\partial t} \\
                      &= F'(w) · a - f'(v) a; \\
\lintertext{and }     \frac{\partial^2 y}{\partial t^2}
                      &= F''(w)a^2 + f''(v)a^2; \\
\lintertext{whence }  \frac{\partial^2 y}{\partial t^2}
                      &= a^2\, \frac{\partial^2 y}{\partial x^2}.
\end{DPalign*}

This differential equation is of immense importance
in mathematical physics.

\Section{Maxima and Minima of Functions of two
Independent Variables.}


\Example{(5).} Let us take up again Exercise~IX.,
\Pageref{Ex9No4}, No.~4.

Let $x$~and~$y$ be the length of two of the portions of
the string. The third is $30-(x+y)$, and the area of the
\DPPageSep{191.png}{179}%
triangle is $A = \sqrt{s(s-x)(s-y)(s-30+x+y)}$, where
$s$ is the half perimeter, $15$, so that $A = \sqrt{15P}$, where
\begin{align*}%[** TN: This display centered in the original]
P &= (15-x)(15-y)(x+y-15) \\
  &= xy^2 + x^2y - 15x^2 - 15y^2 - 45xy + 450x + 450y - 3375.
\end{align*}

Clearly $A$ is maximum when $P$ is maximum.
\[
dP = \dfrac{\partial P}{\partial x}\, dx + \dfrac{\partial P}{\partial y}\, dy.
\]
For a maximum (clearly it will not be a minimum in
this case), one must have simultaneously
\BindMath{%
\[
\dfrac{\partial P}{\partial x} = 0 \quad\text{and}\quad
\dfrac{\partial P}{\partial y} = 0;
\]
\begin{DPalign*}
%[** Can't top-align the equations without enlarging the right brace]
\lintertext{\raisebox{0.5\baselineskip}{that is,}}
\left.
\begin{aligned}
2xy - 30x + y^2 - 45y + 450 &= 0, \\
2xy - 30y + x^2 - 45x + 450 &= 0.
\end{aligned}
\right\}
\end{DPalign*}}%

An immediate solution is $x=y$.

If we now introduce this condition in the value
of~$P$, we find
\[
P = (15-x)^2 (2x-15) = 2x^3 - 75x^2 + 900x - 3375.
\]
For maximum or minimum, $\dfrac{dP}{dx} = 6x^2 - 150x + 900 = 0$,
which gives $x=15$ or $x=10$.

Clearly $x=15$ gives minimum area; $x=10$ gives
the maximum, for $\dfrac{d^2 P}{dx^2} = 12x - 150$, which is $+30$ for
$x=15$ and $-30$ for $x=10$.


\Example{(6).} Find the dimensions of an ordinary
railway coal truck with rectangular ends, so that,
for a given volume~$V$ the area of sides and floor
together is as small as possible.
\DPPageSep{192.png}{180}%

The truck is a rectangular box open at the top.
Let $x$ be the length and $y$ be the width; then the
depth is~$\dfrac{V}{xy}$. The surface area is $S=xy + \dfrac{2V}{x} + \dfrac{2V}{y}$.
\[
dS = \frac{\partial S}{\partial x}\, dx
   + \frac{\partial S}{\partial y}\, dy
   = \left(y - \frac{2V}{x^2}\right) dx
   + \left(x - \frac{2V}{y^2}\right) dy.
\]
For minimum (clearly it won't be a maximum here),
\[
y - \frac{2V}{x^2} = 0,\quad
x - \frac{2V}{y^2} = 0.
\]

Here also, an immediate solution is $x = y$, so that
$S = x^2 + \dfrac{4V}{x}$,\quad $\dfrac{dS}{dx}= 2x - \dfrac{4V}{x^2} =0$ for minimum, and
\[
x = \sqrt[3]{2V}.
\]


\Exercises{XV} (See \Pageref[page]{AnsEx:XV} for Answers.)
\begin{Problems}
\Item{(1)} Differentiate the expression $\dfrac{x^3}{3} - 2x^3y - 2y^2x + \dfrac{y}{3}$
with respect to $x$~alone, and with respect to $y$~alone.

\Item{(2)} Find the partial differential coefficients with
respect to $x$,~$y$ and~$z$, of the expression
\[
x^2yz + xy^2z + xyz^2 + x^2y^2z^2.
\]

\Item{(3)} Let $r^2 = (x-a)^2 + (y-b)^2 + (z-c)^2$.

Find the value of $\dfrac{\partial r}{\partial x} +
                   \dfrac{\partial r}{\partial y} +
                   \dfrac{\partial r}{\partial z}$. Also find the value
of $\dfrac{\partial^2r}{\partial x^2} +
    \dfrac{\partial^2r}{\partial y^2} +
    \dfrac{\partial^2r}{\partial z^2}$.

\Item{(4)} Find the total differential of~$y=u^v$.
\DPPageSep{193.png}{181}%

\Item{(5)} Find the total differential of $y=u^3 \sin v$; of
$y = (\sin x)^u$; and of $y = \dfrac{\log_\epsilon u}{v}$.

\Item{(6)} Verify that the sum of three quantities $x$,~$y$,~$z$,
whose product is a constant~$k$, is maximum when
these three quantities are equal.

\Item{(7)} Find the maximum or minimum of the function
\[
u = x + 2xy + y.
\]

\Item{(8)} The post-office regulations state that no parcel
is to be of such a size that its length plus its girth
exceeds $6$~feet. What is the greatest volume that
can be sent by post (\textit{a})~in the case of a package of
rectangular cross section; (\textit{b})~in the case of a package
of circular cross section.

\Item{(9)} Divide $\pi$ into $3$~parts such that the continued
product of their sines may be a maximum or minimum.

\Item{(10)} Find the maximum or minimum of $u = \dfrac{\epsilon^{x+y}}{xy}$.

\Item{(11)} Find maximum and minimum of
\[
u = y + 2x - 2 \log_\epsilon y - \log_\epsilon x.
\]

\Item{(12)} A telpherage bucket of given capacity has
the shape of a horizontal isosceles triangular prism
with the apex underneath, and the opposite face open.
Find its dimensions in order that the least amount
of iron sheet may be used in its construction.
\end{Problems}
\DPPageSep{194.png}{182}%


\Chapter{XVII}{Integration}

\First{The} great secret has already been revealed that this
mysterious symbol~$\ds\int$, which is after all only a long~$S$,
merely means ''the sum of,'' or ''the sum of all such
quantities as.'' It therefore resembles that other
symbol~$\sum$ (the Greek \emph{Sigma}), which is also a sign
of summation. There is this difference, however, in
the practice of mathematical men as to the use of
these signs, that while $\sum$ is generally used to indicate
the sum of a number of finite quantities, the integral
sign~$\ds\int$ is generally used to indicate the summing up
of a vast number of small quantities of indefinitely
minute magnitude, mere elements in fact, that go
to make up the total required. Thus $\ds\int dy = y$, and
$\ds\int dx = x$.

Any one can understand how the whole of anything
can be conceived of as made up of a lot of little bits;
and the smaller the bits the more of them there will
be. Thus, a line one inch long may be conceived as
made up of $10$~pieces, each $\frac{1}{10}$~of an inch long; or
of $100$~parts, each part being $\frac{1}{100}$~of an inch long;
\DPPageSep{195.png}{183}%
or of $1,000,000$ parts, each of which is $\frac{1}{1,000,000}$~of an
inch long; or, pushing the thought to the limits of
conceivability, it may be regarded as made up of
an infinite number of elements each of which is
infinitesimally small.

Yes, you will say, but what is the use of thinking
of anything that way? Why not think of it straight
off, as a whole? The simple reason is that there are
a vast number of cases in which one cannot calculate
the bigness of the thing as a whole without reckoning
up the sum of a lot of small parts. The process of
''\emph{integrating}'' is to enable us to calculate totals that
otherwise we should be unable to estimate directly.

Let us first take one or two simple cases to
familiarize ourselves with this notion of summing
up a lot of separate parts.

Consider the series:
\[
1 + \tfrac{1}{2} + \tfrac{1}{4} + \tfrac{1}{8}
  + \tfrac{1}{16} + \tfrac{1}{32} + \tfrac{1}{64} + \text{etc.}
\]

Here each member of the series is formed by taking
it half the value of the preceding. What is the value
of the total if we could go on to an infinite number
of terms? Every schoolboy knows that the answer
is~$2$. Think of it, if you like, as a line. Begin with
\Figure[3.5in]{195a}{46}
one inch; add a half inch, add a quarter; add an
eighth; and so on. If at any point of the operation
\DPPageSep{196.png}{184}%
we stop, there will still be a piece wanting to make
up the whole $2$~inches; and the piece wanting will
always be the same size as the last piece added.
Thus, if after having put together $1$,~$\frac{1}{2}$, and~$\frac{1}{4}$, we stop,
there will be $\frac{1}{4}$~wanting. If we go on till we have
added~$\frac{1}{64}$, there will still be $\frac{1}{64}$~wanting. The
remainder needed will always be equal to the last
term added. By an infinite number of operations
only should we reach the actual $2$~inches. Practically
we should reach it when we got to pieces so small
that they could not be drawn---that would be after
about $10$~terms, for the eleventh term is~$\frac{1}{1024}$. If we
want to go so far that not even a Whitworth's
measuring machine would detect it, we should merely
have to go to about $20$~terms. A microscope would
not show even the $18^{\text{th}}$~term! So the infinite number
of operations is no such dreadful thing after all.
The \emph{integral} is simply the whole lot. But, as we
shall see, there are cases in which the integral
calculus enables us to get at the \emph{exact} total that
there would be as the result of an infinite number
of operations. In such cases the integral calculus
gives us a \emph{rapid} and easy way of getting at a result
that would otherwise require an interminable lot of
elaborate working out. So we had best lose no time
in learning \emph{how to integrate}.
\DPPageSep{197.png}{185}%

\Section{Slopes of Curves, and the Curves themselves.}

Let us make a little preliminary enquiry about the
slopes of curves. For we have seen that differentiating
a curve means finding an expression for its slope (or
for its slopes at different points). Can we perform
the reverse process of reconstructing the whole curve
if the slope (or slopes) are prescribed for us?

Go back to case~(2) on \Pageref{Case2}. Here we have the %[ ** Page]
simplest of curves, a sloping line with the equation
\[
y = ax+b.
\]
\Figure[2.5in]{197a}{47}

We know that here $b$~represents the initial height
of~$y$ when $x= 0$, and that~$a$, which is the same as~$\dfrac{dy}{dx}$,
is the ''slope'' of the line. The line has a constant
slope. All along it the elementary triangles \raisebox{-12pt}{\Graphic{197b}}
have the same proportion between height and base.
Suppose we were to take the~$dx$'s, and~$dy$'s of finite
\DPPageSep{198.png}{186}%
magnitude, so that $10$~$dx$'s made up one inch, then
there would be ten little triangles like
\begin{center}
  \Graphic{198a}
\end{center}

Now, suppose that we were ordered to reconstruct
the ''curve,'' starting merely from the information
that $\dfrac{dy}{dx} = a$. What could we do? Still taking the
little~$d$'s as of finite size, we could draw $10$~of them,
all with the same slope, and then put them together,
end to end, like this:
\Figure[3.25in]{198b}{48}
And, as the slope is the same for all, they would join
to make, as in \Fig{48}, a sloping line sloping with the
correct slope $\dfrac{dy}{dx} = a$. And whether we take the $dy$'s
and~$dx$'s as finite or infinitely small, as they are all
\DPPageSep{199.png}{187}%
alike, clearly $\dfrac{y}{x} = a$, if we reckon $y$~as the total of
all the~$dy$'s, and $x$~as the total of all the~$dx$'s. But
whereabouts are we to put this sloping line? Are
we to start at the origin~$O$, or higher up? As the
only information we have is as to the slope, we are
without any instructions as to the particular height
above~$O$; in fact the initial height is undetermined.
The slope will be the same, whatever the initial height.
Let us therefore make a shot at what may be wanted,
and start the sloping line at a height~$C$ above~$O$.
That is, we have the equation
\[
y = ax + C.
\]

It becomes evident now\Pagelabel{constant} that in this case the added
constant means the particular value that $y$~has when
$x = 0$.

Now let us take a harder case, that of a line, the
slope of which is not constant, but turns up more and
more. Let us assume that the upward slope gets
greater and greater in proportion as $x$~grows. In
symbols this is:
\[
\frac{dy}{dx} = ax.
\]
Or, to give a concrete case, take $a = \frac{1}{5}$, so that
\[
\frac{dy}{dx} = \tfrac{1}{5} x.
\]

Then we had best begin by calculating a few of
the values of the slope at different values of~$x$, and
also draw little diagrams of them.
\DPPageSep{200.png}{188}%
\begin{DPalign*}
\lintertext{\indent When}
x &=0,\quad \frac{dy}{dx} = 0,\Z && \Graphic{200a1} \\
x &=1,\quad \frac{dy}{dx} = 0.2, && \Graphic{200a2} \\
x &=2,\quad \frac{dy}{dx} = 0.4, && \Graphic{200a3} \\
x &=3,\quad \frac{dy}{dx} = 0.6, && \Graphic{200a4} \\
x &=4,\quad \frac{dy}{dx} = 0.8, && \Graphic{200a5} \\
x &=5,\quad \frac{dy}{dx} = 1.0. && \Graphic{200a6}
\end{DPalign*}

Now try to put the pieces together, setting each so
that the middle of its base is the proper distance to
the right, and so that they fit together at the corners;
thus (\Fig{49}). The result is, of course, not a smooth
\Figure[3in]{200b}{49}
curve: but it is an approximation to one. If we had
taken bits half as long, and twice as numerous, like
\Fig{50}, we should have a better approximation. But
\DPPageSep{201.png}{189}%
for a perfect curve we ought to take each~$dx$ and its
corresponding~$dy$ infinitesimally small, and infinitely
numerous.

\Figure[3in]{201a}{50}
Then, how much ought the value of any~$y$ to be?
Clearly, at any point~$P$ of the curve, the value of~$y$
will be the sum of all the little~$dy$'s from~$0$ up to
that level, that is to say, $\ds\int dy = y$. And as each~$dy$ is
equal to $\frac{1}{5}x · dx$, it follows that the whole~$y$ will be
equal to the sum of all such bits as~$\frac{1}{5}x · dx$, or, as we
should write it, $\ds\int \tfrac{1}{5}x · dx$.

Now if $x$ had been constant, $\ds\int \tfrac{1}{5}x · dx$ would have
been the same as $\frac{1}{5} x \ds\int dx$, or~$\frac{1}{5}x^2$. But $x$~began by
being~$0$, and increases to the particular value of~$x$ at
the point~$P$, so that its average value from~$0$ to that
point is~$\frac{1}{2}x$. Hence $\ds\int \tfrac{1}{5} x\, dx = \tfrac{1}{10} x^2$; or $y=\frac{1}{10}x^2$.

But, as in the previous case, this requires the addition
of an undetermined constant~$C$, because we have not
\DPPageSep{202.png}{190}%
been told at what height above the origin the curve
will begin, when $x = 0$. So we write, as the equation
of the curve drawn in \Fig{51},
\[
y = \tfrac{1}{10}x^2 + C.
\]
\Figure{202a}{51}


\Exercises{XVI} (See \Pageref[page]{AnsEx:XVI} for Answers.)
\begin{Problems}
\Item{(1)} Find the ultimate sum of $\frac{2}{3} + \frac{1}{3} + \frac{1}{6} + \frac{1}{12} + \frac{1}{24} + \text{etc}$.

\Item{(2)} Show that the series $1 - \frac{1}{2} + \frac{1}{3} - \frac{1}{4} + \frac{1}{5} - \frac{1}{6} + \frac{1}{7}$\DPnote{[** TN: [sic], no +]}~etc.,
is convergent, and find its sum to $8$~terms.

\Item{(3)} If $\log_\epsilon(1+x) = x - \dfrac{x^2}{2} + \dfrac{x^3}{3} - \dfrac{x^4}{4} + \text{etc}$., find $\log_\epsilon 1.3$.

\Item{(4)} Following a reasoning similar to that explained
in this chapter, find~$y$,
\[
\text{(\textit{a}) if $\frac{dy}{dx} = \tfrac{1}{4} x$;\quad
(\textit{b}) if $\frac{dy}{dx} = \cos x$.}
\]

\Item{(5)} If $\dfrac{dy}{dx} = 2x + 3$, find~$y$.
\end{Problems}
\DPPageSep{203.png}{191}%


\Chapter[HOW TO INTEGRATE]
{XVIII}{Integrating as the Reverse of Differentiating}

\First{Differentiating} is the process by which when $y$~is
given us (as a function of~$x$), we can find~$\dfrac{dy}{dx}$.

\Pagelabel{revdif}%
Like every other mathematical operation, the
process of differentiation may be reversed; thus, if
differentiating $y = x^4$ gives us $\dfrac{dy}{dx} = 4x^3$; if one begins
with $\dfrac{dy}{dx} = 4x^3$ one would say that reversing the process
would yield $y = x^4$.  But here comes in a curious
point. We should get $\dfrac{dy}{dx} = 4x^3$ if we had begun with
\emph{any} of the following:~$x^4$, or~$x^4 + a$, or~$x^4 + c$, or~$x^4$
with \emph{any} added constant. So it is clear that in
working backwards from $\dfrac{dy}{dx}$ to~$y$, one must make
provision for the possibility of there being an added
constant, the value of which will be undetermined
\DPPageSep{204.png}{192}%
until ascertained in some other way. So, if differentiating
$x^n$ yields~$nx^{n-1}$, going backwards from
$\dfrac{dy}{dx} = nx^{n-1}$ will give us $y = x^n + C$; where $C$~stands
for the yet undetermined possible constant.

Clearly, in dealing with powers of~$x$, the rule for
working backwards will be: Increase the power by~$1$,
then divide by that increased power, and add the
undetermined constant.

So, in the case where
\[
\frac{dy}{dx} = x^n,
\]
working backwards, we get
\[
y = \frac{1}{n + 1} x^{n+1} + C.
\]

If differentiating the equation $y = ax^n$ gives us
\[
\frac{dy}{dx} = anx^{n-1},
\]
it is a matter of common sense that beginning with
\[
\frac{dy}{dx} = anx^{n-1},
\]
and reversing the process, will give us
\[
y = ax^n.
\]
So, when we are dealing with a multiplying constant,
we must simply put the constant as a multiplier of
the result of the integration.
\DPPageSep{205.png}{193}%

Thus, if $\dfrac{dy}{dx} = 4x^2$, the reverse process gives us
$y = \frac{4}{3}x^3$.

But this is incomplete. For we must remember
that if we had started with
\[
y = ax^n + C,
\]
where $C$ is any constant quantity whatever, we should
equally have found
\[
\frac{dy}{dx} = anx^{n-1}.
\]

So, therefore, when we reverse the process we must
always remember to add on this undetermined constant,
even if we do not yet know what its value
will be.

This process, the reverse of differentiating, is called
\emph{integrating}; for it consists in finding the value of
the whole quantity~$y$ when you are given only an
expression for~$dy$ or for~$\dfrac{dy}{dx}$. Hitherto we have as
much as possible kept $dy$~and~$dx$ together as a differential
coefficient: henceforth we shall more often
have to separate them.

If we begin with a simple case,
\[
\frac{dy}{dx} = x^2.
\]

We may write this, if we like, as
\[
dy = x^2\, dx.
\]

Now this is a  ''differential equation''  which informs
us that an element of~$y$ is equal to the corresponding
element of~$x$ multiplied by~$x^2$. Now, what we want
\DPPageSep{206.png}{194}%
is the integral; therefore, write down with the proper
symbol the instructions to integrate both sides, thus:
\[
\int dy = \int x^2\, dx.
\]

[Note as to reading integrals: the above would be
read thus:
\begin{quote}
''\emph{Integral dee-wy \emph{equals} integral eks-squared dee-eks}.'']
\end{quote}

We haven't yet integrated: we have only written
down instructions to integrate---if we can. Let us
try. Plenty of other fools can do it---why not we
also? The left-hand side is simplicity itself. The
sum of all the bits of~$y$ is the same thing as $y$~itself.
So we may at once put:
\[
y = \int x^2\, dx.
\]

But when we come to the right-hand side of the
equation we must remember that what we have got
to sum up together is not all the~$dx$'s, but all such
terms as~$x^2\, dx$; and this will \emph{not} be the same as
$x^2 \ds\int dx$, because $x^2$~is not a constant. For some of the
$dx$'s will be multiplied by big values of~$x^2$, and some
will be multiplied by small values of~$x^2$, according to
what $x$~happens to be. So we must bethink ourselves
as to what we know about this process of integration
being the reverse of differentiation. Now, our rule
for this reversed process---see \Pageref{revdif} \textit{ante}---when
dealing with~$x^n$ is ''increase the power by one, and\Pagelabel{diffrule}
divide by the same number as this increased power.''
\DPPageSep{207.png}{195}%
That is to say, $x^2\, dx$ will be changed\footnote
  {You may ask, what has become of the little~$dx$ at the end?
  Well, remember that it was really part of the differential coefficient,
  and when changed over to the right-hand side, as in the~$x^2\, dx$,
  serves as a reminder that $x$~is the independent variable with respect
  to which the operation is to be effected; and, as the result of the
  product being totalled up, the power of~$x$ has increased by \emph{one}.
  You will soon become familiar with all this.}
to~$\frac{1}{3} x^3$. Put
this into the equation; but don't forget to add the
''constant of integration''~$C$ at the end. So we get:
\[
y = \tfrac{1}{3} x^3 + C.
\]

You have actually performed the integration. How
easy!

Let us try another simple case.

\begin{DPalign*}
\lintertext{\indent Let}
\dfrac{dy}{dx} &= ax^{12},
\end{DPalign*}
where $a$ is any constant multiplier. Well, we found
when differentiating (see \Pageref{differ}) that any constant
factor in the value of~$y$ reappeared unchanged in the
value of~$\dfrac{dy}{dx}$. In the reversed process of integrating,
it will therefore also reappear in the value of~$y$. So
we may go to work as before, thus
\begin{align*}
dy &= ax^{12} · dx,\\
\int dy &= \int ax^{12} · dx,\\
\int dy &= a \int x^{12}\, dx,\\
y &= a × \tfrac{1}{13} x^{13} + C.
\end{align*}

So that is done. How easy!
\DPPageSep{208.png}{196}%

We begin to realize now that integrating is a
process of \emph{finding our way back}, as compared with
differentiating. If ever, during differentiating, we
have found any particular expression---in this example
$ax^{12}$---we can find our way back to the~$y$ from which
it was derived. The contrast between the two
processes may be illustrated by the following remark
due to a well-known teacher. If a stranger were set
down in Trafalgar Square, and told to find his way to
Euston Station, he might find the task hopeless. But
if he had previously been personally conducted from
Euston Station to Trafalgar Square, it would be
comparatively easy to him to find his way back to
Euston Station.

\Section{Integration of the Sum or Difference of two
Functions.}

\begin{DPalign*}
\lintertext{\indent Let}
\frac{dy}{dx} &= x^2 + x^3, \\
\lintertext{then}
dy &= x^2\, dx + x^3\, dx.
\end{DPalign*}

There is no reason why we should not integrate
each term separately: for, as may be seen on \Pageref{sumdiffer},
we found that when we differentiated the sum of two
separate functions, the differential coefficient was
simply the sum of the two separate differentiations.
So, when we work backwards, integrating, the integration
will be simply the sum of the two separate
integrations.
\DPPageSep{209.png}{197}%

Our instructions will then be:
\begin{align*}
\int dy
  &= \int (x^2 + x^3)\, dx \\
  &= \int x^2\, dx + \int x^3\, dx   \\
y &= \tfrac{1}{3} x^3 + \tfrac{1}{4} x^4 + C.
\end{align*}

If either of the terms had been a negative quantity,
the corresponding term in the integral would have
also been negative. So that differences are as readily
dealt with as sums.

\Section{How to deal with Constant Terms.}

Suppose there is in the expression to be integrated
a constant term---such as this:
\[
\frac{dy}{dx} = x^n + b.
\]

This is laughably easy. For you have only to
remember that when you differentiated the expression
$y = ax$, the result was $\dfrac{dy}{dx} = a$. Hence, when you work
the other way and integrate, the constant reappears
multiplied by~$x$. So we get
\begin{align*}
dy &= x^n\, dx + b · dx,  \\
\int dy &= \int x^n\, dx + \int b\, dx, \\
y &= \frac{1}{n+1} x^{n+1} + bx + C.
\end{align*}

Here are a lot of examples on which to try your
newly acquired powers.

\tb
\DPPageSep{210.png}{198}%


\Examples.
(1) Given $\dfrac{dy}{dx} = 24x^{11}$. Find~$y$.\qquad \textit{Ans}.\ $y = 2x^{12} + C$.

(2) Find $\ds\int (a + b)(x + 1)\, dx$.\qquad It is $(a + b) \ds\int (x + 1)\, dx$ \\
or\quad $(a + b) \left[\ds\int x\, dx + \ds\int dx\right]$\quad or\quad $(a + b) \left(\dfrac{x^2}{2} + x\right) + C$.

(3) Given $\dfrac{du}{dt} = gt^{\efrac{1}{2}}$. Find~$u$.\qquad \textit{Ans}.\ $u = \frac{2}{3} gt^{\efrac{3}{2}} + C$.

(4) $\dfrac{dy}{dx} = x^3 - x^2 + x$. Find~$y$.
\BindMath{\begin{align*}
dy &= (x^3 - x^2 + x)\, dx\quad\text{or} \\
dy &= x^3\, dx - x^2\, dx + x\, dx;\quad
y = \int x^3\, dx - \int x^2\, dx + \int x\, dx;
\end{align*}
\begin{DPalign*}
\lintertext{and}
y &= \tfrac{1}{4} x^4 - \tfrac{1}{3} x^3 + \tfrac{1}{2} x^2 + C.
\end{DPalign*}}%

(5) Integrate $9.75x^{2.25}\, dx$.\qquad \textit{Ans}.\ $y = 3x^{3.25} + C$.

\tb

All these are easy enough. Let us try another case.%
\SetOddHead{Easiest Integrations}%

\begin{DPalign*}
\lintertext{Let}
\dfrac{dy}{dx} &= ax^{-1}.
\end{DPalign*}

Proceeding as before, we will write
\[
dy = a x^{-1} · dx,\quad \int dy = a \int x^{-1}\, dx.
\]

Well, but what is the integral of $x^{-1}\, dx$?

If you look back amongst the results of differentiating
$x^2$ and~$x^3$ and $x^n$,~etc., you will find we never
got~$x^{-1}$ from any one of them as the value of~$\dfrac{dy}{dx}$.
We got~$3x^2$ from~$x^3$; we got~$2x$ from~$x^2$; we got~$1$
from~$x^1$ (that is, from $x$~itself); but we did not get
$x^{-1}$ from~$x^0$, for two very good reasons. \emph{First}, $x^0$~is
simply~$= 1$, and is a constant, and could not have
\DPPageSep{211.png}{199}%
a differential coefficient. \emph{Secondly}, even if it could
be differentiated, its differential coefficient (got by
slavishly following the usual rule) would be $0 × x^{-1}$,
and that multiplication by zero gives it zero value!
Therefore when we now come to try to integrate
$x^{-1}\, dx$, we see that it does not come in anywhere
in the powers of~$x$ that are given by the rule:
\[
\int x^n\, dx = \dfrac{1}{n+1} x^{n+1}.
\]
It is an exceptional case.

Well; but try again. Look through all the various
differentials obtained from various functions of~$x$, and
try to find amongst them~$x^{-1}$. A sufficient search
will show that we actually did get $\dfrac{dy}{dx} = x^{-1}$ as the
result of differentiating\Pagelabel{intex1} the function $y = \log_\epsilon x$ (see
\Pageref{differlog}). %[ ** Page]

Then, of course, since we know that differentiating
$\log_\epsilon x$ gives us~$x^{-1}$, we know that, by reversing the
process, integrating $dy = x^{-1}\, dx$ will give us $y = \log_\epsilon x$.
But we must not forget the constant factor~$a$ that
was given, nor must we omit to add the undetermined
constant of integration. This then gives us as the
solution to the present problem,
\[
y = a \log_\epsilon x + C.
\]

\NB---Here note this very remarkable fact, that we
could not have integrated in the above case if we had
not happened to know the corresponding differentiation.
If no one had found out that differentiating
$\log_\epsilon x$ gave~$x^{-1}$, we should have been utterly stuck by
\DPPageSep{212.png}{200}%
the problem how to integrate~$x^{-1}\, dx$. Indeed it should
be frankly admitted that this is one of the curious
features of the integral calculus:---that you can't
integrate anything before the reverse process of differentiating
something else has yielded that expression
which you want to integrate. No one, even to-day,
is able to find the general integral of the expression,
\[
\frac{dy}{dx} = a^{-x^2},
\]
because $a^{-x^2}$ has never yet been found to result from
differentiating anything else.


\Subsection{Another simple case.}
Find $\ds\int (x + 1)(x + 2)\, dx$.

On looking at the function to be integrated, you
remark that it is the product of two different functions
of~$x$. You could, you think, integrate $(x + 1)\, dx$ by
itself, or $(x + 2)\, dx$ by itself. Of course you could.
But what to do with a product? None of the differentiations
you have learned have yielded you for the
differential coefficient a product like this. Failing
such, the simplest thing is to multiply up the two
functions, and then integrate. This gives us
\[
\int (x^2 + 3x + 2)\, dx.
\]
And this is the same as
\[
\int x^2\, dx + \int 3x\, dx + \int 2\, dx.
\]
And performing the integrations, we get
\[
\tfrac{1}{3} x^3 + \tfrac{3}{2} x^2 + 2x + C.
\]
\DPPageSep{213.png}{201}%


\Section[Some Other Integrals]{Some other Integrals.}

Now that we know that integration is the reverse
of differentiation, we may at once look up the differential
coefficients we already know, and see from
what functions they were derived. This gives us the
following integrals ready made:\Pagelabel{intex2}\Pagelabel{differ3}\Pagelabel{cosax}%
\begin{alignat*}{4}
&x^{-1} &&\text{(\Pageref{differlog});}\qquad &&
  \int x^{-1}\, dx      &&= \log_\epsilon x + C. \\
%
%\label{intex2}
&\frac{1}{x+a} && \text{(\Pageref{differ2});} &&
  \int \frac{1}{x+a}\, dx &&= \log_\epsilon (x+a) + C. \\
%
&\epsilon^x && \text{(\Pageref{unchanged});} &&
  \int \epsilon^x\, dx    &&= \epsilon ^x + C. \\
%
&\epsilon^{-x} &&&&
  \int \epsilon^{-x}\, dx &&= -\epsilon^{-x} + C \\
%
\intertext{(for if $y = - \dfrac{1}{\epsilon^x}$,\quad $\dfrac{dy}{dx} = -\dfrac{\epsilon^x × 0 - 1 × \epsilon^x}{\epsilon^{2x}} = \epsilon^{-x}$).}
%
&\sin x && \text{(\Pageref{differcos});} &&
  \int \sin x\, dx        &&= -\cos x + C. \\
%
&\cos x && \text{(\Pageref{differsin});} &&
  \int \cos x\, dx        &&= \sin x + C. \\
%
\intertext{\indent Also we may deduce the following:}
%
&\log_\epsilon x; &&&&
  \int\log_\epsilon x\, dx &&= x(\log_\epsilon x - 1) + C \\
%
\intertext{(for if $y = x \log_\epsilon x - x$,\quad $\dfrac{dy}{dx} = \dfrac{x}{x} + \log_\epsilon x - 1 = \log_\epsilon x$).}
\DPPageSep{214.png}{202}%
%
&\log_{10} x;   &&&&
  \int\log_{10} x\, dx &&= 0.4343x (\log_\epsilon x - 1) + C. \\
%
&a^x && \text{(\Pageref{diffexp});}  &&
  \int a^x\, dx        &&= \dfrac{a^x}{\log_\epsilon a} + C. \\
%
% \label{cosax}
&\cos ax; &&&& \int\cos ax\, dx     &&= \frac{1}{a} \sin ax + C \\
\intertext{(for if $y = \sin ax$, $\dfrac{dy}{dx} = a \cos ax$; hence to get $\cos ax$
one must differentiate $y = \dfrac{1}{a} \sin ax$).}
%
&\sin ax; &&&& \int\sin ax\, dx     &&= -\frac{1}{a} \cos ax + C. \\
\end{alignat*}

Try also $\cos^2\theta$; a little dodge will simplify matters:
\begin{DPgather*}
\cos 2\theta = \cos^2\theta - \sin^2\theta
             = \DPtypo{2\cos 2\theta - 1}{2\cos^2 \theta - 1}; \\
\lintertext{hence}
\cos^2\theta = \tfrac{1}{2}(\DPtypo{\cos^2 \theta + 1}{\cos 2\theta + 1}),
\end{DPgather*}
\begin{DPalign*}
\lintertext{and}
\int\cos^2 \theta\, d\theta
  &= \tfrac{1}{2} \int (\cos 2\theta + 1)\, d\theta \\
  &= \tfrac{1}{2} \int \cos 2 \theta\, d\theta + \tfrac{1}{2} \int d\theta. \\
  &= \frac{\sin 2\theta}{4} + \frac{\theta}{2} + C.\text{ (See also \Pageref{moreexamples}).} %[ ** Page]
\end{DPalign*}


See also the Table of Standard Forms on \Pagerange{stdforms1}{stdforms2}.
You should make such a table for yourself, putting
in it only the general functions which you have
successfully differentiated and integrated. See to it
that it grows steadily!
\DPPageSep{215.png}{203}%


\Section[Double Integrals]{On Double and Triple Integrals.}

In many cases it is necessary to integrate some
expression for two or more variables contained in it;
and in that case the sign of integration appears more
than once. Thus,
\[
\iint f(x,y,)\, dx\, dy
\]
means that some function of the variables $x$~and~$y$
has to be integrated for each. It does not matter in
which order they are done. Thus, take the function
$x^2 + y^2$. Integrating it with respect to~$x$ gives us:
\[
\int (x^2+y^2)\, dx = \tfrac{1}{3} x^3 + xy^2.
\]

Now, integrate this with respect to~$y$:
\[
\int (\tfrac{1}{3} x^3 + xy^2)\, dy = \tfrac{1}{3} x^3y + \tfrac{1}{3} xy^3,
\]
to which of course a constant is to be added. If we
had reversed the order of the operations, the result
would have been the same.

In dealing with areas of surfaces and of solids, we
have often to integrate both for length and breadth,
and thus have integrals of the form
\[
\iint u · dx\, dy,
\]
where $u$ is some property that depends, at each point,
on~$x$ and on~$y$. This would then be called a \emph{surface-integral}.
It indicates that the value of all such
\DPPageSep{216.png}{204}%
elements as $u · dx · dy$ (that is to say, of the value of~$u$
over a little rectangle $dx$~long and $dy$~broad) has to be
summed up over the whole length and whole breadth.

Similarly in the case of solids, where we deal with
three dimensions. Consider any element of volume,
the small cube whose dimensions are $dx$~$dy$~$dz$. If
the figure of the solid be expressed by the function
$f(x, y, z)$, then the whole solid will have the \emph{volume-integral},
\[
\text{volume} = \iiint f(x,y,z) · dx · dy · dz.
\]
Naturally, such integrations have to be taken between
appropriate limits\footnote
  {See \Pageref{limits} for integration between limits.}
in each dimension; and the
integration cannot be performed unless one knows in
what way the boundaries of the surface depend on
$x$,~$y$, and~$z$. If the limits for~$x$ are from $x_1$ to~$x_2$,
those for~$y$ from $y_1$ to~$y_2$, and those for~$z$ from $z_1$
to~$z_2$, then clearly we have
\[
\text{volume} = \int_{z1}^{z2} \int_{y1}^{y2} \int_{x1}^{x2} f(x,y,z) · dx · dy · dz.
\]

There are of course plenty of complicated and
difficult cases; but, in general, it is quite easy to
see the significance of the symbols where they are
intended to indicate that a certain integration has to
be performed over a given surface, or throughout a
given solid space.
\DPPageSep{217.png}{205}%


\Exercises[SIMPLE INTEGRATIONS]{XVII}
(See \Pageref{AnsEx:XVII} for the Answers.)
\begin{Problems}
\Item{(1)} Find  $\ds\int y\, dx$ when  $y^2 = 4 ax$.

\ResetCols{2}
\Item{(2)} Find  $\ds\int \frac{3}{x^4}\, dx$.
\Item{(3)} Find  $\ds\int \frac{1}{a} x^3\, dx$.

\ResetCols{2}
\Item{(4)} Find  $\ds\int (x^2 + a)\, dx$.
\Item{(5)} Integrate $5x^{-\efrac{7}{2}}$.

\ResetCols{1}
\Item{(6)} Find  $\ds\int (4x^3 + 3x^2 + 2x + 1)\, dx$.

\Item{(7)} If $\dfrac{dy}{dx} = \dfrac{ax}{2} + \dfrac{bx^2}{3} + \dfrac{cx^3}{4}$; find~$y$.

\ResetCols{2}
\Item{(8)} Find $\ds\int \left(\frac{x^2 + a}{x + a}\right) dx$.
\Item{(9)}  Find $\ds\int (x + 3)^3\, dx$.

\ResetCols{1}
\Item{(10)} Find $\ds\int (x + 2)(x - a)\, dx$.

\Item{(11)} Find $\ds\int (\sqrt x + \sqrt[3] x) 3a^2\, dx$.

\Item{(12)} Find $\ds\int (\sin \theta - \tfrac{1}{2})\, \frac{d\theta}{3}$.

\ResetCols{2}
\Item{(13)} Find  $\ds\int \cos^2 a \theta\, d\theta$.
\Item{(14)} Find  $\ds\int \sin^2 \theta\, d\theta$.

\ResetCols{2}
\Item{(15)} Find  $\ds\int \sin^2 a \theta\, d\theta$.
\Item{(16)} Find  $\ds\int \epsilon^{3x}\, dx$.

\ResetCols{2}
\Item{(17)} Find  $\ds\int \dfrac{dx}{1 + x}$.
\Item{(18)} Find  $\ds\int \dfrac{dx}{1 - x}$.
\end{Problems}
\DPPageSep{218.png}{206}%


\Chapter[FINDING AREAS BY INTEGRATING]{XIX}{On Finding Areas by Integrating}

\First{One} use of the integral calculus is to enable us to
ascertain the values of areas bounded by curves.

Let us try to get at the subject bit by bit.

\Figure[2.5in]{218a}{52}

Let $AB$ (\Fig{52}) be a curve, the equation to which
is known. That is, $y$~in this curve is some known
function of~$x$. Think of a piece of the curve from
the point~$P$ to the point~$Q$.

Let a perpendicular~$PM$ be dropped from~$P$, and
another~$QN$ from the point~$Q$. Then call $OM = x_1$
and $ON = x_2$, and the ordinates $PM = y_1$ and $QN = y_2$.
We have thus marked out the area~$PQNM$ that lies
\DPPageSep{219.png}{207}%
beneath the piece~$PQ$. The problem is, \emph{how can we
calculate the value of this area}?

%[Illustration]

The secret of solving this problem is to conceive
the area as being divided up into a lot of narrow
strips, each of them being of the width~$dx$. The
smaller we take~$dx$, the more of them there will be
between $x_1$ and~$x_2$. Now, the whole area is clearly
equal to the sum of the areas of all such strips. Our
business will then be to discover an expression for
the area of any one narrow strip, and to integrate it
so as to add together all the strips. Now think of
any one of the strips. It
\begin{wrapfigure}[7]{r}{0.5in}
  \hfill\smash[t]{\raisebox{-1.375in}{\Graphic[0.375in]{219a}}}
\end{wrapfigure}
will be like this:
being bounded between two vertical sides, with
a flat bottom~$dx$, and with a slightly curved
sloping top. Suppose we take its \emph{average}
height as being~$y$; then, as its width is~$dx$, its
area will be~$y\, dx$. And seeing that we may
take the width as narrow as we please, if we
only take it narrow enough its average height will be
the same as the height at the middle of it. Now
let us call the unknown value of the whole area~$S$,
meaning surface. The area of one strip will be
simply a bit of the whole area, and may therefore
be called~$dS$. So we may write
\[
\text{area of $1$~strip} = dS = y · dx.
\]
If then we add up all the strips, we get
\[
\text{total area~$S$} = \int dS = \int y\, dx.
\]

So then our finding $S$ depends on whether we can
\DPPageSep{220.png}{208}%
integrate $y · dx$ for the particular case, when we know
what the value of~$y$ is as a function of~$x$.

For instance, if you were told that for the particular
curve in question $y = b + ax^2$, no doubt you could put
that value into the expression and say: then I must
find $\ds\int (b + ax^2)\, dx$. %[ ** \displaystyle]

That is all very well; but a little thought will show
you that something more must be done. Because the
area we are trying to find is not the area under the
whole length of the curve, but only the area limited
on the left by~$PM$, and on the right by~$QN$, it follows
that we must do something to define our area between
those '\emph{limits}.'\Pagelabel{limits} %[ ** F2: Single quotes, elsewhere double]

This introduces us to a new notion, namely that of
\emph{integrating between limits}. We suppose $x$ to vary,
and for the present purpose we do not require any
value of~$x$ below~$x_1$ (that is~$OM$), nor any value of~$x$
above~$x_2$ (that is~$ON$). When an integral is to be
thus defined between two limits, we call the lower
of the two values \emph{the inferior limit}, and the upper
value \emph{the superior limit}. Any integral so limited
we designate as a \emph{definite integral}, by way of distinguishing
it from a \emph{general integral} to which no
limits are assigned.

In the symbols which give instructions to integrate,
the limits are marked by putting them at the top
and bottom respectively of the sign of integration.
Thus the instruction
\[
\int_{x=x_1}^{x=x_2} y · dx
\]
\DPPageSep{221.png}{209}%
will be read: find the integral of~$y · dx$ between the
inferior limit~$x_1$ and the superior limit~$x_2$.

Sometimes the thing is written more simply
\[
\int^{x_2}_{x_1} y · dx.
\]
Well, but \emph{how} do you find an integral between limits,
when you have got these instructions?

Look again at \Fig{52} (\Pageref{fig:52}). Suppose we could %[ ** Page]
find the area under the larger piece of curve from
$A$ to~$Q$, that is from $x = 0$ to~$x = x_2$, naming the area
$AQNO$. Then, suppose we could find the area under
the smaller piece from $A$ to~$P$, that is from $x = 0$ to
$x = x_1$, namely the area $APMO$. If then we were to
subtract the smaller area from the larger, we should
have left as a remainder the area $PQNM$, which is
what we want. Here we have the clue as to what
to do; the definite integral between the two limits is
\emph{the difference} between the integral worked out for
the superior limit and the integral worked out for the
lower limit.

Let us then go ahead. First, find the general
integral thus:
\[
\int y\, dx,
\]
and, as $y = b + ax^2$ is the equation to the curve (\Fig{52}),
\[
\int (b + ax^2)\, dx
\]
is the general integral which we must find.

Doing the integration in question by the rule
(\Pageref{section:9}), we get
\[
bx + \frac{a}{3} x^3 + C;
\]
\DPPageSep{222.png}{210}%
and this will be the whole area from~$0$ up to any
value of~$x$ that we may assign.

Therefore, the larger area up to the superior limit~$x_2$
will be
\[
bx_2 + \frac{a}{3} x_2^3 + C;
\]
and the smaller area up to the inferior limit~$x_1$ will be
\[
bx_1 + \frac{a}{3} x_1^3 + C.
\]

Now, subtract the smaller from the larger, and we
get for the area~$S$ the value,
\[
\text{area~$S$} = b(x_2 - x_1) + \frac{a}{3}(x_2^3 - x_1^3).
\]

This is the answer we wanted. Let us give some
numerical values. Suppose $b = 10$, $a = 0.06$, and $x_2 = 8$
and $x_1 = 6$. Then the area~$S$ is equal to
\begin{gather*}
10(8 - 6) + \frac{0.06}{3} (8^3 - 6^3) \\
\begin{aligned}
&= 20 + 0.02(512 - 216)    \\
&= 20 + 0.02 × 296    \\
&= 20 + 5.92     \\
&= 25.92.
\end{aligned}
\end{gather*}

Let us here put down a symbolic way of stating
what we have ascertained about limits:
\[
\int^{x=x_2}_{x=x_1} y\, dx = y_2 - y_1,
\]
where $y_2$ is the integrated value of~$y\, dx$ corresponding
to~$x_2$, and $y_1$~that corresponding to~$x_1$.
\DPPageSep{223.png}{211}%

All integration between limits requires the difference
between two values to be thus found. Also note
that, in making the subtraction the added constant~$C$
has disappeared.


\Examples.
(1) To familiarize ourselves with the process, let us
take a case of which we know the answer beforehand.
Let us find the area of the triangle (\Fig{53}), which
has base $x = 12$ and height $y = 4$. We know beforehand,
from obvious mensuration, that the answer will
come~$24$.

\Figure{223a}{53}

Now, here we have as the ''curve'' a sloping line
for which the equation is
\[
y = \frac{x}{3}.
\]

The area in question will be
\[
\int^{x=12}_{x=0} y · dx = \int^{x=12}_{x=0} \frac{x}{3} · dx.
\]

Integrating $\dfrac{x}{3}\, dx$ (\Pageref{diffrule}), and putting down the %[ ** Page]
\DPPageSep{224.png}{212}%
value of the general integral in square brackets with
the limits marked above and below, we get
\begin{align*}
\text{area} %[ ** F2: Nowadays the + C would be inside the brackets]
  &= \left[ \frac{1}{3} · \frac{1}{2} x^2 \right]^{x=12}_{x=0} + C \\
  &= \left[ \frac{x^2}{6} \right]^{x=12}_{x=0} + C  \\
  &= \left[ \frac{12^2}{6} \right] - \left[ \frac{0^2}{6} \right] \\
  &= \frac{144}{6} = 24.\quad \textit{Ans}.
\end{align*}

Let us satisfy ourselves about this rather surprising
dodge of calculation, by testing it on a simple
example. Get some squared paper, preferably some
\Figure[2.75in]{224a}{54}
that is ruled in little squares of one-eighth inch or
one-tenth inch each way.  On this squared paper
plot out the graph of the equation,
\[
y = \frac{x}{3}.
\]

The values to be plotted will be:
\[
\begin{array} {|c|| *{5}{c|}}
\hline
\Strut
\Td[c]{x} & \Td[c]{0} & \Td[c]{3} & \Td[c]{6} & \Td[c]{9} & \Td{12} \\
\hline
\Strut
\Td[c]{y} & \Td[c]{0} & \Td[c]{1} & \Td[c]{2} & \Td[c]{3}  & \Td{4} \\
\hline
\end{array}
\]

The plot is given in \Fig{54}.
\DPPageSep{225.png}{213}%

Now reckon out the area beneath the curve \emph{by
counting the little squares} below the line, from $x = 0$
as far as $x = 12$ on the right. There are $18$~whole
squares and four triangles, each of which has an area
equal to $1\frac{1}{2}$~squares; or, in total, $24$~squares. Hence
$24$~is the numerical value of the integral of $\dfrac{x}{3}\, dx$
between the lower limit of $x = 0$ and the higher limit
of $x = 12$.

As a further exercise, show that the value of the
same integral between the limits of $x = 3$ and $x = 15$
is~$36$.

\Figure[2.75in]{225a}{55}
(2) Find the area, between limits $x = x_1$ and $x = 0$,
of the curve $y = \dfrac{b}{x + a}$.
\begin{align*}
\text{Area}
  &= \int^{x=x_1}_{x=0} y · dx
   = \int^{x=x_1}_{x=0} \frac{b}{x+a}\, dx \displaybreak[1] \\
\DPPageSep{226.png}{214}%
  &= b \bigl[\log_\epsilon(x + a) \bigr]^{x_1} _{0} + C \displaybreak[1] \\
  &= b \bigl[\log_\epsilon(x_1 + a) - \log_\epsilon(0 + a)\bigr] \displaybreak[1] \\
  &= b \log_\epsilon \frac{x_1 + a}{a}.\quad \textit{Ans}.
\end{align*}

\NB---Notice that in dealing with definite integrals
the constant~$C$ always disappears by subtraction.

Let it be noted that this process of subtracting one
part from a larger to find the difference is really a
common practice. How do you find the area of a
\Figure[1.5in]{226a}{56}
plane ring (\Fig{56}), the outer radius of which is~$r_2$
and the inner radius is~$r_1$? You know from mensuration
that the area of the outer circle is~$\pi r_2^2$; then
you find the area of the inner circle,~$\pi r_1^2$; then you
subtract the latter from the former, and find area of
ring $= \pi(r_2^2 - r_1^2)$; which may be written
\[
\pi(r_2 + r_1)(r_2 - r_1)
\]
$= \text{mean circumference of ring} × \text{width of ring}$.
\DPPageSep{227.png}{215}%

(3) Here's another case---that of the \emph{die-away curve}
(\Pageref{section:5}). Find the area between $x = 0$ and $x = a$, of
the curve (\Fig{57}) whose equation is
\begin{align*}
y &= b\epsilon^{-x}. \\
\text{Area}
  &= b\int^{x=a} _{x=0} \epsilon^{-x} · dx. \displaybreak[1] \\
\intertext{\indent The integration (\Pageref{differ3}) gives}
  &= b\left[-\epsilon^{-x}\right]^a _0 \\
  &= b\bigl[-\epsilon^{-a} - (-\epsilon^{-0})\bigr] \\
  &= b(1-\epsilon^{-a}).
\end{align*}

\Figures{227a}{227b}{57}{58}

(4) Another example is afforded by the adiabatic
curve of a perfect gas, the equation to which is
$pv^n = c$, where $p$~stands for pressure, $v$~for volume,
and $n$~is of the value~$1.42$ (\Fig{58}).

Find the area under the curve (which is proportional
\DPPageSep{228.png}{216}%
to the work done in suddenly compressing the gas)
from volume~$v_2$ to volume~$v_1$.

Here we have
\begin{align*}
\text{area}
  &= \int^{v=v_2}_{v=v_1} cv^{-n} · dv \\
  &= c\left[\frac{1}{1-n} v^{1-n} \right]^{v_2} _{v_1} \\
  &= c \frac{1}{1-n} (v_2^{1-n} - v_1^{1-n}) \\
  &= \frac{-c}{0.42}\left(\frac{1}{v_2^{0.42}} - \frac{1}{v_1^{0.42}}\right).
\end{align*}


\Subsection{An Exercise.}
Prove the ordinary mensuration formula, that the
area~$A$ of a circle whose radius is~$R$, is equal to~$\pi R^2$.

\Figure{228a}{59}

Consider an elementary zone or annulus of the
surface (\Fig{59}), of breadth~$dr$, situated at a distance~$r$
from the centre. We may consider the entire surface
as consisting of such narrow zones, and the
whole area~$A$ will simply be the integral of all
\DPPageSep{229.png}{217}%
such elementary zones from centre to margin, that is,
integrated from $r = 0$ to $r = R$.

We have therefore to find an expression for the
elementary area~$dA$ of the narrow zone. Think of
it as a strip of breadth~$dr$, and of a length that is
the periphery of the circle of radius~$r$, that is, a
length of~$2 \pi r$. Then we have, as the area of the
narrow zone,
\[
dA = 2 \pi r\, dr.
\]

Hence the area of the whole circle will be:
\[
A = \int dA
  = \int^{r=R}_{r=0} 2 \pi r · dr
  = 2 \pi \int^{r=R}_{r=0} r · dr.
\]

Now, the general integral of $r · dr$ is~$\frac{1}{2} r^2$. Therefore,
\begin{DPalign*}
A &= 2 \pi \bigl[\tfrac{1}{2} r^2 \bigr]^{r=R}_{r=0}; \\
\lintertext{or}
A &= 2 \pi \bigl[\tfrac{1}{2} R^2 - \tfrac{1}{2}(0)^2\bigr]; \\
\lintertext{whence}
A &= \pi R^2.
\end{DPalign*}


\Subsection{Another Exercise.}
Let us find the mean ordinate of the positive part
of the curve $y = x - x^2$, which is shown in \Fig{60}.
\Figure[3in]{229a}{60}
To find the mean ordinate, we shall have to find the
area of the piece~$OMN$, and then divide it by the
\DPPageSep{230.png}{218}%
length of the base~$ON$. But before we can find
the area we must ascertain the length of the base,
so as to know up to what limit we are to integrate.
At $N$ the ordinate~$y$ has zero value; therefore, we
must look at the equation and see what value of~$x$
will make $y = 0$. Now, clearly, if $x$ is~$0$, $y$~will also be~$0$,
the curve passing through the origin~$O$; but also,
if $x=1$, $y=0$; so that $x=1$ gives us the position of
the point~$N$.

Then the area wanted is
\begin{align*}
  &= \int^{x=1}_{x=0} (x-x^2)\, dx \\
  &= \left[\tfrac{1}{2} x^2 - \tfrac{1}{3} x^3 \right]^{1}_{0} \\
  &= \left[\tfrac{1}{2} - \tfrac{1}{3} \right] - [0-0] \\
  &= \tfrac{1}{6}.
\end{align*}

But the base length is~$1$.

Therefore, the average ordinate of the curve $= \frac{1}{6}$.

[\NB---It will be a pretty and simple exercise in
maxima and minima to find by differentiation what
is the height of the maximum ordinate. It \emph{must} be
greater than the average.]

The mean ordinate of any curve, over a range from
$x= 0$ to $x = x_1$, is given by the expression,
\[
\text{mean~$y$} = \frac{1}{x_1} \int^{x=x_1}_{x=0} y · dx.
\]

One can also find in the same way the surface area
of a solid of revolution.
\DPPageSep{231.png}{219}%

%[** TN: Original contains a run-in heading]
\Example. The curve $y=x^2-5$ is revolving about
the axis of~$x$. Find the area of the surface generated
by the curve between $x=0$ and~$x=6$.

A point on the curve, the ordinate of which is~$y$,
describes a circumference of length~$2\pi y$, and a narrow
belt of the surface, of width~$dx$, corresponding to this
point, has for area~$2\pi y\, dx$. The total area is
\begin{align*}
2\pi \int^{x=6}_{x=0} y\, dx
  &= 2\pi \int^{x=6}_{x=0} (x^2-5)\, dx
   = 2\pi \left[\frac{x^3}{3} - 5x\right]^6_0 \\
  &= 6.28 × 42=263.76.
\end{align*}


\Section{Areas in Polar Coordinates.}

When the equation of the boundary of an area is
given as a function of the distance~$r$ of a point of it
from a fixed point~$O$ (see \Fig{61}) called the \emph{pole}, and
\Figure[2.5in]{231a}{61}
of the angle which $r$~makes with the positive horizontal
direction~$OX$, the process just explained can
be applied just as easily, with a small modification.
Instead of a strip of area, we consider a small triangle
$OAB$, the angle at~$O$ being~$d\theta$, and we find the sum
\DPPageSep{232.png}{220}%
of all the little triangles making up the required
area.

{\loosen%
The area of such a small triangle is approximately
$\dfrac{AB}{2}×r$ or $\dfrac{r\, d\theta}{2}×r$;} hence the portion of the area
included between the curve and two positions of~$r$
corresponding to the angles $\theta_1$~and~$\theta_2$ is given by
\[
\tfrac{1}{2} \int^{\theta=\theta_2}_{\theta=\theta_1} r^2\, d\theta.
\]

\tb


\Examples.
(1) Find the area of the sector of $1$~radian in a
circumference of radius $a$~\DPchg{inch}{inches}.

The polar equation of the circumference is evidently
$r=a$. The area is
\[
\tfrac{1}{2} \int^{\theta=\theta_2}_{\theta=\theta_1} a^2\, d\theta
  = \frac{a^2}{2} \int^{\theta=1}_{\theta=0} d\theta
  = \frac{a^2}{2}.
\]

(2) Find the area of the first quadrant of the curve
(known as ''Pascal's Snail''), the polar equation of
which is $r=a(1+\cos \theta)$.
\begin{align*}
\text{Area}
  &= \tfrac{1}{2}  \int^{\theta=\frac{\pi}{2}}_{\theta=0} a^2(1+\cos \theta)^2\, d\theta  \\
  &= \frac{a^2}{2} \int^{\theta=\frac{\pi}{2}}_{\theta=0} (1+2 \cos \theta + \cos^2 \theta)\, d\theta  \\
  &= \frac{a^2}{2} \left[\theta + 2 \sin \theta + \frac{\theta}{2} + \frac{\sin 2 \theta}{4} \right]^{\efrac{\pi}{2}}_{0} \\
  &= \frac{a^2(3\pi+8)}{8}.
\end{align*}
\DPPageSep{233.png}{221}%

\Section{Volumes by Integration.}

What we have done with the area of a little strip
of a surface, we can, of course, just as easily do with
the volume of a little strip of a solid. We can add
up all the little strips that make up the total solid,
and find its volume, just as we have added up all the
small little bits that made up an area to find the final
area of the figure operated upon.

\tb


\Examples.
(1) Find the volume of a sphere of radius~$r$.

A thin spherical shell has for volume~$4\pi x^2\, dx$ (see
\Fig{59}, \Pageref{fig:59}); summing up all the concentric shells %[xref, Page]
which make up the sphere, we have
\[
\text{volume sphere}
  = \int^{x=r}_{x=0} 4\pi x^2\, dx
  = 4\pi \left[\frac{x^3}{3} \right]^r_0
  = \tfrac{4}{3} \pi r^3.
\]

\Figure[2in]{233a}{62}

We can also proceed as follows: a slice of the
sphere, of thickness~$dx$, has for volume~$\pi y^2\, dx$ (see
\Fig{62}). Also $x$ and~$y$ are related by the expression
\[
y^2 = r^2 - x^2.
\]
\DPPageSep{234.png}{222}%
\begin{DPalign*}
\lintertext{\indent Hence}
\text{volume sphere}
  &= 2 \int^{x=r}_{x=0} \pi(r^2-x^2)\, dx \\
  &= 2 \pi \left[ \int^{x=r}_{x=0} r^2\, dx - \int^{x=r}_{x=0} x^2\, dx \right] \\
  &= 2 \pi \left[r^2x - \frac{x^3}{3} \right]^r_0 = \frac{4\pi}{3} r^3.
\end{DPalign*}

(2) Find the volume of the solid generated by the
revolution of the curve $y^2=6x$ about the axis of~$x$,
between $x=0$ and $x=4$.

The volume of a strip of the solid is~$\pi y^2\, dx$.
\begin{DPalign*}
\lintertext{\indent Hence}
\text{volume}
  &= \int^{x=4}_{x=0} \pi y^2\, dx = 6\pi \int^{x=4}_{x=0} x\, dx  \\
  &= 6\pi \left[ \frac{x^2}{2} \right]^4_0 = 48\pi = 150.8.
\end{DPalign*}

\Section{On Quadratic Means.}

In certain branches of physics, particularly in the
study of alternating electric currents, it is necessary
to be able to calculate the \emph{quadratic mean} of a
variable quantity. By ''quadratic mean'' is denoted
the square root of the mean of the squares of all the
values between the limits considered. Other names
for the quadratic mean of any quantity are its
''virtual'' value, or its ''\textsc{r.m.s.}''\ (meaning root-mean-square)
value. The French term is \textit{valeur efficace}. If~$y$
is the function under consideration, and the quadratic
mean is to be taken between the limits of $x=0$
and $x=l$; then the quadratic mean is expressed as
\[
\sqrt[2] {\frac{1}{l} \int^l_0 y^2\, dx}.
\]
\DPPageSep{235.png}{223}%


\Examples.
(1) To find the quadratic mean of the function
$y=ax$ (\Fig{63}).

Here the integral is $\ds\int^l_0 a^2 x^2\, dx$,\DPnote{** TN: Omitting line break}
which is~$\frac{1}{3} a^2 l^3$.

\Figure[2.5in]{235a}{63}

Dividing by~$l$ and taking the square root, we have
\[
\text{quadratic mean} = \frac{1}{\sqrt 3}\, al.
\]

Here the arithmetical mean is~$\frac{1}{2}al$; and the ratio
of quadratic to arithmetical mean (this ratio is called
the \emph{form-factor}) is $\dfrac{2}{\sqrt 3}=1.155$.

(2) To find the quadratic mean of the function $y=x^a$.

The integral is $\ds\int^{x=l}_{x=0} x^{2a}\, dx$, that is $\dfrac{l^{2a+1}}{2a+1}$.
\begin{DPgather*}
\lintertext{Hence}
\text{quadratic mean} = \sqrt[2]{\dfrac{l^{2a}}{2a+1}}.
\end{DPgather*}

(3) To find the quadratic mean of the function $y=a^{\efrac{x}{2}}$.

The integral is $\ds\int^{x=l}_{x=0} (a^{\efrac{x}{2}})^2\, dx$, that is $\ds\int^{x=l}_{x=0} a^x\, dx$,
\DPPageSep{236.png}{224}%
\begin{DPgather*}
\lintertext{or}
\left[ \frac{a^x}{\log_\epsilon a} \right]^{x=l}_{x=0},
\end{DPgather*}
which is $\dfrac{a^l-1}{\log_\epsilon a}$.

Hence the quadratic mean is $\sqrt[2] {\dfrac{a^l - 1}{l \log_\epsilon a}}$.


\Exercises{XVIII} (See \Pageref{AnsEx:XVIII} for Answers.)
\begin{Problems}
\Item{(1)} Find the area of the curve $y=x^2+x-5$ between
$x=0$ and $x=6$, and the mean ordinates between
these limits.

\Item{(2)} Find the area of the parabola $y=2a\sqrt x$ between
$x=0$ and $x=a$. Show that it is two-thirds of the
rectangle of the limiting ordinate and of its abscissa.

\Item{(3)} Find the area of the positive portion of a sine
curve and the mean ordinate.

\Item{(4)} Find the area of the positive portion of the
curve $y=\sin^2 x$, and find the mean ordinate.

\Item{(5)} Find the area included between the two branches
of the curve $y=x^2 ± x^{\efrac{5}{2}}$ from $x=0$ to $x=1$, also the
area of the positive portion of the lower branch of
the curve (see \Fig{30}, \Pageref{fig:30}). %[ ** Page, xref]

\Item{(6)} Find the volume of a cone of radius of base~$r$,
and of height~$h$.

\Item{(7)} Find the area of the curve $y=x^3-\log_\epsilon x$ between
$x=0$ and $x=1$.

\Item{(8)} Find the volume generated by the curve
$y=\sqrt{1+x^2}$, as it revolves about the axis of~$x$, between
$x=0$ and $x=4$.
\DPPageSep{237.png}{225}%

\Item{(9)} Find the volume generated by a sine curve
revolving about the axis of~$x$. Find also the area of
its surface.

\Item{(10)} Find the area of the portion of the curve
$xy=a$ included between $x=1$ and $x = a$. Find the
mean ordinate between these limits.

\Item{(11)} Show that the quadratic mean of the function
$y=\sin x$, between the limits of $0$~and~$\pi$ radians, is~$\dfrac{\sqrt2}{2}$.
Find also the arithmetical mean of the same
function between the same limits; and show that the
form-factor is~$=1.11$.

\Item{(12)} Find the arithmetical and quadratic means of
the function $x^2+3x+2$, from $x=0$ to $x=3$.

\Item{(13)} Find the quadratic mean and the arithmetical
mean of the function $y=A_1 \sin x + A_1 \sin 3x$.

\Item{(14)} A certain curve has the equation $y=3.42\epsilon^{0.21x}$.
Find the area included between the curve and the
axis of~$x$, from the ordinate at $x=2$ to the ordinate
at $x = 8$. Find also the height of the mean ordinate
of the curve between these points.

\Item{(15)} Show that the radius of a circle, the area of
which is twice the area of a polar diagram, is equal
to the quadratic mean of all the values of~$r$ for that
polar diagram.

\Item{(16)} Find the volume generated by the curve
$y=±\dfrac{x}{6}\sqrt{x(10-x)}$ rotating about the axis of~$x$.
\end{Problems}
\DPPageSep{238.png}{226}%


\Chapter{XX}{Dodges, Pitfalls, and Triumphs}

\Paragraph{Dodges.} A great part of the labour of integrating
things consists in licking them into some shape that
can be integrated. The books---and by this is meant
the serious books---on the Integral Calculus are full
of plans and methods and dodges and artifices for
this kind of work. The following are a few of
them.

\Paragraph{Integration by Parts.}\Pagelabel{intparts} This name is given to a
dodge, the formula for which is
\[
\int u\, dx = ux - \int x\, du + C.
\]
It is useful in some cases that you can't tackle
directly, for it shows that if in any case $\ds\int x\, du$ can
be found, then $\ds\int u\, dx$ can also be found. The formula
can be deduced as follows. From \Pageref{differprod}, we have,
\[
d(ux) = u\, dx + x\, du,
\]
which may be written
\[
u(dx) = d(ux) - x\, du,
\]
which by direct integration gives the above expression.
\DPPageSep{239.png}{227}%


\Examples.
(1) Find $\ds\int w · \sin w\, dw$.

Write $u = w$, and for $\sin w · dw$ write~$dx$. We shall
then have $du = dw$, while $\ds\int \sin w · dw = -\cos w = x$.

Putting these into the formula, we get
\begin{align*}
\int w · \sin w\, dw &= w(-\cos w) - \int -\cos w\, dw  \\
                     &=-w \cos w + \sin w + C.
\end{align*}

(2) Find $\ds\int x \epsilon^x\, dx$.
%
\BindMath{\begin{DPalign*}
\lintertext{\indent Write}
 u &=  x, & \epsilon^x\, dx&=dv; \\
\lintertext{then}
du &= dx, & v &=\epsilon^x,
\end{DPalign*}
\begin{DPgather*}
\lintertext{and}
\int x\epsilon^x\, dx
   = x\epsilon^x - \int \epsilon^x\, dx
      \quad \text{(by the formula)} \\
   = x \epsilon^x - \epsilon^x = \epsilon^x(x-1) + C.
\end{DPgather*}}%

(3) Try $\ds\int \cos^2 \theta\, d\theta$.\Pagelabel{moreexamples}
\begin{DPalign*}
u &= \cos \theta, &\cos \theta\, d\theta &= dv. \\
\lintertext{\indent Hence}
du&= -\sin \theta\, d\theta, & v &=\sin \theta,
\end{DPalign*}
\begin{align*}
\int \cos^2 \theta\, d\theta
  &= \cos \theta \sin \theta+ \int \sin^2 \theta\, d\theta       \\
  &= \frac{2 \cos\theta \sin\theta}{2} +\int(1-\cos^2 \theta)\, d\theta  \\
  &= \frac{\sin 2\theta}{2} + \int d\theta - \int \cos^2 \theta\, d\theta.
\end{align*}
\begin{DPalign*}
\lintertext{\indent Hence}
2 \int \cos^2 \theta\, d\theta
  &= \frac{\sin 2\theta}{2} + \theta \\
\lintertext{and}
\int \cos^2 \theta\, d\theta
  &= \frac{\sin 2\theta}{4} + \frac{\theta}{2} + C.
\end{DPalign*}
\DPPageSep{240.png}{228}%

(4) Find $\ds\int x^2 \sin x\, dx$.
%
\begin{DPalign*}
\lintertext{\indent Write}
x^2  &= u, & \sin x\, dx &= dv; \\
\lintertext{then}
du &= 2x\, dx, & v &= -\cos x,
\end{DPalign*}
\[
\int x^2 \sin x\, dx = -x^2 \cos x + 2 \int x \cos x\, dx.
\]

Now find $\ds\int x \cos x\, dx$, integrating by parts (as in
Example~1 above):
\[
\int x \cos x\, dx = x \sin x + \cos x+C.
\]

Hence
\begin{align*}
\int x^2 \sin x\, dx
  &= -x^2 \cos x + 2x \sin x + 2 \cos x + C' \\
  &= 2 \left[ x \sin x + \cos x \left(1 - \frac{x^2}{2}\right) \right] +C'.
\end{align*}

(5) Find $\ds\int \sqrt{1-x^2}\, dx$.
\begin{DPalign*}
\lintertext{Write}
u &= \sqrt{1-x^2},\quad dx=dv;  \\
\lintertext{then}
du &= -\frac{x\, dx}{\sqrt{1-x^2}}\quad \text{(see Chap.~IX., \Pageref{chap:IX})}
\end{DPalign*}
and $x=v$; so that
\[
\int \sqrt{1-x^2}\, dx=x \sqrt{1-x^2} + \int \frac{x^2\, dx}{\sqrt{1-x^2}}.
\]

Here we may use a little dodge, for we can write
\[
\int \sqrt{1-x^2}\, dx
  = \int \frac{(1-x^2)\, dx}{\sqrt{1-x^2}}
  = \int \frac{dx}{\sqrt{1-x^2}} - \int \frac{x^2\, dx}{\sqrt{1-x^2}}.
\]

Adding these two last equations, we get rid of
$\ds\int \dfrac{x^2\, dx}{\sqrt{1-x^2}}$, and we have
\[
2 \int \sqrt{1-x^2}\, dx = x\sqrt{1-x^2} + \int \frac{dx}{\sqrt{1-x^2}}.
\]
\DPPageSep{241.png}{229}%

Do you remember meeting $\dfrac {dx}{\sqrt{1-x^2}}$? it is got by
differentiating $y=\arcsin x$ (see \Pageref{intex3}); hence its integral
is $\arcsin x$, and so
\[
\int \sqrt{1-x^2}\, dx = \frac{x \sqrt{1-x^2}}{2} + \tfrac{1}{2} \arcsin x +C.
\]

You can try now some exercises by yourself; you
will find some at the end of this chapter.

\Paragraph{Substitution.} This is the same dodge as explained
in Chap.~IX., \Pageref{chap:IX}. Let us illustrate its application
to integration by a few examples.

(1) $\ds\int \sqrt{3+x}\, dx$.
\begin{DPalign*}
\lintertext{\indent Let}
3+x &= u,\quad dx = du; \\
\lintertext{replace}
\int u^{\efrac{1}{2}}\, du
  &= \tfrac{2}{3} u^{\efrac{3}{2}} = \tfrac{2}{3}(3+x)^{\efrac{3}{2}}.
\end{DPalign*}

(2) $\ds\int \dfrac{dx}{\epsilon^x+\epsilon^{-x}}$.
\begin{DPgather*}
\lintertext{\indent Let}
\epsilon^x = u,\quad \frac{du}{dx} = \epsilon^x,\quad\text{and}\quad
dx = \frac{du}{\epsilon^x}; \\
\lintertext{so that}
\int \frac{dx}{\epsilon^x+\epsilon^{-x}}
  = \int \frac{du}{\epsilon^x(\epsilon^x+\epsilon^{-x})}
  = \int \frac{du}{u\left(u + \dfrac{1}{u}\right)}
  = \int \frac{du}{u^2+1}.
\end{DPgather*}

$\dfrac{du}{1+u^2}$ is the result of differentiating $\arctan x$.

Hence the integral is $\arctan \epsilon^x$.

(3) $\ds\int \dfrac{dx}{x^2+2x+3} = \ds\int \dfrac{dx}{x^2+2x+1+2} = \ds\int \dfrac{dx}{(x+1)^2+(\sqrt 2)^2}$.
\DPPageSep{242.png}{230}%
\begin{DPgather*}
\lintertext{\indent Let}
x+1=u,\quad dx=du;
\end{DPgather*}
then the integral becomes $\ds\int \dfrac{du}{u^2+(\sqrt2)^2}$; but $\dfrac{du}{u^2+a^2}$ is
the result of differentiating $u=\dfrac{1}{a} \arctan \dfrac{u}{a}$.

Hence one has finally $\dfrac{1}{\sqrt2} \arctan \dfrac{x+1}{\sqrt 2}$ for the value
of the given integral.

\emph{Formulæ of Reduction} are special forms applicable
chiefly to binomial and trigonometrical expressions
that have to be integrated, and have to be reduced
into some form of which the integral is known.

\textit{Rationalization}, and \textit{Factorization of Denominator}
are dodges applicable in special cases, but they do not
admit of any short or general explanation. Much
practice is needed to become familiar with these preparatory
processes.

The following example shows how the process of
splitting\Pagelabel{partfracs} into partial fractions, which we learned in
Chap.~XIII., \Pageref{partfracs2}, can be made use of in integration.

Take again $\ds\int \dfrac{dx}{x^2+2x+3}$; if we split $\dfrac{1}{x^2+2x+3}$
into partial fractions, this becomes (see \Pageref{partfracs3}):
\[
\dfrac{1}{2\sqrt{-2}} \left[\int \dfrac{dx}{x+1-\sqrt{-2}} - \int \dfrac{dx}{x+1+\sqrt{-2}} \right]
\]
\[
=\dfrac{1}{2\sqrt{-2}} \log_\epsilon \dfrac{x+1-\sqrt{-2}}{x+1+\sqrt{-2}}.
\]
Notice that the same integral can be expressed
\DPPageSep{243.png}{231}%
sometimes in more than one way (which are equivalent
to one another).

\Paragraph{Pitfalls.} A beginner is liable to overlook certain
points that a practised hand would avoid; such as
the use of factors that are equivalent to either zero or
infinity, and the occurrence of indeterminate quantities
such as $\tfrac{0}{0}$. There is no golden rule that will meet
every possible case. Nothing but practice and intelligent
care will avail. An example of a pitfall which
had to be circumvented arose in Chap.~XVIII., \Pageref{chap:XVIII},
when we came to the problem of integrating $x^{-1}\, dx$.

\Paragraph{Triumphs.} By triumphs must be understood the
successes with which the calculus has been applied to
the solution of problems otherwise intractable. Often
in the consideration of physical relations one is able
to build up an expression for the law governing the
interaction of the parts or of the forces that govern
them, such expression being naturally in the form of
a \emph{differential equation}, that is an equation containing
differential coefficients with or without other algebraic
quantities. And when such a differential equation
has been found, one can get no further until it has
been integrated. Generally it is much easier to state
the appropriate differential equation than to solve it:---the
real trouble begins then only when one wants to
integrate, unless indeed the equation is seen to possess
some standard form of which the integral is known,
and then the triumph is easy. The equation which
results from integrating a differential equation is
\DPPageSep{244.png}{232}%
called\footnote
{This means that the actual result of solving it is called its
''solution.'' But many mathematicians would say, with Professor
Forsyth, ''every differential equation \emph{is considered as solved} when
the value of the dependent variable is expressed as a function of
the independent variable by means either of known functions, or of
integrals, whether the integrations in the latter can or cannot be
expressed in terms of functions already known.''}
 its ''solution''; and it is quite astonishing
how in many cases the solution looks as if it had no
relation to the differential equation of which it is
the integrated form. The solution often seems as
different from the original expression as a butterfly
does from the caterpillar that it was. Who would
have supposed that such an innocent thing as
\[
\dfrac{dy}{dx} = \dfrac{1}{a^2-x^2}
\]
could blossom out into
\[
y = \dfrac{1}{2a} \log_\epsilon \dfrac{a+x}{a-x} + C?
\]
yet the latter is the \textit{solution} of the former.

As a last example, let us work out the above together.

By partial fractions,\Pagelabel{partfracs3}
\begin{align*}
\frac{1}{a^2-x^2} &= \frac{1}{2a(a+x)} + \frac{1}{2a(a-x)},  \\
dy &= \frac {dx}{2a(a+x)}+ \frac{dx}{2a(a-x)},  \\
y  &= \frac{1}{2a}
       \left( \int \frac{dx}{a+x}
            + \int \frac{dx}{a-x} \right) \displaybreak[1] \\
   &= \frac{1}{2a} \left(\log_\epsilon (a+x) - \log_\epsilon (a-x) \right) \displaybreak[1] \\
   &= \frac{1}{2a} \log_\epsilon \frac{a+x}{a-x} + C.
\end{align*}
\DPPageSep{245.png}{233}%
% [** TN: Hack removes vertical space, giving a better page break below]
\indent Not a very difficult metamorphosis!

There are whole treatises, such as Boole's \textit{Differential
Equations}, devoted to the subject of thus finding
the ''solutions'' for different original forms.


\Exercises{XIX} (See \Pageref{AnsEx:XIX} for Answers.)

\begin{Problems}[2]
\Item{(1)} Find $\ds\int \sqrt {a^2 - x^2}\, dx$.
\Item{(2)} Find $\ds\int x \log_\epsilon x\, dx$.

\ResetCols{2}
\Item{(3)} Find $\ds\int x^a \log_\epsilon x\, dx$.
\Item{(4)} Find $\ds\int \epsilon^x \cos \epsilon^x\, dx$.

\ResetCols{2}
\Item{(5)} Find $\ds\int \dfrac{1}{x} \cos (\log_\epsilon x)\, dx$.
\Item{(6)} Find $\ds\int x^2 \epsilon^x\, dx$.

\ResetCols{2}
\Item{(7)} Find $\ds\int \dfrac{(\log_\epsilon x)^a}{x}\, dx$.
\Item{(8)} Find $\ds\int \dfrac{dx}{x \log_\epsilon x}$.

\ResetCols{2}
\Item{(9)} Find $\ds\int \dfrac{5x+1}{x^2 +x-2}\, dx$.
\Item{(10)} Find $\ds\int \dfrac{(x^2 -3)\, dx}{x^3 - 7x+6}$.

\ResetCols{2}
\Item{(11)} Find $\ds\int \dfrac{b\, dx}{x^2 -a^2}$.
\Item{(12)} Find $\ds\int \dfrac{4x\, dx}{x^4 -1}$.

\ResetCols{2}
\Item{(13)} Find $\ds\int \dfrac{dx}{1-x^4}$.
\Item{(14)} Find $\ds\int \dfrac{dx}{x \sqrt {a-bx^2}}$.
\end{Problems}
\DPPageSep{246.png}{234}%


\Chapter[FINDING SOLUTIONS]
{XXI}{Finding some Solutions}

\First{In} this chapter we go to work finding solutions to
some important differential equations, using for this
purpose the processes shown in the preceding chapters.

The beginner, who now knows how easy most of
those processes are in themselves, will here begin to
realize that integration is \emph{an art}. As in all arts, so
in this, facility can be acquired only by diligent and
regular practice. He who would attain that facility
must work out examples, and more examples, and yet
more examples, such as are found abundantly in all
the regular treatises on the Calculus. Our purpose
here must be to afford the briefest introduction to
serious work.

\tb

\Example{1.} Find the solution of the differential
equation
\[
ay + b \frac{dy}{dx} = 0.
\]

Transposing we have
\[
b \frac{dy}{dx} = -ay.
\]
\DPPageSep{247.png}{235}%

Now the mere inspection of this relation tells us
that we have got to do with a case in which $\dfrac{dy}{dx}$ is
proportional to~$y$. If we think of the curve which
will represent $y$ as a function of~$x$, it will be such
that its slope at any point will be proportional to
the ordinate at that point, and will be a negative
slope if $y$~is positive. So obviously the curve will
be a die-away curve (\Pageref{section:5}), and the solution will
contain~$\epsilon^{-x}$ as a factor. But, without presuming on
this bit of sagacity, let us go to work.

As both $y$~and~$dy$ occur in the equation and on
opposite sides, we can do nothing until we get both
$y$~and~$dy$ to one side, and $dx$~to the other. To do
this, we must split our usually inseparable companions
$dy$~and~$dx$ from one another.
\[
\frac{dy}{y} = - \frac{a}{b}\, dx.
\]

Having done the deed, we now can see that both
sides have got into a shape that is integrable, because
we recognize $\dfrac{dy}{y}$, or $\dfrac{1}{y}\, dy$, as a differential that we
have met with (\Pageref{expolo}) when differentiating logarithms.
So we may at once write down the instructions to
integrate,
\[
\int \frac{dy}{y} = \int -\frac{a}{b}\, dx;
\]
and doing the two integrations, we have:
\[
\log_\epsilon y = -\frac{a}{b} x + \log_\epsilon C,
\]
\DPPageSep{248.png}{236}%
where $\log_\epsilon C$ is the yet undetermined constant\footnote
  {We may write down any form of constant as the ''constant of
  integration,'' and the form $\log_\epsilon C$ is adopted here by preference,
  because the other terms in this line of equation are, or are treated
  as logarithms; and it saves complications afterward if the added
  constant be \emph{of the same kind}.}
of
integration. Then, delogarizing, we get:
\[
y = C \epsilon^{-\efrac{a}{b} x},
\]
which is \emph{the solution} required. Now, this solution
looks quite unlike the original differential equation
from which it was constructed: yet to an expert
mathematician they both convey the same information
as to the way in which $y$~depends on~$x$.

Now, as to the $C$, its meaning depends on the
initial value of~$y$. For if we put $x = 0$ in order to
see what value $y$ then has, we find that this makes
$y = C \epsilon^{-0}$; and as $\epsilon^{-0} = 1$ we see that $C$~is nothing else
than the particular value\footnote
  {Compare what was said about the ''constant of integration,''
  with reference to \Fig{48} on \Pageref{constant}, and \Fig{51} on \Pageref{fig:51}.}
 of~$y$ at starting. This we
may call~$y_0$, and so write the solution as
\[
y = y_0 \epsilon^{-\efrac{a}{b} x}.
\]

\tb

\Example{2.}

Let us take as an example to solve
\[
ay + b \frac{dy}{dx} = g,
\]
where $g$ is a constant. Again, inspecting the equation
will suggest, (1)~that somehow or other $\epsilon^x$~will come
into the solution, and (2)~that if at any part of the
\DPPageSep{249.png}{237}%
curve~$y$ becomes either a maximum or a minimum, so
that $\dfrac{dy}{dx} = 0$, then $y$~will have the value $= \dfrac{g}{a}$. But let
us go to work as before, separating the differentials
and trying to transform the thing into some integrable
shape.
\begin{align*}
b\frac{dy}{dx}           &= g -ay; \\
\frac{dy}{dx}            &= \frac{a}{b}\left(\frac{g}{a}-y\right); \\
\frac{dy}{y-\dfrac{g}{a}} &= -\frac{a}{b}\, dx.
\end{align*}

Now we have done our best to get nothing but $y$~and~$dy$
on one side, and nothing but $dx$ on the other.
But is the result on the left side integrable?

It is of the same form as the result on \Pageref{differlog}; so,
writing the instructions to integrate, we have:
\[
\int{\frac{dy}{y-\dfrac{g}{a}}} = - \int{\frac{a}{b}\, dx};
\]
and, doing the integration, and adding the appropriate
constant,
\begin{DPalign*}
\log_\epsilon\left(y-\frac{g}{a}\right) &= -\frac{a}{b}x + \log_\epsilon C; \\
\lintertext{whence }      y-\frac{g}{a} &= C\epsilon^{-\efrac{a}{b}x}; \\
\lintertext{and finally, }            y &= \frac{g}{a} + C\epsilon^{-\efrac{a}{b}x},
\end{DPalign*}
which is \emph{the solution}.
\DPPageSep{250.png}{238}%

If the condition is laid down that $y = 0$ when $x = 0$
we can find~$C$; for then the exponential becomes $= 1$;
and we have
\begin{DPalign*}
                0 &= \frac{g}{a} + C, \\
\lintertext{or} C &= -\frac{g}{a}.
\end{DPalign*}

Putting in this value, the solution becomes
\[
y = \frac{g}{a} (1-\epsilon^{-\efrac{a}{b} x}).
\]

But further, if $x$ grows indefinitely, $y$ will grow to
a maximum; for when $x=\infty$, the exponential $= 0$,
giving $y_{\text{max.}} = \dfrac{g}{a}$. Substituting this, we get finally
\[
y = y_{\text{max.}}(1-\epsilon^{-\efrac{a}{b} x}).
\]

This result is also of importance in physical science.

\tb


\Example{3.}
\begin{DPgather*}
\lintertext{\indent Let} ay+b\frac{dy}{dt} = g · \sin 2\pi nt.
\end{DPgather*}

We shall find this much less tractable than the
preceding. First divide through by~$b$.
\[
\frac{dy}{dt} + \frac{a}{b}y = \frac{g}{b} \sin 2\pi nt.
\]

Now, as it stands, the left side is not integrable.
But it can be made so by the artifice---and this is
\DPPageSep{251.png}{239}%
where skill and practice suggest a plan---of multiplying
all the terms by $\epsilon^{\efrac{a}{b} t}$, giving us:
\[
\frac{dy}{dt} \epsilon^{\efrac{a}{b} t} + \frac{a}{b} y \epsilon^{\efrac{a}{b} t} = \frac{g}{b} \epsilon^{\efrac{a}{b} t} · \sin 2 \pi nt,
\]
which is the same as
\[
\frac{dy}{dt} \epsilon^{\efrac{a}{b} t} + y \frac{d(\epsilon^{\efrac{a}{b} t})}{dt} = \frac{g}{b} \epsilon^{\efrac{a}{b} t} · \sin 2 \pi nt;
\]
and this being a perfect differential may be integrated
thus:---since, if  $u = y\epsilon^{\efrac{a}{b} t}$, $\dfrac{du}{dt} = \dfrac{dy}{dt} \epsilon^{\efrac{a}{b} t} + y \dfrac{d(\epsilon^{\efrac{a}{b} t})}{dt}$,
\begin{DPalign*}
  y \epsilon^{\efrac{a}{b} t}
  &= \frac{g}{b} \int \epsilon^{\efrac{a}{b} t} · \sin 2 \pi nt · dt + C, \\
\lintertext{or}
y &= \frac{g}{b} \epsilon^{-\efrac{a}{b} t}
     \int \epsilon^{ \efrac{a}{b} t} · \sin 2\pi nt · dt
       + C\epsilon^{-\efrac{a}{b} t}.
\tag*{[\textsc{a}]}%[** TN: Omitted dot leaders here, below.]
\end{DPalign*}

The last term is obviously a term which will die
out as $t$ increases, and may be omitted. The trouble
now comes in to find the integral that appears as a
factor. To tackle this we resort to the device (see
\Pageref{intparts}) of integration by parts, the general formula for
which is $\ds\int u dv = uv - \int v du$. For this purpose write
\begin{align*}
&\left\{
\begin{aligned}
 u &= \epsilon^{\efrac{a}{b} t}; \\
dv &= \sin 2\pi nt · dt.
\end{aligned}
\right. \displaybreak[1] \\
\intertext{\indent We shall then have}
&\left\{
\begin{aligned}
du &= \epsilon^{\efrac{a}{b} t} × \frac{a}{b}\, dt; \\
v &= - \frac{1}{2\pi n} \cos 2\pi nt.
\end{aligned}
\right.
\end{align*}
\DPPageSep{252.png}{240}%

Inserting these, the integral in question becomes:
\begin{align*}
\int \epsilon^{\efrac{a}{b} t} &{} · \sin 2 \pi n t · dt \\
&= -\frac{1}{2 \pi n} · \epsilon^{\efrac{a}{b} t} · \cos 2 \pi nt
   -\int -\frac{1}{2\pi n} \cos 2 \pi nt · \epsilon^{\efrac{a}{b} t} · \frac{a}{b}\, dt \\
&= -\frac{1}{2 \pi n} \epsilon^{\efrac{a}{b} t} \cos 2 \pi nt
   +\frac{a}{2 \pi nb} \int \epsilon^{\efrac{a}{b} t} · \cos 2 \pi nt · dt.
\tag*{[\textsc{b}]}
\end{align*}

The last integral is still irreducible. To evade the
difficulty, repeat the integration by parts of the left
side, but treating it in the reverse way by writing:
\begin{DPalign*}
&\left\{
\begin{aligned}
u &= \sin 2 \pi n t ; \\
dv &= \epsilon^{\efrac{a}{b} t} · dt;
\end{aligned}
\right. \\[1ex]
\lintertext{whence}
&\left\{
  \begin{aligned}
  du &= 2 \pi n · \cos 2 \pi n t · dt; \\
 v &= \frac{b}{a} \epsilon ^{\efrac{a}{b} t}
\end{aligned}
\right.
\end{DPalign*}

Inserting these, we get
\begin{align*}
\int \epsilon^{\efrac{a}{b} t} &{} · \sin 2 \pi n t · dt\\
&= \frac{b}{a} · \epsilon^{\efrac{a}{b} t} · \sin 2 \pi n t -
   \frac{2 \pi n b}{a} \int \epsilon^{\efrac{a}{b} t} · \cos 2 \pi n t · dt. \tag*{[\textsc{c}]}
\end{align*}

Noting that the final intractable integral in~[\textsc{c}] is
the same as that in~[\textsc{b}], we may eliminate it, by
multiplying~[\textsc{b}] by $\dfrac{2 \pi nb}{a}$, and multiplying~[\textsc{c}] by
$\dfrac{a}{2 \pi nb}$, and adding them.
\DPPageSep{253.png}{241}%

The result, when cleared down, is:
\begin{align*}
\int \epsilon^{\efrac{a}{b} t} · \sin 2 \pi n t · dt
  &= \epsilon^{\efrac{a}{b} t} \left\{\frac{ ab · \sin 2 \pi nt - 2 \pi n b^2 · \cos 2 \pi n t}{ a^2 + 4 \pi^2 n^2 b^2 } \right\}
\tag*{[\textsc{d}]} &\\
\intertext{\indent Inserting this value in~[\textsc{a}], we get}
y &= g \left\{\frac{ a · \sin 2 \pi n t - 2 \pi n b · \cos 2 \pi nt}{ a^2 + 4 \pi^2  n^2 b^2}\right\}. &
\end{align*}

To simplify still further, let us imagine an angle~$\phi$
such that $\tan \phi = \dfrac{2 \pi n b}{ a}$.
\begin{DPalign*}
\lintertext{\indent Then}
\sin \phi &= \frac{2 \pi nb}{\sqrt{a^2 + 4 \pi^2 n^2 b^2}}, \\
\lintertext{and}
\cos \phi &= \frac{a}{\sqrt{a^2 + 4 \pi^2 n^2 b^2}}. \displaybreak[1] \\
\intertext{\rlap{Substituting these, we get:}}
y &= g \frac{\cos \phi · \sin 2 \pi nt
  - \sin \phi · \cos 2 \pi nt}{\sqrt{a^2 + 4 \pi^2 n^2 b^2}}, \\
\intertext{\rlap{which may be written}}
y &= g \frac{\sin(2 \pi nt - \phi)}{\sqrt{a^2 + 4 \pi^2 n^2 b^2}},\\
\lintertext{\rlap{which is \textit{the solution} desired.}}
\end{DPalign*}

This is indeed none other than the equation of an
alternating electric current, where $g$ represents the
amplitude of the electromotive force, $n$~the frequency,
$a$~the resistance, $b$~the coefficient of self-induction of
the circuit, and $\phi$ is an angle of lag.

\tb
\DPPageSep{254.png}{242}%


\Example{4.}
\begin{DPgather*}
\lintertext{\indent Suppose that}
M\, dx + N\, dy = 0.
\end{DPgather*}

We could integrate this expression directly, if $M$
were a function of~$x$ only, and $N$~a function of~$y$
only; but, if both $M$~and~$N$ are functions that depend
on both $x$~and~$y$, how are we to integrate it? Is it
itself an exact differential? That is: have $M$~and~$N$
each been formed by partial differentiation from some
common function~$U$, or not? If they have, then
\[\left\{
  \begin{aligned}
 \frac{\partial U}{\partial x} = M, \\
 \frac{\partial U}{\partial y} = N.
  \end{aligned}
\right.
\]
And if such a common function exists, then
\[
\frac{\partial U}{\partial x}\, dx + \frac{\partial U}{\partial y}\, dy
\]
is an exact differential (compare \Pageref{partialdiff}).

%[** TN: Retaining original book's use of d instead of \partial below]
Now the test of the matter is this. If the expression
is an exact differential, it must be true that
\begin{DPalign*}
        \frac{dM}{dy} &= \frac{dN}{dx}; \\
\lintertext{for then}
\frac{d(dU)}{dx\, dy} &= \frac{d(dU)}{dy\, dx},\\
\lintertext{which is necessarily true.}
\end{DPalign*}

Take as an illustration the equation
\[
(1 + 3 xy)\, dx + x^2\, dy = 0.
\]
\DPPageSep{255.png}{243}%

Is this an exact differential or not? Apply the
test.
\[\left\{
  \begin{aligned}
 \frac{d(1 + 3xy)}{dy}=3x, \\
  \PadTo{\dfrac{d(1 + 3xy)}{dy}}{\dfrac{d(x^2)}{dx}} = 2x,
  \end{aligned}
\right.
\]
which do not agree. Therefore, it is not an exact
differential, and the two functions $1+3xy$ and~$x^2$
have not come from a common original function.

It is possible in such cases to discover, however, \emph{an
integrating factor}, that is to say, a factor such that
if both are multiplied by this factor, the expression
will become an exact differential. There is no one
rule for discovering such an integrating factor; but
experience will usually suggest one. In the present
instance $2x$ will act as such. Multiplying by~$2x$, we
get
\[
(2x + 6x^2y)\, dx + 2x^3\, dy = 0.
\]

Now apply the test to this.
\[
\left\{
  \begin{aligned}
 \frac{d(2x + 6x^2y)}{dy}=6x^2, \\
 \PadTo{\dfrac{d(2x + 6x^2y)}{dy}}{\dfrac{d(2x^3)}{dx}} = 6x^2,
  \end{aligned}
\right.
\]
which agrees. Hence this is an exact differential, and
may be integrated. Now, if $w = 2x^3y$,
\begin{DPgather*}
dw=6x^2y\, dx + 2x^3\, dy. \\
\lintertext{\indent Hence} \int 6x^2y\, dx + \int 2x^3\, dy=w=2x^3y; \\
\lintertext{so that we get}  U = x^2 + 2x^3y + C.
\end{DPgather*}
\DPPageSep{256.png}{244}%

\tb %[** TN: No thought break in orignal]
\Example{5.} Let $\dfrac{d^2 y}{dt^2} + n^2 y = 0$.

In this case we have a differential equation of the
second degree, in which $y$ appears in the form of
a second differential coefficient, as well as in person.

Transposing, we have $\dfrac{d^2 y}{dt^2} = - n^2 y$.

It appears from this that we have to do with a
function such that its second differential coefficient is
proportional to itself, but with reversed sign. In
Chapter~XV. we found that there was such a function---namely,
the \emph{sine} (or the \emph{cosine} also) which
possessed this property. So, without further ado,
we may infer that the solution will be of the form
$y = A \sin (pt + q)$. However, let us go to work.

Multiply both sides of the original equation by $2\dfrac{dy}{dt}$
and integrate, giving us $2\dfrac{d^2 y}{dt^2}\, \dfrac{dy}{dt} + 2x^2 y \dfrac{dy}{dt} = 0$, and, as
\[
2 \frac{d^2y}{dt^2}\, \frac{dy}{dt}
  = \frac{d \left(\dfrac{dy}{dt}\right)^2}{dt},\quad
\left(\frac{dy}{dt}\right)^2 + n^2 (y^2-C^2) = 0,
\]
$C$ being a constant. Then, taking the square roots,
\[
\frac{dy}{dt} = -n \sqrt{ y^2 - C^2}\quad \text{and}\quad
\frac{dy}{\sqrt{C^2 - y^2}} = n · dt.
\]

But it can be shown that (see \Pageref{intex3})
\[
\frac{1}{\sqrt{C^2 - y^2}} = \frac{d (\arcsin \dfrac{y}{C})}{dy};
\]
whence, passing from angles to sines,
\[
\arcsin \frac{y}{C} = nt + C_1\quad \text{and}\quad y = C \sin (nt + C_1),
\]
\DPPageSep{257.png}{245}%
where $C_1$ is a constant angle that comes in by integration.

Or, preferably, this may be written
\[
y = A \sin nt + B \cos nt, \text{ which is the solution.}
\]

\tb

\Example{6.} \hfil $\dfrac{d^2 y}{dt^2} - n^2 y = 0$.\phantom{\indent\textit{Example 6.}}

Here we have obviously to deal with a function~$y$
which is such that its second differential coefficient is
proportional to itself. The only function we know
that has this property is the exponential function
(see \Pageref{unchanged}), and we may be certain therefore that the
solution of the equation will be of that form.

Proceeding as before, by multiplying through by
$2 \dfrac{dy}{dx}$, and integrating, we get $2\dfrac{d^2 y}{dx^2}\, \dfrac{dy}{dx} - 2x^2 y \dfrac{dy}{dx}=0$,
\begin{DPgather*}
\lintertext{and, as}
2\frac{d^2 y}{dx^2}\, \frac{dy}{dx}
  = \frac{d \left(\dfrac{dy}{dx}\right)^2}{dx},\quad
\left(\frac{dy}{dx}\right)^2 - n^2 (y^2 + c^2) = 0, \\
\frac{dy}{dx} - n \sqrt{y^2 + c^2} = 0,
\end{DPgather*}
where $c$ is a constant, and $\dfrac{dy}{\sqrt{y^2 + c^2}} = n\, dx$.

Now, if\quad $w = \log_\epsilon ( y+ \sqrt{y^2+ c^2}) = \log_\epsilon u$,
\begin{DPgather*}
\frac{dw}{du} = \frac{1}{u},\quad \frac{du}{dy} = 1 + \frac{y}{\sqrt{y^2 + c^2}} = \frac{y + \sqrt{ y^2 + c^2}}{\sqrt{y^2 + c^2}} \\
\lintertext{and} \frac{dw}{dy} = \frac{1}{\sqrt{ y^2 + c^2}}.
\end{DPgather*}

Hence, integrating, this gives us
\begin{DPgather*}
\log_\epsilon (y + \sqrt{y^2 + c^2} ) = nx + \log_\epsilon C, \\
y + \sqrt{y^2 + c^2} = C \epsilon^{nx}.
\tag*{(1)} \displaybreak[1] \\
\lintertext{\indent Now} \qquad ( y + \sqrt{y^2 + c^2} ) × ( -y + \sqrt{y^2 + c^2} ) = c^2 ;    \\
\lintertext{whence} \qquad  -y + \sqrt{y^2 + c^2} = \dfrac{c^2}{C} \epsilon^{-nx}.
\tag*{(2)}
\end{DPgather*}
\DPPageSep{258.png}{246}%

Subtracting (2) from~(1) and dividing by~$2$, we
then have
\[
y = \frac{1}{2} C \epsilon^{nx} - \frac{1}{2}\, \frac{c^2}{C} \epsilon^{-nx},
\]
which is more conveniently written
\[
y = A \epsilon^{nx} + B \epsilon^{-nx}.
\]
Or, the solution, which at first sight does not look
as if it had anything to do with the original equation,
shows that $y$~consists of two terms, one of which
grows logarithmically as $x$~increases, and of a second
term which dies away as $x$~increases.

\tb


\Example{7.}
\begin{DPalign*}
\lintertext{\indent Let}
b \frac{d^2y}{dt^2} + a \frac{dy}{dt} + gy &= 0.
\end{DPalign*}

Examination of this expression will show that, if
$b = 0$, it has the form of Example~1, the solution of
which was a negative exponential. On the other
hand, if $a = 0$, its form becomes the same as that of
Example~6, the solution of which is the sum of a
positive and a negative exponential. It is therefore
not very surprising to find that the solution of the
present example is
\begin{DPalign*}
y &= (\epsilon^{-mt})(A \epsilon^{nt} + B \epsilon^{-nt}), \\
\lintertext{where}
m &= \frac{a}{2b}\quad \text{and}\quad
n  = \sqrt{\frac{a^2}{4b^2}} - \frac{g}{b}.
\end{DPalign*}

The steps by which this solution is reached are not
given here; they may be found in advanced treatises.

\tb
\DPPageSep{259.png}{247}%


\Example{8.}
\[
\frac{d^2y}{dt^2} = a^2 \frac{d^2y}{dx^2}.
\]

It was seen (\Pageref{Example4}) that this equation was derived
from the original
\[
y = F(x+at) + f(x-at),
\]
where $F$ and~$f$ were any arbitrary functions of~$t$.

Another way of dealing with it is to transform it
by a change of variables into
\[
\frac{d^2y}{du · dv} = 0,
\]
where $u = x + at$, and $v = x - at$, leading to the same
general solution. If we consider a case in which
$F$~vanishes, then we have simply
\[
y = f(x-at);
\]
and this merely states that, at the time $t = 0$, $y$~is a
particular function of~$x$, and may be looked upon as
denoting that the curve of the relation of~$y$ to~$x$ has
a particular shape. Then any change in the value
of~$t$ is equivalent simply to an alteration in the origin
from which $x$~is reckoned. That is to say, it indicates
that, the form of the function being conserved, it is
propagated along the $x$~direction with a uniform
velocity~$a$; so that whatever the value of the
ordinate~$y$ at any particular time~$t_0$ at any particular
point~$x_0$, the same value of~$y$ will appear at the subsequent
time~$t_1$ at a point further along, the abscissa
of which is $x_0 + a(t_1 - t_0)$. In this case the simplified
\DPPageSep{260.png}{248}%
equation represents the propagation of a wave (of any
form) at a uniform speed along the $x$~direction.

If the differential equation had been written
\[
m \frac{d^2y}{dt^2} = k\, \frac{d^2y}{dx^2},
\]
the solution would have been the same, but the
velocity of propagation would have had the value
\[
a = \sqrt{\frac{k}{m}}.
\]

\tb

You have now been personally conducted over the
frontiers into the enchanted land. And in order that
you may have a handy reference to the principal
results, the author, in bidding you farewell, begs to
present you with a passport in the shape of a convenient
collection of standard forms (see \Pagerange{stdforms1}{stdforms2}).
In the middle column are set down a number of the
functions which most commonly occur. The results
of differentiating them are set down on the left; the
results of integrating them are set down on the right.
May you find them useful!
\DPPageSep{261.png}{249}%
\backmatter
\phantomsection
\pdfbookmark[-1]{Back Matter}{Back Matter}


\ChapterStar{Epilogue and Apologue}

\First{It} may be confidently assumed that when this
tractate ''Calculus made Easy'' falls into the hands
of the professional mathematicians, they will (if not
too lazy) rise up as one man, and damn it as being a
thoroughly bad book. Of that there can be, from
their point of view, no possible manner of doubt
whatever. It commits several most grievous and
deplorable errors.

First, it shows how ridiculously easy most of the
operations of the calculus really are.

Secondly, it gives away so many trade secrets. By
showing you that \emph{what one fool can do, other fools
can do also}, it lets you see that these mathematical
swells, who pride themselves on having mastered such
an awfully difficult subject as the calculus, have no
such great reason to be puffed up. They like you to
think how terribly difficult it is, and don't want that
superstition to be rudely dissipated.

Thirdly, among the dreadful things they will say
about ''So Easy'' is this: that there is an utter failure
on the part of the author to demonstrate with rigid
\DPPageSep{262.png}{250}%
and satisfactory completeness the validity of sundry
methods which he has presented in simple fashion,
and has even \emph{dared to use} in solving problems! But
why should he not? You don't forbid the use of
a watch to every person who does not know how to
make one? You don't object to the musician playing
on a violin that he has not himself constructed. You
don't teach the rules of syntax to children until they
have already become fluent in the \emph{use} of speech. It
would be equally absurd to require general rigid
demonstrations to be expounded to beginners in the
calculus.

One other thing will the professed mathematicians
say about this thoroughly bad and vicious book: that
the reason why it is \emph{so easy} is because the author has
left out all the things that are really difficult. And
the ghastly fact about this accusation is that---\emph{it
is true!} That is, indeed, why the book has been
written---written for the legion of innocents who have
hitherto been deterred from acquiring the elements of
the calculus by the stupid way in which its teaching
is almost always presented. Any subject can be made
repulsive by presenting it bristling with difficulties.
The aim of this book is to enable beginners to learn
its language, to acquire familiarity with its endearing
simplicities, and to grasp its powerful methods of
solving problems, without being compelled to toil
through the intricate out-of-the-way (and mostly
irrelevant) mathematical gymnastics so dear to the
unpractical mathematician.
\DPPageSep{263.png}{251}%

There are amongst young engineers a number on
whose ears the adage that \emph{what one fool can do,
another can}, may fall with a familiar sound. They
are earnestly requested not to give the author
away, nor to tell the mathematicians what a fool
he really is.
\DPPageSep{264.png}{252}%


\AltChapter{Table of Standard Forms}

%[** TN: Manually split onto three pages]
\vfil
\begin{center}
\Pagelabel{stdforms1}
\begin{tabular}{|c|c|c|}
\hline
\multicolumn{1}{|c}{\DStrut$\dfrac{dy}{dx}$}
  & \multicolumn{1}{c}{$\longleftarrow\quad y\quad\longrightarrow$}
  & $\ds\int y\, dx$ \\
\hline
\ColumnHead{Algebraic.} \\
\DStrut$1$ & $x$     & $\frac{1}{2} x^2 + C$ \\
\DStrut$0$ & $a$     & $ax + C $             \\
\DStrut$1$ & $x ± a$ & $\frac{1}{2} x^2 ± ax + C$ \\
\DStrut$a$ & $ax $   & $\frac{1}{2} ax^2 + C $\\
\DStrut$2x$ & $x^2$  & $\frac{1}{3} x^3 + C $ \\
\DStrut$nx^{n-1}$ & $x^n$ &$ \dfrac{1}{n+1} x^{n+1} + C $\\
\DStrut$-x^{-2} $ & $x^{-1}$ & $\log_\epsilon x + C$ \\
\DStrut$\dfrac{du}{dx} ± \dfrac{dv}{dx} ± \dfrac{dw}{dx}$
   & $u ± v ± w$     & $\int u\, dx ± \int v\, dx ± \int w\, dx$ \\
\DStrut$u\, \dfrac{dv}{dx} + v\, \dfrac{du}{dx}$
   & $uv$  & No general form known \\
\DStrut$\dfrac{v\, \dfrac{du}{dx} - u\, \dfrac{dv}{dx}}{v^2}$
   & $\dfrac{u}{v}$ & No general form known \\
\DStrut$\dfrac{du}{dx}$ & $u$ & $ux - \int x\, du + C$ \\
\hline
\end{tabular}
\vfil\newpage
\null\vfil
%
\begin{tabular}{|c|c|c|}
\hline
\multicolumn{1}{|c}{\DStrut$\dfrac{dy}{dx}$}
  & \multicolumn{1}{c}{$\longleftarrow\quad y\quad\longrightarrow$}
  & $\ds\int y\, dx$ \\
\hline
\ColumnHead{Exponential and Logarithmic.} \\
$\epsilon^x$ & $\epsilon^x$ & $\epsilon^x + C$ \\
$x^{-1}$     & $\log_\epsilon x$ & $ x(\log_\epsilon x - 1) + C$ \\
$0.4343 × x^{-1}$ & $\log_{10} x$ & $0.4343x (\log_\epsilon x - 1) + C$ \\
\DStrut$a^x \log_\epsilon a$ & $a^x$ & $\dfrac{a^x}{\log_\epsilon a} + C$ \\
\hline
%
\ColumnHead{Trigonometrical.} \\
$\cos x$  & $\sin x$ & $-\cos x + C $ \\
$-\sin x$ & $\cos x$ & $\sin x + C $ \\
$\sec^2 x$& $\tan x$ & $-\log_\epsilon \cos x + C $ \\
\hline
%
\ColumnHead{Circular (Inverse).} \\
$\dfrac{1}{\sqrt{(1-x^2)}}$ & $\arcsin x$ & $x · \arcsin x + \sqrt{1 - x^2} + C$ \\
\DStrut$-\dfrac{1}{\sqrt{(1-x^2)}}$ & $\arccos x$ & $x · \arccos x - \sqrt{1 - x^2} + C$ \\
$\dfrac{1}{1+x^2}$ & $\arctan x$ & $x · \arctan x - \frac{1}{2} \log_\epsilon (1 + x^2) + C$ \\
\hline
%\DPPageSep{265.png}{253}%
\ColumnHead{Hyperbolic.} \\
$\cosh x   $ & $\sinh x$ & $\cosh x + C$ \\
$\sinh x   $ & $\cosh x$ & $\sinh x + C$ \\
$\sech^2 x $ & $\tanh x$ & $\log_\epsilon \cosh x + C $ \\
\hline
\end{tabular}
\vfil\newpage
%
%[** TN: Manual coaxing to get this portion to fit page horizontally/vertically]
\small\Pagelabel{stdforms2}%
\makebox[0pt][c]{%
\begin{tabular}{|c|c|c|}
\hline
\multicolumn{1}{|c}{\DStrut$\dfrac{dy}{dx}$}
  & \multicolumn{1}{c}{$\longleftarrow\quad y\quad\longrightarrow$}
  & $\ds\int y\, dx$ \\
\hline
\ColumnHead{Miscellaneous.} \\
\DStrut$-\dfrac{1}{(x + a)^2}$ & $\dfrac{1}{x + a}$ & $ \log_\epsilon (x+a) + C $ \\
$-\dfrac{x}{(a^2 + x^2)^{\efrac{3}{2}}}$
  & $\dfrac{1}{\sqrt{a^2 + x^2}}$
  & $\log_\epsilon (x + \sqrt{a^2 + x^2}) + C $ \\
\DStrut$\mp \dfrac{b}{(a ± bx)^2}$
  & $\dfrac{1}{a ± bx}$
  & $± \dfrac{1}{b} \log_\epsilon (a ± bx) + C $ \\
$-\dfrac{3a^2x}{(a^2 + x^2)^{\efrac{5}{2}}}$
  & $\dfrac{a^2}{(a^2 + x^2)^{\efrac{3}{2}}}$
  & $\dfrac{x}{\sqrt{a^2 + x^2}} + C $ \\
\DStrut$ a · \cos ax$ & $\sin ax$ & $-\dfrac{1}{a} \cos ax + C $ \\
$-a · \sin ax$ & $\cos ax$ & $ \dfrac{1}{a} \sin ax + C $ \\
\DStrut$ a · \sec^2ax$& $\tan ax$ & $-\dfrac{1}{a} \log_\epsilon \cos ax + C $ \\
$ \sin 2x$ & $\sin^2 x$ & $\dfrac{x}{2} - \dfrac{\sin 2x}{4} + C $ \\
\DStrut$-\sin 2x$ & $\cos^2 x$ & $\dfrac{x}{2} + \dfrac{\sin 2x}{4} + C $ \\
$n · \sin^{n-1} x · \cos x$
  & $ \sin^n x$
  & \footnotesize$\DStrut\ds-\frac{\cos x}{n} \sin^{n-1} x
     + \frac{n-1}{n} \int \sin^{n-2} x\, dx + C$ \\
$-\dfrac{\cos x}{\sin^2 x}$
  & $\dfrac{1}{\sin x}$
  & $\log_\epsilon \tan \dfrac{x}{2} + C$ \\
\DStrut$-\dfrac{\sin 2x}{\sin^4 x}$
  & $\dfrac{1}{\sin^2 x}$
  & $ -\cotan x + C$ \\
$\dfrac{\sin^2 x - \cos^2 x}{\sin^2 x · \cos^2 x}$
  & $ \dfrac{1}{\sin x · \cos x}$
  & $ \log_\epsilon \tan x + C $ \\
\DStrut\parbox{0.2\linewidth}{\raggedright\scriptsize
  $n · \sin mx · \cos nx + m · \sin nx · \cos mx $}
  & $\sin mx · \sin nx$
  & $\frac{1}{2} \cos(m - n)x - \frac{1}{2} \cos(m + n)x + C$ \\
$ 2a·\sin 2ax$ & $\sin^2 ax$ & $\dfrac{x}{2} - \dfrac{\sin 2ax}{4a} + C $ \\
\DStrut$-2a·\sin 2ax$ & $\cos^2 ax$ & $\dfrac{x}{2} + \dfrac{\sin 2ax}{4a} + C $ \\
\hline
\end{tabular}}%
\end{center}
\DPPageSep{266.png}{254}%


\AltChapter[Answers to Exercises]{Answers}

\begin{Answers}[3]{I}{(\Pageref{Ex:I}.)}{}
\Item{(1)} $\dfrac{dy}{dx} = 13x^{12}$.
\Item{(2)} $\dfrac{dy}{dx} = - \dfrac{3}{2} x^{-\efrac{5}{2}}$.
\Item{(3)} $\dfrac{dy}{dx} = 2ax^{(2a-1)}$.

\ResetCols{3}
\Item{(4)} $\dfrac{du}{dt} = 2.4t^{1.4}$.
\Item{(5)} $\dfrac{dz}{du} = \dfrac{1}{3} u^{-\efrac{2}{3}}$.
\Item{(6)} $\dfrac{dy}{dx} = -\dfrac{5}{3}x^{\DPtypo{-\efrac{8}{5}}{-\efrac{8}{3}}}$.

\ResetCols{2}
\Item{(7)} $\dfrac{du}{dx} = -\dfrac{8}{5}x^{-\efrac{13}{5}}$.
\Item{(8)} $\dfrac{dy}{dx} = 2ax^{a-1}$.

\ResetCols{2}
\Item{(9)} $\dfrac{dy}{dx} = \dfrac{3}{q} x^{\efrac{3-q}{q}}$.
\Item{(10)} $\dfrac{dy}{dx} = -\dfrac{m}{n} x^{-\efrac{m+n}{n}}$.
\end{Answers}


\begin{Answers}[3]{II}{(\Pageref{Ex:II}.)}{}

\Item{(1)} $\dfrac{dy}{dx} = 3ax^2$.
\Item{(2)} $\dfrac{dy}{dx} = 13 × \frac{3}{2}x^{\efrac{1}{2}}$.
\Item{(3)} $\dfrac{dy}{dx} = 6x^{-\efrac{1}{2}}$.

\ResetCols{3}
\Item{(4)} $\dfrac{dy}{dx} = \dfrac{1}{2}c^{\efrac{1}{2}} x^{-\efrac{1}{2}}$.
\Item{(5)} $\dfrac{du}{dz} = \dfrac{an}{c} z^{n-1}$.
\Item{(6)} $\dfrac{dy}{dt} = 2.36t$.

\ResetCols{1}
\Item{(7)} $\dfrac{dl_t}{dt} = 0.000012×l_0$.

\Item{(8)} $\dfrac{dC}{dV} = abV^{b-1}$, $0.98$, $3.00$ and $7.47$~candle power per volt respectively.

\Item{(9)} $\begin{aligned}[t]
  \dfrac{dn}{dD} &= -\dfrac{1}{LD^2} \sqrt{\dfrac{gT}{\pi \sigma}}, &
  \dfrac{dn}{dL} &= -\dfrac{1}{DL^2} \sqrt{\dfrac{gT}{\pi \sigma}}, \\
%
  \dfrac{dn}{d \sigma}
  &= -\dfrac{1}{2DL} \sqrt{\dfrac{gT}{\pi \sigma^3}}, &
  \dfrac{dn}{dT} &=  \dfrac{1}{2DL} \sqrt{\dfrac{g}{\pi \sigma T}}.
\end{aligned}$
\DPPageSep{267.png}{255}%

\Item{(10)} $\dfrac{\text{Rate of change of~$P$ when $t$~varies}}
            {\text{Rate of change of~$P$ when $D$~varies}}
  = - \dfrac{D}{t}$.

\Item{(11)} $2\pi$, $2\pi r$, $\pi l$, $\frac{2}{3}\pi rh$, $8\pi r$, $4\pi r^2$. \hfil
(12)~$\dfrac{dD}{dT} = \dfrac{0.000012l_t}{\pi}$.
\end{Answers}


\begin{Answers}{III}{(\Pageref{Ex:III}.)}{}

\Item{(1)} (\textit{a}) $1 + x + \dfrac{x^2}{2} + \dfrac{x^3}{6} + \dfrac{x^4}{24} + \ldots$ \qquad
    (\textit{b}) $2ax + b$. \qquad (\textit{c}) $2x + 2a$.

    (\textit{d}) $3x^2 + 6ax + 3a^2$.

\ResetCols{2}
\Item{(2)} $\dfrac{dw}{dt} = a - bt$.
\Item{(3)} $\dfrac{dy}{dx} = 2x$.

\ResetCols{1}
\Item{(4)} $14110x^4 - 65404x^3 - 2244x^2 + 8192x + 1379$.

\ResetCols{2}
\Item{(5)} $\dfrac{dx}{dy} = 2y + 8$.
\Item{(6)} $185.9022654x^2 + 154.36334$.

\ResetCols{2}
\Item{(7)} $\dfrac{-5}{(3x + 2)^2}$.
\Item{(8)} $\dfrac{6x^4 + 6x^3 + 9x^2}{(1 + x + 2x^2)^2}$.

\ResetCols{2}
\Item{(9)} $\dfrac{ad - bc}{(cx + d)^2}$.
\Item{(10)} $\dfrac{anx^{-n-1} + bnx^{n-1} + 2nx^{-1}}{(x^{-n} + b)^2}$.

\ResetCols{1}
\Item{(11)} $b + 2ct$.

\Item{(12)} $R_0(a + 2bt)$,\quad $R_0 \left(a + \dfrac{b}{2\sqrt{t}}\right)$,\quad
  $-\dfrac{R_0(a + 2bt)}{(1 + at + bt^2)^2}$\quad or\quad $\dfrac{R^2 (a + 2bt)}{R_0}$.

\Item{(13)} $1.4340(0.000014t - \DPtypo{0.000828}{0.001024})$,\quad $-0.00117$,\quad $-0.00107$,\quad $-0.00097$.

\Item{(14)} $\dfrac{dE}{dl} = b + \dfrac{k}{i}$,\quad $\dfrac{dE}{di} = -\dfrac{c + kl}{i^2}$.
\end{Answers}


\begin{Answers}[2]{IV}{(\Pageref{Ex:IV}.)}{}

\Item{(1)} $17 + 24x$;\quad $24$.
\Item{(2)} $\dfrac{x^2 + 2ax - a}{(x + a)^2}$;\quad $\dfrac{2a(a + 1)}{(x + a)^3}$.

\ResetCols{1}
\Item{(3)} $1 + x + \dfrac{x^2}{1 × 2} + \dfrac{x^3}{1 × 2 × 3}$;\quad $1 + x + \dfrac{x^2}{1 × 2}$.

% [** TN: Freely reformatting subitems]
\Item{(4)} (\textit{Exercises III.}):
\begin{itemize}
\item[(1)] (\textit{a}) $\dfrac{d^2 y}{dx^2} = \dfrac{d^3 y}{dx^3} = 1 + x + \frac{1}{2}x^2 + \frac{1}{6} x^3 + \ldots$. \\
  (\textit{b}) $2a$, $0$.\hfil
  (\textit{c}) $2$, $0$.\hfil
  (\textit{d}) $6x + 6a$, $6$.

\DPPageSep{268.png}{256}%
\item[(2)] $-b$, $0$.\hfil (3) $2$, $0$.\hfil

\item[(4)] $\begin{gathered}[t]
    56440x^3 - 196212x^2 - 4488x + 8192. \\
    169320x^2 - 392424x - 4488.
    \end{gathered}$

\item[(5)] $2$, $0$. \hfil (6) $371.80453x$, $371.80453$. \hfil

\item[(7)] $\dfrac{30}{(3x + 2)^3}$,\quad $-\dfrac{270}{(3x + 2)^4}$.
\end{itemize}

\paragraph{\normalfont(\textit{Examples}, \Pageref{examples3}):}
\begin{itemize}
\item[(1)] $\dfrac{6a}{b^2} x$,\quad $\dfrac{6a}{b^2}$.\hfil
(2) $\dfrac{3a \sqrt{b}} {2 \sqrt{x}} - \dfrac{6b \sqrt[3]{a}}{x^3}$,\quad
$\dfrac{18b \sqrt[3]{a}}{x^4} - \dfrac{3a \sqrt{b}}{4 \sqrt{x^3}}$\DPtypo{}{.}

\Item{(3)}
$\dfrac{2}{\sqrt[3]{\theta^8}} - \dfrac{1.056}{\sqrt[5]{\theta^{11}}}$,\quad
$\dfrac{2.3232}{\sqrt[5]{\theta^{16}}} - \dfrac{16}{3 \sqrt[3]{\theta^{11}}}$.

\Item{(4)} $\begin{gathered}[t]
  810t^4 - 648t^3 + 479.52t^2 - 139.968t + 26.64. \\
  3240t^3 - 1944t^2 + 959.04t - 139.968.
  \end{gathered}$

\Item{(5)}  $12x + 2$, $12$.\hfil
(6) $6x^2 - 9x$,\quad $12x - 9$.\hfil

\Item{(7)}
$\begin{aligned}[t]
&\dfrac{3}{4} \left(\dfrac{1}{\sqrt{\theta}} + \dfrac{1}{\sqrt{\theta^5}}\right)
+\dfrac{1}{4} \left(\dfrac{15}{\sqrt{\theta^7}} - \dfrac{1}{\sqrt{\theta^3}}\right). \\
&\dfrac{3}{8} \left(\dfrac{1}{\sqrt{\theta^5}} - \dfrac{1}{\sqrt{\theta^3}}\right)
-\dfrac{15}{8}\left(\dfrac{7}{\sqrt{\theta^9}} + \dfrac{1}{\sqrt{\theta^7}}\right).
\end{aligned}$
\end{itemize}
\end{Answers}


\begin{Answers}{V}{(\Pageref{Ex:V}.)}{}

\Item{(2)}  64; 147.2; and 0.32 feet per second.

\ResetCols{2}
\Item{(3)}  $x = a - gt$; $\ddot{x} = -g$.

\Item{(4)}  $45.1$ feet per second.

\ResetCols{1}
\Item{(5)}  $12.4$ feet per second per second.\quad Yes.

\Item{(6)} Angular velocity ${} = 11.2$ radians per second; angular
  acceleration ${}= 9.6$ radians per second per second.

\Item{(7)}  $v = 20.4t^2 - 10.8$.\quad $a = 40.8t$.\quad $172.8$~in./sec., $122.4~\text{in./sec}^2$.

\Item{(8)}  $v = \dfrac{1}{30 \sqrt[3]{(t - 125)^2}}$,\quad $a = - \dfrac{1}{45 \sqrt[3]{(t - 125)^5}}$.

\Item{(9)}  $v = 0.8 - \dfrac{8t}{(4 + t^2)^2}$,\quad $a = \dfrac{24t^2 - 32}{(4 + t^2)^3}$,\quad $0.7926$ and $0.00211$.

\Item{(10)}  $n = 2$, $n = 11$.
\end{Answers}
\DPPageSep{269.png}{257}%


\begin{Answers}[3]{VI}{(\Pageref{Ex:VI}.)}{}

\Item{(1)}  $\dfrac{x}{\sqrt{ x^2 + 1}}$.
\Item{(2)}  $\dfrac{x}{\sqrt{ x^2 + a^2}}$.
\Item{(3)}  $- \dfrac{1}{2 \sqrt{(a + x)^3}}$.

\ResetCols{2}
\Item{(4)}  $\dfrac{ax}{\sqrt{(a - x^2)^3}}$.
\Item{(5)}  $\dfrac{2a^2 - x^2}{x^3 \sqrt{ x^2 - a^2}}$.

\ResetCols{2}
\Item{(6)}  $ \dfrac{\frac{3}{2} x^2 \left[ \frac{8}{9} x \left( x^3 + a \right) - \left( x^4 + a \right) \right]}{(x^4 + a)^{\efrac{2}{3}} (x^3 + a)^{\efrac{3}{2}}}$
\Item{(7)}  $\dfrac{2a \left(x - a \right)}{(x + a)^3}$.

\ResetCols{2}
\Item{(8)}  $\frac{5}{2} y^3$.
\Item{(9)}  $\dfrac{1}{(1 - \theta) \sqrt{1 - \theta^2}}$.
\end{Answers}


\begin{Answers}{VII}{(\Pageref{Ex:VII}.)}{}

\Item{(1)}  $\dfrac{dw}{dx} = \dfrac{3x^2 \left( 3 + 3x^3 \right)} {27 \left(\frac{1}{2} x^3 + \frac{1}{4} x^6 \right)^3}$.

\Item{(2)}  $\dfrac{dv}{dx} = - \dfrac{12x}{\sqrt{1 + \sqrt{2} + 3x^2} \left(\sqrt{3} + 4 \sqrt{1 + \sqrt{2} + 3x^2}\right)^2}$.

\Item{(3)}  $\dfrac{du}{dx} = - \dfrac{x^2 \left(\sqrt{3} + x^3 \right)} {\sqrt{ \left[ 1 + \left( 1 + \dfrac{x^3}{\sqrt{3}} \right) ^2 \right]^3}} $
\end{Answers}


\begin{Answers}{VIII}{(\Pageref{Ex:VIII}.)}{}

\Item{(2)}  $1.44$.

\Item{(4)}  $\dfrac{dy}{dx} = 3x^2 + 3$; and the numerical values are:
     $3$,~$3 \frac{3}{4}$, $6$,~and~$15$.

\Item{(5)}  $ ± \sqrt{2}$.

\Item{(6)}  $ \dfrac{dy}{dx} = - \dfrac{4}{9} \dfrac{x}{y}$. Slope is zero where $x = 0$; and is $\mp \dfrac{1}{3 \sqrt{2}}$ where $x = 1$.

\Item{(7)}  $m = 4$, $n = -3$.

\Item{(8)}  Intersections at $x = 1$, $x = -3$. Angles $153°\;26'$, $2°\;28'$.

\Item{(9)}  Intersection at $x = 3.57$, $y = 3.50$. Angle $16°\;16'$.

\Item{(10)}  $x = \frac{1}{3}$, $y = 2 \frac{1}{3}$, $b = -\frac{5}{3}$.
\end{Answers}
\DPPageSep{270.png}{258}%


\begin{Answers}{IX}{(\Pageref{Ex:IX}.)}{}

\Item{(1)}  Min.: $x = 0$, $y = 0$; max.: $x = -2$, $y = -4$.

\ResetCols{2}
\Item{(2)}  $x = a$.

\Item{(4)}  $25 \sqrt{3}$ square inches.

\ResetCols{1}
\Item{(5)}  $\dfrac{dy}{dx} = - \dfrac{10}{x^2} + \dfrac{10}{(8 - x)^2}$; $x = 4$; $y = 5$.

\Item{(6)}  Max.\ for $x = -1$; min.\ for $x = 1$.

\Item{(7)}  Join the middle points of the four sides.

\Item{(8)}  $r = \frac{2}{3} R$, $r = \dfrac{R}{2}$, no max.

\Item{(9)}  $r = R \sqrt{\dfrac{2}{3}}$, $r = \dfrac{R}{\sqrt{2}}$, $r = 0.8506R$.

\Item{(10)}  At the rate of $\dfrac{8}{r}$ square feet per second.

\ResetCols{2}
\Item{(11)}  $r = \dfrac{R \sqrt{8}}{3}$.
\Item{(12)}  $n = \sqrt{\dfrac{NR}{r}}$.
\end{Answers}


\begin{Answers}{X}{(\Pageref{Ex:X}.)}{}

\Item{(1)}  Max.: $x = -2.19$, $y = 24.19$; min.:, $x = 1.52$, $y = -1.38$.

\Item{(2)}  $\dfrac{dy}{dx} = \dfrac{b}{a} - 2cx$; $\dfrac{d^2 y}{dx^2} = -2c$; $x = \dfrac{b}{2ac}$ (\emph{a maximum}).

\Item{(3)}  (\textit{a}) One maximum and two minima.  \\
(\textit{b}) One maximum. ($x = 0$; other points unreal.)

\ResetCols{2}
\Item{(4)}  Min.: $x = 1.71$, $y = 6.14$.

\Item{(5)}  Max: $x = -.5$, $y = 4$.

\ResetCols{1}
\Item{(6)}  Max.: $x = 1.414$, $y = 1.7675$.  \\
Min.: $x = -1.414$, $y = 1.7675$.

\Item{(7)}  Max.: $x = -3.565$, $y = 2.12$.  \\
Min.: $x = +3.565$, $y = 7.88$.

\ResetCols{2}
\Item{(8)}  $0.4N$, $0.6N$.

\Item{(9)}  $x = \sqrt{\dfrac{a}{c}}$.

\ResetCols{1}
\Item{(10)}  Speed $8.66$ nautical miles per hour. Time taken $115.47$~hours. \\
Minimum cost £$112$.~$12$\textit{s}.
\DPPageSep{271.png}{259}%

\Item{(11)}  Max.\ and min.\ for $x = 7.5$, $y = ±5.414$. (See example
no.~10, \Pageref{Example10}.)

\Item{(12)}  Min.: $x = \frac{1}{2}$, $y= 0.25$; max.: $x = - \frac{1}{3}$, $y= 1.408$.
\end{Answers}

%[** TN: Text block-dependent page break]
\begin{Answers}[3]{XI}{(\Pageref{Ex:XI}.)}{\newpage}

\Item{(1)}  $\dfrac{2}{ x - 3} + \dfrac{1}{ x + 4}$.

\Item{(2)}  $\dfrac{1}{ x - 1} + \dfrac{2}{ x - 2}$.

\Item{(3)}  $\dfrac{2}{ x - 3} + \dfrac{1}{ x + 4}$.

\ResetCols{2}
\Item{(4)}  $\dfrac{5}{ x - 4} - \dfrac{4}{ x - 3}$.

\Item{(5)}  $\dfrac{19}{13(2x + 3)} - \dfrac{22}{13(3x - 2)}$.

\ResetCols{1}
\Item{(6)}  $\dfrac{2}{ x - 2} + \dfrac{4}{ x - 3} - \dfrac{5}{ x - 4}$.

\Item{(7)}  $\dfrac{1}{6(x - 1)} + \dfrac{11}{15(x + 2)} + \dfrac{1}{10(x - 3)}$.

\Item{(8)}  $\dfrac{7}{9(3x + 1)} + \dfrac{71}{63(3x - 2)} - \dfrac{5}{7(2x + 1)}$.

\ResetCols{2}
\Item{(9)}  $\dfrac{1}{3(x - 1)} + \dfrac{2x + 1}{3(x^2 + x + 1)}$.

\Item{(10)} $x + \dfrac{2}{3(x + 1)} + \dfrac{1 - 2x}{3(x^2 - x + 1)}$.

\ResetCols{2}
\Item{(11)} $\dfrac{3}{(x + 1)} + \dfrac{2x + 1}{x^2 + x + 1}$.

\Item{(12)} $\dfrac{1}{ x - 1} - \dfrac{1}{ x - 2} + \dfrac{2}{(x - 2)^2}$.

\ResetCols{1}
\Item{(13)} $\dfrac{1}{4(x - 1)} - \dfrac{1}{4(x + 1)} + \dfrac{1}{2(x + 1)^2}$.

\Item{(14)} $\dfrac{4}{9(x - 1)} - \dfrac{4}{9(x + 2)} - \dfrac{1}{3(x + 2)^2}$.

\Item{(15)} $\dfrac{1}{ x + 2} - \dfrac{x - 1}{ x^2 + x + 1} - \dfrac{1}{(x^2 + x + 1)^2}$.

\Item{(16)} $\dfrac{5}{ x + 4} -\dfrac{32}{(x + 4)^2} + \dfrac{36}{(x + 4)^3}$.

\Item{(17)} $\dfrac{7}{9(3x - 2)^2} + \dfrac{55}{9(3x - 2)^3} + \dfrac{73}{9(3x - 2)^4}$.

\Item{(18)} $\dfrac{1}{6(x - 2)} + \dfrac{1}{3(x - 2)^2} - \dfrac{x}{6(x^2 + 2x + 4)}$.
\end{Answers}
\DPPageSep{272.png}{260}%


\begin{Answers}[3]{XII}{(\Pageref{Ex:XII}.)}{}

\Item{(1)}  $ab(\epsilon^{ax} + \epsilon^{-ax})$.

\Item{(2)}  $2at + \dfrac{2}{t}$.

\Item{(3)}  $\log_\epsilon n$.

\ResetCols{3}
\Item{(5)}  $npv^{n-1}$.

\Item{(6)}  $\dfrac{n}{x}$.

\Item{(7)}  $\dfrac{3\epsilon^{- \frac{x}{x-1}}}{(x - 1)^2}$.

\ResetCols{2}
\Item{(8)}  $6x \epsilon^{-5x} - 5(3x^2 + 1)\epsilon^{-5x}$.

\Item{(9)}  $\dfrac{ax^{a-1}}{x^a + a}$.

\ResetCols{1}
\Item{(10)}  $\left(\dfrac{6x}{3x^2-1} + \dfrac{1}{2\left(\sqrt x + x\right)}\right) \left(3x^2-1\right)\left(\sqrt x + 1\right)$.

\Item{(11)}  $\dfrac{1 - \log_\epsilon \left(x + 3\right)}{\left(x + 3\right)^2}$.

\ResetCols{2}
\Item{(12)}  $a^x\left(ax^{a-1} + x^a \log_\epsilon a\right)$.

\Item{(14)}  Min.: $y = 0.7$ for $x = 0.694$.

\ResetCols{2}
\Item{(15)}  $\dfrac{1 + x}{x}$.

\Item{(16)}  $\dfrac{3}{x} (\log_\epsilon ax)^2$.
\end{Answers}


\begin{Answers}{XIII}{(\Pageref{Ex:XIII}.)}{}

\Item{(1)}  Let $\dfrac{t}{T} = x$ ($\therefore t = 8x$), and use the Table on \Pageref[page]{littletable}.

\Item{(2)}  $T = 34.627$; $159.46$ minutes.

\Item{(3)}  Take $2t = x$; and use the Table on \Pageref[page]{littletable}.

\Item{(5)}  (\textit{a}) $x^x \left(1 + \log_\epsilon x\right)$;\quad
(\textit{b}) $2x(\epsilon^x)^x$;\quad
(\textit{c}) $\epsilon^{x^x} × x^x \left(1 + \log_\epsilon x\right)$.

\ResetCols{2}
\Item{(6)}  $0.14$ second.

\Item{(7)}  (\textit{a}) $1.642$;\quad (\textit{b}) $15.58$.

\ResetCols{1}
\Item{(8)}  $\mu = 0.00037$, $31^m \frac{1}{4}$. %[** Time units]

\Item{(9)}  $i$ is $63.4$\% of~$i_0$, $220$~kilometres.

\Item{(10)}  $0.133$, $0.145$, $0.155$, mean $0.144$; $-10.2$\%, $-0.9$\%, $+77.2$\%.

\ResetCols{2}
\Item{(11)}  Min.\ for $x = \dfrac{1}{\epsilon}$.

\Item{(12)}  Max.\ for $x = \epsilon$.

\ResetCols{1}
\Item{(13)}  Min.\ for $x = \log_\epsilon a$.
\end{Answers}
\DPPageSep{273.png}{261}%


\begin{Answers}{XIV}{(\Pageref{Ex:XIV}.)}{}

\Item{(1)} (i) $\dfrac{dy}{d\theta} = A \cos \left( \theta - \dfrac{\pi}{2} \right)$;

(ii) $\dfrac{dy}{d\theta} = 2\sin\theta \cos\theta = \sin2\theta$ and $\dfrac{dy}{d\theta} = 2\cos2\theta$;

(iii) $\dfrac{dy}{d\theta} = 3\sin^2 \theta \cos\theta$ and $\dfrac{dy}{d\theta} = 3\cos3\theta$.

\ResetCols{2}
\Item{(2)}  $\theta = 45°$ or $\dfrac{\pi}{4}$ radians.

\Item{(3)}  $\dfrac{dy}{dt} = -n \sin 2\pi nt$.

\ResetCols{2}
\Item{(4)}  $a^x \log_\epsilon a \cos a^x$.

\Item{(5)}  $\dfrac{\cos x}{\sin x} = \cotan x$

\ResetCols{1}
\Item{(6)}  $18.2 \cos \left(x + 26° \right)$.

\Item{(7)} {\loosen The slope is $\dfrac{dy}{d\theta} = 100\cos\left(\theta - 15° \right)$, which is a maximum
 when $(\theta -15°) = 0$, or $\theta = 15°$; the value of the slope
 being then ${}= 100$. When $\theta = 75°$ the slope is
 $100\cos(75°  - 15°) = 100\cos 60° = 100 × \frac{1}{2} = 50$.}

\Item{(8)} $\begin{aligned}[t]
  \cos\theta \sin2\theta + 2\cos2\theta \sin\theta
  &= 2\sin\theta\left(\cos^2 \theta + \cos2\theta\right) \\
  &= 2\sin\theta\left(3\cos^2 \theta - 1\right).
  \end{aligned}$

\Item{(9)} $amn\theta^{n-1} \tan^{m-1}\left(\theta^n\right)\sec^2 \theta^n$.

\Item{(10)} $\epsilon^x \left(\sin^2 x + \sin2x\right)$;\quad $\epsilon^x \left(\sin^2 x + 2\sin2x + 2\cos2x\right)$.

\Item{(11)} $\left(i\right) \dfrac{dy}{dx} = \dfrac{ab}{\left(x + b\right)^2}$;\quad
(ii)~$\dfrac{a}{b} \epsilon^{-\efrac{x}{b}}$;\quad
(iii)~$\dfrac{1}{90}° × \dfrac{ab}{\left(b^2 + x^2\right)}$.

\Item{(12)} (i) $\dfrac{dy}{dx} = \sec x \tan x$;

(ii) $\dfrac{dy}{dx} = - \dfrac{1}{\sqrt{ 1 - x^2}}$;

(iii) $\dfrac{dy}{dx} = \dfrac{1}{ 1 + x^2}$;

(iv) $\dfrac{dy}{dx} = \dfrac{1}{x \sqrt{ x^2 - 1}}$;

(v) $\dfrac{dy}{dx} = \dfrac{\sqrt{ 3\sec x} \left(3\sec^2 x - 1\right)}{2}$.

\Item{(13)} $\dfrac{dy}{d\theta} = 4.6\left(2\theta + 3\right)^{1.3} \cos\left(2\theta + 3\right)^{2.3}$.
\DPPageSep{274.png}{262}%

\Item{(14)}  $\dfrac{dy}{d\theta} = 3\theta^2 + 3\cos \left( \theta + 3 \right) - \log_\epsilon 3 \left( \cos\theta × 3^{\sin\theta} + 3\theta \right)$.

\Item{(15)}  $\theta = \cot\theta; \theta = ±0.86$; is max.~for $+\theta$, min.~for $-\theta$.
\end{Answers}


\begin{Answers}{XV}{(\Pageref{Ex:XV}.)}{}

\Item{(1)}  $x^3 - 6x^2 y - 2y^2;\quad \frac{1}{3} - 2x^3 - 4xy$.

\Item{(2)}  $2xyz + y^2 z + z^2 y + 2xy^2 z^2$;\\
     $2xyz + x^2 z + xz^2 + 2x^2 yz^2$;\\
     $2xyz + x^2 y + xy^2 + 2x^2 y^2 z$.

\Item{(3)}  $\dfrac{1}{r} \{ \left(x - a\right) + \left( y - b \right) + \left( z - c \right) \} = \dfrac{ \left( x + y + z \right) - \left( a + b + c \right) }{r}$; $\dfrac{3}{r}$.

\Item{(4)}  $dy = vu^{v-1}\, du + u^v \log_\epsilon u\, dv$.

\Item{(5)}  $dy = 3\sin v u^2\, du + u^3 \cos v\, dv$,\\
     $dy = u \sin x^{u-1} \cos x\, dx + (\sin x)^u \log_\epsilon \sin x du$,\\
     $dy = \dfrac{1}{v}\, \dfrac{1}{u}\, du - \log_\epsilon u \dfrac{1}{v^2}\, dv$.

\Item{(7)}  Minimum for $x = y = -\frac{1}{2}$.

\Item{(8)}  (\textit{a}) Length $2$~feet, width = depth = $1$~foot, vol.\ = $2$~cubic
 feet.

 (\textit{b}) Radius = $\dfrac{2}{\pi}$ feet = $7.46$~in., length = $2$~feet, vol.\ = $2.54$.

\Item{(9)}   All three parts equal; the product is maximum.

\Item{(10)}  Minimum for $x = y = 1$.

\Item{(11)}  Min.: $x = \frac{1}{2}$ and $y = 2$.

\Item{(12)}  Angle at apex $= 90°$; equal sides = length = $\sqrt[3]{2V}$.
\end{Answers}

%[** TN: Text block-dependent page break]
\begin{Answers}[3]{XVI}{(\Pageref{Ex:XVI}.)}{\newpage}

\Item{(1)}  $1\frac{1}{3}$.

\Item{(2)}  $0.6344$.

\Item{(3)}  $0.2624$.

\ResetCols{1}
\Item{(4)}  (\textit{a}) $y = \frac{1}{8} x^2 + C$;\quad
     (\textit{b}) $y = \sin x + C$.

\Item{(5)}  $y = x^2 + 3x + C$.
\end{Answers}
\DPPageSep{275.png}{263}%


\begin{Answers}[3]{XVII}{(\Pageref{Ex:XVII}.)}{}

\Item{(1)} $\dfrac{4\sqrt{a} x^{\efrac{3}{2}}}{3} + C$.

\Item{(2)} $-\dfrac{1}{x^3} + C$.

\Item{(3)} $\dfrac{x^4}{4a} + C$.

\ResetCols{2}
\Item{(4)} $\tfrac{1}{3} x^3 + ax + C$.

\Item{(5)} $-2x^{-\efrac{5}{2}} + C$.

\ResetCols{2}
\Item{(6)} $x^4 + x^3 + x^2 + x + C$.

\Item{(7)} $\dfrac{ax^2}{4} + \dfrac{bx^3}{9} + \dfrac{cx^4}{16} + C$.

\ResetCols{1}
\Item{(8)} {\loosen $\dfrac{x^2 + a}{x + a} = x - a + \dfrac{a^2 + a}{x + a}$ by division. Therefore the answer
is $\dfrac{x^2}{2} - ax + (a^2 + a)\log_\epsilon (x + a) + C$.}
  (See pages \pageref{intex1} and~\pageref{intex2}.)

\ResetCols{2}
\Item{(9)} $\dfrac{x^4}{4} + 3x^3 + \dfrac{27}{2} x^2 + 27x + C$.

\Item{(10)} $\dfrac{x^3}{3} + \dfrac{2 - a}{2} x^2 - 2ax + C$.

\ResetCols{2}
\Item{(11)} $a^2(2x^{\efrac{3}{2}} + \tfrac{9}{4} x^{\efrac{4}{3}}) + C$.

\Item{(12)} $-\tfrac{1}{3} \cos\theta - \tfrac{1}{6} \theta + C$.

\ResetCols{2}
\Item{(13)} $\dfrac{\theta}{2} + \dfrac{\sin 2a\theta}{4a} + C$.

\Item{(14)} $\dfrac{\theta}{2} - \dfrac{\sin 2\theta}{4} + C$.

\ResetCols{2}
\Item{(15)} $\dfrac{\theta}{2} - \dfrac{\sin 2a\theta}{4a} + C$.

\Item{(16)} $\tfrac{1}{3} \epsilon^{3x}$. % [F1: +C?]

\ResetCols{2}
\Item{(17)} $\log(1 + x) + C$.

\Item{(18)} $-\log_\epsilon (1 - x) + C$.
\end{Answers}


\begin{Answers}{XVIII}{(\Pageref{Ex:XVIII}.)}{}

\Item{(1)} $\text{Area} = 60$; $\text{mean ordinate} = 10$.

\Item{(2)} $\text{Area} = \frac{2}{3}$ of $a × 2a \sqrt{a}$.

\Item{(3)} $\text{Area} = 2$; $\text{mean ordinate} = \dfrac{2}{\pi} = 0.637$.

\Item{(4)} $\text{Area} = 1.57$; $\text{mean ordinate} = 0.5$.

\ResetCols{2}
\Item{(5)} $0.572$, $0.0476$.

\Item{(6)} $\text{Volume} = \pi r^2 \dfrac{h}{3}$.

\ResetCols{2}
\Item{(7)} $1.25$.

\Item{(8)} $79.4$.

\ResetCols{1}
\Item{(9)} $\text{Volume} = 4.9348$; $\text{area of surface} = 12.57$ (from $0$ to~$\pi$).

\Item{(10)} $a\log_\epsilon a$,\quad $\dfrac{a}{a - 1} \log_\epsilon a$.

\Item{(12)} $\text{Arithmetical mean} = 9.5$; $\text{quadratic mean} = 10.85$.
\DPPageSep{276.png}{264}%

\Item{(13)} $\text{Quadratic mean} = \dfrac{1}{\sqrt{2}} \sqrt{A_1^2 + A_3^2}$; $\text{arithmetical mean} = 0$.

The first involves a somewhat difficult integral, and may be
stated thus: By definition the quadratic mean will be
\[
\sqrt{\dfrac{1}{2\pi} \int_0^{2\pi} (A_1 \sin x + A_3 \sin 3x)^2\, dx}. %[** TN: Moved period out of radicand]
\]
Now the integration indicated by
\[
\int (A_1^2 \sin^2 x + 2A_1 A_3 \sin x \sin 3x + A_3^2 \sin^2 3x)\, dx
\]
is more readily obtained if for $\sin^2 x$ we write
\[
\dfrac{1 - \cos 2x}{2}.
\]
For $2\sin x \sin 3x$ we write $\cos 2x - \cos 4x$; and, for $\sin^2 3x$,
\[
\dfrac{1 - \cos 6x}{2}.
\]

Making these substitutions, and integrating, we get (see
\Pageref{cosax})
\[
\dfrac{A_1^2}{2} \left( x - \dfrac{\sin 2x}{2} \right)
 + A_1 A_3 \left( \dfrac{\sin 2x}{2} - \dfrac{\sin 4x}{4} \right)
 + \dfrac{A_3^2}{2} \left( x - \dfrac{\sin 6x}{6} \right).
\]

At the lower limit the substitution of $0$ for~$x$ causes all
this to vanish, whilst at the upper limit the substitution
of $2\pi$ for~$x$ gives $A_1^2 \pi + A_3^2 \pi$. And hence the
answer follows.

\Item{(14)} Area is $62.6$~square units. Mean ordinate is $10.42$.

\Item{(16)} $436.3$. (This solid is pear shaped.)
\end{Answers}


\begin{Answers}[2]{XIX}{(\Pageref{Ex:XIX}.)}{}

\Item{(1)} $\dfrac{x\sqrt{a^2 - x^2}}{2} + \dfrac{a^2}{2} \sin^{-1} \dfrac{x}{a} + C$.

\Item{(2)} $\dfrac{x^2}{2}(\log_\epsilon x - \tfrac{1}{2}) + C$.

\ResetCols{2}
\Item{(3)} $\dfrac{x^{a+1}}{a + 1} \left(\log_\epsilon x - \dfrac{1}{a + 1}\right) + C$.

\Item{(4)} $\sin \DPtypo{e}{\epsilon}^x + C$.

\ResetCols{2}
\Item{(5)} $\sin(\log_\epsilon x) + C$.

\Item{(6)} $\DPtypo{e}{\epsilon}^x (x^2 - 2x + 2) + C$.

\ResetCols{2}
\Item{(7)} $\dfrac{1}{a + 1} (\log_\epsilon x)^{a+1} + C$.
\DPPageSep{277.png}{265}%

\Item{(8)} $\log_\epsilon(\log_\epsilon x) + C$.

\ResetCols{1}
\Item{(9)} $2\log_\epsilon(x - 1) + 3\log_\epsilon(x + 2) + C$.

\Item{(10)} $\frac{1}{2} \log_\epsilon(x - 1) + \frac{1}{5} \log_\epsilon(x - 2) + \frac{3}{10} \log_\epsilon(x + 3) + C$.

\ResetCols{2}
\Item{(11)} $\dfrac{b}{2a} \log_\epsilon \dfrac{x - a}{x + a} + C$.

\Item{(12)} $\log_\epsilon \dfrac{x^2 - 1}{x^2 + 1} + C$.

\ResetCols{1}
\Item{(13)} $\frac{1}{4} \log_\epsilon \dfrac{1 + x}{1 - x} + \frac{1}{2} \arctan x + C$.

\Item{(14)} $\dfrac{1}{\sqrt{a}} \log_\epsilon \dfrac{\sqrt{a} - \sqrt{a - bx^2}}{x\sqrt{a}}$.\quad (Let $\dfrac{1}{x} = v$; then, in the result,
let $\sqrt{v^2 - \dfrac{b}{a}} = v - u$.) %[** TN: Large () in the original]

You had better differentiate now the answer and work
back to the given expression as a check.
\end{Answers}

Every earnest student is exhorted to manufacture more
examples for himself at every stage, so as to test his powers.
When integrating he can always test his answer by differentiating
it, to see whether he gets back the expression from
which he started.

There are lots of books which give examples for practice.
It will suffice here to name two: R.~G.~Blaine's \textit{The Calculus
and its Applications}, and F.~M.~Saxelby's \textit{A Course in Practical
Mathematics}.

\vfill
\begin{center}
  \tiny GLASGOW: PRINTED AT THE UNIVERSITY PRESS BY ROBERT MACLEHOSE AND CO. LTD.
\end{center}
\DPPageSep{278.png}{266}%
% [Blank Page]
\DPPageSep{279.png}{267}%


% [** TN: Macro prints the text below]
%A SELECTION OF
%Mathematical Works
\Catalogue

\Book{\Title{An Introduction to the Calculus.}  Based on
Graphical Methods. By Prof.\ \Author{G.~A.~Gibson}, M.A., LL.D\@.
3s.~6d.}

\Book{\Title{An Elementary Treatise on the Calculus.} With
Illustrations from Geometry, Mechanics, and Physics.
By Prof.\ \Author{G.~A.~Gibson}, M.A., LL.D\@. 7s.~6d.}

\Book{\Title{Differential Calculus for Beginners.}  By
\Author{J.~Edwards}, M.A\@. 4s.~6d.}

\Book{\Title{Integral Calculus for Beginners.} With an Introduction
to the Study of Differential Equations. By
\Author{Joseph Edwards}, M.A\@. 4s.~6d.}

\Book{\Title{Calculus Made Easy.} Being a very-simplest
Introduction to those beautiful Methods of Reckoning
which are generally called by the terrifying names of the
Differential Calculus and the Integral Calculus. By \Author{F.~R.~S\@.}
2s.~net. New Edition, with many Examples.}

\Book{\Title{A First Course in the Differential and Integral
Calculus.} By Prof.\ \Author{W.~F.~Osgood}, Ph.D\@. 8s.~6d.\ net.}

\Book{\Title{Practical Integration for the use of Engineers,
etc.} By \Author{A.~S.~Percival}, M.A\@. 2s.~6d.\ net.}

\Book{\Title{Differential Calculus.} With Applications and
numerous Examples. An Elementary Treatise by \Author{Joseph
Edwards}, M.A\@. 14s.}

\Book{\Title{Differential and Integral Calculus for Technical
Schools and Colleges.} By \Author{P.~A.~Lambert}, M.A\@. 7s.~6d.}

\Book{\Title{Differential and Integral Calculus. With Applications.}
By Sir \Author{A.~G.~Greenhill}, F.R.S\@. 10s.~6d.}
%\vfill
%\begin{center}LONDON: MACMILLAN AND CO., LTD.\end{center}
\DPPageSep{280.png}{268}%

\Book{\Title{A Treatise on the Integral Calculus and its
Applications.} By \Author{I.~Todhunter}, F.R.S\@. 10s.~6d. Key.
By \Author{H.~St.~J.~Hunter}, M.A\@. 10s.~6d.}

\Book{\Title{A Treatise on the Differential Calculus and the
Elements of the Integral Calculus.} With numerous Examples.
By \Author{I.~Todhunter}, F.R.S\@. 10s.~6d. Key. By
\Author{H.~St.~J.~Hunter}, M.A\@. 10s.~6d.}

\Book{\Title{Ordinary Differential Equations. An Elementary
Text-book.} By \Author{James Morris Page}, Ph.D\@. 6s.~6d.}

\Book{\Title{An Introduction to the Modern Theory of
Equations.} By Prof.\ \Author{F.~Cajori}, Ph.D\@. 7s.~6d.\ net.}

\Book{\Title{A Treatise on Differential Equations.} By
\Author{Andrew Russell Forsyth}, Sc.D., LL.D\@. Fourth
Edition. 14s.\ net.}

\Book{\Title{A Short Course on Differential Equations.} By
Prof.\ \Author{Donald~F. Campbell}, Ph.D\@. 4s.\ net.}

\Book{\Title{A Manual of Quaternions.} By \Author{C.~J.~Joly},
M.A., D.Sc., F.R.S\@. 10s.\ net.}

\Book{\Title{The Theory of Determinants in the Historical
Order of Development.} Vol.~I\@. Part~I. General Determinants,
up to~1841. Part~II. Special Determinants, up
to~1841. 17s.\ net. Vol.~II\@. The Period 1841 to~1860. 17s.\
net. By \Author{T.~Muir}, M.A., LL.D., F.R.S.}

\Book{\Title{An Introduction to the Theory of Infinite Series.}
By \Author{T.~J.~I'a Bromwich},\DPnote{** [sic]; Thomas John I'Anson Bromwich}
 M.A., F.R.S\@. 15s.\ net.}

\Book{\Title{Introduction to the Theory of Fourier's Series
and Integrals, and the Mathematical Theory of the Conduction
of Heat.} By Prof.\ \Author{H.~S.~Carslaw}, M.A., D.Sc.,
F.R.S.E\@. 14s.\ net.}

\vfill

\begin{center}
  LONDON: MACMILLAN AND CO., LTD.
\end{center}
\DPPageSep{281.png}{269}%
%[Blank Page]


%%%%%%%%%%%%%%%%%%%%%%%%% GUTENBERG LICENSE %%%%%%%%%%%%%%%%%%%%%%%%%%
\flushpage\null\vfill
\TNote{\Corrections}

\License

\begin{PGtext}
*** END OF THE PROJECT GUTENBERG EBOOK CALCULUS MADE EASY ***

***** This file should be named 33283-pdf.pdf or 33283-pdf.zip *****
This and all associated files of various formats will be found in:
    https://www.gutenberg.org/3/3/2/8/33283/

Updated editions will replace the previous one--the old editions will
be renamed.

Creating the works from print editions not protected by U.S. copyright
law means that no one owns a United States copyright in these works,
so the Foundation (and you!) can copy and distribute it in the
United States without permission and without paying copyright
royalties. Special rules, set forth in the General Terms of Use part
of this license, apply to copying and distributing Project
Gutenberg-tm electronic works to protect the PROJECT GUTENBERG-tm
concept and trademark. Project Gutenberg is a registered trademark,
and may not be used if you charge for an eBook, except by following
the terms of the trademark license, including paying royalties for use
of the Project Gutenberg trademark. If you do not charge anything for
copies of this eBook, complying with the trademark license is very
easy. You may use this eBook for nearly any purpose such as creation
of derivative works, reports, performances and research. Project
Gutenberg eBooks may be modified and printed and given away--you may
do practically ANYTHING in the United States with eBooks not protected
by U.S. copyright law. Redistribution is subject to the trademark
license, especially commercial redistribution.

START: FULL LICENSE

THE FULL PROJECT GUTENBERG LICENSE
PLEASE READ THIS BEFORE YOU DISTRIBUTE OR USE THIS WORK

To protect the Project Gutenberg-tm mission of promoting the free
distribution of electronic works, by using or distributing this work
(or any other work associated in any way with the phrase 'Project
Gutenberg'), you agree to comply with all the terms of the Full
Project Gutenberg-tm License available with this file or online at
www.gutenberg.org/license.

Section 1. General Terms of Use and Redistributing Project
Gutenberg-tm electronic works

1.A. By reading or using any part of this Project Gutenberg-tm
electronic work, you indicate that you have read, understand, agree to
and accept all the terms of this license and intellectual property
(trademark/copyright) agreement. If you do not agree to abide by all
the terms of this agreement, you must cease using and return or
destroy all copies of Project Gutenberg-tm electronic works in your
possession. If you paid a fee for obtaining a copy of or access to a
Project Gutenberg-tm electronic work and you do not agree to be bound
by the terms of this agreement, you may obtain a refund from the
person or entity to whom you paid the fee as set forth in paragraph
1.E.8.

1.B. 'Project Gutenberg' is a registered trademark. It may only be
used on or associated in any way with an electronic work by people who
agree to be bound by the terms of this agreement. There are a few
things that you can do with most Project Gutenberg-tm electronic works
even without complying with the full terms of this agreement. See
paragraph 1.C below. There are a lot of things you can do with Project
Gutenberg-tm electronic works if you follow the terms of this
agreement and help preserve free future access to Project Gutenberg-tm
electronic works. See paragraph 1.E below.

1.C. The Project Gutenberg Literary Archive Foundation ('the
Foundation' or PGLAF), owns a compilation copyright in the collection
of Project Gutenberg-tm electronic works. Nearly all the individual
works in the collection are in the public domain in the United
States. If an individual work is unprotected by copyright law in the
United States and you are located in the United States, we do not
claim a right to prevent you from copying, distributing, performing,
displaying or creating derivative works based on the work as long as
all references to Project Gutenberg are removed. Of course, we hope
that you will support the Project Gutenberg-tm mission of promoting
free access to electronic works by freely sharing Project Gutenberg-tm
works in compliance with the terms of this agreement for keeping the
Project Gutenberg-tm name associated with the work. You can easily
comply with the terms of this agreement by keeping this work in the
same format with its attached full Project Gutenberg-tm License when
you share it without charge with others.

1.D. The copyright laws of the place where you are located also govern
what you can do with this work. Copyright laws in most countries are
in a constant state of change. If you are outside the United States,
check the laws of your country in addition to the terms of this
agreement before downloading, copying, displaying, performing,
distributing or creating derivative works based on this work or any
other Project Gutenberg-tm work. The Foundation makes no
representations concerning the copyright status of any work in any
country other than the United States.

1.E. Unless you have removed all references to Project Gutenberg:

1.E.1. The following sentence, with active links to, or other
immediate access to, the full Project Gutenberg-tm License must appear
prominently whenever any copy of a Project Gutenberg-tm work (any work
on which the phrase 'Project Gutenberg' appears, or with which the
phrase 'Project Gutenberg' is associated) is accessed, displayed,
performed, viewed, copied or distributed:

  This eBook is for the use of anyone anywhere in the United States and
  most other parts of the world at no cost and with almost no
  restrictions whatsoever. You may copy it, give it away or re-use it
  under the terms of the Project Gutenberg License included with this
  eBook or online at www.gutenberg.org. If you are not located in the
  United States, you will have to check the laws of the country where
  you are located before using this eBook.

1.E.2. If an individual Project Gutenberg-tm electronic work is
derived from texts not protected by U.S. copyright law (does not
contain a notice indicating that it is posted with permission of the
copyright holder), the work can be copied and distributed to anyone in
the United States without paying any fees or charges. If you are
redistributing or providing access to a work with the phrase 'Project
Gutenberg' associated with or appearing on the work, you must comply
either with the requirements of paragraphs 1.E.1 through 1.E.7 or
obtain permission for the use of the work and the Project Gutenberg-tm
trademark as set forth in paragraphs 1.E.8 or 1.E.9.

1.E.3. If an individual Project Gutenberg-tm electronic work is posted
with the permission of the copyright holder, your use and distribution
must comply with both paragraphs 1.E.1 through 1.E.7 and any
additional terms imposed by the copyright holder. Additional terms
will be linked to the Project Gutenberg-tm License for all works
posted with the permission of the copyright holder found at the
beginning of this work.

1.E.4. Do not unlink or detach or remove the full Project Gutenberg-tm
License terms from this work, or any files containing a part of this
work or any other work associated with Project Gutenberg-tm.

1.E.5. Do not copy, display, perform, distribute or redistribute this
electronic work, or any part of this electronic work, without
prominently displaying the sentence set forth in paragraph 1.E.1 with
active links or immediate access to the full terms of the Project
Gutenberg-tm License.

1.E.6. You may convert to and distribute this work in any binary,
compressed, marked up, nonproprietary or proprietary form, including
any word processing or hypertext form. However, if you provide access
to or distribute copies of a Project Gutenberg-tm work in a format
other than 'Plain Vanilla ASCII' or other format used in the official
version posted on the official Project Gutenberg-tm website
(www.gutenberg.org), you must, at no additional cost, fee or expense
to the user, provide a copy, a means of exporting a copy, or a means
of obtaining a copy upon request, of the work in its original 'Plain
Vanilla ASCII' or other form. Any alternate format must include the
full Project Gutenberg-tm License as specified in paragraph 1.E.1.

1.E.7. Do not charge a fee for access to, viewing, displaying,
performing, copying or distributing any Project Gutenberg-tm works
unless you comply with paragraph 1.E.8 or 1.E.9.

1.E.8. You may charge a reasonable fee for copies of or providing
access to or distributing Project Gutenberg-tm electronic works
provided that:

* You pay a royalty fee of 20% of the gross profits you derive from
  the use of Project Gutenberg-tm works calculated using the method
  you already use to calculate your applicable taxes. The fee is owed
  to the owner of the Project Gutenberg-tm trademark, but he has
  agreed to donate royalties under this paragraph to the Project
  Gutenberg Literary Archive Foundation. Royalty payments must be paid
  within 60 days following each date on which you prepare (or are
  legally required to prepare) your periodic tax returns. Royalty
  payments should be clearly marked as such and sent to the Project
  Gutenberg Literary Archive Foundation at the address specified in
  Section 4, 'Information about donations to the Project Gutenberg
  Literary Archive Foundation.'

* You provide a full refund of any money paid by a user who notifies
  you in writing (or by email) within 30 days of receipt that s/he
  does not agree to the terms of the full Project Gutenberg-tm
  License. You must require such a user to return or destroy all
  copies of the works possessed in a physical medium and discontinue
  all use of and all access to other copies of Project Gutenberg-tm
  works.

* You provide, in accordance with paragraph 1.F.3, a full refund of
  any money paid for a work or a replacement copy, if a defect in the
  electronic work is discovered and reported to you within 90 days of
  receipt of the work.

* You comply with all other terms of this agreement for free
  distribution of Project Gutenberg-tm works.

1.E.9. If you wish to charge a fee or distribute a Project
Gutenberg-tm electronic work or group of works on different terms than
are set forth in this agreement, you must obtain permission in writing
from the Project Gutenberg Literary Archive Foundation, the manager of
the Project Gutenberg-tm trademark. Contact the Foundation as set
forth in Section 3 below.

1.F.

1.F.1. Project Gutenberg volunteers and employees expend considerable
effort to identify, do copyright research on, transcribe and proofread
works not protected by U.S. copyright law in creating the Project
Gutenberg-tm collection. Despite these efforts, Project Gutenberg-tm
electronic works, and the medium on which they may be stored, may
contain 'Defects,' such as, but not limited to, incomplete, inaccurate
or corrupt data, transcription errors, a copyright or other
intellectual property infringement, a defective or damaged disk or
other medium, a computer virus, or computer codes that damage or
cannot be read by your equipment.

1.F.2. LIMITED WARRANTY, DISCLAIMER OF DAMAGES - Except for the 'Right
of Replacement or Refund' described in paragraph 1.F.3, the Project
Gutenberg Literary Archive Foundation, the owner of the Project
Gutenberg-tm trademark, and any other party distributing a Project
Gutenberg-tm electronic work under this agreement, disclaim all
liability to you for damages, costs and expenses, including legal
fees. YOU AGREE THAT YOU HAVE NO REMEDIES FOR NEGLIGENCE, STRICT
LIABILITY, BREACH OF WARRANTY OR BREACH OF CONTRACT EXCEPT THOSE
PROVIDED IN PARAGRAPH 1.F.3. YOU AGREE THAT THE FOUNDATION, THE
TRADEMARK OWNER, AND ANY DISTRIBUTOR UNDER THIS AGREEMENT WILL NOT BE
LIABLE TO YOU FOR ACTUAL, DIRECT, INDIRECT, CONSEQUENTIAL, PUNITIVE OR
INCIDENTAL DAMAGES EVEN IF YOU GIVE NOTICE OF THE POSSIBILITY OF SUCH
DAMAGE.

1.F.3. LIMITED RIGHT OF REPLACEMENT OR REFUND - If you discover a
defect in this electronic work within 90 days of receiving it, you can
receive a refund of the money (if any) you paid for it by sending a
written explanation to the person you received the work from. If you
received the work on a physical medium, you must return the medium
with your written explanation. The person or entity that provided you
with the defective work may elect to provide a replacement copy in
lieu of a refund. If you received the work electronically, the person
or entity providing it to you may choose to give you a second
opportunity to receive the work electronically in lieu of a refund. If
the second copy is also defective, you may demand a refund in writing
without further opportunities to fix the problem.

1.F.4. Except for the limited right of replacement or refund set forth
in paragraph 1.F.3, this work is provided to you--'AS-IS', WITH NO
OTHER WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
LIMITED TO WARRANTIES OF MERCHANTABILITY OR FITNESS FOR ANY PURPOSE.

1.F.5. Some states do not allow disclaimers of certain implied
warranties or the exclusion or limitation of certain types of
damages. If any disclaimer or limitation set forth in this agreement
violates the law of the state applicable to this agreement, the
agreement shall be interpreted to make the maximum disclaimer or
limitation permitted by the applicable state law. The invalidity or
unenforceability of any provision of this agreement shall not void the
remaining provisions.

1.F.6. INDEMNITY - You agree to indemnify and hold the Foundation, the
trademark owner, any agent or employee of the Foundation, anyone
providing copies of Project Gutenberg-tm electronic works in
accordance with this agreement, and any volunteers associated with the
production, promotion and distribution of Project Gutenberg-tm
electronic works, harmless from all liability, costs and expenses,
including legal fees, that arise directly or indirectly from any of
the following which you do or cause to occur: (a) distribution of this
or any Project Gutenberg-tm work, (b) alteration, modification, or
additions or deletions to any Project Gutenberg-tm work, and (c) any
Defect you cause.

Section 2. Information about the Mission of Project Gutenberg-tm

Project Gutenberg-tm is synonymous with the free distribution of
electronic works in formats readable by the widest variety of
computers including obsolete, old, middle-aged and new computers. It
exists because of the efforts of hundreds of volunteers and donations
from people in all walks of life.

Volunteers and financial support to provide volunteers with the
assistance they need are critical to reaching Project Gutenberg-tm's
goals and ensuring that the Project Gutenberg-tm collection will
remain freely available for generations to come. In 2001, the Project
Gutenberg Literary Archive Foundation was created to provide a secure
and permanent future for Project Gutenberg-tm and future
generations. To learn more about the Project Gutenberg Literary
Archive Foundation and how your efforts and donations can help, see
Sections 3 and 4 and the Foundation information page at
www.gutenberg.org

Section 3. Information about the Project Gutenberg Literary
Archive Foundation

The Project Gutenberg Literary Archive Foundation is a non-profit
501(c)(3) educational corporation organized under the laws of the
state of Mississippi and granted tax exempt status by the Internal
Revenue Service. The Foundation's EIN or federal tax identification
number is 64-6221541. Contributions to the Project Gutenberg Literary
Archive Foundation are tax deductible to the full extent permitted by
U.S. federal laws and your state's laws.

The Foundation's business office is located at 809 North 1500 West,
Salt Lake City, UT 84116, (801) 596-1887. Email contact links and up
to date contact information can be found at the Foundation's website
and official page at www.gutenberg.org/contact

Section 4. Information about Donations to the Project Gutenberg
Literary Archive Foundation

Project Gutenberg-tm depends upon and cannot survive without
widespread public support and donations to carry out its mission of
increasing the number of public domain and licensed works that can be
freely distributed in machine-readable form accessible by the widest
array of equipment including outdated equipment. Many small donations
($1 to $5,000) are particularly important to maintaining tax exempt
status with the IRS.

The Foundation is committed to complying with the laws regulating
charities and charitable donations in all 50 states of the United
States. Compliance requirements are not uniform and it takes a
considerable effort, much paperwork and many fees to meet and keep up
with these requirements. We do not solicit donations in locations
where we have not received written confirmation of compliance. To SEND
DONATIONS or determine the status of compliance for any particular
state visit www.gutenberg.org/donate

While we cannot and do not solicit contributions from states where we
have not met the solicitation requirements, we know of no prohibition
against accepting unsolicited donations from donors in such states who
approach us with offers to donate.

International donations are gratefully accepted, but we cannot make
any statements concerning tax treatment of donations received from
outside the United States. U.S. laws alone swamp our small staff.

Please check the Project Gutenberg web pages for current donation
methods and addresses. Donations are accepted in a number of other
ways including checks, online payments and credit card donations. To
donate, please visit: www.gutenberg.org/donate

Section 5. General Information About Project Gutenberg-tm electronic works

Professor Michael S. Hart was the originator of the Project
Gutenberg-tm concept of a library of electronic works that could be
freely shared with anyone. For forty years, he produced and
distributed Project Gutenberg-tm eBooks with only a loose network of
volunteer support.

Project Gutenberg-tm eBooks are often created from several printed
editions, all of which are confirmed as not protected by copyright in
the U.S. unless a copyright notice is included. Thus, we do not
necessarily keep eBooks in compliance with any particular paper
edition.

Most people start at our website which has the main PG search
facility: www.gutenberg.org

This website includes information about Project Gutenberg-tm,
including how to make donations to the Project Gutenberg Literary
Archive Foundation, how to help produce our new eBooks, and how to
subscribe to our email newsletter to hear about new eBooks.
\end{PGtext}
\end{document}`