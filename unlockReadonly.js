function unlockReadonly(){
	
	var ot = document.getElementById("pother");
	var other = document.getElementById("stateother");
	
	if(ot.checked == true){
		other.readOnly = false;
	}else{
		other.readOnly = true;
	}
}