import './cscs/style.css';
import './css/simple-grid.css';
import 'materialize-css'
import 'materialize-css/dist/css/materialize.css'
import './js/user.js';
import Handlebars from 'handlebars';
import axios from 'axios';

document.addEventListener('DOMContentLoaded', () => {
    let user_info_template = document.querySelector('.userTemplate');
    let users = document.querySelector('.user-info');
    let user_template = Handlebars.compile(user_info_template.innerHTML);

    axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(function (results) {
            let response = results.data;
            let data = response;
            console.log(data);
            let html = user_template({
                user: data
            });
            users.innerHTML = html;
        });
})

