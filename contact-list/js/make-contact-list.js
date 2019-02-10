'use strict';
const contactsList = JSON.parse(loadContacts()),
      contactsUl = document.getElementsByClassName('contacts-list')[0];

//Вариант 1
//contactsList.forEach((contact) => {
//  contactsUl.innerHTML += `<li data-email="${contact.email}" data-phone="${contact.phone}">
//                              <strong>${contact.name}</strong>
//                           </li>`;
//});

//Вариант 2
contactsList.forEach((contact, index) => {
  contactsUl.innerHTML += `<li></li>`;
  const contactLi = contactsUl.getElementsByTagName('li')[index + 1]
  contactLi.dataset.email = contact.email;
  contactLi.dataset.phone = contact.phone;
  contactLi.innerHTML = '<strong></strong>';
  contactLi.getElementsByTagName('strong')[0].innerHTML = contact.name;
});
