### Step to get project running


* #### Step 1:  Get ready with React Native with [official document.](https://facebook.github.io/react-native/docs/getting-started.html)

* #### Step 2:  clone the repo, then navigate to root folder, then run `yarn install` or `npm install`

* #### Step 3:  For IOS only: please navigate to /ios folder and run 
```######
pod install
```


* #### Step 3:  Run the project:
```######
Android:
npm run debug:alpha
```
```######
iOS:
react-native run-ios
```
or just open the xcode project then build and run via xcode

### Demostration video

[![Video](https://i.ytimg.com/vi/TifTWuBEHok/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCQJzfDXsJme58vX3JG9CjQaMeVvw)](https://www.youtube.com/watch?v=TifTWuBEHok)

### Mockserver

* Endpoint: http://tobeadev.com/test/DriverGuideSever/random.php
* Method: GET
* Params: clat, clong, token: string. It will random 2 point around the point(clat, clong). The token param: FCM device token thatcan get from clipboard after the app run.

Example: [LINK](http://tobeadev.com/test/DriverGuideSever/random.php?clat=10.785092&clong=106.693526&token=eKORJBtQCOg:APA91bE8HfM7t4GPwhMNdf_lII8FZD89YSU63-az8n00w5Tqg1WSPem76d-zlltXzXFJxlkBQgfYo9HWD2AW4N1K5DBnkVnO2g5qtgd7-IUSzJ0dcfDyLxj90YofXYat77uUTtXYqDwm)
