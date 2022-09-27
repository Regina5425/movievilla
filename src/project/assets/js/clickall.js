export let clickAll = function(e) {
    let active = e.currentTarget;
        console.log(active);

        let number = active.className.match(/\d+/)[0];
        console.log(number);
        let title = document.querySelector('.slider' + number + '__title').textContent;
        console.log(title);
        localStorage.setItem("title", title);
};