var stringifyJSON = function(obj) {

  if( obj === undefined || typeof obj === 'function' || typeof obj === 'symbol'){
    return "null"
  }

  if( obj == null ){

    return "null"

  } else if( typeof obj == 'object') {

    if( Array.isArray(obj) ){

      var parsedArr = []

      for( var i=0; i< obj.length; i++){
        parsedArr.push(stringifyJSON(obj[i]))
      }

      return '['+parsedArr.join(',')+']'
    }

    else if( obj === Object(obj) ){

      var parsedObj = []

      for( var prop in obj){
        if( prop !== 'undefined' && typeof obj[prop] !== 'function' && typeof obj[prop] !== 'symbol'){
          parsedObj.push(stringifyJSON(prop)+':'+stringifyJSON(obj[prop]))
        }
      }

      return '{'+parsedObj.join(',')+'}'
    }

  } else if( typeof obj == 'number' ){

    return obj.toString()

  } else if( typeof obj == 'boolean') {

    return obj.toString()

  } else if( typeof obj == 'string') {

    return '"'+obj+'"'

  }

};
