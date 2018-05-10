<template>
  <div>
    <v-container>

      <v-layout row class='mt-5'>
        <v-flex class='text-xs-center'>
          <img src="/static/img/DharmaWheel.827aa0e.png" alt="logo" width='150'>
        </v-flex>
      </v-layout>

      <v-layout row wrap align-center>
        <v-flex>
          <v-text-field
          value="Otsi"
          style="float:left">
          </v-text-field>
        </v-flex>
        <v-flex>
          <v-btn color="primary"><v-icon>search</v-icon></v-btn>
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

    <v-footer inset app>
      <div style="margin: auto">
        <p style="text-allign: center">See on avatud lähtekoodiga projekt. Vaata lähtekoodi <a href="https://github.com/e-dhamma/Pali-Estonian-dictionary-web-application">siit</a>.</p>
      </div>
    </v-footer>

  </div>
</template>

<style scoped>
  .intro {
    font-size: 1.3em;
  }
  .btn {
    min-width: 40px;
  }
</style>
