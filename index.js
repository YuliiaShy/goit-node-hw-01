const contacts = require("./contacts");

async function contactsAction({action, id, name, email, phone}) {
    switch (action) {
      case "listContacts":
        const contactsList = await contacts.listContacts();
        console.log(contactsList);
        break;
      case "getContactById":
        const contact = await contacts.getContactById(id);
        console.log(contact);
        break;
      case "addContact":
        const contactAdd = await contacts.addContact(name, email, phone);
        console.log(contactAdd);
        break;
      case "removeContact":
        const contactRemove = await contacts.removeContact(id);
        console.log(contactRemove);
        break;
      default:
        console.log("Unknown action");
    }
}

// contactsAction({ action: "listContacts" });
// contactsAction({ action: "getContactById", id: "10" });
// contactsAction({ action: "addContact", name: "Alec Howard", email: "Donec.elementum@scelerisquescelerisquedui.net", phone: "(748) 206-2688" });
// contactsAction({ action: "removeContact", id: "10" });
