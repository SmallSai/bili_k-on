window.onload=function(){
	var placeholder=document.getElementById("placeholder");
	var left_photo=document.getElementsByClassName("left");
	
	for(var i=0;i<left_photo.length;i++){
		left_photo[i].onmouseover=function(){
			var sourse=this.getAttribute("src");
			
			placeholder.setAttribute("src",sourse);
		}
	}
}