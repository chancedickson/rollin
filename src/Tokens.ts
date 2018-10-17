export type DatalessTokenType =
  | "ADDITION"
  | "SUBTRACTION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "DICE";

export type DataTokenType = "NUMBER";

export type TokenValue = number;

export interface DatalessToken<Type extends DatalessTokenType> {
  type: Type;
}

export interface DataToken<Type extends DataTokenType> {
  type: Type;
  value: TokenValue;
}

export type Token = DatalessToken<any> | DataToken<any>;

export function isAdditionToken(
  token: Token
): token is DatalessToken<"ADDITION"> {
  return token.type === "ADDITION";
}

export function isSubtractionToken(
  token: Token
): token is DatalessToken<"SUBTRACTION"> {
  return token.type === "SUBTRACTION";
}

export function isMultiplicationToken(
  token: Token
): token is DatalessToken<"MULTIPLICATION"> {
  return token.type === "MULTIPLICATION";
}

export function isDivisionToken(
  token: Token
): token is DatalessToken<"DIVISION"> {
  return token.type === "DIVISION";
}

export function isDiceToken(token: Token): token is DatalessToken<"DICE"> {
  return token.type === "DICE";
}

export function isNumberToken(token: Token): token is DataToken<"NUMBER"> {
  return token.type === "NUMBER";
}
