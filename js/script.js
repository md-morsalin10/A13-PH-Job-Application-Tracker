let interviewList = [];
let rejectList = [];

// for count 
const totalCount = document.getElementById('total');
const interviewCount = document.getElementById('interview-count');
const rejectedCount = document.getElementById('reject-count');

// get main tag for event delegation
const mainContainer = document.querySelector('main');


// get cards 
const cardsSection = document.getElementById('card');
function calculateCount(){
    totalCount.innerText = cardsSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectList.length;
}
calculateCount()

//get all btn-filter
const allFilterBtn = document.getElementById("all-filter-btn");
const interviewBtn = document.getElementById("interview-btn");
const rejectedBtn = document.getElementById("rejected-btn");

// machine btn toggle click function
function toggleClick(id){
    allFilterBtn.classList.remove('btn-primary')
    interviewBtn.classList.remove('btn-primary')
    rejectedBtn.classList.remove('btn-primary')

    allFilterBtn.classList.add('btn')
    interviewBtn.classList.add('btn')
    rejectedBtn.classList.add('btn')

    const selectedBtn = document.getElementById(id);
    selectedBtn.classList.add('btn-primary');
}

mainContainer.addEventListener('click', function(event){
    // console.log(event.target.parentNode.parentNode)
    const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector('.company-name').innerText;
    const postOfJob = parentNode.querySelector('.post-of-job').innerText;
    const facilities = parentNode.querySelector('.facilities').innerText;
    const applicationStatus = parentNode.querySelector('.application-status').innerText;
    const responsibilites = parentNode.querySelector('.responsibilites').innerText;

    
    const cardsInformation ={
        companyName, 
        postOfJob, 
        facilities, 
        applicationStatus, 
        responsibilites
    }

    // console.log(cardsInformation)
   const cardNameExist = interviewList.find(item=> item.companyName == cardsInformation.companyName);
   if(!cardNameExist){
    interviewList.push(cardsInformation);
   }

   console.log(interviewList);
    
})