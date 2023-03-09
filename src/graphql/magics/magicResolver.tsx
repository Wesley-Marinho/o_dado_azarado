import { Query, Resolver } from "type-graphql";
import Magic from "./magic";
import magicSchema from "../../model/magicSchema";

@Resolver(Magic)
export class magicResolver {
  @Query(() => [Magic])
  async weapons() {
    const magic = await magicSchema.find();
    return magic;
  }
}
