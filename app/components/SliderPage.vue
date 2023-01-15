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
          >
            <Image class="bottom-icon rounded-full h-8 w-8 p-1 mr-2" :src="item.img" />
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
export default {
  data() {
    return {
      slider: [
        {
          name: "Buy Prepaid Mobile",
          price: 12.0,
          img: "~/asserts/img/prepaid.png",
        },
        { name: "Buy Electricity", price: 15.0, img: "~/asserts/img/buy.png" },
        { name: "Pay Beneficiary", price: 20.0, img: "~/asserts/img/pay.png" },
        { name: "Transfer Money", price: 15.0, img: "~/asserts/img/transfer.png" },
        { name: "Track Money", price: 15.0, img: "~/asserts/img/track.png" },
        { name: "Send Cash", price: 27.0, img: "~/asserts/img/send.png" },
      ],
    };
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
