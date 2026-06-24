import express from 'express';
import { BridgeAggregator } from './finance/bridge-aggregator';

const app = express();
const port = 3000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// ??? ??? ?????? ?? ???? ??? ???????? ?? ?? ???? ??
app.get('/api/quote', async (req, res) => {
  try {
    const data = await BridgeAggregator.getBestQuote('ETHEREUM', 'ARBITRUM', '100', 'ETH', 'ETH');
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to connect to blockchain aggregator' });
  }
});

app.listen(port, () => console.log('RANNTA Gateway: Direct network mode active on port 3000'));
