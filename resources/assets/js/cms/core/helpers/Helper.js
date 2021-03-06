/**
 * A helper class. All components can use this class.
 * Provides one accespoint to common used functions
 * @type {Helper}
 */
window.Helper = new class
{   




   constructor(){}
      /**
       * Capitalizes strings
       * @param  {[string]}
       * @return {[void]}
       */
      capitalize(string) {
     
         return string
            // @todo : Cannot read property '0' of undefined
            // return string[0].toUpperCase() + string.slice(1);
      }

      parseBool(boolean){
        if(boolean === 'true') {
          return true;
        } 

        if(boolean === 'false') {
          return false;
        }
        
        return boolean;
      }

      makeID() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      
        for (var i = 0; i < 5; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
      
        return text;
      }

      nl2br (str, is_xhtml) {
       
        var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br ' + '/>' : '<br>';
      
        return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
      }

      lcfirst(str) {
        
        var f = str.charAt(0)
        .toLowerCase()
        return f + str.substr(1)
      }

      /**
       * Method for removing items from an array
       * @param  {[array]}
       * @param  {[toBeRemovedItem]}
       * @return {[type]}
       */
      removeFromArray(array, toBeRemovedItem) {
          return array.splice(array.indexOf(toBeRemovedItem), 1);
      }
      /**
       * Method for checking if an object has a certain property
       * logs error if the wrong type of property have been given.
       * @param  {[obj]}
       * @param  {[prop]}
       * @return {Boolean}
       */
   hasProperty(obj, prop)
      {
         if (!Exception.isType(prop, 'string'))
         {
            return false;
         } // checks if the argument given is a string
         var proto = obj.__proto__ || obj.constructor.prototype;
         return (prop in obj) && (!(prop in proto) || proto[prop] !== obj[prop]);
      }
      /**
       * @param  {[number]}
       * @return {Boolean}
       */
   isNumeric(number)
      {
         return !isNaN(parseFloat(number)) && isFinite(number);
      }
      /**
       * turns an array into an object
       * @param  {[arr]} array to turn into an object
       * @return {[type]}
       */
   toObject(arr)
   {
      var rv = {};
      for (var i = 0; i < arr.length; ++i)
      {
         rv[i] = arr[i];
      }
      return rv;
   }
   formatDate(date)
   {
      var dates = date.split([" "]);
      return dates[0];
   }

   decimalRound(number, precision)
   {
      var factor = Math.pow(10, precision);
      var tempNumber = number * factor;
      var roundedTempNumber = Math.round(tempNumber);
      return roundedTempNumber / factor;
   }



   roundPercentage(percentage) {
      let temp = Math.floor(percentage);
   
      return temp;
   }

   /**
    * Method for checking if an object has a certain property
    * logs error if the wrong type of property have been given.
    * @param  {[obj]}
    * @param  {[prop]}
    * @return {Boolean}
    */
   hasProperty(obj, prop) {
      if(!Exception.isType(prop, 'string')){
        return false;
      } // checks if the argument given is a string
      var proto = obj.__proto__ || obj.constructor.prototype;
      return (prop in obj) && (!(prop in proto) || proto[prop] !== obj[prop]);
   }

   /**
    * @param  {[number]}
    * @return {Boolean}
    */
   isNumeric(number) {
     return !isNaN(parseFloat(number)) && isFinite(number);
   }

  /**
   * turns an array into an object
   * @param  {[arr]} array to turn into an object
   * @return {[type]}
   */
  toObject(arr) {
    var rv = {};
    for (var i = 0; i < arr.length; ++i){
      rv[i] = arr[i];
    }
    return rv;
  }

  formatDate(date) {
    var dates = date.split([" "]);
    return dates[0];
  }

  contains($search, $array) {
    return array.indexOf($search) !== null;
  }


  objectSize(object) {
      return Object.keys(object).length;
  }
}
