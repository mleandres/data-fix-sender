<template>
  <div id="data-fix">
    <img id="logo" src="@/assets/logo.png">
    <h3>VCAPS Data Fix Request</h3>
    <div class="details-form">
      <form @submit.prevent="submit">
        <div class="input">
          <label for="summary">Issue Summary:</label>
          <textarea
            id="summary"
            v-model="summary">
          </textarea>
        </div>
        <div class="input">
          <label for="scriptWriter">Script Prepared by:</label>
          <input
            type="text"
            id="scriptWriter"
            v-model="scriptWriter">
        </div>
        <div class="input">
          <label for="scriptReviewer">Reviewed by:</label>
          <input
            type="text"
            id="scriptReviewer"
            v-model="scriptReviewer">
        </div>
        <div class="input">
          <label for="tester">Tested by:</label>
          <input
            type="text"
            id="tester"
            v-model="tester">
        </div>
        <div class="input">
          <label for="otherDetails">Other Details:</label>
          <textarea
            id="otherDetails"
            v-model="otherDetails"
            placeholder="optional">
          </textarea>
        </div>
        <div class="submit">
          <button
            class="submit-button"
            @click="submit"
            >Send Email</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'data-fix',
  data () {
    return {
      summary: '',
      scriptWriter: '',
      scriptReviewer: '',
      tester: '',
      otherDetails: '',
      other: []
    }
  },
  methods: {
    submit () {
      const data = {
        summary: this.summary,
        writer: this.scriptWriter,
        reviewer: this.scriptReviewer,
        tester: this.tester,
        details: this.otherDetails
      }
      this.$store.dispatch('sendEmail', data)
    },
    clearFields () {
      this.summary = ''
      this.scriptWriter = ''
      this.scriptReviewer = ''
      this.tester = ''
      this.otherDetails = ''
    }
  }
}
</script>
<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    background-color: #002554;
  }

  body, textarea { font-family: 'Source Sans Pro', sans-serif; }

  #logo {
    margin: 0 0 1em 0;
    width: 40%;
    height: auto;
  }

  h3 {
    letter-spacing: 0.3px;
  }

  textarea {
    display: block;
    width: 50%;
    max-width: 100%;
    height: 3.5em;
    max-height: 10em;
    box-sizing: border-box;
  }

  #data-fix {
    background-color: #FFF;
    height: 90vh;
    margin: 5vh 5vw;
    padding: 5vh 5vw;
    width: 90vw;
    border-radius: 1em;
  }

  .input {
    margin: 1em 0;
  }
  
  .input label {
    display: block;
  }

  .input input {
    width: 50%;
  }

  .submit-button {
    margin: 1em 0;
    padding: 1em;
    border-radius: 0.5em;
  }
</style>
