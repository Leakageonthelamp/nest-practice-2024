import { rm } from 'fs';
import { join } from 'path';

global.beforeEach(async () => {
  rm(join(__dirname, '..', 'test.sqlite'), (err) => {
    if (err) {
      console.error(err);
    }
  });
});
