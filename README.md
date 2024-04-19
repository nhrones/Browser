# Browser
A simple utilities that can be called in a Bun server to open the _Operating System_ default browser to the URL being served by the server:    

```ts
import { openWebsite } from './deps.ts'
import {DEV, folder, port} from './config.ts';
// create our http server
const server = Bun.serve({
   port: port,
   async fetch(req) { 
      // do server stuph
   }
})
openWebsite(`http://localhost:${port}`)
```

Above code will open the browser at `http://localhost:${port}`

## Usage:
To install Browser from Github:
```
bun add git@github.com:nhrones/Browser.git
```