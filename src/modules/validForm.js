'use strict';

const valid = () => {
    const inputLength = document.getElementById('input-length'),
        inputHeight = document.getElementById('input-height'),
        regExpNum = /[\d]$/;

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

    inputLength.addEventListener('input', () => {
        validNum(inputLength);
    });

    inputHeight.addEventListener('input', () => {
        if(regExpNum.test(inputHeight.value)) {
            
        } else {
            inputHeight.value = '';
        }
    });

    
};

export default valid;