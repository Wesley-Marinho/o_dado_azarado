import { Query, Resolver } from "type-graphql";
import Darkness from "./darkness";
import darknessSchema from "../../model/darknessSchema";

@Resolver(Darkness)
export class DarknessResolver {
  @Query(() => [Darkness])
  async darknesses() {
    const darkness = await darknessSchema.find();
    return darkness
  }
}
