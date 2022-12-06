let popup = document.querySelector('.popup');
let formEdit = document.querySelector('.profile__edit');
let buttonSave = document.querySelector('.popup__form');
let popupClose = document.querySelector('.popup__close');
let inputName = document.querySelector('.popup__inputs_type_name');
let inputHobby = document.querySelector('.popup__inputs_type_hobby');
let gname = document.querySelector('.profile__title');
let hobby = document.querySelector('.profile__subtitle');

// функция открытия поп ап
function openPopup() {
  popup.classList.add('popup_opened');
  inputName.value = gname.textContent;
  inputHobby.value = hobby.textContent;
}
// функция работы с формой
function formSave(evt) {
  evt.preventDefault();
  gname.textContent = inputName.value;
  hobby.textContent = inputHobby.value;
  closePopup();
}
// функция закрытия поп ап
function closePopup() {
  popup.classList.remove('popup_opened');
}

formEdit.addEventListener('click', openPopup);
buttonSave.addEventListener('submit', formSave);
popupClose.addEventListener('click', closePopup);