class Tree {
  constructor(key, meta, parent) {
    this.parent = parent;
    this.key = key;
    this.meta = meta;
    this.children = new Map();
  }

  getKey() {
    return this.key;
  }

  getMeta() {
    return this.meta;
  }

  addChild(key, meta) {
    const child = new Tree(key, meta, this);
    this.children.set(key, child);

    return child;
  }

  getChild(key) {
    return this.children.get(key);
  }

  hasChildren() {
    for (let [key, value] of this.children) {
      return true;
    }
    return false;
  }

  hasChild(key) {
    return this.children.has(key);
  }

  getParent() {
    return this.parent;
  }
  removeChild(key) {
    return this.children.delete(key);
  }
  getDeepChild(keys) {
   const result = keys.reduce((acc, key) => {
     if (acc.hasChild(key)) {
       return acc.getChild(key)
     }
     return this;
   }, this);
    return result === this ? undefined : result;
  }

  getChildren() {
    return [...this.children.values()];
  }
}

export default Tree;
