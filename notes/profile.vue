  <template>
  <div class="jumbotron text-black">
    <b-card
      title="Profile"
      img-src=""
      img-alt="Image"
      img-left
      style="max-width: 100%"
      class="mb-2"
    >
      <div v-if="$auth.loggedIn">
        <span v-if="errored">
          <span>
            We're sorry, we're not able to retrieve this information at the
            moment, please try back later
          </span>
        </span>
        <span v-else>
          <span v-if="loading"> Loading... </span>
          <span title="Source info" v-else>{{ info }}</span>
          <div id="example">
            <span> <div id="example">Profile</div></span>
          </div>
        </span>
        <br />
      </div>
      <div v-else>
        <b-card-text> Please Log in or Sign Up to view this page. </b-card-text>
      </div>
    </b-card>
  </div>
</template>
  
<script>
import axios from "axios";
import qs from "qs";
export default {
  name: "profile",
  data() {
    return {
      info: null,
      loading: true,
      errored: false,
    };
  },
  mounted() {
    var data = qs.stringify({
      grant_type: "client_credentials",
      client_id: this.$config.api_client_id,
      client_secret: this.$config.api_client_secret,
      audience: this.$config.api_audience,
      // client_id: "NhmT2XOCiFfiiZ7KhX5G5WNFgEpBCIt6",
      // client_secret:
      //   "W8VuPXXwX3oszyVhhqQZ_kbAUXG3C_VulYraWF8XwCv1gVEBnod-r0JH-lfN6cvr",
      // audience: "https://dev-2nyhi3gc.eu.auth0.com/api/v2/",
    });
    var config = {
      method: "post",
      //url: this.$config.api_url,
      url: "https://dev-2nyhi3gc.eu.auth0.com/oauth/token",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data.access_token));
        // console.log(JSON.stringify(response.data.token_type));
        // console.log(JSON.stringify(response.data.expires_in));
        localStorage.setItem("access_token", response.data.access_token);
      })
      .catch((error) => {
        console.log(error);
        console.log(data);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },

  updated() {
    axios
      .get(`https://dev-2nyhi3gc.eu.auth0.com/api/v2/users`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      //.then((response) => (this.info = response.data.app_metadata))
      .then((response) =>
        localStorage.setItem(
          "store_hard",
          response.data[0].app_metadata.store_hard
        )
      )
      //localStorage.setItem("store_hard", response.data.store_hard);
      .catch((error) => {
        console.log(error);

        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>
  
  <style>
</style>