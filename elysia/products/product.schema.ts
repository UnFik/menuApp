import { createInsertSchema, createSelectSchema } from "drizzle-typebox";
import { t, type Static } from "elysia";
import { products } from "@/db/schema";

export const productTypeInsert = createInsertSchema(products);
export const productTypeSelect = createSelectSchema(products);

export type ProductTypeInsert = Static<typeof productTypeInsert>;
export type ProductTypeSelect = Static<typeof productTypeSelect>;

