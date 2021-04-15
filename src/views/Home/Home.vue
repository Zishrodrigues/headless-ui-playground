<template>
  <div class="p-3 max-w-md bg-white">
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
</template>

<script src="./Home.js"></script>
<style lang="scss" scoped src="./Home.scss"></style>
