import express from 'express'
const app = express()
const port = 5001
import cors from 'cors'

app.use(cors())

//db config
import dbConfig from './config/dbConfig'
dbConfig.connectDb()

import schema from './schema/userSchema'

import { graphqlHTTP } from 'express-graphql'

//root
//parent

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}))

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))