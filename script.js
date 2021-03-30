function generateId(tab) {
  const removestart = tab.replace("https://drive.google.com/file/d/", "");
  const removeend = removestart.replace("/view?usp=sharing", "");
  var mylink = removeend;

  console.log(mylink);
  return mylink;
}

function convertLink() {
  var textarea = document.getElementById("link").value;
  var tab = textarea.split("\n");
  dlugosc = tab.length;

  let selectorTable = document.querySelector("table");

  for (let i = 0; i < dlugosc; i++) {
    tab[i] = tab[i].replace(/\s+/g, "");

    if (tab[i] == "") {
      tab[i] = tab[i].splice(i, 1);
    }

    let createTr = document.createElement("tr");
    selectorTable.appendChild(createTr);

    for (let j = 0; j <= 2; j++) {
      let createTd = document.createElement("td");

      if (j === 0) {
        createTd.classList.add("id");
        createTd.innerHTML = i;
         } else if (j === 1) {
             createTd.innerHTML = generateId(tab[i]);
             } else if (j === 2) {
                 let createImg = document.createElement("img");
                createImg.setAttribute("src", "https://drive.google.com/uc?export=view&id=" + generateId(tab[i])
        );
        createTd.appendChild(createImg);
      }
      createTr.appendChild(createTd);
    }
  }
}
