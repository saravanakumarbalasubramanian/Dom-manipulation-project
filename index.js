const  saveChanges = () => {
    const taskData = {
      id: `${Date.now()}`, // unique number for id (it create a unique number for each and every mili second )
      imageUrl:document.getElementById("imageurl").value,
      taskTitle:document.getElementById("tasktitle").value,
      tasktype:document.getElementById("tasktype").value,
      taskDescription:document.getElementById("taskdescriptiom").value,
    };
    console.log(taskData);
};