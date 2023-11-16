  <template>
  <div class="jumbotron text-black">
    <b-card
      title="Mnemonic"
      img-src=""
      img-alt=""
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

          <span title="Source info" v-else>
            <br />
            <pre>{{ info }}</pre>
          </span>

          <b-card-text>
            Backup you multisignature Mnemonic words and store it in a safe
            place.
            <br />
          </b-card-text>
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
    axios
      .get(`https://dev-2nyhi3gc.eu.auth0.com/api/v2/users`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      //.then((response) => (this.info = response.data.app_metadata))
      .then((response) => {
        // localStorage.setItem("api_key", response.data[0].app_metadata.api_key);
        // localStorage.setItem(
        //   "store_hard",
        //   response.data[0].app_metadata.store_hard
        // );
        // console.log(response.data[0].app_metadata);
        this.info = response.data[0].app_metadata.store_data.mnemonic;
        // JSON.stringify(JSON.parse(value), null, 2);
        //this.info = JSON.stringify(response.data, null, 2);
      })
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