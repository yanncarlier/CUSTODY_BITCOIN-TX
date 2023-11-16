
https://electrum.readthedocs.io/en/latest/cmdline.html  


ln -s /home/y/Desktop/APPLICATIONS/BITCOIN/electrum/electrum-4.2.2-x86_64.AppImage electrum



2-of-xpub661MyMwAqRbcFdZVTrRuh7R8KriSorwsre8oA8wqLkye7e4TdgtrzX2J8JqVmepNCckRTxyDtFtNKQUPLfvpkrejrfanL36S4rJUhmNNF4e-xpub661MyMwAqRbcFghP1hYUmoKQ8jQx4j3zsBpRdzLK2r7pSywk83AGfBAv9GDzeRiC7Xip43aun4kUrnJTRYBaYduzJrxg73zQBHKMfmoQFpx-xpub661MyMwAqRbcGSQwp9zodrpoC5ZMKyUP1qG9dCeiFaAdkk1a4cVQiWWZroMDa3fQ6nZYTeSzXPxpx5kkGxnosZ88f9iF6L8aFUZgPyK1Yto-[legacy]


awk '{print $2}' multi_sign/wallets1.xpubs > multi_sign/wallets1.1.xpubs  
sed -i 's/"//g' multi_sign/wallets1.1.xpubs  
paste multi_sign/wallets*.1.xpubs -d "-" > multi_sign/wallets1.2.xpubs  
sed -e 's/^/2-of-/' multi_sign/wallets_mg1.xpubs > multi_sign/wallets_mg2.xpubs  
sed 's/^/2-of/; s/$/-[legacy]/' multi_sign/wallets_mg2.xpubs > multi_sign/wallets_mg3.xpubs  



COLD
abcd82a1/84'/0'/0'  
https://github.com/bitcoin/bips/blob/master/bip-0084.mediawiki  


HOT
"accountKeyPath": "2cf11af1/84'/0'/0'",

why?