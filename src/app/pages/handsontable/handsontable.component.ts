import { style } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { KeyValue } from '@angular/common';
import { HotTableComponent, HotTableRegisterer } from '@handsontable/angular';
import Handsontable, { CellCoords } from 'handsontable';
import { isEmpty } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';



@Component({
  selector: 'app-handsontable',
  templateUrl: './handsontable.component.html',
  styleUrls: ['./handsontable.component.scss']
})
export class HandsontableComponent implements OnInit  {

  @ViewChild('handsontabel')
   hotTable:HotTableComponent;
   v:any;
    licenseKey = 'non-commercial-and-evaluation';
  // data = [
  //   { id: 1, name: 'Ted Right', address: 'sddssds' },
  //   { id: 2, name: 'Frank Honest', address: 'SDFFDS' },
  //   { id: 3, name: 'Joan Well', address: 'EWDWEDWDWC DDDDW' },
  //   { id: 4, name: 'Gail Polite', address: 'DWSDD DWDD' },
  //   { id: 5, name: 'Michael Fair', address: 'DWDWCW DS' },
  // ];
  BaseURL: string="https://sustanion-devapi.turnkey.systems";
  tableNameData:any[]=[];
  tableNameObj: any;
  iddata: any=[];
  namedata: any=[];

  // tableNameObj: any=[{}];

  constructor(private hotRegisterer: HotTableRegisterer,
    private http: HttpClient, private change:ChangeDetectorRef) {

    }
  ngOnInit(): void {
    this.getapi();
  }


   getapi()
   {
    this.http.get(this.BaseURL + '/parameter_table/index?export=1')
    .subscribe((response:any) => {
      this.tableNameData = response.data;
      this.change.detectChanges();

      console.log("dddd",this.tableNameData);
          this.tableNameObj = response.data.map((i: any)=>{
            this.iddata.push(i.id);
            this.namedata.push(i.name);



            return {
              id: i.id,
              name: i.label,
              label: i.name,
            };
          }
          )
          }
    );

   }

 colHeaders = ['ID', 'Name',];
  settings: Handsontable.GridSettings={
    startRows: 8,
    startCols: 5,
    colHeaders: this.colHeaders,
    stretchH: 'all',
    height: 'auto',
    licenseKey: 'non-commercial-and-evaluation',
    minSpareRows: 1,
    manualColumnResize: true,
    manualRowResize: true,
    data:this.tableNameData,



    //

    columns: [
      {
        data: 'id',


      },
      {
        data: 'label',

      },
      {
        data:'name',
      }
    ],


  }


  /* The id of the table. */
  // id:any="handsontabel";
  update(table:any)
  {
    const hotInstance = table.hotInstance;
    this.v=hotInstance;
    hotInstance.setDataAtCell(0, 1, Math.random());
    console.log(this.tableNameData);

  }
  // getcolumdata(table:any,column:any)
  // {
  //  const tabeldata=table.hotInstance.getDataAtCol(column);
  //  console.log(tabeldata);
  // }
  // getCellLocation(hotTable:any) {
  //   const hotInstance = hotTable.hotInstance;
  //   const cell = hotInstance.getSelectedLast();
  //   if (cell) {
  //     console.log(`Selected cell location: (${cell[0]}, ${cell[1]})`);
  //   } else {
  //     console.log('No cell selected');
  //   }
  // }
  getCellLocation(row:any, row2: any, column2: any, ) {
    // table.hot
    // const hotInstance = this.table.hotInstance;
    // console.log(this.data);
    return 0;

  }


}
