console.log("script running...")
document.querySelector('.cross').style.display = 'none';
document.querySelector('.ham').addEventListener("click", () => {
    document.querySelector('.sidebar').classList.toggle('sidebargo');

    // if (document.querySelector('.sidebar').classList.toggle('sidebargo')) {
    //     document.querySelector('.ham').style.display = 'inline';
    //     document.querySelector('.cross').style.display = 'none';

    // }
    // else {
    //     document.querySelector('.ham').style.display = 'none';
    //     document.querySelector('.cross').style.display = 'inline';
    // }
});


var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}
