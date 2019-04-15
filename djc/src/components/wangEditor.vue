<template>
  <div class="hello">
      <div id="wang">
      </div>
  </div>
</template>

<script>
  import E from 'wangeditor'
  import axios from 'axios'
export default {
  name: 'wangeditor',
  props: {
    value: {
      type: String
    },
    isChange: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      editor: null,
      token: ""
    }
  },
  methods: {
    getToken() {
      axios.get("http://up.yaojunrong.com/getToken").then(res => {
        this.token = res.data.data;
      })
    }
  },
  created() {
    let _this = this;
    this.getToken();
    this.$nextTick(() => {
      this.editor = new E("#wang");
      this.editor.customConfig.customUploadImg = function (files, insert) {
        var form = new FormData();
        form.append("file", files[0]);
        form.append("token", _this.token);
        axios.post("https://upload-z1.qiniup.com",form).then(res => {
          console.log(res)
          insert(res.data.url);
        })
      }
      this.editor.customConfig.onchange = function (html) {
        // html 即变化之后的内容
        _this.$emit("input",html);

      }
      this.editor.create();
    })
  },
  watch: {
    value(val) {
      if(!this.isChange){
        this.editor.txt.html(val);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>