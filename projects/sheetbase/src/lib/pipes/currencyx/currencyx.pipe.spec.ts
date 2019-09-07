import { CurrencyxPipe } from './currencyx.pipe';

const fakeCurrencyService: any = {};

describe('CurrencyxPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyxPipe(fakeCurrencyService);
    expect(pipe).toBeTruthy();
  });
});
