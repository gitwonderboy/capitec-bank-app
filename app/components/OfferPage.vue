<template>
  <Page class="page specialist">
    <ActionBar :currentPage="currentPage" />
    <StackLayout class="page-container">
      <ScrollView orientation="vertical" height="750">
        <StackLayout class="page-wrapper" justifyContent="center" alignItems="center">
          <StackLayout row="0" class="carousel mt-0">
            <Image
              class="rounded-t-lg rounded-b-xl"
              src="~/asserts/img/carousel2.png"
              stretch="aspectFill"
            />
          </StackLayout>

          <StackLayout class="card-container">
            <GridLayout
              v-for="offer in offers"
              :key="offer.id"
              columns="auto,*"
              rows="120"
              class="bg-black mb-2 rounded-xl"
            >
              <FlexboxLayout col="0" class="justify-center items-center p-2">
                <Image class="rounded-full w-20" :src="offer.image" />
              </FlexboxLayout>

              <FlexboxLayout col="1" class="justify-center items-center pt-4">
                <StackLayout>
                  <StackLayout class="ml-4">
                    <Label
                      textWrap="true"
                      :text="offer.name"
                      class="font-bold text-lg text-green-600 leading-none"
                    />
                    <FlexboxLayout class="justify-start items-center">
                      <Label
                        text.decode="&#xf005;"
                        class="nt-icon mr-2 fas text-sm text-center text-orange-400"
                      />
                      <Label text="4.5" class="text-white text-center mr-1 text-base" />
                      <Label
                        text="(2343 Reviews)"
                        class="text-gray-400 text-center text-base"
                      />
                    </FlexboxLayout>
                  </StackLayout>
                  <GridLayout class="pl-4 mt-2" columns="*,*">
                    <FlexboxLayout col="0" class="justify-start items-center">
                      <Label text="R " class="text-white text-center text-xl font-bold" />
                      <Label
                        :text="offer.price"
                        class="card-title text-xl text-center font-bold text-gray-200"
                      />
                    </FlexboxLayout>
                    <FlexboxLayout col="1" class="justify-end items-center">
                      <Label
                        text.decode="&#xf217;"
                        class="nt-icon purchase-icon fas text-2xl bg-white p-2 pl-6 pt-5 rounded-tl-full text-center"
                      />
                    </FlexboxLayout>
                  </GridLayout>
                </StackLayout>
              </FlexboxLayout>
            </GridLayout>
          </StackLayout>
        </StackLayout>
      </ScrollView>
    </StackLayout>
  </Page>
</template>

<script>
import ActionBar from "./ActionBar";

export default {
  data() {
    return {
      currentPage: "OFFERS",
      offers: [
        { name: "Cold Drink", price: 12.0, image: "~/asserts/img/3.png" },
        { name: "Hot Drink", price: 15.0, image: "~/asserts/img/2.png" },
        { name: "Ice Drink", price: 20.0, image: "~/asserts/img/4.png" },
        { name: "Muffin", price: 15.0, image: "~/asserts/img/muffin.png" },
        { name: "Hot Milk", price: 15.0, image: "~/asserts/img/6.png" },
        { name: "Milkshake", price: 27.0, image: "~/asserts/img/1.png" },
      ],
    };
  },

  components: {
    ActionBar,
  },
};
</script>

<style scoped lang="css">
.carousel-bottoms .bottoms .bottom {
  background: rgb(115, 34, 195);
  background: linear-gradient(0deg, rgba(115, 34, 195, 1) 25%, rgba(45, 196, 253, 1) 95%);
  background-color: #1e81b0;
}

.carousel-bottoms {
  margin-top: -60px;
}

.carousel-bottoms .bottoms {
  padding: 0 30px;
}

.service-banner {
  background: rgb(115, 34, 195);
  background: linear-gradient(0deg, rgba(115, 34, 195, 1) 25%, rgba(45, 196, 253, 1) 95%);
  background-color: #1e81b0;
}

.card-container {
  margin-top: 10px;
}

.card-container .card {
  margin-bottom: 15px;
}

.service {
  background-color: #dfecec;
}

.purchase-icon {
  color: hsl(34, 63%, 32%);
}
</style>
