import { BridgeAggregator } from './finance/bridge-aggregator';
import { PriceCache } from './finance/price-cache';

async function updatePriceCache() {
  console.log('Updating price cache...');
  try {
    // Example: Fetching quote for Ethereum to Arbitrum
    const quote = await BridgeAggregator.getBestQuote('ETHEREUM', 'ARBITRUM', '100', 'ETH', 'ETH');
    PriceCache.save(quote);
    console.log('Cache updated successfully.');
  } catch (error) {
    console.error('Cache update failed:', error);
  }
}

// Run immediately on start
updatePriceCache();

// Run every 60 seconds (60000 milliseconds)
setInterval(updatePriceCache, 60000);

console.log('RANNTA Gateway Background Service Started...');
