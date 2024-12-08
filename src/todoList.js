

//let's make todo list input work

function displayTaskList(){
  
            // Get the value of the input field
            let inputValue = document.getElementById('todoListInput').value;

            // Check if input is not empty 
            if (inputValue === "") {
                alert("Please try again! enter a Task");
                return;
            }
            //and prompt a message if not empty
            if(inputValue.length>1){
                alert(`you added ${inputValue} to the list!`)
            }
            // Create a new list element
            let listeElement = document.createElement('li');
            listeElement.textContent = inputValue;

            //add  click element to checked the item of the list
            listeElement.addEventListener('click', function(){
                this.classList.toggle('checked');
            });

            // Append the list item to the unordered list
            document.getElementById('taskList').appendChild(listeElement);

             // create a remove button for unwanted task
            let removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.onclick = function(){
            listeElement.remove();
             };
     
             //Append the remove button
             listeElement.appendChild(removeButton);
            document.getElementById('taskList').appendChild(listeElement);

            // Clear the input field
            document.getElementById('todoListInput').value = "";
        
    

}

function clearAll(){
    //select the list 
    let tasks = document.getElementById('taskList');
    //clear all the element of the list
    tasks.innerHTML = '';
   
}
//connect the function clear all with the clear all button
document.getElementById('removeAllTasks').addEventListener('click', clearAll);

