function encodeImageFileAsURL() {
	var filesSelected = document.getElementById("inputFileToLoad").files;
	if (filesSelected.length > 0) {
		var fileToLoad = filesSelected[0];
		var fileReader = new FileReader();

		fileReader.onload = function(fileLoadedEvent) {
			var srcData = fileLoadedEvent.target.result; // <--- data: base64

			// console.log(String(srcData));

			document.getElementById("imgtest").value = String(srcData);
			// console.log(document.getElementById("imgtest").value);
			// alert("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
			// console.log("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
		}
	fileReader.readAsDataURL(fileToLoad);
	}
}