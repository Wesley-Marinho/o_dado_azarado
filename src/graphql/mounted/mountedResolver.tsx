import { Query, Resolver } from "type-graphql";
import Mounted from "./mounted";
import mountedSchema from "../../model/mountedSchema";

@Resolver(Mounted)
export class MountedResolver {
  @Query(() => [Mounted])
  async mounteds() {
    const mounted = await mountedSchema.find();
    return mounted
  }
}
