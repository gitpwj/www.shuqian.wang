var storage = window.localStorage;
//载入localstoarge 数据
var urls = JSON.parse(localStorage.getItem('aurl'));
var names = JSON.parse(localStorage.getItem('aname'));
var groups = JSON.parse(localStorage.getItem('group_name'));
console.log(names);
var AddHtml = new Array();　

/*初始化界面 开始*/

var x = 0;

for (var i = 0; i <= names.length - 1; i++) {

	if (names[i] != "|") {
		AddHtml[x - 1] += "<div class='col-md-3 col-xs-4'><p class='text-center'><a href='" + urls[i] + "' target='_balnk' class='aaa'><img height='60px' width='60px' src='https://www.baidu.com/favicon.ico' alt='...' class='img-circle'><br>	<span class='text1'>" + names[i] + "</span></a></p></div>"
	}
	if (names[i] == "|") {
		x = x + 1;
		AddHtml[x - 1] = ""; //初始化 
	}
}

//取组
if (groups != "") {
	for (var i = 0; i <= groups.length - 1; i++) {
		var InnerHTML = document.getElementById("multi");
		InnerHTML.innerHTML += "<div class='col-md-4' data-force='30'><div class='layer tile panel panel-default' data-force='30'><div class='tile__name panel-heading'><a href='http://baidu.com'><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></a>　<span class='panel_title'>" + groups[i] + "</span></div><div class='tile__list panel-body'>" + AddHtml[i] + "</div></div></div>";
	}
}
//取组结束
/*初始化界面 结束*/

