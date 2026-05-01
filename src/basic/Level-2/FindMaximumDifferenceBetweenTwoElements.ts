// Find MaximumDifferenceBetweenTwoElements.ts
export function FindMaximumDifferenceBetweenTwoElements(arr:number[]):number{
    let maxDiff = 0;
    let minSoFar = arr[0]!;

    for(let i = 0; i < arr.length; i++ ){
        
        if(arr[i]! - minSoFar > maxDiff){
            maxDiff = arr[i]!;
        }

        if( arr[i]! < minSoFar){
            minSoFar = arr[i]!;
        }
    }

    return maxDiff;
}