import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const PATH_DB = join(__dirname, '..' , 'db', 'db.json'); //'src',
