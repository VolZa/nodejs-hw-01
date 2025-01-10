import { PATH_DB } from '../constants/contacts.js';
import fs  from 'fs/promises';

export const writeContacts = async (updatedContacts) => {
    try {
        await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
        return updatedContacts;
    } catch (error) {
        console.error('Error writing contacts:', error);
        throw error;
    }    
};

// Виклик функції
// const contacts = [
//     { id: 1, name: 'Halyna', phone: '+380501234567' },
//     { id: 2, name: 'Andrii', phone: '+380671234567' }
// ];

// await writeContacts(contacts);

export default writeContacts;