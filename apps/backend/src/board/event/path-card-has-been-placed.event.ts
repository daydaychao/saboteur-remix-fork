import type { Placement } from "~/models/placement";
import { PlacementSchema } from "~/models/placement";
import z from "zod";

export const PathCardHasBeenPlacedEventSchema = z.object({
  type: z.literal("path card has been placed"),
  data: z.array(PlacementSchema),
});

export type PathCardHasBeenPlacedEvent = Readonly<
  z.infer<typeof PathCardHasBeenPlacedEventSchema>
>;

export function isPathCardHasBeenPlacedEvent(
  event: unknown
): event is PathCardHasBeenPlacedEvent {
  return PathCardHasBeenPlacedEventSchema.safeParse(event).success;
}

export function PathCardHasBeenPlacedEvent(
  ...data: Placement[]
): PathCardHasBeenPlacedEvent {
  return { type: "path card has been placed", data };
}