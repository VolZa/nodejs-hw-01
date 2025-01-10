import { PATH_DB } from '../constants/contacts.js';
import fs  from 'fs/promises';
// const fs = require("fs/promises");

export const readContacts = async () => {
    try {
        const list = await fs.readFile(PATH_DB, "utf-8");
        return JSON.parse(list);
    }  catch (error) {
        console.error('Помилка читання файлу:', error.message);
        return [];
    }
};

// console.log('PATH_DB:', PATH_DB);

// Використання readContacts
// (async () => {
//     const contacts = await readContacts();
//     console.log(contacts);
//   })();

export default readContacts;