var allowed_addresses = [],
    telegram_blacklist = [];

module.exports = {
    host: "https://22c87a45.ngrok.io/",
    delete_messages_default: 3600000,           // 1 day
    delete_messages_personalized: 60000,        // 1 hour
    allowed_address: allowed_addresses,         // Telegram IP range
    telegram_blacklist: telegram_blacklist,     // System blacklist

    set_allowed_addresses: (ip_address) => {
        allowed_addresses.push(ip_address);
    },

    set_telegram_blacklist: (telegram_id) => {
        telegram_blacklist.push(telegram_id);
    }
}