/**
 * @author Administrator
 */
			var cm_map;
			var layer;
		  	var directions;
		  	var addMarker;
			var submitted=false;
			var geocoder;
			var addresses=[];
			var addressNum=0;
			var delay=10;
			var hasNewData=false;
			var originDataLength;
			
			
			var defaultInfoWindow="<font face='微軟正黑體', sans-serif size=3><table border=0 class=c>  <tr>    <td colspan=2  align='center'><img src='http://dl.dropbox.com/u/15689886/LeoWebSite/img/DSC04124_s.jpg' width=400px height=275px></td>  </tr>  <tr>    <td align='center'  colspan=2 ><b><font size=3>正哲 &nbsp; <font color=#ff0000 size=3>&amp;</font> &nbsp; 伊珊</font></b><br>      我們要結婚了<br>      衷心邀請您蒞臨<br></td></tr><tr>    <td colspan=2  align='center'  ><font color=#ff0000 size=3>❤文定</font><br>      2011/11/05(六) 中午12:00<br>      典華-板橋會館<br/></td>  </tr></table>";
			var MovieWindow="<iframe width='560' height='349' src='http://www.youtube.com/embed/oCZSwwSlO2A' frameborder='0' allowfullscreen></iframe>"
			//<!---tr>     <td><font color=#ff0000 size=3>❤結婚</font><br>      2011/11/26(六) 中午12:00<br>      新竹 - 荷竹園 </b></td>  </tr-->
		 	var destination="台北縣板橋市中山路一段222號";
			var defaultLat=25.017889;
			var defaultLng=121.478173;
			var defaultZoom=12;
			
			 //love
	      	var iconLove = new GIcon(G_DEFAULT_ICON);
	     	iconLove.image = "http://dl.dropbox.com/u/15689886/LeoWebSite/img/hearts-icon.png";
		  	iconLove.iconSize=new GSize(48,48);
			
			//greeting
	      	var iconGreeting1 = new GIcon(G_DEFAULT_ICON);
	     	iconGreeting1.image = "http://dl.dropbox.com/u/15689886/LeoWebSite/img/Jboy-icon%20%281%29.png";
		  	iconGreeting1.iconSize=new GSize(24,24);
		  	//greeting
	      	var iconGreeting2 = new GIcon(G_DEFAULT_ICON);
	     	iconGreeting2.image = "http://dl.dropbox.com/u/15689886/LeoWebSite/img/Yoko-icon%20%281%29.png";
		  	iconGreeting2.iconSize=new GSize(24,24);
		  	//greeting
	      	var iconGreeting3 = new GIcon(G_DEFAULT_ICON);
	     	iconGreeting3.image = "http://dl.dropbox.com/u/15689886/LeoWebSite/img/Mike-icon%20%281%29.png";
		  	iconGreeting3.iconSize=new GSize(24,24);
		  	//greeting
	      	var iconGreeting4 = new GIcon(G_DEFAULT_ICON);
	     	iconGreeting4.image = "http://dl.dropbox.com/u/15689886/LeoWebSite/img/Lisa-icon%20%281%29.png";
		  	iconGreeting4.iconSize=new GSize(24,24);
		  	//1. http://dl.dropbox.com/u/15689886/LeoWebSite/img/Jboy-icon.png
		  	//2.http://dl.dropbox.com/u/15689886/LeoWebSite/img/Yoko-icon.png
		  	//3.http://dl.dropbox.com/u/15689886/LeoWebSite/img/Mike-icon.png
		  	//4.http://dl.dropbox.com/u/15689886/LeoWebSite/img/Lisa-icon.png
			
	
			//init
			function init(){
				//隱藏google map
				$('div#mapmenu').toggle('fast');
				
				// create the map
			    cm_map = new GMap2(document.getElementById("cm_map"));
			    cm_map.addMapType(G_PHYSICAL_MAP);
			    //cm_map.setMapType(G_PHYSICAL_MAP);
			    cm_map.setCenter(new GLatLng(defaultLat,defaultLng), defaultZoom);
			    //cm_map.setCenter(new GLatLng(23.7,122.4), 8);
			    cm_map.setUIToDefault();
				
				//init direction
				directions=new GDirections(cm_map, document.getElementById("div_directionResult"));
				
				//init geocoder
				geocoder = new GClientGeocoder();
				
				showDefaultMarker();
				
			
			}
			
			
			//get data from google docs
			function getJSON(){
			
				addressNum=0;
				addresses=[];
				
				//read json from google docs
				var url='https://spreadsheets.google.com/feeds/list/0Amkg4irJcOLndGViclY0R3pxMU9tYlcydWdHdUtrQ3c/od6/public/values?alt=json-in-script&callback=?';
				$.getJSON(url,parseJSON);
			}
		
		
			//parseJSON from google Docs
			function parseJSON(json){
			
				//get all records in the json
			    var records = json.feed.entry;
				
				originDataLength=records.length;
			        
			    //use a for loop to get all record in the records
			    for (var i=0;i<records.length;i++){
			        var record = records[i];
			            
			        //get values in every field
	
			        var name = record["gsx$暱稱or英文名"].$t;
			        var greeting = record["gsx$滿滿的祝福搶先說"].$t;
			        var address=record["gsx$請留下你的地址"].$t;
			        var icon=record["gsx$請選擇你的圖像"].$t;
			        
				   
					//將資料push進addresses中
					switch(icon)
					{
						case "1":
							push2Addresses(name, address,greeting,iconGreeting1);						
						break;
						case "2":
							push2Addresses(name, address,greeting,iconGreeting2);						
						break;
						case "3":
							push2Addresses(name, address,greeting,iconGreeting3);						
						break;
						default:
							push2Addresses(name, address,greeting,iconGreeting4);						
						break;
					}
					

					
			    }
				
				setTimeout('geocoding()',delay);
			}
			
			
			//push2Addresses 將name, address, description, icon加進addresses矩陣中
			function push2Addresses(name, address, greeting, icon){
				var html="<table borde=0 width=240px>"+
					     "<tr><td><font size=4><b>"+name + "</b></font><hr></td></tr>"+
					     "<tr><td>" + greeting + "</td></tr>"+
						 "</table>";
				
				var obj={
					NAME: name,
					ADDRESS: address,
					DESCRIPTION: html,
					ICON:icon};
					
					addresses.push(obj);
			}
			
			
			//geocoding
			function geocoding(){
				
				if(addressNum<addresses.length){
					//geocoder.getLatLng(address, function (point){
					geocoder.getLocations(addresses[addressNum].ADDRESS, function (response){
						
							//query too many in a short time
							if(response.Status.code==620){
								delay=100;
							}else{
								var marker;
								var html;
								//geocode成功
								if(response.Status.code==200){
									var place=response.Placemark[0];
									var point = new GLatLng(place.Point.coordinates[1],place.Point.coordinates[0]);
		
									var lat = point.lat();
									var lng = point.lng();
									//alert(lat + ", " + lng);
									html=addresses[addressNum].DESCRIPTION;
									
									marker = createMarker(new GLatLng(lat, lng), addresses[addressNum].NAME, addresses[addressNum].DESCRIPTION, addresses[addressNum].ICON);
																	
								}else{
									//geocode失敗
									html="<table borde=0 width=240px>"+
											 "<tr><td><font size=4><b>"+ addresses[addressNum].NAME + "</b></font><hr></td></tr>"+
					     				 	 "<tr><td>" + "Sorry! 你所輸入的地址： <br><b>" + addresses[addressNum].ADDRESS + "</b><br>似乎無法定位，請嘗試用'合併五都前的地址'，重新輸入一次。 我們將會用人工處理的方式，寄送喜帖到你新的地址～<p></p>謝謝" +"</td></tr>"+
						 					 "</table>";
									marker = createMarker(new GLatLng(25.19, 120.9), addresses[addressNum].NAME, html, addresses[addressNum].ICON);
									
								}
								
								cm_map.addOverlay(marker);
									
								if(hasNewData==true && addresses.length > originDataLength){
									marker.openInfoWindowHtml(html);
									cm_map.setCenter(marker.getLatLng(), 9);
								}

								addressNum++;
							}
							
							setTimeout('geocoding()',delay);
					});
				}
			}
			
			
			
			
			//do direction
			function doDirection(address){
			    //清空之前的directionResult
				document.getElementById('div_directionResult').innerHTML="";
				if(addMarker!=null){
					addMarker.closeInfoWindow();
				}
				
				if(address == null || address == ""){
					alert('請重新輸入你的位置');
					return;
				}
				
				directions.clear();
	  			directions.load("from: "+ address + " to: "+ destination);	
				
				
				
				GEvent.addListener(directions, 'error', function(){
					var msg=directions.getStatus();
					
					switch (msg.code){
						case 602:
							//alert('無法找到你的位置，請重新輸入比較詳細的位置');
							document.getElementById('div_directionResult').innerHTML="無法找到你的位置，請重新輸入比較詳細的位置";
						break;
						case 620:
							alert('太多查詢，請稍後再做查詢');
						break;
						default:
							document.getElementById('div_directionResult').innerHTML="有錯誤發生, error code=" + msg.code;
					}
		
					return;
				});
			}
			
			
			//addPoint on the map
			function addPoint(){
				var Event_Point=GEvent.addListener(cm_map, "click", function(overlay, point){
					if(!overlay){
						cm_map.clearOverlays();
						var marker=createMarker(point, "你可以移動這個點，來決定你的位置", "你可以移動這個點，來決定你的位置","",true);
						addMarker=marker;
						
						cm_map.addOverlay(marker);
						marker.openInfoWindowHtml("你可以移動這個點，來決定你的位置");
						
						//將point的經緯度秀在input_from中
						document.getElementById("input_from").value=point.lat() + " " + point.lng();
					}
					GEvent.removeListener(Event_Point);
				});
			}
			
			
			//createMarker
			function createMarker(point, title, description, icon, draggable){
				if(!draggable){draggable=false;}
				var markerOption={title:title, draggable:draggable, icon:icon};
				var marker=new GMarker(point, markerOption);
			
				GEvent.addListener(marker,"click", function(){
					marker.openInfoWindowHtml(description);
				});
				
				GEvent.addListener(marker,"drag", function(point){
					//將point的經緯度秀在input_from中
					document.getElementById("input_from").value=point.lat() + " " + point.lng();
						
					marker.closeInfoWindow();
				});
				return marker;
			}
			
			
			function showDefaultMarker(){
				//get all data from google docs
				getJSON();
				
				//show 南方莊園point
				var latlng=new GLatLng(defaultLat,defaultLng);

				var description=defaultInfoWindow;
				var marker=createMarker(latlng, "我們的結婚場地", description, iconLove);
				
				cm_map.addOverlay(marker);
				marker.openInfoWindowHtml(description);
				
			}
			
		
			
			
			//當form submit
			function goSubmit(){
				
				//要有一些條件檢核，資料是否都有輸入完整
				var checklist=["entry_0","entry_1","entry_9"];
				var norecord=false;
				
				
				for(var i=0;i<checklist.length;i++){
					if(document.getElementById(checklist[i]).value== null || document.getElementById(checklist[i]).value== ""){
						norecord=true;
					}
				}
				
				if (norecord==false){
					//window.location="thankyou.htm";
					//將剛剛新增的資料，push進addresses矩陣中，秀在google map中
					var name=document.getElementById("entry_1").value;
					var address=document.getElementById("entry_8").value;
					var greeting=document.getElementById("entry_9").value;
		        
				   
					if(document.getElementById("group_10_1").checked)
							push2Addresses(name, address,greeting,iconGreeting1);						
					else if(document.getElementById("group_10_2").checked)
							push2Addresses(name, address,greeting,iconGreeting2);						
					else if(document.getElementById("group_10_3").checked)
							push2Addresses(name, address,greeting,iconGreeting3);						
					else
							push2Addresses(name, address,greeting,iconGreeting4);						
						
					
					//push2Addresses(name,address,greeting,iconGreeting);
					
					//alert("delay="+delay + ", addressNum=" + addressNum + ", addresses.length=" + addresses.length);
					//有新資料，將hasNewData設定true, 直接打開marker的infowindow
					hasNewData=true;
					
					setTimeout('geocoding()',delay);
					showDialog("dialog_success");
					return true;
				}else{
					alert("有些資訊尚未填寫，請先填寫完再送出！");
					return false;
				}
			}
			//dialog_Pic
			
			//show Dialog
			function showDialog(id){
				document.getElementById(id).style.visibility="visible";
				
				$(function() {
					$("#"+id).dialog({
						"modal": true
					});
				});
			}
			//show Dialog
			function showBigDialog(id){
				document.getElementById(id).style.visibility="visible";
				
				$(function() {
					$("#"+id).dialog({
						modal: true,
						width:800,
						height: 530
					});
				});
			}
	    	//show Dialog
			function showMovDialog(id){
				document.getElementById(id).style.visibility="visible";
				
				$(function() {
					$("#"+id).dialog({
						modal: true,
						width:650,
						height: 400,
						close: function() {document.getElementById("Mov").innerHTML="";}
					});
				});
				document.getElementById("Mov").innerHTML=MovieWindow;
			}
			
			
			
			$(function() {
				$( "#tabs" ).tabs();
			});
			
			setTimeout('init()',1);
