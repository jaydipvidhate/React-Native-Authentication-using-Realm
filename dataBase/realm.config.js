import realm from "realm";
import { userSchema } from "./allSchema";

const databaseOptions = {
    path: 'partner.realm',
    schema: [
     userSchema
    ],
    schemaVersoin: 0,
  };
  
export default new Realm(databaseOptions);