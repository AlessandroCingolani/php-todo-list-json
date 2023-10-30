const {createApp}= Vue;

createApp({
  data(){
    return{
      dataUrl:'server.php',
      title:'Todo List',
      list:[],
      newTask:''
    }
  },
  methods:{
    getTask(){
      axios.get('server.php')
      .then(result =>{
        console.log(result.data);
        this.list = result.data;
      })
    },
    addTask(){
      const data = new FormData();
      data.append('todoItem',this.newTask);

      axios.post(this.dataUrl,data)
      .then(result =>{
        this.list = result.data;
        this.newTask = ''
      })

    }
  },
  mounted(){
    this.getTask();
  }

  

}).mount('#app');