var images = ["mother-s-love-mom-son-vector-illustration-flat-design-71453507.jpg", "happy-father-s-day_24908-59789.jpg", "file:///C:/Users/reliance/OneDrive/Desktop/JavaScript%20Arrays/Family%20Book/124992667-happy-little-boy-with-school-bag-vector-illustration-design%20(1).webp", "MsF.jpg"];
var names = ["Mom", "Dad", "Me", "Us"];
var i = 0;

function update() {

    var array_length = images.length - 1;
    var updated_image = images[i];
    var updated_text = names[i];

    document.getElementById("family_book_image").src = updated_image;
    document.getElementById("name").innerHTML = updated_text;

    i++;


    if (i > array_length) {
        i = 0;

    }
}
