// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray
  // Pseudocode:
    // Given 2 arrays
    // Create describe function named "shuffleWithoutFirstItem"
    // The first test will check to see if the function correctly shuffles the elements in the input but leaving out the first element
    // The second test will check to make sure the new array returns the remaining colors in a random order and if it contains the items from the expected output
    // Use 'expect.arrayContaining to check if the colors are the same as the expected output
    // 



    describe("shuffleWithoutFirstItem", () => {
      it("shuffles an array without its first item", () => {
        const colors1 = ["purple", "blue", "green", "yellow", "pink"]
        const shuffledColors1 = shuffleWithoutFirstItem(colors1)
        expect(shuffledColors1).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
    
        const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
        const shuffledColors2 = shuffleWithoutFirstItem(colors2)
        expect(shuffledColors2).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
      })
      }) // output:  FAIL  ./jest.test.js
      //   ● shuffleWithoutFirstItem › shuffles an array without its first item
      
      //     ReferenceError: shuffleWithoutFirstItem is not defined
      
      //       60 |     it("shuffles an array without its first item", () => {
      //       61 |       const colors1 = ["purple", "blue", "green", "yellow", "pink"];
      //     > 62 |       const shuffledColors1 = shuffleWithoutFirstItem(colors1);
      //          |                               ^
      //       63 |       expect(shuffledColors1).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
      //       64 |   
      //       65 |       const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]

// b) Create the function that makes the test pass.
      // Got stuck on the function
const shuffleWithoutFirstItem = (array) => {
  const firstItem = array.shift();
  const shuffled = array.sort(() => Math.random() - ???);
  // 
  return shuffled;
}


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.
const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
  
// Pseudocode:
    // Pseudocode:
    // Create "describe" function named 'voteTalley'
    // The first test will test the net amount of votes from votes1 which is 11 (13-2)
    // The second test will test the net amount of votes from votes2 which is -31 (2-33)
    // The voteTally function will subtract the "downVotes" from the "upVotes"
    // Output will be the expected values that were given to us

    describe("voteTally", () => {
      it("returns the tally for votes1", () => {
        expect(voteTally(votes1)).toEqual(11)
      })
      it("returns the tally for votes2", () => {
        expect(voteTally(votes2)).toEqual(-31)
      })

    }) // output:
  //   FAIL  ./jest.test.js
  //   ● voteTally › returns the tally for votes1
  
  //     ReferenceError: voteTally is not defined
  
  //        describe("voteTally", () => {
  //           it("returns the tally for votes1", () => {
  //           expect(voteTally(votes1)).toEqual(11)
        
  //       })
  //        it("returns the tally for votes2", () => {
  //         expect(voteTally(votes2)).toEqual(31)
  
  //       at Object.expect (jest.test.js:3:7)
  
  //   ● voteTally › returns the tally for votes2
  
  //     ReferenceError: voteTally is not defined
  
  //          })
  //          it("returns the tally for votes2", () => {
  //            expect(voteTally(votes2)).toEqual(31)
  //          ^
  //     })
  //  })
  
  //       at Object.expect (jest.test.js:6:7)
  
  // Test Suites: 2 failed, 2 total
  // Tests:       4 failed, 4 total
  // Snapshots:   0 total
  // Time:        0.16 s, estimated 1 s

// b) Create the function that makes the test pass.
const voteTally = (votes) => {
  return votes.upVotes - votes.downVotes

} //output:
//   PASS  ./code-challenges.test.js
//   PASS  ./jest.test.js
 
//  Test Suites: 2 passed, 2 total
//  Tests:       4 passed, 4 total
//  Snapshots:   0 total
//  Time:        0.138 s, estimated 1 s


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

  // Pseudocode:
    // Given 2 arrays 
    // Create describe function named mergeArrays. In that function, we will define the expected output, the result, and the given arrays
    // Use the spread operator to put all of the values from the arrays into a single array
    // Use .concat() to add both arrays into a single array called "mergedArray"
    // Use Array.from to to create a new copy of the array that we concatted
    // Use "Set" to automatically remove the duplicate values in mergedArray
    // Assign the new array to 'differentArray'
    // Output will be the expected values

describe("mergeArrays", () => {
  it("merges and removes duplicates from two arrays", () => {
    const dataArray1 = ["array", "object", "number", "string", "Boolean"]
    const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
    const result = mergeArrays(dataArray1, dataArray2);
    const expected = ["array", "object", "number", "string", "Boolean", "null", "undefined"]
        expect(result).toEqual(expected)
      })
    }) //output:  FAIL  ./code-challenges.test.js
    // ● mergeArrays › merges and removes duplicates from two arrays

    //   ReferenceError: mergeArrays is not defined

    //     111 |     const dataArray1 = ["array", "object", "number", "string", "Boolean"]
    //     112 |     const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
    //   > 113 |     const result = mergeArrays(dataArray1, dataArray2);
    //         |                    ^
    //     114 |     const expected = ["array", "object", "number", "string", "Boolean", "null", "undefined"]
    //     115 |     expect(result).toEqual(expected)
    //     116 |   })

    //     at Object.mergeArrays (code-challenges.test.js:113:20)

    // b) Create the function that makes the test pass.
    const mergeArrays = (...arrays) => {
      const mergedArray = [].concat(...arrays)
      const differentArray = Array.from(new Set(mergedArray))
      return differentArray;
    } //output:  
    // PASS ./code-challenges.test.js
  //   PASS  ./jest.test.js
   
  //  Test Suites: 2 passed, 2 total
  //  Tests:       4 passed, 4 total
  //  Snapshots:   0 total
  //  Time:        0.199 s, estimated 1 s

