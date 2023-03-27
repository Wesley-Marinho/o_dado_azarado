import { Query, Resolver } from "type-graphql";
import Grab from "./grab";
import grabSchema from "../../model/grabSchema";

@Resolver(Grab)
export class GrabResolver {
  @Query(() => [Grab])
  async grabs() {
    const grab = await grabSchema.find();
    return grab
  }
}
