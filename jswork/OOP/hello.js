//JSON方式实现面向对象
// var person={
// 	"name" : "yfl",
// 	"email": "yerugemimi@gmail.com",
// 	"sayhello" : function(){
// 		alert(this.name+this.email);
// 	}
// };

//用函数作为对象的方式实现面向对象
var Person=function(name,email){
	this.name=name;
	this.email=email;

	this.sayhello=function(){
		alert(this.name+this.email);
	};
};

//实例化
var person = new Person();
