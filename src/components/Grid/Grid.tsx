import Box from '@mui/material/Box';
import { ButtonProps } from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider, alpha, createTheme, styled } from '@mui/material/styles';
import {
  DataGrid, GridApi, GridColDef, GridCsvExportMenuItem,
  GridCsvExportOptions,
  GridExportMenuItemProps, GridToolbarContainer,
  GridToolbarContainerProps,
  GridToolbarExportContainer,
  gridClasses,
  gridFilteredSortedRowIdsSelector,
  gridVisibleColumnFieldsSelector,
  ptBR,
  useGridApiContext
} from '@mui/x-data-grid';
import * as React from 'react';
import { useState } from 'react';
import { nullOrUndefined } from '../../types/types';
import { GridStyle } from './GridStyle';

const ODD_OPACITY = 0.2;

const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
  [`& .${gridClasses.row}.even`]: {
    backgroundColor: '#EBEEF0',
    '&:hover, &.Mui-hovered': {
      backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
    '&.Mui-selected': {
      backgroundColor: alpha(
        theme.palette.primary.main,
        ODD_OPACITY + theme.palette.action.selectedOpacity,
      ),
      '&:hover, &.Mui-hovered': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY +
          theme.palette.action.selectedOpacity +
          theme.palette.action.hoverOpacity,
        ),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY + theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  },
}));


const theme = createTheme(
  {
    palette: {
      primary: { main: 'rgb(33, 33, 33)' },
    },
  },
  ptBR ,

);


const getJson = (apiRef: React.MutableRefObject<GridApi>) => {
  // Select rows and columns
  const filteredSortedRowIds = gridFilteredSortedRowIdsSelector(apiRef);
  const visibleColumnsField = gridVisibleColumnFieldsSelector(apiRef);

  // Format the data. Here we only keep the value
  const data = filteredSortedRowIds.map((id) => {
    const row: Record<string, any> = {};
    visibleColumnsField.forEach((field) => {
      row[field] = apiRef.current.getCellParams(id, field).value;
    });
    return row;
  });

  return JSON.stringify(data, null, 2);
};

const exportBlob = (blob: Blob, filename: string) => {
  // Save the blob in a json file
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();

  setTimeout(() => {
    URL.revokeObjectURL(url);
  });
};


function JsonExportMenuItem(props: GridExportMenuItemProps<{}>) {
  const apiRef = useGridApiContext();

  const { hideMenu } = props;

  return (
    <MenuItem
      onClick={() => {
        const jsonString = getJson(apiRef);
        const blob = new Blob([jsonString], {
          type: 'text/json',
        });
        exportBlob(blob, 'DataGrid_demo.json');

        // Hide the export menu after the export
        hideMenu?.();
      }}
    >
      Export JSON
    </MenuItem>
  );
}

const csvOptions: GridCsvExportOptions = { delimiter: ';' };

function CustomExportButton(props: ButtonProps) {
  return (
    <GridToolbarExportContainer {...props}>
      <GridCsvExportMenuItem options={csvOptions} />
      <JsonExportMenuItem />
    </GridToolbarExportContainer>
  );
}


function CustomToolbar(props: GridToolbarContainerProps) {
  return (
    <GridToolbarContainer {...props}>
      <CustomExportButton />
    </GridToolbarContainer>
  );

}


type Props = {
  rows: Array<object>; // obrigátorio
  columns: GridColDef[]; // obrigátorio
  height?: number; // opcional
  width?: number; // opcional
  pageSize?: number; // opcional
  setStore: (data: Fields[]) => void
}
interface Fields /*extends Teste*/ {
  id: number;
  lastName: string | nullOrUndefined;
  firstName: string | nullOrUndefined;
  age: number | nullOrUndefined;
}



const Grid: React.FC<Props> = ({ rows, columns, height, width, pageSize, setStore }) => {

  const [data, setData] = useState<Fields[]>([]);

  const showForm = (e: Object) => {
    console.log(e);
    console.log(data);
    /*setStore(data);*/
  }


  const handleInputChange = (event: { rows: { dataRowIdToModelLookup: Fields[]; }; }) => {
    setStore(event.rows.dataRowIdToModelLookup);
  };
 
  
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ height: height || "auto", width: width || 100 + '%' } } style={{padding: "25px 0"}}  >
      <StripedDataGrid
        rows={rows}
        autoHeight={true}
        columns={columns}
        style={GridStyle}
        onCellDoubleClick={showForm}
        getRowClassName={(params) => {
          return params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
        }
        }
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: pageSize || 10,
            },
          },
        }}
        slots={{
          toolbar: CustomToolbar
        }}
        pageSizeOptions={[10]}
        checkboxSelection={true}

        disableRowSelectionOnClick
        onStateChange={(event) => { setData(event.rows.dataRowIdToModelLookup); }}

      />

    </Box>
    </ThemeProvider>
  );
}

export default Grid;


