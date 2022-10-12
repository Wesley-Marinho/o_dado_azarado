import { Query, Resolver } from "type-graphql";
import Weapon from "./weapon";
import weaponsSchema from "../../model/weaponsSchema";

@Resolver(Weapon)
export class WeaponResolver {
  @Query(() => [Weapon])
  async weapons() {
    const weapon = await weaponsSchema.find();
    return weapon;
  }
}
