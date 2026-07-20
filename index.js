 let currentTab = "all";
 const tabActive = [ "active"];
 const tabInactive = ["inactive"];

 const allContainer = document.getElementById("all-container");
 const interviewContainer = document.getElementById("interview-container");
 const rejectContainer = document.getElementById("reject-container");
 const emptyState = document.getElementById("empty-state");
  
//  console.log(allContainer, interviewContainer, rejectContainer);
 function switchTab(tab){
     
    const tabs = ["all","interview","rejected"];
    currentTab = tab;
    for (const t of tabs){
      const tabName = document.getElementById("tab-" + t);
      // console.log(tabName);
      if (t === tab){
       
         tabName.classList.remove(...tabInactive);
         tabName.classList.add(...tabActive);
      }
      else{
         tabName.classList.remove(...tabActive);
         tabName.classList.add(...tabInactive);
      }
    }

    const pages =[allContainer, interviewContainer, rejectContainer];
    for (const section of pages ){
      section.classList.add("hidden");
    }

    emptyState.classList.add("hidden");


    if(tab === "all"){
      // interviewContainer.classList.add("hidden");
      // rejectContainer.classList.add("hidden"); 

      allContainer.classList.remove("hidden");
      if(allContainer.children.length < 1){
          emptyState.classList.remove("hidden"); }
      



    } else if ( tab === "interview"){
      // allContainer.classList.add("hidden");
      // rejectContainer.classList.add("hidden");

      interviewContainer.classList.remove("hidden");
        if(interviewContainer.children.length < 1){
          emptyState.classList.remove("hidden"); }



    } else if (tab === "rejected"){
      // allContainer.classList.add("hidden");
      // interviewContainer.classList.add("hidden");

      rejectContainer.classList.remove("hidden");
        if(rejectContainer.children.length < 1){
          emptyState.classList.remove("hidden"); }
    }

updateStat();


 };
// stat update _____  total job count  
const totalStat = document.getElementById("stat-total");
const interviewStat = document.getElementById("stat-interview");
const rejectStat = document.getElementById("stat-reject");
const availableStat = document.getElementById("available");

//  console.log( totalStat, interviewStat, rejectStat);
// totalStat.innerText = allContainer.children.length;

 switchTab(currentTab);

//  job cahnge through button click

document.getElementById("jobs-container").addEventListener("click", function(event){
  const clickedElement = event.target ;
  const card = clickedElement.closest(".card")
  const status = card.querySelector(".status");
  const parent = card.parentNode;

  // console.log(status);
  if (clickedElement.classList.contains("interview")){
    status.innerText = "interview";
    interviewContainer.appendChild(card);
    updateStat();
  }
   if (clickedElement.classList.contains("rejected")){
    status.innerText = "rejected";

       rejectContainer.appendChild(card);
       updateStat();

  } 
  if (clickedElement.classList.contains("delete")){
    parent.removeChild(card);
    updateStat();
  }
})

// update stat 
function updateStat(){
//   totalStat.innerText = allContainer.children.length;
//   interviewStat.innerText = interviewContainer.children.length;
//  = rejectContainer.children.length;
  const counts = {
    all: allContainer.children.length,
    interview : interviewContainer.children.length,
    rejected: rejectContainer.children.length,


  }
      totalStat.innerText = counts["all"],
      interviewStat.innerText = counts["interview"],
      rejectStat.innerText = counts ["rejected"]

        availableStat.innerText = counts[currentTab] ;

    if(counts[currentTab] < 1){
          emptyState.classList.remove("hidden"); }
          else{
            emptyState.classList.add("hidden"); 
          }



    

}
updateStat();