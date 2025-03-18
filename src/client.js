// src/client.ts
import { createThirdwebClient } from "thirdweb";
console.log(process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID);
export const client = createThirdwebClient({
  clientId: "49bd2fc1ae2457f28a0d3b41e7a48b0c",
});
