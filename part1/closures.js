// these are the functions

/* 

remeber the environment they have created 

functions they can retain the variables which are declared outside of this 

a kind of function in which if any funcion is being created ot always retains its memory 


*/

function outer() {
  let counter = 0;
  return function () {
    counter++;
    return counter();
  };
}
let increment = outer();
console.log(increment());


//  you need to remember one thing 
