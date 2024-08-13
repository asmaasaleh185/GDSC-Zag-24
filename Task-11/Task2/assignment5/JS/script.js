let start = performance.now();

for (let i = 0; i < 100000; i++) {
  console.log(i);
}

let end = performance.now();

let duration = Math.floor(end - start);

console.log(`Loop Took ${duration} Milliseconds.`);