export function maxProfit(prices: number[]): number {

    // o(n2)
    // let profit = 0;
    // for (let i = 0; i < prices.length; i++) {
    //     for (let j = i +1 ; j < prices.length; j++) {
    //         let currProfit  = prices[j] - prices[i]
    //         if(currProfit  > profit ){
    //             profit = currProfit;
    //         }
    //     }
    // }
    // return profit;

    // o(n)
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {

        if (prices[i]! < minPrice!) {
            minPrice = prices[i];
        }

        let profit = prices[i]! - minPrice!;

        if (profit > maxProfit) {
            maxProfit = profit;
        }

    }

    return maxProfit;
};