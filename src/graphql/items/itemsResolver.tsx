import { Query, Resolver } from "type-graphql";
import Item from "./item";
import itemsSchema from "../../model/itemSchema";

@Resolver(Item)
export class ItemResolver {
  @Query(() => [Item])
  async weapons() {
    const item = await itemsSchema.find();
    return item;
  }
}
