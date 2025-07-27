// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    setupFiles:['./src/setupTests.ts'],
    globals:true,
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}'],
    // setupFilesAfterEnv: ['./src/setupTests.ts'],
  },
});
