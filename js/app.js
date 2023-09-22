window.addEventListener('DOMContentLoaded', () => {

    const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const symbols = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', ':', ';', '<', ',', '>', '.', '/', '?'];

    const range = document.querySelector('#textRange');
    const passwordLength = document.querySelector('#passwordLength');
    const textPassword = document.querySelector('#textPassword');

    //get all the checkboxes
    const checkLowercase = document.querySelector('#checkLowercase');
    const checkUppercase = document.querySelector('#checkUppercase');
    const checkNumbers = document.querySelector('#checkNumbers');
    const checkSymbol = document.querySelector('#checkSymbol');

    const btnGenerate = document.querySelector('#btnGenerate');
    const btnReset = document.querySelector('#btnReset');

    var wantLowercase = true;
    var wantUppercase = true;
    var wantNumber = false;
    var wantSymbol = false;

    range.addEventListener('change', () => {
        passwordLength.innerText = range.value;
    });

    checkLowercase.addEventListener('change', () => {
        if (checkLowercase.checked) {
            wantLowercase = true;
        } else {
            wantLowercase = false;
        }
    });

    checkUppercase.addEventListener('change', () => {
        if (checkUppercase.checked) {
            wantUppercase = true;
        } else {
            wantUppercase = false;
        }
    });

    checkNumbers.addEventListener('change', () => {
        if (checkNumbers.checked) {
            wantNumber = true;
        } else {
            wantNumber = false;
        }
    });

    checkSymbol.addEventListener('change', () => {
        if (checkSymbol.checked === true) {
            wantSymbol = true;
        } else {
            wantSymbol = false;
        }
    });

    textPassword.addEventListener('click',()=>{
        var copyText = textPassword;

        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices

        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);

        showAlert('Password Copied to Clipboard !','bg-success');
    })

    btnGenerate.addEventListener('click', () => {
        if (!checkLowercase.checked && !checkUppercase.checked && !checkNumbers.checked && !checkSymbol.checked) {
            showAlert("Check At Least One Checkboxes", "bg-warning");
        } else {

            getALlRandomValuesAtOnce();

            if (checkLowercase.checked === true && checkUppercase.checked === false && checkNumbers.checked === false && checkSymbol.checked === false) {
                final = randomLowercase.slice(0, parseInt(range.value))
                password = final.join('');

                textPassword.value = password;

            } else if (checkLowercase.checked === false && checkUppercase.checked === true && checkNumbers.checked === false && checkSymbol.checked === false) {
                final = randomUppercase.slice(0, parseInt(range.value))
                password = final.join('');

                textPassword.value = password;
            } else if (checkLowercase.checked === false && checkUppercase.checked === false && checkNumbers.checked === true && checkSymbol.checked === false) {
                final = randomNumber.slice(0, parseInt(range.value))
                password = final.join('');

                textPassword.value = password;
            } else if (checkLowercase.checked === false && checkUppercase.checked === false && checkNumbers.checked === false && checkSymbol.checked === true) {
                final = randomSymbol.slice(0, parseInt(range.value))
                password = final.join('');

                textPassword.value = password;
            } else if (checkLowercase.checked === true && checkUppercase.checked === true && checkNumbers.checked === false && checkSymbol.checked === false) {

                if (parseInt(range.value) % 2 === 1) {
                    updateValue1 = (range.value / 2) - 0.5;
                    updateValue2 = (range.value - updateValue1);
                    combineTwo(randomLowercase.slice(0, updateValue1), randomUppercase.slice(0, updateValue2));
                    textPassword.value = combinedString

                } else {
                    updateValue = range.value / 2;
                    combineTwo(randomLowercase.slice(0, updateValue), randomUppercase.slice(0, updateValue));
                    textPassword.value = combinedString
                }


            } else if (checkLowercase.checked === true && checkUppercase.checked === false && checkNumbers.checked === true && checkSymbol.checked === false) {

                if (parseInt(range.value) % 2 === 1) {
                    updateValue1 = (range.value / 2) - 0.5;
                    updateValue2 = (range.value - updateValue1);
                    combineTwo(randomLowercase.slice(0, updateValue1), randomNumber.slice(0, updateValue2));
                    textPassword.value = combinedString

                } else {
                    updateValue = range.value / 2;
                    combineTwo(randomLowercase.slice(0, updateValue), randomNumber.slice(0, updateValue));
                    textPassword.value = combinedString
                }
            } else if (checkLowercase.checked === true && checkUppercase.checked === false && checkNumbers.checked === false && checkSymbol.checked === true) {
                if (parseInt(range.value) % 2 === 1) {
                    updateValue1 = (range.value / 2) - 0.5;
                    updateValue2 = (range.value - updateValue1);
                    combineTwo(randomLowercase.slice(0, updateValue1), randomSymbol.slice(0, updateValue2));
                    textPassword.value = combinedString

                } else {
                    updateValue = range.value / 2;
                    combineTwo(randomLowercase.slice(0, updateValue), randomSymbol.slice(0, updateValue));
                    textPassword.value = combinedString
                }
            } else if (checkLowercase.checked === false && checkUppercase.checked === true && checkNumbers.checked === true && checkSymbol.checked === false) {
                if (parseInt(range.value) % 2 === 1) {
                    updateValue1 = (range.value / 2) - 0.5;
                    updateValue2 = (range.value - updateValue1);
                    combineTwo(randomUppercase.slice(0, updateValue1), randomNumber.slice(0, updateValue2));
                    textPassword.value = combinedString

                } else {
                    updateValue = range.value / 2;
                    combineTwo(randomUppercase.slice(0, updateValue), randomNumber.slice(0, updateValue));
                    textPassword.value = combinedString
                }
            } else if (checkLowercase.checked === false && checkUppercase.checked === true && checkNumbers.checked === false && checkSymbol.checked === true) {
                if (parseInt(range.value) % 2 === 1) {
                    updateValue1 = (range.value / 2) - 0.5;
                    updateValue2 = (range.value - updateValue1);
                    combineTwo(randomUppercase.slice(0, updateValue1), randomSymbol.slice(0, updateValue2));
                    textPassword.value = combinedString

                } else {
                    updateValue = range.value / 2;
                    combineTwo(randomUppercase.slice(0, updateValue), randomSymbol.slice(0, updateValue));
                    textPassword.value = combinedString
                }
            } else if (checkLowercase.checked === false && checkUppercase.checked === false && checkNumbers.checked === true && checkSymbol.checked === true) {
                if (parseInt(range.value) % 2 === 1) {
                    updateValue1 = (range.value / 2) - 0.5;
                    updateValue2 = (range.value - updateValue1);
                    combineTwo(randomNumber.slice(0, updateValue1), randomSymbol.slice(0, updateValue2));
                    textPassword.value = combinedString

                } else {
                    updateValue = range.value / 2;
                    combineTwo(randomNumber.slice(0, updateValue), randomSymbol.slice(0, updateValue));
                    textPassword.value = combinedString
                }
            } else if (checkLowercase.checked === true && checkUppercase.checked === true && checkNumbers.checked === true && checkSymbol.checked === false) {
                if (parseInt(range.value) % 3 === 0) {
                    updateValue = range.value / 3;
                    combineThree(randomLowercase.slice(0, updateValue),randomUppercase.slice(0,updateValue),randomNumber.slice(0,updateValue));
                    textPassword.value = combinedString

                } else {
                    updateValue1 = parseInt(range.value / 3)
                    updateValue2 = parseInt(range.value / 3)
                    updateValue3 = range.value - (updateValue2 + updateValue1);

                    combineThree(randomLowercase.slice(0, updateValue1),randomUppercase.slice(0,updateValue2),randomNumber.slice(0,updateValue3));
                    textPassword.value = combinedString
                }
            }

            else if (checkLowercase.checked === true && checkUppercase.checked === true && checkNumbers.checked === false && checkSymbol.checked === true) {
                if (parseInt(range.value) % 3 === 0) {
                    updateValue = range.value / 3;
                    combineThree(randomLowercase.slice(0, updateValue),randomUppercase.slice(0,updateValue),randomSymbol.slice(0,updateValue));
                    textPassword.value = combinedString

                } else {
                    updateValue1 = parseInt(range.value / 3)
                    updateValue2 = parseInt(range.value / 3)
                    updateValue3 = range.value - (updateValue2 + updateValue1);

                    combineThree(randomLowercase.slice(0, updateValue1),randomUppercase.slice(0,updateValue2),randomSymbol.slice(0,updateValue3));
                    textPassword.value = combinedString
                }
            }

            else if (checkLowercase.checked === true && checkUppercase.checked === false && checkNumbers.checked === true && checkSymbol.checked === true) {
                if (parseInt(range.value) % 3 === 0) {
                    updateValue = range.value / 3;
                    combineThree(randomLowercase.slice(0, updateValue),randomNumber.slice(0,updateValue),randomSymbol.slice(0,updateValue));
                    textPassword.value = combinedString

                } else {
                    updateValue1 = parseInt(range.value / 3)
                    updateValue2 = parseInt(range.value / 3)
                    updateValue3 = range.value - (updateValue2 + updateValue1);

                    combineThree(randomLowercase.slice(0, updateValue1),randomNumber.slice(0,updateValue2),randomSymbol.slice(0,updateValue3));
                    textPassword.value = combinedString
                }
            }

            else if (checkLowercase.checked === false && checkUppercase.checked === true && checkNumbers.checked === true && checkSymbol.checked === true) {
                if (parseInt(range.value) % 3 === 0) {
                    updateValue = range.value / 3;
                    combineThree(randomUppercase.slice(0, updateValue),randomNumber.slice(0,updateValue),randomSymbol.slice(0,updateValue));
                    textPassword.value = combinedString

                } else {
                    updateValue1 = parseInt(range.value / 3)
                    updateValue2 = parseInt(range.value / 3)
                    updateValue3 = range.value - (updateValue2 + updateValue1);

                    combineThree(randomUppercase.slice(0, updateValue1),randomNumber.slice(0,updateValue2),randomSymbol.slice(0,updateValue3));
                    textPassword.value = combinedString
                }
            }
            else{
                if (parseInt(range.value) % 4 === 0) {
                    updateValue = range.value/4;
                    combineFour(randomLowercase.slice(0,updateValue),randomUppercase.slice(0, updateValue),randomNumber.slice(0,updateValue),randomSymbol.slice(0,updateValue));
                    textPassword.value = combinedString
                }
                else{
                    updateValue1 = parseInt(range.value / 4)
                    updateValue2 = parseInt(range.value / 4)
                    updateValue3 = parseInt(range.value / 4)
                    updateValue4 = range.value - (updateValue2 + updateValue1+updateValue3);
                    combineFour(randomLowercase.slice(0,updateValue1),randomUppercase.slice(0, updateValue2),randomNumber.slice(0,updateValue4),randomSymbol.slice(0,updateValue3));
                    textPassword.value = combinedString
                }

            }

        }
    });

    btnReset.addEventListener('click', () => {

        //reset checkboxes
        checkLowercase.checked = true;
        checkUppercase.checked = true;
        checkNumbers.checked = false;
        checkSymbol.checked = false;

        //reset booleans
        wantLowercase = true;
        wantUppercase = true;
        wantNumber = false;
        wantSymbol = false;

        //reset range
        range.value = 0;
        passwordLength.innerText = 8;

        //reset password
        textPassword.value = '';
    })

    const showAlert = (msg, background) => {
        const div = document.createElement('div');
        div.classList.add('alert', 'alert-danger', background, 'text-white', 'custom-alert', 'alert-dismissible', 'fade', 'show');
        div.innerHTML = msg + '<button type="button" class="btn-close" style="filter:invert(100%)" data-bs-dismiss="alert" aria-label="Close"></button>';
        document.querySelector('body').appendChild(div);

        //hide alert after 1s
        setTimeout(function () {
            $('.alert').fadeOut('slow');
        }, 1500);
    }

    function getRandomValues(array, n = 16) {
        // Shuffle the array.
        array.sort(() => Math.random() - 0.5);

        // Slice the array at the first n elements.
        return array.slice(0, n);
    }

    function getRandomNumber(array) {
        const randomNumbersArray = [];
        for (let i = 0; i < 16; i++) {
            const randomNumberIndex = Math.floor(Math.random() * array.length);
            const randomNumber = array[randomNumberIndex];
            randomNumbersArray.push(randomNumber);

        }
        return randomNumbersArray;

    }

    function getALlRandomValuesAtOnce() {
        if (wantLowercase) {
            randomLowercase = getRandomValues(lowercase);
        } else {
            randomLowercase = null;

        }
        if (wantUppercase) {
            randomUppercase = getRandomValues(uppercase);
        } else {
            randomUppercase = null;
        }
        if (wantNumber) {
            randomNumber = getRandomNumber(numbers);
        } else {
            randomNumber = null;
        }
        if (wantSymbol) {
            randomSymbol = getRandomValues(symbols);
        } else {
            randomSymbol = null;
        }
    }


    function combineTwo(array1, array2) {
        const combinedStringArray = [];

        // Loop through the two-word arrays and add the characters to the combined string array in a random order.
        while (array1.length > 0 || array2.length > 0) {
            const randomIndex = Math.floor(Math.random() * 2);

            if (array1.length > 0 && randomIndex === 0) {
                combinedStringArray.push(array1.shift());
            } else if (array2.length > 0) {
                combinedStringArray.push(array2.shift());
            }
        }
        return combinedString = combinedStringArray.join('');

    }

    function combineThree(array1, array2, array3) {
        const combinedStringArray = [];

        // Loop through the three arrays and add the characters to the combined string array in a random order.
        while (array1.length > 0 || array2.length > 0 || array3.length > 0) {
            const randomIndex = Math.floor(Math.random() * 3);

            if (array1.length > 0 && randomIndex === 0) {
                combinedStringArray.push(array1.shift());
            } else if (array2.length > 0 && randomIndex === 1) {
                combinedStringArray.push(array2.shift());
            } else if (array3.length > 0 && randomIndex === 2) {
                combinedStringArray.push(array3.shift());
            }
        }

        return combinedString = combinedStringArray.join('');
    }

    function combineFour(array1, array2, array3, array4) {
        const combinedStringArray = [];

        // Loop through the four arrays and add the characters to the combined string array in a random order.
        while (array1.length > 0 || array2.length > 0 || array3.length > 0 || array4.length > 0) {
            const randomIndex = Math.floor(Math.random() * 4);

            if (array1.length > 0 && randomIndex === 0) {
                combinedStringArray.push(array1.shift());
            } else if (array2.length > 0 && randomIndex === 1) {
                combinedStringArray.push(array2.shift());
            } else if (array3.length > 0 && randomIndex === 2) {
                combinedStringArray.push(array3.shift());
            } else if (array4.length > 0 && randomIndex === 3) {
                combinedStringArray.push(array4.shift());
            }
        }

        return combinedString =  combinedStringArray.join('');
    }


});