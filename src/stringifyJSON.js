var stringifyJSON = function(obj) {

  if( obj == null ){

    return "null"

  } else if( typeof obj == 'object') {

    if( Array.isArray(obj) ){
      return '['+obj.toString()+']'
    }

  } else if( typeof obj == 'number' ){

    return obj.toString()

  } else if( typeof obj == 'boolean') {

    return obj.toString()

  } else if( typeof obj == 'string') {

    return '"'+obj+'"'

  }

};
