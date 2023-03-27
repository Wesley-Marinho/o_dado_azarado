import { Query, Resolver } from "type-graphql";
import Distance from "./distance";
import distanceSchema from "../../model/distanceSchema";

@Resolver(Distance)
export class DistanceResolver {
  @Query(() => [Distance])
  async distances() {
    const distance = await distanceSchema.find();
    return distance
  }
}
