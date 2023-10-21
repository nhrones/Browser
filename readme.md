# Browser Launcher

This simple utility is used to launch a browser process.

## Usage:
Import this utility in your server, and call browserStart at the end of the file. 

```ts
//server.ts
import {browserStart} from "https://raw.githubusercontent.com/nhrones/Browser/master/browser.ts"

const Port = 8080

// first, you would start a dev server on port 8080 here ...
Deno.serve({ port: port }, (request: Request): Promise<Response> {
   // ...
   // do server stuph
   // ...
})

// then, you will open the browser at `http://localhost:8080`
browserStart(`http://localhost:${Port}`)
```
The above assumes a web app (index.html) being served from `http://localhost:8080`    
The browser will auto-open to that url

## Note:
This is a very small utility with no external dependencies.    
You may want to add the code found in **_browser.ts_**, to the end of your server.ts file. 