import { Cache, QueryInput } from '@urql/exchange-graphcache';

// custom wrapper for cacheExchange mutation types
// def find a better way to do urql cache updates
export function altUpdateQuery<Result, Query>(
  cache: Cache,
  qi: QueryInput,
  result: any,
  fn: (r: Result, q: Query) => Query) {
  return cache.updateQuery(qi, data => fn(result, data as any) as any);
}
