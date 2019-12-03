const typeWriter = function(sentence) {
  let delay = 0;
  for (let i = 0; i < sentence.length; i++, delay += 50) {
    if (i < sentence.length - 1) {
        setTimeout(() => {
          process.stdout.write(sentence[i]);
        },delay);
    } else {
      setTimeout(() => {
        process.stdout.write(sentence[i]);
        console.log('\n');
      },delay);
    }
  }
}

const sentence = "hello there from lighthouse labs";
typeWriter(sentence)
