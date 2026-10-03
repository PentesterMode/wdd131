const currentYearElem = document.getElementById("currentyear");
if (currentYearElem) {
    currentYearElem.textContent = new Date().getFullYear();
}

const lastModifiedElem = document.getElementById("lastModified");
if(lastModifiedElem) {
    lastModifiedElem.textContent = document.lastModified;
}



const hamburgerBtn = document.getElementById("hamburger-btn");
const navigationMenu = document.getElementById("navigation-menu");

hamburgerBtn.addEventListener("click",() => {
    console.log("button clicked")
    navigationMenu.classList.toggle("open");
    hamburgerBtn.textContent = navigationMenu.classList.contains("open")?"\u2715" : "\u2630";

});

const temples = [
   {

    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
   },
   {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
     templeName: "Abidjan Ivory Coast ",
    location: "Abidjan, Cote d'Ivoire",
    dedicated: "2025, May, 25",
    area: 17362,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/abidjan-ivory-coast-temple/abidjan-ivory-coast-temple-59714.jpg"
  },
  {
     templeName: "Barcelona Spain",
    location: "Barcelona, Spain",
    dedicated: "2026, September, 19",
    area:27500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/barcelona-spain-temple/barcelona-spain-temple-43015.jpg"
  },
  {
   templeName: "Cali Colombia",
    location: "Cali, Colombia",
    dedicated: "2025, March,1 ",
    area: 9500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/cali-colombia-temple/cali-colombia-temple-22101.jpg"
  },
];
    const container = document.querySelector("#temple-cards");

    function createTempleCard(filteredTemples){
        container.innerHTML="";
        filteredTemples.forEach(temple=> {
            let card = document.createElement("section");
            card.classList.add("temple-card");

            let name = document.createElement("h3");
            let location = document.createElement("p");
            let dedication = document.createElement("p");
            let area = document.createElement("p");
            let img = document.createElement("img");
            
            name.textContent = temple.templeName;
            location.innerHTML = `<span class = "label">Location:</span> ${temple.location}`;
            dedication.innerHTML = `<span class = "label">Dedicated:</span> ${temple.dedicated}`;
            area.innerHTML =`<span class = "label">Size:</span> ${temple.area.toLocaleString()} sq ft`

            img.setAttribute("src", temple.imageUrl);
            img.setAttribute("alt", `${temple.templeName} Temple`);
            img.setAttribute("loading", "lazy");
            img.setAttribute("width", "400");
            img.setAttribute("height", "250");

            card.appendChild(name);
            card.appendChild(location);
            card.appendChild(dedication);
            card.appendChild(area);
            card.appendChild(img);

            container.appendChild(card);

        });

        const homeLink = document.querySelector("#home");
        const oldLink = document.querySelector("#old");
        const newLink = document.querySelector("#new");
        const largeLink = document.querySelector("#large");
        const smallLink = document.querySelector("#small");

        homeLink?.addEventListener("click", () => {
            createTempleCard(temples);
        });
        oldLink?.addEventListener("click", () => {
            createTempleCard(
                temples.filter(temple =>{
                    const year = parseInt(temple.dedicated.split(",") [0]);
                    return year < 1900;
                })
            );
        });

        newLink?.addEventListener("click", () => {
            createTempleCard(
                temples.filter(temple => {
                    const year = parseInt(temple.dedicated.split(" , ")[0]);
                    return year > 2000;
                })
            );
        })

        largeLink?.addEventListener("click", () => {
            createTempleCard(temples.filter(temple => temple.area > 90000));

        });

        smallLink?.addEventListener("click" ,() => {
            createTempleCard(temples.filter(temple => temple.area < 10000));
        });
    }

createTempleCard(temples);