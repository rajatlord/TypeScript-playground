
export function reverseArray(arr:number[]):number[]{

    let left = 0 ;
    let right = arr.length - 1;
    
    while(left < right){
        let temp = arr[right];
        arr[right]= arr[left]!;
        arr[left] = temp!;

        left++;
        right--;
    }

    return arr;
}