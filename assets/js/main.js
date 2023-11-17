const userEl = document.querySelector('.user-container')
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(users => {
        // console.log(users);
        let c = 0
        users.forEach(user => {
            if (c < 10) {
                userEl.insertAdjacentHTML('beforeend', `
                    <div class="user">
                        <p>${user.title}</p>
                        <p>${user.body}</p>
                    </div>
                `)
                c++
            }
        });


    })
    .catch(error => {
        userEl.insertAdjacentHTML('beforeend', `
            <h2 class="error"> Ошибка: ${error} <h2>
        `)
    })
