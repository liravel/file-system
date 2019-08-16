import Stats from './Stats';


class Node{
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  getStats() {
    return new Stats(this.type);
  }
  getName() {
    return this.name;
  }
}

export default Node;
