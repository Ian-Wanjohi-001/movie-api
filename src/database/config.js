import dotenv from 'dotenv';
import assert from 'assert';

dotenv.config ();

const{
    PORT , SQL_USER , SQL_SERVER , SQL_PASSWORD , SQL_DATABASE 
} = process.env;

const sqlEncrypt = process.env.SQL_ENCRYPTED === "true";

assert (PORT , 'PORT is required');


const config = {
    port : PORT ,
    sql : {
        server : SQL_SERVER ,
        database : SQL_DATABASE ,
        user : SQL_USER ,
        password : SQL_PASSWORD ,
        options:{
            encrypt:true,
            trustServerCertificate:false
        }
    }

}
 
export default config;
  