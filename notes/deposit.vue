  <template>
  <div class="jumbotron text-black">
    <b-card
      title="Deposit"
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
            <span>
              <div id="example">
                <button v-on:click="getbtcaddress">getbtcaddress</button>
              </div></span
            >
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
var data = {};
export default {
  name: "deposit",
  data() {
    return {
      info: null,
      loading: false,
      errored: false,
    };
  },
  methods: {
    getbtcaddress() {
      this.loading = true;
      var config = {
        method: "get",
        url:
          "https://btcpay.bitcoin-tx.com/api/v1/stores/" +
          localStorage.getItem("store_hard") +
          "/payment-methods/onchain/BTC/wallet/address?forceGenerate=true",
        headers: {
          Authorization: `token 39791df4f5ac41a6dfabffe15a0d4a85a9b964c2`,
        },
        data: data,
      };
      self = this;
      axios(config)
        .then(function (response) {
          self.info = JSON.stringify(response.data);
          //console.log(JSON.stringify(response.data));
          // .then((response) => {
          //   this.info = JSON.stringify(response.data);
          //   //console.log(JSON.stringify(response.data));
          // })
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(() => (this.loading = false));
    },
  },
};
</script>
  <style>
</style>