import { Network } from "vis-network/standalone/esm/vis-network";

export function genrateGraph(data, network, container) {
  console.log(data);
  const options = {
    width: "675px",
    edges: {
      arrows: "from",
      labelHighlightBold: true,
      font: {
        size: 20,
      },
    },
    nodes: {
      font: "10px arial red",
      scaling: {
        label: true,
      },
      shape: "icon",
      icon: {
        face: "FontAwesome",
        code: "\uf183",
        size: 30,
        color: "#991133",
      },
    },
  };
  var set = new Set();
  for (const obj in data) {
    set.add(data[obj].from);
    set.add(data[obj].to);
  }
  let nodeName = [];
  set.forEach((obj) => nodeName.push(obj));
  let V = nodeName.length;
  let nodes = [];
  var myMap = new Map();
  for (let i = 1; i <= V; i++) {
    myMap.set(nodeName[i - 1], i);
    nodes.push({ id: i, label: nodeName[i - 1] });
  }
  let edges = [];
  data.forEach((obj) => {
    edges.push({
      from: myMap.get(obj.from),
      to: myMap.get(obj.to),
      label: obj.amount.toString(),
    });
  });
  let cur_data = {
    nodes: nodes,
    edges: edges,
  };
  network.current = new Network(container.current, cur_data, options);
};
