const fs = require("fs")

fs.writeFile("message.txt","hello from node.js!!", (err) => {
    if(err)  throw err;
    console.log("The File has Been Saved")
});

fs.readFile("message.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
  