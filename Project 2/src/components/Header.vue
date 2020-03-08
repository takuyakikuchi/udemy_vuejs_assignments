<template>
  <div class="row">
    <div class="col-sm-12">
      <h3>Quotes Added</h3>
      <div class="progress">
        <div 
          class="progress-bar"
          :style="{width: (quoteCount / maxCount) * 100 + '%'}"
        >
          {{quoteCount}} / {{maxCount}}
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['maxCount', 'quoteCount']
  }
</script>

<style>
</style>
