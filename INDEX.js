document.addEventListener('DOMContentLoaded', function () {
    // Get the container elements
    const containerElements = document.querySelectorAll('.grid-images .image-container');

    // Function to fetch and set images for each container
    const fetchAndSetImages = () => {
        // Fetch data from the API for each container
        containerElements.forEach(container => {
            fetch('https://dog.ceo/api/breeds/image/random')
                .then(response => response.json())
                .then(data => {
                    // Extract the image URL from the response
                    const imageUrl = data.message;

                    // Set the background image and size for the current container
                    container.style.backgroundImage = `url(${imageUrl})`;
                })
                .catch(error => console.error('Error fetching data:', error));
        });
    };

    // Load images on page load
    fetchAndSetImages();

    // Add click event listener to the button
    document.getElementById('btn').addEventListener('click', fetchAndSetImages);
});
//function for alert message
function submitInfo(){
    const inputElemet =document.querySelector('.name');
    alert (`Your Submission Was Successful.Have A Nice Day ${inputElemet.value}!`);
}

