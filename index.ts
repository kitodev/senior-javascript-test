import * as fs from 'fs';
import * as crypto from 'crypto';

class FS {
  private directory: string;
  private contentMap: { [key: string]: string } = {};

  constructor(directory: string) {
    this.directory = directory;
    this.loadContentMap();
  }

  store(filename: string, content: string): void {
    const hash = this.calculateHash(content);
    this.contentMap[filename] = hash;
    this.saveContentMap();
  }

  get(filename: string): string | undefined {
    const hash = this.contentMap[filename];
    if (hash) {
      return this.loadContent(hash);
    }
    return undefined;
  }

  private calculateHash(content: string): string {
    const hash = crypto.createHash('md5');
    hash.update(content);
    return hash.digest('hex');
  }

  private loadContentMap(): void {
    const filePath = this.getFilePath('contentMap.json');
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8');
      this.contentMap = JSON.parse(content);
    }
  }

  private saveContentMap(): void {
    const filePath = this.getFilePath('contentMap.json');
    fs.writeFileSync(filePath, JSON.stringify(this.contentMap, null, 2), 'utf-8');
  }

  private loadContent(hash: string): string | undefined {
    const filePath = this.getFilePath(hash);
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, 'utf-8');
    }
    return undefined;
  }

  private getFilePath(filename: string): string {
    return `${this.directory}/${filename}`;
  }
}

// Example usage:
const fs = new FS("/topdir");

fs.store("filename1", "a very long string1");
fs.store("filename2", "a very long string1");
fs.store("filename3", "a very long string3");
fs.store("filename2", "a very long string3");

const result1 = fs.get("filename1"); // gets 'a very long string1'
const result2 = fs.get("filename2"); // gets 'a very long string3'
const result3 = fs.get("filename3"); // gets 'a very long string3'

console.log(result1);
console.log(result2);
console.log(result3);