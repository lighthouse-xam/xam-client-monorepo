import { BASE_URL } from '@client/axios';
import { rest } from 'msw';

import { postDB } from '../databases';

export const postHandler = [
  rest.get(`${BASE_URL}/api/v1/posts`, (req, res, ctx) => {
    const tokenWithBearer = req.headers.get('authorization');

    if (!tokenWithBearer) return res(ctx.status(401));

    const token = tokenWithBearer.split('Bearer ')[1];

    if (token === 'jest' || new Date(token) > new Date()) {
      return res(ctx.json(postDB.post.findMany({ orderBy: { createAt: 'desc' } })));
    } else {
      return res(ctx.status(401, 'EXPIRED_TOKEN'));
    }
  }),
  rest.get(`${BASE_URL}/api/v1/posts/:id`, (req, res, ctx) => {
    const tokenWithBearer = req.headers.get('authorization');
    if (!tokenWithBearer) return res(ctx.status(401));

    const token = tokenWithBearer.split('Bearer ')[1];

    if (new Date(token) > new Date()) {
      const { id } = req.params;
      const notice =
        typeof id === 'string' && postDB.post.findFirst({ where: { id: { equals: id } } });
      if (notice) {
        return res(ctx.json(notice));
      } else {
        return res(ctx.status(404));
      }
    } else {
      return res(ctx.status(401, 'EXPIRED_TOKEN'));
    }
  }),
];
