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

var shanchu = document.getElementById('shanchu');
shanchu.onclick = function() {
	gname = JSON.parse(localStorage.getItem('group_name'));
	gname.splice($.inArray("222", gname), 1); 
	localStorage.setItem('group_name', JSON.stringify(gname));
	alert("删除成功");
	location.reload();
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


