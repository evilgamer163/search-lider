'use strict';

const formOrder = () => {
    const inputs = document.querySelectorAll('input'), 
        inputLength = document.getElementById('input-length'),
        inputHeight = document.getElementById('input-height'),
        errorInput = document.querySelectorAll('.error-input'),
        completeInput = document.querySelectorAll('.complete-input'),
        dropdownBtn = document.querySelector('.dropdown-btn'),
        dropdownInput = document.querySelector('.dropdown-input'),
        list = document.querySelector('.list'),
        item = document.querySelectorAll('.item'),
        materialPrice = document.querySelectorAll('.material-price'),
        checkMounting = document.querySelector('.check-label'),
        sum = document.querySelector('.sum'),
        formBtn = document.querySelector('.form-btn'),
        regExpNum = /[\d]$/;

    let needMounting = false,
        squarePow,
        totalSum = 0;

    let data = {
        length: 0,
        height: 0,
        material: '',
        needMounting: false,
        sum: 0
    };

    const sumOrder = (index) => {
        squarePow = inputLength.value / inputHeight.value;
        totalSum = squarePow * materialPrice[index].textContent;
        sum.textContent = Math.ceil(totalSum) + ' ₽';
    };

    const validNum = (input, i) => {
        if(regExpNum.test(input.value)) {
            input.style.border = '';
            errorInput[i].style.display = 'none';
            completeInput[i].style.display = 'inline-block';
        } else if(!regExpNum.test(input.value) || input.value === '') {
            input.value = '';
            input.style.border = '1px solid #C98E99';
            errorInput[i].style.display = 'block';
            completeInput[i].style.display = 'none';
        }
    };

    inputs.forEach( (item, i) => {
        item.addEventListener('focus', () => {
            item.value = '';
            validNum(item, i);
        });
    });

    inputLength.addEventListener('input', () => {
        validNum(inputLength, 0);
    });

    inputHeight.addEventListener('input', () => {
        validNum(inputHeight, 1);
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
    
        item.forEach( (item, i) => {
            item.addEventListener('click', (event) => {
                event.preventDefault();

                dropdownInput.value = item.textContent;
                dropdownCheck.style.display = 'inline-block';
                list.style.display = 'none';
                isOpen = false;

                sumOrder(i);
            });
        });
    };
    dropdown();

    checkMounting.addEventListener('click', () => {
        if(!needMounting) {
            needMounting = !needMounting;
            totalSum += 200;
            sum.textContent = Math.ceil(totalSum) + ' ₽';
        } else {
            needMounting = !needMounting;
            totalSum -= 200;
            sum.textContent = Math.ceil(totalSum) + ' ₽';
        }
    });

    
};

export default formOrder;