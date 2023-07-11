const { GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList, graphql } = require('graphql')

const { userList } = require('./query/user')
const { createUser, deleteUser } = require('./mutation/user')

const RootQuery = new GraphQLObjectType({
    name: 'query',
    fields: {
        userList: userList
    }
})

const RootMutation = new GraphQLObjectType({
    name: 'mutation',
    fields: {
        createUser: createUser,
        deleteUser: deleteUser
    }
})

module.exports = new GraphQLSchema({ query: RootQuery, mutation: RootMutation })