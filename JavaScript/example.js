var ms = require('./minestat.js');
ms.init('minecraft.frag.land', 25565, 1000, function(result)
{
  console.log("Minecraft server status of " + result.address + " on port " + result.port + ":");
  if(result.online)
  {
    console.log("Server is online running version " + result.version + " with " + result.current_players + " out of " + result.max_players + " players.");
    console.log("Message of the day: " + result.motd);
    console.log("Latency: " + result.latency + "result");
  }
  else
  {
    console.log("Server is offline!");
  }
});
