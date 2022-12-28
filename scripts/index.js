const popupEditProfile = document.querySelector('#popup_edit-profile');
const popupAddCard = document.querySelector('#popup_add-card');
const buttonEdit = document.querySelector('.profile__edit');
const profileName = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const buttonDelete = document.querySelector('.place-card__button-delete');
const userTemplate = document.querySelector('#template').content;
const cardContainer = document.querySelector('.profile-content');
const buttonAdd = document.querySelector('.profile__add-button');

const initialCards = [
  {
    name: 'Нью-Йорк',
    link: 'https://images.unsplash.com/photo-1518563172008-e56c5dfbaef6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
  {
    name: 'Стратовулкан в Гватемале',
    link: 'https://images.unsplash.com/photo-1663790913610-fbae9cf3d2d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
  {
    name: 'Каппадокия',
    link: 'https://images.unsplash.com/photo-1669111957903-36e4da270ef1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
  {
    name: 'Бледское озеро',
    link: 'https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  },
  {
    name: 'Барселона',
    link: 'https://images.unsplash.com/photo-1658752292290-48f675c977d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
  },
  {
    name: 'Япония',
    link: 'https://images.unsplash.com/photo-1638490918877-8126eb8942e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
  },
];

// отрисовка массива
initialCards.forEach(object => {
  const card = userTemplate.querySelector('.place-card').cloneNode(true);
  createCard(card);
  card.querySelector('.place-card__image').alt = 'фотография ' + object.name;
  card.querySelector('.place-card__image').src = object.link;
  card.querySelector('.place-card__subtitle').textContent = object.name;
  return cardContainer.prepend(card);
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
  const popupButtonClose = popupEditProfile.querySelector('.popup__close');
  const popupButtonSave = popupEditProfile.querySelector('.popup__form');
  openPopup(popupEditProfile);
  const inputName = popupEditProfile.querySelector('.popup__inputs_type_name');
  const inputHobby = popupEditProfile.querySelector('.popup__inputs_type_hobby');
  inputName.value = profileName.textContent;
  inputHobby.value = profileSubtitle.textContent;
  popupButtonClose.addEventListener('click', () => { 
    closePopup(popupEditProfile);
  });
  function submitPopupEditProfile(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileSubtitle.textContent = inputHobby.value;
    closePopup(popupEditProfile);
  }
  popupButtonSave.addEventListener('submit', submitPopupEditProfile);
}
buttonEdit.addEventListener('click', openPopupEditProfile);

//  открытие popupAddCard////////////////////////////////////
function openPopupAddCard() {
  openPopup(popupAddCard);
  const popupButtonSave = popupAddCard.querySelector('.popup__form');
  const popupButtonClose = popupAddCard.querySelector('.popup__close');
  const card = userTemplate.querySelector('.place-card').cloneNode('true');
  const inputName = popupAddCard.querySelector('.popup__inputs_type_name');
  const inputHobby = popupAddCard.querySelector('.popup__inputs_type_hobby');
  popupButtonClose.addEventListener('click', () => { 
    closePopup(popupAddCard);
  });
  popupButtonSave.addEventListener('submit', (evt) => {
    evt.preventDefault();
    createCard(card);
    card.querySelector('.place-card__image').src = inputHobby.value;
    card.querySelector('.place-card__subtitle').textContent = inputName.value;
    card.querySelector('.place-card__image').alt = 'изображение' + inputName.value;
    inputHobby.value = '';
    inputName.value = '';
    const firstChild = cardContainer.firstChild;
    cardContainer.insertBefore(card, firstChild);
    closePopup(popupAddCard);
  });
}
buttonAdd.addEventListener('click', openPopupAddCard);


function createCard(card) {
  let buttonLike = card.querySelector('.place-card__buttons-like');
  function like() {
    const buttonLike = card.querySelector('.place-card__buttons-like');
    buttonLike.classList.toggle('place-card__buttons-like_active');
  }
  buttonLike.addEventListener('click', like);
  const cardImage = card.querySelector('.place-card__image');
  function openPopupImage () {
    document.querySelector('.popup-image__image').src = card.querySelector('.place-card__image').src;
    document.querySelector('.popup-image__subtitle').textContent = card.querySelector('.place-card__subtitle').textContent;
    let popupImage = document.querySelector('.popup-image');
    popupImage.classList.toggle('popup-image_opened');
    const buttonClosePopupImage = document.querySelector('.popup-image__buttons-close');
    buttonClosePopupImage.addEventListener('click', () => {
      popupImage.classList.remove('popup-image_opened');
    });
  }
  cardImage.addEventListener('click', openPopupImage);
  const buttonDelete = card.querySelector('.place-card__buttons-delete');
  function removeCard () {
    card.remove();
  }
  buttonDelete.addEventListener('click', removeCard);
  return card;
}