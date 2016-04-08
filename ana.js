window.onload=function() {
var sy=document.getElementById('sy');
var snc=document.getElementById('snc');


function prependChild(parent, newFirstChild) {
    parent.insertBefore(newFirstChild, parent.firstChild)
}

function seciliTemizle() {
  for(var i=0;i<snc.childNodes.length;i++) {
    snc.childNodes[i].className="";
  }
}



var secsira=0;
document.onkeydown=function (ev) {
  //alert(ev.keyCode);
  if (ev.keyCode==13) {


    var op=document.createElement('div');
    var opt=document.createTextNode(sy.value + "= " + math.eval(sy.value))
    op.appendChild(opt);
    op.ondblclick=function () {
      sy.value=this.title;
    };
    secsira=0;
    op.className="secili";

    op.title=sy.value;
    seciliTemizle();
    prependChild(snc,op);
    sy.value="";
  }

  if (ev.keyCode==38) {
      secsira--;

      if (secsira<0) secsira=snc.childNodes.length-2;


      seciliTemizle();
      snc.childNodes[secsira].className="secili";
  }

  if (ev.keyCode==40) {
      secsira++;
        //console.log(snc.childNodes.length);
      if (secsira>snc.childNodes.length-2) secsira=0;

      seciliTemizle();
      snc.childNodes[secsira].className="secili";
  }

  if (ev.keyCode==37 || ev.keyCode==39) {
      sy.value=snc.childNodes[secsira].title;
  }

}


sy.focus();

}
