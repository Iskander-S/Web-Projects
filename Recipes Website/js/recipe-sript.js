// Function for Star Rating
const stars = document.querySelectorAll(".stars i");
stars.forEach((star, index1) => {
    star.addEventListener("click", () => {
        stars.forEach((star, index2) => {
            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
        });
    });
});

// Function for rating counting
let count = 0;
document.getElementById("stars").onclick = function(){
    count+=1;
    document.getElementById("countLabel").innerHTML=count;
} 