import { create } from "axios";

export const api = create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
