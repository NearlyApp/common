import { usersSchema } from "../../schemas/users";
import { InferSelectModel } from "drizzle-orm";

export type BaseUser = InferSelectModel<typeof usersSchema>;

export type User = Omit<BaseUser, "password">;

export type CreateUserData = Omit<
  BaseUser,
  "uuid" | "createdAt" | "updatedAt" | "deletedAt"
>;