import { Query, Resolver } from "type-graphql";
import Dificulty from "./difficulty";
import difficultySchema from "../../model/difficultySchema";

@Resolver(Dificulty)
export class DificultyResolver {
  @Query(() => [Dificulty])
  async difficulties() {
    const difficulty = await difficultySchema.find();
    return difficulty
  }
}
