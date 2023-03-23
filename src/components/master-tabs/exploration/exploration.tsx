import { ActivityTablle } from "./tabbles/activities-tabble";
import { ClimateTablle } from "./tabbles/climate-tabble";
import { DarknessTablle } from "./tabbles/darkness-tabble";
import { ExhaustionTablle } from "./tabbles/exhaustion-tabble";
import { GroundTablle } from "./tabbles/ground-tabble";
import { HungerTablle } from "./tabbles/hunger-tabble";
import { LightTablle } from "./tabbles/light-tabble";
import { TrackTablle } from "./tabbles/track-tabble";
import { TripTablle } from "./tabbles/trip-tabble";
export function Exploration() {
  return (
    <div className="overflow">
      <h4>Luz e visão</h4>
      <LightTablle />
      <h4>Escuridão</h4>
      <DarknessTablle />
      <h4>Clima</h4>
      <ClimateTablle />
      <h4>Fome</h4>
      <HungerTablle/>
      <h4>Exaustão</h4>
      <ExhaustionTablle/>
      <h4>Rastreamento</h4>
      <TrackTablle/>
      <h4>Ritmo de viagem</h4>
      <TripTablle/>
      <h4>Terreno</h4>
      <GroundTablle/>
      <h4>Atividades de viagem</h4>
      <ActivityTablle/>
    </div>
  );
}
