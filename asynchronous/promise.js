function getName(i) {
  let names = ['Jane', 'Jonny', 'Kim', 'Bali'];
  return new Promise((resolve, reject) => {
    if (i < 0 || i >= names.length) {
      reject('Bad index rejected');
      console.log('found bad index');
      return;
    }
    resolve(names[i]);
    console.log('do more stuff'); // Main thread
  });
}

function main() {
  getName(12) // Using a promise makes it async but need not necessarily make it better. For larger functions, there may be blockage
    .then((res) => console.log(res)) // These happen seperately on the worker thread. thats why it comes last
    .catch((err) => console.log(err)); // Same as above
  console.log('in main'); // In the main thread
}

main();
console.log('processing ... ');// main thread
