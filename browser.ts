

/**
 * Browser open command based on the os
 * @returns the string for the command to call
 */
async function getBrowserCmd(): Promise<string> {
   switch (Deno.build.os) {
      case "windows":
         return "explorer.exe";
      case "darwin":
         return "open";
      case "linux":
         if ((await Deno.permissions.query({ name: "env" })) && Deno.env.get("WSL_DISTRO_NAME")) {
            // is WSL/WSL2
            return "explorer.exe";
         } else {
            return "xdg-open";
         }
      default:
         return "Unknown os" 
    }
}

/**
 * Opens a website in the default browser
 * @param url  - the url to be opened in the browser
 * @example await openWebsite('https://Deno.com')
 */
export async function openWebsite(url: string) {
   return new Deno.Command(await getBrowserCmd(), 
   { args: [url] }).outputSync();
}
