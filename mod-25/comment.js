    // set a event handler to the button 
    document.getElementById("post_comment").addEventListener('click', function () {
      
      // get the text written in the text area 
       const getComment =  document.getElementById("get_comment");
       const commentValue = getComment.value;
      
       
     // get the parent node where do publish comment 
    const commentContainer = document.getElementById("comment_contianer")
  
     // create a comment p and set the inner text 
     const commentElement = document.createElement('p');
     commentElement.classList.add('comment');
     commentElement.innerText = commentValue;
     // append the new p tag to the parent tag 
     commentContainer.appendChild(commentElement);
     // clean the text area 
      getComment.value = '';

    })