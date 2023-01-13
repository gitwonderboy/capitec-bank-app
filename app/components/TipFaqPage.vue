<template>
  <GridLayout columns="*,*" rows="60" class="tips mb-2 mt-0">
    <FlexboxLayout
      col="0"
      class="tip justify-center items-center rounded-xl mr-1"
      @tap="onNavigationItemTap(Tip)"
    >
      <Label text="TIPs" class="text-xl text-gray-100 font-black font-sana" />
    </FlexboxLayout>
    <FlexboxLayout
      col="1"
      class="tip justify-center items-center rounded-xl"
      @tap="onNavigationItemTap(Faq)"
    >
      <Label text="FAQs" class="text-xl text-gray-100 font-black font-sans" />
    </FlexboxLayout>
  </GridLayout>
</template>

<script>
import Tip from "./TipPage";
import Faq from "./FaqPage";

export default {
  data() {
    return {
      Tip: Tip,
      Faq: Faq,
    };
  },

  methods: {
    onNavigationItemTap(component) {
      this.$navigateTo(component, {
        clearHistory: false,
      });
    },
  },

  components: {
    Tip,
    Faq,
  },
};
</script>

<style scoped lang="css">
.tips .tip {
  background: rgb(115, 34, 195);
  background: linear-gradient(0deg, rgba(115, 34, 195, 1) 25%, rgba(45, 196, 253, 1) 95%);
  background-color: #1e81b0;
}
</style>
