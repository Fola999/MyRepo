//alert("hello, world!");
var hello = "Hello";

console.log("this is good for debugging" + hello);

function print3Ways(){
    alert("pop up window!");
    console.log("print to the developer console");
    document.write("This will override the entire HTML document");

}
var arr = [1,2,3,4,5];



function funWithArrays(){
    document.write("Sum: " + getSum());
    document.write("<br>Min: " + findMin());
    document.write("<br>Max: " + findMax());
    document.write("<br>Average: " + Average());

}
    function getSum(){
        let sum =0;
       for (let i = 0; i<arr.length; i++){
        sum += arr[i];
       }
       return sum;
    }
    function findMin(){
        arr.sort();
        let[first] = arr;
        return first;
    }
    function findMax(){
        arr.sort();
        let[one, two, three, four, five] = arr;
        return five;

    }
    function Average(){
        let sum = 0;
        for (var i = 0; i<arr.length; i++){
            sum += arr[i];
           }
           return sum / 5;

    }

    function firstFunction(callback){
        console.log("about to execute callback function")
        callback();

    }
    function myCallBackFunction(){
        console.log("This is the callback function that does something special");
    }

    function soManyFunctions(){
        console.log("in so many functions Begin function calls");
        firstFunction(myCallBackFunction);
        console.log("returning to so many functions");
    }


