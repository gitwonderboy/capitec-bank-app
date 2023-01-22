<template>
  <Page class="page tips">
    <ActionBar />
    <StackLayout class="tip-container">
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
                    class="tips-icon justify-center items-center bg-blue-400 rounded-full w-10 h-10"
                  >
                    <Label
                      text.decode="&#xf129;"
                      class="nt-icon fas text-white text-lg"
                    />
                  </FlexboxLayout>
                  <FlexboxLayout class="justify-start mt-2 items-center">
                    <Label
                      text.decode="&#xf005;"
                      class="nt-icon mr-1 fas text-xs text-center text-orange-300"
                    />
                    <Label :text="tip.rate" class="text-black text-center mr-2 text-sm" />
                  </FlexboxLayout>
                </StackLayout>
              </FlexboxLayout>

              <FlexboxLayout col="1" class="justify-start ml-5 py-2 items-center">
                <StackLayout>
                  <Label
                    textWrap="true"
                    :text="tip.name"
                    class="font-bold text-lg text-blue-500 mb-2 leading-none"
                  />
                  <Label
                    textWrap="true"
                    :text="tip.tip"
                    class="text-lg text-black leading-none"
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

export default {
  data() {
    return {
      currentPage: "BBC TIPS",
      tips: [
        {
          name: "I’ve lost my bank card",
          rate: 4.5,
          tip:
            "Don’t wait. Immediately stop your card on our banking app, *120*3279#, Internet banking, WhatsApp line or call our 24hr Client Care Centre.",
        },
        {
          name: "I need to talk to someone at Capitec",
          rate: 4.9,
          tip:
            "Choose your contact method – our 24hr Client Care Centre, WhatsApp or email. Not in SA? Just call us on +27 21 941 1377.",
        },
        {
          name: "I want to switch to Capitec",
          rate: 4.7,
          tip:
            "Tiered pricing got you in tears? Switch your salary and debit orders to Capitec to enjoy simplified banking with SA’s Best Digital Bank and get rewards to help you live better.",
        },
        {
          name: "I want to learn to use the cellphone banking app",
          rate: 4.9,
          tip:
            "Watch these short videos to see just how simple it is to bank on our app! You can pay people and accounts, check balances, buy prepaid, send cash, scan to pay, and so much more!",
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
  },
};
</script>

<style scoped lang="css">
.page-wrapper {
  background-color: #f7f7f7;
}
.tips-section {
  background-color: #ffffff;
}
</style>
