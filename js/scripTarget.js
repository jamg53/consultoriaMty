document.querySelector(".box1").addEventListener("click", box_selected1);
document.querySelector(".box2").addEventListener("click", box_selected2);
document.querySelector(".box3").addEventListener("click", box_selected3);
document.querySelector(".box4").addEventListener("click", box_selected4);
document.querySelector(".box5").addEventListener("click", box_selected5);

//declaracion de variables

//box1

box1 = document.querySelector(".box1");
check_bg1 = document.querySelector(".box1 .check");
icon_check1 = document.querySelector(".box1 .fa-check");

//box2

box2 = document.querySelector(".box2");
check_bg2 = document.querySelector(".box2 .check");
icon_check2 = document.querySelector(".box2 .fa-check");

//box3

box3 = document.querySelector(".box3");
check_bg3 = document.querySelector(".box3 .check");
icon_check3 = document.querySelector(".box3 .fa-check");

//box4

box3 = document.querySelector(".box3");
check_bg3 = document.querySelector(".box3 .check");
icon_check3 = document.querySelector(".box3 .fa-check");
//box5

box5 = document.querySelector(".box5");
check_bg5 = document.querySelector(".box5 .check");
icon_check5 = document.querySelector(".box5 .fa-check");

value_box = 0;

function box_selected1 () {
    box2.classList.remove('box-selected');
    check_bg2.classList.remove('check-selected');
    icon_check2.classList.remove('icon-check');

    box3.classList.remove('box-selected');
    check_bg3.classList.remove('check-selected');
    icon_check3.classList.remove('icon-check');

    box1.classList.toggle('box-selected');
    check_bg1.classList.toggle('check-selected');
    icon_check1.classList.toggle('icon-check');

    value_box = 1;
    console.log(value_box);
}

function box_selected2 () {

    box1.classList.remove('box-selected');
    check_bg1.classList.remove('check-selected');
    icon_check1.classList.remove('icon-check');

    box3.classList.remove('box-selected');
    check_bg3.classList.remove('check-selected');
    icon_check3.classList.remove('icon-check');

    box2.classList.toggle('box-selected');
    check_bg2.classList.toggle('check-selected');
    icon_check2.classList.toggle('icon-check');

    value_box = 2;
    console.log(value_box);
}

function box_selected3 () {
    box1.classList.remove('box-selected');
    check_bg1.classList.remove('check-selected');
    icon_check1.classList.remove('icon-check');

    box2.classList.remove('box-selected');
    check_bg2.classList.remove('check-selected');
    icon_check2.classList.remove('icon-check');

    box3.classList.toggle('box-selected');
    check_bg3.classList.toggle('check-selected');
    icon_check3.classList.toggle('icon-check');

    value_box = 3;
    console.log(value_box);
}