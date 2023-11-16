const axios = require("axios");

/**
 * @param {Event} event - Details about registration event.
 */
exports.onExecutePreUserRegistration = async (event, api) => {
  await axios.post("https://btcpay.bitcoin-tx.com/api/v1/users", { email: event.user.email, password: event.secrets.PASS, isAdministrator: false});
};


