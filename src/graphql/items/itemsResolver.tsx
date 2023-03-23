import { Query, Resolver } from "type-graphql";
import Item from "./item";
import itemsSchema from "../../model/itemSchema";

@Resolver(Item)
export class ItemResolver {
  @Query(() => [Item])
  async items() {
    const item = await itemsSchema.find();
    return item;
  }
}
