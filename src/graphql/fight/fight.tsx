import { ObjectType, Field } from "type-graphql";

@ObjectType()
class Fight {
  @Field()
  type: String;
  @Field()
  bonus: String;
  @Field()
  damage: String;
}

export default Fight;
