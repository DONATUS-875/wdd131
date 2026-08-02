const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const reviewCount = document.querySelector("#review-count");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

if (lastModified) {
    lastModified.textContent = document.lastModified;
}

if (reviewCount && window.location.search) {
    let count = Number(localStorage.getItem("reviewCount")) || 0;
    count += 1;
    localStorage.setItem("reviewCount", count);
    reviewCount.textContent = count;
}