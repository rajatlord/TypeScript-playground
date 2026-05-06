export function missingNumber(arr:number[]){

    // this is the brute force
    // let n = arr.length;

    // for(let num = 0; num < n; num++){
    //     let found = false;
    //     for(let i =0; i < n ; i++){
    //         if(arr[i] === num){
    //             found = true;
    //             break;
    //         }
    //     }

    //     if(!found)return num;
    // }

    // return -1;

    // now optimal one here we are using the sum formula and then subtract from the actul sum is and then return the differnce as the missing number

    let n = arr.length-1;
    let expectedSum  = (n*(n+1))/2;
    let actualSum  = 0;
    for(let i =0; i < n ; i++){
        actualSum  += arr[i]!;
    }

    return expectedSum - actualSum ;
}