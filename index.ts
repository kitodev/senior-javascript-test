function md5(content: string): string {
    let hash = 0, i, chr;
    if (content.length === 0) return hash.toString();
    for (i = 0; i < content.length; i++) {
      chr = content.charCodeAt(i);
      hash = ((hash << 5) - hash) + chr;
      hash |= 0; 
    }
    return hash.toString();
  }
   
  class FS {
    private directory: string;
    private fileMap: Map<string, string>; 
    private contentMap: Map<string, string>;
   
    constructor(directory: string) {
      this.directory = directory;
      this.fileMap = new Map();
      this.contentMap = new Map();
    }
   
    store(filename: string, content: string): void {
      const hash = md5(content);
      this.fileMap.set(filename, hash);
      if (!this.contentMap.has(hash)) {
        this.contentMap.set(hash, content);
      }
    }
   
    get(filename: string): string | null {
      const hash = this.fileMap.get(filename);
      if (hash !== undefined) {
        return this.contentMap.get(hash) || null;
      }
      return null;
    }
  }
   
  const fs = new FS("/topdir");
  fs.store("filename1", "a very long string1");
  fs.store("filename2", "a very long string1");
  fs.store("filename3", "a very long string3");
   
  const result1 = fs.get("filename1"); // gets 'a very long string1'
  const result2 = fs.get("filename2"); // gets 'a very long string1'
  const result3 = fs.get("filename3"); // gets 'a very long string3'
   
  console.log(result1, result2, result3);