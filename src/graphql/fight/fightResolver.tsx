import { Query, Resolver } from "type-graphql";
import Fight from "./fight";
import fightSchema from "../../model/fightSchema";

@Resolver(Fight)
export class FightResolver {
  @Query(() => [Fight])
  async fights() {
    const fight = await fightSchema.find();
    return fight
  }
}
