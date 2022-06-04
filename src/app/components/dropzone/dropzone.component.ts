import { Component, OnInit } from '@angular/core';
import { faAdd, faCirclePlus, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { NgxFileDropEntry } from 'ngx-file-drop';

@Component({
  selector: 'component-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.scss']
})
export class DropzoneComponent implements OnInit {
  faCirclePlus: IconDefinition = faCirclePlus;

  files: File[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onFileSelected(event: any): void {
    const files = event.target.files as FileList;
    Object.values(files).forEach(file => {
      this.files.push(file)
    });

    console.log(this.files);
  }

  dropped(files: NgxFileDropEntry[]) {
    for (const droppedFile of files) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          this.files.push(file)
        });
    }

    console.log(this.files);
  }
}
