const taskContainer = document.querySelector(".task__container");

globalStore=[];

  const generateNewCard = (taskData) => `<div class="col-md-6 col-lg-4"  id=${taskData.id}>     
  <div class="card">
    <div class="card-header d-flex justify-content-end gap-2">
      <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
      <button type="button" class="btn btn-outline-danger"><i class="far fa-trash-alt"></i></button>
    </div>
    <img src=${taskData.imageUrl} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">${taskData.taskTitle}</h5>
      <p class="card-text">${taskData.taskDescription}</p>
      <a href="#" class="btn btn-primary">${taskData.taskType}</a>
     </div>
     <div class="card-footer ">
      <button type="button" class="btn btn-outline-primary float-end">open task</button>
    </div>`;


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
// edit the card
//open the card



























