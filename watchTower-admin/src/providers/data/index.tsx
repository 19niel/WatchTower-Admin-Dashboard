import graphqlDataProvider, { GraphQLClient } from "@refinedev/nestjs-query";
import { createClient } from 'graphql-ws';
import { fetchWrapper } from "./fetch-wrapper";

export const API_BASE_URL = 'https://api.crm.refine.dev'
export const API_URL = 'https://api.crm.refine.dev'
export const WS_URL = 'wss://api.crm.refine.dev/graphql'

export const client = new GraphQLClient(API_URL, {
  fetch: (url: string, options:RequestInit) => { // callback funciton that accepts url as a typestring
    try {
        return fetchWrapper(url, options); // automatic authorization and error handling
    } catch (error){
        return Promise.reject(error as Error) 
    }
  }
})

export const wsClient = typeof window !== "undefined" // Authorization and Error Handling
? createClient({
  url: WS_URL,
  connectionParams: () => { // getting the access token
    const accessToken = localStorage.getItem("access_token");

    return {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      }
    }

  } 
})
: undefined // in case it is not in the browser

export const dataProvider = graphqlDataProvider(client); // takes the graphQL Client and returns a data provider
export const liveProvider = graphql 