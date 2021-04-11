<template>
  <q-card flat>
    <q-card-section class="title"
      >Por que você quer se descadastrar?</q-card-section
    >
    <q-card-section class="q-pl-xs q-pt-none">
      <div
        v-for="(justificationsOption, idx) in justificationsOptions"
        :key="idx"
      >
        <q-item class="q-pl-none q-py-none" tag="label" v-ripple>
          <q-item-section avatar>
            <q-radio
              v-model="color"
              :val="`${justificationsOption}`"
              color="primary"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ justificationsOption }}</q-item-label>
          </q-item-section>
        </q-item>
      </div>
      <q-input
        class="q-pl-sm"
        type="text"
        placeholder="Não gostei do layout."
      />
      <div class="q-mt-xs" style="text-align: right; color: #7f7f7f">
        0/150 caracteres
      </div>
    </q-card-section>
    <q-card-section class="paragraph-style">
      <div>
        O descadastramento será efetuado para o e-mail:
        <div class="text-indigo-8">nome.sobrenome@pmweb.com.br</div>
      </div>
    </q-card-section>
    <q-card-section>
      <q-btn color="primary" rounded no-caps label="Descadastrar" />
    </q-card-section>
  </q-card>
</template>
<script>
export default {
  name: "SelectUnsubscribeOption",
  data() {
    return {
      justificationsOptions: [],
      color: true
    };
  },
  // watch: {
  //   justificationsOptions(newValue) {
  //     console.log("newValue", newValue);
  //     console.log("oldValue", oldValue);
  //   }
  // },
  created() {
    this.justificationsOptions = JSON.parse(
      localStorage.getItem("justificationsData")
    );
    // console.log("this.justificationsOptions", this.justificationsOptions);
  }
};
</script>
<style lang="scss" scoped>
.title {
  color: #474747;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 19.376px;
  line-height: 16px;
  /* identical to box height, or 82% */

  display: flex;
  align-items: center;
}
.paragraph-style {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;

  color: rgba(71, 71, 71, 0.8);
}
</style>
