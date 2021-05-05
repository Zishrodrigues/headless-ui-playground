<template>
  <div>
    <Disclosure as="details" v-slot="{ open }">
      <DisclosureButton as="summary" class="w-full py-3 cursor-pointer focus:outline-none list-none flex justify-between items-center">
        <slot name="buttonText" />
        <div class="display-inline text-blue-1 fill-current h-6 w-6 align-middle" v-html="open ? arrowUpIcon : arrowDownIcon"></div>
      </DisclosureButton>
      <slot name="content" />
    </Disclosure>
  </div>
</template>

<script>
import { arrowUp, arrowDown } from "@funda/icons";
import {
  Disclosure,
  DisclosureButton,
} from "@headlessui/vue";

export default {
  name: 'Lightbox',
  components: {
    Disclosure,
    DisclosureButton,
  },
  data: function () {
    return {
      arrowUpIcon: arrowUp.svg,
      arrowDownIcon: arrowDown.svg,
    }
  },
  methods: {
    //
  }
};
</script>
