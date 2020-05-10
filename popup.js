/* Создаем функции для открытия и закрытия поп-апа. Добавляем/убираем модификатор popup_opened */

let Popup = document.querySelector('.popup');
function PopupOpen(){
    Popup.classList.add('popup_opened');
}

function PopupClose(){
    Popup.classList.remove('popup_opened');
}

/* Выбираем селектор кнопки редактирования и закрытия поп-апа. Задаем фунции открытия и закрытия соответственно */
let EditButton = document.querySelector('.profile__edit-button');
console.log(EditButton);
EditButton.addEventListener('click', PopupOpen);

let CloseButton = document.querySelector('.popup__close');
CloseButton.addEventListener('click', PopupClose);

/* Находим блок .profile. Выбираем в нем элементы __name и __about  */
let Profile = document.querySelector('.profile');
let ProfileName = Profile.querySelector('.profile__name');
ProfileName = ProfileName.textContent;
/* Выводим в консоль, чтобы проверить корректность */
console.log(ProfileName); 
let ProfileAbout = Profile.querySelector('.profile__about');
ProfileAbout = ProfileAbout.textContent;
/* Выводим в консоль, чтобы проверить корректность */
console.log(ProfileAbout); 

/* Находим поля формы для ввода имени и описания. Присваиваем им значения из блока .profile  */
let Form = document.querySelector('.form');
/* let FormFieldName = Form.querySelector('.form__field_type_name'); */
/* FormFieldName.textContent = ProfileName; */
let FormFieldName = Form.querySelector('#name');
FormFieldName.value = ProfileName;
let FormFieldAbout = Form.querySelector('#about');
FormFieldAbout.value = ProfileAbout;


FormFieldName.addEventListener('click', function () {
    FormFieldName.value = '';
});

FormFieldAbout.addEventListener('click', function () {
    FormFieldAbout.value = '';
});