import { InferSelectModel } from 'drizzle-orm';
import { postsSchema } from '../../schemas/posts';
import { User } from '../users';

export type BasePost = InferSelectModel<typeof postsSchema>;

export type Post<withAuthor extends boolean = false> = withAuthor extends true
  ? BasePost & { likes: number; author: User }
  : BasePost & { likes: number };
