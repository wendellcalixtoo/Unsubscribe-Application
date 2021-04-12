<template>
  <q-card flat>
    <q-card-section class="title"
      >Por que você quer se descadastrar?</q-card-section
    >
    <q-card-section class="q-pl-xs q-pt-none">
      <div
        v-for="(justificationsOption, idx) in myJustifications"
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
            <q-item-label class="ellipsis" >{{ justificationsOption }}</q-item-label>
          </q-item-section>
        </q-item>
      </div>
      <q-input
        class="q-pl-sm q-pb-none"
        type="text"
        placeholder="Não gostei do layout."
        maxlength="150"
        v-model="othersField"
        :rules="[val => val.length <= 149 || 'Limite de caracteres excedido']"
      />
      <div class="q-mt-xs" style="text-align: right; color: #7f7f7f">
        {{ othersField.length }}/150 caracteres
      </div>
    </q-card-section>
    <q-card-section class="paragraph-style">
      <div>
        O descadastramento será efetuado para o e-mail:
        <div class="text-indigo-8">nome.sobrenome@pmweb.com.br</div>
      </div>
    </q-card-section>
    <q-card-section>
      <q-btn color="primary" rounded no-caps label="Descadastrar" @click="resetLocalStorage" />
    </q-card-section>
  </q-card>
</template>
<script>

import Notify from "../mixins/notify";

export default {
  name: "SelectUnsubscribeOption",
    mixins: [Notify],
  props: ["myJustifications"],
  data() {
    return {
      color: true,
      othersField:""
    };
  },
  methods: {
    resetLocalStorage(){
      window.localStorage.clear()

      this.successNotify("Justificativa enviada!"); 
    }
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
