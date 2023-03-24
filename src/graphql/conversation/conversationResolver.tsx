import { Query, Resolver } from "type-graphql";
import Conversation from "./conversation";
import conversationSchema from "../../model/conversationSchema";

@Resolver(Conversation)
export class ConversationResolver {
  @Query(() => [Conversation])
  async conversations() {
    const conversation = await conversationSchema.find();
    return conversation
  }
}
