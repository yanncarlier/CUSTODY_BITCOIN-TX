

BTCPAY_INSTANCE="https://btcpay.bitcoin-tx.com"
USER="yanncarlier@gmail.com"
PASSWORD="yanncarlier@gmail.com"
apikey="223d8b78dbdea69b7af7419ab7d25ab07bb5540d"


curl -s \
     -H "Content-Type: application/json" \
     -H "Authorization: token $apikey" \
     -X GET \
     "$BTCPAY_INSTANCE/api/v1/stores/$store_id"
