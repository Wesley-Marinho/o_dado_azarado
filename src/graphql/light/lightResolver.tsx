import { Query, Resolver } from "type-graphql";
import Light from "./light";
import lightsSchema from "../../model/lightSchema";

@Resolver(Light)
export class LightResolver {
  @Query(() => [Light])
  async lights() {
    const light = await lightsSchema.find();
    return light;
  }
}
