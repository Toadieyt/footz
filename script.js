const searchInput = document.querySelector(".search");
const div = [...document.querySelectorAll(".div-categories")];
const element = document.querySelector(".main-div-categories");
const searchWord = e => {
    const currentWord = e.target.value.toUpperCase();
    let result = div;
    result = result.filter(div => div.textContent.toUpperCase().includes(currentWord)) ;
    element.textContent = '';
    result.forEach(name => element.appendChild(name));
}
searchInput.addEventListener('input', searchWord);