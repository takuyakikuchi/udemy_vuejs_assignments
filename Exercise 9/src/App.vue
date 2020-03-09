<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <Name v-model="name"/>
          <div class="form-group">
            <label for="email">Email address</label>
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              v-model="userInfo.email"
            />
            <small
              id="emailHelp"
              class="form-text text-muted"
            >We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="userInfo.password"
            />
          </div>
          <div class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="save-check"
              v-model="isStored"
            />
            <label class="form-check-label" for="save-check">Store data?</label>
          </div>
          <button type="submit" class="btn btn-primary" @click.prevent="showUserInfo">Submit</button>
        </div>
      </div>
    </form>
    <hr />
    <div class="row" v-show="submitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{name}}</p>
            <p>Mail: {{userInfo.email}}</p>
            <p>Password: {{userInfo.password}}</p>
            <p>Store in Database?: {{isStored}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Name from './Name.vue';

export default {
  data() {
    return {
      name: '',
      userInfo: {
        email: '',
        password: ''
      },
      isStored: false,
      submitted: false
    }
  },
  methods: {
    showUserInfo() {
      this.submitted = true;
    }
  },
  components: {
    Name,
  }
};
</script>

<style>
</style>
