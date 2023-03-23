import { Query, Resolver } from "type-graphql";
import Magic from "./magic";
import magicSchema from "../../model/magicSchema";

@Resolver(Magic)
export class magicResolver {
  @Query(() => [Magic])
  async magics() {
    const magic = await magicSchema.find();
    return magic;
  }
}
