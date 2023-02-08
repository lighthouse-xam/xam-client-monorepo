import { authHandler } from './auth.handler';
import { postHandler } from './post.handler';
import { userHandler } from './user.handler';

export const handlers = [...authHandler, ...postHandler, ...userHandler];
