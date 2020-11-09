document.title = "Register or Log In";

function formValidation(){
	
	var name = document.forms["Reg"]["fname"].value;
	var idno = document.forms["Reg"]["ic"].value;
	var patternID = /^\d{6}\-\d{2}\-\d{4}$/;
	var emailadd = document.forms["Reg"]["myEmail"].value;
	var Pass = document.forms["Reg"]["pass"].value;
	var CPass = document.forms["Reg"]["cpass"].value;
	var addr = document.forms["Reg"]["add"].value;
	var code = document.forms["Reg"]["pcode"].value;
	var patternCode = /^\d{5}$/;
	var state = document.forms["Reg"]["state"].value;
	var telh = document.forms["Reg"]["telh"].value;
	var telo = document.forms["Reg"]["telo"].value;
	var telm = document.forms["Reg"]["telm"].value;
	var patternTel = /^\d{2}\-\d{7}$/;
	var patternTelm = /^\d{3}\-\d{7}$/;
	
	if(name == ""){
		window.alert("Please insert your Name to register!");
		document.forms["Reg"]["fname"].focus();
		return false;
	}
	
	if(idno == ""){
		window.alert("Please insert your NRIC No. to register!");
		document.forms["Reg"]["ic"].focus();
		return false;
	}else{
		if(patternID.test(idno) == false){
			window.alert("Invalid NRIC Number!");
			document.forms["Reg"]["ic"].focus();
			return false;
		}
	}
	
	if(emailadd == ""){
		window.alert("Please insert your Email to register!");
		document.forms["Reg"]["myEmail"].focus();
		return false;
	}
	
	if(Pass == ""){
		window.alert("Please insert your Password to register!");
		document.forms["Reg"]["pass"].focus();
		return false;
	}else{
		if(Pass.length<=8){
			window.alert("Password must be longer than 8.");
			document.forms["Reg"]["pass"].focus();
			return false;
		}
	}
	
	if(CPass == ""){
		window.alert("Please insert your Confirmed Password to register!");
		document.forms["Reg"]["cpass"].focus();
		return false;
	}else{
		if(CPass != Pass){
			window.alert("Confirmed Password does not match!");
			document.forms["Reg"]["cpass"].focus();
			return false;
		}
	}
	
	if(addr == ""){
		window.alert("Please insert your Address to register!");
		document.forms["Reg"]["add"].focus();
		return false;
	}
	
	if(code == ""){
		window.alert("Please insert your Post Code to register!");
		document.forms["Reg"]["pcode"].focus();
		return false;
	}else{
		if(patternCode.test(code) == false){
			window.alert("Invalid Post Code!");
			document.forms["Reg"]["pcode"].focus();
			return false;
		}
	}
	
	if(state == "Please Select"){
		window.alert("Please select your state to register!");
		document.forms["Reg"]["state"].focus();
		return false;
	}
	
	if(telh == ""){
		window.alert("Please insert your Phone Number to register!");
		document.forms["Reg"]["telh"].focus();
		return false;
	}else{
		if(patternTel.test(telh) == false){
			window.alert("Invalid Phone Number!");
			document.forms["Reg"]["telh"].focus();
			return false;
		}
	}
	
	if(telm == ""){
		window.alert("Please insert your Mobile to register!");
		document.forms["Reg"]["telm"].focus();
		return false;
	}else{
		if(patternTel.test(telm) == false){
			window.alert("Invalid Mobile Number!");
			document.forms["Reg"]["telm"].focus();
			return false;
		}
	}
	
	if(telo == ""){
		window.alert("Registered Successfully!");
		setTimeout(function() {window.location = "Home.html" });
	}else{
		if(patternTel.test(telo) == false){
			window.alert("Invalid Phone Number!");
			document.forms["Reg"]["telo"].focus();
			return false;
		}else{
			window.alert("Registered Successfully!");
			setTimeout(function() {window.location = "Home.html" });
		}
	}
	}
		


function LogInValidation(){
	
	var UserEmail = document.forms["userLogIn"]["userEmail"].value;
	var UserPass = document.forms["userLogIn"]["userpass"].value;
	
	if(UserEmail == ""){
		window.alert("Please insert your Email to log in!");
		document.forms["userLogIn"]["userEmail"].focus();
		return false;
	}
	
	if(UserPass == ""){
		window.alert("Please insert your Password to log in!");
		document.forms["userLogIn"]["userPass"].focus();
		return false;
	}
	
	if(UserPass.length<=8){
			window.alert("Password must be longer than 8.");
			document.forms["Reg"]["userPass"].focus();
			return false;	
	}else{
		window.alert("Logged In Successfully!");
		setTimeout(function() {window.location = "Home.html" });
	}
	
}