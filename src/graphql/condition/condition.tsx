import { ObjectType, Field } from "type-graphql";

@ObjectType()
class Condition{
  @Field()
  type: String;
  @Field()
  effect: String;
}

export default Condition;