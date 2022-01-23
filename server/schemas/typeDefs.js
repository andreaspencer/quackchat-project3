const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }



# //for google
  type AuthResponse {
    token: String
    name: String
  }





  type Chat {
    chatId: ID 
    chatText: String
    chatSender: String
    chatChannel: String
    chatTarget: String
    chatDisplayed: Boolean
    createdAt: String
  }

# //for google
  input AuthInput {
    accessToken: String!
  }




  type Channel {
    channelId: ID
    channelTitle: String
    channelBlurb: String 
  }




  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    chats(chat: String): [Chat]
    # //thought(_id: ID!): Thought
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addChat(chatText: String!, chatSender: String!, chatSender: String!, chatChannel: String!, chatTarget: String, chatDisplayed: Boolean): Chat
    # //addReaction(thoughtId: ID!, reactionBody: String!): Thought
    addFriend(friendId: ID!): User
    authGoogle(input: AuthInput!): AuthResponse
  }
`;

module.exports = typeDefs;
