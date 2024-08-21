import { GraphQLClient } from "@refinedev/nestjs-query";
import {GraphQLFormattedError} from 'graphql';

type Error = {
    message: string;
    statusCode: string;
}

// as Middleware happening on top or before every single fetch that has been made
const customFetch = async (url: string, options: RequestInit) =>{
    const accessToken = localStorage.getItem('access_token');

    const headers = options.headers as Record<string, string>; // creating a type right here

    return await fetch(url, {
        ...options,
        headers: {
            ...headers,
            Authorization :  headers?.Authorization || `Bearer ${accessToken}`,
            "Content-Type": "application/json",
            "Apollo-Require-Prefight": "true",
        }
    })
}

const getGraphQLErrors = (body: Record<"errors", GraphQLFormattedError[] | undefined>): 
Error | null => { // this function is a custom error handling function
    if (!body){
        return {
            message: 'Unknown error',
            statusCode: "INTERNAL_SERVER_ERROR"
        }
    }

    if ("errors" in body){ // if there are errors in the body then get the errors
        const errors = body?.errors;

        const messages = errors?.map((error) => error?.message)?.join(""); // turn errors messages into one string

        const code = errors?.[0]?.extensions?.code;

        return{
            message: messages || JSON.stringify(errors),
            statusCode: code || 500
        }
    }
    return null;
}

export const fetchWrapper = async (url: string, options: RequestInit) => {
    const response = await customFetch(url, options); // making the request by passing the url and the options 
    const responseClone = response.clone(); // process the response in multiple ways do call the responseClone
    const body = await responseClone.json(); // get the body 

    const error = getGraphQLErrors(body); // call the function and pass the body

    if(error) {
        throw error;
    }

    return response;
}