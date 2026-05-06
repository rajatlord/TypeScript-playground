export function thridLargestElement(arr: number[]): number {
  if (arr.length < 3) {
    throw new Error("Array must have at least 3 elements");
  }
  let largest = -Infinity;
  let secLargest = -Infinity;
  let thirLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]! > largest) {
      thirLargest = secLargest;
      secLargest = largest;
      largest = arr[i]!;
    } else if (arr[i]! > secLargest && arr[i] !== largest) {
      thirLargest = secLargest;
      secLargest = arr[i]!;
    } else if (
      arr[i]! > thirLargest &&
      arr[i] !== secLargest &&
      arr[i] !== largest
    ) {
      thirLargest = arr[i]!;
    }
  }
  if (thirLargest === -Infinity) {
    throw new Error("No third largest element (duplicates issue)");
  }

  return thirLargest;
}
