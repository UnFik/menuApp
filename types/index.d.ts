import { categories, products } from "@/db/schema";
import { createInsertSchema, createSelectSchema } from "drizzle-typebox";
import { t, type Static } from "elysia";

export const categoryTypeInsert = createInsertSchema(categories);
export const categoryTypeSelect = createSelectSchema(categories);

export type CategoryTypeInsert = Static<typeof categoryTypeInsert>;
export type CategoryTypeSelect = Static<typeof categoryTypeSelect>;

export const productTypeInsert = createInsertSchema(products);
export const productTypeSelect = createSelectSchema(products);

export type ProductTypeInsert = Static<typeof productTypeInsert>;
export type ProductTypeSelect = Static<typeof productTypeSelect>;

export type ProductWithCategory = {
  products: ProductTypeSelect;
  categories: {
    id: number;
    name: string;
    description: string;
  } | null;
};

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}
