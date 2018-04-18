
tests=[
    {"TID":"0","Typ":"Test", "Fach":"Fsst", "Info":"Datenbank","Datum":"20.2.2018","Note":"3","Punkte":"14","Bemerkung":""},
    {"TID":"1","Typ":"SA", "Fach":"Mathe","Info":"Integrieren","Datum":"15.2.2018","Note":"2","Punkte":"14","Bemerkung":""},
    {"TID":"2","Typ":"SMÜP", "Fach":"Englisch","Info":"Words","Datum":"20.2.2018","Note":"2","Punkte":"14","Bemerkung":""},
    {"TID":"3","Typ":"Test", "Fach":"KSN","Info":"PSK","Datum":"24.2.2018","Note":"4","Punkte":"14","Bemerkung":""}
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
let kid
getclass()
//<a onclick="goBack()"class="btn waves-effect waves-light"><i class="material-icons middle">arrow_back</i></a></li>

function activeTab() {
    
      return '<li class="active"><li><a href="./index.html" class="waves-effect waves-light btn"><i class="material-icons left">home</i>Home</a></li><li><a href="./index.html">KlassenInfo</a></li><li><a href="./suche.html">Suche</a></li><li><a href="./testhinz.html">Test Hinzufügen</a></li>'
    
}

function eingabe() {
    let vorn = document.querySelector("#first_name").value
    let nachn = document.querySelector("#last_name").value
    let klasse =document.querySelector("#klasse").value
 
    let httpReq = new XMLHttpRequest();
    httpReq.open("GET", "/api/get_all-classes");
    httpReq.onload = function () {
        if (this.status == 200) {
            klassen = JSON.parse(this.responseText)
            console.log(klassen)
            speichern(vorn,nachn,klasse)
           
        } else {
            console.log('Response code ' + this.status)
        }
    }
    httpReq.onerror = function () {
        console.log("Error ")
    };
    httpReq.send()

}
function getcolor(){
    return "teal"
}
function speichern(v,n,k){

    for(let i=0;i<klassen.length;i++){
        if(k==klassen[i].klasse){
            kid=klassen[i].kid
            alert(kid)
        }
    }
    let httpReq = new XMLHttpRequest();
    httpReq.open("GET", "/api/get_all-students/"+kid);
    httpReq.onload = function () {
        if (this.status == 200) {
            schueler = JSON.parse(this.responseText)
            console.log(schueler)
            searchschueler(v,n,k)
           
        } else {
            console.log('Response code ' + this.status)
        }
    };
    httpReq.onerror = function () {
        console.log("Error ")   
    };
    httpReq.send()
    
    
}
function searchschueler(vorn,nachn,klasse){

    let i
    let name=vorn+" "+nachn
    for(i=0;i<schueler.length;i++){
        if(name==schueler[i].fullname){
            /*
            get all test from schueler
            */
            alert("Gefunden")
            drawtests(vorn,nachn,klasse)
            return
        }
        if(i=schueler.length)
            alert("Schüler nicht gefunden")
    }
    return
}
function drawtests(vorname,nachname,klasse){
   
    let divEl=document.getElementById("main")
    let htmlTxt= '<div class="container"><div class ="col"><table class="striped"> <thead> <tr> <th>Fach</th> <th>Typ</th> <th>Beschreibung</th> <th>Datum</th> <th>Note</th> <th>Punkte</th> <th>Bemerkung</th> </tr> </thead> <tbody>'
    for(i =0;i<tests.length;i++){
        
        htmlTxt+="<tr><td>"+tests[i].Fach+"</td><td>"+tests[i].Typ+"</td> <td>"+tests[i].Info+"</td> <td>"+tests[i].Datum+"</td><td>"+tests[i].Note+"</td><td>"+tests[i].Punkte+"</td><td>"+tests[i].Bemerkung+"</td></tr>"
    }
   
    htmlTxt+= " </tbody> </table></div></div>"
    divEl.innerHTML=htmlTxt
}

function getclass() {
    let httpReq = new XMLHttpRequest();
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
    let n=klassen[name-1].klasse
    console.log(n)

    let divEl = document.getElementById("klasse")
    let htmlTxt =n
    divEl.innerHTML=htmlTxt
    kid=name
    getschueler(name)
    
}
