const fs = require("fs");

// reading files
// asynchronous
// fs.readFile("./docs/blog1.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

// console.log("last line");

// writing files
// asynchronous
// fs.writeFile("./docs/blog1.txt", "hello world", () => {
//   console.log("file was written");
// });

// directories

// if (!fs.existsSync("./assets")) {
//   // asynchronous
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder created");
//   });
// } else {
//   fs.rmdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder deleted");
//   });
// }

// deleting files

if (fs.existsSync("./docs/deletme.txt")) {
  fs.unlink("./docs/deletme.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
}
