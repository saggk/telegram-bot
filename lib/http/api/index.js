var local = require("../../global/local")
var db_log = require("../../../database/postgresql/system_log/index");

/**
 * Telegram requests handler
 * @param {{}} req 
 * @param {{}} res 
 */

exports.telegram_request_handler = (req, res) => {
    if (local.allowed_address.length != 0) {
        if (local.allowed_address.indexOf(req.headers["x-forwarded-for"]) > -1) {
            if (req.body.hasOwnProperty("callback_query")) {

            } else if (req.body.hasOwnProperty("inline_query")) {

            } else if (req.body.hasOwnProperty("message")) {
                
            }
        } else {
            res.sendStatus(403);
            res.end();

            db_log.unknown_address_telegram_endpoint(req.headers["x-forwarded-for"], "unknown_ip_address", new Error("warning: unknown ip address over telegram endpoint").stack);
        }
    } else {
        res.sendStatus(403);
        res.end();

        db_log.insecurity_telegram_endpoint(req.headers["x-forwarded-for"], "address_security_not_set", new Error("warning: no ip security set").stack);
    }
}

exports.messenger_request_handler = (req, res) => {

}