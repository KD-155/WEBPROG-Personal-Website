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
                { src: "Image 1.jpg", alt: " 1" },
                { src: "Image 2.jpg", alt: " 2" },
                { src: "Image 3.jpg", alt: " 3" },
                { src: "Image 4.jpg", alt: " 4" },
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
