export default function() {
  function idMaker() {
    let i = 0;
    return {
      next: () => {
        return {
          value: i++,
          done: false
        };
      }
    };
  }
  function makeIterator(source) {
    let i = 0;
    if (source instanceof Array) {
      console.log("iterating array!");
      return {
        hasNext: () => {
          if (source.length > i) {
            return true;
          } else {
            return false;
          }
        },
        next: () => {
          if (source.length > i) {
            i++;
            return {
              value: source[i - 1],
              done: false
            };
          }
        }
      };
    }
    if (source instanceof Object) {
      console.log("iterating object!");
      return {};
    } else {
    }
  }
  let j = 0,
    it = makeIterator([1, 2, 3, 4, 5]);
  while (it.hasNext()) {
    console.log(`idMaker: ${it.next().value}`);
    j++;
  }
}
