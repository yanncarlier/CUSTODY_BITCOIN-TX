#!/bin/bash

for i in {1..100}; do
    echo "Creating wallet $i"
    mkdir -p ./wallets$1
    # create wallet
    ./electrum create --offline --seed_type standard --portable --wallet ./wallets$1/$i.wallet > /dev/null
    # get addresses
    #./electrum --offline -w ./wallet$1/$i.wallet listaddresses >> ./wallet$1/$i\_addresses.json

    # get public keys
    #./electrum --offline -w ./wallet$1/$i.wallet listaddresses | ./electrum -o -w ./wallet$1/$i.wallet getpubkeys - >> ./wallet$1/$i\_publickeys.json
            # for j in {1..3}; do
            #     echo "Creating pubkeys $j"
            # ./electrum --offline  -w wallet$1/$i.wallet getpubkeys $(./electrum -o -w wallet$1/$i.wallet createnewaddress) >> ./wallet$1/$i\_publickeys.txt
            # done
    # get private keys
    # ./electrum --offline -w ./wallet$1/$i.wallet listaddresses | ./electrum -o -w ./wallet$1/$i.wallet getprivatekeys - >> ./wallet$1/$i\_privatekeys.json
    grep xpub ./wallets$1/$i.wallet >> ./wallets$1/wallets$1.xpubs
done
# grep xpub ./wallet$1/*.wallet >> ./wallet$1/wallet$1_xpubs.txt

# cat -n inputfile > outputfile


echo "Done"

# ./electrum -o -w wallet1/1.wallet createnewaddress
