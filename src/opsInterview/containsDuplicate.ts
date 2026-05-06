export function containsDuplicate(nums: number[]): boolean {

    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = 0; j < nums.length; j++) {
    //         if (i !== j && nums[i] === nums[j]) {
    //             return true;
    //         }
    //     }

    // }

    // return false;
    // nums.sort((a,b)=> a-b);

    // for(let i =0; i < nums.length; i++){
    //     if(nums[i] === nums[i-1]){
    //         return true;
    //     }
    // }

    // return false;

     // o(n)
    let set = new Set<number>();

    for(let i = 0; i < nums.length; i++){
        if(set.has(nums[i]!)){
            return true;
        }

        set.add(nums[i]!);
    }

    return false;
};