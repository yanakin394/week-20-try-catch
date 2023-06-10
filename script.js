//беру необходимые элементы
const btn = document.querySelector('btn');
const selectList = document.getElementById('select').value;
const number = document.querySelector('number').value;
const infoBlock = document.querySelector('info');
const errorDiv = document.querySelector('error');

//создаю функцию для фетч запроса
function getInfo () {
    fetch ('http swapi.dev/api/`${selectList}`/${number}/'), {
        body: JSON.stringify(res),
    }
    .then((res) => {
        console.log(res)
        infoBlock.innerHTML = res;
    })
    .catch((err) => {
    console.log('Произошла ошибка');
    });
}

// добавляю обработчик, вызываю там функцию запроса и ловлю ошибку, если она есть
btn.addEventListener('click', () => {
    try {
        getInfo();
    } catch(err) {
        alert('Ошибка сервера!');
        errorDiv.innerHTML = err;
    }
})