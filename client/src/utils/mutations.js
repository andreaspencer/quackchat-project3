import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_CHAT = gql`
  mutation addChat(
    $chatText: String!
    $chatSender: String!
    $chatChannel: String!
    $chatTarget: String
    $chatDisplayed: Boolean!
  ) {
    addChat(
      chatText: $chatText
      chatSender: $chatSender
      chatChannel: $chatChannel
      chatTarget: $chatTarget
      chatDisplayed: $chatDisplayed
    ) {
      token
      user {
        _id
        username
      }
    }
  }
`;
