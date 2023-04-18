import {Header} from "./header/header.js";
import {Main} from "./main/main.js";
import {loadAPI} from "./setting/server.js";

const app = document.querySelector('#app');

//Главный файл
(() => {
  const h1 = document.createElement('h1');
  h1.textContent = 'Skb. CRM система';

  app.append(h1);
  app.append(Header);
  app.append(Main);

  loadAPI()
})()

export {app}
