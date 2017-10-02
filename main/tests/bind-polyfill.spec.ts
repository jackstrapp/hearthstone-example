if(!Function.prototype.bind){
Function.prototype.bind = function(context){
    var	that = this,
        slicedArgs = Array.prototype.splice.call(arguments, 1),
        bounded = function (){
            var newArgs = slicedArgs.concat(Array.prototype.splice.call(arguments));
            return that.apply(context,newArgs);
        }
    bounded.prototype = that.prototype;
    return bounded;
};
}