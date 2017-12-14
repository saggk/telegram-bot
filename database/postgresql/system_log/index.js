const db = require("../../../lib/global/database");
const util = require("util");


/**
 * Success log
 * @param {JSON} res 
 * @param {number} status_code 
 * @param {string} res_type 
 */

exports.success = (res, code, res_type) => {
    db.query(util.format("INSERT INTO %s.system_log (lg_data, lg_status_code, lg_type) VALUES ($1, $2, $3)", db.db_schema), [res, code, res_type], (err) => {
        if (err) throw err;
    });
}


/**
 * Request error
 * @param {JSON} res 
 * @param {number} code 
 * @param {string} res_type 
 * @param {{}} err_instance 
 */

exports.response_error = (res, code, res_type, err_instance) => {
    db.query(util.format("INSERT INTO %s.system_log (lg_data, lg_status_code, lg_type, lg_stack) VALUES ($1, $2, $3, $4)", db.db_schema), [res, code, res_type, err_instance], (err) => {
        if (err) throw err;
    });
}


/**
 * 
 * @param {{}} err 
 * @param {string} err_type 
 * @param {{}} err_instance 
 */

exports.internal_error = (err, err_type, err_instance) => {
    db.query(util.format("INSERT INTO %s.system_log (lg_data, lg_type, lg_stack) VALUES ($1, $2, $3)", db.db_schema), [err, err_type, err_instance], (err) => {
        if (err) throw err;
    });
}


/**
 * 
 * @param {string} ip_address 
 * @param {string} err_type 
 * @param {{}} err_instance 
 */

exports.insecurity_telegram_endpoint = (ip_address, err_type, err_instance) => {
    db.query(util.format("INSERT INTO %s.system_log (lg_data, lg_type, lg_stack) VALUES ($1, $2, $3)", db.db_schema), [ip_address, err_type, err_instance], (err) => {
        if (err) throw err;
    });
}


/**
 * 
 * @param {string} ip_address 
 * @param {string} err_type 
 * @param {{}} err_instance 
 */

exports.unknown_address_telegram_endpoint = (ip_address, err_type, err_instance) => {
    db.query(util.format("INSERT INTO %s.system_log (lg_data, lg_type, lg_stack) VALUES ($1, $2, $3)", db.db_schema), [ip_address, err_type, err_instance], (err) => {
        if (err) throw err;
    });
}