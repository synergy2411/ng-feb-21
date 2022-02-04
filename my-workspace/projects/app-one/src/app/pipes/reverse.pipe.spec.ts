import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  // AAA

  let pipe: ReversePipe;

  beforeEach(() => {
    pipe = new ReversePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('Should revere the value', () => {
    expect(pipe.transform('hello')).toMatch('olleh');
  });
});
