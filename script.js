document.addEventListener("DOMContentLoaded", function() {
    var dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener("click", function() {
            var content = this.parentElement.nextElementSibling;
            if (content.classList.contains("show")) {
                content.classList.remove("show");
            } else {
                content.classList.add("show");
            }
        });
    });
});


    document.addEventListener("DOMContentLoaded", function() {
        var mediaContainer = document.querySelector(".media-container");
        var video = mediaContainer.querySelector("video");

        mediaContainer.addEventListener("mouseover", function() {
            video.play();
        });

        mediaContainer.addEventListener("mouseout", function() {
            video.pause();
            video.currentTime = 0; 
        });
    });