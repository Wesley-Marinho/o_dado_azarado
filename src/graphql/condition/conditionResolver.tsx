import { Query, Resolver } from "type-graphql";
import Condition from "./condition";
import conditionSchema from "../../model/conditionSchema";

@Resolver(Condition)
export class ConditionResolver {
  @Query(() => [Condition])
  async conditions() {
    const condition = await conditionSchema.find();
    return condition
  }
}
