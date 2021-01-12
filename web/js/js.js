var today = new Date();
var hourNow = today.getHours();

var greeting;

if (hourNow > 18) {
   greeting = 'good evening';
}

else if (hourNow > 12) {
   greeting = 'good afternoon';
}

else if (hourNow > 0) {
   greeting = 'good morning';
}

else {
   greeting = 'welcome';
}
var num = 8
document.write ('<h3>' + greeting + '' + today.getMinutes() + '</h3>');
document.write ('<h3>' + hourNow + '</h3>');

var msg = '<p><b>page title: </b></p>' + num.toExponential() + ' ' + document.title + '<br />'

var el = document.getElementById('footer');
el.innerHTML = msg;



var elHead = document.getElementById('head1');
elHead.textContent = "yes maybe d";

var size_a = this.innerWidth;

document.write ('<h1>' + size_a + " is the width of this window " + '</h1>');

var elOK = document.getElementById("wfid");
elOK.textContent = "ok";
