<template>
  <div></div>
</template>
<script>
import axios from "axios";
import qs from "qs";
export default {
  name: "token",
  mounted() {
    var data = qs.stringify({
      grant_type: "client_credentials",
      client_id: this.$config.api_client_id,
      client_secret: this.$config.api_client_secret,
      audience: this.$config.api_audience,
    });
    var config = {
      method: "post",
      url: this.$config.api_url,
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data.access_token));
        console.log(JSON.stringify(response.data.token_type));
        console.log(JSON.stringify(response.data.expires_in));
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  //updated() {},
  // , 30000000);
  // },
};
</script>
  <style>
</style>
