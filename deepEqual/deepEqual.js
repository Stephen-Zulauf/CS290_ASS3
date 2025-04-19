"use strict";
// Don't add or change anything above this comment.

/*
 * Stephen Zulauf
 * zulaufs@osu.edu
 */

/*
 * Don't change the declaration of this function.
 */
function deepEqual(val1, val2) {
  //null check
  if (val1 === null & val2 === null){
    return true
  }
  if(val1 === null && val2 != null){
    return false
  }
  if(val1 != null && val2 === null){
    return false
  }
  //check if one value is a primitive and one is object
  if (typeof(val1) === "object" && typeof(val2) != "object"){
    return false
  }
  if (typeof(val1) != "object" && typeof(val2) === "object"){
    return false
  }
  //check for deep equlity if both are primitives
  if (typeof(val1) != "object" && typeof(val2) != "object"){
    if(val1 === val2){
        return true
    }else{
        return false
    }
  }

  //check for deep equality if both are objects
  if (typeof(val1) === "object" && typeof(val2) === "object"){
    if(val1 === val2){
        return true
    }else{
        return false
    }
  }

// Don't add or change anything below this comment.
module.exports = deepEqual;
