import { Query, Resolver } from "type-graphql";
import Armor from "./armor";
import armorsSchema from "../../model/armorSchema";

@Resolver(Armor)
export class armorResolver {
  @Query(() => [Armor])
  async weapons() {
    const armor = await armorsSchema.find();
    return armor;
  }
}
