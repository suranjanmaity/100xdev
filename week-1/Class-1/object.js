const allUsers = [{
    firstName: "maity",
    gender: "male"
},{
    firstName:"s",
    gender:"male"
},{
    firstName:"priya",
    gender:"female"
}
]

for(let i=0;i<allUsers.length;i++){
    if(allUsers[i]["gender"]=="male"){
        console.log(allUsers[i]["firstName"])
    }
}