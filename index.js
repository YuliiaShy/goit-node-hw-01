const { program } = require("commander");

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const contacts = require("./contacts");

async function invokeAction({ action, id, name, email, phone }) {
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
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
