var majimaCounter = 0;
var kiryuCounter = 0;

document.getElementById("scoreKiryu").innerHTML = kiryuCounter;
document.getElementById("scoreMajima").innerHTML = majimaCounter;

function reset()
{
    majimaCounter = 0;
    kiryuCounter = 0;
    document.getElementById("scoreKiryu").innerHTML = kiryuCounter;
    document.getElementById("scoreMajima").innerHTML = majimaCounter;
}

function menu_show()
{
    var menu = document.getElementById("menu");
    var lore = document.getElementById("lore");
    var game = document.getElementById("game");
    lore.style.display = "none";
    game.style.display = "none";
    menu.style.display = "block";
    reset();
}

function lore_show() 
{
    var menu = document.getElementById("menu");
    var lore = document.getElementById("lore");
    menu.style.display = "none";
    lore.style.display = "block";
}

function game_show() 
{
    var menu = document.getElementById("menu");
    var game = document.getElementById("game"); 
    menu.style.display = "none";
    game.style.display = "block";
}

