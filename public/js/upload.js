// $(document).ready(function(){
// 	// $("#upload-btn").click(upload);
// });

// function upload(){
// 	var today = new Date();
// 	var day = today.getDate();
// 	var month = today.getMonth() + 1;
// 	var year = today.getFullYear();
// 	var cloudinary = require("cloudinary");

// 	var input = $("#file-input").val();

// 	cloudinary.uploader.upload(input, function(result) { 
//   		console.log(result) 
// 	});

// 	console.log("Clicked");
// 	console.log($("#file-input").val());

// 	toDataUrl($("#file-input").val(), function(base64Img) {
// 		console.log(base64Img);
// 	})

// 	$("#just-uploaded").attr("src", $("#file-input").val());
// }

// var uploadfiles = document.querySelector("#file-input");
// uploadfiles.addEventListener("change", function () {
//     var files = this.files;
//     for(var i=0; i<files.length; i++){
//         previewImage(this.files[i]);
//     }

// }, false);

// function previewImage(file) {
//     var galleryId = "gallery";

//     var gallery = document.getElementById(galleryId);
//     var imageType = /image.*/;

//     if (!file.type.match(imageType)) {
//         throw "File Type must be an image";
//     }

//     var thumb = document.createElement("div");
//     thumb.classList.add("thumbnail"); // Add the class thumbnail to the created div

//     var img = document.createElement("img");
//     img.file = file;
//     thumb.appendChild(img);
//     gallery.appendChild(thumb);

//     // Using FileReader to display the image content
//     var reader = new FileReader();
//     reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
//     reader.readAsDataURL(file);
// }

$(document).ready(function(){
    initPage();
})

function initPage() {
    $("#upload-btn").click(function(e) {
        console.log("upload button clicked.");
        // Upload picture somehow
        $.post("/upload/new");
    })
}

