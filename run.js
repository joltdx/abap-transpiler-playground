const fs = require("fs");
const path = require("path");

const day = process.argv[2];
console.log("# Playground " + day);

const files = fs.readdirSync("output").filter(n => n.includes("playground"+day) && n.endsWith(".clas.js"));
if (files.length !== 1) {
  throw "Class with this number not found";
}

const req = require("@abaplint/runtime");
global.abap = new req.ABAP();
const clas = require("." + path.sep + "output" + path.sep + files[0]);

const inputFile = "." + path.sep + "input" + path.sep + "playground" + day + ".txt";
try {
  const input = fs.readFileSync(inputFile).toString();
} catch (err) {
  input = '';
}
const className = Object.keys(clas)[0];
const instance = new clas[className]();
const methodName = Object.getOwnPropertyNames(clas[className].prototype).filter(m => m.endsWith("$rocknroll"))[0];
console.log("Class: " + className.toUpperCase());
console.log("Method: " + methodName.toUpperCase());
console.log("Input: " + inputFile);

const result = instance[methodName]( {input: input} );
const output = abap.console.get();
if (output && output !== "") {
  console.dir(output);
}

console.log("\nResult:")
console.log(result);