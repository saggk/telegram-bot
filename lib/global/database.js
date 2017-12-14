const pg = require("pg");
const util = require("util");

const postgres = new pg.Pool({
    host: process.env.pg_host_development,
    port: process.env.pg_port_development,
    user: process.env.pg_user_development,
    password: process.env.pg_password_development,
    database: process.env.pg_database_development,
    max: 120
});

const schema = "v0_3_6";

module.exports = {

    /**
     * @param {string} query
     * @param {array} parameters
     * @param {()} callback
     */

    query: (query, parameters, callback) => {
        let query_start = Date.now();

        return postgres.query(query, parameters, (err, res) => {
            if (err) throw err;

            callback(err, res);

            let query_duration = Date.now() - query_start;

            postgres.query(util.format("INSERT INTO %s.query_statistic (qs_query, qs_duration, qs_rows_usage) VALUES ($1, $2, $3)", schema), [query, query_duration, res.rowCount], (err) => {
                if (err) throw err;
            });
        });
    },

    db_schema: schema
}