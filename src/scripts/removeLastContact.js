import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { countContacts } from './countContacts.js';

export const removeLastContact = async () => {
    const count = await countContacts();

    if (count > 0) {
    const contacts = await readContacts();
    contacts.pop(); // Видаляємо останній елемент
    
    await writeContacts(contacts);
    console.log("Кінцевий контакт видалено");    
    } else {
        console.log('Немає контактів для видалення.');
    }
};

removeLastContact();
