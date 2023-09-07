let counter = document.querySelectorAll('.counter');
// console.log(counter.dataset.number);

let arr = Array.from(counter);
// console.log(arr);
arr.map((item) => {
  //   console.log(item);

  let count = 0;

  function counterUp() {
    count++;
    // console.log(count++);
    item.innerHTML = count;
    if (count == item.dataset.number) {
      console.log('Go Away');
      clearInterval(stop);
    }
  }
  counterUp();

  let stop = setInterval(counterUp, 100);
});
