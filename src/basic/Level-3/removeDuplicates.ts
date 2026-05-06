export function removeDuplicates(nums: number[]): number {
    // here in this code write used to build the array and via explore we scans through the array and in last we return the write means total number of dulpictes 
    if(nums.length === 0) return 0;

    let write = 1;

    for(let explore = 1; explore < nums.length; explore++){
        if(nums[explore] !== nums[explore - 1]){
            nums[write] = nums[explore]!;
            write++;
        }
    }

    console.log(nums);
    return write;
};