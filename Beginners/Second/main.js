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