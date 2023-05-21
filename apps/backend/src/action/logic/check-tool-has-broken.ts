import { EventSource } from "~/models/event";
import { ResultAsync, errAsync } from "neverthrow";
import { BrokenToolCommand, Event } from "@packages/domain";

export interface CheckToolHasBroken {
  (repository: EventSource<Event>, command: BrokenToolCommand): ResultAsync<
    boolean,
    Error
  >;
}

/**
 * *description*
 * check tool has broken on player
 *
 * *param* source - event source
 * *param* command - broken tool command
 */
export const checkToolHasBroken: CheckToolHasBroken = (source, command) => {
  //@todo: read from event source
  //@todo: aggregate events to get current user state
  //@todo: check tool has broken
  return errAsync(new Error("not implemented"));
};

export default checkToolHasBroken;
