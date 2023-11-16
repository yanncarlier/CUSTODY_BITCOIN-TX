
BTCPAY_INSTANCE="https://btcpay.bitcoin-tx.com"

apikey="685bc3aa4fff3a0af94e0ff23dc85d5ef727e375"
old_apikey="685bc3aa4fff3a0af94e0ff23dc85d5ef727e375"


curl -s \
     -H "Content-Type: application/json" \
     -H "Authorization: token $old_apikey" \
     -X DELETE \
     "$BTCPAY_INSTANCE/api/v1/api-keys/current"
