import { usersSchema } from "../../schemas/users";
import { InferSelectModel } from "drizzle-orm";

export type BaseUser = InferSelectModel<typeof usersSchema>;

export type User = Omit<BaseUser, "password">;
