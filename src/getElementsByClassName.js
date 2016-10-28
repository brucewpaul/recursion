var getElementsByClassName = function(className) {

  // setup element to capture the elements that pass test
  var elementsWithClass = []

  // create functoin to check DOM elements to be called recursively
  function checkDOM(el){

    // check if the classList for the provided node is undefined
    if(el.classList !== undefined){
      // check if the classList contains the className we are looking for
      if(el.classList.contains(className)){
        // add element to our array
        elementsWithClass.push(el)
      }
    }

    // foreach childNode of given element, recursively call checkDOM
    // so that we check all elements in the vody
    for(var i=0;i<el.childNodes.length;i++){
      checkDOM(el.childNodes[i])
    }

  }

  // initially call checkDOM with the document.body
  checkDOM(document.body)

  // finally return our array of elements
  return elementsWithClass

};
