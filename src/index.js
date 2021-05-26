import './style.css';

function component() {
    const element = document.createElement('div');

    element.textContent = 'hello';

    return element;
}

const content = document.getElementById('content');
content.appendChild(component());