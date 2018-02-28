$(document).ready(function() {
    navBar()
    //Klassendropdown()
  })
  
  
function navBar() {
    let gen = ''
    gen += '<nav class=" navbar-material darken-3"><div class="nav-wrapper"><a href="/calendar" class="brand-logo right"></a><ul id="nav-mobile" class="left"></ul></div></nav>'
    document.getElementById('navDiv').innerHTML = gen;
  }