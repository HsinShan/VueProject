new Vue({
    el:"#root",
    data:{
        health:100,
        end:false
   },
    methods:{
        restart:function(){
            this.health=100
            this.end=false
        },
        punch:function(){
            this.health-=10
            if(this.health<=0){
                this.end=true
            }
        },
     
    },
    computed:{
        
    }
});