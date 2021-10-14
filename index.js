const  saveChanges = () =>{
    const taskData = {
      id: `${Date.now()}`, // unique number for id (it create a unique number for each and every mili second )
      imageUrl:document.getElementById("imageurl"),
      taskTitle:document.getElementById("tasktitle"),
      tasktype:document.getElementById("tasktype"), 
      taskDescription:document.getElementById("taskdescriptiom"),
    };
    console.log("taskData");
};