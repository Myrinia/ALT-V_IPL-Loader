using AltV.Net.Async;
using AltV.Net.Elements.Entities;

namespace IPLLoader
{
    public class IPLLoader : AsyncResource
    {
        public override void OnStart()
        {
            AltAsync.OnPlayerConnect += OnPlayerConnect;
        }

        public override void OnStop()
        {
            
        }



        // Put this where you need it to be, e.g if you load this data from Database
        private async Task OnPlayerConnect(IPlayer player, string reason)
        {
            // Client listens for 
            // => addIPLFromServer = async(iplname: string, description: string, posX: number, posY: number, posZ: number, hasInteriour: boolean) => {

            // We will send this two IPL's to be loaded on demand
            // Keep in mind, isLoaded gets sets clientside, as if gets loaded if player is close to the ipl.
            // Therefore its always false on initialisation

            // { iplname: 'smboat', desc: 'SM Boat', pos: new alt.Vector3(-2027.946, -1036.695, 6.707587), isLoaded: false },
            player.Emit("IPLLoader::Add", "smboat", "SM Boat", -2027.946, -1036.695, 6.707587, false);

            // { iplname: '', desc: 'Bunker Interior', pos: new alt.Vector3(899.5518, -3246.038, -98.04907), isLoaded: false, hasInteriour: true },
            player.Emit("IPLLoader::Add", "", "Bunker Interior", 899.5518, -3246.038, -98.04907, false);

        }

    }
}
