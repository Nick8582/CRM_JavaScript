import {thead} from "./thead.js";
import {tbody} from "./tbody.js";

const table = document.createElement('table');
table.classList.add('table__content');
table.append(thead);
table.append(tbody);

export {table}
