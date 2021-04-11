<template>
  <q-card flat>
    <q-card-section v-if="`${existImg}` === 'true'">
      <img :src="`${imgProp}`" :alt="`${alternativeText}`" />
    </q-card-section>
    <q-card-section class="flex">
      <div class="text-h6 title-style">Nós sentiremos sua falta</div>
      <img class="q-ml-md" src="../../public/icons/cloud.png" alt="Sad cloud" />
    </q-card-section>
    <q-card-section class="paragraph-style">
      <div>
        Lamentamos ver você indo embora.<br />
        Para que possamos <strong>melhorar nossa comunicação</strong>,
        gostariamos <br />
        de <strong>saber os motivos</strong> que o levaram a tomar essa decisão.
        <br />
        <strong>O questionário é opcional</strong>
      </div>
    </q-card-section>
  </q-card>
</template>
<script>
export default {
  props: ["imgProp", "alternativeText", "existImg"]
};
</script>
<style lang="scss" scoped>
.title-style {
  color: rgba(0, 0, 0, 0.6);
  font-size: 30px;
  font-style: normal;
  font-weight: bold;
}
.paragraph-style {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;

  color: rgba(71, 71, 71, 0.8);
}
</style>
