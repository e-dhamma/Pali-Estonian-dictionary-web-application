<template>
  <v-toolbar
  :clipped-left="$vuetify.breakpoint.lgAndUp"
  app
  fixed
  >
    <!-- For navigation drawer on small screens -->
    <!-- <v-btn icon @click.stop='rightDrawer = !rightDrawer' class='hidden-sm-and-up'>
      <v-icon>menu</v-icon>
    </v-btn> -->
    <v-toolbar-title class='hidden-xs-only'>
      <v-avatar>
        <img src="../../static/DharmaWheel.svg" alt="dhamma-wheel">
      </v-avatar>
      <router-link to='/' tag='span' style='cursor: pointer'>Paali-Eesti sõnaraamat</router-link>
    </v-toolbar-title>

      <!-- Spacer -->
      <div style="width: 85px;"></div>
      <!-- Search -->
      <v-text-field label="Otsi" v-model="searchInput" @keyup.enter.native="searchTerm" ></v-text-field>
      <v-btn icon @click="searchTerm" color="primary"><v-icon>search</v-icon></v-btn>
      <v-spacer></v-spacer>
      <!-- <v-btn
      flat
      v-for='item in menueItems' :key='item.title'>
        <v-icon left>{{ item.icon }}</v-icon>
        {{ item.title }}
      </v-btn> -->
  </v-toolbar>
</template>
