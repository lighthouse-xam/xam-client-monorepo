import { BASE_URL } from '@client/axios';
import { rest } from 'msw';

export const authHandler = [
  rest.post(`${BASE_URL}/api/v2/auth/login`, async (req, res, ctx) => {
    const body = await req.json();
    if (body.email === 'test' && body.password === '1') {
      return res(
        ctx.json({
          refreshToken: new Date(Date.now() + 60 * 60 * 1000 * 60).toString(),
          accessToken: new Date(Date.now() + 20 * 1000 * 60 * 60).toString(),
        })
      );
    } else {
      return res(ctx.status(400));
    }
  }),
  rest.post(`${BASE_URL}/api/v2/auth/logout`, (req, res, ctx) => {
    return res(ctx.json(true));
  }),
  rest.post(`${BASE_URL}/api/v2/auth/refresh`, async (req, res, ctx) => {
    const body = await req.json();

    const token = body.refreshToken;
    if (!token) return res(ctx.status(403));

    console.log('*************************', +new Date(token) - +new Date());

    if (new Date(token) > new Date()) {
      return res(
        ctx.delay(1000),
        ctx.json({
          refreshToken: new Date(Date.now() + 60 * 60 * 1000).toString(),
          accessToken: new Date(Date.now() + 20 * 1000).toString(),
        })
      );
    } else {
      return res(ctx.status(403, 'EXPIRED_TOKEN'));
    }
  }),
];
