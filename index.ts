
/**
 * Get a `Browser` open command based on the os
 * @returns an appropriate string for the command to be spawned
 */
function getBrowserCmd() {
   switch (process.platform) {
      case "win32":
         return "explorer.exe";
      case "darwin":
         return "open";
      case "linux":
         if (Bun.env.WSL_DISTRO_NAME) {
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
 * @param url  - the URL to open
 * @example 
 *    await openWebsite('https://bun.sh/')
 */
export async function openWebsite(url: string) {
   Bun.spawn([getBrowserCmd(), url])
}
