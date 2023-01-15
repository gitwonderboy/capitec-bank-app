<template>
  <Page class="page view">
    <ActionBar :currentPage="currentPage" />
    <StackLayout class="page-container bg-white">
      <ScrollView orientation="vertical Session" height="750">
        <GridLayout columns="*" rows="*, auto" class="view-page-wrapper">
          <StackLayout row="0" col="0">
            <StackLayout class="carousel-bottoms mt-6">
              <Image
                class="carousel-img w-60"
                src="~/asserts/img/capitec-card.png"
                stretch="aspectFill"
              />

              <FlexboxLayout class="bottoms bg-slate-200 rounded-t-3xl">
                <GridLayout columns="*,*" rows="150" class="bottom">
                  <FlexboxLayout col="0" class="bottom justify-start items-center ml-4">
                    <StackLayout>
                      <Label
                        class="bottom-title text-xl text-black font-bold uppercase"
                      />
                      <Label
                        text="With Chocolate"
                        class="bottom-title-caption text-black text-base font-bold"
                      />
                      <FlexboxLayout class="justify-end items-center">
                        <Label
                          text.decode="&#xf005;"
                          class="nt-icon mr-1 fas text-sm text-center text-orange-400"
                        />
                        <Label text="4.5" class="text-black text-center mr-1 text-base" />
                        <Label
                          text="(2343 Reviews)"
                          class="text-gray-400 text-center text-base"
                        />
                      </FlexboxLayout>
                    </StackLayout>
                  </FlexboxLayout>
                  <FlexboxLayout
                    col="1"
                    class="bottom-controls justify-center items-center"
                  >
                    <Label
                      text="-"
                      class="text-white text-2xl text-center rounded-md w-8 h-8 control font-extrabold"
                      textWrap="true"
                    />
                    <Label
                      class="text-black text-2xl mx-2 text-center w-8 h-8 font-extrabold"
                      textWrap="true"
                    />
                    <Label
                      text="+"
                      class="text-white text-2xl text-center rounded-md w-8 h-8 control font-extrabold"
                      textWrap="true"
                    />
                  </FlexboxLayout>
                </GridLayout>
              </FlexboxLayout>

              <FlexboxLayout class="bottoms-description bg-slate-400 rounded-tr-3xl">
                <FlexboxLayout class="bottom justify-start items-center ml-4">
                  <StackLayout class="coffee-desc">
                    <Label
                      textWrap="true"
                      text="A cappuccino is an espresso-based coffee drink that originated in Austria with later development."
                      class="bottom-title text-lg text-black mt-2 font-bold leading-none"
                    />
                    <Label
                      text="Read more..."
                      class="bottom-description-title text-black text-lg font-bold my-2"
                    />
                  </StackLayout>
                </FlexboxLayout>
              </FlexboxLayout>
            </StackLayout>

            <StackLayout row="1" class="size-buttons p-2">
              <GridLayout columns="*,*,*" rows="50" class="bottoms">
                <FlexboxLayout
                  col="0"
                  class="size-button justify-center items-center rounded-xl mr-1"
                >
                  <StackLayout>
                    <Label
                      text="S"
                      class="button-title text-gray-100 text-xl font-bold"
                    />
                  </StackLayout>
                </FlexboxLayout>
                <FlexboxLayout
                  col="1"
                  class="size-button justify-center items-center rounded-xl mr-1"
                >
                  <StackLayout>
                    <Label
                      text="M"
                      class="button-title text-gray-100 text-xl font-bold"
                    />
                  </StackLayout>
                </FlexboxLayout>
                <FlexboxLayout
                  col="2"
                  class="size-button justify-center items-center rounded-xl"
                >
                  <StackLayout>
                    <Label
                      text="L"
                      class="button-title text-gray-100 text-xl font-bold"
                    />
                  </StackLayout>
                </FlexboxLayout>
              </GridLayout>
            </StackLayout>
          </StackLayout>
        </GridLayout>
      </ScrollView>
    </StackLayout>
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

.bottom-description-title {
  color: #543308;
}

.bottom-title-caption {
  color: hsl(34, 63%, 32%);
}

.size-button {
  background: rgb(48, 30, 12);
  background: linear-gradient(130deg, rgba(48, 30, 12, 1) 10%, rgba(54, 41, 26, 1) 100%);
}
.checkout-button-title {
  color: rgb(48, 30, 12);
}

.checkout-buttons {
  background-color: #1d1a1a;
}

.bottom-controls .control {
  background-color: #543308;
}
.checkout-title {
  font-weight: 700;
  color: #ffffff;
}
</style>
