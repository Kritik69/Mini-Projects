const reviews = [
    {
        id: 1,
        author: "susan",
        job: "Web Developer",
        info: "This product is great i have been using this for a while now and would definetly recommend.",
        img:"https://image.shutterstock.com/image-photo/closeup-photo-amazing-short-hairdo-260nw-1617540484.jpg", 
    },
    {
        id: 2,
        author: "Patrick",
        job: "Machine Learner",
        info:"I am from another field but from the moment i started using tis i am in love with it Thankyou.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1200px-Pierre-Person.jpg",
    },
    {
        id: 3,
        author: "Jake",
        job: "App Developer",
        info: "We app developers and web developers are 90% same so we use almost same tools, so i would definetly recommend this.",
        img: "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    },
    {
        id: 4,
        author: "Shrikant Jichkar",
        job: "Ux designer",
        info: "I am the most educated person of India and you should listed to me, This product is the best in the Market.",
        img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201702/srikant_647_022817115157.jpg?size=770:433"
    }
]
// select items

const img = document.getElementById("img")
const author = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")

// query selectors
const prevBtn = document.querySelector(".prevBtn")
const nextBtn = document.querySelector(".nextBtn")
const random = document.querySelector(".random")

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function(){
   showPerson(currentItem);
});

//funtion

function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.author;
    job.textContent = item.job;
    info.textContent = item.info;
}

//next person

nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem>reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem); 
})

prevBtn.addEventListener("click", function(){
    currentItem--;
    if (currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
})


random.addEventListener("click", function(){
    currentItem = Math.floor(Math.random() * reviews.length)
    console.log(currentItem)
    showPerson();
})