
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

var zaklad = function() {
    document.getElementById("hraje").innerHTML=' <img class="kolecko1" src="circle.svg">'
}
zaklad()
var myFunction = function() {
    var pocitadlo = isEven(count);
    var activeButton = document.activeElement.id;
    document.getElementById(activeButton).classList.add('Full');
    if (pocitadlo == true){
        document.getElementById(activeButton).innerHTML =' <img class="kolecko1" src="circle.svg">'
        document.getElementById("hraje").innerHTML=' <img class="krizek1" src="cross.svg">';
    }
    if (pocitadlo == false){
        document.getElementById(activeButton).innerHTML =' <img class="krizek" src="cross.svg">'
        document.getElementById("hraje").innerHTML=' <img class="kolecko1" src="circle.svg">';
    }
    count ++
    console.log(count);
};
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
