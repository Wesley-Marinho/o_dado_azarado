import { ObjectType, Field } from "type-graphql";

@ObjectType()
class Trip {
  @Field()
  rhythm: String;
  @Field()
  hour: String;
  @Field()
  day: String;
  @Field()
  effect: String;
}

export default Trip;