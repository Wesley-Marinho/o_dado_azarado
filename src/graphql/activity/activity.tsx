import { ObjectType, Field } from "type-graphql";

@ObjectType()
class Activity{
  @Field()
  type: String;
  @Field()
  disadvantage: String;
}

export default Activity;