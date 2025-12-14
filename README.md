## ProductList App

React Native demo that lists products with search, sort, selection, delete, and cart/collection flows. Built with React Navigation, Redux Toolkit, FastImage, and vector icons.

### Features

- Browse mock products with images, price, and tags.
- Search bar and sort toggle (asc/desc/none).
- Select items, delete, and mark as collected (heart).
- Cart screen and deleted items screen for simple state management.

### Prerequisites

- Node 18+ and npm (or Yarn).
- Watchman (macOS) recommended.
- Xcode with CocoaPods for iOS.
- Android Studio + SDK/NDK for Android.
- Ruby + CocoaPods (`gem install cocoapods`) if not already available.

### Install dependencies

```bash
cd /Users/ahmedkotp/Desktop/productList
npm install
```

### iOS setup & run

```bash
cd ios
LANG=en_US.UTF-8 LC_ALL=en_US.UTF-8 pod install
cd ..
npx react-native run-ios
```

- If using Xcode: open `ios/productList.xcworkspace`, then Product > Clean Build Folder, Build & Run.
- If you previously installed the app on the simulator/device, uninstall before rerunning to avoid cached assets.

### Android setup & run

```bash
cd /Users/ahmedkotp/Desktop/productList
npx react-native run-android
```

- Ensure an emulator or device is running and has developer mode enabled.
- If build cache issues appear, run `cd android && ./gradlew clean`, then rerun the command above.

### Metro

If you hit resolution or caching issues:

```bash
npx react-native start --reset-cache
```

### Notes

- Vector icons (Ionicons) are linked via `react-native-asset`; font lives in `android/app/src/main/assets/fonts` and iOS Resources.
- Uses Hermes (default in RN 0.76). Keep Node 18+ as declared in `package.json`.
  This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
