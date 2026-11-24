let groups=[
{name:"Python Practice",subject:"Python",exam:"Midterm",place:"Library 2nd Floor",members:4,max:8},
{name:"Calculus Revision",subject:"Maths",exam:"Final",place:"Campus Lawn",members:6,max:10},
{name:"Design Thinking Team",subject:"Design Thinking",exam:"Midterm",place:"Library 2nd Floor",members:3,max:7},
{name:"DSA Preparation",subject:"DSA",exam:"Final",place:"Computer Lab",members:5,max:8},
{name:"DBMS Study Circle",subject:"DBMS",exam:"Midterm",place:"Campus Lawn",members:2,max:6}
];
let goals=["Cover Unit 3 by Thursday","Practise Python questions"];
let completed=0;
function updateStats(){
document.getElementById("groupCount").textContent=groups.length;
let total=0;
for(let i=0;i<groups.length;i++){
total=total+groups[i].members;
}
document.getElementById("memberCount").textContent=total;
document.getElementById("goalCount").textContent=completed;
}
function showGroups(){
let list=document.getElementById("groupList");
list.innerHTML="";
let word=document.getElementById("search").value.toLowerCase();
let sub=document.getElementById("subject").value;
let exam=document.getElementById("exam").value;
for(let i=0;i<groups.length;i++){
let g=groups[i];
if((g.name.toLowerCase().includes(word)||g.subject.toLowerCase().includes(word))&&(!sub||g.subject===sub)&&(!exam||g.exam===exam)){
let card=document.createElement("div");
card.className="group-card";
card.innerHTML="<span class='badge'>"+g.exam+"</span><h3>"+g.name+"</h3><p>"+g.subject+"</p><p>"+g.place+"</p><div class='card-bottom'><small>"+g.members+"/"+g.max+" members</small><button class='join-btn' onclick='joinGroup("+i+")' "+(g.members>=g.max?"disabled":"")+">"+(g.members>=g.max?"Full":"Join Group")+"</button></div>";
list.appendChild(card);
}
}
updateStats();
}
function joinGroup(index){
if(groups[index].members<groups[index].max){
groups[index].members++;
showGroups();
}
}
document.getElementById("search").addEventListener("input",showGroups);
document.getElementById("subject").addEventListener("change",showGroups);
document.getElementById("exam").addEventListener("change",showGroups);
document.getElementById("createForm").addEventListener("submit",function(event){
event.preventDefault();
let name=document.getElementById("groupName").value;
let subject=document.getElementById("newSubject").value;
let exam=document.getElementById("newExam").value;
let place=document.getElementById("location").value;
let max=Number(document.getElementById("maxMembers").value);
groups.push({name:name,subject:subject,exam:exam,place:place,members:1,max:max});
document.getElementById("createForm").reset();
showGroups();
});
function showGoals(){
let list=document.getElementById("goalList");
list.innerHTML="";
for(let i=0;i<goals.length;i++){
let item=document.createElement("li");
item.innerHTML="<input type='checkbox' onchange='completeGoal(this)'>"+goals[i];
list.appendChild(item);
}
}
function completeGoal(box){
if(box.checked){
completed++;
box.parentElement.className="done";
}else{
completed--;
box.parentElement.className="";
}
updateStats();
}
document.getElementById("goalForm").addEventListener("submit",function(event){
event.preventDefault();
let goal=document.getElementById("goalInput").value;
if(goal!==""){
goals.push(goal);
document.getElementById("goalInput").value="";
showGoals();
}
});
showGroups();
showGoals();