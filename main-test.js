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
    let lastCount = localStorage.getItem("visitCount") || "Loading...";
    document.getElementById("counter").innerText = lastCount;
    
    getVisitCount();
});

const functionUrl = "https://count-cloudresume-plus-one.azurewebsites.net/api/VisitorCounter";

const getVisitCount = () => {
    fetch(functionUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("API Response:", data);
            const count = data.count;
            
            document.getElementById("counter").innerText = count;
            localStorage.setItem("visitCount", count);
        })
        .catch((error) => {
            console.error("Error occurred:", error);
            document.getElementById("counter").innerText = "Error loading count";
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

