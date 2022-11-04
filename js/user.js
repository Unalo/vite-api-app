import Handlebars from 'handlebars';
import axios from 'axios';

let user_album_templte = document.querySelector('.albumTemplate');
let user_photo_template = document.querySelector('.photoTemplate');
let user_address_template = document.querySelector('.addressTemplate');
let user_todo_template = document.querySelector('.todoTemplate');

let album_template = Handlebars.compile(user_album_templte.innerHTML);
let photo_template = Handlebars.compile(user_photo_template.innerHTML);
let address_template = Handlebars.compile(user_address_template.innerHTML);
let todo_template = Handlebars.compile(user_todo_template.innerHTML);

let users = document.querySelector('.user-info');


document.addEventListener('click', function (e) {

    console.log(e.target);
    if (e.target && e.target.id == "album") {

        const userId = e.target.dataset.userid;
        console.log(userId);
        axios
            .get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
            .then(function (results) {
                let response = results.data;
                let data = response;
                console.log(data);
                let html = album_template({
                    userAlbum: data
                });
                users.innerHTML = html;
            });
    }
});

document.addEventListener('click', function (e) {

    console.log(e.target.id);
    if (e.target && e.target.id == "photo") {

        const userId = e.target.dataset.userid;
        console.log(userId);

        axios
            .get(`https://jsonplaceholder.typicode.com/photos?userId=${userId}`)
            .then(function (results) {
                let response = results.data;
                let data = response;
                console.log(data);
                let html = photo_template({
                    userPhoto: data
                });
                users.innerHTML = html;
            });
    }
});


document.addEventListener('click', function (e) {

    console.log(e.target.id);
    if (e.target && e.target.id == "address") {

        const userId = e.target.dataset.userid;
        console.log(userId);

        axios
            .get(`https://jsonplaceholder.typicode.com/users?id=${userId}`)
            .then(function (results) {
                let response = results.data;
                let data = response;
                console.log(data);
                let html = address_template({
                    address: data
                });
                users.innerHTML = html;
                var elems = document.querySelectorAll('.collapsible');
                // alert(elems)
                var instances = M.Collapsible.init(elems, { inDuration: 300 });
            });
    }
});

document.addEventListener('click', function (e) {

    console.log(e.target.id);
    if (e.target && e.target.id == "todo") {

        const userId = e.target.dataset.userid;
        console.log(userId);

        axios
            .get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
            .then(function (results) {
                let response = results.data;
                let data = response;
                for (const list of data) {
                    if (list.completed === true) {
                        list.checked = "checked"
                    }
                }
                console.log(data);
                let html = todo_template({
                    toDo: data
                });
                users.innerHTML = html;

            });
    }
});


// export default album_event;