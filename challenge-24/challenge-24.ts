type Node = { value: string; left?: any; right?: any };

function isTreesSynchronized(
  tree1: Node | undefined,
  tree2: Node | undefined
): [boolean, string] {
  if (!tree1 || !tree2) return [false, ''];

  function checkNode(tree1Node: Node, tree2Node: Node): boolean {
    if ((!tree1Node && tree2Node) || (tree1Node && !tree2Node)) return false;

    if (!tree1Node && !tree2Node) return true;

    if (tree1Node.value !== tree2Node.value) return false;

    return (
      checkNode(tree1Node.left, tree2Node.right) &&
      checkNode(tree1Node.right, tree2Node.left)
    );
  }

  if (checkNode(tree1, tree2)) {
    return [true, tree1.value];
  }

  return [false, tree1?.value || ''];
}

export default isTreesSynchronized;
