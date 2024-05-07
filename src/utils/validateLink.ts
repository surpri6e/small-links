/** Check link it or no */
export function validateLink(str: string): boolean {
   const regex = /^(https?:\/\/)/;

   if (regex.test(str)) {
      return true;
   }

   return false;
}
