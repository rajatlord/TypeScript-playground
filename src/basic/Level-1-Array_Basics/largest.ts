export function findLargest(arr: number[]): number {
  if (arr.length === 0) {
    throw new Error("Array cannot be empty");
  }

  let largest = arr[0]!;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i]! > largest) {
      largest = arr[i]!;
    }
  }

  return largest;
}
