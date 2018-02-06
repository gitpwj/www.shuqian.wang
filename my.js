var baocun = document.getElementById('baocun');
baocun.onclick = function() {

	/* 获取名称*/
	x = 0;
	for (var i = arrayObj.length - 1; i >= 0; i--) {
		var url_name = arrayObj[i].getElementsByClassName('text1');

		for (var j = url_name.length - 1; j >= 0; j--) {

			orderlist[x] = url_name[j].innerText;
			x = x + 1;
		}
		orderlist[x] = "|";
		x = x + 1;
		//document.write(arrayObj[i].innerHTML + '<br><span class="text1">');
		//console.log(arrayObj[i].innerText);
		//console.log(mystorage.set(localStorage.orderlist[i],arrayObj[i].innerText));//存储
	}
	/* 获取url*/
	x = 0;
	for (var i = arrayObj.length - 1; i >= 0; i--) {
		var url = arrayObj[i].getElementsByClassName('aaa');

		for (var j = url.length - 1; j >= 0; j--) {

			if (contains(aurl, url[j].href) == false && url[j].href != "") {
				aurl[x] = url[j].href;
			}

			x = x + 1;
		}
		aurl[x] = "|";
		x = x + 1;

	}

	orderlist.reverse();
	aurl.reverse();

	console.log(aurl);
	
	
	localStorage.setItem('aname', JSON.stringify(orderlist));
	localStorage.setItem('group_name', JSON.stringify(gname));
	localStorage.setItem('aurl', JSON.stringify(aurl));

	alert("保存成功");
};

var qingchu = document.getElementById('qingchu');
qingchu.onclick = function() {

	localStorage.clear();
	alert("清除成功");
};

var zairu = document.getElementById('zairu');
zairu.onclick = function() {
groups = ["222", "111", "333", "444", "666", "555"];

names = ["|", "n1", "n2", "n3", "|", "n4", "n5", "n6", "|", "n7", "n8", "n9", "|", "n10", "n11", "n12", "|", "n13", "n14", "n15", "|", "n16", "n17", "n18"];
urls = ["|", "n1", "n2", "n3", "|", "n4", "n5", "n6", "|", "n7", "n8", "n9", "|", "n10", "n11", "n12", "|", "n13", "n14", "n15", "|", "n16", "n17", "n18"];
		localStorage.setItem('aname', JSON.stringify(names));
	localStorage.setItem('group_name', JSON.stringify(groups));
	localStorage.setItem('aurl', JSON.stringify(urls));
	
};

var storage = window.localStorage;
//载入localstoarge 数据
var urls = JSON.parse(localStorage.getItem('aurl'));
var names = JSON.parse(localStorage.getItem('aname'));
var groups = JSON.parse(localStorage.getItem('group_name'));
console.log(names);
var AddHtml = new Array();　
/*
groups = ["222", "111", "333", "444", "666", "555"];

names = ["|", "n1", "n2", "n3", "|", "n4", "n5", "n6", "|", "n7", "n8", "n9", "|", "n10", "n11", "n12", "|", "n13", "n14", "n15", "|", "n16", "n17", "n18"];
urls = ["|", "n1", "n2", "n3", "|", "n4", "n5", "n6", "|", "n7", "n8", "n9", "|", "n10", "n11", "n12", "|", "n13", "n14", "n15", "|", "n16", "n17", "n18"];
*/
/*插入内容
var testdiv = document.getElementById("multi");  
testdiv.innerHTML="<p>I inserted <em>this</em> content.</p>"; 
*/

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
		InnerHTML.innerHTML += "<div class='col-md-4' data-force='30'><div class='layer tile panel panel-default' data-force='30'><div class='tile__name panel-heading'><span class='glyphicon glyphicon-search' aria-hidden='true'></span>　<span class='panel_title'>" + groups[i] + "</span></div><div class='tile__list panel-body'>" + AddHtml[i] + "</div></div></div>";
	}
}
//取组结束
/*初始化界面 结束*/

//判断对象是否在数组中
function contains(arr, obj) {
	var i = arr.length;
	while (i--) {
		if (arr[i] === obj) {
			return true;
		}
	}
	return false;
}
//定义一个 byId函数
var byId = function(id) {
	return document.getElementById(id);
},

console = window.console;
//创建数组  
var orderlist = new Array();　 //链接名称
var gname = new Array(); //分组名称
var aurl = new Array(); //链接url
// Multi groups
Sortable.create(byId('multi'), {
	group: 'zu',
	animation: 150,
	draggable: '.col-md-4',
	handle: '.tile__name',
	store: {
 /**
                 * Get the order of elements. Called once during initialization.
                 * @param   {Sortable}  sortable
                 * @returns {Array}
                 */
                get: function (sortable) {
                    var order = localStorage.getItem(sortable.options.group.name);
                    return order ? order.split('|') : [];
                },

                /**
                 * Save the order of elements. Called onEnd (when the item is dropped).
                 * @param {Sortable}  sortable
                 */
                set: function (sortable) {
                    var order = sortable.toArray();

                    localStorage.setItem(sortable.options.group.name, order.join('|'));
                },
	}
});
//创建一个数组  存放当前组名称
var arrayObj = new Array();

x = 0; [].forEach.call(byId('multi').getElementsByClassName('tile__list'),
function(el) {
	arrayObj[x] = el;
	var group_name = el.parentNode.parentNode.getElementsByTagName("span");
	var group_name = group_name[1].innerHTML;
	gname[x] = group_name;
	x = x + 1;
	Sortable.create(el, {
		group: {
			//name: group_name,
			name: "11",
			pull: true,
			put: true,
		},
		animation: 150,
		draggable: '.col-md-3',
		handle: '.img-circle',

		store: {
			/**
* Get the order of elements. Called once during initialization.
* @param   {
Sortable}
sortable
* @returns {
Array}
*/
			get: function(sortable) {
				var order = localStorage.getItem(sortable.options.group.name);
				return order ? order.split('|') : [];
			},

			/**
* Save the order of elements. Called onEnd (when the item is dropped).
* @param {
Sortable}
sortable
*/
			set: function(sortable) {
				var order = sortable.toArray();
				//console.log(sortable.options.group.name);
				localStorage.setItem(sortable.options.group.name, order.join('|'));
			},

		}

	});

});

//console.log(localStorage.orderlist.length);
/*
// 写入localStorage的三种办法

var storage=window.localStorage;
//写入a字段
storage["a"]=1;
//写入b字段
storage.b=2;
//写入c字段
storage.setItem("c",3);



//第一种方法读取
var a=storage.a;
console.log(a);
//第二种方法读取
var b=storage["b"];
console.log(b);
//第三种方法读取
var c=storage.getItem("c");
console.log(c);
*/

//console.log(document.querySelector(".text-center").innerText);
