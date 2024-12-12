import "dotenv/config";
import { drizzle } from "drizzle-orm/mysql2";
import { eq } from "drizzle-orm";
import { usersTable } from "../db/schema";

const db = drizzle(process.env.DATABASE_URL!);

export type UserType = {
  name: string;
  age: number;
  email: string;
};

export default class User {
  async all() {
    return await db.select().from(usersTable);
  }

  async get(id: number) {
    return db.select().from(usersTable).where(eq(usersTable.id, id));
  }

  async create(user: UserType) {
    await db.insert(usersTable).values(user);
  }

  async update(id: number, user: Partial<UserType>) {
    return db.update(usersTable).set(user).where(eq(usersTable.id, id));
  }

  async delete(id: number) {
    return db.delete(usersTable).where(eq(usersTable.id, id));
  }
}
