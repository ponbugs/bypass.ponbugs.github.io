document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.getElementById('mode-toggle');

    window.toggleMode = () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            modeToggle.textContent = '☀️';
        } else {
            modeToggle.textContent = '🌙';
        }
    };

    modeToggle.addEventListener('click', window.toggleMode);

    const container = document.querySelector('.container');
    const tools = Array.from(container.getElementsByClassName('logo-item'));

    tools.sort((a, b) => {
        const textA = a.querySelector('span b').textContent.toUpperCase();
        const textB = b.querySelector('span b').textContent.toUpperCase();
        return textA.localeCompare(textB);
    });

    tools.forEach(tool => container.appendChild(tool));

    const otherApksContainer = document.querySelector('.other-apks');
    const listItems = Array.from(otherApksContainer.querySelectorAll('ul li'));

    listItems.forEach(item => {
        item.classList.add('other-apks');
    });

    listItems.sort((a, b) => {
        const textA = a.textContent.toUpperCase();
        const textB = b.textContent.toUpperCase();
        return textA.localeCompare(textB);
    });

    const ul = otherApksContainer.querySelector('ul');
    listItems.forEach(item => ul.appendChild(item));
});
