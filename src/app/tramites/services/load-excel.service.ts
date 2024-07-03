
import { Injectable } from "@angular/core";

import * as XLSX from 'xlsx';
import { ExcelTramitesStorageService } from "./load-excel-storage.service";
import { Tramite, TramiteExcel, TramiteExcelDownload } from "../interfaces/tramite.interface";
import { Platform } from "@ionic/angular";
import { Filesystem, Directory } from "@capacitor/filesystem";
import { FileOpener } from "@capacitor-community/file-opener";

@Injectable({
  providedIn: 'root'
})
export class ExcelService {
  constructor(public excelTramitesStorageService: ExcelTramitesStorageService,
              private platform: Platform
  ) {

  }

  getRecordsExcel() {
    return this.excelTramitesStorageService.get();
  }

  updateDataLocalStorageTramitesExcel(newDataTramitesExcel:any) {
    return this.excelTramitesStorageService.updateDataTramitesExcel(newDataTramitesExcel);
  }

  saveExcelToLocalStorage(dataExcel: TramiteExcel): void {
    const reader = new FileReader();

    reader.onload = (event:any) => {
      const data = event.target.result;
      const workbook = XLSX.read(data, {
        type: 'binary'
      });

      const binaryString = btoa(data);

      const excelDeTramite = {
        nombre_archivo: dataExcel.nombre_archivo,
        nombre_tramite: dataExcel.nombre_tramite,
        fileBinary: binaryString
      };

      this.excelTramitesStorageService.post(excelDeTramite);
    };
    reader.readAsBinaryString(dataExcel.file);
  }

  async openFile(filePath:string) {
    try {
      await FileOpener.open({
        filePath: filePath,
        contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',

      });
    } catch (error) {
      console.log("error al abrir el archivo", error);
    }
  }

  // descargar excel
  async downloadExcel(item: TramiteExcelDownload): Promise<void> {
    const base = `data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,
    ${item.file}`;

    if(this.platform.is("hybrid")) {
      const savedFile = await Filesystem.writeFile({
        path: item.nombre_archivo,
        data: item.file,
        directory: Directory.Documents,
      });

      // abrir excel en el dispositivo
      this.openFile(savedFile.uri);
    } else {
        // Convertir base64 a Blob
      const byteCharacters = atob(base.split(',')[1]);
      const byteNumbers = new Array(byteCharacters.length);

      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

      // Crear un enlace y disparar el evento de descarga
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');

      a.href = url;
      a.download = item.nombre_archivo; // ponerle un nombre al archivo.

      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
      }
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
