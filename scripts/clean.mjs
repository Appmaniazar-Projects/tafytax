import { existsSync, rmSync } from 'fs';

const paths = ['out', '.next'];

for (const path of paths) {
  if (!existsSync(path)) continue;
  try {
    rmSync(path, {
      recursive: true,
      force: true,
      maxRetries: 5,
      retryDelay: 300,
    });
  } catch (err) {
    if (err.code === 'EPERM' || err.code === 'EBUSY') {
      console.error(
        `\nCould not delete "${path}". Stop "npm run dev" (and any process using that folder), then run the build again.\n`
      );
      process.exit(1);
    }
    throw err;
  }
}
