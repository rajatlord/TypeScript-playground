export function RotateAarrayBy1Position(arr: number[]): number[] {
  let temp = arr[0];
  // for right roatation
  // let temp = arr[arr.length -1];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i]!;
  }
  // for right
  // for(let i = arr.length -1; i > 0 ; i--){
  // arr[i] = arr[i-1];
  // }
  // arr[0] = temp;
  arr[arr.length - 1] = temp!;

  return arr;
}
