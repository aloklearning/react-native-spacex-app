# SpaceX 

- Welcome to the Project. This is project is purely done on the `React Native` front-end framework.
- This project will give you an overview of two of the queryable categories of SpaceX organisation
- For best experience, please run the application with an active internet connection, since the app is very basic version and doesn't check for the internet connection.
- There is a video file which is also stored into this project for showing the app work, if the required person is unable to run the app by any chance. The video file will be found in the porject folder, having name as `App Recording`

## Features

- This project consists of SpaceX information which is using coming from consuming API which is provided by [Sentiance](https://www.sentiance.com/) for completing this project
- We can see the categories, and sub-categories of the queriable category
- We can see the listing of the sub-categories in the app
- We can also see the details of those listings in the app 
- There is an `About Company` Page there, which helps you get more insights about the Company.
- We can visit their social networking links on the app itself. We don't have to go outside the app to view this as well, as we have an in-app webview facility available
- You can always go on top of the details list without having any inconience to scroll to top. We have a button for you which can take you to the top, if you have come very far way in exploring the list.

## Initial Setup 

- If you are new to `React-Native`, and want to run this application, please follow this link [React Native Setup](https://reactnative.dev/docs/environment-setup) to install and setup the framework efficiently
- Once done, you can go to the root directory of the project, do these before you move ahead:
    - Remove `node_modules` and `package-lock.json` from the root project
    - Remove `Pods` and `Podfile.lock` from the `root/ios/`
    - Run the `npm install` in the root directory
    - Go into the `ios` folder, and then run `pod update && pod install`
    - Come out of the `ios` folder, and run these commands **[Best Practise]**:
        ```
        npm run start [In one terminal]
        npm run ios [In another terminal]
        ```
- After doing this, your app will start running perfectly

## Assumptions

- The app's UI/UX is purely as per my thoughts, and the way I felt the app would look better. Tried my level best to give the user the best I can in the given time for submission.
- I have assumed that, I have the liberty to showcase the queryable type, as the statement says to `view any one of them`. 
- Since the API content was not same for evey queryable type, hence chosen the most common matching types
- In the documentation, it has said to use version `V4`, in respect of `V3`. Somehow, `V4` response was not coming fine `/cores/upcoming`. So, used `V3` only, since it returns `[]`, in place of `undefined` in `V4`, to avoid any crashes in the app
- I have assumed that while using `Mobile Application Framework` will not require me to host or provide the installable file. A zipped project would work, since the team wants to see the quality and the functionality of the code. For the convenience, I have added the video recording in the folder too.
- Have assumed that a `minimal viable version` of the app is required for the submission, and not with complex UI/UX.

## Libraries Used
- [React Navigation Libraries](https://reactnavigation.org/docs/getting-started) listed in the docs to perform the navigation related task in the app
- React Hooks used for performing things like `state management` -> [useState](https://reactjs.org/docs/hooks-reference.html#usestate), `handling lifecycle events` -> [useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect), and `reference` -> [useRef](https://reactjs.org/docs/hooks-reference.html#useref)
- Inbuilt libraries used to perform some UI functionalities like [ActivityIndicator](https://reactnative.dev/docs/activityindicator) while calling the API, and [Modal](https://reactnative.dev/docs/modal) to showcase the data.
- [React Native Webview](https://www.npmjs.com/package/react-native-webview) to view the Social Network links of SpaceX in the app itself.
