export function CountEvenOddNumber(arr: number[]): { evenCount: number; oddCount: number } {
  let evenCount = 0;
  let oddCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]! % 2 === 0) {
        evenCount++;
    }else{
        oddCount++;;
    }
  }
  return {evenCount, oddCount};
}
