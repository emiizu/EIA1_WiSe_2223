window.addEventListener("load", function (): void {


    
      let enter: HTMLInputElement = (document.getElementById("inputText") as HTMLInputElement);
      let tasksNumber: number = 0;
   
      enter.addEventListener("keypress", function (event: KeyboardEvent) {
          if (event.key == "Enter") {
               addTask();
               enter.value = "";
          }
      });
   
   
   
      
   
   
      function addTask() {
   
          
   
          let div: HTMLDivElement = document.createElement("div");
          div.className = "toDoItem";
   
          
          let checkbox: HTMLInputElement = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.className = "checkBox";
   
          let label: HTMLLabelElement = document.createElement("label");
          label.innerHTML = enter.value;
          label.className = "taskText"; 
   
          let trash: HTMLElement = document.createElement("i");
          trash.className = "far fa-trash-alt"; 
   
          document.getElementById("toDoList").appendChild(div);
          div.appendChild(checkbox);
          div.appendChild(label);
          div.appendChild(trash);
   
          function deleteTask(div: HTMLDivElement) {
            div.remove();
     
            tasksNumber--;
            tasksAnzahl();
        }
          trash.addEventListener("click", function (event: MouseEvent) {
              console.log(event);
              deleteTask(div);
              
          });
   
          tasksNumber++;
          tasksAnzahl();
      }
   
   
   
      function tasksAnzahl() {
          document.getElementById("counter").innerText = tasksNumber + " in total";
      }
   
   
   
   
   
   
   
   });