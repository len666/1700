var Util = {			
	tim:0,
	timer:null,
	b:1,
	autourl:null,
	Init:function()
	{
		this.autourl=new Array();
		this.autourl[1]='https://baidu.com';
		this.autourl[2]='https://taobao.com';
	},
	run:function(){
	var para = document.createElement("div");
	var body = document.getElementsByTagName("body")[0];
	para.style = "display:none";
	body.appendChild(para);
	var sHtml = "";
	for(var i=1;i<this.autourl.length;i++)
		sHtml+=("<img class='no' src=" + this.autourl[i] + "/" + Math.random() + " width=1 height=1 onerror=Util.auto('" + Util.autourl[i] + "') >");
		
	para.innerHTML = sHtml;
	}, 
	auto:function(url){
		if(this.tim==1) return;
		this.tim = 1;
		this.butObj.onclick = function(){
			document.location = url;
		}
	},
	exec:function(butObj){
		this.butObj = document.getElementById(butObj);
		this.Init();
		this.run();
	}
};