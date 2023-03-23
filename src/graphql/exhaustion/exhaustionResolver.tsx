import { Query, Resolver } from "type-graphql";
import Exhaustion from "./exhaustion";
import exhaustionSchema from "../../model/exhaustionSchema";

@Resolver(Exhaustion)
export class ExhaustionResolver {
  @Query(() => [Exhaustion])
  async exhaustions() {
    const exhaustion = await exhaustionSchema.find();
    return exhaustion
  }
}
