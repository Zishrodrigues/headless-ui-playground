<template>
  <div class="flex p-3">
    <div class="p-4 w-2/5">
      <Disclosure
        v-for="disclosure in disclosureItems"
        :key="disclosure.title"
      >
        <template v-slot:buttonText>
          {{disclosure.title}}
        </template>
        <template v-slot:content>
          {{disclosure.content}}
        </template>
      </Disclosure>
    </div>
    <div class="p-4 w-2/5">
      <UiAccordion
        v-for="disclosure in disclosureItems"
        :key="`${disclosure.title}_accordion`"
      >
        <template v-slot:title>
          {{disclosure.title}}
        </template>
        {{disclosure.content}}
      </UiAccordion>
    </div>
  </div>
</template>

<script src="./Home.js"></script>
<style lang="scss" scoped src="./Home.scss"></style>
