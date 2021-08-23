import express from "express";
import http from "http"
import cors from "cors"
import logger from "morgan"
import { graphqlHTTP } from "express-graphql"
import cookieParser from 'cookie-parser';
import firebase from "firebase"
import bodyParser from "body-parser";
import path from "path";
import dbConfig from "./dbConfig/index.js";
import { recipeSchema } from "./graphql/index.js";
import indexRouter from "./routes/index.js"
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const port = 4000
const app = express()


firebase.initializeApp(dbConfig)

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'src')))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cookieParser());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use(bodyParser.json());

app.use("/", indexRouter)

app.use("/graphql", cors(), graphqlHTTP({
    schema: recipeSchema,
    rootValue: global,
    graphiql: true
}))
const server = http.createServer(app)

server.listen(port)