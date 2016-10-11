angular.module("directive",[]).directive("xxk",function () {
    return{
        restrict:"A",
        templateUrl:"tpl/xuanxiangka.html",
        replace:true,
        scope:{
            width:'@width',
            height:'@height'
        },
        link:function(scope){
            scope.data=[
                {id:0,title:"第一选项",con:111111},
                {id:1,title:"第二选项",con:222222},
                {id:2,title:"第三选项",con:333333},
                {id:3,title:"第四选项",con:444444}
            ]
            scope.num=0;
            scope.change=function (index) {
                scope.num=index;
            }
        }
    }
}).directive("caidan",function () {
    return{
        restrict:"A",
        templateUrl:"tpl/caidan.html",
        replace:true,
        scope:{
            fontcolor:"=",
            fontsize:"="
        },
        link:function(scope){
            scope.data=[
                {id:0,title:"第一选项",son:[{sontitle:"我是谁"},{sontitle:"我是谁"}]},
                {id:1,title:"第二选项",son:[{sontitle:"我是谁"},{sontitle:"我是谁"}]},
                {id:2,title:"第三选项",son:[{sontitle:"我是谁"},{sontitle:"我是谁"}]},
                {id:3,title:"第四选项",son:[{sontitle:"我是谁"},{sontitle:"我是谁"}]}
            ]

            scope.num=0;
            scope.change=function (index) {
                scope.num=index
            }
        }
    }
}).directive("lb",function () {
    return{
        restrict:"A",
        templateUrl:"tpl/lunbo.html",
        replace:true,
        scope:{},
        link:function(scope){
            scope.data=[
                {title:"1"},
                {title:"2"},
                {title:"3"},
                {title:"4"},
                {title:"5"}
            ];
            scope.num=0;
            scope.change=function (index) {
                scope.num=index;
            }
        }
    }
})