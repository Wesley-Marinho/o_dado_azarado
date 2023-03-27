import { Query, Resolver } from "type-graphql";
import Movement from "./movement";
import movementSchema from "../../model/movementSchema";

@Resolver(Movement)
export class MovementResolver {
  @Query(() => [Movement])
  async movements() {
    const movement = await movementSchema.find();
    return movement
  }
}
