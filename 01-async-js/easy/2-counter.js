// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// (Hint: setTimeout)
let  count = 0;
let val = () => {
    count++;
    console.log(count);
    // setTimeout(val, 1000)
}

// setInterval(val)