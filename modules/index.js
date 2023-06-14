// index.js

import { BookRecord } from "./bookRecord.js";
import { showSection } from "./showSections.js";
import { checkStorage } from "./noBookessage.js";
import { DateTime } from "./luxon.js";


let dt = DateTime.now();
document.querySelector('.dateDisplay').textContent = dt.toLocaleString(DateTime.DATETIME_MED);
setInterval(() => {
    dt = DateTime.now();
    document.querySelector('.dateDisplay').textContent = dt.toLocaleString(DateTime.DATETIME_MED);
}, 59000);

setInterval(() => {
    document.querySelector('.dateDisplay').style.color = "#c6bfd5";
}, 1000);

setInterval(() => {
    document.querySelector('.dateDisplay').style.color = "#422b73";
}, 2000);

export const bookLIST = new BookRecord();
export const nextStorageCheck = new checkStorage();
export const nextSection = new showSection();

