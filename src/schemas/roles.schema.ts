import { index, pgTable, uuid, varchar } from 'drizzle-orm/pg-core';

const rolesSchema = pgTable(
  'roles',
  {
    uuid: uuid('uuid').primaryKey().defaultRandom(),

    name: varchar('name', { length: 64 }).notNull().unique(),
  },
  (table) => [index('roles_name_index').on(table.name)],
);

export default rolesSchema;
