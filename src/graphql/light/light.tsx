import { ObjectType, Field } from "type-graphql";

@ObjectType()
class Light {
  @Field()
  item: String;
  @Field()
  vision: String;
  @Field()
  distance: String;
}

export default Light;