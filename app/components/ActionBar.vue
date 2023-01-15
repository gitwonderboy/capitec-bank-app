<template>
  <ActionBar class="action-bar">
    <NavigationButton visibility="hidden" />
    <StackLayout>
      <GridLayout columns="*, auto" class="mt-2">
        <FlexboxLayout col="0" class="justify-start items-start">
          <Image class="globalonelogo w-32 mt-3" src="~/asserts/img/globalonelogo.png" />
        </FlexboxLayout>
        <Label
          class="action-bar-icon text-blue-400 fas text-xl mr-2"
          col="1"
          text.decode="&#xf002;"
          @tap="onDrawerButtonTap"
        />
      </GridLayout>

      <GridLayout columns="*, *, *, *, *" class="mt-2">
        <FlexboxLayout
          col="0"
          class="justify-center items-center"
          @tap="onNavigationItemTap(activeNav)"
        >
          <Label text.decode="&#xf015;" :class="inactive" />
        </FlexboxLayout>

        <FlexboxLayout
          col="1"
          class="justify-center items-center"
          @tap="onNavigationItemTap(activeNav)"
        >
          <Label text.decode="&#xf271;" :class="inactive" />
        </FlexboxLayout>

        <FlexboxLayout
          col="2"
          class="justify-center items-center"
          @tap="onNavigationItemTap(activeNav)"
        >
          <StackLayout :class="active">
            <Image class="capiteclogo w-9" src="~/asserts/img/cap-logo.png" />
          </StackLayout>
        </FlexboxLayout>

        <FlexboxLayout
          col="3"
          class="justify-center items-center"
          @tap="onNavigationItemTap(activeNav)"
        >
          <Label text.decode="&#xf0f0;" :class="inactive" />
        </FlexboxLayout>

        <FlexboxLayout
          col="4"
          class="justify-center items-center"
          @tap="onNavigationItemTap(activeNav)"
        >
          <Label text.decode="&#xf0f0;" :class="inactive" />
        </FlexboxLayout>
      </GridLayout>
    </StackLayout>
  </ActionBar>
</template>

<script>
import * as utils from "~/shared/utils";

export default {
  props: ["currentPage"],

  data() {
    return {
      active: "active-icon bg-white p-2 rounded-tl-full rounded-tr-full",
      inactive: "inactive-icon fas text-blue-400 text-center text-xl font-extrabold",
    };
  },

  methods: {
    activeNav() {},

    onNavigationItemTap(component) {
      this.$navigateTo(component, {
        clearHistory: false,
      });
    },

    onDrawerButtonTap() {
      utils.showDrawer();
    },
  },
};
</script>

<style scoped lang="css">
.action-bar {
  background-color: #f7f7f7;
}
</style>
