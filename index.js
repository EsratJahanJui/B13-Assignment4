 let currentTab = "all";
 const tabActive = [ "active"];
 const tabInactive = ["inactive"];

 function switchTab(tab){
    console.log(tab);
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
 }