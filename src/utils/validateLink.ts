/** Check link it or no */
export function validateLink(str: string): boolean {
   const regex = /^(https?:\/\/)?([\da-z\\.-]+)\.([a-z\\.]{2,6})([\\/\w \\.-]*)*\/?$/;

   if (regex.test(str)) {
      return true;
   }

   return false;
}
