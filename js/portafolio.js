function moverizq(){
    var imagen5;
    imagen5 = document.getElementById('img5').src;
    document.getElementById('img5').src = document.getElementById('img1').src;
    document.getElementById('img1').src = document.getElementById('img2').src;
    document.getElementById('img2').src = document.getElementById('img3').src;
    document.getElementById('img3').src = document.getElementById('img4').src;
    document.getElementById('img4').src = imagen5;
}
function moverder(){
    var imagen1;
    imagen1 = document.getElementById('img1').src;
    document.getElementById('img1').src = document.getElementById('img5').src;
    document.getElementById('img5').src = document.getElementById('img4').src;
    document.getElementById('img4').src = document.getElementById('img3').src;
    document.getElementById('img3').src = document.getElementById('img2').src;
    document.getElementById('img2').src = imagen1;
}