// imagebank.js - for managing background thumbnails on start page - updated url not working yet

document.addEventListener('DOMContentLoaded', function () {
    const imageBank = document.getElementById('image-bank');
    const githubRepoUrl = 'https://raw.githubusercontent.com/jwelkener/instabible4/main/instabible/static/images/';

    const imagePaths = [
        'alexander-grey-jYbKxinWQGk-unsplash.jpg',
        'artur-luczka-loAfOVk1eNc-unsplash.jpg',
        'BlankPictureFrame.jpg',
        'blue-gradient-square.png',
        'daniel-leone-g30P1zcOzXo-unsplash.jpg',
        'darkblue-square.png',
        'dave-hoefler-lsoogGC_5dg-unsplash.jpg',
        'david-marcu-78A265wPiO4-unsplash.jpg',
        'davies-designs-studio-_UCVrH-ZIIg-unsplash.jpg',
        'eberhard-grossgasteiger-S-2Ukb_VqpA-unsplash.jpg',
        'eberhard-grossgasteiger-y2azHvupCVo-unsplash.jpg',
        'goutham-krishna-h5wvMCdOV3w-unsplash.jpg',
        'green-square.png',
        'guillaume-briard-lSXpV8bDeMA-unsplash.jpg',
        'j-lee-5WFfI63aEBo-unsplash.jpg',
        'janke-laskowski-jz-ayLjk2nk-unsplash.jpg',
        'jonatan-pie-EvKBHBGgaUo-unsplash.jpg',
        'lightblue-square.png',
        'lightpurple-square.png',
        'mads-schmidt-rasmussen-xfngap_DToE-unsplash.jpg',
        'matthew-mcbrayer-qD9xzm7yK9U-unsplash.jpg',
        'micah-boswell-OPnBJ5L2oxs-unsplash.jpg',
        'nareeta-martin-pEWtWnDgGLs-unsplash.jpg',
        'orange-square.png',
        'pink-square.png',
        'purple-pink-square.png',
        'purple-square.png',
        'qingbao-meng-01_igFr7hd4-unsplash.jpg',
        'red-orange-square.png',
        'red-square.png',
        'resul-mentes-DbwYNr8RPbg-unsplash.jpg',
        'rohit-ranwa-twEy5TouJLg-unsplash.jpg',
        'sam-dan-truong-ju2NgSoR6pA-unsplash.jpg',
        'shifaaz-shamoon-9K9ipjhDdks-unsplash.jpg',
        'steffi-Cj0tPzC5Uic-unsplash.jpg',
        'teemu-paananen-OOE4xAnBhKo-unsplash.jpg',
        'white-square-black-border.png',
        'yellow-square.png'
      ];
      

    // Shuffle the array to get random images
    const shuffledImages = shuffleArray(imagePaths);

    // Display all available images
    const imagesToDisplay = shuffledImages.slice(0, 12);

    // Calculate the number of rows needed
    const numRows = Math.ceil(imagesToDisplay.length / 6);

    // Iterate through the array of image paths
    for (let i = 0; i < numRows; i++) {
        // Create a row container
        let currentRow = document.createElement('div');
        currentRow.className = 'image-row';

        // Iterate through the images for this row
        for (let j = 0; j < 6; j++) {
            const imageIndex = i * 6 + j;

            if (imageIndex < imagesToDisplay.length) {
                const imageUrl = `${githubRepoUrl}${imagesToDisplay[imageIndex]}`;

                // Create an image element
                const imageElement = document.createElement('img');
                imageElement.src = imageUrl;
                imageElement.alt = `Image ${imageIndex + 1}`;

                // Set the width and height of the image
                imageElement.style.width = '140px';
                imageElement.style.height = '140px';

                // Add click event listener to display the clicked image in the imageContainer
                imageElement.addEventListener('click', function () {
                    displayClickedImage(imageUrl);
                });

                // Append the image to the current row
                currentRow.appendChild(imageElement);
            }
        }

        // Append the current row to the imageBank
        imageBank.appendChild(currentRow);
    }

    function displayClickedImage(imageURL) {
        // Create an image element for the clicked image
        const clickedImageElement = document.createElement('img');
        clickedImageElement.src = imageURL;
        clickedImageElement.alt = 'Clicked Image';

        // Set the width of the clicked image to fit the container
        clickedImageElement.style.width = '100%';

        // Clear previous content and append the clicked image
        // imageContainer.innerHTML = ''; 
        // imageContainer.appendChild(clickedImageElement);

        // Set the clicked image URL as the value of the form field
        const imageInput = document.getElementById('imageInput');
        if (imageInput) {
            imageInput.value = imageURL;
        }
    }

});


// Function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
