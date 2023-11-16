BTCPAY_INSTANCE="https://btcpay.bitcoin-tx.com"
USER="yanncarlier@gmail.com"
PASSWORD="yanncarlier@gmail.com"
apikey="685bc3aa4fff3a0af94e0ff23dc85d5ef727e375"


store_name="My awesome store"
body="$(echo "{}" | jq --arg "a" "$store_name" '. + {name:$a}')"
store_id="$(curl -s \
     -H "Content-Type: application/json" \
     -H "Authorization: token $apikey" \
     -X POST \
     -d "$body" \
     "$BTCPAY_INSTANCE/api/v1/stores"  | jq -r .id)"
