parser grammar JSXXParser;

options { tokenVocab=JSXXLexer; }

root: misc* element misc*;

element
  : TagOpen TagInsideName attribute* TagClose content TagOpen TagSlash TagInsideName TagClose    # NormalElement
  | TagOpen TagInsideName attribute* TagSlashClose                                               # VoidElement
  | TagOpen TagInsideName attribute* TagClose                                                    # VoidElement
  ;

content
  : charData? ((element | reference | comment | stmt) charData?)*
  ;

stmt
  : forStmt
  | ifStmt
  | expr
  ;

forStmt
  : forBegin content endExpr
  ;

forBegin
  : exprOpen For Identifier In singleExpr exprClose
  ;

exprOpen
  : HTMLExprOpen
  | AttrExprOpen
  ;

exprClose
  : '}'
  ;

endExpr
  : exprOpen End exprClose
  ;

ifStmt
  : ifBegin content elseif* elseBranch? endExpr
  ;

ifBegin
  : exprOpen If singleExpr exprClose
  ;

elseif
  : exprOpen Elseif singleExpr exprClose content
  ;

elseBranch
  : exprOpen Else exprClose content
  ;

attribute
  : TagInsideName AttrEquals AttrVal
  | TagInsideName '=' expr
  ;

expr
  : (HTMLExprOpen | AttrExprOpen) singleExpr '}'
  ;

singleExpr
  : singleExpr '[' singleExpr ']'                                   # MemberIndexExpr
  | singleExpr '.' Identifier                                       # MemberDotExpr
  | singleExpr arguments                                            # FunCallExpr
  | singleExpr ( '*' | Divide | '%' ) singleExpr                    # MultiplyExpr
  | singleExpr ( '+' | '-' ) singleExpr                             # AddExpr
  | singleExpr ( LessThan | MoreThan | '<=' | '>=' ) singleExpr     # RelationalExpr
  | singleExpr ( '==' | '!=' ) singleExpr                           # EqualityExpr
  | singleExpr '&&' singleExpr                                      # LogicalAndExpr
  | singleExpr '||' singleExpr                                      # LogicalOrExpr
  | singleExpr '?' singleExpr ':' singleExpr                        # TernaryExpr
  | Identifier                                                      # IdentifierExpr
  | literal                                                         # LiteralExpr
  | '(' singleExpr ')'                                              # ParenExpr
  ;

arguments
  : '(' argumentList? ')'
  ;

argumentList
  : singleExpr ( ',' singleExpr )*
  ;

literal
  : ( NullLiteral
    | BooleanLiteral
    | StringLiteral
    )
  | numericLiteral
  ;

numericLiteral
  : IntegerLiteral
  | HexIntegerLiteral
  | RealLiteral
  ;

comment
  : MultiLineComment
  | SingleLineComment
  | HTMLComment
  ;

reference
  : HTMLCharRef+
  ;

charData
  : HTMLText+
  | HTMLWhitespace+
  ;

misc
  : comment
  | HTMLWhitespace
  ;
