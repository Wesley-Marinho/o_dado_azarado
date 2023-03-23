import { Query, Resolver } from "type-graphql";
import Ground from "./ground";
import groundSchema from "../../model/groundSchema";

@Resolver(Ground)
export class GroundResolver {
  @Query(() => [Ground])
  async grounds() {
    const ground = await groundSchema.find();
    return ground
  }
}
