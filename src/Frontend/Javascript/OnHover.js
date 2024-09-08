const SidebarLinks = document.querySelectorAll(".sidebarlink > li > a");
const SidebarLinksIcons = document.querySelectorAll(".sidebarlink > li > a > ion-icon");
const ActiveNavbar = document.getElementById("ActiveNavbar")

for (let i = 0; i < SidebarLinks.length; i++) {
    SidebarLinks[i].addEventListener("mouseenter", function() {
        SidebarLinksIcons[i].style.color = "black";
    });
    SidebarLinks[i].addEventListener("click", function() {
        SidebarLinksIcons[i].style.color = "black";
    });
    SidebarLinks[i].addEventListener("mouseleave", function() {
        SidebarLinksIcons[i].style.color = "#C2C2C2";
    });
}