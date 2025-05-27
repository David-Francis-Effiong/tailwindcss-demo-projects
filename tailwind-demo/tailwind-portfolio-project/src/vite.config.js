import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()], // Use the Vite plugin approach
  // Remove the css.postcss section - not needed with the plugin
});
