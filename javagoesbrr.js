//document.getElementsByTagName("body").innerHTML = '<button id= "zona1" class="zona"></button>';

function multiplyNode(node, count, deep) {
    for (var i = 0, copy; i < count - 1; i++) {
        copy = node.cloneNode(deep);
        var Newbutton = document.createElement("button");
        Newbutton.setAttribute("id", i);
        Newbutton.setAttribute("class", "zona");
        copy.appendChild(Newbutton);
        node.parentNode.insertBefore(copy, node);
    }
}

multiplyNode(document.querySelector('.pokus'), 101, true);

var elements = document.getElementsByClassName("zona");



var myFunction = function() {
    var pocitadlo = isEven(count);
    var activeButton = document.activeElement.id;
    console.log(activeButton);
    if (pocitadlo == true){
        document.getElementById(activeButton).innerHTML =' <img class="kolecko1" src="circle.svg">'
        document.getElementById("hraje").innerHTML=' <img class="krizek" src="cross.svg">';
    }
    if (pocitadlo == false){
        document.getElementById(activeButton).innerHTML =' <img class="krizek" src="cross.svg">'
        document.getElementById("hraje").innerHTML=' <img class="kolecko1" src="circle.svg">';
    }
    count ++
    console.log(count);
    //myNeFunction()
};

//var myNeFunction = function() {
 //   var pocitadlo = isEven(count);
 //   if (pocitadlo == true){
 //       document.getElementById(hraje).innerHTML=' <class="kolecko1" src="circle.svg">';
 //   }
 //   if (pocitadlo == false){
 //       document.getElementById(hraje).innerHTML=' <class="krizek" src="cross.svg">';
//}
//}

var count = 0

function isEven(count) {
	if (count%2 == 0)
		return true;
	else
        return false;
}
for (var i = 0; i < elements.length; i++) {
   elements[i].addEventListener('click', myFunction, false);
}
