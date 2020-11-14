var app = new Vue({
  el:"#app",
  data:{
    newName:"",
    newType:"",
    newPrice:"",
    newBrand:"",
    newImg:false,
    empty:"",
    addInstrument: false,
    pop: false,
    instrumentDisplay:{},
    cart: [],
   
   
   instrument:[{
     
     name: "Flute",
     type: "Woodwind",
     price: "$1,352.00",
     brand: "Yamaha",
     img: "https://images-na.ssl-images-amazon.com/images/I/716R2xL2mPL._AC_SL1500_.jpg"
   },
   {
     name: "Snare Drum",
     type: "Percussion",
     price: "$149.99",
     brand: "Yamaha",
     img: "https://ak1.ostkcdn.com/images/products/671147/Student-Band-Approved-Snare-Drum-and-Stand-Kit-L946932.jpg"
   },
   {

     name: "Acoustic Bass",
     type: "String",
     price: "$439.99",
     brand: "Fender",
     img: "https://www.tedbrownmusic.com/images/product/medium/1085-AEB10EBK.jpg"
   },   
   {
     name: "Acoustic Guitar",
     type: "String",
     price: "$799.99",
     brand: "Fender",
     img: "https://d1aeri3ty3izns.cloudfront.net/media/58/589071/1200/preview.jpg"
   },
   {
     name: "Electric Guitar",
     type: "String",
     price: "$1,300.00",
     brand: "Maton",
     img: "https://d1aeri3ty3izns.cloudfront.net/media/23/235459/600/preview_4.jpg"
   },
   {
     name: "Ukulele",
     type: "String",
     price: "$200.00",
     brand: "Maton",
     img: "https://www.collinsdictionary.com/images/full/ukulele_322781816_1000.jpg"
     
   }
   ]
  },
  methods:{
    popUp:function(object){
      this.pop=!this.pop;
      this.instrumentDisplay=object;
    },
     form:function(){
      this.addInstrument=!this.addInstrument;
    },
    addCart:function(object, index){
      this.cart.push(object);
      this.instrument.splice(index, 1)
      
    },
    emptyCart:function(){
      this.instrument=this.instrument.concat(this.cart);
      this.cart=[];
    },
    newInstrument: function(){
      this.instrument.push({
        name: this.newName,
        type: this.newType,
        price: this.newPrice,
        brand: this.newBrand,
        img: this.newImg})
      
      this.newName="";
      this.newType="";
      this.newPrice="";
      this.newBrand="";
      this.addInstrument=false;
    }
      
 },
  watch:{
    instrument: function(){
      if(this.instrument.length<=0){
        this.empty="GO AWAY THE STORE IS EMPTY";
      }
      else{
        this.empty="";
      }
    }
  }
  
})