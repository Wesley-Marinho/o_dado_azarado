import { Query, Resolver } from "type-graphql";
import Mount from "./mount";
import mountSchema from "../../model/mountSchema";

@Resolver(Mount)
export class MountResolver {
  @Query(() => [Mount])
  async mounts() {
    const mount = await mountSchema.find();
    return mount
  }
}
