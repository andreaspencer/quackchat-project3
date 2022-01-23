const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
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
    thought(_id: ID!): Thought
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addChat(chatText: String!, chatSender: String!, chatSender: String!, chatChannel: String!, chatTarget: String, chatDisplayed: Boolean): Chat
  }
`;

module.exports = typeDefs;
