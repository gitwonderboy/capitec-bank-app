<template>
  <Page class="page tips">
    <ActionBar :currentPage="currentPage" />
    <StackLayout class="page-container">
      <HeadPage :headTitle="headTitle" :imgSrc="imgSrc" />
      <ScrollView orientation="vertical" height="750">
        <StackLayout class="page-wrapper" justifyContent="center" alignItems="center">
          <StackLayout class="card-container">
            <GridLayout
              v-for="tip in tips"
              :key="tip.id"
              columns="auto,*"
              rows="*"
              class="tips-section bg-black mb-2 rounded-xl px-4"
            >
              <FlexboxLayout col="0" class="justify-center items-center">
                <StackLayout class="pt-4">
                  <FlexboxLayout
                    class="tips-icon justify-center items-center bg-white rounded-full w-10 h-10"
                  >
                    <Label
                      text.decode="&#xf129;"
                      class="nt-icon fas text-black text-xl"
                    />
                  </FlexboxLayout>
                  <FlexboxLayout class="justify-start mt-2 items-center">
                    <Label
                      text.decode="&#xf005;"
                      class="nt-icon mr-1 fas text-sm text-center text-orange-400"
                    />
                    <Label
                      :text="tip.rate"
                      class="text-white text-center mr-2 text-base"
                    />
                  </FlexboxLayout>
                </StackLayout>
              </FlexboxLayout>

              <FlexboxLayout col="1" class="justify-start ml-5 py-2 items-center">
                <StackLayout>
                  <Label
                    textWrap="true"
                    :text="tip.name"
                    class="font-bold text-lg text-green-600 mb-2 leading-none"
                  />
                  <Label
                    textWrap="true"
                    :text="tip.tip"
                    class="text-lg text-gray-300 leading-none"
                  />
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
import HeadPage from "./HeadPage";

export default {
  data() {
    return {
      currentPage: "BBC TIPS",
      headTitle: "EXPERT FINDINGS",
      imgSrc: "~/asserts/img/tip.png",
      tips: [
        {
          name: "How to make Hot Chocolate.",
          rate: 4.5,
          tip:
            "Take a cue from the Milanese, and put both into one mug. The drink is called barbajada, and it's as simple as it is brilliant.",
        },
        {
          name: "Mix Milkshake like a pro.",
          rate: 4.9,
          tip:
            "In a clean blender, add the 1 cup of milk. It's helpful to add the liquid at the bottom because it's closest to the blender blades and will help everything puree faster.",
        },
        {
          name: "Hot Milk Mix",
          rate: 4.7,
          tip:
            "Place milk in the top of a double boiler or in a heat-proof bowl set over a saucepan of simmering water. Heat just until bubbles form around the edge and steam begins to rise from the milk",
        },
        {
          name: "Master Muffins Mix",
          rate: 4.9,
          tip:
            "Make moist, flop-proof chocolate muffins that come out perfectly every time.",
        },
        {
          name: "Make Coffee like a pro",
          rate: 4.5,
          tip:
            "Rule 1: Buy Fresh Beans · Rule 2: Keep Coffee Beans Fresh · Rule 3: Choose Good Coffee If It's Within Your Budget.",
        },
      ],
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
.tips-icon .nt-icon {
  color: #e7890e;
}
.tips-section {
  background-color: #240800;
}
</style>
