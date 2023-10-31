const {createApp}= Vue;

createApp({
  data(){
    return{
      dataUrl:'server.php',
      title:'Todo List',
      list:[],
      newTask:'',
      isDeletable : true, 
      errMessage :'Completa il task prima di eliminarlo!'
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
      this.isDeletable = true;
      const data = new FormData();
      data.append('todoItem',this.newTask);

      axios.post(this.dataUrl,data)
      .then(result =>{
        this.list = result.data;
        this.newTask = ''
      })

    },

    removeTask(index){
      console.log(index);
      this.intexToDel = index;
      if(this.list[this.intexToDel].doneTask){
        this.isDeletable = true;
        const data = new FormData();
        data.append('delIndex',index);
  
        axios.post(this.dataUrl,data)
        .then(result =>{
          this.list = result.data;
        })
      }else{
        this.isDeletable = false;
      }

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