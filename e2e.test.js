const request = require('supertest');
const app = require('./index');

describe('GET /test', () => {
  it('response text `test 123`', async () => {
    const res = await request(app).get('/test');

    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("test 123");
  });
});
