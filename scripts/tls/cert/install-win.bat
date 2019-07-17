:: 进入当前脚本所在目录
cd %~dp0
:: 导入根证书
certmgr.exe /c /add f2e.ca.crt /s root
echo success
exit
