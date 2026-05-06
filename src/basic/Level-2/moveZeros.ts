export function moveZeros(arr: number[]): number[] {
  // let i = 0;
  // for (let j = 0; j < arr.length; j++) {
  //   if (arr[j] !== 0) {
  //       let temp = arr[i];
  //       arr[i] = arr[j]!;
  //       arr[j] = temp!;
  //       i++;
  //   }
  // }
  // return arr;

  const temp: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      temp.push(arr[i]!);
    }
  }

  let nz = temp.length;

  for (let i = 0; i < nz; i++) {
    arr[i] = temp[i]!;
  }

  for (let i = nz; i < arr.length; i++) {
    arr[i] = 0;
  }

  return arr;
}
// [1,2,3,0]
