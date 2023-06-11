document.querySelector('.form').addEventListener('submit', event => { 
    event.preventDefault();

//беру необходимые элементы
    const btn = document.querySelector('.btn');
    const selectList = document.getElementById('select').value;
    const number = document.querySelector('.number').value;
    const infoBlock = document.querySelector('.info');
    const errorDiv = document.querySelector('.error');
    const load = document.querySelector('.load');

//сообщение о загрузке
    infoBlock.textContent = 'Загрузка ...';
    
//создаю  фетч запрос
    fetch (`http://swapi.dev/api/${selectList}/${number}/`)
        .then((res) => {
            if(!res.ok) {
                throw new Error('Сервер не доступен!');
            }
            return res.json();
        })
        .then((res) => {
            console.log(res);
            errorDiv.innerHTML = '';            
            infoBlock.innerHTML = `
            <div>${res}</div>`;
        })
        .catch((error) => {
            infoBlock.textContent = '';
            errorDiv.innerHTML = `
            <div><span>Ошибка:</span>${error.message}</div>`;
            })
        .finally(() => {
            number.value = '';
        })
})