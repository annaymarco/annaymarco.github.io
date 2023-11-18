import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js';

document.addEventListener("DOMContentLoaded", (event) => {
    setTimeout(setForm, 1000);
});

var contactFormDB;

function setForm(){
    const firebaseConfig = {
        apiKey: "AIzaSyBn3KWqRqu6eW-_yKNcXeSJn9L8OffKapI",
        authDomain: "anna-y-marco-wedding.firebaseapp.com",
        databaseURL: "https://anna-y-marco-wedding-default-rtdb.firebaseio.com",
        projectId: "anna-y-marco-wedding",
        storageBucket: "anna-y-marco-wedding.appspot.com",
        messagingSenderId: "970437449352",
        appId: "1:970437449352:web:344c7abf5605f3ed1b313d",
        measurementId: "G-RY8Q27D9NW"
    };

    const firebaseApp = initializeApp(firebaseConfig);
    const database = getDatabase(firebaseApp);
    const analytics = getAnalytics(firebaseApp);
    const now = Date.now();
    contactFormDB = ref(database, 'contactForm_'+now);

    let formElement = document.querySelector('.react-form-contents');

    formElement.classList.add('send_to_firebase');
    formElement.setAttribute('action', '#');
    formElement.replaceWith(formElement.cloneNode(true));

    formElement = document.querySelector('.send_to_firebase');
    formElement.addEventListener("submit", submitForm);
}

function submitForm(e) {
    e.preventDefault();

    let form_name;
    let form_companion;
    let form_phone;
    let form_willgo;
    let form_message;
    let message_sended_ok = 'Datos enviados exitosamente';
    let message_sended_error = 'Existe un error por favor intenta mas tarde';

    if(lang == 'es'){
        form_name = document.getElementById('text-1304e709-58a5-4918-9ea9-dc5f875521dd-field').value;
        form_companion = document.getElementById('text-9c9ad118-dfa7-43a5-a850-23d263f083f6-field').value;
        form_phone = document.getElementById('phone-a3636e21-37c5-4c1c-9d3a-35946cd0df43-input-field').value;
        form_willgo = document.getElementById('select-d5153f8d-ea45-4e6b-b38c-65d5364f4976-field').value;
        form_message = document.getElementById('textarea-f467d862-51f0-460c-a71c-200ad8dc332f-field').value;
        let errores =[];
        if(!form_name){errores.push('form_name');}
        if(!form_phone){errores.push('form_phone');}
        if(errores.length > 0){
            alert('Complete todos los campos obligatorios');
            return false;
        }
    }else{
        form_name = document.getElementById('text-8a73c16e-8239-4bd1-8923-e3b5ce5354b9-field').value;
        form_companion = document.getElementById('text-9305220a-a353-455c-a80f-091ac1c46f4d-field').value;
        form_phone = document.getElementById('phone-a3636e21-37c5-4c1c-9d3a-35946cd0df43-input-field').value;
        form_willgo = document.getElementById('select-d5153f8d-ea45-4e6b-b38c-65d5364f4976-field').value;
        form_message = document.getElementById('textarea-f467d862-51f0-460c-a71c-200ad8dc332f-field').value;
        message_sended_ok = 'Data sent successfully';
        message_sended_error = 'There is an error please try again later';
        let errores =[];
        if(!form_name){errores.push('form_name');}
        if(!form_phone){errores.push('form_phone');}
        if(errores.length > 0){
            alert('Fill out all required fields');
            return false;
        }
    }
    const appRef = contactFormDB;
    const appData = {
        name: form_name,
        companion: form_companion,
        phone: form_phone,
        will_go: form_willgo,
        message: form_message,
        lang: lang,
        date: getMySQLDateFormat(),
    };

   set(appRef, appData)
    .then(() => {
        alert(message_sended_ok);
        location.reload();
    })
    .catch((error) => {
        alert(message_sended_error+' '+error);
    });
}

function getMySQLDateFormat() {
    let date = new Date();
    let year = date.getFullYear();
    let month = ('0' + (date.getMonth() + 1)).slice(-2);
    let day = ('0' + date.getDate()).slice(-2);
    let hours = ('0' + date.getHours()).slice(-2);
    let minutes = ('0' + date.getMinutes()).slice(-2);
    let seconds = ('0' + date.getSeconds()).slice(-2);

    let mysqlDateFormat = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
    return mysqlDateFormat;
}