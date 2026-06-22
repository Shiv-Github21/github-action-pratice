// app.js

const os = require("os");
const path = require("path");

const userName = "Shiv";

console.log("===== System Information =====");
console.log("User:", userName);
console.log("Operating System:", os.platform());
console.log("CPU Architecture:", os.arch());
console.log("Hostname:", os.hostname());
console.log(
  "Total Memory:",
  Math.round(os.totalmem() / (1024 * 1024 * 1024)),
  "GB"
);

console.log("\n===== Current Project =====");
console.log("Current Directory:", process.cwd());
console.log("File Name:", path.basename(__filename));

console.log("\nApplication Started Successfully!");
