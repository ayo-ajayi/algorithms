var name = "Ajayi ayomide";
var ans = name.toUpperCase().split(" ");
var reply = [];
for (let element of ans) {
  reply.push(element[0].split(""));
}
let answer = `${reply[0]}`;

for (let name of reply) {
  if(name == reply[0]){}
  else{answer = answer.concat(".", name);} 
}

console.log(answer);

//initials from a name
