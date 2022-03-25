# Getting Started with App

- Listing Missions Feed where the ambassador can see the missions available for him.
- Support translation for English and Spanish
- Infinit S

## Run Locally 

- Yarn && yarn start

# Documentation

- Shared Components :
    - `LoadingError` 

        | Input | Description | Default Value |
        | --- | --- | --- |
        | `query` |  gqlQuery |  |
        | `variables` | variable object in use of gqlQuery |  |
        | `isInfinit` | control the displaying of children component when rendered | true |
       
        ## Usage
        ```jsx
        <LoadingError query={GQLQueries.GET_FEED} variables={variable}>
            {({ value }: { value: IFeesReponse }) => (

                // Children component 
            )}
        </LoadingError>
        ```

    - `UseScrollLoader` 

        | Input | Description | Default Value |
        | --- | --- | --- |
        | `hasNext` |  prop that tell if we hook will call new fetch |  |
        | `onNextPageChange` | function responses for querying next page |  |
        
       
        ## Usage
        ```jsx
        // add lastElementRef to component in which will call onNextPageChange on onNextPageChange the element in the page 

        const lastElementRef = UseScrollLoader({ hasNext, onNextPageChange });


        ```

    - `LangContext` 

        | Input | Description | Default Value |
        | --- | --- | --- |
        | `lang` |  define the requested language |  |
        
       
        ## Usage
        ```jsx

        // It returns { useLangContext, LangContextProvider } 

        // Access Provider 
        <LangContextProvider lang={lang}>
        // Children component 
        </LangContextProvider>


        // Access Context as it returns tha current value of the translateObj
        const translateObj = useLangContext();


        ```


- Shared Services :
    - `gqlQueries` : Class wraps Queries that will be used and accessed 
    - `utils` : Class includes utilizes functions that can be used across the system 
    - `translate` : Class defines resources of supported language and any related functions to use in translation

# using Random User public API to list and diplay next 
- List Users => Next users => "https://randomuser.me/api/?page=${page}&results=${limit}"
- Fetch one User => "https://randomuser.me/api/"


# using freetogame public API to list and diplay 
[It might cause a core error] =>  use cores changer ext for chroume to solve this issue 
- List Games => "https://www.freetogame.com/api/games"
- Fetch oneGame and display its data => "https://www.freetogame.com/api/game?id=''"





