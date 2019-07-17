sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain $1
echo "根证书导入成功"
