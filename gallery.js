function upDate(previewPic) {
   // Change the background image of the div with id "image" to the src of the preview image
   document.getElementById('image').style.backgroundImage = "url(" + previewPic.src + ")";
   // Change the text of the div with id "image" to the alt text of the preview image
   document.getElementById('image').innerHTML = previewPic.alt;
}

function unDo() {
   // Reset the background image of the div with id "image"
   document.getElementById('image').style.backgroundImage = "url('')";
   // Reset the text of the div with id "image" to the default message
   document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}
