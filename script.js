let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
 
menu.onclick = () => {
    navbar.classList.toggle('active');
}
 
window.onscroll = () => {
    navbar.classList.remove('active');
}

function showImages(category) {
    const images = document.querySelectorAll('.images');
    images.forEach(image => {
        image.style.display = 'none';
    });
    document.getElementById(category).style.display = 'block';
}

function showCategoryImages() {
    const categoryDropdown = document.getElementById('categoryDropdown');
    const categoryDisplay = document.getElementById('categoryDisplay');
    
    categoryDisplay.innerHTML = '';

    // Object containing arrays of images for each category
    const images = {
        livingarea: ['LA1.jpg', 'bgr.jpg', 'LA3.jpg','la0.jpg', 'LA5.jpg'],
        diningarea: ['d1.jpg', 'd2.jpg', 'd3.jpg','d4.jpg', 'd5.jpg'],
        bedroom: ['b1.jpg', 'b2.jpg', 'bd4.jpg','b5.jpg', 'b6.jpg'],
        comfortroom: ['c1.jpg', 'c2.jpg', 'c6.jpg','c4.jpg', 'c5.jpg'],
        livingroom: ['lr1.jpg', 'lr2.jpg', 'lr3.jpg','lr4.jpg', 'lr5.jpg'],
    };

    const selectedCategory = categoryDropdown.value;

    if (images[selectedCategory]) {
        images[selectedCategory].forEach(imagePath => {
            const imgElement = document.createElement('img');
            imgElement.src = imagePath;
            imgElement.alt = `Image for ${selectedCategory}`;
            categoryDisplay.appendChild(imgElement);
        });
    }
}
