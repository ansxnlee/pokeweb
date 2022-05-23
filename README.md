## pokeweb

Frontend for [pokemart](https://github.com/ansxnlee/pokemart), an educational implementation for a mock E-commerce web app.

## Technologies used

Built with [next.js](https://github.com/vercel/next.js) to handle routing.

React components built and stylized with [chakra-ui](https://github.com/chakra-ui/chakra-ui).

[formik](https://github.com/jaredpalmer/formik) is used so that pages that require user input are easier to manage.

[urql](https://github.com/FormidableLabs/urql) used as the graphql client with types/hooks of queries generated from [graphql-code-generator](https://github.com/dotansimha/graphql-code-generator).

## Showcase

![verified](../public/md/verified.png)

## Workflow for creating graphql queries

1. Test queries in apollo sandbox
2. Copy query into a graphql file
3. use "graphql-codegen" to generate types/hooks (make sure the backend is running)

```bash
yarn gen
```

4. Hooks within generated tsx file can now be used.

## Importing PRODUCTS.json into postgres

There's probably a better way to do this but this works fine I guess.

1. Copy json file into /tmp folder since /home might have restricted access with psql
2. Set psql variable name to json data (we can echo to double check the value)

```sql
\set $var `cat /tmp/PRODUCTS.json`
\echo :$var
```

3. Create a temp table that holds our entire json array in a single row

```sql
CREATE temp TABLE $tableName ( $colName jsonb );
INSERT INTO $tableName VALUES (:'$var');
```

4. Split json array into table with proper columns for ease of use
```sql
CREATE temp TABLE t1 AS 
select * from jsonb_to_recordset((select * from t)) 
AS x(cost int, name text, text text, effect text, "itemId" int, sprite text, "nameEng" text, category text);
```

5. Copy our table from step 4 directly into the "product" table
```sql
INSERT INTO product (item_id, name, name_eng, cost, effect, text, sprite, category, created, updated) 
SELECT "itemId", name, "nameEng", cost, effect, text, sprite, category, CURRENT_DATE, CURRENT_DATE FROM t1;
```

## Product Categories

There are a total of 110 "products" in our database consisting of
- items (x9 spelunking, x21 evolution)
- pokeballs (x7 standard, x13 special)
- medicine (x13 healing, x4 revival, x13 status cures, x4 pp recovery, x16 vitamins)
- berries (x10 medicine)

Pokemon and its respective properties are copyright The Pokemon Company International. Inc.

## Improvement/Bugs

- cookies don't work in incognito mode
- create an "admin" page that queries everything in the database for convenience (ie. list of users, order, etc..)
- find a better way to update urql graphcache/types in ~/pages/_app.tsx
- some urql hooks are pretty speghetti and might crash frontend if we try to render components while fetching (race condition?)
- if 'additem' mutations are sent too quickly, the server crashes (above problem might be related?)
- implement an actual product filter instead of using different links with separate queries
- having a filter will make our searchbar work differntly (better?)
- /cart route sometimes doesn't refresh itself after 'submit order' mutation
