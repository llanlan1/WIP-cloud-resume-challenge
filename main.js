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



window.addEventListener("DOMContentLoaded", (event) => {
    // Get the last known count from localStorage (default to 0 if not found)
    let lastCount = localStorage.getItem("visitCount") || "Loading...";
    document.getElementById("counter").innerText = lastCount;
  
    // Fetch the latest count from the Azure Function
    getVisitCount();
  });
  
  const functionApi = "count-cloudresume-plus-one.azurewebsites.net/api/VisitorCounter?code=1C4k_5sauSurQv9IdBGmsfHQjh_C3SWYM4YTZdVpimq3AzFubt6ZWg==";
  
  const getVisitCount = () => {
    fetch(functionApi)
      .then((response) => response.text()) // Fetch response as plain text
      .then((data) => {
        console.log("Raw response from API:", data);
        const countMatch = data.match(/\d+/);
        const count = countMatch ? parseInt(countMatch[0], 10) : 0;
        console.log("Extracted count:", count);
  
        // Update the HTML element
        document.getElementById("counter").innerText = count;
  
        // Store the latest count in localStorage
        localStorage.setItem("visitCount", count);
      })
      .catch((error) => {
        console.error("Error occurred:", error);
      });
  };


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

