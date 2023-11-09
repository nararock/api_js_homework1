const text = document.querySelector('.orientation');
screen.orientation.addEventListener('change', () => {
    if (screen.orientation.type === 'portrait-primary' || screen.orientation.type === 'portrait-secondary'){
        text.textContent = 'Ваш экран сменил ориентацию с ландшафтной на портретную.'
    } else{
        text.textContent = 'Ваш экран сменил ориентацию с портретной на ландшафтную.'
    }
})
