/**
 *  Telegram bots list:
 *      @raspwcbot
 *      @devpwcbot
 *      @pwcvebot
 */

module.exports = {
    telegram_host: "api.telegram.org",
    telegram_path: "bot" + process.env.telegram_token_development,
    telegram_token: process.env.telegram_token_development,

    messenger_messaging_host: "graph.facebook.com",
    messenger_messaging_path: "/v2.6/me/messages",
    messenger_token: process.env.messenger_token_development
}