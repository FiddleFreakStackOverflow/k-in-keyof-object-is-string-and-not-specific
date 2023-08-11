import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';
import type {
  DefaultNavigatorOptions,
  ParamListBase,
  StackNavigationState,
  StackRouterOptions,
  TypedNavigator
} from '@react-navigation/native';
import type { NativeStackNavigationEventMap, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import type { NativeStackNavigationConfig } from '@react-navigation/native-stack/lib/typescript/src/types';

type NavigationStackProps = DefaultNavigatorOptions<
  ParamListBase,
  StackNavigationState<ParamListBase>,
  NativeStackNavigationOptions,
  NativeStackNavigationEventMap
> &
  StackRouterOptions &
  NativeStackNavigationConfig;

type NavigationStack = TypedNavigator<
  StackParamsList,
  StackNavigationState<ParamListBase>,
  NativeStackNavigationOptions,
  NativeStackNavigationEventMap,
  ({ id, initialRouteName, children, screenListeners, screenOptions, ...rest }: NavigationStackProps) => JSX.Element
>;

type StackParamsList = {
  dashboard: undefined;
  'hamburger-list-modal': undefined;
  'inventory-main': undefined;
  'inventory-product': undefined;
  loading: undefined;
  login: undefined;
  settings: undefined;
  'settings-initial': undefined;
};

type StackGroupType = 'main' | 'loading' | 'auth' | 'settingsInitial';

type ScreenSelection = { route: keyof StackParamsList; screenTitle: string; stackGroupType: StackGroupType };

interface MainScreenSelections {
  dashboard: ScreenSelection;
  hamburgerListModal: ScreenSelection;
  inventoryMain: ScreenSelection;
  inventoryProduct: ScreenSelection;
  loading: ScreenSelection;
  login: ScreenSelection;
  settings: ScreenSelection;
  settingsInitial: ScreenSelection;
}

type Screens = Partial<{
  [K in keyof StackParamsList]: { screen: JSX.Element; screenTitle: string; stackGroupType: StackGroupType };
}>;

const mainScreenSelections: MainScreenSelections = {
  dashboard: { route: 'dashboard', screenTitle: 'Dashboard', stackGroupType: 'main' },
  hamburgerListModal: { route: 'hamburger-list-modal', screenTitle: '', stackGroupType: 'main' },
  inventoryMain: { route: 'inventory-main', screenTitle: 'Inventory', stackGroupType: 'main' },
  inventoryProduct: { route: 'inventory-product', screenTitle: 'Inventory', stackGroupType: 'main' },
  loading: { route: 'loading', screenTitle: '', stackGroupType: 'loading' },
  login: { route: 'login', screenTitle: 'Login', stackGroupType: 'auth' },
  settings: { route: 'settings', screenTitle: 'Settings', stackGroupType: 'main' },
  settingsInitial: { route: 'settings-initial', screenTitle: 'Settings', stackGroupType: 'settingsInitial' }
};

const defaultHome: ScreenSelection = {
  route: mainScreenSelections.dashboard.route,
  screenTitle: mainScreenSelections.dashboard.screenTitle,
  stackGroupType: mainScreenSelections.dashboard.stackGroupType
};

function Dashboard(): JSX.Element {
  return (
    <View>
      <Text>Dashboard</Text>
    </View>
  );
}

function Settings(): JSX.Element {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
}

function InventoryMain(): JSX.Element {
  return (
    <View>
      <Text>InventoryMain</Text>
    </View>
  );
}

function InventoryProduct(): JSX.Element {
  return (
    <View>
      <Text>InventoryProduct</Text>
    </View>
  );
}

const screens: Screens = {
  [mainScreenSelections.dashboard.route]: {
    screen: Dashboard,
    screenTitle: mainScreenSelections.dashboard.screenTitle,
    stackGroupType: mainScreenSelections.dashboard.stackGroupType
  },
  [mainScreenSelections.settings.route]: {
    screen: Settings,
    screenTitle: mainScreenSelections.settings.screenTitle,
    stackGroupType: mainScreenSelections.settings.stackGroupType
  },
  [mainScreenSelections.inventoryMain.route]: {
    screen: InventoryMain,
    screenTitle: mainScreenSelections.inventoryMain.screenTitle,
    stackGroupType: mainScreenSelections.inventoryMain.stackGroupType
  },
  [mainScreenSelections.inventoryProduct.route]: {
    screen: InventoryProduct,
    screenTitle: mainScreenSelections.inventoryProduct.screenTitle,
    stackGroupType: mainScreenSelections.inventoryProduct.stackGroupType
  }
};

function getScreensWithoutHome(Stack: NavigationStack, defaultHome: ScreenSelection) {
  const screensWithoutHome: Screens = Object.entries(screens).filter((key, value) => key !== defaultHome.route);
}

function GroupMain(Stack: NavigationStack): ReactNode {
  return (
    <Stack.Group>
      <Stack.Screen
        name={defaultHome.route}
        component={screens[defaultHome.route].screen}
        options={{ title: defaultHome.route }}
      />
      <Stack.Screen
        name={mainScreenSelections.settings.route}
        component={Settings}
        options={{
          title: mainScreenSelections.settings.screenTitle
        }}
      />
      <Stack.Screen
        name={mainScreenSelections.inventoryMain.route}
        component={InventoryMain}
        options={{
          title: mainScreenSelections.inventoryMain.screenTitle
        }}
      />
      <Stack.Screen
        name={mainScreenSelections.inventoryProduct.route}
        component={InventoryProduct}
        options={{
          title: mainScreenSelections.inventoryProduct.screenTitle
        }}
      />
    </Stack.Group>
  );
}
