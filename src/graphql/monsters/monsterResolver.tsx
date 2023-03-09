import { Query, Resolver } from "type-graphql";
import Monster from "./monster";
import itemsSchema from "../../model/itemSchema";

@Resolver(Monster)
export class MonsterResolver {
  @Query(() => [Monster])
  async weapons() {
    const monster = await itemsSchema.find();
    return monster;
  }
}
