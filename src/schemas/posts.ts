import {
  doublePrecision,
  index,
  pgTable,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core';
import { usersSchema } from './users';

export const postsSchema = pgTable(
  'posts',
  {
    uuid: uuid('uuid').primaryKey().defaultRandom(),
    authorUuid: uuid('author_uuid')
      .notNull()
      .references(() => usersSchema.uuid),
    parentPostUuid: uuid('parent_post_uuid').notNull(),

    content: text('content').notNull(),
    lat: doublePrecision('lat').notNull(),
    lng: doublePrecision('lng').notNull(),

    createdAt: timestamp('created_at', { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp('updated_at', { withTimezone: true })
      .notNull()
      .defaultNow(),
    deletedAt: timestamp('deleted_at', { withTimezone: true }),
  },
  (table) => [
    index('posts_author_uuid_index').on(table.authorUuid),
    index('posts_parent_post_uuid_index').on(table.parentPostUuid),
    index('posts_created_at_index').on(table.createdAt),
    index('posts_coords_index').on(table.lat, table.lng),
  ],
);
