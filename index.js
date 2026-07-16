 let currentTab = "all";
 const tabActive = [ "active"];
 const tabInactive = ["inactive"];

 const allContainer = document.getElementById("all-container");
 const interviewContainer = document.getElementById("interview-container");
 const rejectContainer = document.getElementById("reject-container");
//  console.log(allContainer, interviewContainer, rejectContainer);
 function switchTab(tab){
     
    const tabs = ["all","interview","rejected"];
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


    if(tab === "all"){
      // interviewContainer.classList.add("hidden");
      // rejectContainer.classList.add("hidden"); 

      allContainer.classList.remove("hidden");
      



    } else if ( tab === "interview"){
      // allContainer.classList.add("hidden");
      // rejectContainer.classList.add("hidden");

      interviewContainer.classList.remove("hidden");



    } else if (tab === "rejected"){
      // allContainer.classList.add("hidden");
      // interviewContainer.classList.add("hidden");

      rejectContainer.classList.remove("hidden");
    }




 };
 switchTab(currentTab);
