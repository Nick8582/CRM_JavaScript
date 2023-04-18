import {loadServer, tbody} from "../main/tbody.js";
import {fillterBtn} from "../function.js";

const API_URL = 'http://localhost:3000/api/clients';

async function loadAPI() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    loadServer(null, data)
    fillterBtn()
  } catch (error) {
    loadServer(error)
  }
}

async function deleteClient(data) {
  await fetch(API_URL+`/${data.id}`, {method: 'DELETE'});
  loadAPI()
}
async function createClient(data) {
  await fetch(API_URL, {method: 'POST', body: JSON.stringify(data), headers: new Headers()})
}

async function pathClient(id, data) {
  await  fetch(API_URL+`/${id}`, {method: 'PATCH', body: JSON.stringify(data), headers: new Headers()})
}


export {loadAPI, deleteClient, createClient, pathClient}
