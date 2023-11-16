var axios = require('axios');

var config = {
  method: 'delete',
  url: 'https://btcpay.bitcoin-tx.com/api/v1/api-keys/current',
  headers: { 
    'Authorization': 'token 760e41fd5d27d2c687ea3f04a08d6f2f9a81c752', 
    'Cookie': 'UserPrefsCookie=%7B%22InvoicesQuery%22%3Anull%2C%22PaymentRequestsQuery%22%3Anull%2C%22UsersQuery%22%3Anull%2C%22PayoutsQuery%22%3Anull%2C%22PullPaymentsQuery%22%3Anull%2C%22CurrentStoreId%22%3A%22irXaHsUunrnECscXxn8Qm8cYB7ou83sQcYtUPy3kpjR%22%7D; .AspNetCore.Identity.Application=CfDJ8DNip_UNeZxGocV1cMO06wBGhzWLP99cHAclvq5Ykrp8lHCvhD5XcJ-dE84rBpAxfAAWuf-2-eiOEXhRE5AmKIZQfvc9mfpqu_eQd583AY7yqybVOUiZs2mFjWl1Ljwi11ylKFID8zJ1lzqOn-T7Jw-NkZBVLkTOzGs1YagA2js75BJ4VmRbwjwQVH5wjtIp7Rn23nadYdLomzLtM5rUQ9ZLcEHpbTbDMJ30cSMUDgzBgwaU4TkS9Vp50OVEPbZqy-PWGu_0WfDwCm5a-WwIb1wUO4jLpfR2zEc-YTQ1kUZdmhnM84jjeIvLFSqciud5v5dPepODuNENpXYfv8j40HPy1Ai9XLFAlyTugcHgw2Jh6eqF6FWgR2WJ-Q_TXxrQup7gV8-AcfH2EbjWfP1ww3syjyDdHyF2GdZVy3ckm7mOkaIKSneM2crp9wgqa5pzxzV2XrcqiXxvxOTK3FRMM5Wjqeh7gVhDVG0C3w_uZorFmd-xAZY-TUY1CVQrbRhOe6zkoY0BeE9H1c9CYNC8xtm4MC5RIWHOnUSvNHtP1V9_6i1XwM2dThqPXim1BvIAY603Fcp3FPBio9GWmrUOPPWZ6vWuE8Mg8Mdu9G983xkE2cVZR9xfCCldWVUzgRUfrdtDXmOBbnAYIFfIJn7a740lwYR8Hqfymir_Do0tuXcArBD_EwfuPbeuGUGRGRDY-Lqp4sEE13jfzDAMGllAfnXRXBorGF5WR_ffpsJnfHV2V88LshlJkrkav7Ks3DCpgA'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
