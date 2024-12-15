import test from 'ava';
import request from 'supertest';
import app from '../index.js'; // Χρησιμοποιούμε το export default από το index.js

// Serial tests για την αποφυγή συγκρούσεων στο state του app
test.serial('GET /users returns 200 and a list of users', async (t) => {
    const res = await request(app).get('/users');
    t.is(res.status, 200);
    t.true(Array.isArray(res.body));
});

test.serial('POST /users creates a new user', async (t) => {
    const newUser = { name: 'John Doe' };
    const res = await request(app).post('/users').send(newUser);
    t.is(res.status, 201);
    t.is(res.body.message, 'User created');
    t.is(res.body.user.name, 'John Doe');
});

test.serial('DELETE /users/:id deletes a user', async (t) => {
    const res = await request(app).delete('/users/1');
    t.is(res.status, 204);
});
