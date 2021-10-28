// This will be used to make a call to the API with the baseURL
// for the ease of the user, so that they don't have to repoeat the code
export default class API {
    // Making it a singleton class to avoid recreating the class again and again
    // while using this class at multiple places
    static instance = API.instance || new API();

    getData = async (route) => {
        const baseURL = 'https://api.spacexdata.com/v3';
        const finalURL = baseURL + route;

        try {
            let response = await fetch(finalURL);
            let jsonData = await response.json();

            return jsonData;
        } catch (error) {
            console.log(`${error.message} caused while calling ${finalURL}`)
        }
    }
}