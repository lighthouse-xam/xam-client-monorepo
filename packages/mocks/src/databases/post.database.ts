import { factory, primaryKey } from '@mswjs/data';
import { v4 } from 'uuid';

export const postDB = factory({
  post: {
    id: primaryKey(() => v4()),
    title: () => '제목',
    contents: () => '내용',
    createAt: () => String(new Date()),
  },
});

postDB.post.create({});
