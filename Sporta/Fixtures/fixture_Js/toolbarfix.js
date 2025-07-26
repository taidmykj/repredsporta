

function toolbar() {
      document.getElementById('bar').innerHTML = '<hr class="hr one"><hr class="hr two">';
  let service = `
   <div class="toolbar move">
        <div class="dif-tool"><h1 class="title dif"><span class="leta1">Rep</span><span class="leta2">Red</span> <span class="sports">Sports</span></h1></div>
        <p class="svg home"> Home</p><hr>
        <p class="svg Teams"> Teams</p><hr>
        <p class="svg Fixtures" > Fixtures</p><hr>
        <p class="svg Table"> Table</p><hr>
        <p class="svg Fixtures"> Top Score</p><hr>
        <p class="svg Teams"> News</p><hr>
        <p class="svg Fixtures"> Transfer</p><hr>
   </div>`;
   document.getElementById('tool').innerHTML = service;
  setTimeout (function () {
     document.getElementById('barTool').innerHTML = '<div onclick="back()" class="bar back"><hr class="hr one done" onclick="back()"><hr class="hr two finish" onclick="back()"></div>';
     document.getElementById('tool').innerHTML = 
     `
        <div class="mover">
        <div class="dif-tool"><h1 class="title dif"><span class="leta1">Rep</span><span class="leta2">Red</span> <span class="sports">Sports</span></h1></div>
        <p class="svg home" onclick="window.location.href = '../Home/home.html'; this.style.color = 'tomato';"> Home</p><hr>
        <p class="svg Teams"> Teams</p><hr>
        <p class="svg Fixtures" style="color: tomato; text-decoration: underline;" onclick="goTo(this.innerText)"> Fixtures</p><hr>
        <p class="svg Table" onclick="goTo(this.innerText)"> Table</p><hr>
        <p class="svg Fixtures"> Top Score</p><hr>
        <p class="svg Teams"> News</p><hr>
        <p class="svg Fixtures"> Transfer</p><hr>
   </div><div class="clean" onclick="back()" onmouseover="back()"></div>`;

  }, 1000);
}

function back() {
   document.getElementById('barTool').innerHTML = 
   `<div id="bar" class="bar" onclick="toolbar()">
        <hr class="hr">
        <hr class="hr">
      </div>`;
   document.getElementById('tool').innerHTML = '';
}
