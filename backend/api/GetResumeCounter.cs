using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Logging;
using Microsoft.Azure.Functions.Worker.Http;
using Newtonsoft.Json;
using Microsoft.Azure.Cosmos;
using System.Text;

namespace Company.Function
{
    public static class GetResumeCounter
    {
        // Ensure the function name has the correct hyphen, as you previously mentioned.
        [Function("GetResumeCounter-Lan")]
        public static HttpResponseData Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequestData req,
            [CosmosDB(
                databaseName: "cloudresumechallengecosmos", 
                containerName: "Counter", 
                ConnectionStringSetting = "cloudresumechallengecosmosConnectionString", 
                Id = "1", 
                PartitionKey = "1")] Counter counter,
            [CosmosDB(
                databaseName: "cloudresumechallengecosmos", 
                containerName: "Counter", 
                ConnectionStringSetting = "cloudresumechallengecosmosConnectionString", 
                Id = "1", 
                PartitionKey = "1")] out Counter updatedCounter,
            FunctionContext executionContext)
        {
            var log = executionContext.GetLogger("GetResumeCounter-Lan");
            log.LogInformation("C# HTTP trigger function processed a request.");

            // Assign current counter to updatedCounter and increment it
            updatedCounter = counter;
            updatedCounter.Count += 1;

            // Serialize the updated counter to JSON
            var jsonToReturn = JsonConvert.SerializeObject(updatedCounter);

            // Create the response and set content
            var response = req.CreateResponse(System.Net.HttpStatusCode.OK);
            response.Headers.Add("Content-Type", "application/json");
            response.WriteString(jsonToReturn);

            // Return the response
            return response;
        }
    }
}
