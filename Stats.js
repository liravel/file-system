class Stats {
  constructor(type) {
    this.type = type;
  }

  isFile() {
    return this.type === 'file';
  }

  isDirectory() {
    return this.type === 'dir';
  }
}

export default Stats;
