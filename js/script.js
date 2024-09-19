document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.getElementById('mode-toggle');
    const savedMode = localStorage.getItem('theme') || 'light';

    const setMode = (mode) => {
        document.body.classList.toggle('dark-mode', mode === 'dark');
        modeToggle.textContent = mode === 'dark' ? '☀️' : '🌙';
        localStorage.setItem('theme', mode);
    };

    setMode(savedMode);

    if (modeToggle) {
        window.toggleMode = () => {
            const currentMode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
            const newMode = currentMode === 'dark' ? 'light' : 'dark';
            setMode(newMode);
        };

        modeToggle.addEventListener('click', window.toggleMode);
    }

    const container = document.querySelector('.container');
    if (container) {
        const tools = Array.from(container.getElementsByClassName('logo-item'));

        tools.sort((a, b) => {
            const textA = a.querySelector('span b').textContent.toUpperCase();
            const textB = b.querySelector('span b').textContent.toUpperCase();
            return textA.localeCompare(textB);
        });

        tools.forEach(tool => container.appendChild(tool));
    }

    const otherApksContainer = document.querySelector('.other-apks');
    if (otherApksContainer) {
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
    }

    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');

    if (hamburger && navbar) {
        hamburger.addEventListener('click', () => {
            navbar.classList.toggle('show');
            hamburger.classList.toggle('active');
        });
    } else {
        console.warn('Hamburger or navbar element not found');
    }
});
