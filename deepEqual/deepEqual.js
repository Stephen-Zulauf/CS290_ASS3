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
  if ((val1 === null) & (val2 === null)) {
    return true;
  }
  if (val1 === null && val2 !== null) {
    return false;
  }
  if (val1 !== null && val2 === null) {
    return false;
  }
  //check if one value is a primitive and one is object
  if (typeof val1 === "object" && typeof val2 !== "object") {
    return false;
  }
  if (typeof val1 !== "object" && typeof val2 === "object") {
    return false;
  }
  //check for deep equlity if both are primitives
  if (typeof val1 !== "object" && typeof val2 !== "object") {
    if (val1 === val2) {
      return true;
    } else {
      return false;
    }
  }

  //check for deep equality if both are objects
  if (typeof val1 === "object" && typeof val2 === "object") {
    if (val1 === val2) {
      return true;
    }
    //check if both are arrays
    if (Array.isArray(val1) && Array.isArray(val2)) {
      //check if same length
      if (val1.length !== val2.length) {
        return false;
      }
      //deep comparison on each object in arrays(preserve order)
      for (let i = 0; i < val1.length; i++) {
        if (!deepEqual(val1[i], val2[i])) {
          return false;
        }
      }
      return true;
    }
    //if one is array and one is object
    if (Array.isArray(val1) || Array.isArray(val2)) {
      return false;
    }
    //check if objects are same length
    const keys1 = Object.keys(val1);
    const keys2 = Object.keys(val2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    //check if there are match pairs for all the keys
    if (!keys1.every((key) => keys2.includes(key))) {
      return false;
    }

    //if all other checks are good then do recursive comparison on keys in the object
    for (let key in val1) {
      let equal = deepEqual(val1[key], val2[key]);
      if (!equal) {
        return false;
      }
    }
    return true;
  }
}

// Don't add or change anything below this comment.
module.exports = deepEqual;
