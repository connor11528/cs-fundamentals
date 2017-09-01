// The indices are the time in minutes past trade opening time, which was 9:30am local time.
// The values are the price in dollars of Apple stock at that time.

// Write an efficient function that takes stockPricesYesterday and returns the 
// best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

var stockPricesYesterday = [14, 7, 5, 8, 11, 4]; // 6 (buying for $5 and selling for $11)
var stockPricesToday = [14, 7, 5, 3, 2, 1]; // -1
var otherDay = [29, 54, 1, 3, 2, 32]; // 31
var lastWeek = [3, 100, 1, 3, 2, 32]; // 97

var profit = getMaxProfit(stockPricesToday);
console.log(profit);

// Description:
//=========

// A greedy algorithm iterates through problem space taking the optimal solution
// so far. We're going to greedily walk through the array and track max profit and 
// lowest price so far.

// for every price we check if we can get a better profit buying at minPrice 
// and selling at current price

// we start by initializing minPrice as the first price
// and maxProfit as the first profit we could get

function getMaxProfit(prices){
	var minPrice = prices[0];
	var maxProfit = prices[1] - prices[0];

	for(var i = 1; i < prices.length; i++){
		var currentPrice = prices[i];
		var potentialProfit = currentPrice - minPrice;

		if(maxProfit < potentialProfit){
			maxProfit = potentialProfit;
		}

		if(currentPrice < minPrice){
			minPrice = currentPrice; 
		}
	}
	return maxProfit;
}




////// brute force O(n^2) implementation:
//=========

// function getMaxProfit(prices){
// 	var profit, profits = [];

// 	for(var i = 0; i < prices.length; i++){
// 		var bought = prices[i];
// 		var selling = prices.slice(i+1);
// 		profit = prices[i + 1] - bought;

// 		for(var j = 0; j < selling.length; j++){
// 			if((selling[j] - bought) > profit){
// 				profit = selling[j] - bought;
// 			}
// 		}

// 		if(!isNaN(profit)) profits.push(profit);
// 	}
// 	profits.sort((a,b)=>a-b)
// 	return profits[profits.length - 1];
// }





