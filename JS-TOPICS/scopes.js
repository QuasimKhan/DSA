// IN this code base we will se the all things about scope in js

function first() {
    var a = 10;
    function test() {
        console.log(a);
        var a = 20;
    }

    // test();     //undefined because in js variables are scoped to their function so if any var reintiallezed in the function in will overshadow the global one, in this case, var allows to refere the variable without initilizing the actual varibales, that is why it shows undefined unlike const , let, they will show the reference error instead of undefined
}
