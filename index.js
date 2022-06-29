const main = document.querySelector('main').remove();
//main.remove();

const newHeader = document.createElement("h1");
document.body.append(newHeader);

//newHeader.setAttribute("id", "victory");
  newHeader.id = "victory";
  newHeader.innerHTML = "Yari is the champion";
  //document.querySelector(victory);
  //victory.innerHTML = "YOUR-NAME is the champion"

//   const textNode = document.createTextNode("YOUR-NAME is the champion");
//   newHeader.appendChild(textNode);


//   const text = document.createTextNode("<h1>YOUR-NAME is the champion!</h1>");
//   newHeader.appendChild(text);
//   document.getElementById('h1').id = 'victory'