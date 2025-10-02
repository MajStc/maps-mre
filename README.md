# React Native Maps Bug - Minimum Reproducible Example

This is a minimum reproducible example (MRE) demonstrating a bug in React Native Maps when navigating between screens containing MapView components.

## Bug Description

**Issue**: NullPointerException occurs when navigating between screens containing MapView components, specifically during the `onSaveInstanceState` lifecycle method.

**Error**:

```
FATAL EXCEPTION: main
Process: com.mapsmre, PID: 19104
java.lang.NullPointerException: Attempt to invoke interface method 'void com.google.maps.api.android.lib6.impl.bp.z(android.os.Bundle)' on a null object reference
	at com.google.maps.api.android.lib6.impl.ct.k(:com.google.android.gms.dynamite_mapsdynamite@252635035@25.26.35 (260400-0):3)
	at com.google.android.gms.maps.internal.p.be(:com.google.android.gms.dynamite_mapsdynamite@252635035@25.26.35 (260400-0):109)
	...
	at com.rnmaps.maps.MapView.onDetachedFromWindow(MapView.java:341)
```

## Reproduction Steps

1. Install dependencies: `npm install`
2. Run the app: `npm run android`
3. Follow the screen flow as suggested by the buttons:
   - Start at **OGMap** screen (contains MapView)
   - Tap "Go to MiddleWareToAnotherMap" button
   - Tap "Go to NewMap" button (contains another MapView)
   - Navigate back and forth between screens

The crash typically occurs when navigating away from a screen containing a MapView component.

## Technical Details

- **React Native Maps version**: 1.26.13
- **React Native version**: 0.81.4
- **Expo version**: 54.0.1
- **Platform**: Android
- **Navigation**: React Navigation Native Stack

## Quick Start

1. **Install dependencies**:

   ```sh
   npm install
   ```

2. **Run the app**:

   ```sh
   npm run android
   ```

3. **Reproduce the bug**:
   - Follow the button flow: OGMap → MiddleWareToAnotherMap → NewMap
   - Navigate back and forth between screens
   - The crash should occur when navigating away from MapView screens

## Project Structure

- `src/navigation/maps/OGMap.tsx` - Initial screen with MapView
- `src/navigation/maps/MiddlewareToAnotherMap.tsx` - Middleware screen (no MapView)
- `src/navigation/maps/NewMap.tsx` - Second screen with MapView
- Navigation flow: OGMap → MiddlewareToAnotherMap → NewMap

## Related Issues

This MRE demonstrates a known issue with React Native Maps when used with React Navigation. The bug occurs during the Android lifecycle management of MapView components.

## Resources

- [React Native Maps documentation](https://github.com/react-native-maps/react-native-maps)
- [React Navigation documentation](https://reactnavigation.org/)
- [Expo documentation](https://docs.expo.dev/)

---

**Note**: This is a minimal reproducible example created to demonstrate the bug. The issue appears to be related to the interaction between React Native Maps and React Navigation's screen lifecycle management on Android.
