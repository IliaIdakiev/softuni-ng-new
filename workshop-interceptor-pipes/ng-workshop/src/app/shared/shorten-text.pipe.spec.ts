import { ShortenTextPipe } from './shorten-text.pipe';

describe('ShortenTextPipe', () => {
  it('create an instance', () => {
    const pipe = new ShortenTextPipe();
    expect(pipe).toBeTruthy();
  });
});
