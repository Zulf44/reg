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
         }, 
         selected: null,
         options: [
           { text: 'Федеральный производитель', value: 'А' },
           { text: 'Локальный производитель', value: 'Б' },
           { text: 'Сетевой ритейлер', value: 'В' },
           { text: 'Официальный', value: 'Б' },
           { text: 'Розничный продавец, оффлайн', value: 'Б' },
           { text: 'Розничный интернет-магазин', value: 'Б' },
           { text: 'Генподрядчик', value: 'Б' },
           { text: 'Крупная строительная компания', value: 'Б' },
           { text: 'Небольшая строительная компания', value: 'Б' },
           { text: 'Бригада', value: 'Б' },
           { text: 'Частный мастер', value: 'Б' },
           { text: 'Посредник, агент', value: 'Б' },
           { text: 'Другое', value: 'Б' },
         ]
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
      'companyData.number': function (n, old){
         
         this.companyData.number = n.replace(/\s/g, '').replace(/[a-zа-яё]/gi, '')
         if(n.length > 12){ this.companyData.number = old }
         if(n.length == 11){ this.companyStaps = 2;} 
         
        
      },
      'companyData.inn': function (n, old){
         if(n.length == 12){ this.companyStaps = 3;} 
         if(n.length > 12){this.companyData.inn = old;} 
      },
      'companyData.FIO': function (n, old ){
         this.companyData.FIO = n.replace(/\d/g, "");
         if(n.length > 1){ this.companyStaps = 4;} 
      },
      'companyData.title': function (n, old ){
         this.companyData.title = n.replace(/\d/g, "");
         if(n.length > 1){ this.companyStaps = 5;} 
      },
      'companyData.site': function (n, old ){
        
         if(n.length > 1){ this.companyStaps = 6;} 
      },
      'companyData.email': function (n, old ){
         
         if(n.length > 1){ this.companyStaps = 7;} 
      },
   }, 
   
   


}


const app = Vue.createApp(App).mount("#registration")


