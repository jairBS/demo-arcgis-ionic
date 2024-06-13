import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { TramitePhoto } from '../interfaces/tramite.interface';
import { Capacitor } from '@capacitor/core';
import { Platform } from '@ionic/angular';

@Injectable()
export class PhotosService {
  public photos: TramitePhoto[] = [];
  private PHOTO_STORAGE: string = 'photos';

  private platform: Platform;

  constructor(platform: Platform) {
    this.platform = platform;
  }


  public async addNewToGallery(id_tramite:number) {
    // abriendo la cámara del dispositivo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    // agregando foto al inicio del arreglo QUITAR?
    /*this.photos.unshift({
      filepath: "soon...",
      webviewPath: capturedPhoto.webPath!
    });*/

      // Guarde la imagen y agréguela a la colección de fotos.
    const savedImageFile = await this.savePicture(capturedPhoto/*,id_tramite*/);
    this.photos.unshift(savedImageFile);


    // local localstorage: CapacitorStorage.photos
    Preferences.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.photos),
    });
  }
  // local localstorage: CapacitorStorage.photos
  public async loadSaved() {
    // Retrieve cached photo array data
    const { value } = await Preferences.get({ key: this.PHOTO_STORAGE });
    this.photos = (value ? JSON.parse(value) : []) as TramitePhoto[];

    if(!this.platform.is('hybrid')) {
          // more to come...
    // Display the photo by reading into base64 format
for (let photo of this.photos) {
  // Read each saved photo's data from the Filesystem
  const readFile = await Filesystem.readFile({
    path: photo.filepath,
    directory: Directory.Data,
  });

  // Web platform only: Load the photo as base64 data
  photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
}
    }


  }

  // guardar foto en el filesystem
  private async savePicture(photo: Photo/*,id_tramite:number*/) {
     // Convert photo to base64 format, required by Filesystem API to save
  const base64Data = await this.readAsBase64(photo);

  // Write the file to the data directory
  const fileName = Date.now() + '.jpeg';
  const savedFile = await Filesystem.writeFile({
    path: fileName,
    data: base64Data,
    directory: Directory.Data // no accesible para galeria de fotos

    // path: `fotostramites/${fileName}`,
    // data: base64Data,
    // directory: Directory.External // no accesible para galeria de fotos


  });

  if(this.platform.is('hybrid')) {
    return {
      //id_tramite: id_tramite,
      filepath: savedFile.uri,
      webviewPath: Capacitor.convertFileSrc(savedFile.uri),
    };
  } else {
      // Use webPath to display the new image instead of base64 since it's
  // already loaded into memory
  return {
    //id_tramite: id_tramite,
    filepath: fileName,
    webviewPath: photo.webPath
  };
  }
  }


  // PARA WEB
  private async readAsBase64(photo: Photo) {

    // si es dispositivo movil
    if(this.platform.is('hybrid')) {
       // Read the file into base64 format
    const file = await Filesystem.readFile({
      path: photo.path!
    });

    return file.data;
    } else {
       // Fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();

    return await this.convertBlobToBase64(blob) as string;
    }

  }

  private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
        resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });
}
