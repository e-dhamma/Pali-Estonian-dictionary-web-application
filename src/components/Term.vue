<template>
    <v-container>
      <!-- term metadata -->
      <v-layout>
          <v-flex>
              <h1><i>{{ term.pali }}</i></h1>
              <p><template v-if="term.wordClass || term.gender">({{ term.wordClass }}, {{ term.gender }}) </template><!--<i>hääldus</i> <v-icon>play_arrow</v-icon>--></p>
          </v-flex>
      </v-layout>
      <!-- term meanings -->
      <v-layout v-for='(meaning, i) in term.meaning_set' :key='i' class='mt-3'>
          <v-flex>
              <h3>{{ i + 1}}. {{ meaning.est }} [{{ meaning.rootLang }} <i>{{ meaning.root }}</i> ({{ meaning.rootDescription}})]</h3>
              <p>eng {{ meaning.eng }}</p>
              <p>{{ meaning.expl }}</p>
              <v-expansion-panel>
                  <v-expansion-panel-content>
                      <div slot="header">Täpsemalt</div>
                      <v-card>
                          <v-card-text class="grey lighten-4">
                              <p>{{ meaning.further }}</p>
                              <h4>Tõlkenäited:</h4>
                              <div>
                                  <p v-for='example in meaning.example_set' :key='example.original'>
                                      <i>{{ example.original }}</i><br>
                                      {{ example.translation }}
                                  </p>
                              </div>
                          </v-card-text>
                      </v-card>
                  </v-expansion-panel-content>
              </v-expansion-panel>
          </v-flex>
      </v-layout>
      <!-- Comments-->
      <h2 class='comment-section-header mt-4'>{{numberOfApprovedComments}} kommentaar<template v-if="numberOfApprovedComments != 1">i</template></h2>
      <hr>
      <div v-for='(comment, i) in term.comment_set' :key='"c" + i' v-if="comment.approved == true || comment.preview" class='mt-2'>
        <p><b>{{ comment.author }}:</b> {{ comment.content}}<br>{{ comment.timestamp | date }}</p>
      </div>
      <!-- Add comment form-->
      <hr>
      <comment-form :termID="term.id" @commentAdded="showComment($event)"></comment-form>
    </v-container>
</template>

<script>
import { bus } from '../main.js'
import { API } from '../api'
import CommentForm from './CommentForm'
export default {
  created () {
    API.getTerm(this.slug).then(response => { this.term = response.data })
  },
    props: ['slug'],
  mounted () {
    bus.$emit('termChange', this.slug)
  },
  data () {
    return {
      term: { comment_set: [] }
    }
  },
  components: {
    'comment-form': CommentForm
  },
  computed: {
    numberOfApprovedComments () {
      var count = this.term.comment_set.filter(comment => comment.approved)
      return count.length
    }
  },
  methods: {
    showComment (comment) {
      this.term.comment_set.push(comment)
    }
  }
}
</script>

<style scoped>
.comment-section-header {
  font-weight: normal
}
</style>
