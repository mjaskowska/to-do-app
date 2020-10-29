const fieldInput = document.querySelector('#field');
const itemList = document.querySelector('#item-list');
const btn = document.querySelector('.btn');
const errorMsg = document.querySelector('.error-msg');

btn.addEventListener('click', addItem);
function addItem(e) {
    e.preventDefault();
    if (fieldInput.value === '') {
        alert('nothing to add.');
    } else {
        const li = document.createElement('li');
        li.setAttribute('class', 'item');
        const p = document.createElement('p');
        p.innerHTML = `${fieldInput.value}`;
        p.setAttribute('class', 'p-item');
        const trash = document.createElement('button');
        trash.setAttribute('class', 'trash');
        trash.innerHTML = `X`;
        const checked = document.createElement('button');
        checked.setAttribute('class', 'checked');
        checked.innerHTML = '✓';

        itemList.appendChild(li);
        li.appendChild(p);
        li.appendChild(trash);
        li.appendChild(checked);

        itemList.classList.add('items');
        li.classList.add('item');
        p.classList.add('p-item');
        trash.classList.add('trash');
        checked.classList.add('checked');

        //   clear field
        fieldInput.value = '';

        trash.addEventListener('click', removeItem);
        function removeItem(e) {
            li.parentNode.removeChild(li);
        }

        checked.addEventListener('click', checkItem);
        function checkItem(e) {
            p.classList.add('on-check');
        }



    }


};
