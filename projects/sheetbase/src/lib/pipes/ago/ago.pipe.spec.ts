import { AgoPipe } from './ago.pipe';

const fakeDateService: any = {};

describe('AgoPipe', () => {
  it('create an instance', () => {
    const pipe = new AgoPipe(fakeDateService);
    expect(pipe).toBeTruthy();
  });
});
