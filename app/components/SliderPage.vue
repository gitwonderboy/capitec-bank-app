<template>
  <GridLayout rows="auto,auto" columns="*">
    <StackLayout row="0" class="carousel mt-0">
      <Image class="rounded-b-2xl" src="~/asserts/img/hello.png" stretch="aspectFill" />
    </StackLayout>
    <StackLayout row="1" class="carousel-bottoms px-1 mb-4 mt-6">
      <ScrollView
        scrollBarIndicatorVisible="false"
        orientation="horizontal"
        height="auto"
        class="products-scroll-view"
      >
        <FlexboxLayout class="bottoms-container">
          <FlexboxLayout
            v-for="(item, index) in slider"
            :key="index"
            col="0"
            class="bottom justify-center items-center rounded-full px-3 py-2 mr-1"
            @tap="viewProduct(item)"
          >
            <Image class="bottom-icon rounded-full h-8 w-8 mr-2" :src="item.img" />
            <Label
              :text="item.name"
              textWrap="true"
              class="bottom-title text-gray-100 font-bold"
            />
          </FlexboxLayout>
        </FlexboxLayout>
      </ScrollView>
    </StackLayout>
  </GridLayout>
</template>
<script>
import ViewPage from "./ViewPage";
export default {
  data() {
    return {
      ViewPage: ViewPage,
      slider: [
        {
          name: "Buy Prepaid Mobile",
          price: 12.0,
          img: "~/asserts/img/buyprepaidmobile.png",
        },
        { name: "Buy Electricity", price: 15.0, img: "~/asserts/img/2.png" },
        { name: "Pay Beneficiary", price: 20.0, img: "~/asserts/img/4.png" },
        { name: "Transfer Money", price: 15.0, img: "~/asserts/img/muffin.png" },
        { name: "Track Money", price: 15.0, img: "~/asserts/img/6.png" },
        { name: "Send Cash", price: 27.0, img: "~/asserts/img/1.png" },
      ],
    };
  },
  methods: {
    onNavigationItemTap(component) {
      this.$navigateTo(component, {
        clearHistory: false,
      });
    },

    viewProduct(item) {
      this.$navigateTo(ViewPage, {
        props: { item: item },
        clearHistory: false,
      });
    },
  },
  components: {
    ViewPage,
  },
};
</script>
<style scoped lang="css">
.bottoms-container .bottom-icon {
  background-color: white;
}

.bottoms-container .bottom {
  background: rgb(30, 129, 176);
  background: linear-gradient(180deg, rgba(30, 129, 176, 1) 13%, rgba(0, 72, 109, 1) 73%);
}
</style>
