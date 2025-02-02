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


async function updateCounter() {
    try {
        const response = await fetch("https://cloudresumetable.azurewebsites.net/api/VisitorCounter?code=-4FzRBehoDhcjZggNOYkOnEqWSiGX2G03oDl_HEBPj04AzFu9Jam3Q%3D%3D");
        const data = await response.json();
        
        // Update the counter display
        document.getElementById("counter").innerText = data.count;
    } catch (error) {
        console.error("Error fetching counter:", error);
    }
}

// Run when the page loads
window.onload = updateCounter;

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

