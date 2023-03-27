import { ObjectType, Field } from "type-graphql";

@ObjectType()
class Distance{
  @Field()
  type: String;
  @Field()
  effect: String;
}

export default Distance;