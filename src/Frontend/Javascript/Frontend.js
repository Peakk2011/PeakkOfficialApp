const ToggleSidebar = document.getElementById("ToggleSidebar");
const Sidebar = document.getElementById("Sidebar")
const Sidebarcontent = document.getElementById("SidebarCon");
const BGBlur = document.getElementById("bgblur");

// Sidebar.style.transform = "translateX(0px)";

ToggleSidebar.addEventListener("click", () => {
    if (Sidebar.style.transform == "translateX(0px)") {
        Sidebar.style.transform = "translateX(-300px)";
        Sidebar.style.opacity = "0"
    }
    else if (Sidebar.style.transform == "translateX(-300px)") {
        Sidebar.style.transform = "translateX(0px)";
        Sidebar.style.opacity = "1"
    } else {
        Sidebar.style.transform = "translateX(0px)";
        Sidebar.style.opacity = "1"
    }
    setTimeout(() => {
        Sidebarcontent.classList.toggle('SidebarVisible')
    }, 440);
})

// loading

const logo = document.getElementById("TransparentLogo");
const Loading = document.querySelector(".Loading");

setTimeout(() => {
    setTimeout(() => {
        Loading.style.opacity = "0";
        setTimeout(() => {
            Loading.style.display = "none";
        }, 300);
    }, 300);
    if (Loading.style.display == "none") {
        document.body.style.overflow = "auto"
    }
}, 600);


// Right click func

document.onclick = hideMenu;
document.oncontextmenu = rightClick;


if (screen.width < 700) {
    document.getElementById("contextMenu").style.cssText = "scale: 100%;";

} else {
    document.getElementById("contextMenu").style.cssText = "scale: 89%;";
}

document.body.addEventListener("touchstart", tapHandler);

var tapedTwice = false;

function tapHandler(event) {
    if (!tapedTwice) {
        tapedTwice = true;
        setTimeout(function () { tapedTwice = false; }, 300);
        return false;
    }
    event.preventDefault();
    //action on double tap goes below
    // alert('You tapped me Twice !!!');
    RightCik()
}

function hideMenu() {
    document.getElementById("contextMenu").style.display = "none"
}

function RightCik() {
    if (document.getElementById("contextMenu").style.display == "block")
        hideMenu();
    else {
        let menu = document.getElementById("contextMenu")
        menu.style.display = 'block';
        // menu.style.left = e.pageX + "px";
        // menu.style.top = e.pageY + "px";
    }
}

function rightClick(e) {
    e.preventDefault();

    if (document.getElementById("contextMenu").style.display == "block")
        hideMenu();
    else {
        let menu = document.getElementById("contextMenu")
        menu.style.display = 'block';
        menu.style.left = e.pageX + "px";
        menu.style.top = e.pageY + "px";
    }
}