
// Function that animates my components when they are in the viewport
document.addEventListener("DOMContentLoaded",function(){
    //Components I want animated
    //The arr just stores all the components to make it easier to loop through
    let arr =[];
    const about = document.querySelector("#about-img");
    const gold = document.querySelector("#about-gold");
    const myProjects = document.querySelector("#projects");
    const projectHeader = document.querySelector("#project-header");
    const hiThere = document.querySelector("#name");
    const name= document.querySelector("#welcome-name");
    const girish= document.querySelector("#girish");
    arr.push(about);
    arr.push(gold);
    arr.push(myProjects);
    arr.push(projectHeader);
    arr.push(hiThere);
    arr.push(name);
    arr.push(girish);   
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        const target = entry.target;

      if (entry.isIntersecting) {
       
        if (target === gold) {
            target.style.animation = "fadeSlideInTop 1.3s ease-in forwards";
        } else {
          
          target.style.animation = "fadeSlideIn 1.2s ease-out forwards";
        }
        
// This resets the animation 
      } else {
        target.style.animation = "none";
      }
        });
    });
    // Observe each element in the array
    for (let i = 0; i < arr.length; i++) {
        observer.observe(arr[i]);}
 
});
//Fucntion that animates the welcome banner when the name is in the viewport and removes it when it is not
document.addEventListener("DOMContentLoaded", function () {
const banner = document.querySelector("#welcome-to-my-portfolio");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
    banner.style.visibility = "hidden"}
    else{
        banner.style.visibility = "visible";
        }
    }
        
    )
},{threshold:0.7})
    const name = document.querySelector("#name");
   observer.observe(name);
  });