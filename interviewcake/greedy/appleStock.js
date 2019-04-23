// stockPrices: indices are time in minutes past trade open time. 
// Values are price in dollars

// Most profit from one purchase and one sale.


const stockPrices = [10, 7, 5, 8, 11, 9];

console.log(getMaxProfit(stockPrices)); // Returns 6 (buying for $5 and selling for $11)

function getMaxProfit(stockPrices){
	if(stockPrices.length < 2){
		return null;
	}

	let minPrice = stockPrices[0];

	let maxProfit = stockPrices[1] - stockPrices[0];

	for(let i = 1; i < stockPrices.length; i++){
		let currentPrice    = stockPrices[i];
		let potentialProfit = currentPrice - minPrice;

		maxProfit = Math.max(maxProfit, potentialProfit);

		minPrice = Math.min(minPrice, currentPrice);
	}

	return maxProfit;
}


// O(n) time complexity, O(1) space.