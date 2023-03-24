import { ObjectType, Field } from "type-graphql";

@ObjectType()
class Difficulty{
  @Field()
  type: String;
  @Field()
  disadvantage: String;
}

export default Difficulty;