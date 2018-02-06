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