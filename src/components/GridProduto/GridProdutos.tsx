import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import aplicar from '../../images/aplicar.png';
import { ResponseSuccess, nullOrUndefined } from "../../types/types";
import BoxSelector from "../BoxSelector/BoxSelector";
import Button from "../Button/Button";
import Grid from "../Grid/Grid";
import GridColsDef from "../Grid/GridColsDef";
import WindowComponent from "../WindowComponent/WindowComponent";
import WindowComponentStyled from "../WindowComponent/WindowComponentStyled";

type Props = {}

interface Fields /*extends Teste*/ {
  id: number;
  lastName: string | nullOrUndefined;
  firstName: string | nullOrUndefined;
  age: number | nullOrUndefined;
}

const options = ["Todos os dias", "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]

const GridProdutos = (props: Props) => {


  const [data, setData] = useState<Fields[]>([]);

  const navigate = useNavigate();

  interface ResponseData extends ResponseSuccess{
    data:Fields[];
  }

  let cols = new GridColsDef(
    {
      default: {
        width: 140,
      },
      items: [
        { field: 'id', headerName: 'ID' },
        {
          field: 'firstName',
          headerName: 'First name',
          width: 150,
        },
        {
          field: 'lastName',
          headerName: 'Last name',
          width: 150,
        },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number', // input só irá aceitar number
          width: 110,
        },/* 
          {
            field: 'fullName',
            headerName: 'Full name',
            description: 'Está coluna não é classificável',
            sortable: false,
            width: 160,
            valueGetter: (params: GridValueGetterParams) =>{
            return params.row.fullName = `${params.row.firstName || ''} ${params.row.lastName || ''}`
            }
            ,
          }, */
      ],

    }
  )
  useEffect(() => {
    async function fetchData() {
      try {
        const response : AxiosResponse<ResponseData>= await axios.get('json/exampleGrid.json');
        if(response.data.success) {
          setData(response.data.data);
        }else {
          navigate("/login.vtt");
        }
      } catch (error) {
        console.error(error);
        setData([]);
      }
    }
    fetchData();
  }, []);

  const [section, setSection] = useState("");
  const selected = (str: string) => {
    setSection(str);
  };


  return (
    <WindowComponentStyled >
      <WindowComponent title="PRODUTOS">
        <div style={GridProdutosStyled}>
          <BoxSelector options={options} selected={selected} flexDirection='row' justifyContent="center" optionChecked={0}/>
        </div>
        <Grid
          rows={data}
          columns={cols.getItems()}
          setStore={(data: Fields[]) => setData(data)}
        />
        <Button text="APLICAR" style={{margin: '0 0 0 25px'}} icone={aplicar} />
      </WindowComponent>
    </WindowComponentStyled>

  )
}

export default GridProdutos;


const GridProdutosStyled = {
  margin: '25px 25px 0 25px'
}