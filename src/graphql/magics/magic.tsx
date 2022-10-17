import { ObjectType, Field } from "type-graphql";

@ObjectType()
class Magic {
  @Field()
  classes: String;
  @Field()
  description: String;
  @Field()
  level: Number;
  @Field()
  name: String;
}

export default Magic;