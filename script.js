// for total count update
// work between all card & total count section ..all card child count = total count
// also work on interview & reject button when clicked
let interviewList = [];
let rejectList = [];


let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectCount = document.getElementById('rejectCount');
const allCardSection = document.getElementById('allCards');
let totalJobCount = document.getElementById('totaljobs');

totaljobs
// console.log();
// rejectList.push({name:'jui'})
 function calculateCount(){
    total.innerText = allCardSection.children.length;
    totalJobCount.innerText = allCardSection.children.length;

    // for grab class list what clicked to be count

     interviewCount.innerText = interviewList.length;
    rejectCount.innerText =rejectList.length;
 }
calculateCount();

// for toggle button

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectFilterBtn = document.getElementById('rejected-filter-btn');

function toggleStyle (id){
     allFilterBtn.classList.remove('bg-blue-600','text-white');

     interviewFilterBtn.classList.remove('bg-blue-600','text-white');
     rejectFilterBtn.classList.remove('bg-blue-600','text-white');

     allFilterBtn.classList.add('bg-white','border-gray-200');

     interviewFilterBtn.classList.add('bg-white','border-gray-200');
     rejectFilterBtn.classList.add('bg-white','border-gray-200');

     const selected = document.getElementById(id);
     selected.classList.remove('bg-white','border-gray-200');
     selected.classList.add('bg-blue-600','text-white');

}
