import { PATH_DB } from '../constants/contacts.js';
import fs  from 'fs/promises';

export const readContacts = async () => {
    try {
        const list = await fs.readFile(PATH_DB, "utf-8");
        return JSON.parse(list);
    }  catch (error) {
        console.error('Помилка читання файлу:', error.message);
        return [];
    }
};

export default readContacts;