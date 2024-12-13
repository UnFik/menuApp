import {
  pgTable,
  varchar,
  timestamp,
  uuid,
  integer,
  serial,
  numeric,
  real
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const categories = pgTable("categories", {
  id: serial("id").primaryKey().notNull(),
  name: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }).notNull(),
});

export const products = pgTable("products", {
  id: uuid("id")
    .primaryKey()
    .notNull()
    .default(sql`gen_random_uuid()`),
  name: varchar({ length: 255 }).notNull(), 
  description: varchar({ length: 255 }).notNull(),
  price: integer().notNull(),
  image: varchar({ length: 255 }).notNull(),
  rating: real().notNull(),
  
  categoryId: integer("category_id")
    .notNull()
    .references(() => categories.id),
    
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updateAt: timestamp("update_at")
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
});


