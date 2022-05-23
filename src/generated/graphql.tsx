import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Item = {
  __typename?: 'Item';
  created: Scalars['String'];
  id: Scalars['Float'];
  order: Order;
  product: Product;
  quantity: Scalars['Float'];
  updated: Scalars['String'];
};

export type ItemResponse = {
  __typename?: 'ItemResponse';
  errors?: Maybe<Array<FieldError>>;
  item?: Maybe<Item>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addItem?: Maybe<ItemResponse>;
  deleteProduct: Scalars['Boolean'];
  editItem: ItemResponse;
  eregister: Scalars['Boolean'];
  importProduct: Product;
  login: UserResponse;
  logout: Scalars['Boolean'];
  newOrder: OrderResponse;
  register: UserResponse;
  removeItem: ItemResponse;
  removeOrder: Scalars['Boolean'];
  submitOrder: Scalars['Boolean'];
  updateProduct: Product;
};


export type MutationAddItemArgs = {
  productId: Scalars['Int'];
  quantity: Scalars['Int'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['Int'];
};


export type MutationEditItemArgs = {
  productId: Scalars['Int'];
  quantity: Scalars['Int'];
};


export type MutationEregisterArgs = {
  id: Scalars['Int'];
};


export type MutationImportProductArgs = {
  category: Scalars['String'];
  cost: Scalars['Int'];
  effect: Scalars['String'];
  itemId: Scalars['Int'];
  name: Scalars['String'];
  nameEng: Scalars['String'];
  sprite: Scalars['String'];
  text: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationRegisterArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationRemoveItemArgs = {
  productId: Scalars['Int'];
};


export type MutationRemoveOrderArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateProductArgs = {
  cost: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Order = {
  __typename?: 'Order';
  created: Scalars['String'];
  id: Scalars['Float'];
  items: Array<Item>;
  updated: Scalars['String'];
  user: User;
};

export type OrderResponse = {
  __typename?: 'OrderResponse';
  errors?: Maybe<Array<FieldError>>;
  order?: Maybe<Order>;
};

export type Product = {
  __typename?: 'Product';
  category: Scalars['String'];
  cost: Scalars['Float'];
  created: Scalars['String'];
  effect: Scalars['String'];
  id: Scalars['Float'];
  itemId: Scalars['Float'];
  items: Item;
  name: Scalars['String'];
  nameEng: Scalars['String'];
  sprite: Scalars['String'];
  text: Scalars['String'];
  updated: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  conninfo?: Maybe<User>;
  hello: Scalars['String'];
  items: Array<Item>;
  order: Order;
  orderItems: Array<Item>;
  orders: Array<Order>;
  product?: Maybe<Product>;
  products: Array<Product>;
  user: User;
  userOrder: OrderResponse;
  users: Array<User>;
};


export type QueryOrderArgs = {
  id: Scalars['Int'];
};


export type QueryOrderItemsArgs = {
  orderId: Scalars['Int'];
};


export type QueryProductArgs = {
  id: Scalars['Int'];
};


export type QueryProductsArgs = {
  category?: InputMaybe<Scalars['String']>;
};


export type QueryUserArgs = {
  username: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  created: Scalars['String'];
  currentOrderId: Scalars['Float'];
  id: Scalars['Float'];
  isOrdering: Scalars['Boolean'];
  orders: Array<Order>;
  updated: Scalars['String'];
  username: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type UserFieldsFragment = { __typename?: 'User', id: number, username: string };

export type AddItemMutationVariables = Exact<{
  productId: Scalars['Int'];
  quantity: Scalars['Int'];
}>;


export type AddItemMutation = { __typename?: 'Mutation', addItem?: { __typename?: 'ItemResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, item?: { __typename?: 'Item', id: number, quantity: number, created: string, updated: string, order: { __typename?: 'Order', id: number }, product: { __typename?: 'Product', id: number, itemId: number } } | null } | null };

export type EditItemMutationVariables = Exact<{
  quantity: Scalars['Int'];
  productId: Scalars['Int'];
}>;


export type EditItemMutation = { __typename?: 'Mutation', editItem: { __typename?: 'ItemResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, item?: { __typename?: 'Item', quantity: number, created: string, updated: string, order: { __typename?: 'Order', id: number }, product: { __typename?: 'Product', id: number } } | null } };

export type LoginMutationVariables = Exact<{
  password: Scalars['String'];
  username: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: number, username: string } | null } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type RegisterMutationVariables = Exact<{
  password: Scalars['String'];
  username: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: number, username: string } | null } };

export type RemoveItemMutationVariables = Exact<{
  productId: Scalars['Int'];
}>;


export type RemoveItemMutation = { __typename?: 'Mutation', removeItem: { __typename?: 'ItemResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, item?: { __typename?: 'Item', quantity: number, created: string, updated: string } | null } };

export type SubmitOrderMutationVariables = Exact<{ [key: string]: never; }>;


export type SubmitOrderMutation = { __typename?: 'Mutation', submitOrder: boolean };

export type ConninfoQueryVariables = Exact<{ [key: string]: never; }>;


export type ConninfoQuery = { __typename?: 'Query', conninfo?: { __typename?: 'User', id: number, username: string } | null };

export type ProductsQueryVariables = Exact<{
  category?: InputMaybe<Scalars['String']>;
}>;


export type ProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', cost: number, nameEng: string, effect: string, text: string, sprite: string, id: number }> };

export type UserOrderQueryVariables = Exact<{ [key: string]: never; }>;


export type UserOrderQuery = { __typename?: 'Query', userOrder: { __typename?: 'OrderResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, order?: { __typename?: 'Order', id: number, created: string, updated: string, user: { __typename?: 'User', id: number, username: string }, items: Array<{ __typename?: 'Item', id: number, quantity: number, created: string, updated: string, product: { __typename?: 'Product', id: number, itemId: number, name: string, nameEng: string, cost: number, text: string, sprite: string, category: string, created: string, updated: string } }> } | null } };

export const UserFieldsFragmentDoc = gql`
    fragment userFields on User {
  id
  username
}
    `;
export const AddItemDocument = gql`
    mutation AddItem($productId: Int!, $quantity: Int!) {
  addItem(productId: $productId, quantity: $quantity) {
    errors {
      field
      message
    }
    item {
      id
      quantity
      created
      updated
      order {
        id
      }
      product {
        id
        itemId
      }
    }
  }
}
    `;

export function useAddItemMutation() {
  return Urql.useMutation<AddItemMutation, AddItemMutationVariables>(AddItemDocument);
};
export const EditItemDocument = gql`
    mutation EditItem($quantity: Int!, $productId: Int!) {
  editItem(quantity: $quantity, productId: $productId) {
    errors {
      field
      message
    }
    item {
      quantity
      created
      updated
      order {
        id
      }
      product {
        id
      }
    }
  }
}
    `;

export function useEditItemMutation() {
  return Urql.useMutation<EditItemMutation, EditItemMutationVariables>(EditItemDocument);
};
export const LoginDocument = gql`
    mutation Login($password: String!, $username: String!) {
  login(password: $password, username: $username) {
    errors {
      field
      message
    }
    user {
      ...userFields
    }
  }
}
    ${UserFieldsFragmentDoc}`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const RegisterDocument = gql`
    mutation Register($password: String!, $username: String!) {
  register(password: $password, username: $username) {
    errors {
      field
      message
    }
    user {
      ...userFields
    }
  }
}
    ${UserFieldsFragmentDoc}`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const RemoveItemDocument = gql`
    mutation RemoveItem($productId: Int!) {
  removeItem(productId: $productId) {
    errors {
      field
      message
    }
    item {
      quantity
      created
      updated
    }
  }
}
    `;

export function useRemoveItemMutation() {
  return Urql.useMutation<RemoveItemMutation, RemoveItemMutationVariables>(RemoveItemDocument);
};
export const SubmitOrderDocument = gql`
    mutation submitOrder {
  submitOrder
}
    `;

export function useSubmitOrderMutation() {
  return Urql.useMutation<SubmitOrderMutation, SubmitOrderMutationVariables>(SubmitOrderDocument);
};
export const ConninfoDocument = gql`
    query Conninfo {
  conninfo {
    ...userFields
  }
}
    ${UserFieldsFragmentDoc}`;

export function useConninfoQuery(options?: Omit<Urql.UseQueryArgs<ConninfoQueryVariables>, 'query'>) {
  return Urql.useQuery<ConninfoQuery>({ query: ConninfoDocument, ...options });
};
export const ProductsDocument = gql`
    query Products($category: String) {
  products(category: $category) {
    cost
    nameEng
    effect
    text
    sprite
    id
  }
}
    `;

export function useProductsQuery(options?: Omit<Urql.UseQueryArgs<ProductsQueryVariables>, 'query'>) {
  return Urql.useQuery<ProductsQuery>({ query: ProductsDocument, ...options });
};
export const UserOrderDocument = gql`
    query UserOrder {
  userOrder {
    errors {
      field
      message
    }
    order {
      id
      created
      updated
      user {
        id
        username
      }
      items {
        id
        quantity
        created
        updated
        product {
          id
          itemId
          name
          nameEng
          cost
          text
          sprite
          category
          created
          updated
        }
      }
    }
  }
}
    `;

export function useUserOrderQuery(options?: Omit<Urql.UseQueryArgs<UserOrderQueryVariables>, 'query'>) {
  return Urql.useQuery<UserOrderQuery>({ query: UserOrderDocument, ...options });
};