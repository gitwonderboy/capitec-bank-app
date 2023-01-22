<template>
  <Page class="page branch">
    <ActionBar />
    <StackLayout class="page-container">
      <StackLayout class="mb-2">
        <SearchBar
          id="searchBar"
          hint="Search nearest branch"
          text=""
          clear="onClear"
          submit="oNSubmit"
        />
      </StackLayout>
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
                    <StackLayout class="p-2">
                      <StackLayout class="mb-2">
                        <Label
                          textWrap="true"
                          :text="bra.venue"
                          class="font-bold capitalize text-xl text-blue-600 leading-none mb-2"
                        />
                        <Label
                          textWrap="true"
                          :text="bra.address"
                          class="font-bold text-base text-black leading-none"
                        />
                      </StackLayout>
                      <StackLayout class="mb-2">
                        <FlexboxLayout>
                          <Label
                            text.decode="&#xf095;"
                            class="nt-icon fas mr-2 text-sm text-red-500"
                          />
                          <Label
                            textWrap="true"
                            :text="bra.phone"
                            class="font-bold text-base text-blue-400 leading-none"
                          />
                        </FlexboxLayout>
                        <FlexboxLayout>
                          <Label
                            text.decode="&#xf0e0;"
                            class="nt-icon fas mr-2 text-sm text-red-500"
                          />
                          <Label
                            textWrap="true"
                            :text="bra.email"
                            class="font-bold text-base text-blue-400 leading-none"
                          />
                        </FlexboxLayout>
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

export default {
  data() {
    return {
      branches: [
        {
          id: "1",
          venue: "Capitec Bank Durban The Workshop 72",
          address: " Shop 78, The workshop, 99 Aliwal St, Durban Central, Durban, 4001",
          phone: "+27 21 941 1377",
          email: "customerservice@capitec.co.za",
        },
        {
          id: "2",
          venue: "Capitec Bank Durban West 331",
          address: "Shop 1, 331 West St, Durban Central, Durban, 4001",
          phone: "+27 21 941 1377",
          email: "customerservice@capitec.co.za",
        },
        {
          id: "3",
          venue: "Capitec Bank Durban Aliwal",
          address:
            "Boland Bank House, Shop 2 Cnr Samore Machel Street &, West St, Durban, 4001",
          phone: "+27 21 941 1377",
          email: "customerservice@capitec.co.za",
        },
        {
          id: "4",
          venue: "Capitec Bank Durban Smith 407",
          address: "Shop 5, Salmon Grove Chambers, 407 Smith St, Durban, 4001",
          phone: "+27 21 941 1377",
          email: "customerservice@capitec.co.za",
        },
        {
          id: "5",
          venue: "Capitec Bank",
          address: "Umgeni Shopping Centre, Shop 9, 273 Umgeni Rd, Durban, 4001",
          phone: "+27 21 941 1377",
          email: "customerservice@capitec.co.za",
        },
      ],
    };
  },

  components: {
    ActionBar,
  },
};
</script>

<style scoped lang="css">
.branch-section {
  background-color: #f7f7f7;
}
</style>
