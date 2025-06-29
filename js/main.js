let h2 = document.querySelector('h2')
let input = document.querySelector('input')
let button = document.querySelector('button')
let namta1 = document.querySelector('.namta1')
let namta2 = document.querySelector('.namta2')
let namta3 = document.querySelector('.namta3')
let namta4 = document.querySelector('.namta4')
let namta5 = document.querySelector('.namta5')
let namta6 = document.querySelector('.namta6')
let namta7 = document.querySelector('.namta7')
let namta8 = document.querySelector('.namta8')
let namta9 = document.querySelector('.namta9')
let namta10 = document.querySelector('.namta10')





let handlebutton = () => {

    if (input.value == '') {
        h2.innerHTML = "halarput"
    }
    else {

        h2.innerHTML = ""

        // ------------------1x---------
        for (i = 1; i < 2; i++) {
            namta1.innerHTML = input.value + ' X ' + i + ' = ' + input.value * i

        }

        // ------------------2x---------

        for (i = 1; i < 3; i++) {
            namta2.innerHTML = input.value + ' X ' + i + ' = ' + input.value * i

        }


        // ------------------3x---------

        for (i = 1; i < 4; i++) {
            namta3.innerHTML = input.value + ' X ' + i + ' = ' + input.value * i

        }

        // ------------------4x---------
        for (i = 1; i < 5; i++) {
            namta4.innerHTML = input.value + ' X ' + i + ' = ' + input.value * i

        }

        // ------------------5x---------
        for (i = 1; i < 6; i++) {
            namta5.innerHTML = input.value + ' X ' + i + ' = ' + input.value * i

        }
        // ------------------6x---------
        for (i = 1; i < 7; i++) {
            namta6.innerHTML = input.value + ' X ' + i + ' = ' + input.value * i

        }
        // ------------------7x---------
        for (i = 1; i < 8; i++) {
            namta7.innerHTML = input.value + ' X ' + i + ' = ' + input.value * i

        }

        // ------------------8x---------
        for (i = 1; i < 9; i++) {
            namta8.innerHTML = input.value + ' X ' + i + ' = ' + input.value * i

        }
        // ------------------9x---------

        for (i = 1; i < 10; i++) {
            namta9.innerHTML = input.value + ' X ' + i + ' = ' + input.value * i

        }
        // ------------------10x---------
        for (i = 1; i < 11; i++) {
            namta10.innerHTML = input.value + ' X ' + i + ' = ' + input.value * i

        }


    }

    
    
    
}