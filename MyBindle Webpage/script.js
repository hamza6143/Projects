console.log("JS file loaded!");

let reviewBtn = document.querySelector(".reviews button");
let userReviewsContainer = document.querySelector(".user-reviews");
let expanded = false;

reviewBtn.addEventListener("click", function () {
    if (!expanded) {
        userReviewsContainer.style.overflow = 'visible';
        userReviewsContainer.style.maxHeight = 'none';
        userReviewsContainer.style.maskImage = "none";
        userReviewsContainer.style.webkitMaskImage = "none";
        reviewBtn.innerText = "See Less"
    } else {
        const responsiveHeight = window.innerWidth <= 700 ? "65vh" : "125vh";
        console.log("Responsive height:", responsiveHeight);
        userReviewsContainer.style.maxHeight = responsiveHeight;
        userReviewsContainer.style.overflow = "hidden";
        userReviewsContainer.style.maskImage = "linear-gradient(to bottom, rgba(0, 0, 0, 1) 65%, rgba(0, 0, 0, 0.5) 70%, rgba(0, 0, 0, 0) 100%)";
        userReviewsContainer.style.webkitMaskImage = "linear-gradient(to bottom, rgba(0, 0, 0, 1) 65%, rgba(0, 0, 0, 0.5) 70%, rgba(0, 0, 0, 0) 100%)";
        reviewBtn.innerText = "See More"
    }

    expanded = !expanded;
});
