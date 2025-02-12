const select = document.getElementById('topicSelect');
const button = document.getElementById('goButton');

select.addEventListener('change', () => {
    button.disabled = !select.value;
});

button.addEventListener('click', () => {
    if (select.value) {
        window.location.href = select.value;
    }
});
