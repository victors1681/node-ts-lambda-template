import { handler } from 'src/index';

describe('Sample test', () => {
  it('fist unit test', async () => {
    const ctx = {} as any;
    const callback = () => 0;
    const response = await handler({ test: '123' }, ctx, callback);
    expect(response).toMatchObject({
      body: '"this is my first test"',
      statusCode: 200,
    });
  });
});
