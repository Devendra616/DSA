var asteroidCollision = function (asteroids) {
  let stack = [];
  for (let i = 0; i < asteroids.length; i++) {
    function check(num) {
      if (num >= 0) stack.push(num);
      else if (num < 0 && stack.length == 0) stack.push(num);
      else if (num < 0 && stack[stack.length - 1] < 0) stack.push(num);
      else {
        let temp = stack.pop();
        if (Math.abs(temp) < Math.abs(num)) {
          check(num);
        } else if (Math.abs(temp) > Math.abs(num)) {
          stack.push(temp);
        }
      }
    }
    check(asteroids[i]);
  }
  return stack;
};
