const fs = require('fs');

function someAsyncOperation() {
  fs.readFile('/path/to/file', function (err, data) {
    if (err) console.log('Read Error');
    else console.log('Data: ' + data);
  });
}

function foo() {
  console.log('foo');
}

someAsyncOperation();
foo();
console.log('done');
