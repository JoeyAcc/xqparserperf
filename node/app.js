var Xq=require("./xq3.js");
var out=[];
var parser=new Xq("2+3",out);
parser.parse_XQuery();
console.log(out.join("")); 
