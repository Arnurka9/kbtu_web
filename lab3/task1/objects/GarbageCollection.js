//reachability

// user has a reference to the object
let user = {
  name: "John"
};

// If the value of user is overwritten, the reference is lost:

user = null;
// Now John becomes unreachable. There’s no way to access it, no references to it. Garbage collector will junk the data and free the memory.


//Two references 
// user has a reference to the object
let user = {
  name: "John"
};

let admin = user;

user = null;


// …Then the object is still reachable via admin global variable, so it must stay in memory. If we overwrite admin too, then it can be removed.


//Interliked objects

function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman
  }
}

let family = marry({
  name: "John"
}, {
  name: "Ann"
});



delete family.father;
delete family.mother.husband;

//man will be deleted

//Unreachable island
family = null;

//both will be deleted

