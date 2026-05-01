export function missingNumber(arr:number[]){
    let n = arr.length;

    for(let num = 0; num <= n; num++){
        let found = false;
        for(let i =0; i < n ; i++){
            if(arr[i] === num){
                found = true;
                break;
            }
        }

        if(!found)return num;
    }
}