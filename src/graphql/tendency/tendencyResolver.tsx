import { Query, Resolver } from "type-graphql";
import Tendency from "./tendency";
import tendencySchema from "../../model/tendencySchema";

@Resolver(Tendency)
export class TendencyResolver {
  @Query(() => [Tendency])
  async tendencys() {
    const tendency = await tendencySchema.find();
    return tendency
  }
}
