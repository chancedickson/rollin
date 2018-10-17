export type UnaryASTNodeType = "NEGATE" | "RECIPROCAL";

export type BinaryASTNodeType = "ADD" | "MULTIPLY" | "ROLL";

export interface UnaryASTNode {
  type: UnaryASTNodeType;
  value: ASTNode;
}

export interface BinaryASTNode {
  type: BinaryASTNodeType;
  left: ASTNode;
  right: ASTNode;
}

export function isUnaryASTNode(node: ASTNode): node is UnaryASTNode {
  if (typeof node === "number") {
    return false;
  }
  return !!(<UnaryASTNode>node).value;
}

export function isBinaryASTNode(node: ASTNode): node is BinaryASTNode {
  if (typeof node === "number") {
    return false;
  }
  return !!(<BinaryASTNode>node).left && !!(<BinaryASTNode>node).right;
}

export type ASTNode = UnaryASTNode | BinaryASTNode | number;
