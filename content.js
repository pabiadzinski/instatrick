window.addEventListener('scroll', () => {
    const popup = document.querySelector("#fb-root");
    if (popup && popup.nextSibling) {
        setTimeout(() => {
            document.querySelector('body').style.removeProperty('overflow');
            popup.nextSibling.remove();
        })
    }
});