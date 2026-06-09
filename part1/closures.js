// these are the functions

/* 

remeber the environment they have created 

functions they can retain the variables which are declared outside of this 


*/

function outer() {
  let counter = 0;
  return function () {
    counter++;
    return counter();
  };
}

let increment = outer()

log
