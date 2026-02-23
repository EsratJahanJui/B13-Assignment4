// for total count update
// work between all card & total count section ..all card child count = total count
// all so work on interview & reject button when clicked

let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectCount = document.getElementById('rejectCount');
const allCardSection = document.getElementById('allCards');
let totalJobCount = document.getElementById('totaljobs');

totaljobs
// console.log();

 function calculateCount(){
    total.innerText = allCardSection.children.length;
    totalJobCount.innerText = allCardSection.children.length;
 }
calculateCount();

