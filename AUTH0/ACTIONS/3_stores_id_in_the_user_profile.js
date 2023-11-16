const axios = require("axios");
/**
* Handler that will be called during the execution of a PostLogin flow.
*
* @param {Event} event - Details about the user and the context in which they are logging in.
* @param {PostLoginAPI} api - Interface whose methods can be used to change the behavior of the login.
*/

exports.onExecutePostLogin = async (event, api) => {
    // if (!event.user.app_metadata.stores_id) {
        if (!event.user.app_metadata.store_hot) {
        const stores_id = await axios.get("https://btcpay.bitcoin-tx.com/api/v1/stores", { headers: { 'Content-Type': 'application/json' }, auth: { 'username': event.user.email, 'password': event.secrets.PASS } });


        for (var i = 0; i < stores_id.data.length; i++) {
            api.user.setAppMetadata(stores_id.data[i].name, stores_id.data[i].id);
        }

        // api.user.setAppMetadata("stores_id", "1");
    }
};


/**
* Handler that will be invoked when this action is resuming after an external redirect. If your
* onExecutePostLogin function does not perform a redirect, this function can be safely ignored.
*
* @param {Event} event - Details about the user and the context in which they are logging in.
* @param {PostLoginAPI} api - Interface whose methods can be used to change the behavior of the login.
*/
// exports.onContinuePostLogin = async (event, api) => {
// };
