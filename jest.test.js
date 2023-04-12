// describe("voteTally", () => {
//     it("returns the tally for votes1", () => {
//       expect(voteTally(votes1)).toEqual(11)
//     })
//     it("returns the tally for votes2", () => {
//       expect(voteTally(votes2)).toEqual(-31)
//     })

//   })
//   const votes1 = { upVotes: 13, downVotes: 2 }
  
//   const votes2 = { upVotes: 2, downVotes: 33 }

//   const voteTally = (votes) => {
//     return votes.upVotes - votes.downVotes
  
//   } 

//   const mergedArray = (...arrays) => {
//     const mergedArray = [].concat(...arrays)
//     const differentArray = Array.from(new Set(mergedArray))
//     return differentArray
    
//   }

    // describe("returns an array with no duplicate values", () => {
    //   it("returns the expected output", () => {
    //     expect(mergedArray).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
    //   })
    // })


   
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// a) Create a test with an expect statement using the variables provided.

// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// a) Create a test with an expect statement using the variables provided.

// describe("mergeArrays", () => {
//     it("merges and removes duplicates from two arrays", () => {
//       const dataArray1 = ["array", "object", "number", "string", "Boolean"]
//       const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
//       const result = mergeArrays(dataArray1, dataArray2);
//       const expected = ["array", "object", "number", "string", "Boolean", "null", "undefined"]
//       expect(result).toEqual(expected)
//     })
//   })
  
//   // b) Create the function that makes the test pass.
//   const mergeArrays = (...arrays) => {
//     const mergedArray = [].concat(...arrays)
//     const differentArray = Array.from(new Set(mergedArray))
//     return differentArray;
//   }

// describe("shuffleArrayWithoutFirstItem", () => {
//     it("shuffles an array without its first item", () => {
//       const colors1 = ["purple", "blue", "green", "yellow", "pink"];
//       const shuffledColors1 = shuffleWithoutFirstItem(colors1);
//       expect(shuffledColors1).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
  
//       const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
//       const shuffledColors2 = shuffleWithoutFirstItem(colors2)
//       expect(shuffledColors2).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
//     })
//   }) // output:  FAIL  ./jest.test.js
//   ● shuffleArrayWithoutFirstItem › shuffles an array without its first item

//     ReferenceError: shuffleWithoutFirstItem is not defined

//       60 |     it("shuffles an array without its first item", () => {
//       61 |       const colors1 = ["purple", "blue", "green", "yellow", "pink"];
//     > 62 |       const shuffledColors1 = shuffleWithoutFirstItem(colors1);
//          |                               ^
//       63 |       expect(shuffledColors1).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
//       64 |   
//       65 |       const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]

// b) Create the function that makes the test pass.

