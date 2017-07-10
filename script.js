var fun_facts = ["I have six cats", "I play piano", "I am not a morning person",
"I make the best cookies", "I am from Metro Detroit", "I am 5 ft 4 in tall",
"I am 21 years old"];

// Returns a random fact
function random_fact(){
  return fun_facts[rand_int(0,fun_facts.length)];
}
// Returns a random integer between min (inclusive) and max (exclusive)
function rand_int(min, max){
  return Math.floor(Math.random()*(max-min)) + min;
}

function change_text(){
  document.getElementById("fact").innerHTML = random_fact();
}
