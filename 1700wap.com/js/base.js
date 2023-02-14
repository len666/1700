var Util = {
	tim:0,
	timer:null,
	b:1,
	autourl:null,
	Init:function()
	{
		this.autourl=new Array();
		this.autourl[1]='https://1700110.com';
		this.autourl[2]='https://1700111.com';
		this.autourl[3]='https://1700112.com';
		this.autourl[4]='https://1700123.com';
		this.autourl[5]='https://1700115.com';
		this.autourl[6]='https://1700117.com';
		this.autourl[7]='https://1700118.com';
		this.autourl[8]='https://1700120.com';
		this.autourl[9]='https://1700122.com';
		this.autourl[10]='https://1700124.com';

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