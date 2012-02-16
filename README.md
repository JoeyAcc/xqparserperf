# xqparserperf 
==============

A comparison of XQuery engine performance running the XQuery parser from xquerydoc project. 
The test parses the XQuery program string "2+3"

The XQuery version

````
import module namespace p="XQueryV30" at "XQueryV30.xq";
p:parse-XQuery("2+3")
````

A node version is in the node folder. 
````
node node/app.js
````

Blog at http://cubeb.blogspot.com/search/label/xqueryperf
