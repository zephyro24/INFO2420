var imgArray = [
	'image1Lg.png',
	'image2Lg.png',
	'image3Lg.png',
	'image4Lg.png'
];

var titleArray = [
	'Couple Biking', 
	'Couple Scuba Diving', 
	'Couple Snow Boarding', 
	'Couple Flyfishing'
];

var imgPath = "Images/FullSize/";

function swapImage(imgID) {
	var theImage = document.getElementById('theImage');
	var textDiv  = document.getElementById('bottomText');

	theImage.src = imgPath + imgArray[imgID];
	textDiv.innerHTML = titleArray[imgID];
}

function preloadImages() {
	for (var i = 0; i < imgArray.length; i++) {
		var tmpImg = new Image();
		tmpImg.src = imgPath + imgArray[i];
	}
}