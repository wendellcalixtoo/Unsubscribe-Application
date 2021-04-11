<template>
  <q-card class="my-card q-pa-lg">
    <q-card-section>
      <div class="title-style">Adicionar nova justificativa</div>
    </q-card-section>
    <q-card-section class="q-mt-md">
      <q-input
        class="q-pb-none"
        style="font-size: 14px"
        label="Justificativa"
        placeholder="Digite uma justificativa"
        stack-label
        maxlength="150"
        :value="value"
        @input="updateValue($event)"
        :rules="[val => val.length <= 149 || 'Limite de caracteres excedido']"
      />
      <div class="q-mt-xs" style="text-align: right; color: #7f7f7f">
        {{ value.length }}/150 caracteres
      </div>
    </q-card-section>
    <q-card-section>
      <q-checkbox
        v-model="informObservation"
        label="Permitir que o usuário informe uma observação"
      />
    </q-card-section>
    <q-card-section class="text-right">
      <q-btn
        :disable="value.length === 0"
        @click="$emit('salveJustification')"
        rounded
        color="primary"
        no-caps
        label="Salvar alterações"
        class="q-px-lg"
      />
    </q-card-section>
  </q-card>
</template>
<script>
export default {
  name: "NewJustificantion",
  props: ["value"],
  data() {
    return {
      informObservation: false
    };
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    }
  }
};
</script>
<style lang="scss" scoped>
my-card {
  width: 1019;
  height: 467;
}
.title-style {
  color: #474747;
  font-size: 32px;
  font-weight: 500;
  letter-spacing: -1px;
}
</style>
