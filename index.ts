import { findSmallest } from "./src/basic/Level-1-Array_Basics/smallest.ts";
import { findLargest } from "./src/basic/Level-1-Array_Basics/largest.ts";
import { secondLargest } from "./src/basic/Level-1-Array_Basics/secondLargest.ts";
import { reverseArray } from "./src/basic/Level-1-Array_Basics/reverseArray.ts";
import { linearSearch } from "./src/basic/Level-1-Array_Basics/linearSearch.ts";
import { secondSmallest } from "./src/basic/Level-1-Array_Basics/secondSmallest.ts";
import { isSorted } from "./src/basic/Level-2/isSorted.ts";
import { removeDuplicate } from "./src/basic/Level-2/removeDuplicate.ts";
import { moveZeros } from "./src/basic/Level-2/moveZeros.ts";
import { CountEvenOddNumber } from "./src/basic/Level-2/CountEvenOddNumber.ts";
import { FindMaximumDifferenceBetweenTwoElements } from "./src/basic/Level-2/FindMaximumDifferenceBetweenTwoElements.ts";
import { RotateAarrayBy1Position } from "./src/basic/Level-2/RotateAarrayBy1Position.ts";
import { missingNumber } from "./src/basic/Level-2/missingNumber.ts";

console.log(findSmallest([5, 2, 9, 1, 7]));
console.log(findSmallest([10, 20, 30]));
console.log(findSmallest([-1, -5, 0]));
console.log(findLargest([4, 9, 2, 7]));
console.log(secondLargest([4, 9, 2, 7]));
console.log("reversing the array")
console.log(reverseArray([1, 2, 3, 4]));
console.log("Searching number through linear search...")
console.log(linearSearch([5, 8, 2, 10], 2));
console.log("finding second Smallest....");
console.log(secondSmallest([4, 1, 9, 2]));

console.log("Checking array is sorted or not....");
console.log(isSorted([1, 2, 3, 4]));
console.log(isSorted([1, 2, 3, 5]));

console.log(removeDuplicate([1,1,2,2,3,4]));
// console.log(moveZeros([1,0,2,0,3,4]));
console.log(CountEvenOddNumber([1,3,5,7,2,4]));
console.log(FindMaximumDifferenceBetweenTwoElements([1,2,7,8,9,10]));
console.log(RotateAarrayBy1Position([1,2,7,8,9,10]));
console.log(missingNumber([1,2,4,5,6,7]));
