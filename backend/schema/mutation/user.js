const { GraphQLList, GraphQLString } = require('graphql')
const { userType } = require('../typeDef/userType')
const User = require('../../model/userModel')
const { ObjectId } = require('mongodb')

const createUser = {
    type: userType,
    args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString }
    },
    resolve(parent, args) {
        let data = User.create({
            name: args.name,
            email: args.email,
            phone: args.phone
        })

        return data
    }
}

const deleteUser = {
    type: userType,
    args: {
        _id: { type: GraphQLString }
    },
    resolve(parent, args) {
        let data = User.deleteOne({ _id: new ObjectId(args._id) })

        return data
    }
}



module.exports = {
    createUser,
    deleteUser
}
