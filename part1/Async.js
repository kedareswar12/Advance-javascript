console.log("Kedareswar");

function NewFunc() { 
  console.log("Hi i will come after you see the browser");
}


setTimeout(() => {
  NewFunc()
}, 5000);
for (let index = 0; index < 11; index++) {
  console.log(index);
}


// asynchronous nature of the javascript 

/* 

It means having the pause in the language 
(time -> milli seconds )

1. Network Calls 
2. write/read files 
3. time function 

**************************************************************************************
**************************************************************************************
**************************************************************************************

console.log("Kedareswar");

function NewFunc() { 
  console.log("Hi i will come after you see the browser");
}


setTimeout(() => {
  NewFunc()
}, 5000);
for (let index = 0; index < 11; index++) {
  console.log(index);
}

**************************************************************************************
**************************************************************************************
**************************************************************************************

PS C:\Users\kedar\OneDrive\Documents\Accenture\Kedar\Advjs> node part1\Async.js
Kedareswar
0
1
2
3
4
5
6
7
8
9
10
Hi i will come after you see the browser
PS C:\Users\kedar\OneDrive\Documents\Accenture\Kedar\Advjs> 



see the output in the above case for the above mentioned code it is not in the sequennce not folloing the order set by me 



*/

