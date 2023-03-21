var majimaCounter = 0;
var kiryuCounter = 0;
var first = 1;
var Kpick = document.getElementById("i0");
var Mpick = document.getElementById("i3");

document.getElementById("scoreKiryu").innerHTML = kiryuCounter;
document.getElementById("scoreMajima").innerHTML = majimaCounter;

function reset()
{
    majimaCounter = 0;
    kiryuCounter = 0;
    Mpick.style.display = "none";
    Kpick.style.display = "none";
    document.getElementById("scoreKiryu").innerHTML = kiryuCounter;
    document.getElementById("scoreMajima").innerHTML = majimaCounter;
    document.getElementById("MajimaWon").style.display = "none";
    document.getElementById("KiryuWon").style.display = "none";
}

function menu_show()
{
    var menu = document.getElementById("menu");
    var lore = document.getElementById("lore");
    var game = document.getElementById("game");
    var go = document.getElementById("game_over");

    
    go.style.display = "none";
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
    var go = document.getElementById("game_over");
    go.style.display = "none";
    menu.style.display = "none";
    game.style.display = "block";
}

function randint(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function game_over()
{
    var go = document.getElementById("game_over");
    var game = document.getElementById("game"); 
    game.style.display = "none";
    go.style.display = "block";
    if (kiryuCounter == 11) 
    {
        document.getElementById("KiryuWon").style.display = "block";  
    }
    else
    {
        var sfx = new Audio();
        sfx.src = "sounds/kiryu_chan.mp3";
        sfx.play();
        document.getElementById("MajimaWon").style.display = "block";
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}                           // r    s    p
function match(Kiryu) // 0 -> 1 -> 2
{                           // ^---------ˇ
    Mpick.style.display = "none";
    Kpick.style.display = "none";
    const arr = [0,1,2];
    var result = document.getElementById("result");
    result.innerHTML = "";
    var Majima = randint(3, 5);
    Kpick = document.getElementById("i"+Kiryu.toString());
    Mpick = document.getElementById("i"+Majima.toString());
    Kpick.style.display = "block";
    Mpick.style.display = "block";
    if (Majima%3 == Kiryu && !first) 
    {
        result.innerHTML = "Draw!";
    }
    else if (arr[(Kiryu+1)%3] == arr[Majima%3])
    {
        kiryuCounter++;
        document.getElementById("scoreKiryu").innerHTML = kiryuCounter;
        result.innerHTML = "Kiryu won!";
    }
    else 
    {
        majimaCounter++;
        document.getElementById("scoreMajima").innerHTML = majimaCounter;
        result.innerHTML = "Majima won!";
    }
    if(majimaCounter == 11 || kiryuCounter == 11)
    {
        game_over();
        return;
    }
    first = 0;
}

function retry()
{
    reset();
    game_show();
}
