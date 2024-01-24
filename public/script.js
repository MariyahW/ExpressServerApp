const form = document.querySelector("form");
const prime = document.getElementById("prime");
const space = document.createElement('br');
// const sec = document.getElementById('second');
// const third = document.getElementById('third');


//event listener for form that will allow me to dynamically add selections based on user input. The form selections will ultimately send the user to the api page
prime.addEventListener("change", (event) => {
  event.preventDefault();
  console.log(event);
  if (event.target.value == "base") {
    let greater = document.createElement("option");
    greater.value = "greater";
    greater.innerHTML = "Search all salaries larger than your input";

    let dis = document.createElement("option");
    dis.value = "dis";
    dis.innerHTML = " ";

    let def = document.createElement("option");
    def.value = "default";
    def.innerHTML = "Default";


    let label = document.createElement("label");
    label.for = "second";
    label.innerHTML = "What  base pay details would you like to search?";
    let sec = document.createElement("select");
    sec.id = "second";

    //add to form
    sec.appendChild(def);
    sec.appendChild(greater);
    sec.appendChild(dis);
    sec.value = "dis";
    form.appendChild(label);
    form.appendChild(sec);

        sec.addEventListener('change', event=>{
            if(event.target.value=='greater'){
                let amount = document.createElement('input');
                amount.type='text';
                amount.placeholder='Enter the salary min'
                form.appendChild(space);
                form.appendChild(amount);
                amount.addEventListener('change', event=>{
                    console.log(event.target)
                window.open(`http://localhost:8080/base/${event.target.value}`, "newwindow");
        
                })
        

            }
            if(event.target.value=='default')  window.open("http://localhost:8080/base", "newwindow");
        })


  }
  if (event.target.value == "pay") {
    //Create elements upon selection pay
    let gender = document.createElement("option");
    gender.value = "gender";
    gender.innerHTML = "Gender";

    let dis = document.createElement("option");
    dis.value = "dis";
    dis.innerHTML = " ";

    let def = document.createElement("option");
    def.value = "default";
    def.innerHTML = "Default";

    let salary = document.createElement("option");
    salary.value = "salary";
    salary.innerHTML = "Salary";

    let department = document.createElement("option");
    department.value = "department";
    department.innerHTML = "Department";

    let label = document.createElement("label");
    label.for = "second";
    label.innerHTML = "What pay details would you like to search?";
    let sec = document.createElement("select");
    sec.id = "second";

    //add to form
    sec.appendChild(def);
    sec.appendChild(gender);
    sec.appendChild(salary);
    sec.appendChild(department);
    sec.value = "dis";
    form.appendChild(label);
    form.appendChild(sec);

    sec.addEventListener("change", (event) => {
      if (event.target.value == "default") {
        window.open("http://localhost:8080/pay", "newwindow");
      }
      if (event.target.value == "gender") {
        //Create elements upon selection pay -> gender
        let male = document.createElement("option");
        male.value = "male";
        male.innerHTML = "Male";

        let dis = document.createElement("option");
        dis.value = "dis";
        dis.innerHTML = " ";

        let female = document.createElement("option");
        female.value = "female";
        female.innerHTML = "Female";

        let third = document.createElement("select");
        third.id = "third";
        let label = document.createElement("label");
        label.for = "third";
        label.innerHTML = "What gender would you like to search?";
        third.appendChild(male);
        third.appendChild(female);
        third.appendChild(dis);
        third.value=dis;
       
   
       form.appendChild(space);
        form.appendChild(label);
        form.appendChild(third);

        third.addEventListener("change", (event) => {
          if (event.target.value == "male") {
            window.open("http://localhost:8080/pay?gender=M", "newwindow");
          }
          if (event.target.value == "female") {
            window.open("http://localhost:8080/pay?gender=F", "newwindow");
          }
        });
      }
      if (event.target.value == "salary") {
        window.open("http://localhost:8080/pay?salary=yes", "newwindow");
      }
      if (event.target.value == "department") {
        let dept = document.createElement('input');
        dept.type='text';
        dept.placeholder='Enter Dept Abbreviation'
        form.appendChild(space);
        form.appendChild(dept);
        dept.addEventListener('change', event=>{
            console.log(event.target)
        window.open(`http://localhost:8080/pay/${event.target.value}`, "newwindow");

        })

      }
    });
  }
  if (event.target.value == "department") {
  }
});
