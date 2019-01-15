document.getElementById(“id_logic_version”).innerHTML = “Logic version: 2019.01.15.0”;

function rezolva()
{
// citire
	var a = document.getElementById(“id_a”).value;
var b = document.getElementById(“id_b”).value;
var c = document.getElementById(“id_c”).value;

// calcul
var delta = b * b - 4 * a * c;
var x1, x2;
if (delta >= 0){
x1 = (-b + Math.sqrt(delta)) / (2 * a * c);
x2 = (-b - Math.sqrt(delta)) / (2 * a * c);
}
else{

}
// afisare
document.getElementById(“id_x1”).value = x1;
document.getElementById(“id_x2”).value = x2;

}





