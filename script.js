"use strict";

let index = 0;

const links = document.querySelector(".sidebar-links");
document.querySelector(".hamburger").addEventListener("click", function () {
  const computedStyle = getComputedStyle(links);
  if (computedStyle.right === "-200px") {
    links.style.display = "block";
    setTimeout(() => {
      links.style.right = "0";
    }, 100);
  } else {
    links.style.right = "-200px";
    setTimeout(() => (links.style.display = "none"), 300);
  }
});

document
  .querySelector(".sidebar-links")
  .addEventListener("click", function (e) {
    if (e.target.classList.contains("sidebar-link")) {
      document.body.style.overflow = "auto";
      links.style.display = "none";
    }
  });

function debounce(fun, delay) {
  let timeout = delay;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(fun, delay);
  };
}

const fillMainSection = () => {
  const main = document.querySelector(".main");
  main.innerHTML = "";
  main.insertAdjacentHTML(
    "afterbegin",
    window.innerWidth <= 768
      ? `<div class="main-text-info">
            <img src="assets/images/IMG_2780.JPG" class="main-img" alt="" />
            <p class="main-text-photo">
              Nataliia is an experienced dental hygienist (5 years), recognized for her
              groundbreaking invention, the painless teeth whitening method known as
              “Apollonia.”
            </p>
          </div>
          <img src="assets/images/IMG_2777.jpg" class="main-img-full" alt="" />
          <div class="main-text-info">
            
            <p class="main-text-photo">
              Originally from Ukraine and educated in Canada, she is committed to making every dental procedure a comfortable and 
              relaxing experience for her clients.
            </p>
            <img src="assets/images/IMG_2779.JPG" class="main-img" alt="" />
          </div>`
      : `<p class="main-text">
            Nataliia is an experienced dental hygienist, recognized for her
            groundbreaking invention, the painless teeth whitening method known as
            “Apollonia.”
          </p>
          <div class="main-text-info">
            <p class="main-text-photo">
              Originally from Ukraine and educated in Canada, she is committed to making every dental procedure a comfortable and 
              relaxing experience for her clients.
            </p>
            <img src="assets/images/IMG_2779.JPG" class="main-img" alt="" />
          </div>`
  );
};

fillMainSection();
window.addEventListener("resize", debounce(fillMainSection, 200));

const createReview = function (name, avatarUrl, review) {
  return `

    <div class="review">
      <i class="fa-solid fa-quote-left"></i>
      <p class="review-text">
        "${review}"
      </p>
      <div class="review-info">
        <img src="${avatarUrl}" alt="" class="review-img" />
        <div class="review-author-info">
          <p class="review-author">${name}</p>
          <p class="review-description">
            5 <i style="color: #ffdb00" class="fa fa-star"></i> review,
            <a style="color: white" href="https://www.google.com/maps/place/821+Eglinton+Ave+W,+Toronto,+ON+M5N+1E6,+%D0%9A%D0%B0%D0%BD%D0%B0%D0%B4%D0%B0/@43.7009396,-79.425269,21z/data=!4m6!3m5!1s0x882b330aae3c9813:0x3ec0b80f2cde8279!8m2!3d43.7009369!4d-79.4250718!16s%2Fg%2F11bw3h3mgt?entry=ttu&g_ep=EgoyMDI1MDMzMC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D">
              Google Maps
            </a>
          </p>
        </div>
      </div>
    </div>

`;
};

const reviewsData = [
  {
    name: "Viktoriia Osipovych",
    avatarUrl: "assets/images/customer-1.png",
    review:
      "The whitening procedure was <b>completely painless</b>! I felt comfortable throughout, and the results were even better than I expected. <b>Highly recommend</b> it for anyone looking to brighten their smile without any discomfort.",
  },

  {
    name: "Анна Chebotar",
    avatarUrl: "assets/images/customer-3.png",
    review:
      "I would like to thank Natalia for the pleasant and comfortable teeth whitening, it was my first experience, <b>I was very pleased with the result, everything went painlessly</b> ❤️",
  },

  {
    name: "Lily Voloshyna",
    avatarUrl: "assets/images/customer-2.png",
    review:
      "I had an <b>amazing experience</b> visiting Natalia for teeth whitening! <b>Natalia is an incredibly skilled and attentive professional.</b> The whitening procedure was <b>completely painless</b>, and <b>the results are just fantastic</b> – my teeth look so bright and beautiful! I highly recommend her to anyone looking for a high-quality teeth whitening service! 🔥🔥🔥",
  },
  {
    name: "Bryanna Trece",
    avatarUrl: "assets/images/customer-4.png",
    review:
      "I highly recommend Nataliia as a dentist. <b>She goes above and beyond to ensure her customers feel cared for</b>, and comfortable during their visit. She takes the time to explain the procedure, and gives you follow up tips. I got my teeth whitened by her here, and <b>I was incredibly impressed with the results after just one visit</b>. My teeth were significantly whiter after just one visit, what surprised me the most was that <b>I experienced no pain, or discomfort during the process or afterwards</b>. The procedure was completely painless, and there was no teeth pain after the process. I highly recommend you to have your teeth whitened by Nataliia, she is very kind and professional. Her whitening technique is the best there is out there",
  },
  {
    name: "simona apostol",
    avatarUrl: "assets/images/customer-5.png",
    review:
      "<b>Painless teeth whitening with great results</b>. Thank you, Nataliia! 🦷🤍",
  },
  {
    name: "Hoang Vo",
    avatarUrl: "assets/images/customer-6.png",
    review:
      "I had teeth whitening with Natalia, <b>it was painless and my teeth were 6-8 shades whiter</b>.",
  },
];

function getReviewsCount() {
  return window.innerWidth <= 768 ? 3 : window.innerWidth <= 1024 ? 6 : 9;
}

const reviewsContainer = document.querySelector(".reviews-container");

function renderReviews() {
  const reviewsCount = getReviewsCount();
  reviewsContainer.innerHTML = ""; // очищаємо попередні відгуки
  reviewsData.slice(0, reviewsCount).forEach(({ name, avatarUrl, review }) => {
    reviewsContainer.insertAdjacentHTML(
      "beforeend",
      createReview(name, avatarUrl, review)
    );
  });
}

renderReviews();
window.addEventListener("resize", debounce(renderReviews, 200));
