
test=[
    {"TID":"0","Typ":"Test", "Fach":"Fsst", "Info":"Datenbank","Datum":"20.2.2018","Notendurchschnitt":"3,2"},
    {"TID":"1","Typ":"SA", "Fach":"Mathe","Datum":"15.2.2018","Notendurchschnitt":"2,2"},
    {"TID":"2","Typ":"SMÜP", "Fach":"Englisch","Datum":"20.2.2018","Notendurchschnitt":"2,8"},
    {"TID":"3","Typ":"Test", "Fach":"KSN","Datum":"24.2.2018","Notendurchschnitt":"3,6"}
]
noten=[
    {"SID":"0","Name":"Sepp", "Note":"4","Punkte":"12/20","Bemerkung":""},
    {"SID":"1","Name":"Hans", "Note":"","Punkte":"","Bemerkung":"gefehlt"},
    {"SID":"2","Name":"Franz", "Note":"4","Punkte":"10/20","Bemerkung":"4-"},
    {"SID":"3","Name":"Hias", "Note":"2","Punkte":"19/20","Bemerkung":""}
]
fach =[
    {"FID":"0","Name":"Fsst"},
    {"FID":"1","Name":"Mathe"},
    {"FID":"2","Name":"Englisch"},
    {"FID":"3","Name":"KSN"}
]
init()
//<a onclick="goBack()"class="btn waves-effect waves-light"><i class="material-icons middle">arrow_back</i></a></li>

function activeTab() {
    
      return '<li class="active"><li><a href="./index.html" class="waves-effect waves-light btn"><i class="material-icons left">home</i>Home</a></li><li><a href="#info">KlassenInfo</a></li><li><a href="#suche">Suche</a></li><li><a href="#hinz">Test Hinzufügen</a></li>'
    
}
function goBack() {
    window.history.back();
}
function init() {

    //updatePersonData()

}

function klassepressed(buttonEl){
    let divel = document.getElementById('TestTabelle')
    let htmlTxt = '<div class="container"><div class ="col"><table class="striped"> <thead> <tr> <th>Typ</td> <td>Fach</th> <th>Datum</th> <th>Notendurchschnitt</th> <th> </th> </tr> </thead> <tbody>'
    for(i =0;i<test.length;i++){
        htmlTxt+="<tr> <td>"+test[i].Typ+"</td> <td>"+test[i].Fach+"</td> <td>"+test[i].Datum+"</td> <td>"+test[i].Notendurchschnitt+"</td> <td><button onclick='testclicked()'>Ansehen</button> </td> </tr>"
    }
    htmlTxt+= " </tbody> </table></div></div>"
    divel.innerHTML=htmlTxt
}

/*function Klassendropdown(){
     // console.log(buttonEl)
      
      let htmlTxt='<li><a onclick="klassepressed(this)" href="Klassenauswahl">1AHELS</a></li> <li><a onclick="klassepressed(this)" href="#!">2AHELS</a></li> <li><a onclick="klassepressed(this)" href="#!">3AHELS</a></li> <li><a onclick="klassepressed(this)" href="#!">4AHELS</a></li> <li><a onclick="klassepressed(this)" href="#!">5AHELS</a></li>'
      let divEl=document.getElementById('dropdownAHELS')
      divEl.innerHTML=htmlTxt  
}
function klassepressedtest(buttonEl){
    let divel = document.getElementById('TestTabelle')
    let htmlTxt = '<ul class="collapsible" data-collapsible="accordion"> <li> <div class="collapsible-header"> <i class="material-icons">filter_drama</i> KSN <span class="new badge">4</span></div> <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div> </li> <li> <div class="collapsible-header"> <i class="material-icons">place</i> Englisch <span class="badge">1</span></div> <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div> </li> </ul>'
    divel.innerHTML=htmlTxt
}*/
function testclicked(){
    let divel = document.getElementById('TestTabelle')
    let htmlTxt = '<div class="container"><div class ="col"><table class="striped"> <thead> <tr> <th>Name</th> <th>Note</th> <th>Punkte</th> <th>Bemerkung</th> </tr> </thead> <tbody>'
    for(i =0;i<test.length;i++){
        htmlTxt+="<tr> <td onclick='namepressed("+noten[i].SID+")'>"+"<p>"+noten[i].Name+"</p>"+"</td> <td>"+noten[i].Note+"</td> <td>"+noten[i].Punkte+"</td> <td>"+noten[i].Bemerkung+"</td></tr>"
    }
    htmlTxt+= " </tbody> </table></div></div>"
    divel.innerHTML=htmlTxt
}
function namepressed(namenid){
    console.log(namenid)
    let divel = document.getElementById('TestTabelle')
    let htmlTxt = '<div class="container"><div class ="col"><table class="striped"> <thead> <tr> <th>Fach</th> </tr> </thead> <tbody>'
    for(i =0;i<fach.length;i++){
        htmlTxt+="<tr> <td onclick='fachpressed("+namenid+","+fach[i].FID+")'>"+fach[i].Name+"</td></tr>"
    }
    htmlTxt+= " </tbody> </table></div></div>"
    divel.innerHTML=htmlTxt

  
}
function fachpressed(name,fachauswahl){
    console.log(name)
    console.log(fachauswahl)

    let fachsch
    for(let i =0;i<fach.length;i++){
        if(fachauswahl==fach[i].FID){
            fachsch=fach[i].Name;
        }
    }
    let namesch
    
    for(let i =0;i<noten.length;i++){
        if(name==noten[i].SID){
            namesch=noten[i].Name;
        }
    }
    console.log(fachsch)
    
    console.log(namesch)
    let htmlTxt="<div class='container'><div class ='col'><table class='striped'> <thead> <tr> <th>Typ</td> <th>Datum</th> <th>Note</th> <th>Punkte</th> <th>Bemerkung</th> </tr> </thead> <tbody>"
      
    for(let i =0;i<test.length;i++){
        if(test[i].Fach==fachsch){
            htmlTxt+="<tr> <td>"+test[i].Typ+"</td> <td>"+test[i].Datum+"</td>"
            for(let j=0;j<noten.length;j++){
                if(namesch==noten[j].Name){
                    htmlTxt+="<td>"+noten[j].Note+"</td> <td>"+noten[j].Punkte+"</td> <td>"+noten[j].Bemerkung+"</td> </tr>"
                }
            } 
            
        }
    }
    htmlTxt+=" </tbody> </table></div></div>"
    let divEl=document.getElementById('TestTabelle')
    divEl.innerHTML=htmlTxt

}
