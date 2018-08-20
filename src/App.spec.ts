import * as supertest from 'supertest'
import app from './App'

describe('App', () => {
  it('online', () =>
    supertest(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200)
  )
})

describe('POST /test', function() {
  it('respond with json result', function(done) {
    supertest(app)
      .post('/test')
      .set('Content-Type', 'text/plain')
      .send('Hello World!')
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect({result: true}, done)
  });
});
