var settingsmenu = document.querySelector('.settings-menu');
var darkBtn = document.getElementById('dark-btn');

function myFunc(){
    settingsmenu.classList.toggle('settings-menu-height');
}
// Whenever we click button change local storage
darkBtn.onclick = function(){
    darkBtn.classList.toggle('dark-btn-on');
    document.body.classList.toggle('dark-theme');

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");
    }

}
// If it is light remove these classes and get light mode
if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove('dark-theme');
}
// if local strg is dark add these classes and get dark mode
else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add('dark-theme');
}
// First time you visit you will get light theme
else{
    localStorage.setItem("theme","light");
}

// Sehifeni Refresh edende qara qalsin ve ya ag qalsin Local Storage istifade olunur
//  Get 1 Set name and value  (Name,Value)
localStorage.setItem("theme","dark");
localStorage.getItem("theme");