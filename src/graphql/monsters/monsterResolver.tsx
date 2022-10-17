import { Query, Resolver } from "type-graphql";
import Monster from "./monster";
import itemsSchema from "../../model/itemSchema";

@Resolver(Monster)
export class WeaponResolver {
  @Query(() => [Monster])
  async weapons() {
    const monster = await itemsSchema.find();
    return monster;
  }
}
