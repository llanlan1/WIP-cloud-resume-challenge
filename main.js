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



const { CosmosClient } = require("@azure/cosmos");

const endpoint = process.env.COSMOS_ENDPOINT;
const key = process.env.COSMOS_KEY;

if (!endpoint || !key) {
  throw new Error("COSMOS_ENDPOINT or COSMOS_KEY is not set correctly in the environment variables.");
}

const client = new CosmosClient({ endpoint, key });
const databaseName = "Counter";
const containerName = "Visitors";

module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  const documentId = "1"; // Define the document ID for visitor count

  try {
    // Try to read the document from Cosmos DB
    let { resource: item } = await client
      .database(databaseName)
      .container(containerName)
      .item(documentId, documentId)
      .read()
      .catch((error) => {
        // If the document doesn't exist (404 error), initialize it
        if (error.code === 404) {
          context.log("Document not found. Initializing the document with count = 0.");
          return { count: 0 };
        }
        // Log the full error message
        context.log(`Error reading document: ${error.message}`);
        throw error; // re-throw if it's another type of error
      });

    const currentCount = item.count || 0;

    // Increment the count by 1
    item.count = currentCount + 1;

    // Upsert (insert or update) the document with the new count
    await client
      .database(databaseName)
      .container(containerName)
      .items.upsert(item);

    context.log(`Visitor count updated from ${currentCount} to ${item.count}`);

    // Send response with updated visitor count
    context.res = {
      status: 200,
      body: `Visitor count updated to: ${item.count}`,
    };
  } catch (error) {
    // Log full error information
    context.log(`Error updating visitor count: ${error.message}`);
    context.log(`Error stack trace: ${error.stack}`);

    context.res = {
      status: 500,
      body: "An error occurred while updating the visitor count.",
    };
  }
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

