<template>
  <Page class="page view">
    <ActionBar :currentPage="currentPage" />
    <StackLayout class="page-container">
      <ScrollView orientation="vertical Session" height="750">
        <GridLayout columns="*" rows="*, auto" class="view-page-wrapper">
          <StackLayout row="0" col="0">
            <StackLayout class="carousel-bottoms mb-4">
              <Image class="carousel-img" :src="$props.item.img" stretch="aspectFill" />

              <FlexboxLayout class="bottoms bg-slate-100 rounded-t-3xl">
                <GridLayout columns="*,*" rows="150" class="bottom">
                  <FlexboxLayout col="0" class="bottom justify-start items-center ml-4">
                    <StackLayout>
                      <Label
                        :text="$props.item.name"
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
                      @tap="onCoffeeCountDown"
                      text="-"
                      class="text-white text-2xl text-center rounded-md w-8 h-8 control font-extrabold"
                      textWrap="true"
                    />
                    <Label
                      :text="coffee"
                      class="text-black text-2xl mx-2 text-center w-8 h-8 font-extrabold"
                      textWrap="true"
                    />
                    <Label
                      @tap="onCoffeeCountUp"
                      text="+"
                      class="text-white text-2xl text-center rounded-md w-8 h-8 control font-extrabold"
                      textWrap="true"
                    />
                  </FlexboxLayout>
                </GridLayout>
              </FlexboxLayout>

              <FlexboxLayout class="bottoms-description bg-white rounded-tr-3xl">
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

            <StackLayout row="1" class="size-buttons mb-4 p-2">
              <GridLayout columns="*,*,*" rows="50" class="bottoms">
                <FlexboxLayout
                  col="0"
                  class="size-button justify-center items-center rounded-xl mr-1"
                  @tap="onPrice($props.item.price)"
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
                  @tap="onPrice($props.item.price + 3)"
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
                  @tap="onPrice($props.item.price + 5)"
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

          <StackLayout row="1" col="0" class="checkout-buttons p-2">
            <GridLayout columns="*,*" rows="50" class="bottoms">
              <FlexboxLayout
                col="0"
                class="checkout-button justify-center items-center rounded-xl mr-1"
              >
                <Label text="R " class="checkout-title text-xl font-bold" />
                <Label :text="price" class="checkout-title text-xl font-bold" />
              </FlexboxLayout>
              <FlexboxLayout
                col="1"
                class="checkout-button bg-gray-300 justify-center items-center rounded-xl mr-1"
              >
                <StackLayout>
                  <Label
                    text="CHECKOUT"
                    class="checkout-button-title text-xl font-bold"
                  />
                </StackLayout>
              </FlexboxLayout>
            </GridLayout>
          </StackLayout>
        </GridLayout>
      </ScrollView>
    </StackLayout>
  </Page>
</template>

<script>
import ActionBar from "./ActionBar";
import HeadPage from "./HeadPage";

export default {
  props: ["item"],
  data() {
    return {
      currentPage: "Coffee",
      headTitle: "Best Offer",
      imgSrc: "~/asserts/img/coffee-shop.png",
      price: this.$props.item.price,
      coffee: 1,
    };
  },

  methods: {
    onDrawerButtonTap() {
      utils.showDrawer();
    },

    onPrice(price) {
      this.price = null;
      this.price = price;
    },

    onCoffeeCountDown() {
      if (this.coffee > 1) {
        this.coffee -= 1;
        this.price -= this.$props.item.price;
      }
    },

    onCoffeeCountUp() {
      this.coffee += 1;
      this.price += this.$props.item.price;
    },
  },

  components: {
    ActionBar,
    HeadPage,
  },
};
</script>

<style scoped lang="css">
.carousel-bottoms .bottoms {
  margin-top: -60px;
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
