const Popup = document.querySelector('.popup'); // Выбираем селектор для поп-апа
const EditButton = document.querySelector('.profile__edit-button'); // Выбираем селектор кнопки редактирования
const CloseButton = document.querySelector('.popup__close'); // и закрытия поп-апа
const formElement = document.querySelector('.form'); // Блок с формой
const SubmitButton = formElement.querySelector('.form__submit-button'); // Выбираем селектор кнопки сохранения
let nameInput = formElement.querySelector('#name');
let jobInput = formElement.querySelector('#about');
let Profile = document.querySelector('.profile'); // Находим блок .profile
let ProfileName = Profile.querySelector('.profile__name'); // Выбираем элемент __name
let ProfileAbout = Profile.querySelector('.profile__about'); // Выбираем элемент __about

function openPopup () {
    Popup.classList.add('popup_opened');
    if (Popup.classList.contains('popup_opened')) {
      nameInput.value = ProfileName.textContent;
      jobInput.value = ProfileAbout.textContent;
    }
  };
  
  function closePopup () {
    Popup.classList.remove('popup_opened');
  }
  
  nameInput.addEventListener('click', function () { // При клике на поле формы, очищаем значения
    nameInput.value = '';
});

jobInput.addEventListener('click', function () { // При клике на поле формы, очищаем значения
    jobInput.value = '';
});

function formSubmitHandler(evt) {
    evt.preventDefault();
ProfileName.textContent = nameInput.value;
ProfileAbout.textContent = jobInput.value;    
closePopup ();
}
formElement.addEventListener('submit', formSubmitHandler);

EditButton.addEventListener('click', openPopup);
SubmitButton.addEventListener('click', formSubmitHandler);
CloseButton.addEventListener('click', closePopup);