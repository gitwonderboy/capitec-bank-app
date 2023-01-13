<template>
  <Page class="page">
    <ActionBar :currentPage="currentPage" />
    <StackLayout class="page-container">
      <HeadPage :headTitle="headTitle" :imgSrc="imgSrc" />
      <ScrollView orientation="vertical" height="750">
        <StackLayout class="page-wrapper" justifyContent="center" alignItems="center">
          <StackLayout class="card-container">
            <!-- <GridLayout columns="*,*,*" rows="auto" class="commons mb-4">
              <FlexboxLayout col="0" class="common justify-center items-center rounded-xl mr-1">
                <StackLayout>
                  <Image class="rounded-b-sm rounded-xl w-10" src="~/asserts/img/doctors.png" />
                  <Label text="DOCTORS" class="text-green-600 font-bold" />
                </StackLayout>
              </FlexboxLayout>
              <FlexboxLayout col="1" class="common justify-center items-center rounded-xl mr-1">
                <StackLayout>
                  <Image class="rounded-b-sm rounded-xl w-10" src="~/asserts/img/consultation.png" />
                  <Label text="CONSULTATION" class="text-green-600 font-bold" />
                </StackLayout>
              </FlexboxLayout>
              <FlexboxLayout col="2" class="common justify-center items-center rounded-xl">
                <StackLayout>
                  <Image class="rounded-b-sm rounded-xl w-10" src="~/asserts/img/pharmacy.png" />
                  <Label text="PHARMACY" class="text-green-600 font-bold" />
                </StackLayout>
              </FlexboxLayout>
            </GridLayout>

            <TipFaq/> -->
          </StackLayout>
        </StackLayout>
      </ScrollView>
    </StackLayout>
  </Page>
</template>

<script>
import ActionBar from "./ActionBar";
import HeadPage from "./HeadPage";
import TipFaq from "./TipFaqPage";
import * as utils from "~/shared/utils";

export default {
  data() {
    return {
      currentPage: "MENU",
      headTitle: "MENU",
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
    TipFaq,
  },
};
</script>

<style scoped lang="css">
.branch-section {
  background-color: #dfecec;
}
</style>
