		var result = "", temp = 0, temp2 = 0, situation = 0;

		function calcu (func) {

			switch(func) {

				case 1:
					if(temp == 0) {
						result = "1";
						temp = 1;
					}else {
						if(situation != 0) {
							result += "1";
							temp2 = temp2 * 10 + 1;
						}else {
							result += "1";
							temp = temp * 10 + 1;
						}	
					}
					
					document.getElementById("ans").innerHTML=result.toString();
			
					break;
				case 2:
					if(temp == 0) {
						result = "2";
						temp = 2;
					}else {
						if(situation != 0) {
							result += "2";
							temp2 = temp2 * 10 + 2;
						}else {
							result += "2";
							temp = temp * 10 + 2;
						}
					}

					document.getElementById("ans").innerHTML=result.toString();

					break;
				case 3:
					if(temp == 0) {
						result = "3";
						temp = 3;
					}else {
						if(situation != 0) {
							result += "3";
							temp2 = temp2 * 10 + 3;
						}else {
							result += "3";
							temp = temp * 10 + 3;
						}
					}

					document.getElementById("ans").innerHTML=result.toString();

					break;
				case 4:
					if(temp == 0) {
						result = "4";
						temp = 4;
					}else {
						if(situation != 0) {
							result += "4";
							temp2 = temp2 * 10 + 4;
						}else {
							result += "4";
							temp = temp * 10 + 4;
						}
					}

					document.getElementById("ans").innerHTML=result.toString();

					break;
				case 5:
					if(temp == 0) {
						result = "5";
						temp = 5;
					}else {
						if(situation != 0) {
							result += "5";
							temp2 = temp2 * 10 + 5;
						}else {
							result += "5";
							temp = temp * 10 + 5;
						}
					}

					document.getElementById("ans").innerHTML=result.toString();

					break;
				case 6:
					if(temp == 0) {
						result = "6";
						temp = 6;
					}else {
						if(situation != 0) {
							result += "6";
							temp2 = temp2 * 10 + 6;
						}else {
							result += "6";
							temp = temp * 10 + 6;
						}
					}

					document.getElementById("ans").innerHTML=result.toString();

					break;
				case 7:
					if(temp == 0) {
						result = "7";
						temp = 7;
					}else {
						if(situation != 0) {
							result += "7";
							temp2 = temp2 * 10 + 7;
						}else {
							result += "7";
							temp = temp * 10 + 7;
						}
					}

					document.getElementById("ans").innerHTML=result.toString();

					break;
				case 8:
					if(temp == 0) {
						result = "8";
						temp = 8;
					}else {
						if(situation != 0) {
							result += "8";
							temp2 = temp2 * 10 + 8;
						}else {
							result += "8";
							temp = temp * 10 + 8;
						}
					}

					document.getElementById("ans").innerHTML=result.toString();

					break;
				case 9:
					if(temp == 0) {
						result = "9";
						temp = 9;
					}else {
						if(situation != 0) {
							result += "9";
							temp2 = temp2 * 10 + 9;
						}else {
							result += "9";
							temp = temp * 10 + 9;
						}
					}

					document.getElementById("ans").innerHTML=result.toString();

					break;
				case 0:
					if(temp == 0) {
						result = "0";
						temp = 0;
					}else {
						if(situation != 0) {
							result += "0";
							temp2 = temp2 * 10;
						}else {
							result += "0";
							temp = temp * 10;
						}
					}

					document.getElementById("ans").innerHTML=result.toString();

					break;
				case 10:
					if(situation != 0) {
						if(situation == 1) {
							temp += temp2;
							plus();
						}else if(situation == 2) {
							temp -= temp2;
							plus();
						}else if(situation == 3) {
							temp *= temp2;
							plus();
						}else if(situation == 4) {
							temp /= temp2;
							plus();
						}else if(situation = 5) {

						}
						
					}else {
						result += " + ";
						document.getElementById("ans").innerHTML=result.toString();
						situation = 1;
					}

					break;
				case 11:
					if(situation != 0) {
						if(situation == 1) {
							temp += temp2;
							minus();
						}else if(situation == 2) {
							temp -= temp2;
							minus();
						}else if(situation == 3) {
							temp *= temp2;
							minus();
						}else if(situation == 4) {
							temp /= temp2;
							minus();
						}else if(situation = 5) {

						}
					}else {
						result += " - ";
						document.getElementById("ans").innerHTML=result.toString();
						situation = 2;
					}

					break;
				case 12:
					if(situation != 0) {
						if(situation == 1) {
							temp += temp2;
							mutiple();
						}else if(situation == 2) {
							temp -= temp2;
							mutiple();
						}else if(situation == 3) {
							temp *= temp2;
							mutiple();
						}else if(situation == 4) {
							temp /= temp2;
							mutiple();
						}else if(situation = 5) {

						}
					}else {
						result += " × ";
						document.getElementById("ans").innerHTML=result.toString();
						situation = 3;
					}

					break;
				case 13:
					if(situation != 0) {
						if(situation == 1) {
							temp += temp2;
							divide();
						}else if(situation == 2) {
							temp -= temp2;
							divide();
						}else if(situation == 3) {
							temp *= temp2;
							divide();
						}else if(situation == 4) {
							temp /= temp2;
							divide();
						}else if(situation = 5) {

						}
					}else {
						result += " ÷ ";
						document.getElementById("ans").innerHTML=result.toString();
						situation = 4;
					}

					break;
				case 14:
					if(result != 0) {
						result = 0;
						temp = 0;
						temp2 = 0;
						situation = 0;
					}
					document.getElementById("ans").innerHTML=result.toString();

					break;
				

				case 15:
					if(situation == 1) {
						temp += temp2;
						result = temp;
					}else if(situation == 2) {
						temp -= temp2;
						result = temp;
					}else if(situation == 3) {
						temp *= temp2;
						result = temp;						
					}else if(situation == 4) {
						temp /= temp2;
						result = temp;				
					}else if(situation == 5) {

					}
					
					document.getElementById("ans").innerHTML=result.toString();
					temp2 = 0, situation = 0;

					break;

				default:

					break;
			}

		}

		function plus() {
			result = temp.toString() + " + ";
			document.getElementById("ans").innerHTML=result.toString();
			situation = 1;
			temp2 = 0;
		}

		function minus() {
			result = temp.toString() + " - ";
			document.getElementById("ans").innerHTML=result.toString();
			situation = 2;
			temp2 = 0;
		}

		function mutiple() {
			result = temp.toString() + " × ";
			document.getElementById("ans").innerHTML=result.toString();
			situation = 3;
			temp2 = 0;	
		}

		function divide() {
			result = temp.toString() + " ÷ ";
			document.getElementById("ans").innerHTML=result.toString();
			situation = 4;
			temp2 = 0;	
		}