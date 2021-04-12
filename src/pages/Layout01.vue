<template>
  <div class="col-12">
    <my-fake-bread-crumbs class="q-mx-xl" />
    <q-card
      class="min-size-card shadow-1 col-12 q-mx-xl bg-white q-mt-md"
      bordered
    >
      <new-justification-card
        v-model="justificationValue"
        @salveJustification="saveJustificationOnLocalStorage"
      />
    </q-card>
    <q-card
      class="min-size-card shadow-1 flex q-mx-xl bg-white q-mt-md"
      bordered
    >
      <div class="row col-12 full-width">
        <div class="col-6 q-pa-xl justify-center">
          <good-bye-card
            exist-img="true"
            img-prop="../../icons/companyName.png"
            alternative-text="image company"
          />
        </div>
        <div class="col-6 q-pa-xl justify-center">
          <select-unsubscribe-option :myJustifications="sendJustificationData" />
        </div>
      </div>
    </q-card>
  </div>
</template>
<script>
import MyFakeBreadCrumbs from "src/components/layout/MyFakeBreadCrumbs.vue";
import NewJustificationCard from "src/components/NewJustificationCard.vue";
import GoodByeCard from "src/components/GoodByeCard.vue";
import SelectUnsubscribeOption from "src/components/SelectUnsubscribeOption";

import Notify from "../mixins/notify";

export default {
  name: "Layout1",
  components: {
    MyFakeBreadCrumbs,
    NewJustificationCard,
    GoodByeCard,
    SelectUnsubscribeOption
  },
  mixins: [Notify],
  data() {
    return {
      justificationValue: "",
      sendJustificationData: []
    };
  },
  created() {
   const justificationData = localStorage.getItem("justificationsData")

   if (justificationData) {
     this.sendJustificationData = JSON.parse(justificationData)
   }
  },
  methods: {
    saveJustificationOnLocalStorage() {
      let justifications = localStorage.getItem("justificationsData");

      if (justifications) {
        // update my justifications on localStorage
        justifications = JSON.parse(justifications);
        justifications.push(this.justificationValue);
        this.sendJustificationData.push(this.justificationValue)
      } else {
        justifications = [this.justificationValue];
        this.sendJustificationData = [this.justificationValue]
      }

      // update localStorage
      localStorage.setItem(
        "justificationsData",
        JSON.stringify(justifications)
      );

      this.successNotify("Nova justificativa adicionada com sucesso!");
      this.justificationValue = "";
    }
  }
};
</script>
<style lang="scss" scoped>
.min-size-card {
  min-width: 1100px !important;
}
</style>
