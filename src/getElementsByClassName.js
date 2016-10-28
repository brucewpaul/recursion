var getElementsByClassName = function(className) {

  var elementsWithClass = []

  function checkDOM(el){

    console.log(el.childNodes,el.classList)

    if(el.classList.contains(className)){
      elementsWithClass.push(el)
    }

    for(var i=0;i<el.childNodes.length;i++){
      checkDOM(el.childNodes[i])
    }

  }

  checkDOM(document.body)

  return elementsWithClass

};
