<template>
  <Page class="page booking">
    <ActionBar :currentPage="currentPage" />
    stack
    <StackLayout class="page-container">
      <StackLayout>
        <HeadPage :headTitle="headTitle" :imgSrc="imgSrc" />
        <StackLayout row="1" class="carousel-bottoms">
          <GridLayout columns="*,*" rows="50" class="bottoms">
            <FlexboxLayout
              col="0"
              class="bottom justify-center items-center rounded-xl mr-1"
            >
              <StackLayout>
                <Label
                  text="Morning Session"
                  class="bottom-title text-gray-100 font-bold"
                />
                <Label
                  text="08 : 30 AM - 12 : 00 PM"
                  class="bottom-title text-gray-100 font-bold"
                />
              </StackLayout>
            </FlexboxLayout>
            <FlexboxLayout
              col="1"
              class="bottom justify-center items-center rounded-xl ml-1"
            >
              <StackLayout>
                <Label text="Afternoon" class="bottom-title text-gray-100 font-bold" />
                <Label
                  text="12 : 00 PM - 17 : 30 PM"
                  class="bottom-title text-gray-100 font-bold"
                />
              </StackLayout>
            </FlexboxLayout>
          </GridLayout>
        </StackLayout>
      </StackLayout>

      <ScrollView orientation="vertical Session" height="750">
        <StackLayout class="page-wrapper"> </StackLayout>
      </ScrollView>
    </StackLayout>
  </Page>
</template>

<script>
import ActionBar from "./ActionBar";
import HeadPage from "./HeadPage";

export default {
  data() {
    return {
      currentPage: "ABOUT US",
      headTitle: "About Us",
      imgSrc: "~/asserts/img/coffee-shop.png",
    };
  },

  methods: {
    onDrawerButtonTap() {
      utils.showDrawer();
    },
  },

  components: {
    ActionBar,
    HeadPage,
  },
};
</script>

<style scoped lang="css">
.find-slot {
  background-color: #78cec8;
}

.carousel-bottoms .bottoms .bottom {
  background: rgb(115, 34, 195);
  background: linear-gradient(0deg, rgba(115, 34, 195, 1) 25%, rgba(45, 196, 253, 1) 95%);
  background-color: #1e81b0;
}

.carousel-bottoms .bottoms {
  padding: 0 15px;
}
</style>
