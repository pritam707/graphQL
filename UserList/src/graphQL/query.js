import { gql } from '@apollo/client'

const USER_LIST = gql`
    query{
        userList{
          _id
          name
          email
          phone
        }
      }
    `

export default USER_LIST

