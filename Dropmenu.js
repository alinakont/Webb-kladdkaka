//Navigationbar (meny)
// När användaren klickar på dropmenyn kommer navbaren gå mellan att vara synlig och osynlig
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
// dropdown menyn blir osynlig när pekaren går utanför menyknappen
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Topbar
// När användaren skrollar ner åker baren upp och tvärtom
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollpos = window.pageYOffset;
    if (prevScrollpos > currentScrollpos) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-100px";
    }
    prevScrollpos = currentScrollpos;
}