import { ObjectType, Field } from "type-graphql";

@ObjectType()
class Movement{
  @Field()
  type: String;
  @Field()
  effect: String;
}

export default Movement;