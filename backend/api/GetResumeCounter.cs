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
    public static class GetResumeCounter-Lan
    {
        [FunctionName("GetResumeCounter-Lan")]
        
        public static HttpResponseMessage Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
            [CosmosDB(databaseName:"cloudresumechallengecosmos", collectionName: "Counter", ConnectionStringSetting = "cloudresumechallengecosmosConnectionString", Id = "1", PartitionKey = "1")] Counter counter,
            [CosmosDB(databaseName:"cloudresumechallengecosmos", collectionName: "Counter", ConnectionStringSetting = "cloudresumechallengecosmosConnectionString", Id = "1", PartitionKey = "1")] out Counter updatedCounter,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            updatedCounter = counter;
            updatedCounter.Count += 1;

            var jsonToRetun = JsonConvert.SerializeObject(counter);

            return new HttpResponseMessage(System.Net.HttpStatusCode.OK)
            {
                Content = new StringContent(jsonToRetun, Encoding.UTF8, "application/json")
            };

            
        }
    }
}
