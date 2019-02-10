var d = new Date();
document.getElementById("id_business_version").innerHTML = "Business version = " + d.getFullYear() + "." 
+ (d.getMonth()+1) + "." + d.getDate() + ".9"; 
navigator.geolocation.getCurrentPosition(on_position_success,on_position_failure);
//------------------------------
var global_lat ;
var global_lon ;
var MAP_ID = 'p7pJ0d3PHG6DwXF3ASFx'; 
var MAP_CODE = 'uOuSFe90zeG5o2uhlCz2pQ'; 
//------------------
function cauta()
{	
	var select = document.getElementById('id_locatii');
	select.style.visibility = 'hidden';
	select.innerHTML = '';
	
	if (document.getElementById("id_locatie_text").value == '') {
		alert('Eroare: Introdu locatia');
		return;
	}
	
	var coord_data_raw = httpGet("https://geocoder.api.here.com/6.2/geocode.json"
		+"?searchtext="+document.getElementById("id_locatie_text").value
		+"&app_id="+MAP_ID
		+"&app_code="+MAP_CODE);
	var coord_data = JSON.parse(coord_data_raw);
	
	if (coord_data.Response.View.length == 0 || coord_data.Response.View[0].Result.length == 0) {
		alert('Eroare: Locatia nu poate fi gasita');
		return;
	}
	
	select.style.visibility = 'visible';
	select.options[0] = new Option('- alege o locatie -', null, true);
	select.options[0].disabled = true;
	
	coord_data.Response.View[0].Result.forEach(function(result) {
		select.options[select.options.length] = new Option(
			result.Location.Address.Label, 
			result.Location.DisplayPosition.Latitude+'|'+result.Location.DisplayPosition.Longitude
		);
	});
}
//--locatia utilizator----------
function on_position_success(e) 
{ 
	global_lat = e.coords.latitude;
	global_lon = e.coords.longitude;

	var map_str = "https://image.maps.api.here.com/mia/1.6/mapview"
					+"?c="+global_lat+","+global_lon
					+"&z=15"
					+"&w=600&h=500"
					+"&app_id="+MAP_ID
					+"&app_code="+MAP_CODE;
				
	document.getElementById("id_img").src = map_str;
	document.getElementById("id_exp").innerHTML = "	Locatie curenta afisata";
	
}
//------------------
function line(select)
{			
	var coordonate = select.value.split('|');
	
	var map_str = "https://image.maps.api.here.com/mia/1.6/route"
					+"?r0="+global_lat+","+global_lon+","+coordonate[0]+","+coordonate[1]
					+"&m0="+global_lat+","+global_lon+","+coordonate[0]+","+coordonate[1]
					+"&lc0=00ff00"
					+"&sc0=000000"
					+"&lw0=6"
					+"&w=600&h=500"
					+"&app_id="+MAP_ID
					+"&app_code="+MAP_CODE;
	
	document.getElementById("id_img").src=map_str;
	document.getElementById("id_exp").innerHTML = "Trasarea liniei pozitia curenta si cea prezenta";
}
//----------------------
function on_position_failure(e)
{
	
	alert("Nu stiu unde ma aflu!");
	
}
//----------------------
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
//------end----

/*

https://image.maps.api.here.com/mia/1.6/mapview
?c=52.5159,13.3777
&z=14
&w=500&h=500
&f=1
&app_id=p7pJ0d3PHG6DwXF3ASFx
&app_code=uOuSFe90zeG5o2uhlCz2pQ
&r=1549804547720
*/

/*
https://image.maps.api.here.com/mia/1.6/route
?r0=52.5338,13.2966,52.538361,13.325329
&m0=52.5338,13.2966,52.538361,13.325329
&lc0=00ff00
&sc0=000000
&lw0=6
&w=600&h=500
&f=1
&app_id=p7pJ0d3PHG6DwXF3ASFx
&app_code=uOuSFe90zeG5o2uhlCz2pQ
*/






