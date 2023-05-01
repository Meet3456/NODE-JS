// CREATING A FILE FROM COMMAND LINE:

const fs = require("fs"); // fs - FileSystem
const input = process.argv; // The process.argv property returns an array containing the command-line arguments passed when the Node.js process was launched.
// fs.writeFileSync(input[2],input[3])

// second element i.e argv[1] - path to the JavaScript file being executed:
// further elements can be deciced manually by user:

if (input[2] == "add") {
  fs.writeFileSync(input[3], input[4]);
} else if (input[2] == "remove") {
  fs.unlinkSync(input[3]);
} else {
  console.log("Invalid Input");
}

// CREATING MULTIPLE FILES IN A GIIVEN FOLDER:

const path = require("path");
const pathdirectory = path.join(__dirname, "files"); // gives the path-directory of 'files' folder
console.warn(pathdirectory);

for (i = 0; i < 5; i++) {
  fs.writeFileSync(pathdirectory + `/hello${i}.txt`, "a simple text file"); // CREATES 5 FILES IN GIVEN PATH-DIRECTORY OF RESPECTIVE FOLDER:
}

fs.readdir(pathdirectory, (err, files) => {
  files.forEach((item) => {
    console.log("file name is:", item);
  });
});
