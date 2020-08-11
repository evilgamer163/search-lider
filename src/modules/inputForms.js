'use strict';

const validFirstForm = () => {
    const input = document.querySelectorAll('input'),
        errorInput = document.querySelectorAll('.error-input'),
        dropdownBtn = document.querySelector('.dropdown-btn'),
        list = document.querySelector('.list'),
        item = document.querySelectorAll('.item'),
        dropdownInput = document.querySelector('.dropdown-input'),
        completeInput = document.querySelectorAll('.complete-input'),
        formBtn = document.querySelector('.form-btn'),
        checkLabel = document.querySelector('.check-label'),
        sum = document.querySelector('.sum'),
        regExpNum = /[\d]$/;

    let formBtnActive = false;

    const validNum = (input) => {
        const div = document.createElement('div');
        div.textContent = 'Неверно заполнено поле';
        div.style.cssText = `
                color: #C98E00;
                font-weight: normal;
                font-size: 13px;
                line-height: 18px;
            `;

        if(regExpNum.test(input.value)) {

        } else {
            input.value = '';
            input.style.border = '1px solid #C98E99';
        }
    };
    
    input.forEach( (item, i) => {
        item.addEventListener('focus', () => {
            if(item.className !== 'dropdown-input') {
                item.value = '';
            }
        });

        item.addEventListener('input', () => {
            if(item.id === 'input-length' || item.id === 'input-height') {
                if(regExpNum.test(item.value)) {
                    item.style.border = '';
                    errorInput[i].style.display = 'none';
                    completeInput[i].style.display = 'inline-block';
                } else {
                    validNum(item);
                    errorInput[i].style.display = 'block';
                }
            }
        });
    });

    const dropdown = () => {
        const dropdownCheck= document.querySelector('.dropdown-check');
        let isOpen = false;
    
        dropdownBtn.addEventListener('click', (event) => {
            event.preventDefault();
    
            if(isOpen === false) {
                list.style.display = 'block';
                isOpen = true;
            } else {
                list.style.display = 'none';
                isOpen = false;
            }

            dropdownCheck.style.display = 'none';
        });
    
        item.forEach( item => {
            item.addEventListener('click', (event) => {
                event.preventDefault();

                dropdownInput.value = item.textContent;
                list.style.display = 'none';
                isOpen = false;
                dropdownCheck.style.display = 'inline-block';
            });
        });
    };
    dropdown();

    checkLabel.addEventListener('click', () => {
        
    });

    formBtn.addEventListener('click', (event) => {
        event.preventDefault();


    });
};

export default validFirstForm;