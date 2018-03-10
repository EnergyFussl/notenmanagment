$(document).ready(function() {
    navBar()
    //Klassendropdown()
    $("p").mouseover(function(){
      $("p").css("background-color", "lightgray");
    });
    $("p").mouseout(function(){
      $("p").css("background-color", "white");
    });
  })
  
  
  function navBar() {
    
      let gen = ''
    
      gen += '<nav class="teal navbar-material darken-3"><div class="nav-wrapper"><a href="" class="brand-logo right"><img class="responsive-img" src="HTL-Logo-schwarz-transparent.png"></a><ul id="nav-mobile" class="left">'+ activeTab() +'</ul></div></nav>'
      //Unterschieliche Farben bei den Tabs ??
      
    
      document.getElementById('navDiv').innerHTML = gen;
    
    }