let number = 0;
let data = [3]; // Añadir variable para almacenar los datos recuperados de ajax.json
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");

//window.onload = changeVideo;
window.onload = getData();
button.addEventListener('click', e => {changeVideo()});

function getData() {
  // Describir el proceso de recuperación de datos de ajax.json
  const request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState == 4) {
      if(request.status == 200) {
        data[0] = request.response[0];//comentatio
        data[1] = request.response[1];
        data[2] = request.response[2];
      }
    }
  }
  request.open("GET", "ajax.json");
  request.responseType = "json";
  request.send(null);

  //console.log(data);
}

function changeVideo() {
  titleArea.innerHTML = data[number].title;
  contentArea.innerHTML = data[number].content; 
  videoArea.setAttribute("src", data[number].url);
  number == 2 ? number = 0 : number++;
}