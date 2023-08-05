let string = ""
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
       
        if (e.target.innerHTML == "=") {
            string = eval(string)
            document.querySelector("input").value = string;
        }
         else if (e.target.innerHTML == "AC") {
            string = ""
            document.querySelector("input").value = string;
        } else {
            console.log(e.target.innerHTML);
            string = string + e.target.innerHTML;
            console.log(string)
            document.querySelector('input').value = string;
        }
        // button.style.background = "green"
        // return;
    })
   
    
})