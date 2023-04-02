const CurrentPlacementQuerySymbol = Symbol.for("current placement query");

export interface CurrentPlacementQuery {
  type: typeof CurrentPlacementQuerySymbol;
}
export type BoardQuery = CurrentPlacementQuery;

export function CurrentPlacementQuery(): CurrentPlacementQuery {
  return { type: CurrentPlacementQuerySymbol };
}

export function isCurrentPlacementQuery(
  query: BoardQuery
): query is CurrentPlacementQuery {
  return query.type === CurrentPlacementQuerySymbol;
}