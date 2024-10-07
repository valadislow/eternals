const eternals = [
    {
      name: "Ikaris",
      attributes: ["Super strength", "fly", "Heat vision, Gay power"],
      role: "Leader and tactical mind",
    },
    {
      name: "Sersi",
      attributes: ["Matter transmutation, Immortality, fly"],
      role: "Humanitarian, loves humanity",
    },
    {
      name: "Thena",
      attributes: ["Conjures weapons from cosmic energy", "Skilled in combat, fly"],
      role: "Warrior",
    },
    {
      name: "Ajak",
      attributes: ["Healing", "Communicates with Celestials, Immortality"],
      role: "Spiritual leader",
    },
    {
      name: "Kingo",
      attributes: ["Energy projection from hands, energy power, fly"],
      role: "Bollywood star",
    }
  ];

  const header = document.createElement("header");
  const heading = document.createElement("h2");
  heading.innerText = "THE ETERNALS";
  header.append(heading);                         
  document.body.append(header); 
const navBar = document.createElement("nav");

navBar.classList.add("NavBar");
  const eternalsList = document.createElement("ul")
  eternals.forEach(eternal => {
    const listItem = document.createElement("li");
    listItem.innerText = eternal.name;
    eternalsList.append(listItem);
  });
  navBar.append(eternalsList);
  document.body.append(navBar);

  // const text = document.createElement("text")
  // text.innerText = "What attribute are u looking for? "
  // navBar.append(text)

  // let textBox = document.createElement("input");
  // Set the type to 'text'
  // navBar.append(textBox)


  function showInfo(){
    let selectedAttribute = document.querySelector("#selectedAttribute").value;
    console.log(selectedAttribute)
    const selectedAttributes = [];
    
    eternals.forEach(eternal => {
      eternals.find(selectedAttributes)
    });


    eternalsArea = document.querySelector(".selectedAttribute")
  }
  
  const thenapic = document.createElement("img");
  thenapic.src = "images/ikaris.jpeg";
  document.body.append(thenapic)

