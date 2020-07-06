import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

interface Column{
  id: 'name' | 'event' | 'relationship';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: Column[] = [
  {id: 'name', label: 'Name', minWidth:200},
  {id: 'event', label: 'Events', minWidth:200},
  {id: 'relationship', label: 'Relationships', minWidth:200}
]

interface Data{
  name: string;
  event: string;
  relationship: string
}

function createData(name:string, event:string, relatinship:string){
  return {name, event, relationship}
}

const rows = [createData('John Anderson', '', ''), createData('Jon Anderson', '', '')];


export default function FixedTable() {



  return ()
}

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  container:{
    maxHeight: 440
  }
})
