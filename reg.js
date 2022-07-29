const App = { 
   data(){
      return { 
         counter:0 ,
         companyActive:false,
         specialistActive:false,
         buyerActive:false,
         companyStaps: 1,
         companyData:{ 
            number: null,
            inn:null,
            FIO:null,
            title:null, 
            site:null,
            email: null,
            componyType:null, 
            password:null, 
         }
      }
   },
   methods:{
      companyActivate(){
         this.companyActive = true
         this.specialistActive=false
         this.buyerActive=false
      },
      specialistActivate(){
         this.specialistActive = true
         this.buyerActive= false
         this.companyActive = false
      },
      buyerActivate(){
         this.companyActive = false
         this.specialistActive=false
         this.buyerActive = true
      },
   }, 
   watch: {
      'companyData.number': function (n, o){
         console.log(o)
         if(n.length >= 11){ this.companyData.number = o }
         if(n.length == 11){ this.companyStaps = 2;} 
        
         this.companyData.number = n.replace(/\s/g, '').replace(/[a-zа-яё]/gi, '')
      },
      'companyData.inn': function (n, o){
         if(n.length == 10){ this.companyStaps = 3;} 
      }
   }, 
   
   


}


const app = Vue.createApp(App).mount("#registration")


