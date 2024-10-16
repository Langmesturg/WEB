const menuItemsAge = document.getElementsByClassName('age-item');
const menuItemsEdu = document.getElementsByClassName('edu-item');
const menuItemsExp = document.getElementsByClassName('exp-item');

let activeitemage = null;
let activeitemedu = null;
let activeitemexp = null;

for (let item of menuItemsAge) {
    item.addEventListener('mouseover', (event) => {
        if (event.target !== activeitemage) {
            event.target.classList.add('highlight');
        }
    });

    item.addEventListener('mouseout', (event) => {
        if (event.target !== activeitemage) {
            event.target.classList.remove('highlight');
        }
    });

    item.addEventListener('click', (event) => {
        if (activeitemage) {
            activeitemage.classList.remove('highlight');
        }

        activeitemage = event.target;
        activeitemage.classList.add('highlight');
    });
}

for (let item of menuItemsEdu) {
    item.addEventListener('mouseover', (event) => {
        if (event.target !== activeitemedu) {
            event.target.classList.add('highlight');
        }
    });

    item.addEventListener('mouseout', (event) => {
        if (event.target !== activeitemedu) {
            event.target.classList.remove('highlight');
        }
    });

    item.addEventListener('click', (event) => {
        if (activeitemedu) {
            activeitemedu.classList.remove('highlight');
        }

        activeitemedu = event.target;
        activeitemedu.classList.add('highlight');
    });
}

for (let item of menuItemsExp) {
    item.addEventListener('mouseover', (event) => {
        if (event.target !== activeitemexp) {
            event.target.classList.add('highlight');
        }
    });

    item.addEventListener('mouseout', (event) => {
        if (event.target !== activeitemexp) {
            event.target.classList.remove('highlight');
        }
    });

    item.addEventListener('click', (event) => {
        if (activeitemexp) {
            activeitemexp.classList.remove('highlight');
        }
        activeitemexp = event.target;
        activeitemexp.classList.add('highlight');
    });
}

document.getElementById('myButton').addEventListener('click', function() {
    document.getElementById('message').innerText = "Вітаю, ТЦК зацікавилось вами";
});