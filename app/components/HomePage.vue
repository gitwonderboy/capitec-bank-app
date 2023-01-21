<template>
  <Page class="page view">
    <ActionBar :currentPage="currentPage" />
    <GridLayout rows="auto, *" columns="*">
      <StackLayout class="home-page-container">
        <StackLayout class="carousel-bottoms white bg-white">
          <Image
            class="carousel-img w-60 mt-5"
            src="~/asserts/img/capitec-card.png"
            stretch="aspectFill"
          />

          <StackLayout class="bottoms rounded-t-3xl rounded-b-3xl p-2">
            <ScrollView row="0" orientation="vertical Session" height="200">
              <StackLayout>
                <GridLayout
                  columns="230,*"
                  rows="100"
                  class="bottom bg-white rounded-t-3xl rounded-b-3xl"
                >
                  <FlexboxLayout col="0" class="bottom items-center ml-5">
                    <Image
                      class="livebetter w-10 h-10 mr-2"
                      src="~/asserts/img/savings.png"
                      stretch="aspectFill"
                    />
                    <StackLayout>
                      <Label
                        text="Savings Account"
                        class="bottom-title text-base text-blue-500 font-extrabold"
                      />
                      <Label text="Account Balance" class="text-gray-600 text-base" />
                    </StackLayout>
                  </FlexboxLayout>

                  <FlexboxLayout col="1" class="bottom-controls items-center">
                    <Label
                      text="R 150.50"
                      class="text-black text-lg font-bold"
                      textWrap="true"
                    />
                  </FlexboxLayout>
                </GridLayout>

                <GridLayout
                  columns="230,*"
                  rows="100"
                  class="bottom bg-white rounded-t-3xl rounded-b-3xl mt-2"
                >
                  <FlexboxLayout col="0" class="bottom items-center ml-5">
                    <Image
                      class="livebetter w-10 h-10 mr-2"
                      src="~/asserts/img/livebetter.png"
                      stretch="aspectFill"
                    />
                    <StackLayout>
                      <Label
                        text="Live Better Account"
                        class="bottom-title text-base text-blue-700 font-extrabold"
                      />
                      <Label text="Account Balance" class="text-gray-600 text-base" />
                    </StackLayout>
                  </FlexboxLayout>

                  <FlexboxLayout col="1" class="bottom-controls items-center">
                    <Label
                      text="R 1000.76"
                      class="text-black text-lg font-bold"
                      textWrap="true"
                    />
                  </FlexboxLayout>
                </GridLayout>

                <GridLayout
                  columns="230,*"
                  rows="100"
                  class="bottom bg-white rounded-t-3xl rounded-b-3xl mt-2"
                >
                  <FlexboxLayout col="0" class="bottom items-center ml-5">
                    <Image
                      class="livebetter w-10 h-10 mr-2"
                      src="~/asserts/img/credit.png"
                      stretch="aspectFill"
                    />
                    <StackLayout>
                      <Label
                        text="Credit Card"
                        class="bottom-title text-base text-blue-400 font-extrabold"
                      />
                      <Label text="Account Balance" class="text-gray-600 text-base" />
                    </StackLayout>
                  </FlexboxLayout>

                  <FlexboxLayout col="1" class="bottom-controls items-center">
                    <Label
                      text="R 5050.10"
                      class="text-black text-lg font-bold"
                      textWrap="true"
                    />
                  </FlexboxLayout>
                </GridLayout>
              </StackLayout>
            </ScrollView>
          </StackLayout>
        </StackLayout>
      </StackLayout>

      <FlexboxLayout row="1" class="px-4 justify-center items-center">
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
    </GridLayout>
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
  margin-top: -300px;
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
