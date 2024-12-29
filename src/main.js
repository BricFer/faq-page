"use strict";
const moreInfoElements = document.querySelectorAll('.more-info');
moreInfoElements.forEach(more => {
    more.addEventListener('click', (event) => {
        var _a;
        const target = event.currentTarget;
        const parent = target.parentElement;
        (_a = parent === null || parent === void 0 ? void 0 : parent.nextElementSibling) === null || _a === void 0 ? void 0 : _a.classList.toggle('hidden');
        changeIcon(target);
    });
});
const changeIcon = (element) => {
    const value = element.getAttribute('src');
    if (value === null || value === void 0 ? void 0 : value.includes('minus')) {
        element.setAttribute('src', '../assets/images/icon-plus.svg');
    }
    else {
        element.setAttribute('src', '../assets/images/icon-minus.svg');
    }
};
//# sourceMappingURL=main.js.map