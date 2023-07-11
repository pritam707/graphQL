const { GraphQLInt, GraphQLString, GraphQLObjectType } = require('graphql')

const userType = new GraphQLObjectType({
    name: 'user',
    fields: () => ({
        _id: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString }
    })
})

module.exports = {
    userType
}