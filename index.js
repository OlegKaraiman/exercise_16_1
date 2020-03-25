const box = document.querySelector('div.box');

box.onclick = function(event) {
    const {target} = event;
    const zero = 0;
    if (target.className === 'tooltip' && target.childElementCount === zero) {
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        const li1 = document.createElement('li');
        const li2 = document.createElement('li');
        li.setAttribute('class', 'tooltip-content');
        li1.setAttribute('class', 'tooltip-content');
        li2.setAttribute('class', 'tooltip-content');
        li.innerHTML = 'Пункт-1';
        li1.innerHTML = 'Пункт-2';
        li2.innerHTML = 'Пункт-3';
        target.append(ul);
        ul.appendChild(li);
        ul.appendChild(li1);
        ul.appendChild(li2);
    } else if (target.childElementCount > zero && target.className === 'tooltip') {
        const el = target.firstElementChild;
        el.parentNode.removeChild(el);
    }
};
