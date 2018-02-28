
test=[
    {"Typ":"Test", "Fach":"Fsst", "Info":"Datenbank","Datum":"20.2.2018","Notendurchschnitt":"3,2"},
    {"Typ":"SA", "Fach":"Mathe","Datum":"15.2.2018","Notendurchschnitt":"2,2"},
    {"Typ":"SMÜP", "Fach":"Englisch","Datum":"20.2.2018","Notendurchschnitt":"2,8"},
    {"Typ":"Test", "Fach":"KSN","Datum":"24.2.2018","Notendurchschnitt":"3,6"}
]
noten=[
    {"Name":"Sepp", "Note":"4","Punkte":"12/20","Bemerkung":""},
    {"Name":"Hans", "Note":"","Punkte":"","Bemerkung":"gefehlt"},
    {"Name":"Franz", "Note":"4","Punkte":"10/20","Bemerkung":"-"},
    {"Name":"Hias", "Note":"2","Punkte":"19/20","Bemerkung":""}
]

init()

function init() {

    //updatePersonData()

}

function klassepressed(buttonEl){
    let divel = document.getElementById('TestTabelle')
    let htmlTxt = '<table class="striped"> <thead> <tr> <th>Typ</td> <td>Fach</th> <th>Datum</th> <th>Notendurchschnitt</th> <th> </th> </tr> </thead> <tbody>'
    for(i =0;i<test.length;i++){
        htmlTxt+="<tr> <td>"+test[i].Typ+"</td> <td>"+test[i].Fach+"</td> <td>"+test[i].Datum+"</td> <td>"+test[i].Notendurchschnitt+"</td> <td><button onclick='testclicked()'>Ansehen</button> </td> </tr>"
    }
    htmlTxt+= " </tbody> </table>"
    divel.innerHTML=htmlTxt
}

function Klassendropdown(){
     // console.log(buttonEl)
      
      let htmlTxt='<li><a onclick="klassepressed(this)" href="#!">1AHELS</a></li> <li><a onclick="klassepressed(this)" href="#!">2AHELS</a></li> <li><a onclick="klassepressed(this)" href="#!">3AHELS</a></li> <li><a onclick="klassepressed(this)" href="#!">4AHELS</a></li> <li><a onclick="klassepressed(this)" href="#!">5AHELS</a></li>'
      let divEl=document.getElementById('dropdownAHELS')
      divEl.innerHTML=htmlTxt  
}
function klassepressedtest(buttonEl){
    let divel = document.getElementById('TestTabelle')
    let htmlTxt = '<ul class="collapsible" data-collapsible="accordion"> <li> <div class="collapsible-header"> <i class="material-icons">filter_drama</i> KSN <span class="new badge">4</span></div> <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div> </li> <li> <div class="collapsible-header"> <i class="material-icons">place</i> Englisch <span class="badge">1</span></div> <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div> </li> </ul>'
    divel.innerHTML=htmlTxt
}
function testclicked(){
    let divel = document.getElementById('TestTabelle')
    let htmlTxt = '<table class="striped"> <thead> <tr> <th>Name</td> <td>Note</th> <th>Punkte</th> <th>Bemerkung</th> </tr> </thead> <tbody>'
    for(i =0;i<test.length;i++){
        htmlTxt+="<tr> <td>"+noten[i].Name+"</td> <td>"+noten[i].Note+"</td> <td>"+noten[i].Punkte+"</td> <td>"+noten[i].Bemerkung+"</td></tr>"
    }
    htmlTxt+= " </tbody> </table>"
    divel.innerHTML=htmlTxt
}
