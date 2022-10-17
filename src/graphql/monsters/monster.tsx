import { ObjectType, Field } from "type-graphql";

@ObjectType()
class Item {
  @Field()
  armor: Number;
  @Field()
  attacks: String;
  @Field()
  car: String;
  @Field()
  con: String;
  @Field()
  des: String;
  @Field()
  for: String;
  @Field()
  inte: String;
  @Field()
  sabe: String;
  @Field()
  chanllengeLevel: String;
  @Field()
  description: String;
  @Field()
  displacement: String;
  @Field()
  exp: Number;
  @Field()
  healhPoints: String;
  @Field()
  name: String;
}

export default Item;