const request = require('supertest');
const app = require('./index');

describe('GET /wowrack', () => {
  it('response text `test 123`', async () => {
    const res = await request(app).get('/test');

    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("selamat pagi");
  });
});

afterAll(() => {
  app.close();
});
