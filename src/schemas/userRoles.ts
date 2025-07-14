import { rolesSchema } from './roles';
import { usersSchema } from './users';
import { pgTable, primaryKey, timestamp, uuid } from 'drizzle-orm/pg-core';

const userRolesSchema = pgTable(
  'user_roles',
  {
    userUuid: uuid('user_uuid')
      .notNull()
      .references(() => usersSchema.uuid),
    roleUuid: uuid('role_uuid')
      .notNull()
      .references(() => rolesSchema.uuid),

    createdAt: timestamp('created_at', { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => [primaryKey({ columns: [table.userUuid, table.roleUuid] })],
);

export default userRolesSchema;
