

const rows = document.querySelectorAll('tr');
const submitBtn = document.querySelector('#submit-btn');
const returnDate = document.querySelector('#return-date')

// onClick then make into chosen
rows.forEach((row) => {
    row.addEventListener('click', () => {
        console.log(row.id);
    });
});

const showDateInputBtn = document.querySelector('#show-date-input-btn');
const searchButton = document.querySelector('#search');
const startdate = document.querySelector('#start');
const hideDateInputBtn = document.querySelector('#hide-date-input-btn');
const dateInputWrapper = document.querySelector('#date-input-wrapper');
const dateInput = document.querySelector('#date-input');

showDateInputBtn.addEventListener('click', () => {
    // Show the date input wrapper
    dateInputWrapper.style.display = 'flex';
    showDateInputBtn.style.display = 'none';
});

hideDateInputBtn.addEventListener('click', () => {
    // Hide the date input wrapper
    dateInputWrapper.style.display = 'none';
    showDateInputBtn.style.display = 'flex';
});

// dateInput.addEventListener('change', () => {
//     console.log('Selected date: ', dateInput.value)
//     if (dateInput.value === '') {
//         // If the user didn't choose a date, hide the date input wrapper
//         dateInputWrapper.style.display = 'none';
//         showDateInputBtn.style.display = 'flex';
//     }
// });

// searchButton.addEventListener('click', () => {

//     console.log(start.value);
//     dateInput;
// })

// Trip details
function getUrlVars() {
    var vars = {};
    var url = decodeURIComponent(window.location.href.replace(/\+/g, '%20'));
    var parts = url.replace(/[?&]+([^=&]+)=([^&]*)/gi,
        function (m, key, value) {
            vars[key] = value;
        });
    return vars;
}
