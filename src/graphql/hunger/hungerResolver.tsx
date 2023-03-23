import { Query, Resolver } from "type-graphql";
import Hunger from "./hunger";
import hungerSchema from "../../model/hungerSchema";

@Resolver(Hunger)
export class HungerResolver {
  @Query(() => [Hunger])
  async hungers() {
    const hunger = await hungerSchema.find();
    return hunger
  }
}
