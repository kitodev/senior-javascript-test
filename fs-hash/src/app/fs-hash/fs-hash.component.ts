import { Component, NgModule } from '@angular/core';
import { FS } from './fs.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fs-hash',
  templateUrl: './fs-hash.component.html',
  styleUrls: ['./fs-hash.component.css']
})

export class FsHashComponent {
  filename: string | undefined;
  content: string | undefined;
  FSCreate: FS = new FS('/my-directory');


  // test code
  fs = new FS('/topdir');
  
  constructor() {
    this.fs.store('filename1', 'A very long string 1');
    this.fs.store('filename2', 'A very long string 2');
    this.fs.store('filename3', 'A very long string 3');

    this.fs.get('filename1');
    this.fs.get('filename2');
    this.fs.get('filename3');
  }

  // call store method in FS class
  saveContent(filename: string, content: string): void {
    const hashedContent: string = this.FSCreate.store(filename, content);
    console.log(hashedContent);
  }

  // call get method in FS class
  getContent(filename: string): void {    
    const retrievedContent: string | undefined = this.FSCreate.get(filename);
    this.content = retrievedContent;
  }
}

@NgModule({
  declarations: [FsHashComponent],
  imports: [CommonModule]
})

export class FsHashModule {}