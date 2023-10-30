const {createApp}= Vue;

createApp({
  data(){
    return{
      title:'Todo List'
    }
  },
  methods:{
    getTask(){
      axios.get('server.php')
      .then(result =>{
        console.log(result.data);
      })
    }
  },
  mounted(){
    this.getTask();
  }

  

}).mount('#app');