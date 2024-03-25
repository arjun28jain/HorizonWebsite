const scriptURL = 'https://script.google.com/macros/s/AKfycby_ZdSxzTA4lXlSs4DSWouKIHqk5cFwnogb3ktilNX-o4s7_hAm-E58Xp05dkowp1CB/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {

    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! Your form has been submitted successfully"))
    .then(() => {window.location.reload();})
    .catch(error => console.error('Oops Error!', error.message))
})