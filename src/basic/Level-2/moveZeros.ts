export function moveZeros(arr: number[]): number[] {
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
      console.log("before swap",arr);
    if (arr[j] !== 0) {
        console.log("before swap arr[j]",arr[j]);
        let temp = arr[i];
        console.log("before swap arr[i]",arr[i]);
        arr[i] = arr[j]!;
        console.log("after swap arr[i]",arr[i]);
        arr[j] = temp!;
        console.log("after swap arr[j]",arr[j]);
        console.log(arr[j]);
        i++;
        console.log(i);
        console.log(arr);
    }
  }
  return arr;
}
