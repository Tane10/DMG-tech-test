const app = require('../src/app')
const supertest = require('supertest')
const request = supertest(app)

describe("Auth service tests '/users/:userId', userIds are from /config/userIds.js", () => {

  test("if userID is valid it should return a JSON response with 'User logged in' as the message with a 200 status code", async () => {
    const userIDResponse = await request.get('/api/users/123');
    expect(userIDResponse.status).toBe(200);
    expect(userIDResponse.body.message).toBe('User logged in');
  })

  test("if userID is not valid it should return a JSON response with 'UserId not valid' and 401 status code", async () => {
    const userIDResponse = await request.get('/api/users/fishpole');
    expect(userIDResponse.status).toBe(401);
    expect(userIDResponse.body.message).toBe('UserId not valid');
  })
})