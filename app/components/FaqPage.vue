<template>
  <Page class="page faqs">
    <ActionBar />
    <StackLayout class="faq-container">
      <ScrollView orientation="vertical" height="auto">
        <StackLayout class="page-wrapper" justifyContent="center" alignItems="center">
          <StackLayout class="card-container">
            <StackLayout>
              <GridLayout
                v-for="faq in faqs"
                :key="faq.id"
                columns="auto,*"
                rows="auto,auto"
                class="commons mb-2 mt-0 faq rounded-2xl p-4"
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
                    class="text-lg text-black leading-none"
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
                    class="text-lg text-black leading-none"
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

export default {
  data() {
    return {
      faqs: [
        {
          question: "How safe is my money ?",
          answer:
            "Very. All branch transactions require your card and PIN, with fingerprint biometrics and photographic identification as additional security measures.",
        },
        {
          question: "What's the deal with daily card limits ?",
          answer:
            "The following daily card limits apply to keep your money safe. They can instantly be changed on Internet banking or by visiting your nearest branch.",
        },
        {
          question: "What is credit life insurance ?",
          answer:
            "Credit insurance is compulsory for all term loans. You might not need it for a credit card or access facility, depending on your personal credit profile.",
        },
        {
          question: "How do I get Global One ?",
          answer:
            "Our banking app gives you the control to open your account from anywhere, using just your smartphone. Simply download our app, enter your SA ID number and take a few selfies!",
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
.page-wrapper {
  background-color: #f7f7f7;
}
.faqs .faq {
  background-color: #ffffff;
}

.faqs .faq-q {
  background-color: #e43d3c;
}

.faqs .faq-a {
  background-color: #004f7a;
}
</style>
