function toggleDropdown() {
    const dropdown = document.getElementById("languageDropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// Close dropdown if clicked outside
window.onclick = function(event) {
    if (!event.target.matches('.language-button')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            dropdowns[i].style.display = "none";
        }
    }
};
function toggleDropdown() {
    const dropdown = document.getElementById("languageDropdown");
    const arrow = document.getElementById("arrow");

    // Toggle visibility
    dropdown.classList.toggle("show");

    // Toggle arrow direction
    arrow.classList.toggle("rotate");
}

// Close dropdown if clicked outside
window.onclick = function(event) {
    if (!event.target.matches('.language-button')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        const arrow = document.getElementById("arrow");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                arrow.classList.remove('rotate');
            }
        }
    }
}