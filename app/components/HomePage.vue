<template>
  <Page class="page view">
    <ActionBar :currentPage="currentPage" />
    <ScrollView orientation="vertical Session" height="auto">
      <StackLayout class="home-page-container">
        <StackLayout class="carousel-bottoms white">
          <Image
            class="carousel-img w-60 mt-5"
            src="~/asserts/img/capitec-card.png"
            stretch="aspectFill"
          />

          <StackLayout class="bottoms rounded-t-3xl">
            <GridLayout columns="*,*" rows="100" class="bottom">
              <FlexboxLayout col="0" class="bottom items-center ml-5">
                <StackLayout>
                  <Label
                    text="Savings Account"
                    class="bottom-title text-base text-black font-extrabold uppercase"
                  />
                  <Label text="Account Balance" class="text-gray-500 text-base" />
                </StackLayout>
              </FlexboxLayout>

              <FlexboxLayout col="1" class="bottom-controls items-center">
                <Label
                  text="R 150.50"
                  class="text-black text-lg font-bold ml-6"
                  textWrap="true"
                />
              </FlexboxLayout>
            </GridLayout>

            <GridLayout columns="*,*" rows="100" class="bottom">
              <FlexboxLayout col="0" class="bottom items-center ml-5">
                <StackLayout>
                  <Label
                    text="Live Better Account"
                    class="bottom-title text-base text-black font-extrabold uppercase"
                  />
                  <Label text="Account Balance" class="text-gray-500 text-base" />
                </StackLayout>
              </FlexboxLayout>

              <FlexboxLayout col="1" class="bottom-controls items-center">
                <Label
                  text="R 1000.76"
                  class="text-black text-lg font-bold ml-6"
                  textWrap="true"
                />
              </FlexboxLayout>
            </GridLayout>
          </StackLayout>
        </StackLayout>

        <FlexboxLayout class="px-4 mt-6">
          <GridLayout columns="*,*,*" rows="70" class="action-button">
            <FlexboxLayout
              col="0"
              class="size-button justify-center items-center rounded-xl mr-1"
            >
              <StackLayout>
                <Image class="capiteclogo w-7" src="~/asserts/img/message.png" />
                <Label text="Messages" class="text-gray-600 text-base" />
              </StackLayout>
            </FlexboxLayout>
            <FlexboxLayout
              col="1"
              class="size-button justify-center items-center rounded-xl mr-1"
            >
              <StackLayout>
                <Image class="capiteclogo w-9" src="~/asserts/img/transaction.png" />
                <Label text="Transact" class="text-gray-600 text-base" />
              </StackLayout>
            </FlexboxLayout>
            <FlexboxLayout
              col="2"
              class="size-button justify-center items-center rounded-xl"
            >
              <StackLayout>
                <Image class="capiteclogo w-9" src="~/asserts/img/credit-card.png" />
                <Label text="Cards" class="text-gray-600 text-base" />
              </StackLayout>
            </FlexboxLayout>
          </GridLayout>
        </FlexboxLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import ActionBar from "./ActionBar";
import Branch from "./BranchPage";
import TipFaq from "./TipFaqPage";
import SliderPage from "./SliderPage";

export default {
  data() {
    return {
      currentPage: "Capitec",
      Branch: Branch,
      TipFaq: TipFaq,
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
    ActionBar,
    Branch,
    TipFaq,
    SliderPage,
  },
};
</script>

<style scoped lang="css">
.carousel-bottoms .bottoms {
  margin-top: -250px;
}
.carousel-bottoms .bottoms-description {
  margin-top: -40px;
}
.size-button {
  background-color: #f7f7f7;
}
.bottoms {
  background-color: #f7f7f7;
}
</style>
