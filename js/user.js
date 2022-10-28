import Handlebars from 'handlebars';
import axios from 'axios';
let domLoaded = document.addEventListener('DOMContentLoaded', () => {

    let user_album_templte = document.querySelector('.userTemplate');
    let user_info_template = document.querySelector('.userTemplate');
    let album = document.querySelector('.album');

    let album_template = Handlebars.compile(user_album_templte.innerHTML);
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
            album.innerHTML = html;
        });
})

const user_album = () => {
    axios
        .get('https://jsonplaceholder.typicode.com/albums')
        .then(function (results) {
            let response = results.data;
            let data = response;
            console.log(data);
            let html = user_template_instance({
                userAlbum: data
            });
            album.innerHTML = html;
        });
}

export default domLoaded;