const { GraphQLList } = require('graphql')
const { userType } = require('../typeDef/userType')
const User = require('../../model/userModel')

const userList = {
    type: new GraphQLList(userType),
    resolve(parent, args) {
        let data = User.find()
        return data
    }
}


module.exports = {
    userList
}
