var table = document.getElementById('user-table');
var tableBody = document.getElementById('user-tbody');
var form = document.getElementById('user-form');
var deleteAllBtn = document.getElementById('deleteAll');
var delete1 = document.getElementById('del1');

function addRow(userName,age,courses){
    var newRow = document.createElement('tr');
    newRow.innerHTML=`
     <td style="border: solid; background-color: rgb(164, 194, 223); font-size:17px">${userName}</td>
     <td style="border: solid; background-color: rgb(164, 194, 223); font-size:17px">${age}</td>
     <td style="border: solid; background-color: rgb(164, 194, 223); font-size:17px">${courses}</td>
     <td style="border: solid; background-color: rgb(164, 194, 223);"><button class="deleteBtn"  style="background-color: black; color:white">Delete</button></td>
    `;
    tableBody.appendChild(newRow);
    alert("User Name: "+userName)

    document.getElementById("name").value="";
    document.getElementById("age").value="";
    document.getElementById("courses").value="";
}


function deleteRow(row){
    row.remove();
}

function deleteAll(){
    while(tableBody.firstChild){
        tableBody.removeChild(tableBody.firstChild);
    }
}


form.addEventListener('submit',(e)=>{
    e.preventDefault();
        var userName= document.getElementById('name').value.trim();
        var age= document.getElementById('age').value.trim();
        var courseSelect= document.getElementById('courses');

        var courses=[];

        var options =courseSelect.options;
        for(var i=0; i<options.length;i++){
            if (options[i].selected){
                courses.push(options[i].text);
            }
        }

        
        if(userName === '' || age === '' || courses.length === ''){
            alert("Please fill out all fields");
        }
        else if(!/^[a-zA-Z]+$/.test(userName)){
            alert("Name should only contain alphabetic characters");
            return;
        }
    
         else if(age < 16 || age > 60){
            alert("Age must be between 16 and 60 years");
            return;
        }

        else if(courses.length === 0){
            alert("Please select at least one course");
            return;
        }


        else {
            addRow(userName, age, courses);
        }
       
   
});
delete1.addEventListener('click',(e)=>{
    e.preventDefault();
    e.stopPropagation(); // Prevent the event from bubbling up to the form
    const row = tableBody.querySelector('tr:last-child'); // Get the last row in the table
    deleteRow(row);
});

tableBody.addEventListener('click',(e)=>{
    if(e.target.classList.contains('deleteBtn','del1')){
        const row = e.target.parentNode.parentNode;
        deleteRow(row);
    }
});

deleteAllBtn.addEventListener('click',()=>{
    deleteAll();
});




