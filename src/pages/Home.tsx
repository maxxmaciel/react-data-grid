import { useState } from 'react';
import BoxSelector from '../components/BoxSelector/BoxSelector';
import GridProdutos from '../components/GridProduto/GridProdutos';
import Header from '../components/Header/Header';
import React from 'react';


const options = ["Conteudos Sincronizados", "Produtos", "QR Code"]

const optionsRender :{ [key: string]: React.ReactElement } = {
  "Conteudos Sincronizados" : <GridProdutos />,
  "Produtos" : <GridProdutos />
}

const c_grid_styled = {
  margin: '0 2vw ',
}

const c_title_styled = {
  height: '85px',
  fontFamily: 'Lato Black',
  display: 'flex',
  alignItems: 'center',
  color: '#212121',
  fontSize: '27px',
}

const Home = () => {
  const [section, setSection] = useState("");
  const selected = (str: string) => {
    setSection(str);
  };

  return (
    <div className='containerMain'>
      <Header />
      <div style={c_grid_styled}>
        <div style={c_title_styled} >
          PORTAL FRANQUEADO
        </div>
        <BoxSelector options={options} selected={selected} flexDirection='column' width='238px' justifyContent="flex-start" marginLeft="25px" />
        {optionsRender[section]}
        
      </div>
    </div>
  )
}

export default Home;