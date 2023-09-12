# Browser Launcher

This simple utility is used to launch a browser process.

Usage:

 main.ts
```ts
import {browserStart} from "https://raw.githubusercontent.com/nhrones/Browser/master/mod.ts"

const serverPort = 80
// first, you would start a dev server on port 80 here ...

// open the browser at `http:localhost:80`
browserStart(serverPort)
```
The above assumes a web app (index.html) being served from `http:localhost:80`
The browser will open to that url
