import {getDropdown} from "/Countreis_dropdown/countries.js";

const countries = ["Netherlands", "Japan", "Mongolia"];

const html = getDropdown(countries);
console.log(html);
const select = document.querySelector("#countries-dropdown");
select.innerHTML = html;