import { Query, Resolver } from "type-graphql";
import Activity from "./activity";
import activitySchema from "../../model/activitySchema";

@Resolver(Activity)
export class ActivityResolver {
  @Query(() => [Activity])
  async activities() {
    const activity = await activitySchema.find();
    return activity
  }
}
