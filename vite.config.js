// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     rollupOptions: {
//       external: ["react", "react-dom"], // Add your external dependencies here
//     },
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["lucide-react"],
      external: ["react-router-dom"], // Explicitly mark it as external if needed
    },
  },
});
