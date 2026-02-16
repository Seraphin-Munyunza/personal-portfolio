// const nightMode = document.querySelector("#mode");
// const body = document.querySelector("body");
// console.log(body.style.color);
// nightMode.addEventListener("click", () => {
//   body.style.backgroundColor = "grey";
//   body.style.color = "white";
// });

// change the theme
const modeChanger = document.querySelector("#themeToggle")
console.log(modeChanger)
  modeChanger.addEventListener("change", (e) => {
    if(modeChanger.checked){
       document.querySelector(".muted").innerHTML ="light mode" 
    }else{
        document.querySelector(".muted").innerHTML ="Dark mode"
    }
    
    document.body.setAttribute(
      "data-theme",
      e.target.checked ? "dark" : "light",
    );
  });
