<template>
  <GridLayout columns="auto,*" rows="80" class="commons p-4">
    <FlexboxLayout col="0" class="justify-center items-center rounded-xl mr-1">
      <Image class="rounded-b-sm rounded-xl w-16" :src="imgSrc" />
    </FlexboxLayout>
    <FlexboxLayout col="1" class="justify-center items-center">
      <Label
        :text="headTitle"
        textWrap="true"
        class="head-title text-xl font-bold uppercase text-white font-sana rounded-full px-6 py-2"
      />
    </FlexboxLayout>
  </GridLayout>
</template>

<script>
export default {
  props: ["headTitle", "imgSrc"],
};
</script>

<style>
.head-title {
  background-color: #4d2f07;
}
</style>
