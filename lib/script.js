var operatorDurum=false,operator="",sonuc=0;

		var btnRakam=document.querySelectorAll(".btnRakam");
		var textGosterge=document.querySelector("#textGosterge");
		var butonOperator=document.querySelectorAll(".butonOperator");
		var islem=document.querySelector("#islem");
		var btnCE=document.querySelector(".btnCE");
		var btnEsit=document.querySelector(".btnEsit");
		var btnNokta=document.querySelector(".btnNokta");


		btnRakam.forEach(function(element){

			element.onclick=function(e){
				if (textGosterge.textContent==0 || operatorDurum) 
					textGosterge.textContent="";

				textGosterge.textContent+=this.textContent;
				operatorDurum=false;
			}

		});

		butonOperator.forEach(function(element){
			element.onclick=function(e){
				operatorDurum=true;
				var yeniopt=this.textContent;
				islem.textContent=islem.textContent+" "+textGosterge.textContent+" "+yeniopt;

				switch(operator){
					case "+":textGosterge.textContent=(sonuc + Number(textGosterge.textContent));
					break;
					case "-":textGosterge.textContent=(sonuc - Number(textGosterge.textContent));
					break;
					case "*":textGosterge.textContent=(sonuc * Number(textGosterge.textContent));
					break;
					case "/":textGosterge.textContent=(sonuc / Number(textGosterge.textContent));
					break;
					default:
					break;
				}
				sonuc=Number(textGosterge.textContent);
				operator=yeniopt;
			}
		});
		btnCE.onclick=function(e){
			textGosterge.textContent="0";
			islem.textContent="";
			sonuc=0;
			operator="";
		}
		btnEsit.onclick=function(e){
			islem.textContent="";
			operatorDurum=true;	
			
			switch(operator){
					case "+":textGosterge.textContent=(sonuc + Number(textGosterge.textContent));
					break;
					case "-":textGosterge.textContent=(sonuc - Number(textGosterge.textContent));
					break;
					case "*":textGosterge.textContent=(sonuc * Number(textGosterge.textContent));
					break;
					case "/":textGosterge.textContent=(sonuc / Number(textGosterge.textContent));
					break;
					default:
					break;
				}
				sonuc=Number(textGosterge.textContent);
				textGosterge.textContent=sonuc;
				sonuc=0;
				operator="";
		
		}

		btnNokta.onclick=function(e){
			if(!operatorDurum && !textGosterge.textContent.includes("."))
			{
				textGosterge.textContent+=".";
			}else if(operatorDurum){
				textGosterge.textContent="0";
			}

			if (!textGosterge.textContent.includes(".")) {
				textGosterge.textContent+=".";
			}
			operatorDurum=false;
		}// Add your code here

