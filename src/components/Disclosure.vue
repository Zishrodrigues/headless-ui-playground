<template>
  <Disclosure>
    <DisclosureButton class="py-2">
      <slot name="buttonText" />
    </DisclosureButton>
    <DisclosurePanel class="text-gray-500">
      <slot name="content" />
    </DisclosurePanel>
  </Disclosure>
</template>

<script>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/vue";

export default {
  name: 'Lightbox',
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  },
  methods: {
    //
  }
};
</script>
