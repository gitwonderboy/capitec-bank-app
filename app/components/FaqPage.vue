<template>
  <Page class="page faqs">
    <ActionBar :currentPage="currentPage" />
    <StackLayout class="page-container">
      <HeadPage :headTitle="headTitle" :imgSrc="imgSrc" />
      <ScrollView orientation="vertical" height="750">
        <StackLayout class="page-wrapper" justifyContent="center" alignItems="center">
          <StackLayout class="card-container">
            <StackLayout>
              <GridLayout
                v-for="faq in faqs"
                :key="faq.id"
                columns="auto,*"
                rows="auto,auto"
                class="commons mb-2 mt-0 faq rounded-xl p-4"
              >
                <FlexboxLayout
                  col="0"
                  row="0"
                  class="justify-center items-center h-11 mb-4 mr-4 rounded-full faq-q"
                >
                  <Label text="Q" class="text-xl text-white font-bold font-sans p-4" />
                </FlexboxLayout>

                <FlexboxLayout col="1" row="0" class="justify-start items-center">
                  <Label
                    textWrap="true"
                    :text="faq.question"
                    class="text-lg text-white leading-none"
                  />
                </FlexboxLayout>

                <FlexboxLayout
                  col="0"
                  row="1"
                  class="justify-center items-center h-11 mr-4 rounded-full faq-a"
                >
                  <Label text="A" class="text-xl text-white font-bold font-sans p-4" />
                </FlexboxLayout>

                <FlexboxLayout col="1" row="1" class="justify-start items-center">
                  <Label
                    textWrap="true"
                    :text="faq.answer"
                    class="text-lg text-white leading-none"
                  />
                </FlexboxLayout>
              </GridLayout>
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
import * as utils from "~/shared/utils";

export default {
  data() {
    return {
      currentPage: "BBC FAQS",
      headTitle: "EXPERTS FORUM",
      imgSrc: "~/asserts/img/faq.png",
      faqs: [
        {
          question: "How to apply for jobs ?",
          answer: "Visit our website or come to our offices.",
        },
        {
          question: "How can I partner with BBC ?",
          answer: "Come to our offices for briefing and fill up our forms.",
        },
        {
          question: "What matters the most to BBC ?",
          answer:
            "Our clients they come before anything, we put a lot amount of time preparing the best for our clients. .",
        },
        {
          question: "If I get mis treated at BBC shops ?",
          answer:
            "Please let us know in all our social media platforms so we can resolve the issue as soon as possible.",
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
.faqs .faq {
  background-color: #6b9935;
}

.faqs .faq-q {
  background-color: #795d8e;
}

.faqs .faq-a {
  background-color: #ffc043;
}
</style>
