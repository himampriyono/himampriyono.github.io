function toggleMenu(){
    const menu = document.querySelector(".menu")
    console.log(menu)
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } 
    else {
        menu.style.display = "flex";
    }
}

// const prod_1 = document.querySelector("#produk_1")
// const prodtr_1 = document.querySelector("#detail_p_toggle_1")
// const prod_img_1 = document.querySelector("#produk_1 .produk_img")
// const prod_img_con_1 = document.querySelector("#produk_1 .produk_img_container")
// const prod_img_slide_1 = document.querySelector("#produk_1 .produk_img_ss")
// const images_1 = ['img/tahubakso_1.jpg', 'img/simbah2.jpg', 'img/simbah3.jpg'];
// let currentImageIndex_1 = 0;

// function displayImage(index) {
//     const imageDiv = document.createElement('div');
//     imageDiv.classList.add('image');
//     imageDiv.innerHTML = `<img src="${images[index]}" alt="Image ${index + 1}">`;
//     prod_img_slide_1.innerHTML = '';
//     prod_img_slide_1.appendChild(imageDiv);
// }

// function nextImage() {
//     currentImageIndex_1 = (currentImageIndex_1 + 1) % images_1.length;
//     displayImage(currentImageIndex_1);
// }

// function prevImage() {
//     currentImageIndex_1 = (currentImageIndex_1 - 1 + images_1.length) % images_1.length;
//     displayImage(currentImageIndex_1);
// }

// displayImage(currentImageIndex_1);

// prodtr_1.addEventListener('change', function() {
//     if(prodtr_1.checked) {
//         prod_1.style.gridTemplateColumns = "2fr"
//         prod_img_1.style.display = "none"
//         prod_img_con_1.style.display = "flex"
//     }
//     else {
//         prod_1.style.gridTemplateColumns = "1fr 2fr"
//         prod_img_1.style.display = "flex"
//         prod_img_con_1.style.display = "none"
//     }
// })

// const prod_2 = document.querySelector("#produk_2")
// const prodtr_2 = document.querySelector("#detail_p_toggle_2")
// const prod_img_2 = document.querySelector("#produk_2 .produk_img")
// const prod_img_con_2 = document.querySelector("#produk_2 .produk_img_container")
// const prod_img_slide_2 = document.querySelector("#produk_2 .produk_img_ss")
// const images_2 = ['img/tahubakso_1.jpg', 'img/simbah2.jpg', 'img/simbah3.jpg'];
// let currentImageIndex_2 = 0;

// function displayImage(index) {
//     const imageDiv = document.createElement('div');
//     imageDiv.classList.add('image');
//     imageDiv.innerHTML = `<img src="${images_2[index]}" alt="Image ${index + 1}">`;
//     prod_img_slide_2.innerHTML = '';
//     prod_img_slide_2.appendChild(imageDiv);
// }

// function nextImage() {
//     currentImageIndex_2 = (currentImageIndex_2 + 1) % images_2.length;
//     displayImage(currentImageIndex_2);
// }

// function prevImage() {
//     currentImageIndex_2 = (currentImageIndex_2 - 1 + images_2.length) % images_2.length;
//     displayImage(currentImageIndex_2);
// }

// displayImage(currentImageIndex_2);

// prodtr_1.addEventListener('change', function() {
//     if(prodtr_2.checked) {
//         prod_2.style.gridTemplateColumns = "2fr"
//         prod_img_2.style.display = "none"
//         prod_img_con_2.style.display = "flex"
//     }
//     else {
//         prod_2.style.gridTemplateColumns = "1fr 2fr"
//         prod_img_2.style.display = "flex"
//         prod_img_con_2.style.display = "none"
//     }
// })

/*aaaaaaa*/
// function displayImage(index, container) {
//     const imageDiv = document.createElement('div');
//     imageDiv.classList.add('image');
//     imageDiv.innerHTML = `<img src="${images[index]}" alt="Image ${index + 1}">`;
//     container.innerHTML = '';
//     container.appendChild(imageDiv);
// }

// function nextImage(index, currentImageIndex, images, container) {
//     currentImageIndex = (currentImageIndex + 1) % images.length;
//     displayImage(currentImageIndex, container);
//     return currentImageIndex;
// }

// function prevImage(index, currentImageIndex, images, container) {
//     currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
//     displayImage(currentImageIndex, container);
//     return currentImageIndex;
// }

// function setupProduct(product, imageContainer, imageSlide, imageIndex) {
//     const toggle = document.querySelector(`#detail_p_toggle_${product}`);
//     const img = document.querySelector(`#${product} .produk_img`);
//     const imgCon = document.querySelector(`#${product} .produk_img_container`);
//     let currentImgIndex = imageIndex;

//     displayImage(currentImgIndex, imageSlide);

//     toggle.addEventListener('change', function() {
//         if (toggle.checked) {
//             document.querySelector(`#${product}`).style.gridTemplateColumns = "2fr";
//             img.style.display = "none";
//             imgCon.style.display = "flex";
//         } else {
//             document.querySelector(`#${product}`).style.gridTemplateColumns = "1fr 2fr";
//             img.style.display = "flex";
//             imgCon.style.display = "none";
//         }
//     });

//     return currentImgIndex;
// }

// // Setup produk pertama
// const images_1 = ['img/tahubakso_1.jpg', 'img/simbah2.jpg', 'img/simbah3.jpg'];
// let currentImageIndex_1 = 0;
// currentImageIndex_1 = setupProduct("produk_1", prod_img_slide_1, prod_img_slide_1, currentImageIndex_1);

// // Setup produk kedua
// const images_2 = ['img/tahubakso_1.jpg', 'img/simbah2.jpg', 'img/simbah3.jpg'];
// let currentImageIndex_2 = 0;
// currentImageIndex_2 = setupProduct("produk_2", prod_img_slide_2, prod_img_slide_2, currentImageIndex_2);
