class MinHeap {
  constructor() {
    this.items = [];
  }
  seek() {
    return this.items[0];
  }

  push(item) {
    let i = this.items.length;
    this.items.push(item);
    while (
      i > 0 &&
      this.items[Math.floor((i + 1) / 2 - 1)].priority >
        this.items[i].priority
    ) 
    {
      let t = this.items[i];
      this.items[i] = this.items[Math.floor((i + 1) / 2 - 1)];
      this.items[Math.floor((i + 1) / 2 - 1)] = t;
      i = Math.floor((i + 1) / 2 - 1);
    }
  }

  pop() {
    if (this.items.length <= 1) return this.items.pop();
    const ret = this.items[0];
    this.items[0] = this.items.pop();
    let i = 0;
    while (true) {
      let lowest =
        this.items[(i + 1) * 2].priority <
        this.items[(i + 1) * 2 - 1].priority
          ? (i + 1) * 2
          : (i + 1) * 2 - 1;
      if (this.items[i].priority > this.items[lowest].priority) {
        let t = this.items[i];
        this.items[i] = this.items[lowest];
        this.items[lowest] = t;
        i = lowest;
      } 
      else break;
    }
    return ret;
  }

  delete(item) {
    let i = this.items.indexOf(item);
    // heapify
    this.items[i] = this.items.pop();
    while (true) {
      let lowest =
        this.items[(i + 1) * 2].priority <
        this.items[(i + 1) * 2 - 1].priority
          ? (i + 1) * 2
          : (i + 1) * 2 - 1;
      if (this.items[i].priority > this.items[lowest].priority) {
        let t = this.items[i];
        this.items[i] = this.items[lowest];
        this.items[lowest] = t;
        i = lowest;
      } else break;
    }
  }

  heapify(arr) {
    for (let i = 0; i < arr.length; i++) {
      this.push(arr[i]);
    }
  }
}

export function splitWiseAlgorithm(graph) {
  let myMap = new Map();
  graph.forEach((element) => {
    if (myMap.has(element.from)) {
      let cur = myMap.get(element.from);
      cur += parseInt(element.amount);
      myMap.set(element.from, cur);
    } else {
      myMap.set(element.from, parseInt(element.amount));
    }
    if (myMap.has(element.to)) {
      let cur = myMap.get(element.to);
      cur -= parseInt(element.amount);
      myMap.set(element.to, cur);
    } else {
      myMap.set(element.to, parseInt(-element.amount));
    }
  });
  let kp = new MinHeap();
  console.log(kp.seek());
}
