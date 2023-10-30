const {createApp}= Vue;

createApp({
  data(){
    return{
      title:'Todo List',
      list:[]
    }
  },
  methods:{
    getTask(){
      axios.get('server.php')
      .then(result =>{
        console.log(result.data);
        this.list = result.data;
      })
    }
  },
  mounted(){
    this.getTask();
  }

  

}).mount('#app');