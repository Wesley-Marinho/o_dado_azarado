import { Query, Resolver } from "type-graphql";
import Pursue from "./pursue";
import pursueSchema from "../../model/pursueSchema";

@Resolver(Pursue)
export class PursueResolver {
  @Query(() => [Pursue])
  async pursues() {
    const pursue = await pursueSchema.find();
    return pursue
  }
}
