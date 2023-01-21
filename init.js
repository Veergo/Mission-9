let a = Math.random() * 10;
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.date;
    document.getElementById('fathersName').innerText = initPerson.fathername;
    document.getElementById('proffession').innerText = initPerson.prof;
}; 