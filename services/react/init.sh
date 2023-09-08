echo "----- Start installing npm dependencies -----"

npm install --prefix srcs react
# npm install --prefix srcs --save react-unity-webgl
# npm install --prefix srcs --save axios
# npm install --prefix srcs --save  axios-auth-refresh
# npm install --prefix srcs --save react-router-dom

echo "----- Successfully installed -----"

npm --prefix srcs start dev #--reset-cache 