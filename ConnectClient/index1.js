/*  Plan
- create app on heroku - DONE
- install node postgres npm i pg - DONE
- import pg import pg from 'pg' -DONE
- create client and add details from creds from Heroku - DONE
- connect client - DONE
- client query - DONE
- client end
- console log results
*/

import pg from 'pg';

const client = new pg.Client({
    host : 'ec2-3-248-121-12.eu-west-1.compute.amazonaws.com',
    user: 'jbnsiatfjcyxnp',
    database : 'ddajusjmael5e',
    password : 'e6359d9ebe2d57b43cf9bb6a902b135e29ca3ede346820e3fe45f60d59012aaa',
    port: '5432',
    ssl: { rejectUnauthorized: false }

});

await client.connect();

const results = await client.query('CREATE TABLE geniuses (name TEXT, genius_id TEXT)()');

await client.end();

console.log(results);
