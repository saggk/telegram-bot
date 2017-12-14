#!/srv/environment/node8.8.1/bin/node

const app = require("express")().use(require("body-parser").json());
const http_request_web = require("./lib/http/web");
const http_request_api = require("./lib/http/api");
const global_api = require("./lib/global/api");
const cluster = require("cluster");

if (cluster.isMaster) {
    for (let i = 0; i < require("os").cpus().length; i++) {
        cluster.fork();
    }
} else {
    require("http").createServer(app).listen(443);

    app.get("/public/app/pwc/tel", );
    app.get("/public/app/pwc/archive/*.html", );
    app.get("/" + global_api.messenger_token, );

    app.post("/" + global_api.messenger_token, http_request_api.messenger_request_handler);
    app.post("/" + global_api.telegram_token, http_request_api.telegram_request_handler);
}