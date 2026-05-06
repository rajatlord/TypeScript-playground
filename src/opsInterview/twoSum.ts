export function twoSum(nums: number[], target: number): number[] {
  // let arr: number[] = []
  // for(let i = 0; i < nums.length; i++){
  //     for(let j = i+1; j< nums.length; j++){
  //         if(i ===j ) continue;
  //         if(nums[i]+nums[j] === target ){
  //             arr.push(i);
  //             arr.push(j);
  //         }
  //     }
  // }
  // return arr;

  // o(n)
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    let remain = target - nums[i]!;

    if (map.has(remain)) {
      return [map.get(remain)!, i];
    }

    map.set(nums[i]!, i);
  }

  return [];
}
