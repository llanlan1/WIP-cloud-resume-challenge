using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Logging;
using Microsoft.Azure.WebJobs;
using Newtonsoft.Json;
using System.Net.Http;
using Microsoft.Azure.Cosmos;
using System.Text;

namespace Company.Function
{
    public static class GetResumeCounter  // Changed the class name to remove the hyphen
    {
        [Function("GetResumeCounter-Lan")]  // The function name can remain the same with the hyphen
        public static HttpResponseMessage Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
            [CosmosDB(databaseName:"cloudresumechallengecosmos", collectionName: "Counter", ConnectionStringSetting = "cloudresumechallengecosmosConnectionString", Id = "1", PartitionKey = "1")] Counter counter,
            [CosmosDB(databaseName:"cloudresumechallengecosmos", collectionName: "Counter", ConnectionStringSetting = "cloudresumechallengecosmosConnectionString", Id = "1", PartitionKey = "1")] out Counter updatedCounter,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            // Assign current counter to updatedCounter and increment it
            updatedCounter = counter;
            updatedCounter.Count += 1;

            // Serialize the updated counter to JSON
            var jsonToReturn = JsonConvert.SerializeObject(updatedCounter);

            // Return the response with updated counter in JSON format
            return new HttpResponseMessage(System.Net.HttpStatusCode.OK)
            {
                Content = new StringContent(jsonToReturn, Encoding.UTF8, "application/json")
            };
        }
    }
}
