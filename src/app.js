import { envs } from "./config/env.js";
import { startServer } from "./server/server.js";
//const{ envs } = require('./config/env.js')
//const { startServer } = require('./server/server.js')

const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

(async () => {
    main()
})()