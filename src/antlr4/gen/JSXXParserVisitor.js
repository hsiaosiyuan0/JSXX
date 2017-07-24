// Generated from /Users/hsiaosiyuan/WebstormProjects/jsxx/src/antlr4/JSXXParser.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by JSXXParser.

function JSXXParserVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

JSXXParserVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
JSXXParserVisitor.prototype.constructor = JSXXParserVisitor;

// Visit a parse tree produced by JSXXParser#root.
JSXXParserVisitor.prototype.visitRoot = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JSXXParser#NormalElement.
JSXXParserVisitor.prototype.visitNormalElement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JSXXParser#VoidElement.
JSXXParserVisitor.prototype.visitVoidElement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JSXXParser#content.
JSXXParserVisitor.prototype.visitContent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JSXXParser#stmt.
JSXXParserVisitor.prototype.visitStmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JSXXParser#forStmt.
JSXXParserVisitor.prototype.visitForStmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JSXXParser#forBegin.
JSXXParserVisitor.prototype.visitForBegin = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JSXXParser#exprOpen.
JSXXParserVisitor.prototype.visitExprOpen = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JSXXParser#exprClose.
JSXXParserVisitor.prototype.visitExprClose = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JSXXParser#endExpr.
JSXXParserVisitor.prototype.visitEndExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JSXXParser#ifStmt.
JSXXParserVisitor.prototype.visitIfStmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JSXXParser#ifBegin.
JSXXParserVisitor.prototype.visitIfBegin = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JSXXParser#elseif.
JSXXParserVisitor.prototype.visitElseif = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JSXXParser#elseBranch.
JSXXParserVisitor.prototype.visitElseBranch = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JSXXParser#attribute.
JSXXParserVisitor.prototype.visitAttribute = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JSXXParser#expr.
JSXXParserVisitor.prototype.visitExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JSXXParser#MultiplyExpr.
JSXXParserVisitor.prototype.visitMultiplyExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JSXXParser#AddExpr.
JSXXParserVisitor.prototype.visitAddExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JSXXParser#RelationalExpr.
JSXXParserVisitor.prototype.visitRelationalExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JSXXParser#LogicalAndExpr.
JSXXParserVisitor.prototype.visitLogicalAndExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JSXXParser#MemberIndexExpr.
JSXXParserVisitor.prototype.visitMemberIndexExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JSXXParser#LogicalOrExpr.
JSXXParserVisitor.prototype.visitLogicalOrExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JSXXParser#EqualityExpr.
JSXXParserVisitor.prototype.visitEqualityExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JSXXParser#MemberDotExpr.
JSXXParserVisitor.prototype.visitMemberDotExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JSXXParser#IdentifierExpr.
JSXXParserVisitor.prototype.visitIdentifierExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JSXXParser#FunCallExpr.
JSXXParserVisitor.prototype.visitFunCallExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JSXXParser#LiteralExpr.
JSXXParserVisitor.prototype.visitLiteralExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JSXXParser#ParenExpr.
JSXXParserVisitor.prototype.visitParenExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JSXXParser#TernaryExpr.
JSXXParserVisitor.prototype.visitTernaryExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JSXXParser#arguments.
JSXXParserVisitor.prototype.visitArguments = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JSXXParser#argumentList.
JSXXParserVisitor.prototype.visitArgumentList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JSXXParser#literal.
JSXXParserVisitor.prototype.visitLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JSXXParser#numericLiteral.
JSXXParserVisitor.prototype.visitNumericLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JSXXParser#comment.
JSXXParserVisitor.prototype.visitComment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JSXXParser#reference.
JSXXParserVisitor.prototype.visitReference = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JSXXParser#charData.
JSXXParserVisitor.prototype.visitCharData = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JSXXParser#misc.
JSXXParserVisitor.prototype.visitMisc = function(ctx) {
  return this.visitChildren(ctx);
};



exports.JSXXParserVisitor = JSXXParserVisitor;