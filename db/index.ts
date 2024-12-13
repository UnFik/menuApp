// import "dotenv/config";
// // import { logger } from "../common/logger";
// import { drizzle } from "drizzle-orm/node-postgres";
// import * as schema from "./schema";

// export const db = drizzle(process.env.DATABASE_URL!, {
//   schema: schema,
// });

import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";

config({ path: ".env" }); // or .env.local
const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle({ client: sql });
