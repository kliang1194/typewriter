const sentence = "hello there from lighthouse labs";

const typewriter = function(sentence) {
  let time = 0;
  for (let char of sentence) {
    time += 50;
    setTimeout(() => {
      process.stdout.write(char);
    }, time);
  }
};

typewriter(sentence + "\n");