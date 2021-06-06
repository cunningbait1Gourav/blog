class Card{
constructor(
name,
aka,
pic,
){
this.name=name;
this.aka=aka;
this.pic=pic;
}
}


const gourav= new Card(
"GOURAV",
"Front end Barbarian",
"gourav.jpg",
)
const shweta= new Card(
	"SHWETA","ANIMATOR","shweta.jpeg")
const vikash= new Card("VIKASH","DJANGO KING","vikash.jpeg",)

const content=`
<ul>
<li><img src="${gourav.pic}" width=100%; height=220px; style="border-radius:80%";></li>
<li><h3 style="color:black">${gourav.aka}</h3></li>
<h3 style="color:black; text-align:center;">${gourav.name}</h3>
</ul>`;
const sweta=`
<ul>
<li><img src="${shweta.pic}" width=100%; height=220px; style="border-radius:80%";></li>
<li><h3 style="color:black">${shweta.aka}</h3></li>
<h3 style="color:black; text-align:center;">${shweta.name}</h3>
</ul>`;
const vikas=`
<ul>
<li><img src="${vikash.pic}" width=100%; height=220px; style="border-radius:80%";></li>
<li><h3 style="color:black">${vikash.aka}</h3></li>
<h3 style="color:black; text-align:center;">${vikash.name}</h3>
</ul>`;


document.getElementById("shweta").innerHTML= sweta;

document.getElementById("vikash").innerHTML= vikas;
document.getElementById("gourav").innerHTML= content;