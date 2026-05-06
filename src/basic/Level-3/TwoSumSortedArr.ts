export function TwoSumSortedArr(arr: number[], target: number): number[] {
  // this version can be optimized;
  //   let left = 0;
  //   let right = arr.length - 1;
  //   let result: number[] = [];
  //   while (left < right) {
  //     if (arr[left]! + arr[right]! === target) {
  //       result.push(arr[left]!);
  //       result.push(arr[right]!);
  //     }
  //     // left++;
  //     right--;
  //   }

  //   return result;

  // more potimized version
  console.log("This is Two sum sorted array version");
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left]! + arr[right]!;

    if (sum === target) {
    //   return [arr[left]!, arr[right]!];
    console.log(arr)
      return [left, right!];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
    console.log("Target not found");
  return [];

}
