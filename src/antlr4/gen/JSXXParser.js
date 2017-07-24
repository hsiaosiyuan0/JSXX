// Generated from /Users/hsiaosiyuan/WebstormProjects/jsxx/src/antlr4/JSXXParser.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var JSXXParserVisitor = require('./JSXXParserVisitor').JSXXParserVisitor;

var grammarFileName = "JSXXParser.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003:\u0115\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0003\u0002\u0007\u00024\n\u0002",
    "\f\u0002\u000e\u00027\u000b\u0002\u0003\u0002\u0003\u0002\u0007\u0002",
    ";\n\u0002\f\u0002\u000e\u0002>\u000b\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0007\u0003C\n\u0003\f\u0003\u000e\u0003F\u000b\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003R\n\u0003\f\u0003\u000e",
    "\u0003U\u000b\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0007\u0003[\n\u0003\f\u0003\u000e\u0003^\u000b\u0003\u0003\u0003\u0005",
    "\u0003a\n\u0003\u0003\u0004\u0005\u0004d\n\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0005\u0004j\n\u0004\u0003\u0004\u0005\u0004",
    "m\n\u0004\u0007\u0004o\n\u0004\f\u0004\u000e\u0004r\u000b\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0005\u0005w\n\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007\u0085",
    "\n\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003",
    "\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0007\u000b\u0096\n\u000b\f\u000b\u000e\u000b\u0099",
    "\u000b\u000b\u0003\u000b\u0005\u000b\u009c\n\u000b\u0003\u000b\u0003",
    "\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u00b7\n\u000f\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u00c4\n",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0007\u0011\u00e8",
    "\n\u0011\f\u0011\u000e\u0011\u00eb\u000b\u0011\u0003\u0012\u0003\u0012",
    "\u0005\u0012\u00ef\n\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0007\u0013\u00f6\n\u0013\f\u0013\u000e\u0013\u00f9",
    "\u000b\u0013\u0003\u0014\u0003\u0014\u0005\u0014\u00fd\n\u0014\u0003",
    "\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003",
    "\u0018\u0006\u0018\u0106\n\u0018\r\u0018\u000e\u0018\u0107\u0003\u0018",
    "\u0006\u0018\u010b\n\u0018\r\u0018\u000e\u0018\u010c\u0005\u0018\u010f",
    "\n\u0018\u0003\u0019\u0003\u0019\u0005\u0019\u0113\n\u0019\u0003\u0019",
    "\u0002\u0003 \u001a\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0016\u0018\u001a\u001c\u001e \"$&(*,.0\u0002\n\u0004\u0002\t\t\u0013",
    "\u0013\u0003\u0002#%\u0003\u0002!\"\u0004\u0002&\'*+\u0003\u0002()\u0004",
    "\u00020277\u0003\u000235\u0003\u0002\u0003\u0005\u0002\u0123\u00025",
    "\u0003\u0002\u0002\u0002\u0004`\u0003\u0002\u0002\u0002\u0006c\u0003",
    "\u0002\u0002\u0002\bv\u0003\u0002\u0002\u0002\nx\u0003\u0002\u0002\u0002",
    "\f|\u0003\u0002\u0002\u0002\u000e\u008a\u0003\u0002\u0002\u0002\u0010",
    "\u008c\u0003\u0002\u0002\u0002\u0012\u008e\u0003\u0002\u0002\u0002\u0014",
    "\u0092\u0003\u0002\u0002\u0002\u0016\u009f\u0003\u0002\u0002\u0002\u0018",
    "\u00a4\u0003\u0002\u0002\u0002\u001a\u00aa\u0003\u0002\u0002\u0002\u001c",
    "\u00b6\u0003\u0002\u0002\u0002\u001e\u00b8\u0003\u0002\u0002\u0002 ",
    "\u00c3\u0003\u0002\u0002\u0002\"\u00ec\u0003\u0002\u0002\u0002$\u00f2",
    "\u0003\u0002\u0002\u0002&\u00fc\u0003\u0002\u0002\u0002(\u00fe\u0003",
    "\u0002\u0002\u0002*\u0100\u0003\u0002\u0002\u0002,\u0102\u0003\u0002",
    "\u0002\u0002.\u010e\u0003\u0002\u0002\u00020\u0112\u0003\u0002\u0002",
    "\u000224\u00050\u0019\u000232\u0003\u0002\u0002\u000247\u0003\u0002",
    "\u0002\u000253\u0003\u0002\u0002\u000256\u0003\u0002\u0002\u000268\u0003",
    "\u0002\u0002\u000275\u0003\u0002\u0002\u00028<\u0005\u0004\u0003\u0002",
    "9;\u00050\u0019\u0002:9\u0003\u0002\u0002\u0002;>\u0003\u0002\u0002",
    "\u0002<:\u0003\u0002\u0002\u0002<=\u0003\u0002\u0002\u0002=\u0003\u0003",
    "\u0002\u0002\u0002><\u0003\u0002\u0002\u0002?@\u0007\n\u0002\u0002@",
    "D\u0007\u000e\u0002\u0002AC\u0005\u001c\u000f\u0002BA\u0003\u0002\u0002",
    "\u0002CF\u0003\u0002\u0002\u0002DB\u0003\u0002\u0002\u0002DE\u0003\u0002",
    "\u0002\u0002EG\u0003\u0002\u0002\u0002FD\u0003\u0002\u0002\u0002GH\u0007",
    "\u000b\u0002\u0002HI\u0005\u0006\u0004\u0002IJ\u0007\n\u0002\u0002J",
    "K\u0007\r\u0002\u0002KL\u0007\u000e\u0002\u0002LM\u0007\u000b\u0002",
    "\u0002Ma\u0003\u0002\u0002\u0002NO\u0007\n\u0002\u0002OS\u0007\u000e",
    "\u0002\u0002PR\u0005\u001c\u000f\u0002QP\u0003\u0002\u0002\u0002RU\u0003",
    "\u0002\u0002\u0002SQ\u0003\u0002\u0002\u0002ST\u0003\u0002\u0002\u0002",
    "TV\u0003\u0002\u0002\u0002US\u0003\u0002\u0002\u0002Va\u0007\f\u0002",
    "\u0002WX\u0007\n\u0002\u0002X\\\u0007\u000e\u0002\u0002Y[\u0005\u001c",
    "\u000f\u0002ZY\u0003\u0002\u0002\u0002[^\u0003\u0002\u0002\u0002\\Z",
    "\u0003\u0002\u0002\u0002\\]\u0003\u0002\u0002\u0002]_\u0003\u0002\u0002",
    "\u0002^\\\u0003\u0002\u0002\u0002_a\u0007\u000b\u0002\u0002`?\u0003",
    "\u0002\u0002\u0002`N\u0003\u0002\u0002\u0002`W\u0003\u0002\u0002\u0002",
    "a\u0005\u0003\u0002\u0002\u0002bd\u0005.\u0018\u0002cb\u0003\u0002\u0002",
    "\u0002cd\u0003\u0002\u0002\u0002dp\u0003\u0002\u0002\u0002ej\u0005\u0004",
    "\u0003\u0002fj\u0005,\u0017\u0002gj\u0005*\u0016\u0002hj\u0005\b\u0005",
    "\u0002ie\u0003\u0002\u0002\u0002if\u0003\u0002\u0002\u0002ig\u0003\u0002",
    "\u0002\u0002ih\u0003\u0002\u0002\u0002jl\u0003\u0002\u0002\u0002km\u0005",
    ".\u0018\u0002lk\u0003\u0002\u0002\u0002lm\u0003\u0002\u0002\u0002mo",
    "\u0003\u0002\u0002\u0002ni\u0003\u0002\u0002\u0002or\u0003\u0002\u0002",
    "\u0002pn\u0003\u0002\u0002\u0002pq\u0003\u0002\u0002\u0002q\u0007\u0003",
    "\u0002\u0002\u0002rp\u0003\u0002\u0002\u0002sw\u0005\n\u0006\u0002t",
    "w\u0005\u0014\u000b\u0002uw\u0005\u001e\u0010\u0002vs\u0003\u0002\u0002",
    "\u0002vt\u0003\u0002\u0002\u0002vu\u0003\u0002\u0002\u0002w\t\u0003",
    "\u0002\u0002\u0002xy\u0005\f\u0007\u0002yz\u0005\u0006\u0004\u0002z",
    "{\u0005\u0012\n\u0002{\u000b\u0003\u0002\u0002\u0002|}\u0005\u000e\b",
    "\u0002}\u0084\u0007\u0015\u0002\u0002~\u0085\u00076\u0002\u0002\u007f",
    "\u0080\u0007\u001d\u0002\u0002\u0080\u0081\u00076\u0002\u0002\u0081",
    "\u0082\u0007\u001f\u0002\u0002\u0082\u0083\u00076\u0002\u0002\u0083",
    "\u0085\u0007\u001e\u0002\u0002\u0084~\u0003\u0002\u0002\u0002\u0084",
    "\u007f\u0003\u0002\u0002\u0002\u0085\u0086\u0003\u0002\u0002\u0002\u0086",
    "\u0087\u0007\u0016\u0002\u0002\u0087\u0088\u0005 \u0011\u0002\u0088",
    "\u0089\u0005\u0010\t\u0002\u0089\r\u0003\u0002\u0002\u0002\u008a\u008b",
    "\t\u0002\u0002\u0002\u008b\u000f\u0003\u0002\u0002\u0002\u008c\u008d",
    "\u0007\u0014\u0002\u0002\u008d\u0011\u0003\u0002\u0002\u0002\u008e\u008f",
    "\u0005\u000e\b\u0002\u008f\u0090\u0007\u001a\u0002\u0002\u0090\u0091",
    "\u0005\u0010\t\u0002\u0091\u0013\u0003\u0002\u0002\u0002\u0092\u0093",
    "\u0005\u0016\f\u0002\u0093\u0097\u0005\u0006\u0004\u0002\u0094\u0096",
    "\u0005\u0018\r\u0002\u0095\u0094\u0003\u0002\u0002\u0002\u0096\u0099",
    "\u0003\u0002\u0002\u0002\u0097\u0095\u0003\u0002\u0002\u0002\u0097\u0098",
    "\u0003\u0002\u0002\u0002\u0098\u009b\u0003\u0002\u0002\u0002\u0099\u0097",
    "\u0003\u0002\u0002\u0002\u009a\u009c\u0005\u001a\u000e\u0002\u009b\u009a",
    "\u0003\u0002\u0002\u0002\u009b\u009c\u0003\u0002\u0002\u0002\u009c\u009d",
    "\u0003\u0002\u0002\u0002\u009d\u009e\u0005\u0012\n\u0002\u009e\u0015",
    "\u0003\u0002\u0002\u0002\u009f\u00a0\u0005\u000e\b\u0002\u00a0\u00a1",
    "\u0007\u0017\u0002\u0002\u00a1\u00a2\u0005 \u0011\u0002\u00a2\u00a3",
    "\u0005\u0010\t\u0002\u00a3\u0017\u0003\u0002\u0002\u0002\u00a4\u00a5",
    "\u0005\u000e\b\u0002\u00a5\u00a6\u0007\u0018\u0002\u0002\u00a6\u00a7",
    "\u0005 \u0011\u0002\u00a7\u00a8\u0005\u0010\t\u0002\u00a8\u00a9\u0005",
    "\u0006\u0004\u0002\u00a9\u0019\u0003\u0002\u0002\u0002\u00aa\u00ab\u0005",
    "\u000e\b\u0002\u00ab\u00ac\u0007\u0019\u0002\u0002\u00ac\u00ad\u0005",
    "\u0010\t\u0002\u00ad\u00ae\u0005\u0006\u0004\u0002\u00ae\u001b\u0003",
    "\u0002\u0002\u0002\u00af\u00b0\u0007\u000e\u0002\u0002\u00b0\u00b1\u0007",
    "\u000f\u0002\u0002\u00b1\u00b7\u0007\u0011\u0002\u0002\u00b2\u00b3\u0007",
    "\u000e\u0002\u0002\u00b3\u00b4\u0007\u000f\u0002\u0002\u00b4\u00b7\u0005",
    "\u001e\u0010\u0002\u00b5\u00b7\u0007\u000e\u0002\u0002\u00b6\u00af\u0003",
    "\u0002\u0002\u0002\u00b6\u00b2\u0003\u0002\u0002\u0002\u00b6\u00b5\u0003",
    "\u0002\u0002\u0002\u00b7\u001d\u0003\u0002\u0002\u0002\u00b8\u00b9\t",
    "\u0002\u0002\u0002\u00b9\u00ba\u0005 \u0011\u0002\u00ba\u00bb\u0007",
    "\u0014\u0002\u0002\u00bb\u001f\u0003\u0002\u0002\u0002\u00bc\u00bd\b",
    "\u0011\u0001\u0002\u00bd\u00c4\u00076\u0002\u0002\u00be\u00c4\u0005",
    "&\u0014\u0002\u00bf\u00c0\u0007\u001d\u0002\u0002\u00c0\u00c1\u0005",
    " \u0011\u0002\u00c1\u00c2\u0007\u001e\u0002\u0002\u00c2\u00c4\u0003",
    "\u0002\u0002\u0002\u00c3\u00bc\u0003\u0002\u0002\u0002\u00c3\u00be\u0003",
    "\u0002\u0002\u0002\u00c3\u00bf\u0003\u0002\u0002\u0002\u00c4\u00e9\u0003",
    "\u0002\u0002\u0002\u00c5\u00c6\f\f\u0002\u0002\u00c6\u00c7\t\u0003\u0002",
    "\u0002\u00c7\u00e8\u0005 \u0011\r\u00c8\u00c9\f\u000b\u0002\u0002\u00c9",
    "\u00ca\t\u0004\u0002\u0002\u00ca\u00e8\u0005 \u0011\f\u00cb\u00cc\f",
    "\n\u0002\u0002\u00cc\u00cd\t\u0005\u0002\u0002\u00cd\u00e8\u0005 \u0011",
    "\u000b\u00ce\u00cf\f\t\u0002\u0002\u00cf\u00d0\t\u0006\u0002\u0002\u00d0",
    "\u00e8\u0005 \u0011\n\u00d1\u00d2\f\b\u0002\u0002\u00d2\u00d3\u0007",
    ",\u0002\u0002\u00d3\u00e8\u0005 \u0011\t\u00d4\u00d5\f\u0007\u0002\u0002",
    "\u00d5\u00d6\u0007-\u0002\u0002\u00d6\u00e8\u0005 \u0011\b\u00d7\u00d8",
    "\f\u0006\u0002\u0002\u00d8\u00d9\u0007.\u0002\u0002\u00d9\u00da\u0005",
    " \u0011\u0002\u00da\u00db\u0007/\u0002\u0002\u00db\u00dc\u0005 \u0011",
    "\u0007\u00dc\u00e8\u0003\u0002\u0002\u0002\u00dd\u00de\f\u000f\u0002",
    "\u0002\u00de\u00df\u0007\u001b\u0002\u0002\u00df\u00e0\u0005 \u0011",
    "\u0002\u00e0\u00e1\u0007\u001c\u0002\u0002\u00e1\u00e8\u0003\u0002\u0002",
    "\u0002\u00e2\u00e3\f\u000e\u0002\u0002\u00e3\u00e4\u0007 \u0002\u0002",
    "\u00e4\u00e8\u00076\u0002\u0002\u00e5\u00e6\f\r\u0002\u0002\u00e6\u00e8",
    "\u0005\"\u0012\u0002\u00e7\u00c5\u0003\u0002\u0002\u0002\u00e7\u00c8",
    "\u0003\u0002\u0002\u0002\u00e7\u00cb\u0003\u0002\u0002\u0002\u00e7\u00ce",
    "\u0003\u0002\u0002\u0002\u00e7\u00d1\u0003\u0002\u0002\u0002\u00e7\u00d4",
    "\u0003\u0002\u0002\u0002\u00e7\u00d7\u0003\u0002\u0002\u0002\u00e7\u00dd",
    "\u0003\u0002\u0002\u0002\u00e7\u00e2\u0003\u0002\u0002\u0002\u00e7\u00e5",
    "\u0003\u0002\u0002\u0002\u00e8\u00eb\u0003\u0002\u0002\u0002\u00e9\u00e7",
    "\u0003\u0002\u0002\u0002\u00e9\u00ea\u0003\u0002\u0002\u0002\u00ea!",
    "\u0003\u0002\u0002\u0002\u00eb\u00e9\u0003\u0002\u0002\u0002\u00ec\u00ee",
    "\u0007\u001d\u0002\u0002\u00ed\u00ef\u0005$\u0013\u0002\u00ee\u00ed",
    "\u0003\u0002\u0002\u0002\u00ee\u00ef\u0003\u0002\u0002\u0002\u00ef\u00f0",
    "\u0003\u0002\u0002\u0002\u00f0\u00f1\u0007\u001e\u0002\u0002\u00f1#",
    "\u0003\u0002\u0002\u0002\u00f2\u00f7\u0005 \u0011\u0002\u00f3\u00f4",
    "\u0007\u001f\u0002\u0002\u00f4\u00f6\u0005 \u0011\u0002\u00f5\u00f3",
    "\u0003\u0002\u0002\u0002\u00f6\u00f9\u0003\u0002\u0002\u0002\u00f7\u00f5",
    "\u0003\u0002\u0002\u0002\u00f7\u00f8\u0003\u0002\u0002\u0002\u00f8%",
    "\u0003\u0002\u0002\u0002\u00f9\u00f7\u0003\u0002\u0002\u0002\u00fa\u00fd",
    "\t\u0007\u0002\u0002\u00fb\u00fd\u0005(\u0015\u0002\u00fc\u00fa\u0003",
    "\u0002\u0002\u0002\u00fc\u00fb\u0003\u0002\u0002\u0002\u00fd\'\u0003",
    "\u0002\u0002\u0002\u00fe\u00ff\t\b\u0002\u0002\u00ff)\u0003\u0002\u0002",
    "\u0002\u0100\u0101\t\t\u0002\u0002\u0101+\u0003\u0002\u0002\u0002\u0102",
    "\u0103\u0007\u0006\u0002\u0002\u0103-\u0003\u0002\u0002\u0002\u0104",
    "\u0106\u0007\b\u0002\u0002\u0105\u0104\u0003\u0002\u0002\u0002\u0106",
    "\u0107\u0003\u0002\u0002\u0002\u0107\u0105\u0003\u0002\u0002\u0002\u0107",
    "\u0108\u0003\u0002\u0002\u0002\u0108\u010f\u0003\u0002\u0002\u0002\u0109",
    "\u010b\u0007\u0007\u0002\u0002\u010a\u0109\u0003\u0002\u0002\u0002\u010b",
    "\u010c\u0003\u0002\u0002\u0002\u010c\u010a\u0003\u0002\u0002\u0002\u010c",
    "\u010d\u0003\u0002\u0002\u0002\u010d\u010f\u0003\u0002\u0002\u0002\u010e",
    "\u0105\u0003\u0002\u0002\u0002\u010e\u010a\u0003\u0002\u0002\u0002\u010f",
    "/\u0003\u0002\u0002\u0002\u0110\u0113\u0005*\u0016\u0002\u0111\u0113",
    "\u0007\u0007\u0002\u0002\u0112\u0110\u0003\u0002\u0002\u0002\u0112\u0111",
    "\u0003\u0002\u0002\u0002\u01131\u0003\u0002\u0002\u0002\u001b5<DS\\",
    "`cilpv\u0084\u0097\u009b\u00b6\u00c3\u00e7\u00e9\u00ee\u00f7\u00fc\u0107",
    "\u010c\u010e\u0112"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, null, null, null, null, 
                     null, "'/>'", null, null, "'='", null, null, null, 
                     null, "'}'", "'for'", "'in'", "'if'", "'elseif'", "'else'", 
                     "'end'", "'['", "']'", "'('", "')'", "','", "'.'", 
                     "'+'", "'-'", "'*'", null, "'%'", null, null, "'=='", 
                     "'!='", "'<='", "'>='", "'&&'", "'||'", "'?'", "':'", 
                     "'null'", "'undefined'" ];

var symbolicNames = [ null, "MultiLineComment", "SingleLineComment", "HTMLComment", 
                      "HTMLCharRef", "HTMLWhitespace", "HTMLText", "HTMLExprOpen", 
                      "TagOpen", "TagClose", "TagSlashClose", "TagSlash", 
                      "TagInsideName", "AttrEquals", "TagWhitespace", "AttrVal", 
                      "AttrValContent", "AttrExprOpen", "ExprClose", "For", 
                      "In", "If", "Elseif", "Else", "End", "OpenBracket", 
                      "CloseBracket", "OpenParen", "CloseParen", "Comma", 
                      "Dot", "Plus", "Minus", "Multiply", "Divide", "Modulus", 
                      "LessThan", "MoreThan", "ExprEquals", "NotEquals", 
                      "LessThanEquals", "GreaterThanEquals", "And", "Or", 
                      "QuestionMark", "Colon", "NullLiteral", "UndefinedLiteral", 
                      "BooleanLiteral", "IntegerLiteral", "HexIntegerLiteral", 
                      "RealLiteral", "Identifier", "StringLiteral", "WhiteSpaces", 
                      "ExprMultiLineComment", "ExprSingleLineComment" ];

var ruleNames =  [ "root", "element", "content", "stmt", "forStmt", "forBegin", 
                   "exprOpen", "exprClose", "endExpr", "ifStmt", "ifBegin", 
                   "elseif", "elseBranch", "attribute", "expr", "singleExpr", 
                   "arguments", "argumentList", "literal", "numericLiteral", 
                   "comment", "reference", "charData", "misc" ];

function JSXXParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

JSXXParser.prototype = Object.create(antlr4.Parser.prototype);
JSXXParser.prototype.constructor = JSXXParser;

Object.defineProperty(JSXXParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

JSXXParser.EOF = antlr4.Token.EOF;
JSXXParser.MultiLineComment = 1;
JSXXParser.SingleLineComment = 2;
JSXXParser.HTMLComment = 3;
JSXXParser.HTMLCharRef = 4;
JSXXParser.HTMLWhitespace = 5;
JSXXParser.HTMLText = 6;
JSXXParser.HTMLExprOpen = 7;
JSXXParser.TagOpen = 8;
JSXXParser.TagClose = 9;
JSXXParser.TagSlashClose = 10;
JSXXParser.TagSlash = 11;
JSXXParser.TagInsideName = 12;
JSXXParser.AttrEquals = 13;
JSXXParser.TagWhitespace = 14;
JSXXParser.AttrVal = 15;
JSXXParser.AttrValContent = 16;
JSXXParser.AttrExprOpen = 17;
JSXXParser.ExprClose = 18;
JSXXParser.For = 19;
JSXXParser.In = 20;
JSXXParser.If = 21;
JSXXParser.Elseif = 22;
JSXXParser.Else = 23;
JSXXParser.End = 24;
JSXXParser.OpenBracket = 25;
JSXXParser.CloseBracket = 26;
JSXXParser.OpenParen = 27;
JSXXParser.CloseParen = 28;
JSXXParser.Comma = 29;
JSXXParser.Dot = 30;
JSXXParser.Plus = 31;
JSXXParser.Minus = 32;
JSXXParser.Multiply = 33;
JSXXParser.Divide = 34;
JSXXParser.Modulus = 35;
JSXXParser.LessThan = 36;
JSXXParser.MoreThan = 37;
JSXXParser.ExprEquals = 38;
JSXXParser.NotEquals = 39;
JSXXParser.LessThanEquals = 40;
JSXXParser.GreaterThanEquals = 41;
JSXXParser.And = 42;
JSXXParser.Or = 43;
JSXXParser.QuestionMark = 44;
JSXXParser.Colon = 45;
JSXXParser.NullLiteral = 46;
JSXXParser.UndefinedLiteral = 47;
JSXXParser.BooleanLiteral = 48;
JSXXParser.IntegerLiteral = 49;
JSXXParser.HexIntegerLiteral = 50;
JSXXParser.RealLiteral = 51;
JSXXParser.Identifier = 52;
JSXXParser.StringLiteral = 53;
JSXXParser.WhiteSpaces = 54;
JSXXParser.ExprMultiLineComment = 55;
JSXXParser.ExprSingleLineComment = 56;

JSXXParser.RULE_root = 0;
JSXXParser.RULE_element = 1;
JSXXParser.RULE_content = 2;
JSXXParser.RULE_stmt = 3;
JSXXParser.RULE_forStmt = 4;
JSXXParser.RULE_forBegin = 5;
JSXXParser.RULE_exprOpen = 6;
JSXXParser.RULE_exprClose = 7;
JSXXParser.RULE_endExpr = 8;
JSXXParser.RULE_ifStmt = 9;
JSXXParser.RULE_ifBegin = 10;
JSXXParser.RULE_elseif = 11;
JSXXParser.RULE_elseBranch = 12;
JSXXParser.RULE_attribute = 13;
JSXXParser.RULE_expr = 14;
JSXXParser.RULE_singleExpr = 15;
JSXXParser.RULE_arguments = 16;
JSXXParser.RULE_argumentList = 17;
JSXXParser.RULE_literal = 18;
JSXXParser.RULE_numericLiteral = 19;
JSXXParser.RULE_comment = 20;
JSXXParser.RULE_reference = 21;
JSXXParser.RULE_charData = 22;
JSXXParser.RULE_misc = 23;

function RootContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSXXParser.RULE_root;
    return this;
}

RootContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RootContext.prototype.constructor = RootContext;

RootContext.prototype.element = function() {
    return this.getTypedRuleContext(ElementContext,0);
};

RootContext.prototype.misc = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MiscContext);
    } else {
        return this.getTypedRuleContext(MiscContext,i);
    }
};

RootContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSXXParserVisitor ) {
        return visitor.visitRoot(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JSXXParser.RootContext = RootContext;

JSXXParser.prototype.root = function() {

    var localctx = new RootContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, JSXXParser.RULE_root);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 51;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JSXXParser.MultiLineComment) | (1 << JSXXParser.SingleLineComment) | (1 << JSXXParser.HTMLComment) | (1 << JSXXParser.HTMLWhitespace))) !== 0)) {
            this.state = 48;
            this.misc();
            this.state = 53;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 54;
        this.element();
        this.state = 58;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JSXXParser.MultiLineComment) | (1 << JSXXParser.SingleLineComment) | (1 << JSXXParser.HTMLComment) | (1 << JSXXParser.HTMLWhitespace))) !== 0)) {
            this.state = 55;
            this.misc();
            this.state = 60;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ElementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSXXParser.RULE_element;
    return this;
}

ElementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementContext.prototype.constructor = ElementContext;


 
ElementContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function VoidElementContext(parser, ctx) {
	ElementContext.call(this, parser);
    ElementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

VoidElementContext.prototype = Object.create(ElementContext.prototype);
VoidElementContext.prototype.constructor = VoidElementContext;

JSXXParser.VoidElementContext = VoidElementContext;

VoidElementContext.prototype.TagOpen = function() {
    return this.getToken(JSXXParser.TagOpen, 0);
};

VoidElementContext.prototype.TagInsideName = function() {
    return this.getToken(JSXXParser.TagInsideName, 0);
};

VoidElementContext.prototype.TagSlashClose = function() {
    return this.getToken(JSXXParser.TagSlashClose, 0);
};

VoidElementContext.prototype.attribute = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AttributeContext);
    } else {
        return this.getTypedRuleContext(AttributeContext,i);
    }
};

VoidElementContext.prototype.TagClose = function() {
    return this.getToken(JSXXParser.TagClose, 0);
};
VoidElementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSXXParserVisitor ) {
        return visitor.visitVoidElement(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NormalElementContext(parser, ctx) {
	ElementContext.call(this, parser);
    ElementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NormalElementContext.prototype = Object.create(ElementContext.prototype);
NormalElementContext.prototype.constructor = NormalElementContext;

JSXXParser.NormalElementContext = NormalElementContext;

NormalElementContext.prototype.TagOpen = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(JSXXParser.TagOpen);
    } else {
        return this.getToken(JSXXParser.TagOpen, i);
    }
};


NormalElementContext.prototype.TagInsideName = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(JSXXParser.TagInsideName);
    } else {
        return this.getToken(JSXXParser.TagInsideName, i);
    }
};


NormalElementContext.prototype.TagClose = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(JSXXParser.TagClose);
    } else {
        return this.getToken(JSXXParser.TagClose, i);
    }
};


NormalElementContext.prototype.content = function() {
    return this.getTypedRuleContext(ContentContext,0);
};

NormalElementContext.prototype.TagSlash = function() {
    return this.getToken(JSXXParser.TagSlash, 0);
};

NormalElementContext.prototype.attribute = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AttributeContext);
    } else {
        return this.getTypedRuleContext(AttributeContext,i);
    }
};
NormalElementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSXXParserVisitor ) {
        return visitor.visitNormalElement(this);
    } else {
        return visitor.visitChildren(this);
    }
};



JSXXParser.ElementContext = ElementContext;

JSXXParser.prototype.element = function() {

    var localctx = new ElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, JSXXParser.RULE_element);
    var _la = 0; // Token type
    try {
        this.state = 94;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            localctx = new NormalElementContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 61;
            this.match(JSXXParser.TagOpen);
            this.state = 62;
            this.match(JSXXParser.TagInsideName);
            this.state = 66;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===JSXXParser.TagInsideName) {
                this.state = 63;
                this.attribute();
                this.state = 68;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 69;
            this.match(JSXXParser.TagClose);
            this.state = 70;
            this.content();
            this.state = 71;
            this.match(JSXXParser.TagOpen);
            this.state = 72;
            this.match(JSXXParser.TagSlash);
            this.state = 73;
            this.match(JSXXParser.TagInsideName);
            this.state = 74;
            this.match(JSXXParser.TagClose);
            break;

        case 2:
            localctx = new VoidElementContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 76;
            this.match(JSXXParser.TagOpen);
            this.state = 77;
            this.match(JSXXParser.TagInsideName);
            this.state = 81;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===JSXXParser.TagInsideName) {
                this.state = 78;
                this.attribute();
                this.state = 83;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 84;
            this.match(JSXXParser.TagSlashClose);
            break;

        case 3:
            localctx = new VoidElementContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 85;
            this.match(JSXXParser.TagOpen);
            this.state = 86;
            this.match(JSXXParser.TagInsideName);
            this.state = 90;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===JSXXParser.TagInsideName) {
                this.state = 87;
                this.attribute();
                this.state = 92;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 93;
            this.match(JSXXParser.TagClose);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ContentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSXXParser.RULE_content;
    return this;
}

ContentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ContentContext.prototype.constructor = ContentContext;

ContentContext.prototype.charData = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CharDataContext);
    } else {
        return this.getTypedRuleContext(CharDataContext,i);
    }
};

ContentContext.prototype.element = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ElementContext);
    } else {
        return this.getTypedRuleContext(ElementContext,i);
    }
};

ContentContext.prototype.reference = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ReferenceContext);
    } else {
        return this.getTypedRuleContext(ReferenceContext,i);
    }
};

ContentContext.prototype.comment = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CommentContext);
    } else {
        return this.getTypedRuleContext(CommentContext,i);
    }
};

ContentContext.prototype.stmt = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StmtContext);
    } else {
        return this.getTypedRuleContext(StmtContext,i);
    }
};

ContentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSXXParserVisitor ) {
        return visitor.visitContent(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JSXXParser.ContentContext = ContentContext;

JSXXParser.prototype.content = function() {

    var localctx = new ContentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, JSXXParser.RULE_content);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 97;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===JSXXParser.HTMLWhitespace || _la===JSXXParser.HTMLText) {
            this.state = 96;
            this.charData();
        }

        this.state = 110;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 103;
                this._errHandler.sync(this);
                switch(this._input.LA(1)) {
                case JSXXParser.TagOpen:
                    this.state = 99;
                    this.element();
                    break;
                case JSXXParser.HTMLCharRef:
                    this.state = 100;
                    this.reference();
                    break;
                case JSXXParser.MultiLineComment:
                case JSXXParser.SingleLineComment:
                case JSXXParser.HTMLComment:
                    this.state = 101;
                    this.comment();
                    break;
                case JSXXParser.HTMLExprOpen:
                case JSXXParser.AttrExprOpen:
                    this.state = 102;
                    this.stmt();
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                }
                this.state = 106;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===JSXXParser.HTMLWhitespace || _la===JSXXParser.HTMLText) {
                    this.state = 105;
                    this.charData();
                }
         
            }
            this.state = 112;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSXXParser.RULE_stmt;
    return this;
}

StmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StmtContext.prototype.constructor = StmtContext;

StmtContext.prototype.forStmt = function() {
    return this.getTypedRuleContext(ForStmtContext,0);
};

StmtContext.prototype.ifStmt = function() {
    return this.getTypedRuleContext(IfStmtContext,0);
};

StmtContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

StmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSXXParserVisitor ) {
        return visitor.visitStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JSXXParser.StmtContext = StmtContext;

JSXXParser.prototype.stmt = function() {

    var localctx = new StmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, JSXXParser.RULE_stmt);
    try {
        this.state = 116;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 113;
            this.forStmt();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 114;
            this.ifStmt();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 115;
            this.expr();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ForStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSXXParser.RULE_forStmt;
    return this;
}

ForStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForStmtContext.prototype.constructor = ForStmtContext;

ForStmtContext.prototype.forBegin = function() {
    return this.getTypedRuleContext(ForBeginContext,0);
};

ForStmtContext.prototype.content = function() {
    return this.getTypedRuleContext(ContentContext,0);
};

ForStmtContext.prototype.endExpr = function() {
    return this.getTypedRuleContext(EndExprContext,0);
};

ForStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSXXParserVisitor ) {
        return visitor.visitForStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JSXXParser.ForStmtContext = ForStmtContext;

JSXXParser.prototype.forStmt = function() {

    var localctx = new ForStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, JSXXParser.RULE_forStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 118;
        this.forBegin();
        this.state = 119;
        this.content();
        this.state = 120;
        this.endExpr();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ForBeginContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSXXParser.RULE_forBegin;
    return this;
}

ForBeginContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForBeginContext.prototype.constructor = ForBeginContext;

ForBeginContext.prototype.exprOpen = function() {
    return this.getTypedRuleContext(ExprOpenContext,0);
};

ForBeginContext.prototype.For = function() {
    return this.getToken(JSXXParser.For, 0);
};

ForBeginContext.prototype.In = function() {
    return this.getToken(JSXXParser.In, 0);
};

ForBeginContext.prototype.singleExpr = function() {
    return this.getTypedRuleContext(SingleExprContext,0);
};

ForBeginContext.prototype.exprClose = function() {
    return this.getTypedRuleContext(ExprCloseContext,0);
};

ForBeginContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(JSXXParser.Identifier);
    } else {
        return this.getToken(JSXXParser.Identifier, i);
    }
};


ForBeginContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSXXParserVisitor ) {
        return visitor.visitForBegin(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JSXXParser.ForBeginContext = ForBeginContext;

JSXXParser.prototype.forBegin = function() {

    var localctx = new ForBeginContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, JSXXParser.RULE_forBegin);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 122;
        this.exprOpen();
        this.state = 123;
        this.match(JSXXParser.For);
        this.state = 130;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case JSXXParser.Identifier:
            this.state = 124;
            this.match(JSXXParser.Identifier);
            break;
        case JSXXParser.OpenParen:
            this.state = 125;
            this.match(JSXXParser.OpenParen);
            this.state = 126;
            this.match(JSXXParser.Identifier);
            this.state = 127;
            this.match(JSXXParser.Comma);
            this.state = 128;
            this.match(JSXXParser.Identifier);
            this.state = 129;
            this.match(JSXXParser.CloseParen);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 132;
        this.match(JSXXParser.In);
        this.state = 133;
        this.singleExpr(0);
        this.state = 134;
        this.exprClose();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprOpenContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSXXParser.RULE_exprOpen;
    return this;
}

ExprOpenContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprOpenContext.prototype.constructor = ExprOpenContext;

ExprOpenContext.prototype.HTMLExprOpen = function() {
    return this.getToken(JSXXParser.HTMLExprOpen, 0);
};

ExprOpenContext.prototype.AttrExprOpen = function() {
    return this.getToken(JSXXParser.AttrExprOpen, 0);
};

ExprOpenContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSXXParserVisitor ) {
        return visitor.visitExprOpen(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JSXXParser.ExprOpenContext = ExprOpenContext;

JSXXParser.prototype.exprOpen = function() {

    var localctx = new ExprOpenContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, JSXXParser.RULE_exprOpen);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 136;
        _la = this._input.LA(1);
        if(!(_la===JSXXParser.HTMLExprOpen || _la===JSXXParser.AttrExprOpen)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprCloseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSXXParser.RULE_exprClose;
    return this;
}

ExprCloseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprCloseContext.prototype.constructor = ExprCloseContext;


ExprCloseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSXXParserVisitor ) {
        return visitor.visitExprClose(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JSXXParser.ExprCloseContext = ExprCloseContext;

JSXXParser.prototype.exprClose = function() {

    var localctx = new ExprCloseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, JSXXParser.RULE_exprClose);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 138;
        this.match(JSXXParser.ExprClose);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EndExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSXXParser.RULE_endExpr;
    return this;
}

EndExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EndExprContext.prototype.constructor = EndExprContext;

EndExprContext.prototype.exprOpen = function() {
    return this.getTypedRuleContext(ExprOpenContext,0);
};

EndExprContext.prototype.End = function() {
    return this.getToken(JSXXParser.End, 0);
};

EndExprContext.prototype.exprClose = function() {
    return this.getTypedRuleContext(ExprCloseContext,0);
};

EndExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSXXParserVisitor ) {
        return visitor.visitEndExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JSXXParser.EndExprContext = EndExprContext;

JSXXParser.prototype.endExpr = function() {

    var localctx = new EndExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, JSXXParser.RULE_endExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 140;
        this.exprOpen();
        this.state = 141;
        this.match(JSXXParser.End);
        this.state = 142;
        this.exprClose();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IfStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSXXParser.RULE_ifStmt;
    return this;
}

IfStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfStmtContext.prototype.constructor = IfStmtContext;

IfStmtContext.prototype.ifBegin = function() {
    return this.getTypedRuleContext(IfBeginContext,0);
};

IfStmtContext.prototype.content = function() {
    return this.getTypedRuleContext(ContentContext,0);
};

IfStmtContext.prototype.endExpr = function() {
    return this.getTypedRuleContext(EndExprContext,0);
};

IfStmtContext.prototype.elseif = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ElseifContext);
    } else {
        return this.getTypedRuleContext(ElseifContext,i);
    }
};

IfStmtContext.prototype.elseBranch = function() {
    return this.getTypedRuleContext(ElseBranchContext,0);
};

IfStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSXXParserVisitor ) {
        return visitor.visitIfStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JSXXParser.IfStmtContext = IfStmtContext;

JSXXParser.prototype.ifStmt = function() {

    var localctx = new IfStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, JSXXParser.RULE_ifStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 144;
        this.ifBegin();
        this.state = 145;
        this.content();
        this.state = 149;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 146;
                this.elseif(); 
            }
            this.state = 151;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
        }

        this.state = 153;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        if(la_===1) {
            this.state = 152;
            this.elseBranch();

        }
        this.state = 155;
        this.endExpr();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IfBeginContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSXXParser.RULE_ifBegin;
    return this;
}

IfBeginContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfBeginContext.prototype.constructor = IfBeginContext;

IfBeginContext.prototype.exprOpen = function() {
    return this.getTypedRuleContext(ExprOpenContext,0);
};

IfBeginContext.prototype.If = function() {
    return this.getToken(JSXXParser.If, 0);
};

IfBeginContext.prototype.singleExpr = function() {
    return this.getTypedRuleContext(SingleExprContext,0);
};

IfBeginContext.prototype.exprClose = function() {
    return this.getTypedRuleContext(ExprCloseContext,0);
};

IfBeginContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSXXParserVisitor ) {
        return visitor.visitIfBegin(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JSXXParser.IfBeginContext = IfBeginContext;

JSXXParser.prototype.ifBegin = function() {

    var localctx = new IfBeginContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, JSXXParser.RULE_ifBegin);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 157;
        this.exprOpen();
        this.state = 158;
        this.match(JSXXParser.If);
        this.state = 159;
        this.singleExpr(0);
        this.state = 160;
        this.exprClose();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ElseifContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSXXParser.RULE_elseif;
    return this;
}

ElseifContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElseifContext.prototype.constructor = ElseifContext;

ElseifContext.prototype.exprOpen = function() {
    return this.getTypedRuleContext(ExprOpenContext,0);
};

ElseifContext.prototype.Elseif = function() {
    return this.getToken(JSXXParser.Elseif, 0);
};

ElseifContext.prototype.singleExpr = function() {
    return this.getTypedRuleContext(SingleExprContext,0);
};

ElseifContext.prototype.exprClose = function() {
    return this.getTypedRuleContext(ExprCloseContext,0);
};

ElseifContext.prototype.content = function() {
    return this.getTypedRuleContext(ContentContext,0);
};

ElseifContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSXXParserVisitor ) {
        return visitor.visitElseif(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JSXXParser.ElseifContext = ElseifContext;

JSXXParser.prototype.elseif = function() {

    var localctx = new ElseifContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, JSXXParser.RULE_elseif);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 162;
        this.exprOpen();
        this.state = 163;
        this.match(JSXXParser.Elseif);
        this.state = 164;
        this.singleExpr(0);
        this.state = 165;
        this.exprClose();
        this.state = 166;
        this.content();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ElseBranchContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSXXParser.RULE_elseBranch;
    return this;
}

ElseBranchContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElseBranchContext.prototype.constructor = ElseBranchContext;

ElseBranchContext.prototype.exprOpen = function() {
    return this.getTypedRuleContext(ExprOpenContext,0);
};

ElseBranchContext.prototype.Else = function() {
    return this.getToken(JSXXParser.Else, 0);
};

ElseBranchContext.prototype.exprClose = function() {
    return this.getTypedRuleContext(ExprCloseContext,0);
};

ElseBranchContext.prototype.content = function() {
    return this.getTypedRuleContext(ContentContext,0);
};

ElseBranchContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSXXParserVisitor ) {
        return visitor.visitElseBranch(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JSXXParser.ElseBranchContext = ElseBranchContext;

JSXXParser.prototype.elseBranch = function() {

    var localctx = new ElseBranchContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, JSXXParser.RULE_elseBranch);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 168;
        this.exprOpen();
        this.state = 169;
        this.match(JSXXParser.Else);
        this.state = 170;
        this.exprClose();
        this.state = 171;
        this.content();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AttributeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSXXParser.RULE_attribute;
    return this;
}

AttributeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AttributeContext.prototype.constructor = AttributeContext;

AttributeContext.prototype.TagInsideName = function() {
    return this.getToken(JSXXParser.TagInsideName, 0);
};

AttributeContext.prototype.AttrEquals = function() {
    return this.getToken(JSXXParser.AttrEquals, 0);
};

AttributeContext.prototype.AttrVal = function() {
    return this.getToken(JSXXParser.AttrVal, 0);
};

AttributeContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

AttributeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSXXParserVisitor ) {
        return visitor.visitAttribute(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JSXXParser.AttributeContext = AttributeContext;

JSXXParser.prototype.attribute = function() {

    var localctx = new AttributeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, JSXXParser.RULE_attribute);
    try {
        this.state = 180;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 173;
            this.match(JSXXParser.TagInsideName);
            this.state = 174;
            this.match(JSXXParser.AttrEquals);
            this.state = 175;
            this.match(JSXXParser.AttrVal);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 176;
            this.match(JSXXParser.TagInsideName);
            this.state = 177;
            this.match(JSXXParser.AttrEquals);
            this.state = 178;
            this.expr();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 179;
            this.match(JSXXParser.TagInsideName);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSXXParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.singleExpr = function() {
    return this.getTypedRuleContext(SingleExprContext,0);
};

ExprContext.prototype.HTMLExprOpen = function() {
    return this.getToken(JSXXParser.HTMLExprOpen, 0);
};

ExprContext.prototype.AttrExprOpen = function() {
    return this.getToken(JSXXParser.AttrExprOpen, 0);
};

ExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSXXParserVisitor ) {
        return visitor.visitExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JSXXParser.ExprContext = ExprContext;

JSXXParser.prototype.expr = function() {

    var localctx = new ExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, JSXXParser.RULE_expr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 182;
        _la = this._input.LA(1);
        if(!(_la===JSXXParser.HTMLExprOpen || _la===JSXXParser.AttrExprOpen)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 183;
        this.singleExpr(0);
        this.state = 184;
        this.match(JSXXParser.ExprClose);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SingleExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSXXParser.RULE_singleExpr;
    return this;
}

SingleExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SingleExprContext.prototype.constructor = SingleExprContext;


 
SingleExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function MultiplyExprContext(parser, ctx) {
	SingleExprContext.call(this, parser);
    this.op = null; // Token;
    SingleExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultiplyExprContext.prototype = Object.create(SingleExprContext.prototype);
MultiplyExprContext.prototype.constructor = MultiplyExprContext;

JSXXParser.MultiplyExprContext = MultiplyExprContext;

MultiplyExprContext.prototype.singleExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExprContext);
    } else {
        return this.getTypedRuleContext(SingleExprContext,i);
    }
};

MultiplyExprContext.prototype.Divide = function() {
    return this.getToken(JSXXParser.Divide, 0);
};
MultiplyExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSXXParserVisitor ) {
        return visitor.visitMultiplyExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AddExprContext(parser, ctx) {
	SingleExprContext.call(this, parser);
    this.op = null; // Token;
    SingleExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AddExprContext.prototype = Object.create(SingleExprContext.prototype);
AddExprContext.prototype.constructor = AddExprContext;

JSXXParser.AddExprContext = AddExprContext;

AddExprContext.prototype.singleExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExprContext);
    } else {
        return this.getTypedRuleContext(SingleExprContext,i);
    }
};
AddExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSXXParserVisitor ) {
        return visitor.visitAddExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function RelationalExprContext(parser, ctx) {
	SingleExprContext.call(this, parser);
    this.op = null; // Token;
    SingleExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RelationalExprContext.prototype = Object.create(SingleExprContext.prototype);
RelationalExprContext.prototype.constructor = RelationalExprContext;

JSXXParser.RelationalExprContext = RelationalExprContext;

RelationalExprContext.prototype.singleExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExprContext);
    } else {
        return this.getTypedRuleContext(SingleExprContext,i);
    }
};

RelationalExprContext.prototype.LessThan = function() {
    return this.getToken(JSXXParser.LessThan, 0);
};

RelationalExprContext.prototype.MoreThan = function() {
    return this.getToken(JSXXParser.MoreThan, 0);
};
RelationalExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSXXParserVisitor ) {
        return visitor.visitRelationalExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LogicalAndExprContext(parser, ctx) {
	SingleExprContext.call(this, parser);
    this.op = null; // Token;
    SingleExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LogicalAndExprContext.prototype = Object.create(SingleExprContext.prototype);
LogicalAndExprContext.prototype.constructor = LogicalAndExprContext;

JSXXParser.LogicalAndExprContext = LogicalAndExprContext;

LogicalAndExprContext.prototype.singleExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExprContext);
    } else {
        return this.getTypedRuleContext(SingleExprContext,i);
    }
};
LogicalAndExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSXXParserVisitor ) {
        return visitor.visitLogicalAndExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MemberIndexExprContext(parser, ctx) {
	SingleExprContext.call(this, parser);
    SingleExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MemberIndexExprContext.prototype = Object.create(SingleExprContext.prototype);
MemberIndexExprContext.prototype.constructor = MemberIndexExprContext;

JSXXParser.MemberIndexExprContext = MemberIndexExprContext;

MemberIndexExprContext.prototype.singleExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExprContext);
    } else {
        return this.getTypedRuleContext(SingleExprContext,i);
    }
};
MemberIndexExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSXXParserVisitor ) {
        return visitor.visitMemberIndexExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LogicalOrExprContext(parser, ctx) {
	SingleExprContext.call(this, parser);
    this.op = null; // Token;
    SingleExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LogicalOrExprContext.prototype = Object.create(SingleExprContext.prototype);
LogicalOrExprContext.prototype.constructor = LogicalOrExprContext;

JSXXParser.LogicalOrExprContext = LogicalOrExprContext;

LogicalOrExprContext.prototype.singleExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExprContext);
    } else {
        return this.getTypedRuleContext(SingleExprContext,i);
    }
};
LogicalOrExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSXXParserVisitor ) {
        return visitor.visitLogicalOrExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EqualityExprContext(parser, ctx) {
	SingleExprContext.call(this, parser);
    this.op = null; // Token;
    SingleExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EqualityExprContext.prototype = Object.create(SingleExprContext.prototype);
EqualityExprContext.prototype.constructor = EqualityExprContext;

JSXXParser.EqualityExprContext = EqualityExprContext;

EqualityExprContext.prototype.singleExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExprContext);
    } else {
        return this.getTypedRuleContext(SingleExprContext,i);
    }
};
EqualityExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSXXParserVisitor ) {
        return visitor.visitEqualityExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MemberDotExprContext(parser, ctx) {
	SingleExprContext.call(this, parser);
    SingleExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MemberDotExprContext.prototype = Object.create(SingleExprContext.prototype);
MemberDotExprContext.prototype.constructor = MemberDotExprContext;

JSXXParser.MemberDotExprContext = MemberDotExprContext;

MemberDotExprContext.prototype.singleExpr = function() {
    return this.getTypedRuleContext(SingleExprContext,0);
};

MemberDotExprContext.prototype.Identifier = function() {
    return this.getToken(JSXXParser.Identifier, 0);
};
MemberDotExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSXXParserVisitor ) {
        return visitor.visitMemberDotExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IdentifierExprContext(parser, ctx) {
	SingleExprContext.call(this, parser);
    SingleExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdentifierExprContext.prototype = Object.create(SingleExprContext.prototype);
IdentifierExprContext.prototype.constructor = IdentifierExprContext;

JSXXParser.IdentifierExprContext = IdentifierExprContext;

IdentifierExprContext.prototype.Identifier = function() {
    return this.getToken(JSXXParser.Identifier, 0);
};
IdentifierExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSXXParserVisitor ) {
        return visitor.visitIdentifierExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FunCallExprContext(parser, ctx) {
	SingleExprContext.call(this, parser);
    SingleExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FunCallExprContext.prototype = Object.create(SingleExprContext.prototype);
FunCallExprContext.prototype.constructor = FunCallExprContext;

JSXXParser.FunCallExprContext = FunCallExprContext;

FunCallExprContext.prototype.singleExpr = function() {
    return this.getTypedRuleContext(SingleExprContext,0);
};

FunCallExprContext.prototype.arguments = function() {
    return this.getTypedRuleContext(ArgumentsContext,0);
};
FunCallExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSXXParserVisitor ) {
        return visitor.visitFunCallExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LiteralExprContext(parser, ctx) {
	SingleExprContext.call(this, parser);
    SingleExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LiteralExprContext.prototype = Object.create(SingleExprContext.prototype);
LiteralExprContext.prototype.constructor = LiteralExprContext;

JSXXParser.LiteralExprContext = LiteralExprContext;

LiteralExprContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};
LiteralExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSXXParserVisitor ) {
        return visitor.visitLiteralExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ParenExprContext(parser, ctx) {
	SingleExprContext.call(this, parser);
    SingleExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParenExprContext.prototype = Object.create(SingleExprContext.prototype);
ParenExprContext.prototype.constructor = ParenExprContext;

JSXXParser.ParenExprContext = ParenExprContext;

ParenExprContext.prototype.singleExpr = function() {
    return this.getTypedRuleContext(SingleExprContext,0);
};
ParenExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSXXParserVisitor ) {
        return visitor.visitParenExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function TernaryExprContext(parser, ctx) {
	SingleExprContext.call(this, parser);
    SingleExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TernaryExprContext.prototype = Object.create(SingleExprContext.prototype);
TernaryExprContext.prototype.constructor = TernaryExprContext;

JSXXParser.TernaryExprContext = TernaryExprContext;

TernaryExprContext.prototype.singleExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExprContext);
    } else {
        return this.getTypedRuleContext(SingleExprContext,i);
    }
};
TernaryExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSXXParserVisitor ) {
        return visitor.visitTernaryExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



JSXXParser.prototype.singleExpr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new SingleExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 30;
    this.enterRecursionRule(localctx, 30, JSXXParser.RULE_singleExpr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 193;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case JSXXParser.Identifier:
            localctx = new IdentifierExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 187;
            this.match(JSXXParser.Identifier);
            break;
        case JSXXParser.NullLiteral:
        case JSXXParser.UndefinedLiteral:
        case JSXXParser.BooleanLiteral:
        case JSXXParser.IntegerLiteral:
        case JSXXParser.HexIntegerLiteral:
        case JSXXParser.RealLiteral:
        case JSXXParser.StringLiteral:
            localctx = new LiteralExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 188;
            this.literal();
            break;
        case JSXXParser.OpenParen:
            localctx = new ParenExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 189;
            this.match(JSXXParser.OpenParen);
            this.state = 190;
            this.singleExpr(0);
            this.state = 191;
            this.match(JSXXParser.CloseParen);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 231;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 229;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new MultiplyExprContext(this, new SingleExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, JSXXParser.RULE_singleExpr);
                    this.state = 195;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 196;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (JSXXParser.Multiply - 33)) | (1 << (JSXXParser.Divide - 33)) | (1 << (JSXXParser.Modulus - 33)))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 197;
                    this.singleExpr(11);
                    break;

                case 2:
                    localctx = new AddExprContext(this, new SingleExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, JSXXParser.RULE_singleExpr);
                    this.state = 198;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 199;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===JSXXParser.Plus || _la===JSXXParser.Minus)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 200;
                    this.singleExpr(10);
                    break;

                case 3:
                    localctx = new RelationalExprContext(this, new SingleExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, JSXXParser.RULE_singleExpr);
                    this.state = 201;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 202;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (JSXXParser.LessThan - 36)) | (1 << (JSXXParser.MoreThan - 36)) | (1 << (JSXXParser.LessThanEquals - 36)) | (1 << (JSXXParser.GreaterThanEquals - 36)))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 203;
                    this.singleExpr(9);
                    break;

                case 4:
                    localctx = new EqualityExprContext(this, new SingleExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, JSXXParser.RULE_singleExpr);
                    this.state = 204;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 205;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===JSXXParser.ExprEquals || _la===JSXXParser.NotEquals)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 206;
                    this.singleExpr(8);
                    break;

                case 5:
                    localctx = new LogicalAndExprContext(this, new SingleExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, JSXXParser.RULE_singleExpr);
                    this.state = 207;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 208;
                    localctx.op = this.match(JSXXParser.And);
                    this.state = 209;
                    this.singleExpr(7);
                    break;

                case 6:
                    localctx = new LogicalOrExprContext(this, new SingleExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, JSXXParser.RULE_singleExpr);
                    this.state = 210;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 211;
                    localctx.op = this.match(JSXXParser.Or);
                    this.state = 212;
                    this.singleExpr(6);
                    break;

                case 7:
                    localctx = new TernaryExprContext(this, new SingleExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, JSXXParser.RULE_singleExpr);
                    this.state = 213;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 214;
                    this.match(JSXXParser.QuestionMark);
                    this.state = 215;
                    this.singleExpr(0);
                    this.state = 216;
                    this.match(JSXXParser.Colon);
                    this.state = 217;
                    this.singleExpr(5);
                    break;

                case 8:
                    localctx = new MemberIndexExprContext(this, new SingleExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, JSXXParser.RULE_singleExpr);
                    this.state = 219;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 220;
                    this.match(JSXXParser.OpenBracket);
                    this.state = 221;
                    this.singleExpr(0);
                    this.state = 222;
                    this.match(JSXXParser.CloseBracket);
                    break;

                case 9:
                    localctx = new MemberDotExprContext(this, new SingleExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, JSXXParser.RULE_singleExpr);
                    this.state = 224;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 225;
                    this.match(JSXXParser.Dot);
                    this.state = 226;
                    this.match(JSXXParser.Identifier);
                    break;

                case 10:
                    localctx = new FunCallExprContext(this, new SingleExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, JSXXParser.RULE_singleExpr);
                    this.state = 227;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 228;
                    this.arguments();
                    break;

                } 
            }
            this.state = 233;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function ArgumentsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSXXParser.RULE_arguments;
    return this;
}

ArgumentsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgumentsContext.prototype.constructor = ArgumentsContext;

ArgumentsContext.prototype.argumentList = function() {
    return this.getTypedRuleContext(ArgumentListContext,0);
};

ArgumentsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSXXParserVisitor ) {
        return visitor.visitArguments(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JSXXParser.ArgumentsContext = ArgumentsContext;

JSXXParser.prototype.arguments = function() {

    var localctx = new ArgumentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, JSXXParser.RULE_arguments);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 234;
        this.match(JSXXParser.OpenParen);
        this.state = 236;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 27)) & ~0x1f) == 0 && ((1 << (_la - 27)) & ((1 << (JSXXParser.OpenParen - 27)) | (1 << (JSXXParser.NullLiteral - 27)) | (1 << (JSXXParser.UndefinedLiteral - 27)) | (1 << (JSXXParser.BooleanLiteral - 27)) | (1 << (JSXXParser.IntegerLiteral - 27)) | (1 << (JSXXParser.HexIntegerLiteral - 27)) | (1 << (JSXXParser.RealLiteral - 27)) | (1 << (JSXXParser.Identifier - 27)) | (1 << (JSXXParser.StringLiteral - 27)))) !== 0)) {
            this.state = 235;
            this.argumentList();
        }

        this.state = 238;
        this.match(JSXXParser.CloseParen);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArgumentListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSXXParser.RULE_argumentList;
    return this;
}

ArgumentListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgumentListContext.prototype.constructor = ArgumentListContext;

ArgumentListContext.prototype.singleExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExprContext);
    } else {
        return this.getTypedRuleContext(SingleExprContext,i);
    }
};

ArgumentListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSXXParserVisitor ) {
        return visitor.visitArgumentList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JSXXParser.ArgumentListContext = ArgumentListContext;

JSXXParser.prototype.argumentList = function() {

    var localctx = new ArgumentListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, JSXXParser.RULE_argumentList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 240;
        this.singleExpr(0);
        this.state = 245;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===JSXXParser.Comma) {
            this.state = 241;
            this.match(JSXXParser.Comma);
            this.state = 242;
            this.singleExpr(0);
            this.state = 247;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSXXParser.RULE_literal;
    return this;
}

LiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;

LiteralContext.prototype.NullLiteral = function() {
    return this.getToken(JSXXParser.NullLiteral, 0);
};

LiteralContext.prototype.UndefinedLiteral = function() {
    return this.getToken(JSXXParser.UndefinedLiteral, 0);
};

LiteralContext.prototype.BooleanLiteral = function() {
    return this.getToken(JSXXParser.BooleanLiteral, 0);
};

LiteralContext.prototype.StringLiteral = function() {
    return this.getToken(JSXXParser.StringLiteral, 0);
};

LiteralContext.prototype.numericLiteral = function() {
    return this.getTypedRuleContext(NumericLiteralContext,0);
};

LiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSXXParserVisitor ) {
        return visitor.visitLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JSXXParser.LiteralContext = LiteralContext;

JSXXParser.prototype.literal = function() {

    var localctx = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, JSXXParser.RULE_literal);
    var _la = 0; // Token type
    try {
        this.state = 250;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case JSXXParser.NullLiteral:
        case JSXXParser.UndefinedLiteral:
        case JSXXParser.BooleanLiteral:
        case JSXXParser.StringLiteral:
            this.enterOuterAlt(localctx, 1);
            this.state = 248;
            _la = this._input.LA(1);
            if(!(((((_la - 46)) & ~0x1f) == 0 && ((1 << (_la - 46)) & ((1 << (JSXXParser.NullLiteral - 46)) | (1 << (JSXXParser.UndefinedLiteral - 46)) | (1 << (JSXXParser.BooleanLiteral - 46)) | (1 << (JSXXParser.StringLiteral - 46)))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;
        case JSXXParser.IntegerLiteral:
        case JSXXParser.HexIntegerLiteral:
        case JSXXParser.RealLiteral:
            this.enterOuterAlt(localctx, 2);
            this.state = 249;
            this.numericLiteral();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NumericLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSXXParser.RULE_numericLiteral;
    return this;
}

NumericLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumericLiteralContext.prototype.constructor = NumericLiteralContext;

NumericLiteralContext.prototype.IntegerLiteral = function() {
    return this.getToken(JSXXParser.IntegerLiteral, 0);
};

NumericLiteralContext.prototype.HexIntegerLiteral = function() {
    return this.getToken(JSXXParser.HexIntegerLiteral, 0);
};

NumericLiteralContext.prototype.RealLiteral = function() {
    return this.getToken(JSXXParser.RealLiteral, 0);
};

NumericLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSXXParserVisitor ) {
        return visitor.visitNumericLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JSXXParser.NumericLiteralContext = NumericLiteralContext;

JSXXParser.prototype.numericLiteral = function() {

    var localctx = new NumericLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, JSXXParser.RULE_numericLiteral);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 252;
        _la = this._input.LA(1);
        if(!(((((_la - 49)) & ~0x1f) == 0 && ((1 << (_la - 49)) & ((1 << (JSXXParser.IntegerLiteral - 49)) | (1 << (JSXXParser.HexIntegerLiteral - 49)) | (1 << (JSXXParser.RealLiteral - 49)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CommentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSXXParser.RULE_comment;
    return this;
}

CommentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CommentContext.prototype.constructor = CommentContext;

CommentContext.prototype.MultiLineComment = function() {
    return this.getToken(JSXXParser.MultiLineComment, 0);
};

CommentContext.prototype.SingleLineComment = function() {
    return this.getToken(JSXXParser.SingleLineComment, 0);
};

CommentContext.prototype.HTMLComment = function() {
    return this.getToken(JSXXParser.HTMLComment, 0);
};

CommentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSXXParserVisitor ) {
        return visitor.visitComment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JSXXParser.CommentContext = CommentContext;

JSXXParser.prototype.comment = function() {

    var localctx = new CommentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, JSXXParser.RULE_comment);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 254;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JSXXParser.MultiLineComment) | (1 << JSXXParser.SingleLineComment) | (1 << JSXXParser.HTMLComment))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ReferenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSXXParser.RULE_reference;
    return this;
}

ReferenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReferenceContext.prototype.constructor = ReferenceContext;

ReferenceContext.prototype.HTMLCharRef = function() {
    return this.getToken(JSXXParser.HTMLCharRef, 0);
};

ReferenceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSXXParserVisitor ) {
        return visitor.visitReference(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JSXXParser.ReferenceContext = ReferenceContext;

JSXXParser.prototype.reference = function() {

    var localctx = new ReferenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, JSXXParser.RULE_reference);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 256;
        this.match(JSXXParser.HTMLCharRef);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CharDataContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSXXParser.RULE_charData;
    return this;
}

CharDataContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CharDataContext.prototype.constructor = CharDataContext;

CharDataContext.prototype.HTMLText = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(JSXXParser.HTMLText);
    } else {
        return this.getToken(JSXXParser.HTMLText, i);
    }
};


CharDataContext.prototype.HTMLWhitespace = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(JSXXParser.HTMLWhitespace);
    } else {
        return this.getToken(JSXXParser.HTMLWhitespace, i);
    }
};


CharDataContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSXXParserVisitor ) {
        return visitor.visitCharData(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JSXXParser.CharDataContext = CharDataContext;

JSXXParser.prototype.charData = function() {

    var localctx = new CharDataContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, JSXXParser.RULE_charData);
    var _la = 0; // Token type
    try {
        this.state = 268;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case JSXXParser.HTMLText:
            this.enterOuterAlt(localctx, 1);
            this.state = 259; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 258;
                this.match(JSXXParser.HTMLText);
                this.state = 261; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===JSXXParser.HTMLText);
            break;
        case JSXXParser.HTMLWhitespace:
            this.enterOuterAlt(localctx, 2);
            this.state = 264; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 263;
                this.match(JSXXParser.HTMLWhitespace);
                this.state = 266; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===JSXXParser.HTMLWhitespace);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MiscContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSXXParser.RULE_misc;
    return this;
}

MiscContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MiscContext.prototype.constructor = MiscContext;

MiscContext.prototype.comment = function() {
    return this.getTypedRuleContext(CommentContext,0);
};

MiscContext.prototype.HTMLWhitespace = function() {
    return this.getToken(JSXXParser.HTMLWhitespace, 0);
};

MiscContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSXXParserVisitor ) {
        return visitor.visitMisc(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JSXXParser.MiscContext = MiscContext;

JSXXParser.prototype.misc = function() {

    var localctx = new MiscContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, JSXXParser.RULE_misc);
    try {
        this.state = 272;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case JSXXParser.MultiLineComment:
        case JSXXParser.SingleLineComment:
        case JSXXParser.HTMLComment:
            this.enterOuterAlt(localctx, 1);
            this.state = 270;
            this.comment();
            break;
        case JSXXParser.HTMLWhitespace:
            this.enterOuterAlt(localctx, 2);
            this.state = 271;
            this.match(JSXXParser.HTMLWhitespace);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


JSXXParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 15:
			return this.singleExpr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

JSXXParser.prototype.singleExpr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 10);
		case 1:
			return this.precpred(this._ctx, 9);
		case 2:
			return this.precpred(this._ctx, 8);
		case 3:
			return this.precpred(this._ctx, 7);
		case 4:
			return this.precpred(this._ctx, 6);
		case 5:
			return this.precpred(this._ctx, 5);
		case 6:
			return this.precpred(this._ctx, 4);
		case 7:
			return this.precpred(this._ctx, 13);
		case 8:
			return this.precpred(this._ctx, 12);
		case 9:
			return this.precpred(this._ctx, 11);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.JSXXParser = JSXXParser;
