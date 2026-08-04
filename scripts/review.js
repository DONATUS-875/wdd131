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
// Initialize review count display
if (reviewCount) {
    // If no counter exist yet set it to 0
    if (!localStorage.getItem("reviewCount")) {
        localStorage.setItem("reviewCount", 0);
    }
    // Always show the current count
    reviewCount.textContent = localStorage.getItem("reviewCount");
    
    // If this page was reached via form submission, increment
    if (window.location.search) {
        let count = Number(localStorage.getItem("reviewCount"));
        count += 1;
        localStorage.setItem("reviewCount", count);
        reviewCount.textContent = count;
    }

}