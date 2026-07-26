const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Abidjan Ivory Coast",
    location: "Abidjan Ivory Coast",
    dedicated: "2025, May, 25",
    area: 17362,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/abidjan-ivory-coast-temple/abidjan-ivory-coast-temple-58993-main.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
  },
  {
    templeName: "Bern Switzerland",
    location: "Zollikofen Switzerland",
    dedicated: "1955, September, 11",
    area: 35546,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple/bern-switzerland-temple-54641-main.jpg"
  },
  {
    templeName: "Bountiful Utah",
    location: "Bountiful Utah United States",
    dedicated: "1995, January, 8",
    area: 104000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/bountiful-utah-temple/bountiful-utah-temple-40955-main.jpg"
  },
  {
    templeName: "Brigham City Utah",
    location: "Brigham City Utah United States",
    dedicated: "2012 September 23",
    area: 36000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/brigham-city-utah-temple/brigham-city-utah-temple-39612-main.jpg"
  }
];

function displayTemples(temples) {
    const container = document.querySelector(".temples");

    container.innerHTML = "";
    temples.forEach((temple) => {
        const card = document.createElement("section");
        card.innerHTML = `
        <h3>${temple.templeName} </h3>
        <p><strong>Location:</strong> ${temple.location}</P>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</P>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</P>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="400" height="250">`;
        container.appendChild(card);
    });
}

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = 
`Last Modified: ${document.lastModified}`;

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");
menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
})

displayTemples(temples);

function oldTemples() {
    return temples.filter(temple => {
        return new Date(temple.dedicated).getFullYear() < 1900;
    });

}

function newTemples() {
    return temples.filter(temple => {
        return new Date(temple.dedicated).getFullYear() > 2000;
    });

}

function largeTemples() {
    return temples.filter(temple => {
        return Number (temple.area) > 90000;
    });

}

function smallTemples() {
    return temples.filter(temple => {
        return Number (temple.area) < 10000;
    });

}

function setHeading(title) {
    document.querySelector("main h2").textContent = title;
}

document.querySelector("#home").addEventListener("click", (event) => {
    event.preventDefault();
    setHeading("Home");
    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", (event) => {
    event.preventDefault();
    setHeading("Old Temples");
    displayTemples(oldTemples());
});

document.querySelector("#new").addEventListener("click", (event) => {
    event.preventDefault();
    setHeading("New Temples");
    displayTemples(newTemples());
});

document.querySelector("#large").addEventListener("click", (event) => {
    event.preventDefault();
    setHeading("Large Temples");
    displayTemples(largeTemples());
});

document.querySelector("#small").addEventListener("click", (event) => {
    event.preventDefault();
    setHeading("Small Temples");
    displayTemples(smallTemples());
});
