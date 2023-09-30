let toggleMenu = document.querySelector(".toggle")
let btnBack = document.getElementById("btn-back")
let nav = document.querySelector("nav")

// console.log(toggle,btnBack);

let App = {
  toggleMenu: () => {
    nav.classList.toggle("open")
  },
  listenMenu: () => {
    let menuItems = document
      .getElementsByClassName("menu")[0]
      .querySelectorAll("a")
    console.log("item", menuItems)
    menuItems.forEach((item, i) => {
      console.log(item.getAttribute("href"))
      if (item.getAttribute("href") !== "#Diagrammes") {
        item.addEventListener("click", () => {
          console.log("click")
          App.toggleMenu()
        })
      }
    })
  },
}

if (toggleMenu) {
  toggleMenu.addEventListener("click", () => {
    App.toggleMenu()
  })
  App.listenMenu()
}

if (btnBack) {
  btnBack.addEventListener("click", () => {
    history.back()
  })
}
