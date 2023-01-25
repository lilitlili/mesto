const popupEditProfile = document.querySelector('#popup_edit-profile');
const popupAddCard = document.querySelector('#popup_add-card');
const popupImage = document.querySelector('#popup__image');
const buttonEdit = document.querySelector('.profile__edit');
const profileName = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const buttonDelete = document.querySelector('.place-card__button-delete');
const userTemplate = document.querySelector('#template').content;
const cardContainer = document.querySelector('.profile-content');
const buttonAdd = document.querySelector('.profile__add-button');
const popupButtonClose = popupEditProfile.querySelector('.popup__close');
const popupFormProfile = popupEditProfile.querySelector('.popup__form');
const inputName = popupEditProfile.querySelector('.popup__inputs_type_name');
const inputHobby = popupEditProfile.querySelector('.popup__inputs_type_hobby');
const popupButtonCloseCard = popupAddCard.querySelector('.popup__close');
const popupFormAdd = popupAddCard.querySelector('.popup__form');
const inputNameAdd = popupAddCard.querySelector('.popup__inputs_type_name');
const inputHobbyAdd = popupAddCard.querySelector('.popup__inputs_type_hobby');
const popupButtonCloseImage = popupImage.querySelector('.popup__close');
const popupImageLink = popupImage.querySelector('.popup__image-image');
const popupImageName = popupImage.querySelector('.popup__subtitle');

// отрисовка массива
initialCards.forEach((object) => {
  cardContainer.prepend(createCard(object.link, object.name));
});

//  открытия попапов
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

//  открытия попапов
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

//  открытие popupEditProfile////////////////////////////////
function openPopupEditProfile() {
  openPopup(popupEditProfile);
  inputName.value = profileName.textContent;
  inputHobby.value = profileSubtitle.textContent; 
}
buttonEdit.addEventListener('click', openPopupEditProfile);

popupButtonClose.addEventListener('click', () => {
  closePopup(popupEditProfile);
});

function submitPopupEditProfile(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileSubtitle.textContent = inputHobby.value;
  closePopup(popupEditProfile);
}
popupFormProfile.addEventListener('submit', submitPopupEditProfile);


//  открытие popupAddCard////////////////////////////////////
function openPopupAddCard() {
  openPopup(popupAddCard);
}
buttonAdd.addEventListener('click', openPopupAddCard);

popupButtonCloseCard.addEventListener('click', () => {
  closePopup(popupAddCard);
});


popupFormAdd.addEventListener('submit', (evt) => {
  evt.preventDefault();
  console.log(inputNameAdd.value);
  createCard(inputHobbyAdd.value, inputNameAdd.value);
  inputHobbyAdd.value = '';
  inputNameAdd.value = '';
  closePopup(popupAddCard);
});


function createCard(link, name) {
  if (name) {
    const card = userTemplate.querySelector('.place-card').cloneNode('true');
    
    
    const cardImage = card.querySelector('.place-card__image');
    const cardSubtitle = card.querySelector('.place-card__subtitle');
    cardImage.src = link;
    cardSubtitle.textContent = name;
    cardImage.alt = 'изображение' + name;
    

    const buttonLike = card.querySelector('.place-card__buttons-like');
    function like() {
      buttonLike.classList.toggle('place-card__buttons-like_active');
    }
    
    buttonLike.addEventListener('click', like);
    function openPopupImage() {
      openPopup(popupImage);
      popupImageLink.src = cardImage.src;
      popupImageLink.alt = 'изображение' + cardSubtitle.textContent;
      popupImageName.textContent = cardSubtitle.textContent;
    }
    cardImage.addEventListener('click', openPopupImage);

    const buttonDelete = card.querySelector('.place-card__buttons-delete');
    function removeCard() {
      card.remove();
    }
    buttonDelete.addEventListener('click', removeCard);
    return card;
  }
}

popupButtonCloseImage.addEventListener('click', () => {
  closePopup(popupImage);
});