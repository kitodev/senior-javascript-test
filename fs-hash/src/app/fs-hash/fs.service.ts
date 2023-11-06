import { Inject, Injectable, InjectionToken } from '@angular/core';
import { MD5 } from 'crypto-js';

export const DIRECTORY_PATH = new InjectionToken<string>('directoryPath');

@Injectable({
  providedIn: 'root',
  deps: [DIRECTORY_PATH]
})

export class FS {
  private directoryPath: string;
  private directory: Map<string, string> = new Map(); // mapped directory for the storage

  constructor(@Inject(DIRECTORY_PATH) directoryPath: string) {
    this.directoryPath = directoryPath;
  }

  store(filename: string, content: string): string {
    const filePath: string = `${this.directoryPath}/${filename}`;
    const hash = MD5(filename).toString(); // hash the content
    this.directory.set(filePath, content);

    return hash;
  }

  get(filename: string): string | undefined {
    const filePath: string = `${this.directoryPath}/${filename}`;
    const fetchedData: string | undefined = this.directory.get(filePath);
    console.log(fetchedData);  // log the data for the test code

    return fetchedData;
  }
}