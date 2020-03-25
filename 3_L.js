// Liskov Substitution Principle

class Person {

}

class Member extends Person {
  access() {
    console.log('You have access')
  }
}

class Guest extends Person {
}

class Frontend extends Member {
  canCreateFrontend() {

  }
}

class Backend extends Member {
  canCreateBackend() {

  }
}

class PersonFromDifferentCompany extends Guest {
  access() {
    throw new Error("You have not access")
  }
}

function openSecretDoor(member) {
  member.access() 
}

openSecretDoor(new Frontend())
//openSecretDoor(new PersonFromDifferentCompany())

