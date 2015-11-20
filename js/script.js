var context = "asd",
    result = document.querySelector('.result');

'use strict';
function show(){
    alert(arguments.length);

    if(arguments.length >0){
        alert('quantity of arguments ' + arguments.length);
        //alert('arguments ' + arguments);
        var str = " ";
        for (var i = 0; i < arguments.length; i++) {
            str += arguments[i];
        }

        result.innerHTML = '<span>' + str + '</span>';
    } else{
        alert('no arguments');
    }

    if( this == 'udefined'){
        alert('no context');
    }else alert('own context: ' + this);
}
var context = 'pasport';
show.call(context, 12,13);