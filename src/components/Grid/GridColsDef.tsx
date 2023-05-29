import { GridColDef } from "@mui/x-data-grid";
import React from "react";

type GridColDefWithoutField = Omit<GridColDef, 'field'>; // Omit para retirar o field de GridColDef

interface Props {
    items: GridColDef[];
    default?: GridColDefWithoutField;
}

class GridColsDef extends React.Component<Props>{
    constructor(props: Props) {
        super(props);
        this.createColumns(props.items, props.default)
    }
    
    items: GridColDef[] = [];

    createColumns(options: GridColDef[], defaultOptions: Object | undefined) {
        for (let i in options) {
            let el = options[i]
            el = Object.assign({}, defaultOptions, el)
            this.items.push(el)
        }

    }
    getItems() {
        return this.items;
    }
}

export default GridColsDef