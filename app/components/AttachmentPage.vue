<template>
  <Page class="page specialist">
    <ActionBar :currentPage="currentPage" />
    <StackLayout class="page-container">
      <HeadPage :headTitle="headTitle" :imgSrc="imgSrc" />
      <ScrollView orientation="vertical" height="750">
        <StackLayout class="page-wrapper" justifyContent="center" alignItems="center">
          <StackLayout class="card-container">
            <StackLayout class="page-wrapper" justifyContent="center" alignItems="center">
              <StackLayout class="card-container">
                <GridLayout
                  v-for="atta in attached"
                  :key="atta.id"
                  columns="auto,*"
                  rows="100"
                  class="bg-black mb-2 rounded-xl"
                >
                  <FlexboxLayout
                    col="0"
                    class="justify-center attach-icon items-center ml-4 bg-white rounded-full w-10 h-10"
                  >
                    <Label
                      text.decode="&#xf0c6;"
                      class="nt-icon fas text-black text-xl"
                    />
                  </FlexboxLayout>

                  <FlexboxLayout col="1" class="justify-start ml-5 items-center">
                    <StackLayout>
                      <Label
                        textWrap="true"
                        :text="atta.name"
                        class="font-bold text-lg text-green-600 leading-none"
                      />
                      <FlexboxLayout class="justify-start items-center">
                        <Label
                          text.decode="&#xf005;"
                          class="nt-icon mr-1 fas text-sm text-center text-orange-400"
                        />
                        <Label
                          :text="atta.rate"
                          class="text-white text-center mr-2 text-base"
                        />
                        <Label
                          text="(2343 Reviews)"
                          class="text-gray-400 text-center text-base"
                        />
                      </FlexboxLayout>
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
      currentPage: "ATTACHMENT",
      headTitle: "ATTACHED",
      imgSrc: "~/asserts/img/coffee-shop.png",
      attached: [
        { name: "Cold Drink List", rate: 4.5, review: 2343 },
        { name: "Coffee List", rate: 4.9, review: 2343 },
        { name: "Milk Shake List", rate: 4.7, review: 2343 },
        { name: "Muffin List", rate: 4.9, review: 2343 },
        { name: "Full Menu List", rate: 4.5, review: 2343 },
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
.attach-icon .nt-icon {
  color: #4d2f07;
}
</style>
