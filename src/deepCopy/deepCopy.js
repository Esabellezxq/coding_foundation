function isObject(value) {
  return (
    value != null && typeof value === "object" && !(value instanceof Array)
  );
}
function clone(isDeep, sourceObj, ...newObjects) {
  
  if (!isObject(sourceObj)) {
    return false;
  }

  if(!isDeep){
    newObjects.forEach(newObject => {
      for(let i in sourceObj){
        newObject[i] = sourceObj[i];
      }
    })
    return newObjects;
  }

  for (let item in sourceObj) {
    let itemValue = sourceObj[item];
    if (sourceObj.hasOwnProperty(item)) {
      //防止子属性引用父对象造成死循环
      if (itemValue === sourceObj) {
        continue;
      }
      newObjects.forEach(newObject => {
        if(newObject[item]){
          delete newObject[item];
        }
        if (isObject(itemValue)) {
          newObject[item] = newObject[item] || {};
          clone(true, itemValue, newObject[item]);
        } else {
          newObject[item] = itemValue;
        }
      })
     
    }
  }

  return newObjects;

}

Object.prototype.clone1 = function(isDeep) {
  //isdeep false / null
  // if(isDeep == null){
  //   isDeep = false
  // }
  if(arguments.length == 0){
    isDeep = false;
  }
  return clone(isDeep, this, {})
}

export { clone };
