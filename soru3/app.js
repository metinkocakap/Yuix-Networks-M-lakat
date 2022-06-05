const apiUrl="https://jsonplaceholder.typicode.com";
const dynamicPostID =Math.floor(Math.random()*98)+1;
const dynamicTitle = document.querySelector("#dynamic-title")
const dynamicBody = document.querySelector("#dynamic-body")
  fetch(`${apiUrl}/posts/${dynamicPostID}`)
  .then(response => response.json())
  .then(data => {
      dynamicTitle.innerText= data.title;
      dynamicBody.innerText= data.body;
  });

