// const intervalID = setInterval(myCallBack, 1000)
// let counter = document.querySelector("#counter")
// let counterNumber = 0 
// function myCallBack() {
//     counterNumber++
//     counter.textContent = counterNumber
// }

document.addEventListener("DOMContentLoaded", function() {
    // Variables to store references to DOM elements and other state
    const counterDisplay = document.getElementById('counter');
    const minusButton = document.getElementById('minus');
    const plusButton = document.getElementById('plus');
    const heartButton = document.getElementById('heart');
    const pauseButton = document.getElementById('pause');
    const likesList = document.querySelector('.likes');
    const commentList = document.getElementById('list');
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    
    let counter = 0;
    let timer;
    let paused = false;
  
    // Function to update the counter display
    function updateCounterDisplay() {
      counterDisplay.textContent = counter;
    }
  
    // Function to increment the counter
    function incrementCounter() {
      counter++;
      updateCounterDisplay();
    }
  
    // Function to decrement the counter
    function decrementCounter() {
      counter--;
      updateCounterDisplay();
    }
  
    // Function to handle liking a number
    function likeNumber() {
      const currentNumber = counter;
      const existingLike = document.querySelector(`.likes li[data-number="${currentNumber}"]`);
      if (existingLike) {
        const likeCountSpan = existingLike.querySelector('span');
        const likeCount = parseInt(likeCountSpan.textContent);
        likeCountSpan.textContent = likeCount + 1;
      } else {
        const newLike = document.createElement('li');
        newLike.setAttribute('data-number', currentNumber);
        newLike.innerHTML = `${currentNumber} has been liked <span>1</span> times`;
        likesList.appendChild(newLike);
      }
    }
  
    // Function to pause the counter
    function pauseCounter() {
      if (!paused) {
        clearInterval(timer);
        minusButton.disabled = true;
        plusButton.disabled = true;
        heartButton.disabled = true;
        pauseButton.textContent = 'resume';
        paused = true;
      } else {
        timer = setInterval(incrementCounter, 1000);
        minusButton.disabled = false;
        plusButton.disabled = false;
        heartButton.disabled = false;
        pauseButton.textContent = 'pause';
        paused = false;
      }
    }
  
    // Function to handle submitting a comment
    function submitComment(event) {
      event.preventDefault();
      const comment = commentInput.value.trim();
      if (comment !== '') {
        const newComment = document.createElement('div');
        newComment.textContent = comment;
        commentList.appendChild(newComment);
        commentInput.value = '';
      }
    }
  
    // Event listeners for buttons
    minusButton.addEventListener('click', decrementCounter);
    plusButton.addEventListener('click', incrementCounter);
    heartButton.addEventListener('click', likeNumber);
    pauseButton.addEventListener('click', pauseCounter);
    commentForm.addEventListener('submit', submitComment);
  
    // Start the counter
    timer = setInterval(incrementCounter, 1000);
  });
