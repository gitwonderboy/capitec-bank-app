<template>
  <RadSideDrawer
    ref="drawer"
    drawerLocation="Left"
    gesturesEnabled="true"
    :drawerTransition="transition"
  >
    <StackLayout ~drawerContent backgroundColor="#ffffff">
      <DrawerContent />
    </StackLayout>
    <Frame ~mainContent ref="drawerMainContent">
      <LoginPage />
    </Frame>
  </RadSideDrawer>
</template>

<script>
import DrawerContent from "./DrawerContent";
import LoginPage from "./LoginPage";
import { SlideInOnTopTransition } from "nativescript-ui-sidedrawer";

export default {
  data() {
    return {
      transition: new SlideInOnTopTransition(),
    };
  },

  components: {
    DrawerContent,
    LoginPage,
  },
};
</script>
