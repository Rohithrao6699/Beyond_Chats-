import { defineConfig } from "vite";
import { config } from "dotenv";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

config();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.VITE_BASE_PATH || "/Beyond_Chats-",
});
