// delebratly creating the delay in  the function execution

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = false; // True
      // if true it gors to the then()
      // if flase ( it goes to the catch() )
      if (success) {
        resolve("Data Fetched Successfully ");
      } else {
        reject("Error fetching the Data    ");
      }
    }, 3000);
  });
}

// let resopnse = fetchData()
// console.log(resopnse);
//  resolve ->  success    or else -> failure 
fetchData()
  .then((data) => console.log(data))
  // .then() - > chaining process 
  .catch((error) => console.log(error));

/* 
  
PS C:\Users\kedar\OneDrive\Documents\Accenture\Kedar\Advjs> node part1\promises.js
Promise { <pending> }
PS C:\Users\kedar\OneDrive\Documents\Accenture\Kedar\Advjs> node part1\promises.js
Data Fetched Successfully 
PS C:\Users\kedar\OneDrive\Documents\Accenture\Kedar\Advjs> node part1\promises.js
Error fetching the Data    
PS C:\Users\kedar\OneDrive\Documents\Accenture\Kedar\Advjs> 
  
  */
