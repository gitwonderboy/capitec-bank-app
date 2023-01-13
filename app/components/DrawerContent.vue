<template class="drawer" lang="html">
  <GridLayout rows="*, auto">
    <StackLayout row="1">
      <StackLayout class="shop-stops mb-2 mt-2">
        <GridLayout columns="auto,*" rows="60" class="bottoms">
          <FlexboxLayout col="1" class="shop-stop justify-start items-center">
            <Label text="100% " class="stop-title-percent text-xl font-bold" />
            <Label text="COFFEE" class="stop-title text-xl font-bold" />
          </FlexboxLayout>
          <FlexboxLayout col="0" class="stop justify-start items-center">
            <StackLayout class="p-1">
              <Image src="~/asserts/img/latte-art.png" class="stop-img w-14 h-14" />
            </StackLayout>
          </FlexboxLayout>
        </GridLayout>
      </StackLayout>

      <StackLayout class="size-buttons mb-2 p-2">
        <GridLayout columns="*,*,*" rows="50" class="bottoms">
          <FlexboxLayout
            col="0"
            class="size-button justify-center items-center rounded-xl mr-1"
          >
            <StackLayout>
              <Label text="Wallet" class="button-title text-gray-100 text-lg font-bold" />
            </StackLayout>
          </FlexboxLayout>
          <FlexboxLayout
            col="1"
            class="size-button justify-center items-center rounded-xl mr-1"
          >
            <StackLayout>
              <Label text="Promo" class="button-title text-gray-100 text-lg font-bold" />
            </StackLayout>
          </FlexboxLayout>
          <FlexboxLayout
            col="2"
            class="size-button justify-center items-center rounded-xl"
          >
            <StackLayout>
              <Label text="Menu" class="button-title text-gray-100 text-lg font-bold" />
            </StackLayout>
          </FlexboxLayout>
        </GridLayout>
      </StackLayout>

      <GridLayout columns="auto,*" class="user-icon">
        <FlexboxLayout class="justify-center items-center">
          <StackLayout col="0" class="py-4 ml-4">
            <Image src="~/asserts/img/codelad.png" class="logo rounded-full w-16 h-16" />
          </StackLayout>
          <StackLayout col="1" class="ml-4">
            <Label
              text="Wonderboy"
              class="card-title text-lg font-bold uppercase text-white"
            />
            <Label
              textWrap="true"
              text="wonderboy@gmail.com"
              class="card-title text-sm text-white"
            />
          </StackLayout>
        </FlexboxLayout>
      </GridLayout>
    </StackLayout>

    <ScrollView row="0" class="page-scroller nt-drawer__body">
      <StackLayout class="bg-slate-100">
        <GridLayout
          columns="auto, *"
          class="pl-4 py-4"
          @tap="onNavigationItemTap(HomePage)"
        >
          <Label col="0" text.decode="&#xf015;" class="w-10 nt-icon fas text-xl" />
          <Label col="1" text="BBC" class="p-l-10 font-bold text-base" />
        </GridLayout>

        <GridLayout
          columns="auto, *"
          class="pl-4 py-4"
          @tap="onNavigationItemTap(AboutPage)"
        >
          <Label col="0" text.decode="&#xf044;" class="w-10 nt-icon fas text-lg" />
          <Label col="1" text="ABOUT US" class="p-l-10 font-bold text-base" />
        </GridLayout>

        <GridLayout
          columns="auto, *"
          class="pl-4 py-4"
          @tap="onNavigationItemTap(Branch)"
        >
          <Label col="0" text.decode="&#xf3c5;" class="w-10 nt-icon fas text-lg" />
          <Label col="1" text="FIND US" class="p-l-10 font-bold text-base" />
        </GridLayout>

        <!-- <GridLayout columns="auto, *" :class="
            'nt-drawer__list-item' + (selectedPage === 'MenuPage' ? ' -selected' : '')
          " @tap="onNavigationItemTap(MenuPage)">
          <Label col="0" text.decode="&#xf4c4;" class="nt-icon fas" />
          <Label col="1" text="MENU" class="p-r-10 font-bold text-sm" />
        </GridLayout> -->

        <GridLayout
          columns="auto, *"
          class="pl-4 py-4"
          @tap="onNavigationItemTap(OfferPage)"
        >
          <Label col="0" text.decode="&#xf06b;" class="w-10 nt-icon fas text-lg" />
          <Label col="1" text="OFFERS" class="p-l-10 font-bold text-base" />
        </GridLayout>
        <StackLayout class="hr" />

        <GridLayout
          columns="auto, *"
          class="pl-4 py-4"
          @tap="onNavigationItemTap(AttachmentPage)"
        >
          <Label col="0" text.decode="&#xf0c6;" class="w-10 nt-icon fas text-lg" />
          <Label col="1" text="ATTACHMENTS" class="p-l-10 font-bold text-base" />
        </GridLayout>

        <GridLayout columns="auto, *" class="pl-4 py-4" @tap="onNavigationItemTap(Tip)">
          <Label col="0" text.decode="&#xf129;" class="w-10 nt-icon fas text-lg" />
          <Label col="1" text="BBC TIPS" class="p-l-10 font-bold text-base" />
        </GridLayout>

        <GridLayout columns="auto, *" class="pl-4 py-2" @tap="onNavigationItemTap(Faq)">
          <Label col="0" text.decode="&#xf086;" class="w-10 nt-icon fas text-lg" />
          <Label col="1" text="BBC FAQS" class="p-l-10 font-bold text-base" />
        </GridLayout>
      </StackLayout>
    </ScrollView>
  </GridLayout>
</template>

<script>
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Branch from "./BranchPage";
import AttachmentPage from "./AttachmentPage";
import OfferPage from "./OfferPage";
import Tip from "./TipPage";
import Faq from "./FaqPage";
import MenuPage from "./MenuPage";

import * as utils from "~/shared/utils";

export default {
  data() {
    return {
      HomePage: HomePage,
      AboutPage: AboutPage,
      Branch: Branch,
      AttachmentPage: AttachmentPage,
      OfferPage: OfferPage,
      Tip: Tip,
      Faq: Faq,
      MenuPage: MenuPage,
      selectedPage: "",
    };
  },
  components: {
    HomePage,
    AboutPage,
    Branch,
    AttachmentPage,
    OfferPage,
    Tip,
    Faq,
    MenuPage,
  },
  methods: {
    onNavigationItemTap(component) {
      this.$navigateTo(component, {
        clearHistory: false,
      });
      utils.closeDrawer();
    },
  },
};
</script>

<style scoped lang="css">
.size-button {
  background-image: linear-gradient(135deg, #000000 0%, #241c1c 100%);
}
.user-icon {
  background-color: #271703;
}

.nt-icon {
  color: #4d2f07;
}

.stop-title {
  color: #4d2f07;
}

.stop-title-percent {
  color: #969595;
}
</style>
