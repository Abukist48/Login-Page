// Check if dark mode preference exists in local storage
const prefersDarkMode = localStorage.getItem("darkMode");

function toggleDarkMode() {
	const body = document.querySelector("body");
    const inner = document.querySelector(".inner");
    const btn=document.getElementById("dark-mode-toggle");
	body.classList.toggle("dark-mode");
    btn.classList.toggle("text-white");
    btn.classList.toggle("bg-dark");
    inner.classList.toggle('dark')
}

document
	.getElementById("dark-mode-toggle")
	.addEventListener("click", toggleDarkMode);

