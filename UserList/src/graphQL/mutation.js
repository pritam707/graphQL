import { gql } from '@apollo/client'

export const ADD_USER = gql`
mutation createUser ($name: String!, $email: String!, $phone: String!){
    createUser(name: $name, email:$email, phone:$phone){
        _id
    }
  }
    `

export const DELETE_USER = gql`
mutation deleteUser ($_id: String!){
  deleteUser(_id: $_id){
        _id
    }
  }
    `