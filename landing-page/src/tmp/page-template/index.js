const leftSideBar = document.getElementsByClassName("page-left-sidebar")[0];
const btnOpenClose = document.getElementById("btn-open-close");

btnOpenClose.addEventListener("click", () => {
    leftSideBar.classList.toggle("close");
    btnOpenClose.innerHTML = leftSideBar.classList.contains("close")
        ? "&gt;"
        : "&lt;";
});
