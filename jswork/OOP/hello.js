//1、JSON方式实现面向对象
// var person={
// 	"name" : "yfl",
// 	"email": "yerugemimi@gmail.com",
// 	"sayhello" : function(){
// 		alert(this.name+this.email);
// 	}
// };

//2、用函数作为对象的方式实现面向对象
// var Person=function(name,email){
// 	this.name=name;
// 	this.email=email;

// 	this.sayhello=function(){
// 		alert(this.name+this.email);
// 	};
// };

//实例化
// var person = new Person();

//3、属性配置 Object.defineProperty
//创建对象
var person = Object.create(null);

//设置一个属性
Object.defineProperties(person,{
	'name' : {value:"yfl",
			  writable : true,     //这个属性的值是否可以修改
			  configurable : true,  //这个实行的配置是否可以修改
			  enumerable   : true,  //这个属性是否能在for ... in循环中遍历出来或在Object.keys中列举出来

	}
});

//get or set
var  age = 0;
Object.defineProperty( chenhao,
            'age', {
                      get: function() {return age+1;},
                      set: function(value) {age = value;}
                      enumerable : true,
                      configurable : true
                    }
);
//使用已有属性实现geter和seter
Object.defineProperty( chenhao,
            'birth_year',
            {
                get: function() {
                    var d = new Date();
                    var y = d.getFullYear();
                    return ( y - this.age );
                },
                set: function(year) {
                    var d = new Date();
                    var y = d.getFullYear();
                    this.age = y - year;
                }
            }
);