import { ObjectType, Field } from "type-graphql";

@ObjectType()
class Exhaustion{
  @Field()
  type: String;
  @Field()
  disadvantage: String;
}

export default Exhaustion;