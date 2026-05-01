export function removeDuplicate(arr: number[]): number {
  if (arr.length === 0) {
    throw new Error();
  }
  // this is the set method
//   const unique = new Set<number>();

//   for (let i = 0; i < arr.length; i++) {
//     unique.add(arr[i]!);
//   }

//   const uniqueArr = [...unique];
//   return uniqueArr;

  //   now 2 pointer method
  let left = 0;

  for(let right = 1; right < arr.length; right++){
    if(arr[right]! !== arr[left]){
        left++;
        arr[right] = arr[left]!;
    }
  }
  return left;
}
