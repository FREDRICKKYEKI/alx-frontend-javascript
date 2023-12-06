///<reference path="./crud.d.ts" />
// Create a directory called task_3 and copy these configuration files into
//  it: package.json, webpack.config.js, tsconfig.json.
// The first part of will require that you build an interface and a type.
//  Inside a file named interface.ts:
// - Create a type RowID and set it equal to number
// - Create an interface RowElement that contains these 3 fields:
//      - firstName: string
//      - lastName: string
//      - age?: number
import { RowElement, RowID } from './interface';
import * as CRUD from './crud';

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
