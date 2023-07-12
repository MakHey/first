let arr = [1, 2, 3, 4, 5];
arr.map((item) => console.log(item));

const btn = document.getElementById('btn');
btn.onclick = function () {
  const count = document.getElementById('count');
  count.innerText = `count: ${+count.innerText.split(' ')[1] + 1}`;
};
