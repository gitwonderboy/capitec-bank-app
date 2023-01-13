<template>
  <Page class="page">
    <ActionBar :currentPage="currentPage" />
    <StackLayout class="page-container">
      <ScrollView
        orientation="vertical"
        height="750"
        class="scroll-view"
        scrollBarIndicatorVisible="false"
      >
        <StackLayout class="page-wrapper" justifyContent="center" alignItems="center">
          <SliderPage />

          <StackLayout class="container" @tap="onNavigationItemTap(OfferPage)">
            <GridLayout
              columns="auto,*"
              rows="130"
              class="make-coffee-modal bg-gray-100 mb-4 mt-2 rounded-xl"
            >
              <Image
                col="0"
                class="make-coffee-modal-img rounded-tl-xl rounded-bl-xl"
                src="~/asserts/img/coffee-making.png"
              />
              <FlexboxLayout col="1" class="justify-center items-center">
                <StackLayout>
                  <Label
                    textWrap="true"
                    text="30% Off"
                    class="font-bold text-lg text-gray-200 leading-none"
                  />
                  <Label
                    textWrap="true"
                    text="The Eid Offer"
                    class="font-bold text-lg text-gray-200 leading-none"
                  />
                  <Label
                    textWrap="true"
                    text="Buy Now"
                    class="make-coffee-modal-btn font-bold mt-4 bg-white rounded-full p-2 text-center text-base leading-none"
                  />
                </StackLayout>
              </FlexboxLayout>
            </GridLayout>

            <GridLayout columns="*, *" rows="auto" class="card-container mb-4">
              <FlexboxLayout
                class="coffee-card-container justify-center items-center rounded-lg mr-1"
                row="0"
                col="0"
                @tap="onNavigationItemTap(ViewPage)"
              >
                <StackLayout class="coffee-card">
                  <Image
                    class="card-icon rounded-t-lg"
                    src="~/asserts/img/gallery-1.png"
                  />
                  <StackLayout class="p-4">
                    <Label
                      text="Cappuccino"
                      class="card-title text-lg font-bold text-gray-200"
                    />
                    <Label
                      text="With Chocolate"
                      class="card-desc text-base text-gray-400"
                    />
                    <GridLayout columns="*,*">
                      <FlexboxLayout col="0" class="justify-start">
                        <Label
                          text="R 28.90"
                          class="card-title text-base font-bold text-gray-200"
                        />
                      </FlexboxLayout>
                      <FlexboxLayout col="1" class="justify-end">
                        <Label
                          text.decode="&#xf217;"
                          class="nt-icon fas text-xl text-white"
                        />
                      </FlexboxLayout>
                    </GridLayout>
                  </StackLayout>
                </StackLayout>
              </FlexboxLayout>

              <FlexboxLayout
                class="coffee-card-container justify-center items-center rounded-lg ml-1"
                row="0"
                col="1"
                @tap="onNavigationItemTap(ViewPage)"
              >
                <StackLayout class="coffee-card">
                  <Image
                    class="card-icon rounded-t-lg"
                    src="~/asserts/img/gallery-2.png"
                  />
                  <StackLayout class="p-4">
                    <Label
                      text="Cappuccino"
                      class="card-title text-lg font-bold text-gray-200"
                    />
                    <Label
                      text="With Oat Milk"
                      class="card-desc text-base text-gray-400"
                    />
                    <GridLayout columns="*,*">
                      <FlexboxLayout col="0" class="justify-start">
                        <Label
                          text="R 28.90"
                          class="card-title text-base font-bold text-gray-200"
                        />
                      </FlexboxLayout>
                      <FlexboxLayout col="1" class="justify-end">
                        <Label
                          text.decode="&#xf217;"
                          class="nt-icon fas text-xl text-white"
                        />
                      </FlexboxLayout>
                    </GridLayout>
                  </StackLayout>
                </StackLayout>
              </FlexboxLayout>
            </GridLayout>

            <GridLayout
              columns="*,auto"
              rows="140"
              class="bbc-modal bg-gradient-to-b from-gray-100 via-slate-100 to-slate-100 mb-4 rounded-lg"
            >
              <FlexboxLayout col="0" class="justify-center items-center">
                <StackLayout class="p-4">
                  <Label
                    textWrap="true"
                    text="100% Coffee Shared With Love."
                    class="font-bold text-xl leading-none text-black"
                  />
                  <Label
                    textWrap="true"
                    text="BREW BROTHERS CAFÉ"
                    class="bbc-modal-title font-bold tracking-wide text-lg font-sana leading-none"
                  />
                </StackLayout>
              </FlexboxLayout>
              <Image
                col="1"
                class="bbc-modal-img rounded-full"
                src="~/asserts/img/share-coffee.png"
              />
            </GridLayout>

            <GridLayout columns="*" rows="*" class="bbc-modal mb-4 rounded-lg">
              <Image
                col="0"
                class="bbc-modal-img rounded-lg"
                src="~/asserts/img/cup-cake.png"
              />
            </GridLayout>
          </StackLayout>
        </StackLayout>
      </ScrollView>
    </StackLayout>
  </Page>
</template>

<script>
import ActionBar from "./ActionBar";
import AboutPage from "./AboutPage";
import Branch from "./BranchPage";
import AttachmentPage from "./AttachmentPage";
import OfferPage from "./OfferPage";
import MenuPage from "./MenuPage";
import TipFaq from "./TipFaqPage";
import SliderPage from "./SliderPage";

export default {
  data() {
    return {
      currentPage: "BBC",
      AboutPage: AboutPage,
      Branch: Branch,
      AttachmentPage: AttachmentPage,
      OfferPage: OfferPage,
      MenuPage: MenuPage,
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
    AboutPage,
    Branch,
    AttachmentPage,
    OfferPage,
    MenuPage,
    TipFaq,
    SliderPage,
  },
};
</script>

<style scoped lang="css">
.scroll-view {
  background-image: url("~/asserts/img/coffee_bg.png");
  background-repeat: no-repeat;
  background-size: 100% 65%;
}

.ratings .ratings-container .rating {
  background-color: #1e81b0;
}

.make-coffee-modal {
  background: rgb(62, 43, 14);
  background: linear-gradient(130deg, rgba(62, 43, 14, 1) 42%, rgba(84, 51, 8, 1) 69%);
}

.make-coffee-modal-btn {
  color: #93691d;
}
.bbc-modal-title {
  color: #543308;
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
