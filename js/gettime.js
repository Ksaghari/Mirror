var displayArea = document.getElementById("timeElement"); 

function format(num) {
    var numStr = num.toString();
    if (numStr.length == 1) {
        return "0" + numStr; 
    } else {
        return numStr; 
    }
}

function updateTimeDisplay() {
    var dd = new Date();
    var hh = dd.getHours();
    var mm = dd.getMinutes();
    var ss = dd.getSeconds(); 
    displayArea.textContent = format(hh) + ":" + format(mm) + ":" + format(ss); 
}

setInterval(updateTimeDisplay, 1000); 