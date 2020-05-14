const popup = document.querySelector('.popup'); // Выбираем селектор для поп-апа
const editButton = document.querySelector('.profile__edit-button'); // Выбираем селектор кнопки редактирования
const closeButton = document.querySelector('.popup__close'); // и закрытия поп-апа
const formElement = document.querySelector('.form'); // Блок с формой
const submitButton = formElement.querySelector('.form__submit-button'); // Выбираем селектор кнопки сохранения
let nameInput = formElement.querySelector('.form__name');
let jobInput = formElement.querySelector('.form__about');
let profile = document.querySelector('.profile'); // Находим блок .profile
let profileName = profile.querySelector('.profile__name'); // Выбираем элемент __name
let profileAbout = profile.querySelector('.profile__about'); // Выбираем элемент __about

function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
};

function closePopup() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;
  closePopup();
}
formElement.addEventListener('submit', formSubmitHandler);

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);