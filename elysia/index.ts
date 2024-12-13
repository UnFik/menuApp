// app/[[...slugs]]/route.ts
import { Elysia, t } from "elysia";
import productController from "./products/product.controller";

import cors, { HTTPMethod } from "@elysiajs/cors";
import swagger from "@elysiajs/swagger";

// // import { Logestic } from 'logestic';
// // import authRoutes from './auth';
// // import { authMiddleware } from './auth/middleware';

const corsConfig = {
  origin: "*",
  methods: ["GET", "POST", "PATCH", "DELETE", "PUT"] as HTTPMethod[],
  allowedHeaders: "*",
  exposedHeaders: "*",
  maxAge: 5,
  credentials: true,
};

const swaggerConfig = {
  documentation: {
    info: {
      title: "Next-Elysia API",
      description: "API documentation for Elysia",
      version: "1.0.0",
    },
  },
};

export const elysiaApp = new Elysia({ prefix: "/api" })
  .use(swagger(swaggerConfig))
  .use(cors(corsConfig))
  .use(productController)
  .onError(({ code, error }) => {
    console.log(code);
    return new Response(JSON.stringify({ error: error.toString() }), {
      status: 500,
    });
  });

export type TElysiaApp = typeof elysiaApp;
