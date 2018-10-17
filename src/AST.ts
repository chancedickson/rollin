export type UnaryASTNodeType = "NEGATE" | "RECIPROCAL";

export type BinaryASTNodeType = "ADD" | "MULTIPLY" | "ROLL";

export interface UnaryASTNode<Type extends UnaryASTNodeType> {
  type: Type;
  value: ASTNode;
}

export interface BinaryASTNode<Type extends BinaryASTNodeType> {
  type: Type;
  left: ASTNode;
  right: ASTNode;
}

export function isUnaryASTNode(node: ASTNode): node is UnaryASTNode<any> {
  if (typeof node === "number") {
    return false;
  }
  return node.type === "NEGATE" || node.type === "RECIPROCAL";
}

export function isBinaryASTNode(node: ASTNode): node is BinaryASTNode<any> {
  if (typeof node === "number") {
    return false;
  }
  return (
    node.type === "ADD" || node.type === "MULTIPLY" || node.type === "ROLL"
  );
}

export function isNegateASTNode(node: ASTNode): node is UnaryASTNode<"NEGATE"> {
  return isUnaryASTNode(node) && node.type === "NEGATE";
}

export function isReciprocalASTNode(
  node: ASTNode
): node is UnaryASTNode<"RECIPROCAL"> {
  return isUnaryASTNode(node) && node.type === "RECIPROCAL";
}

export function isAddASTNode(node: ASTNode): node is BinaryASTNode<"ADD"> {
  return isBinaryASTNode(node) && node.type === "ADD";
}

export function isMultiplyASTNode(
  node: ASTNode
): node is BinaryASTNode<"MULTIPLY"> {
  return isBinaryASTNode(node) && node.type === "MULTIPLY";
}

export function isRollASTNode(node: ASTNode): node is BinaryASTNode<"ROLL"> {
  return isBinaryASTNode(node) && node.type === "ROLL";
}

export type ASTNode = UnaryASTNode<any> | BinaryASTNode<any> | number;
