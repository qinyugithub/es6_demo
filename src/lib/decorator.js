export default (target) => {
    target.prototype.methodone = function(){
        console.log("我是模块一装饰器中的方法");
    };

    target.prototype.methodtwo = function(){
        console.log("我是装饰器中的方法");
    }
}