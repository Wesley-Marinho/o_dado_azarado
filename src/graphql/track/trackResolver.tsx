import { Query, Resolver } from "type-graphql";
import Track from "./track";
import trackSchema from "../../model/trackSchema";

@Resolver(Track)
export class TrackResolver {
  @Query(() => [Track])
  async tracks() {
    const track = await trackSchema.find();
    return track
  }
}
