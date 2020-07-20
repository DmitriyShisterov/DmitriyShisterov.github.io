'use strict';
function validateForm (settings) {
// Код валидации формы
    let form = document.getElementById(settings.formId);
    const formInputs = form.elements;
    const count = formInputs.length;
    for (let i = 0; i < count; i++) {
        const element = form.elements.item(i);
        if (element.tagName === 'INPUT') {
            // делаем проверки инпутов
            if (element.classList.contains('input_error') === true) {
                element.classList.remove('input_error');
                console.log('delete');
            }
        }
        if(element.tagName === 'BUTTON') {
            // делаем что-то у кнопок

        }
    }


    let fValidaiton1 = document.getElementsByTagName('INPUT');
    let elements = Array.from(fValidaiton1);
    elements.forEach(function (el) {
        function inputErrorClass(el) {
            el.classList.add('input_error');
        }

        el.addEventListener('focus', function (atrr) { // фокус
            console.log('focus');
            if (el.classList.contains('input_error') === true) {
                el.classList.remove('input_error');
                console.log('delete');
            }
        });
        el.addEventListener('blur', function (atrr) { // запуск проверок
            if (el.dataset.hasOwnProperty('required') === true && el.value === "") { // обязательная проверка
                inputErrorClass(el);
                console.log('data_empty');
            }
            if (el.dataset.validator === 'letters') {
                let name = new RegExp('[A-Za-zА-Яа-яЁё]');
                if (name.test(el.value) === false) {
                    inputErrorClass(el);
                    console.log('error_incorrect_symbols');
                } else {
                    console.log('correct_symbols');
                }
            }
            if (el.dataset.validator === 'number') {
                let numPatt = new RegExp('[0-9]');
                if (numPatt.test(el.value) === false) {
                    inputErrorClass(el);
                }
                if (el.dataset.validatorMin !== null && el.dataset.validatorMax !== null) {
                    if (el.dataset.validatorMin > Number(el.value) || el.dataset.validatorMax < Number(el.value)) {
                        inputErrorClass(el);
                        console.log('newObrabotchik');
                        console.log('newObrabotchik2');
                    }
                }
            }
            if (el.dataset.validator === "regexp") {
                let phone = new RegExp('^\\+7\\d{10}$');
                if (phone.test(el.value) === false) {
                    inputErrorClass(el);
                    console.log('incorrect_phone_number');
                } else {
                    console.log('correct_symbols');
                }
            }
        })
    });
}

