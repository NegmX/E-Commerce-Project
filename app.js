const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

menuItems.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
        wrapper.style.transform = `translateX(${-100 * index}vw)`
    })
})

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var navBottom = document.querySelector(".navBottom");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navBottom.classList.add("fixed");
  } else {
    navBottom.classList.remove("fixed");
  }
}

const products = [
    {
        id: 1,
        name: "Acer Aspire 3",
        price: 28040,
        image: "/Image/Acer_Aspire_3.png",
    },
    {
        id: 2,
        name: "Apple MacBook Air",
        price: 56999,
        image: "/Image/Apple_MacBook_Air.png",
    },
    {
        id: 3,
        name: "Dell G15-5515",
        price: 49999,
        image: "/Image/Dell_G15-5515.png",
    },
    {
        id: 4,
        name: "Lenovo IdeaPad 3",
        price: 24300,
        image: "/Image/Lenovo_IdeaPad_3.png",
    },
    {
        id: 5,
        name: "Asus X543MA-GQ001W",
        price: 12499,
        image: "/Image/Asus_X543MA-GQ001W.png",
    },
    {
        id: 6,
        name: "HP Victus 15-fa0031dx",
        price: 43111,
        image: "/Image/HP_Victus_15-fa0031dx.png",
    },
];

const searchInput = document.querySelector('.searchInput');
const searchResults = document.querySelector('.searchResults');

searchInput.addEventListener('input', function() {
    const searchTerm = this.value.trim().toLowerCase();
    updateSearchResults(searchTerm);
});

document.body.addEventListener('click', function(event) {
    const isClickInsideSearch = searchInput.contains(event.target);
    const isClickInsideResults = searchResults.contains(event.target);

    if (!isClickInsideSearch && !isClickInsideResults) {
        searchResults.style.display = 'none';
    }
});

function updateSearchResults(searchTerm) {
    searchResults.innerHTML = '';

    const matchingProducts = products.filter(product => {
        return product.name.toLowerCase().includes(searchTerm);
    });

    if (matchingProducts.length > 0) {
        matchingProducts.forEach(product => {
            const li = document.createElement('li');
            const img = document.createElement('img');
            img.src = product.image;
            img.alt = product.name;
            img.style.width = '50px'; // Adjust the width as needed
            li.appendChild(img);

            const span = document.createElement('span');
            span.textContent = `${product.name} - ${product.price} EGP`;
            li.appendChild(span);

            searchResults.appendChild(li);
        });
        searchResults.style.display = 'block';
    } else {
        const li = document.createElement('li');
        li.textContent = 'No matching products found';
        searchResults.appendChild(li);
        searchResults.style.display = 'block';
    }
}

