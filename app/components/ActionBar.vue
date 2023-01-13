<template>
  <ActionBar class="action-bar">
    <NavigationButton visibility="hidden" />
    <StackLayout>
      <GridLayout columns="auto, *, auto">
        <Label
          class="action-bar-title text-center text-gray-200 text-lg font-extrabold"
          col="1"
          :text="currentPage"
        />
        <Label
          class="action-bar-icon text-gray-200 fas text-xl"
          col="0"
          text.decode="&#xf0c9;"
          @tap="onDrawerButtonTap"
        />
        <Label
          class="action-bar-icon text-gray-200 fas text-xl mr-2"
          col="2"
          text.decode="&#xf0f3;"
          @tap="onDrawerButtonTap"
        />
      </GridLayout>
      <GridLayout columns="*, *, *, *">
        <FlexboxLayout
          col="0"
          class="justify-center items-center"
          @tap="onNavigationItemTap(activeNav)"
        >
          <Label text.decode="&#xf015;" :class="active" />
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
          <Label text.decode="&#xf21e;" :class="inactive" />
        </FlexboxLayout>
        <FlexboxLayout
          col="3"
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
      active:
        "fas text-xl text-gray-600 bg-slate-200 p-4 rounded-tl-full rounded-tr-full",
      inactive: "fas text-center text-xl text-gray-200",
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
  background-color: #1e81b0;
}
</style>
