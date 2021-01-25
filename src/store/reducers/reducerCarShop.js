const ESTADO_INICIAL = {
  roupa:{},
  feed: [
    {
      id: 1,
      color: "Blue",
      tamanho: "M",
      preco: "25,00",
    },
    {
      id: 2,
      color: "Purple",
      tamanho: "G",
      preco: "50,00",
    },
    {
      id: 3,
      color: "Pink",
      tamanho: "P",
      preco: "25,00",
    },
  ],
};

export default function roupas(state = ESTADO_INICIAL, action){
   console.log (action)
  if(action.type==="ADICIONAR_CARRINHO"){
    return{
      ...state,
      roupa:action.roupas,
    };
  }

  return state;
}