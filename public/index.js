
test=[
    /*{"TID":"0","Typ":"Test", "Fach":"Fsst", "Info":"Datenbank","Datum":"20.2.2018","Notendurchschnitt":"3,2"},
    {"TID":"1","Typ":"SA", "Fach":"Mathe","Datum":"15.2.2018","Notendurchschnitt":"2,2"},
    {"TID":"2","Typ":"SMÜP", "Fach":"Englisch","Datum":"20.2.2018","Notendurchschnitt":"2,8"},
    {"TID":"3","Typ":"Test", "Fach":"KSN","Datum":"24.2.2018","Notendurchschnitt":"3,6"}*/
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
klassen=[
    /*{"kid":1,"klasse":"1AHELS"},
    {"kid":2,"klasse":"2AHELS"},
    {"kid":3,"klasse":"3AHELS"},
    {"kid":4,"klasse":"4AHELS"},
    {"kid":5,"klasse":"5AHELS"},
    {"kid":6,"klasse":"1BHELS"},
    {"kid":7,"klasse":"2BHELS"},
    {"kid":8,"klasse":"3BHELS"},
    {"kid":9,"klasse":"4BHELS"},
    {"kid":10,"klasse":"5BHELS"},
    {"kid":11,"klasse":"1CHELS"},
    {"kid":12,"klasse":"2CHELS"},
    {"kid":13,"klasse":"3CHELS"},
    {"kid":14,"klasse":"4CHELS"},
    {"kid":15,"klasse":"5CHELS"},
    {"kid":16,"klasse":"1DHELS"},
    {"kid":17,"klasse":"2DHELS"},
    {"kid":18,"klasse":"3DHELS"},
    {"kid":19,"klasse":"4DHELS"},
    {"kid":20,"klasse":"5DHELS"},
    {"kid":21,"klasse":"1AHMEA"},
    {"kid":22,"klasse":"2AHMEA"},
    {"kid":23,"klasse":"3AHMEA"},
    {"kid":24,"klasse":"4AHMEA"},
    {"kid":25,"klasse":"5AHMEA"},
    {"kid":26,"klasse":"1BHMEA"},
    {"kid":27,"klasse":"2BHMEA"},
    {"kid":28,"klasse":"3BHMEA"},
    {"kid":29,"klasse":"4BHMEA"},
    {"kid":30,"klasse":"5BHMEA"},
    {"kid":31,"klasse":"1AHET"},
    {"kid":32,"klasse":"2AHET"},
    {"kid":33,"klasse":"3AHET"},
    {"kid":34,"klasse":"4AHET"},
    {"kid":35,"klasse":"5AHET"},
    {"kid":36,"klasse":"1AFEL"},
    {"kid":37,"klasse":"2AFEL"},
    {"kid":38,"klasse":"3AFEL"},
    {"kid":39,"klasse":"4AFEL"}*/
]


init()
//console.log(test)
 
//<a onclick="goBack()"class="btn waves-effect waves-light"><i class="material-icons middle">arrow_back</i></a></li>

function activeTab() {
    
      return '<li class="active"><li><a href="./index.html" class="waves-effect waves-light btn"><i class="material-icons left">home</i>Home</a></li><li><a href="./index.html">KlassenInfo</a></li><li><a href="./suche.html">Suche</a></li><li><a href="./testhinz.html">Test Hinzufügen</a></li>'
    
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
    let divEl = document.getElementById('main')
    let htmlTxt='<form class="col s12"><div class="row"><div class="input-field col s6" id="schuelernamen"><div class="row"><div class="input-field col s6 s6"><select class="browser-default"><option value="" disabled selected>Schueler auswählen</option><option value="1">Sep</option><option value="2">Franz</option><option value="3">Hans</option></select></div></div><div class="row"><div class="input-field col s6"><input id="note" type="number" class="validate"><label for="note">Note</label></div></div><div class="row"><div class="input-field col s6"><input id="punkte" type="text" class="validate"><label for="punkte">Punkte</label></div></div><div class="row"><div class="input-field col s6"><input id="bemerkung" type="text" class="validate"><label for="bemerkung">Bemerkung</label></div><div class="input-field col s6"><button class="btn waves-effect waves-light" type="submit" name="action">Submit<i class="material-icons right">send</i></button></div></div></form>'
    divEl.innerHTML=htmlTxt
    //Matejka fragen wegen Schueler Noten eintragen altes System

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
function klassepressed(buttonEl,klassenid){
    gettest(klassenid)
    
}
function drawtest(){
    let divel = document.getElementById('TestTabelle')
    let htmlTxt = '<div class="container"><div class ="col"><table class="striped"> <thead> <tr> <th>Typ</td> <th>Fach</th> <th>Thema</th> <th>Datum</th> <th>Notendurchschnitt</th> <th> </th> </tr> </thead> <tbody>'
    for(i =0;i<test.length;i++){
        htmlTxt+="<tr> <td>"+test[i].typ+"</td> <td>"+test[i].fach+"</td> <td>"+test[i].bezeichnung+"</td> <td>"+test[i].datum+"</td> <td>"+test[i].average+"</td> <td><button onclick='testclicked("+test[i].tid+")'>Ansehen</button> </td> </tr>"
    }
    htmlTxt+= " </tbody> </table></div></div>"
    divel.innerHTML=htmlTxt
}
function gettest(klassenid) {
    var httpReq = new XMLHttpRequest();
    httpReq.open("GET", "/api/get_classchecks/"+klassenid);
    httpReq.onload = function () {
        if (this.status == 200) {
            test = JSON.parse(this.responseText)
            console.log(test)
            drawtest()  
        } else {
            console.log('Response code ' + this.status)
        }
    };
    httpReq.onerror = function () {
        console.log("Error ")
    };
    httpReq.send()
}
function geterg(testid) {
    var httpReq = new XMLHttpRequest();
    httpReq.open("GET", "/api/get_results/"+testid);
    httpReq.onload = function () {
        if (this.status == 200) {
            noten = JSON.parse(this.responseText)
            console.log(noten)
            drawerg(testid)  
        } else {
            console.log('Response code ' + this.status)
        }
    };
    httpReq.onerror = function () {
        console.log("Error ")
    };
    httpReq.send()
}
function testclicked(testid){
    geterg(testid)

}
function drawerg(testid){
    let divel = document.getElementById('TestTabelle')
    let htmlTxt = '<div class="container"><div class ="col"><table class="striped"> <thead> <tr> <th>Name</th> <th>Note</th> <th>Punkte</th> <th>Bemerkung</th> </tr> </thead> <tbody>'
    for(i =0;i<noten.length;i++){
        htmlTxt+="<tr> <td onclick='namepressed("+noten[i].sid+")'>"+"<p>"+noten[i].fullname+"</p>"+"</td> <td>"+noten[i].note+"</td> <td>"+noten[i].punkte+"</td> <td>"+noten[i].bemerkung+"</td></tr>"
    }
    htmlTxt+= " </tbody> </table></div></div>"
    divel.innerHTML=htmlTxt
}

