// P3. Scores pipeline  (commit: "p3: scores pipeline")
//
// Pipeline: keep odd numbers -> double them -> sort descending -> keep the first half
//
// (a) Step by step. One variable per step, print the array after each step.
// (b) The whole pipeline as a single method chain. Print only the result.
// (c) Print scores once more at the end. Is it still the same? Why?
//
// You will need: filter, map, sort, slice, and Math.ceil.
// Not sure what one of them does? Look it up (MDN) before asking.

const scores = Array.from({ length: 20 }, () => Math.floor(Math.random() * 101));
console.log("start:", scores);

// (a)
// filter 사용
const odd = scores.filter(n => n % 2 === 1);
console.log("odd:", odd);

// map 사용
const twice = odd.map(n => n*2);
console.log("double:", twice);

// sort 사용
const des = twice.sort((a,b) => b- a);
console.log("sort descending", des);

// slice, Math.ceil 사용
const half = Math.ceil(des.length / 2);
const first_half = des.slice(0, half);
console.log("first half:", first_half);

// (b)
const result = scores
            .filter(n=>n%2==1)
            .map(n=>n*2)
            .sort((a,b) => b-a)
            .slice(0,half);
console.log("single method chain", result);

// (c)
// 동일하다. filter, map, slice는 원본 배열을 수정하지 않고 새로운 배열을 반환한다.
// sort는 원본 배열을 가지고 다루기 때문에 Destructive 이지만, 위에서는 map을 통해 반환된 배열을
// 가지고 다루기 때문에 원본 배열인 scores 배열이 변하지는 않는다. 