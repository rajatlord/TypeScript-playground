export function findSmallest(arr: number[]): number {
  if (arr.length === 0) {
    throw new Error("Array cannot be empty");
  }

  let smallest = arr[0]!;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i]! < smallest) {
      smallest = arr[i]!;
    }
  }

  return smallest;
}
