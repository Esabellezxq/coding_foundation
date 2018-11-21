function isObject(value) {
  return (
    value != null && typeof value === "object" && !(value instanceof Array)
  );
}
function clone(isDeep, sourceObj, ...newObjects) {
  if (!isObject(sourceObj)) {
    return false;
  }
  for (let item in sourceObj) {
    let itemValue = sourceObj[item];
    if (sourceObj.hasOwnProperty(item)) {
      //防止子属性引用父对象造成死循环
      if (sourceObj[item] === sourceObj) {
        continue;
      }
      if (isObject(itemValue)) {
        clone(true, itemValue);
      } else {
        newObjects.forEach(newObject => {
          newObject[item] = itemValue;
        });
      }
    }
  }
}
export { clone };
