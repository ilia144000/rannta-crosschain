import { PricingEngine } from '../packages/gateway/src/finance/pricing-engine';

describe('Financial Engine Calculations', () => {
  test('should correctly calculate total cost (Gas + Markup)', async () => {
    const amount = '1000';
    const network = 'ETHEREUM';
    const tier = 'L1';

    const quote = await PricingEngine.getQuote(amount, network, tier);

    console.log('--- Financial Quote Details ---');
    console.log('Network:', quote.network);
    console.log('Gas Fee:', quote.gasFee);
    console.log('Service Fee (Markup):', quote.serviceFee);
    console.log('Total Cost:', quote.totalCost);

    const expectedTotal = parseFloat(quote.gasFee) + parseFloat(quote.serviceFee);
    expect(parseFloat(quote.totalCost)).toBeCloseTo(expectedTotal, 6);
  });
});
