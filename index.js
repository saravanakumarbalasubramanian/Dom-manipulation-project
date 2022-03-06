const taskContainer = document.querySelector(".task__container");

let globalStore=[];

  const generateNewCard = (taskData) => `<div class="col-md-6 col-lg-4">     
  <div class="card">
    <div class="card-header d-flex justify-content-end gap-2">
      <button type="button" class="btn btn-outline-success" id=${taskData.id}  onclick="editCard.apply(this,arguments)"><i class="fas fa-pencil-alt"></i></button>
      <button type="button" class="btn btn-outline-danger" id=${taskData.id}  onclick="deleteCard.apply(this,arguments)">
      <i class="far fa-trash-alt"  id=${taskData.id}  onclick="deleteCard.apply(this,arguments)">
      </i></button>
    </div>
    <img src=${taskData.imageUrl} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">${taskData.taskTitle}</h5>
      <p class="card-text">${taskData.taskDescription}</p>
      <a href="#" class="btn btn-primary">${taskData.taskType}</a>
     </div>
     <div class="card-footer ">
      <button type="button" class="btn btn-outline-primary float-end"  id=${taskData.id}>open task</button>
    </div>
    `;
  

    const loadInitialCardData = () => {

        // 1. local storage to get tasky card data 


        const getCardData = localStorage.getItem("tasky"); 


        // 2. convert  the string to normal object 


        const {cards} = JSON.parse(getCardData);



         // 3. loop over those array of task object to create HTML card , inject it to DOM


         cards.map((cardObject) => {

          taskContainer.insertAdjacentHTML("beforeend", generateNewCard(cardObject));
     
         // 4. update our globalstore 

          globalStore.push(cardObject);
     

         })

 
     // steps are :- 

     // 1. local storage to get tasky card data 


     // 2. convert  the string to normal object 

     
     // 3. loop over those array of task object to create HTML card , inject it to DOM

     
     // 4. update our globalstore  




    };


const updatelocalStorage =() =>{
  localStorage.setItem("tasky", JSON.stringify({cards:globalStore}));
}




const  saveChanges = () => {
    const taskData = {
      id: `${Date.now()}`, // unique number for id (it create a unique number for each and every mili second )
      imageUrl: document.getElementById("imageurl").value,
      taskTitle: document.getElementById("tasktitle").value,
      taskType: document.getElementById("tasktype").value,
      taskDescription: document.getElementById("taskdescription").value,
    };
         
    

     taskContainer.insertAdjacentHTML("beforeend", generateNewCard(taskData));
     
     
     globalStore.push(taskData);

     localStorage.setItem("tasky", JSON.stringify({cards:globalStore}));

     // this this add it is usde to add the value to the local storage (set item)  it is a interface

};




//issues


//page refresh will cause the data to  be deleted  --> local storage  --> 5MB
// local storage is also known as API --> API  -->  Application Programming Interface


// local storage --> Application 
// Access the application via --> programming
// Interface as a middle man
//local storage --> with some method (Interface)       eg :- ( +,-,*,/ )  --> java script 














//features
//delete the card
const deleteCard = (event) => {

event = window.event;
//id 
const targetID = event.target.id;
const tagName = event.target.tagName;
// match the id of the element with the inside the globalstore
// if match found remove

globalStore = globalStore.filter((cardObject) => cardObject.id !==targetID);



//contact parent 

if(tagName === "BUTTON"){
  return taskContainer.removeChild(event.target.parentNode.parentNode.parentNode);
}else{
  return taskContainer.removeChild(event.target.parentNode.parentNode.parentNode.parentNode);
}


};

// edit the card
//open the card

const editCard = (event) =>{
  event = window.event;
  const targetID = event.target.id;
  const tagName = event.target.tagName;

  let parentElement;
  if(tagName === "BUTTON"){

    // the button of the parent element (card header and card so two parent or elses 3 parent )
    parentElement = event.target.parentNode.parentNode;
  }else{
    parentElement = event.target.parentNode.parentNode.parentNode;
  }

// access the parent of tasktitle (the tasktitle is the child node of card)
//  card body 1 and card-title 2 so two childnode
let taskTitle = parentElement.childNodes[5].childNodes[1];
let taskDescription = parentElement.childNodes[5].childNodes[3];
let tasktype = parentElement.childNodes[5].childNodes[5];
let submitButton = parentElement.childNodes[7].childNodes[1];
// setAttributes
taskTitle.setAttribute("contenteditable" , "true");
taskDescription.setAttribute("contenteditable" , "true");
tasktype.setAttribute("contenteditable" , "true");
submitButton.setAttribute("onclick" , "saveEditChanges.apply(this,arguments)");
// we are going to change to button only so don't use setAttribute
submitButton.innerHTML = "save changes";
// innerHTML means the text of the button  (open task)
}; 

const saveEditChanges = (event) => {
  event = window.event;
  const targetID = event.target.id;
  const tagName = event.target.tagName;

  let parentElement;
  if(tagName === "BUTTON"){

 
    parentElement = event.target.parentNode.parentNode;
  }else{
    parentElement = event.target.parentNode.parentNode.parentNode;
  }

let taskTitle = parentElement.childNodes[5].childNodes[1];
let taskDescription = parentElement.childNodes[5].childNodes[3];
let tasktype = parentElement.childNodes[5].childNodes[5];
let submitButton = parentElement.childNodes[7].childNodes[1];

const updatedData ={
  taskTitle : taskTitle.innerHTML,
  tasktype : tasktype.innerHTML,
  taskDescription : taskDescription.innerHTML,
};

globalStore = globalStore.map((task) => {
if(task.id === targetID){
  return{
    id: task.id,
    imageUrl: task.url,
    taskTitle:updatedData.taskTitle,
    taskType: updatedData.tasktype,
    taskDescription:updatedData.taskDescription,
  };
}
// use return because if the id did not match it dont stored in global store we need that data so we are using return
return task;  // important
});
updatelocalStorage();
};