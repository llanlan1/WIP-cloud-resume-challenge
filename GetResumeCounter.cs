using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Logging;
using Microsoft.Azure.Cosmos;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace Company.Function
{
    public class GetResumeCounter
    {
        private readonly ILogger<GetResumeCounter> _logger;
        private readonly CosmosClient _cosmosClient;

        public GetResumeCounter(ILogger<GetResumeCounter> logger, CosmosClient cosmosClient)
        {
            _logger = logger;
            _cosmosClient = cosmosClient;
        }

        [Function("GetResumeCounter")]
        public async Task<HttpResponseMessage> Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post")] HttpRequest req)
        {
            _logger.LogInformation("Processing request.");

            var database = _cosmosClient.GetDatabase("cloudresumechallengecosmos");
            var container = database.GetContainer("Counter");

            var response = await container.ReadItemAsync<Counter>("1", new PartitionKey("1"));
            var counter = response.Resource;

            counter.Count += 1;
            await container.ReplaceItemAsync(counter, "1");

            var jsonToReturn = JsonSerializer.Serialize(counter);

            return new HttpResponseMessage(System.Net.HttpStatusCode.OK)
            {
                Content = new StringContent(jsonToReturn, Encoding.UTF8, "application/json")
            };
        }
    }

    public class Counter
    {
        public string Id { get; set; }
        public string PartitionKey { get; set; }
        public int Count { get; set; }
    }
}
