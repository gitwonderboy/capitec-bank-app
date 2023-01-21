<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <NavigationButton visibility="hidden" />
      <StackLayout>
        <GridLayout columns="100">
          <Image col="0" class="globalonelogo" src="~/asserts/img/globalonelogo.png" />
        </GridLayout>
      </StackLayout>
    </ActionBar>

    <StackLayout class="page-container">
      <SliderPage />
      <StackLayout class="w-full mt-4">
        <GridLayout rows="auto" columns="auto, *">
          <Label class="key-icon fas text-xl pl-3 mt-5" col="0" text.decode="&#xf023;" />
          <TextField
            col="1"
            secure="true"
            keyboardType="number"
            maxLength="4"
            :text="pin"
            hint="Remote PIN"
            class="text-lg mt-2"
          />
        </GridLayout>
        <StackLayout class="mt-5" @tap="onNavigationItemTap(HomePage)">
          <Button
            text="SIGN IN"
            class="bg-blue-500 text-lg text-white font-bold rounded-xl"
          ></Button>
        </StackLayout>
        <GridLayout rows="auto" columns="*,*" class="mt-2">
          <FlexboxLayout col="0" class="justify-start items-start">
            <Label text="Switch Account" textWrap="true" class="text-sm font-bold ml-4" />
          </FlexboxLayout>
          <FlexboxLayout col="1" class="justify-end items-end">
            <Label
              text="Forgot Password"
              textWrap="true"
              class="text-sm font-bold mr-4"
            />
          </FlexboxLayout>
        </GridLayout>
      </StackLayout>
    </StackLayout>
  </Page>
</template>

<script>
import HomePage from "./HomePage";
import SliderPage from "./SliderPage";

export default {
  data() {
    return {
      pin: "",
      currentPage: "Global One",
      HomePage: HomePage,
    };
  },

  methods: {
    onNavigationItemTap(component) {
      this.$navigateTo(component, {
        clearHistory: true,
      });
    },
  },

  components: {
    HomePage,
    SliderPage,
  },
};
</script>

<style scoped lang="css">
.key-icon {
  color: #1e81b0;
}

.action-bar {
  background-color: #f7f7f7;
}

.ratings .ratings-container .rating {
  background-color: #1e81b0;
}

.container {
  padding: 10px 5px;
}

.card-container .card {
  margin-bottom: 10px;
}

.quick-menu-container .quick-menu {
  background-color: #1e81b0;
}
.ratings .rating-icon {
  font-size: 15px;
}

.ratings .rating-title {
  font-size: 10px;
}

.coffee-card-container {
  background-image: linear-gradient(135deg, #2b2b2b 0%, #121212 100%);
}
</style>
