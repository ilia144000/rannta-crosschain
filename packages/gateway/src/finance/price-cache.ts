import * as fs from 'fs';
import * as path from 'path';

export class PriceCache {
  // Path to the local cache file
  private static CACHE_PATH = path.join(__dirname, '../../../../cache/prices.json');

  static save(data: any) {
    try {
      const dir = path.dirname(this.CACHE_PATH);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(this.CACHE_PATH, JSON.stringify(data, null, 2));
    } catch (err) {
      console.error('Cache save error:', err);
    }
  }

  static get(): any {
    try {
      if (fs.existsSync(this.CACHE_PATH)) {
        return JSON.parse(fs.readFileSync(this.CACHE_PATH, 'utf-8'));
      }
    } catch (err) {
      return null;
    }
    return null;
  }
}
