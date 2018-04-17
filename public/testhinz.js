
test=[
    /*{"TID":"0","Typ":"Test", "Fach":"Fsst", "Info":"Datenbank","Datum":"20.2.2018","Notendurchschnitt":"3,2"},
    {"TID":"1","Typ":"SA", "Fach":"Mathe","Datum":"15.2.2018","Notendurchschnitt":"2,2"},
    {"TID":"2","Typ":"SMÜP", "Fach":"Englisch","Datum":"20.2.2018","Notendurchschnitt":"2,8"},
    {"TID":"3","Typ":"Test", "Fach":"KSN","Datum":"24.2.2018","Notendurchschnitt":"3,6"}*/
]
noten=[
    /*{"SID":"0","Name":"Sepp", "Note":"4","Punkte":"12/20","Bemerkung":""},
    {"SID":"1","Name":"Hans", "Note":"","Punkte":"","Bemerkung":"gefehlt"},
    {"SID":"2","Name":"Franz", "Note":"4","Punkte":"10/20","Bemerkung":"4-"},
    {"SID":"3","Name":"Hias", "Note":"2","Punkte":"19/20","Bemerkung":""}*/
]
fach =[
    /*{"FID":"0","Name":"Fsst"},
    {"FID":"1","Name":"Mathe"},
    {"FID":"2","Name":"Englisch"},
    {"FID":"3","Name":"KSN"}*/
]
klassen=[

]
schueler=[

]
var kid
var fach
var bezeichnung
var datum
init()
//<a onclick="goBack()"class="btn waves-effect waves-light"><i class="material-icons middle">arrow_back</i></a></li>

function activeTab() {
    
      return '<li class="active"><li><a href="./index.html" class="waves-effect waves-light btn"><i class="material-icons left">home</i>Home</a></li><li><a href="./index.html">KlassenInfo</a></li><li><a href="./testhinz.html">Test Hinzufügen</a></li>'
    
}
function goBack() {
    window.history.back();
}

function init() {
    getclass()


}
function getcolor(){
    return "teal"
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
function dateneintragen(){
    typ=document.querySelector("#typ").value
    fach=document.querySelector("#fach").value
    bezeichnung=document.querySelector("#beschreibung").value
    datum=document.querySelector("#datepicker").value
    console.log(fach+bezeichnung+datum+kid)
    let divEl = document.getElementById('main')
    let htmlTxt="<table><tr><th>Name</th><th>Note</th><th>Punkte</th><th>Bemerkung</th></tr>"
    for(var i =0;i<schueler.length;i++){
        htmlTxt+="<tr><td>"+schueler[i].fullname+"</td>"
        htmlTxt+='<td><input id="note'+(i+1)+'" type="number" min="1" max="5"/></td>'
        htmlTxt+='<td> <input id="punkte'+(i+1)+'" type="number"> </td>'
        htmlTxt+='<td><input id="bemerk'+(i+1)+'" type="text"></td>'
        htmlTxt+="</tr>"
    }
    htmlTxt+="</table>"
    htmlTxt+='<button class="btn waves-effect waves-light" onclick="testeigeben()" type="submit" >Speichern<i class="material-icons right">send</i></button>'
    //'<form class="col s12"><div class="row"><div class="input-field col s6" id="schuelernamen"><div class="row"><div class="input-field col s6 s6"><select class="browser-default"><option value="" disabled selected>Schueler auswählen</option><option value="1">Sep</option><option value="2">Franz</option><option value="3">Hans</option></select></div></div><div class="row"><div class="input-field col s6"><input id="note" type="number" class="validate"><label for="note">Note</label></div></div><div class="row"><div class="input-field col s6"><input id="punkte" type="text" class="validate"><label for="punkte">Punkte</label></div></div><div class="row"><div class="input-field col s6"><input id="bemerkung" type="text" class="validate"><label for="bemerkung">Bemerkung</label></div><div class="input-field col s6"><button class="btn waves-effect waves-light" type="submit" name="action">Submit<i class="material-icons right">send</i></button></div></div></form>'
    divEl.innerHTML=htmlTxt

}
function testeigeben(){
    //[{"sid":1,"fullname":"Loama","kid":1,"klasse":"5AHELS","note":1,"bemerkung":"1+","punkte":20,"bezeichnung":"PSK","datum":"11-04-2018","fach":"KSN"}]
    var testergebnisse = '['
    for(var i=0;i<schueler.length;i++){
        var note = document.querySelector("#note"+(i+1)).value
        var punkte = document.querySelector("#punkte"+(i+1)).value
        var bemerk =document.querySelector("#bemerk"+(i+1)).value
        //testergebnisse.push({"sid":(i+1),"fullname":schueler[i].fullname,"kid":kid,"klasse":klassen[kid-1].klasse,"note":note,"bemerkung":bemerk,"punkte":punkte,"bezeichnung":bezeichnung,"datum":datum,"fach":fach})
        testergebnisse+='{"sid":'+(i+1)+',"fullname":"'+schueler[i].fullname+'","kid":'+kid+',"klasse":"'+klassen[kid-1].klasse+'","note":'+note+',"bemerkung":"'+bemerk+'","punkte":'+punkte+',"bezeichnung":"'+bezeichnung+'","datum":"'+datum+'","fach":"'+fach+'","typ":"'+typ+'"},'
        
    }

    var testergebnisse = testergebnisse.substr(0, testergebnisse.length-1);
    testergebnisse+=']'

    var xhr = new XMLHttpRequest();
    var url = "http://localhost:3000/api/post_test";
    xhr.open("POST", url, true);
    console.log("nach xhttp.open")
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            }
        };
        console.log(testergebnisse)
    xhr.send(testergebnisse);
    /*alert("Daten gespeichert")
    window.location.href="http://localhost:3000/index.html"*/
    
    
}
function getclass() {
    var httpReq = new XMLHttpRequest();
    httpReq.open("GET", "/api/get_all-classes/");
    httpReq.onload = function () {
        if (this.status == 200) {
            klassen = JSON.parse(this.responseText)
            console.log(klassen)
            drawclasstable()
        } else {
            console.log('Response code ' + this.status)
        }
    };
    httpReq.onerror = function () {
        console.log("Error ")
    };
    httpReq.send()
}
function drawclasstable(){
    let divEl = document.getElementById('dropdownKlasse')
    console.log(divEl)
    let htmlTxt = "<table><tbody>"
    let z=-1
    for(let i=0;i<7;i++){
        htmlTxt+="<tr>"
        for(let j=0;j<5;j++){
            z++
            htmlTxt+='<td><li><a onclick="klassepressed(this,'+klassen[z].kid+')" href="#klasse">'+klassen[z].klasse+'</a></td>'

        }       
        htmlTxt+="</tr>"
    }
    htmlTxt+="<tr>"
    for(let i=0;i<4;i++){
        z++
        htmlTxt+='<td><li><a onclick="klassepressed(this,'+klassen[z].kid+')" href="#klasse">'+klassen[z].klasse+'</a></td>'
    }
    htmlTxt+="</tr></tbody></table>"
    divEl.innerHTML=htmlTxt
}
function klassepressed(buttonEl,name){
    var n=klassen[name-1].klasse
    console.log(n)

    var divEl = document.getElementById("klasse")
    var htmlTxt =n
    divEl.innerHTML=htmlTxt
    kid=name
    getschueler(name)
    
}
function getschueler(klassenid){
    var httpReq = new XMLHttpRequest();
    httpReq.open("GET", "/api/get_all-students/"+klassenid);
    httpReq.onload = function () {
        if (this.status == 200) {
            schueler = JSON.parse(this.responseText)
            console.log(schueler)
        } else {
            console.log('Response code ' + this.status)
        }
    };
    httpReq.onerror = function () {
        console.log("Error ")
    };
    httpReq.send()
}
