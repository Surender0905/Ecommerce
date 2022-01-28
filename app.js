const wrapper = document.querySelector(".slider-wrapper");

const menuItems = document.querySelectorAll(".menu-item");

const buyButton = document.querySelector(".product-btn");

const closeButton = document.querySelector(".close");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./image/air.png",
      },
      {
        code: "darkblue",
        img: "./image/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./image/jordan.png",
      },
      {
        code: "green",
        img: "./image/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./image/blazer.png",
      },
      {
        code: "green",
        img: "./image/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./image/crater.png",
      },
      {
        code: "lightgray",
        img: "./image/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./image/hippie.png",
      },
      {
        code: "black",
        img: "./image/hippie2.png",
      },
    ],
  },
];
let choosenProduct = products[0];

const currentProduct = document.querySelector(".product-image");
const currentProductTitle = document.querySelector(".product-title");
const currentProductPrice = document.querySelector(".product-price");
const currentProductColor = document.querySelectorAll(".color");
const currentProductSize = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the slide

    wrapper.style.transform = `translateX(${index * -100}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change text of the current product
    currentProductTitle.textContent = choosenProduct.title;

    //change the price of curent product
    currentProductPrice.textContent = "$" + choosenProduct.price;

    ///change curent product image

    currentProduct.src = choosenProduct.colors[0].img;

    //assigin of the color of chosse product
    currentProductColor.forEach((color, index) => {
      color.style.background = choosenProduct.colors[index].code;
    });
  });
});

//change the color product image on click
currentProductColor.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProduct.src = choosenProduct.colors[index].img;
  });
});

//change the size of choose product
currentProductSize.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSize.forEach((size) => {
      size.style.background = "white";
      size.style.color = "black";
    });
    size.style.background = "black";
    size.style.color = "white";
  });
});

buyButton.addEventListener("click", () => {
  document.querySelector(".payment").style.display = "flex";
});

closeButton.addEventListener("click", () => {
  document.querySelector(".payment").style.display = "none";
});
