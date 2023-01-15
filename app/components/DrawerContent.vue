<template class="drawer" lang="html">
  <GridLayout rows="*, auto">
    <StackLayout row="1">
      <StackLayout>
        <GridLayout columns="*" rows="50" class="bottoms">
          <FlexboxLayout col="0" class="justify-start items-center">
            <StackLayout class="p-1">
              <Image src="~/asserts/img/capitec-log.png" class="capitec-logo ml-2 w-36" />
            </StackLayout>
          </FlexboxLayout>
        </GridLayout>
      </StackLayout>

      <StackLayout class="size-buttons mb-2 p-2">
        <GridLayout columns="*,*,*" rows="40" class="bottoms">
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
              <Label
                text="Sign Out"
                class="button-title text-gray-100 text-lg font-bold"
              />
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
              text="Mr WT Mthiyane"
              class="card-title text-lg font-bold uppercase text-white"
            />
            <Label
              textWrap="true"
              text="1560031240"
              class="card-title text-sm text-white"
            />
          </StackLayout>
        </FlexboxLayout>
      </GridLayout>
    </StackLayout>

    <ScrollView row="0" class="page-scroller nt-drawer__body">
      <StackLayout class="bg-slate-100">
        <GridLayout columns="50, *" class="py-3" @tap="onNavigationItemTap(HomePage)">
          <Image
            col="0"
            class="w-7"
            src="~/asserts/img/cap-logo.png"
            stretch="aspectFill"
          />
          <Label col="1" text="Home" class="p-l-12 font-bold text-base" />
        </GridLayout>

        <GridLayout columns="50, *" class="py-3" @tap="onNavigationItemTap(HomePage)">
          <Image col="0" class="w-7" src="~/asserts/img/buy.png" stretch="aspectFill" />
          <Label col="1" text="Buy Electricity" class="p-l-12 font-bold text-base" />
        </GridLayout>

        <GridLayout columns="50, *" class="py-3" @tap="onNavigationItemTap(HomePage)">
          <Image col="0" class="w-7" src="~/asserts/img/pay.png" stretch="aspectFill" />
          <Label col="1" text="Pay Beneficiary" class="p-l-12 font-bold text-base" />
        </GridLayout>

        <GridLayout columns="50, *" class="py-3" @tap="onNavigationItemTap(HomePage)">
          <Image
            col="0"
            class="w-7"
            src="~/asserts/img/transfer.png"
            stretch="aspectFill"
          />
          <Label col="1" text="Transfer Money" class="p-l-12 font-bold text-base" />
        </GridLayout>

        <GridLayout columns="50, *" class="py-3" @tap="onNavigationItemTap(HomePage)">
          <Image col="0" class="w-7" src="~/asserts/img/track.png" stretch="aspectFill" />
          <Label col="1" text="Track Money" class="p-l-12 font-bold text-base" />
        </GridLayout>

        <GridLayout columns="50, *" class="py-3" @tap="onNavigationItemTap(HomePage)">
          <Image col="0" class="w-7" src="~/asserts/img/send.png" stretch="aspectFill" />
          <Label col="1" text="Send Cash" class="p-l-12 font-bold text-base" />
        </GridLayout>

        <StackLayout class="hr" />

        <GridLayout
          columns="auto, *"
          class="pl-4 py-4"
          @tap="onNavigationItemTap(Branch)"
        >
          <Label col="0" text.decode="&#xf3c5;" class="w-10 nt-icon fas text-lg" />
          <Label col="1" text="Find Us" class="p-l-10 font-bold text-base" />
        </GridLayout>

        <GridLayout columns="auto, *" class="pl-4 py-4" @tap="onNavigationItemTap(Tip)">
          <Label col="0" text.decode="&#xf129;" class="w-10 nt-icon fas text-lg" />
          <Label col="1" text="Banking TIPS" class="p-l-10 font-bold text-base" />
        </GridLayout>

        <GridLayout columns="auto, *" class="pl-4 py-2" @tap="onNavigationItemTap(Faq)">
          <Label col="0" text.decode="&#xf086;" class="w-10 nt-icon fas text-lg" />
          <Label col="1" text="Capitec FAQS" class="p-l-10 font-bold text-base" />
        </GridLayout>
      </StackLayout>
    </ScrollView>
  </GridLayout>
</template>

<script>
import HomePage from "./HomePage";
import Branch from "./BranchPage";
import Tip from "./TipPage";
import Faq from "./FaqPage";

import * as utils from "~/shared/utils";

export default {
  data() {
    return {
      HomePage: HomePage,
      Branch: Branch,
      Tip: Tip,
      Faq: Faq,
      selectedPage: "",
    };
  },
  components: {
    HomePage,
    Branch,
    Tip,
    Faq,
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
  background: rgb(30, 129, 176);
  background: linear-gradient(180deg, rgba(30, 129, 176, 1) 13%, rgba(0, 72, 109, 1) 73%);
}
.user-icon {
  background: rgb(30, 129, 176);
  background: linear-gradient(0deg, rgba(30, 129, 176, 1) 52%, rgba(0, 157, 224, 1) 97%);
}

.nt-icon {
  color: #00486d;
}
</style>
