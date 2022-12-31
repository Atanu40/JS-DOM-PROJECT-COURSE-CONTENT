const milestonesData = JSON.parse(data).data;

//load courses millstone data//
function loadMilestones() {
    const milestones = document.querySelector(".milestones");
    milestones.innerHTML = `${milestonesData.map(function (millstone) {
        return `  <div class="milestone border-b" id="${millstone._id}">
       <div class="flex">
           <div class="checkbox"><input type="checkbox" onclick="markMileStone(this,${millstone._id})"/></div>
           <div onclick="openMilestone(this,${millstone._id})">
               <p>
                   ${millstone.name}
                   <span><i class="fas fa-chevron-down"></i></span>
               </p>
           </div>
       </div>
       <div class="hidden_panel ">
           ${millstone.modules.map(function (module) {
            return `<div class="module border-b">
               <p>${module.name}</p>
           </div>`
        }).join("")}
       </div>
   </div>`
    }).join("")}`;
}

function openMilestone(milestoneElement,id) {
    const currentPanel = milestoneElement.parentNode.nextElementSibling;
    const shownPanel = document.querySelector(".show");

    const active = document.querySelector(".active");

    // first remove previous active class if any [other than the clicked one
    if (active && !milestoneElement.classList.contains("active")) {
        active.classList.remove("active");
    }

    milestoneElement.classList.toggle("active");

    if (!currentPanel.classList.contains("show") && shownPanel) {
        shownPanel.classList.remove("show");
    }



    currentPanel.classList.toggle("show");

    showMilestone(id);
}

function showMilestone(id)
{
    const milestoneImage = document.querySelector(".milestoneImage");
    const name = document.querySelector(".title");
    const details = document.querySelector(".details");

    milestoneImage.style.opacity = "0";

    milestoneImage.src= milestonesData[id].image;
    name.innerText = milestonesData[id].name;
    details.innerText = milestonesData[id].description 

}
const milestoneImage = document.querySelector(".milestoneImage");
milestoneImage.onload = function(){
    this.style.opacity = "1";
}

function markMileStone(checkbox, id)
{
    const doneList = document.querySelector(".doneList");
    const milestonesList = document.querySelector(".milestones");
    const item = document.getElementById(id);
  
    if (checkbox.checked) {
      // mark as done
      milestonesList.removeChild(item);
      doneList.appendChild(item);
    } else {
      // back to main list
      milestonesList.appendChild(item);
      doneList.removeChild(item);
     
     
  
      // task - do the sorting
      // reload list
    }
    
}



loadMilestones();