    var BGI=9;
    window.onload=function anonymous(){
    	var name=document.getElementById("name");
		var hiden=document.getElementById("hiden");
		var next=document.getElementById("next");
		var prev=document.getElementById("prev");
		var page=document.getElementById("page");
        var box=document.getElementById("box");
    	var Vbox=document.getElementById("vice-box");
		var button=document.getElementById("button");
		var name=document.getElementById("name"); 
		var maxImage=19;
		var height=0;
		
		name.onclick=function drop(){
			if(height<450){
				height+=1;
				document.getElementById("photo").style.height=height+"px";
			}
			setTimeout(drop,1);
		}
		
		hiden.onclick=function cover(){
			if(height>=0){
				height-=1;
				document.getElementById("photo").style.height=height+"px";
			}
			setTimeout(cover,1);
		}
		
		prev.onclick=function(){
            alert("抱歉，此页面暂时无法更换背景图。");
		}
		next.onclick=function(){
			BGI++;
			if(BGI>maxImage){
				BGI=1;
			}
			alert("抱歉，此页面暂时无法更换背景图。");
		}
		function width(){
			if(document.body.offsetWidth<971){
				box.style.width="970px";	
				Vbox.style.width="970px";
				button.style.right="0px";
				name.style.width="290px";
			}else{
				box.style.width="70%";	
				Vbox.style.width="70%";
				button.style.right="50px";
				name.style.width="30%";	
			}	
		}
		setInterval(width,500);
	}