<template>
  <v-container>

    <v-layout row class='mt-4'>
      <v-flex class='text-xs-center'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/d/df/Dharma_Wheel.svg' width='150'>
      </v-flex>
    </v-layout>

    <v-layout row wrap class='mt-2'>
      <v-flex class='text-xs-center'>
        <p class='intro'>Budistliku õpetuse edasiandmiseks loodud mahukas tekstikorpus kätkeb endas keerukat terminoloogiat, mille tõlkimine
            emakeelde on läbi aegade olnud oluliseks sammuks Buddha õpetuse juurdumisel kohalikus kultuuriruumis.
            Käesolev sõnaraamat on mõeldud nii budistliku kirjanduse lugejatele kui tõlkijatele, aidates leida
            terminitele selgitusi ja tõlkevasteid ning panustades ühtse eestikeelse terminoloogia väljakujunemisse.</p>
      </v-flex>
    </v-layout>

    <v-layout row wrap class='mt-2'>
      <v-flex class='text-xs-center text-sm-right'>
        <v-btn  to="/kasutajale">Teave kasutajale</v-btn>
      </v-flex>
      <v-flex class='text-xs-center text-sm-left'>
        <v-btn  to="/">Teine nupp</v-btn>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<style scoped>
  .intro {
    font-size: 1.3em;
  }
</style>
