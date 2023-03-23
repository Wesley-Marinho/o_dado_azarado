import { Query, Resolver } from "type-graphql";
import Trip from "./trip";
import tripsSchema from "../../model/tripSchema";

@Resolver(Trip)
export class tripResolver {
  @Query(() => [Trip])
  async trips() {
    const trip = await tripsSchema.find();
    return trip;
  }
}
