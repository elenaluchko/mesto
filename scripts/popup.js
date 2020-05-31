//////////////////////////////////////// Поп-ап для ввода данных профиля ///////////////////////////////////////////////////////////

const popup = document.querySelector('.popup'); // Выбираем селектор для поп-апа
const editButton = document.querySelector('.profile__edit-button'); // Выбираем селектор кнопки редактирования
const closeButton = document.querySelector('.popup__close'); // и закрытия поп-апа
const formElement = document.querySelector('.form'); // Блок с формой
const submitButton = formElement.querySelector('.form__submit-button'); // Выбираем селектор кнопки сохранения
let nameInput = formElement.querySelector('.form__input_type_name');
let jobInput = formElement.querySelector('.form__input_type_about');
let profile = document.querySelector('.profile'); // Находим блок .profile
let profileName = profile.querySelector('.profile__name'); // Выбираем элемент __name
let profileAbout = profile.querySelector('.profile__about'); // Выбираем элемент __about

function popupOpenClose() {
  popup.classList.toggle('popup_opened');
  if (popup.classList.contains('popup_opened')) {
    nameInput.value = profileName.textContent;
    jobInput.value = profileAbout.textContent;
  }
};



function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;
  popupOpenClose();
}
formElement.addEventListener('submit', formSubmitHandler);

editButton.addEventListener('click', popupOpenClose);
closeButton.addEventListener('click', popupOpenClose);


//////////////////////////////////////// Добавление карточек при загрузке страницы ///////////////////////////////////////////////////////////

const initialCards = [
  {
    name: 'Домбай',
    link: './images/dombai.jpg'
  },
  {
    name: 'Байкал',
    link: './images/baikal.jpg'
  },
  {
    name: 'Ольхон',
    link: './images/olhon.jpg'
  },
  {
    name: 'Карелия',
    link: './images/karelia.jpg'
  },
  {
    name: 'Алтай',
    link: './images/altaj.jpg'
  },
  {
    name: 'Карачевск',
    link: './images/karachaevsk.jpg'
  }
];

const elementsSection = document.querySelector('.elements'); // выбираем класс блока, в который нужно будет вставлять шаблон
const elementTemplate = document.querySelector('#element').content; // находим шаблон карточки 

// функция для добавления карточки из шаблона
function renderTemplateCard(item) {
  const newElement = elementTemplate.cloneNode(true);
  newElement.querySelector('.element__pic').src = item.link;
  newElement.querySelector('.element__title').textContent = item.name;

  elementsSection.prepend(newElement);

  //////////////////////////////////////// Лайк карточки ///////////////////////////////////////////////////////////
  const like = elementsSection.querySelector('.element__like');
  like.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  });


  const trashIcon = elementsSection.querySelector('.element__trash');
  trashIcon.addEventListener('click', function (evt) {
    evt.target.parentElement.remove();
  });

//////////////////////////////////////// Поп-ап просмотра фото ///////////////////////////////////////////////////////////

  const pic = elementsSection.querySelector('.element__pic');
  const popupCanvas = document.querySelector('.popup_type_canvas'); // Выбираем селектор для поп-апа с фото
  const popupImg = popupCanvas.querySelector('.popup__canvas');
  const closeButtonCanvas = popupCanvas.querySelector('.popup__close');
  const popupCaption = popupCanvas.querySelector('.popup__caption');

  function popupCanvasOpen() {
    popupCanvas.classList.add('popup_opened');
  };




  pic.addEventListener('click', function (evt) {
    popupCanvasOpen();
    const elemTarget = event.target.closest('.element');
    popupImg.src = elemTarget.querySelector('.element__pic').src;
    popupCaption.textContent = elemTarget.querySelector('.element__title').textContent;
  });

  closeButtonCanvas.addEventListener('click', function () {
    popupCanvas.classList.remove('popup_opened');
  });


};


// запускаем фунцкию добавления карточки при загрузке страницы для каждого элемента
document.addEventListener("DOMContentLoaded", () => {
  initialCards.forEach(renderTemplateCard);


});

//////////////////////////////////////// Поп-ап добавления карточки ///////////////////////////////////////////////////////////

const popupPic = document.querySelector('.popup_type_pic'); // Выбираем селектор для поп-апа
const addButton = document.querySelector('.profile__add-button'); // Выбираем селектор кнопки добавления
const closeButtonAddPopup = popupPic.querySelector('.popup__close'); // и закрытия поп-апа
const formPicElement = popupPic.querySelector('.form'); // Блок с формой

let placeInput = formPicElement.querySelector('.form__input_type_place'); //поле для ввода места
let urlInput = formPicElement.querySelector('.form__input_type_url'); //поле для ввода URL


// открытие и закрытие поп-апа
function popupAddOpenClose() {
  popupPic.classList.toggle('popup_opened');
};
addButton.addEventListener('click', popupAddOpenClose);
closeButtonAddPopup.addEventListener('click', popupAddOpenClose);

// прослушка на отправку формы
formPicElement.addEventListener('submit', function (evt) {
  evt.preventDefault();
  let usersElem = { name: placeInput.value, link: urlInput.value };

  renderTemplateCard(usersElem); // запускаем функцию добавления карточки с введенными параметрами
  popupAddOpenClose();
});






