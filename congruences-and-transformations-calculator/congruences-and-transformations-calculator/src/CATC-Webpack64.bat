@echo off
setlocal

set webpack=node_modules\.bin\webpack
set webpack_config=webpack.config.js

call %webpack% --config %webpack_config%

pause
