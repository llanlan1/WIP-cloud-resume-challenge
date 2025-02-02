        // Prevent right-click context menu and copy/paste for protected sections
        document.querySelectorAll('.no-copy').forEach(element => {
            element.addEventListener('contextmenu', (e) => {
                e.preventDefault(); // Prevent right-click menu
            });

            element.addEventListener('copy', (e) => {
                e.preventDefault(); // Prevent copy action
            });

            element.addEventListener('paste', (e) => {
                e.preventDefault(); // Prevent paste action
            });

            element.addEventListener('cut', (e) => {
                e.preventDefault(); // Prevent cut action
            });
        });


        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            const parallaxBg = document.getElementById('parallax-bg');
            // Change the background position to create a parallax effect
            parallaxBg.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
        });

$('a[href=\\#top]').click(function(){
  $('body').animate(
    {
      scrollTop: 0
    }, 
    90000
  );
});


// Define the Azure Function URL
const functionUrl = 'https://count-cloudresume-plus-one.azurewebsites.net/api/VisitorCounter?'; // Replace with your URL

// Function to update the visitor count
function updateVisitorCount() {
    // Data to send to the function (in case you want to send more data like the user's info)
    const data = {
        id: "2",  // Specify the document ID in Cosmos DB
        visitCount: 1,  // Increment visit count by 1 (you can also retrieve the current count and increment it)
        lastVisited: new Date().toISOString()  // Update the visit date to the current date
    };

    // Send a POST request to the Azure Function
    fetch(functionUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'x-functions-key': '<your-api-key>' // Uncomment if your function requires an API key
        },
        body: JSON.stringify(data)  // Send the data as a JSON string
    })
    .then(response => response.json())
    .then(data => {
        console.log('Visitor count updated successfully:', data);
    })
    .catch(error => {
        console.error('Error updating visitor count:', error);
    });
}

// Call the update function whenever the page is loaded (or you can trigger it based on user actions)
document.addEventListener('DOMContentLoaded', function () {
    updateVisitorCount();  // Update the count when the page is loaded
});


    // Set the creation date (YYYY, MM - 1, DD)
    const creationDate = new Date(2024, 9, 19); // October is month 9 (0-indexed)
    
    // Get the current date
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const differenceInTime = currentDate - creationDate;

    // Convert the difference from milliseconds to days
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

    // Update the HTML to display how many days ago it was created
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('creationDate').innerText = `Created ${differenceInDays} days ago.`;
    });


    // Set the creation date (YYYY, MM - 1, DD)
    const creationDate = new Date(2024, 9, 19); // October is month 9 (0-indexed)
    
    // Get the current date
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const differenceInTime = currentDate - creationDate;

    // Convert the difference from milliseconds to days
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

    // Update the HTML to display how many days ago it was created
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('creationDate').innerText = `Created ${differenceInDays} days ago.`;
    });

