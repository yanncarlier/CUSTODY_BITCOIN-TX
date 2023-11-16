BTCPAY_INSTANCE="https://btcpay.bitcoin-tx.com"
USER="yanncarlier@gmail.com"
PASSWORD="yanncarlier@gmail.com"

permission="btcpay.store.canmodifystoresettings"
body="$(echo "{}" | jq --arg "a" "$permission" '. + {permissions:[$a]}')"
apikey="$(curl -s \
     -H "Content-Type: application/json" \
     --user "$USER:$PASSWORD" \
     -X POST \
     -d "$body" \
     "$BTCPAY_INSTANCE/api/v1/api-keys" | jq -r .apiKey)"


