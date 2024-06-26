
import { Injectable } from "@angular/core";

import * as XLSX from 'xlsx';
import { ExcelTramitesStorageService } from "./load-excel-storage.service";
import { Tramite, TramiteExcel } from "../interfaces/tramite.interface";

@Injectable({
  providedIn: 'root'
})
export class ExcelService {
  constructor(private excelTramitesStorageService: ExcelTramitesStorageService) {

  }

  getRecordsExcel() {
    return this.excelTramitesStorageService.get();
  }

  saveExcelToLocalStorage(dataExcel: TramiteExcel): void {
    console.log("EL FILE EN SAVE LOCALSTORAGE", dataExcel);
    const reader = new FileReader();

    reader.onload = (event:any) => {
      const data = event.target.result;
      console.log("data", data);
      const workbook = XLSX.read(data, {
        type: 'binary'
      });

      const binaryString = btoa(data);

      const excelDeTramite = {
        nombre_archivo: dataExcel.nombre_archivo,
        nombre_tramite: dataExcel.nombre_tramite,
        fileBinary: binaryString
      };

      console.log("EXCEL DEL TRAMITE", excelDeTramite);


      this.excelTramitesStorageService.post(excelDeTramite);
    };
    reader.readAsBinaryString(dataExcel.file);
  }

  /*loadExcelFromLocalStorage(): XLSX.WorkBook | null {
    const base64String = this.localStorageService.getItem('excelFile');
    if(base64String) {
      const binaryString = atob(base64String);
      return XLSX.read(binaryString, {
        type: 'binary'
      });
    }
    return null;
  }*/

}
