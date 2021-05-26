import './reset.css';
import './style.css';

function main() {
    const mainView = document.getElementById('mainView');
    mainView.style.display = 'block';

    const resultView = document.getElementById('resultView');
    resultView.style.display = 'none';

    console.log('app loaded');
};

main();