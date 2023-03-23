import { ObjectType, Field } from "type-graphql";

@ObjectType()
class Climate{
  @Field()
  type: String;
  @Field()
  disadvantage: String;
}

export default Climate;