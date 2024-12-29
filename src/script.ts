const moreInfoElements = document.querySelectorAll('.more-info');

moreInfoElements.forEach( more => {
    more.addEventListener('click', (event) => {
        const target = event.currentTarget as HTMLElement;
        const parent = target.parentElement;

        parent?.nextElementSibling?.classList.toggle('hidden');
        changeIcon(target);
    })
})

const changeIcon = (element:HTMLElement):void => {
    const value = element.getAttribute('src');

    if(value?.includes('minus')) {
        element.setAttribute('src','../assets/images/icon-plus.svg');
    } else {
        element.setAttribute('src','../assets/images/icon-minus.svg');
    }
}