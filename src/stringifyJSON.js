var stringifyJSON = function(obj) {
  console.log(obj)
  if( obj == null ){

    return "null"

  } else if( typeof obj == 'object') {

    if( Array.isArray(obj) ){
      // return '['+obj.join(',')+']'
      var parsedArr = []

      for( var i=0; i< obj.length; i++){
        parsedArr.push(stringifyJSON(obj[i]))
      }

      return '['+parsedArr.join(',')+']'
    }

    else if( obj === Object(obj) ){

      var parsedObj = []

      for( var prop in obj){
        parsedObj.push(stringifyJSON(prop)+':'+stringifyJSON(obj[prop]))
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
