import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Bot iniciado 🤖");

rl.on("line", (input) => {
  if (input === "hola") {
    console.log("Que quieres? 😈");
  } else if (input === "adios") {
    console.log("Largate pues 👋");
  } else {
    console.log("No entiendo 🤨");
  }
});
