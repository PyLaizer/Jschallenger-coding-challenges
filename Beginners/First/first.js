//Write a function that takes a string (a) and a number (n) as arguments, then return the nth character of the string ; Expected outcome : c
function afunc(a,n){
let $str = a;
//First method
let $char = $str.charAt(n - 1)
document.getElementById("s1").innerHTML = $char;

//Second Method
// let $arr = $str.split("")
// document.write($arr[n - 1])
}

afunc("kitchen",4)


//Write a function to compare two values and check it they are of the same value and type; Expected outome : true or false 
function myFunction(val1,val2){
    let $num1 = val1;
    let $num2 = val2
    if($num1 === $num2){
        document.getElementById("s2").innerHTML = "TRUE"
    }else{
        document.getElementById("s2").innerHTML = "FALSE"
    }
}

myFunction(4,"4")

// Write a function that takes two numbers  and sums them up; Expected Outcome : 14
function sumfunc(num1,num2){
    let $x = num1;
    let $y = num2;
    let $z = $x + $y
    document.getElementById("s3").innerHTML = $z
}

sumfunc(6,8)

//Write a function that returns the type of a value; Expected Outcome : string
function retfunc(val){
    let $value = val
    return typeof($value)
}

document.getElementById("s4").innerHTML = retfunc("james")

// Write a function that removes the first three characters of a string; Expected Outcome : batrine
function remfunc(x){
let $string = x;
let $result = $string.slice(3,)
document.getElementById("s5").innerHTML = $result;
}

remfunc("combatrine")

// Write a function that gets the last three characters of a string; Expected Outcome : ine
function $getfunc(x){
    let $value = x
    let $result = $value.slice(-3,)
    document.getElementById("s6").innerHTML = $result
}

$getfunc("combatrine")

// Write a function that slices a string with parameters defined within the function
function testfunc(str,f_index,l_index){
    const $string = str;
    let x = f_index;
    let y = l_index;
    let $result = $string.slice(x,y);
    document.getElementById("s7").innerHTML = $result;
}
testfunc("combatrine",2,6)

// Write a function that gets the first three characters of a string; Expected Outcome : com
function getfunc(str){
    let $value = str;
    let $result = $value.slice(0,3)
    document.getElementById("s8").innerHTML = $result
}
getfunc("combatrine")

// Write a function that extracts the first half of a string and second half of a string; Expected outcome:  compe & nsate 
function halffunc(str){
    const $string = str
    let $str_len = $string.length
    let f_index = 0;
    let l_index = ($str_len / 2);
    // let final_l_index = Math.round(l_index)

    let $result = $string.slice(f_index,l_index)
    document.getElementById("s9").innerHTML = $result

    let $result2 = $string.slice(l_index,)
    document.getElementById("s10").innerHTML = $result2
}

halffunc("compensate")

// A function that sorts the elements of an array in alphabetical order
function cfunc(x){
    let result = x.sort();
    document.getElementById("s11").innerHTML = result
}
cfunc(["love", "hate", "give", "take", "kill", "live"])


// A function that finds the average of integer values within an array.
function avgfunc(x){
    let $arr = x
    z = 0;
    for(y of $arr){   
        z += y   
    }
    let arr_length =$arr.length;
    let result = z / arr_length;
    document.getElementById("s12").innerHTML = result
}

avgfunc([2,3,4,5,6,7,8])
