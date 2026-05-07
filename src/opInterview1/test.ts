export function hello(arr: number[]): string[] {
    let res:string[] = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]! % 5 === 0 && arr[i]! % 3 === 0) {
      res.push("thanks");
    } else if (arr[i]! % 3 === 0) {
      res.push("hi");
    } else if (arr[i]! % 5 === 0 ) {
      res.push("hello");
    } else {
      res.push("none");
    }
  }

  return res;
}

// [10,2,15,3,5,1]