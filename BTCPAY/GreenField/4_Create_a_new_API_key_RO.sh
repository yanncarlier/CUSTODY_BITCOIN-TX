BTCPAY_INSTANCE="https://btcpay.bitcoin-tx.com"
USER="yanncarlier@gmail.com"
PASSWORD="yanncarlier@gmail.com"
apikey="685bc3aa4fff3a0af94e0ff23dc85d5ef727e375"
store_id="BDnSxSAQPFzn6pVRPMT7oofHPFEDVxDf5nuQfCBGDwxw"


old_apikey="$apikey"
permission="btcpay.store.canviewstoresettings:$store_id"
body="$(echo "{}" | jq --arg "a" "$permission" '. + {permissions:[$a]}')"
apikey="$(curl -s \
     -H "Content-Type: application/json" \
     --user "$USER:$PASSWORD" \
     -X POST \
     -d "$body" \
     "$BTCPAY_INSTANCE/api/v1/api-keys" | jq -r .apiKey)"
