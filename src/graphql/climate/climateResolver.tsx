import { Query, Resolver } from "type-graphql";
import Climate from "./climate";
import climateSchema from "../../model/climateSchema";

@Resolver(Climate)
export class ClimateResolver {
  @Query(() => [Climate])
  async climates() {
    const climate = await climateSchema.find();
    return climate
  }
}
