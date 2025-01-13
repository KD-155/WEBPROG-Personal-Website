/*!
* Start Bootstrap - Business Frontpage v5.0.9 (https://startbootstrap.com/template/business-frontpage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-frontpage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

const galleryApp = Vue.createApp({
    data() {
        return {
            showGallery: true,
            images: [
                { src: "Image 1.jpg", alt: " Rizal Outing " },
                { src: "Image 2.jpg", alt: " BingBong the Doggo " },
                { src: "Image 3.jpg", alt: " Lucky Cat " },
                { src: "Image 4.jpg", alt: " 💜 " },
            ],
        };
    },
    methods: {
        toggleGallery() {
            this.showGallery = !this.showGallery;
        },
    },
});
galleryApp.mount('#galleryApp');
