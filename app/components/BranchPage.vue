<template>
  <Page class="page branch">
    <ActionBar :currentPage="currentPage" />
    <StackLayout class="page-container">
      <HeadPage :headTitle="headTitle" :imgSrc="imgSrc" />
      <ScrollView orientation="vertical" height="750">
        <StackLayout class="page-wrapper" justifyContent="center" alignItems="center">
          <StackLayout class="card-container">
            <StackLayout class="page-wrapper" justifyContent="center" alignItems="center">
              <StackLayout class="card-container">
                <GridLayout
                  v-for="bra in branches"
                  :key="bra.id"
                  columns="*"
                  rows="auto"
                  class="branch-section mb-2 rounded-xl p-2"
                >
                  <FlexboxLayout col="1" class="justify-center items-center">
                    <StackLayout>
                      <StackLayout class="ml-4">
                        <StackLayout class="mb-2">
                          <Label
                            textWrap="true"
                            :text="bra.venue"
                            class="font-bold capitalize text-xl text-green-600 leading-none"
                          />
                          <Label
                            textWrap="true"
                            :text="bra.address"
                            class="font-bold text-base text-white leading-none"
                          />
                        </StackLayout>
                        <StackLayout class="mb-2">
                          <FlexboxLayout>
                            <Label
                              text.decode="&#xf095;"
                              class="nt-icon fas mr-2 text-xl text-green-500"
                            />
                            <Label
                              textWrap="true"
                              :text="bra.phone"
                              class="font-bold text-base text-white leading-none"
                            />
                          </FlexboxLayout>
                          <FlexboxLayout>
                            <Label
                              text.decode="&#xf0e0;"
                              class="nt-icon fas mr-2 text-xl text-green-500"
                            />
                            <Label
                              textWrap="true"
                              :text="bra.email"
                              class="font-bold text-base text-white leading-none"
                            />
                          </FlexboxLayout>
                        </StackLayout>
                      </StackLayout>
                    </StackLayout>
                  </FlexboxLayout>
                </GridLayout>
              </StackLayout>
            </StackLayout>
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
      currentPage: "BRANCH",
      headTitle: "Find Us",
      imgSrc: "~/asserts/img/coffee-shop.png",
      branches: [
        {
          id: "1",
          venue: "isiphingo rail",
          address: "5 Phila Ndwandwe Road, Isipingo Rail, Kwazulu-Natal",
          phone: "031-9000 021",
          email: "drshaikh@gmail.com",
          patients: "14K",
          image: "~/asserts/img/doc1.png",
          experience: "15yrs",
          rating: "4.5",
        },
        {
          id: "2",
          venue: "umlazi v section",
          address: "5 Phila Ndwandwe Road, UMlazi Rail, Kwazulu-Natal",
          phone: "031-9000 021",
          email: "drshaikh@gmail.com",
          patients: "25K",
          image: "~/asserts/img/doc2.png",
          experience: "15yrs",
          rating: "4.9",
        },
        {
          id: "3",
          venue: "pinetown",
          address: "5 Phila Ndwandwe Road, Pinetown Rail, Kwazulu-Natal",
          phone: "031-9000 021",
          email: "drshaikh@gmail.com",
          patients: "11k",
          image: "~/asserts/img/doc4.png",
          experience: "15yrs",
          rating: "4.0",
        },
      ],
    };
  },

  components: {
    ActionBar,
    HeadPage,
  },
};
</script>

<style scoped lang="css">
.branch-section {
  background-color: #000;
}
</style>
