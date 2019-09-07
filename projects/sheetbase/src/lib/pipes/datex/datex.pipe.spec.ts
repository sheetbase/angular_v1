import { DatexPipe } from './datex.pipe';

const fakeDateService: any = {};

describe('DatexPipe', () => {
  it('create an instance', () => {
    const pipe = new DatexPipe(fakeDateService);
    expect(pipe).toBeTruthy();
  });
});
