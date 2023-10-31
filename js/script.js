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
      data.append("doneTask", false);

      axios.post(this.dataUrl,data)
      .then(result =>{
        this.list = result.data;
        this.newTask = ''
      })

    },

    removeTask(index){
      console.log(index);
      const data = new FormData();
      data.append('delIndex',index);

      axios.post(this.dataUrl,data)
      .then(result =>{
        this.list = result.data;
      })

    },

    taskToggle(index){
      const data = new FormData();
      data.append('toggleSpan',index);

      axios.post(this.dataUrl,data)
      .then(result =>{
        this.list = result.data;
      })
    }

  },
  mounted(){
    this.getTask();
  }

  

}).mount('#app');