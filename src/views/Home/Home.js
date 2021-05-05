import Disclosure from '@/components/Disclosure.vue';
import UiAccordion from '@funda/ui/src/components/ui-accordion.vue';

export default {
  name: 'Home',
  components: {
    Disclosure,
    UiAccordion,
  },
  data: function () {
    return {
      disclosureItems: [{
        title: 'Is this project using Vuejs 3 and Tailwind?',
        content: 'Yes, it is! :)',
      }, {
        title: 'Is this a second disclosure?',
        content: 'For sure!',
      }],
    }
  },
  setup() {
    return {
      //
    };
  },
  methods: {
    //
  }
}