// // type Product = {
// //   name: string;
// //   price: number;
// // };

// // class Estabilishment {
// //   private address: string;
// //   private sector: string;
// //   private product: Product[];

// //   constructor(address: string, sector: string, product: Product[]) {
// //     (this.address = address), 
// //     (this.sector = sector), 
// //     (this.product = product);
// //   }
// // }

// class Estabilishment {
//     _waitingList?: number
//     constructor(
//       public address: string,
//       public sector: string,
//       private product: Product[],
//       waitingList?: number
      
//     ){
//         this._waitingList = waitingList ?? 10;
//     }

//     public showNameProducts(){
//         return this.product.map(p => p.name)
//     }

//     getWaitingList(){
//         return this._waitingList
//     }

//     //set fila de espera
//     setWaitingList(waitingList: number){
//         if(waitingList <= 0){
//             return
//         }

//         this._waitingList = waitingList
//     }
//     decreaseWaitingList(){
//         if(this._waitingList === 0){
//             return
//         }

//         this._waitingList -= 1;
//     }
// }

// const padaria = new Estabilishment(
//     "Rua ABC, bloco 23, loja 2", 
//     "alimentação",
//     [
//         {name: "Pão", price: 0.5},
//         {name: "Queijo minas", price: 4.5}
//     ]
// );

// console.log(padaria);
// console.log(padaria.showNameProducts());

