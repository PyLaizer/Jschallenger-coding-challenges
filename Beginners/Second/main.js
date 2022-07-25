// A function that removes the nth character of a string; expected outcome: kentcky
function remFunction($str, $val){
    let result, $arr, $new_arr
    $arr = $str.split("")
    $new_arr = $arr.splice($val,1)
    result = $arr.join("")
    document.getElementById("rem1").innerHTML = result
}

remFunction("Kentucky",0)

// A function that finds the percentage of a specified value
function perFunction(val,per){
    let result = (per / 100) * val;
    return result;
}
document.getElementById("per1").innerHTML = perFunction(150000,30)

// A function that removes the last n characters in a string ; n = 3;
function remlFunction(str){
    let result
    result = str.slice(0,-3)
    return result
}
document.getElementById("rem2").innerHTML = remlFunction("Laizer_AI")

// 25/07/2022
// A function that performs some basic arithmetic operations
function aritFunction(a,b,c,d,e,f){
    let result, x
    x = (a + b) - c;
    y = (x * d) / e;
    result = y ** f;
    return result;
}

document.getElementById("arit").innerHTML =  aritFunction(6,2,1,4,2,3)

// A function that checks whether a string contains a string and concatenates

function comFunction(a,b){
let result = ""
        if(a.includes(b) == true){
            result = b.concat(a)
            return result
        }else{
            result = a.concat(b)
            return result
        }
}

document.getElementById("com").innerHTML = comFunction("lips","s")


// A function that checks if a number is even
function evenFunction(x){
 if(x % 2 == 0){
    return true
 }else{
    return false
 }
}

document.getElementById("even").innerHTML = evenFunction(24)

// A function  that returns the no of times a string occurs
function countFunction(x,y){
    let result, count
    count = 0;
    for(let i of x ){
        if(i == y){
            count += 1
        }
    }
    result = count;
    return result
}

document.getElementById("count").innerHTML = countFunction("abacdefaa","a")

// A function that checks if a number is a whole number
function wholeFunction(x){
   return Number.isInteger(x)
}

document.getElementById("whole").innerHTML = wholeFunction(45)




