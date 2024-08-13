let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];

let numbersCount = chars.filter((item) => typeof item === "number").length;

let letters = chars
  .filter((item) => typeof item === "string")
  .slice(0, numbersCount);

let result = [...letters, ...chars.filter((item) => typeof item === "string")];

console.log(result);
