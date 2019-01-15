document.getElementById("id_logic_version").innerHTML = "Logic version: 2019.01.15.0";

function rezolva()
{
// citire
	var a = document.getElementById("id_a").value;
var b = document.getElementById("id_b").value;
var c = document.getElementById("id_c").value;

// calcul
var delta = b * b - 4 * a * c;
var x1, x2;
if (delta >= 0){
	x1 = (-b + Math.sqrt(delta)) / (2 * a * c);
	x2 = (-b - Math.sqrt(delta)) / (2 * a * c);
	x1_im = 0;
	x2_im = 0;

}
else{
	x1_re = (-b) / (2 * a * c);
	x2_re = (-b) / (2 * a * c);
	
	x1_im = (+ Math.sqrt(-delta)) / (2 * a * c);
	x2_im = (- Math.sqrt(-delta)) / (2 * a * c);

}
// afisare
document.getElementById("id_x1").value = x1_re + "+"" "+ x1_im + "i"";"
document.getElementById("id_x2").value = x2_re + "+" x2_im + "i"";"

}
