BTCPAY_INSTANCE="https://btcpay.bitcoin-tx.com"
USER="yanncarlier@gmail.com"
PASSWORD="yanncarlier@gmail.com"
body="$(echo "{}" | jq --arg "a" "$USER" '. + {email:$a}' \
                  | jq --arg "a" "$PASSWORD" '. + {password:$a}')"
curl -s \
     -H "Content-Type: application/json" \
     -X POST \
     -d "$body" \
     "$BTCPAY_INSTANCE/api/v1/users"
