$(document).ready(function(){
	$("#upload-btn").click(upload);
});

function upload(){
	var today = new Date();
	var day = today.getDate();
	var month = today.getMonth() + 1;
	var year = today.getFullYear();

	console.log("Clicked");
	console.log($("#file-input").val());

	$("#just-uploaded").attr("src", $("#file-input").val());
}