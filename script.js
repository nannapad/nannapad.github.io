function confirm(str) {
    let result = "<br>";
    let i = 0;
    do {
        result += "["+i+"] : " + str.charAt(i)+"<br>";
    i++
    }
    while(i<str.length);
    document.getElementById('result').innerHTML = result;
}