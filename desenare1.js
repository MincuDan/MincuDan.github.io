document.getElementById("id_logic_version").innerHTML = "Logic version = 2018.11.20.6";


var canvas = document.getElementById("id_canvas");
canvas.addEventListener("touchstart", on_thuch);
canvas.addEventListener("touchmove", on_thuch_move);
var  rect = canvas.getBoundingClientRect();
//--------------------------------------------------
var lastX = 0;
var lastY = 0;

function on_thuch(e)
{
	e.preventDefault
	for (var i = 0; i < e.changedTouches.length; i++);
	{
		var context = canvas.getContext("2d");
		context.beginPath();
		context.arc(e.changedTouches.item(i).pageX - rect . left, e.changedTouches.item(i).pageY - rect . right)
		10,
		0, 1 * Math.PI
		);
		context.stroke();
		lastX = e.changedTouches.item(i).pageX
		lastY = e.changedTouches.item(i).pageY
	}
}
function on_thuch_move(e)
{
	e.preventDefault
	for (var i = 0; i < e.changedTouches.length; i++);
	{
		var context = canvas.getContext("2d");
		context.beginPath();
		context . lineWidth = 1;
		context.arc(e.changedTouches.item(i).pageX - rect . left,
 		            e.changedTouches.item(i).pageY - rect . top);
		            10,
		            0, 2 * Math.PI
		            );
		context.stroke();
		
		context.BeginPath();
					context . lineWidth = 20;
		            context.moveTo(lastX - rect.left, lastY - rect.right )
		            context.linneTo(e.changedTouches.item(i).pageX - rect . left,
 		                e.changedTouches.item(i).pageY - rect . top);
		
		lastX = e.changedTouches.item(i).pageX
		lastY = e.changedTouches.item(i).pageY
		context.stroke();
	}
}