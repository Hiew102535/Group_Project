function calculatePrice(){
	var t1price = eval(document.forms["order"]["t1"].value);
	var t1qtyIndex = document.forms["order"]["qtyt1"].selectedIndex;
	var t1quantity = eval(document.forms["order"]["qtyt1"].options[t1qtyIndex].value);
	
	var t2price = eval(document.forms["order"]["t2"].value);
	var t2qtyIndex = document.forms["order"]["qtyt2"].selectedIndex;
	var t2quantity = eval(document.forms["order"]["qtyt2"].options[t2qtyIndex].value);
	
	var t3price = eval(document.forms["order"]["t3"].value);
	var t3qtyIndex = document.forms["order"]["qtyt3"].selectedIndex;
	var t3quantity = eval(document.forms["order"]["qtyt3"].options[t3qtyIndex].value);
	
	var c1price = eval(document.forms["order"]["c1"].value);
	var c1qtyIndex = document.forms["order"]["qtyc1"].selectedIndex;
	var c1quantity = eval(document.forms["order"]["qtyc1"].options[c1qtyIndex].value);
	
	var c2price = eval(document.forms["order"]["c2"].value);
	var c2qtyIndex = document.forms["order"]["qtyc2"].selectedIndex;
	var c2quantity = eval(document.forms["order"]["qtyc2"].options[c2qtyIndex].value);
	
	var c3price = eval(document.forms["order"]["c3"].value);
	var c3qtyIndex = document.forms["order"]["qtyc3"].selectedIndex;
	var c3quantity = eval(document.forms["order"]["qtyc3"].options[c3qtyIndex].value);
	
	var s1price = eval(document.forms["order"]["s1"].value);
	var s1qtyIndex = document.forms["order"]["qtys1"].selectedIndex;
	var s1quantity = eval(document.forms["order"]["qtys1"].options[s1qtyIndex].value);
	
	var s2price = eval(document.forms["order"]["s2"].value);
	var s2qtyIndex = document.forms["order"]["qtys2"].selectedIndex;
	var s2quantity = eval(document.forms["order"]["qtys2"].options[s2qtyIndex].value);
	
	var s3price = eval(document.forms["order"]["s3"].value);
	var s3qtyIndex = document.forms["order"]["qtys3"].selectedIndex;
	var s3quantity = eval(document.forms["order"]["qtys3"].options[s3qtyIndex].value);
	
	var b1price = eval(document.forms["order"]["b1"].value);
	var b1qtyIndex = document.forms["order"]["qtyb1"].selectedIndex;
	var b1quantity = eval(document.forms["order"]["qtyb1"].options[b1qtyIndex].value);
	
	var b2price = eval(document.forms["order"]["b2"].value);
	var b2qtyIndex = document.forms["order"]["qtyb2"].selectedIndex;
	var b2quantity = eval(document.forms["order"]["qtyb2"].options[b2qtyIndex].value);
	
	var b3price = eval(document.forms["order"]["b3"].value);
	var b3qtyIndex = document.forms["order"]["qtyb3"].selectedIndex;
	var b3quantity = eval(document.forms["order"]["qtyb3"].options[b3qtyIndex].value);
	
	var st1price = eval(document.forms["order"]["st1"].value);
	var st1qtyIndex = document.forms["order"]["qtyst1"].selectedIndex;
	var st1quantity = eval(document.forms["order"]["qtyst1"].options[st1qtyIndex].value);
	
	var st2price = eval(document.forms["order"]["st2"].value);
	var st2qtyIndex = document.forms["order"]["qtyst2"].selectedIndex;
	var st2quantity = eval(document.forms["order"]["qtyst2"].options[st2qtyIndex].value);
	
	var st3price = eval(document.forms["order"]["st3"].value);
	var st3qtyIndex = document.forms["order"]["qtyst3"].selectedIndex;
	var st3quantity = eval(document.forms["order"]["qtyst3"].options[st3qtyIndex].value);
	
	var a1price = eval(document.forms["order"]["a1"].value);
	var a1qtyIndex = document.forms["order"]["qtya1"].selectedIndex;
	var a1quantity = eval(document.forms["order"]["qtya1"].options[a1qtyIndex].value);
	
	var a2price = eval(document.forms["order"]["a2"].value);
	var a2qtyIndex = document.forms["order"]["qtya2"].selectedIndex;
	var a2quantity = eval(document.forms["order"]["qtya2"].options[a2qtyIndex].value);
	
	var a3price = eval(document.forms["order"]["a3"].value);
	var a3qtyIndex = document.forms["order"]["qtya3"].selectedIndex;
	var a3quantity = eval(document.forms["order"]["qtya3"].options[a3qtyIndex].value);
	
	var t1total = t1price * t1quantity;
	var t2total = t2price * t2quantity;
	var t3total = t3price * t3quantity;
	
	var c1total = c1price * c1quantity;
	var c2total = c2price * c2quantity;
	var c3total = c3price * c3quantity;
	
	var s1total = s1price * s1quantity;
	var s2total = s2price * s2quantity;
	var s3total = s3price * s3quantity;
	
	var b1total = b1price * b1quantity;
	var b2total = b2price * b2quantity;
	var b3total = b3price * b3quantity;
	
	var st1total = st1price * st1quantity;
	var st2total = st2price * st2quantity;
	var st3total = st3price * st3quantity;
	
	var a1total = a1price * a1quantity;
	var a2total = a2price * a2quantity;
	var a3total = a3price * a3quantity;
	
	var total = t1total + t2total + t3total + c1total + c2total + c3total + s1total + s2total + s3total + b1total + b2total + b3total + st1total + st2total + st3total + a1total + a2total + a3total;
	
	document.forms["order"]["totalPrice"].value = "RM " + total.toFixed(2);
}