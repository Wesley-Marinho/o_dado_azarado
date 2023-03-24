import { Query, Resolver } from "type-graphql";
import Escape from "./escape";
import escapeSchema from "../../model/escapeSchema";

@Resolver(Escape)
export class EscapeResolver {
  @Query(() => [Escape])
  async escapes() {
    const escape = await escapeSchema.find();
    return escape
  }
}
