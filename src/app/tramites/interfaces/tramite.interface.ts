export interface Tramite {
  id: null | number,
  nombre: string;
  descripcion: string;
}


export interface TramitePhoto {
  filepath: string;
  webviewPath?: string;
}


export interface TramiteExcel {
  nombre_archivo: string;
  nombre_tramite: string;
  file: File;
}

export interface TramiteExcelDownload {
  nombre_archivo: string;
  nombre_tramite: string;
  file: string;
}
