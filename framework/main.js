const Router = require('./router');

window.onload = () => {
    function handleUrlChange(url) {
        window.history.pushState({}, '', url);
    }

    const navElements = document.querySelectorAll('a[data-role=nav]');

    for (const navEl of navElements) {
        navEl.addEventListener('click', evt => {
            handleUrlChange(evt.target.href);

            evt.preventDefault();
        });
    }
}
