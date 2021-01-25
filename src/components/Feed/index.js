import React from "react";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import * as CarrinhoAction from"../../store/actions/actions";

const Feed = ({roupas,adicionarCarrinho})=> {
  return (
    <section>
      <h3>Looks de Moda</h3>
        <ul>
          {roupas.map((item)=>(
           <li key={item.id}>
              {item.cor}|{item.tamanho}|{item.preco}
              <button onClick={()=>adicionarCarrinho(item)}>É meu</button>
            </li>
          ))}
       </ul>
    </section>
  );
};

const mapStateToProps = (state) => ({
  roupas: state.roupas.feed,
});

const mapDispatchToProps= (dispatch)=> bindActionCreators(CarrinhoAction,dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Feed);
