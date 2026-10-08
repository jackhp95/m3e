/**
 * Whether a keyboard event originated in an element that uses Home and End to move its caret.
 * @param {KeyboardEvent} e The keyboard event.
 * @returns {boolean} `true` when the event's origin is a text field or editable element.
 * @internal
 */
export function isEditableTarget(e: KeyboardEvent): boolean {
  const origin = e.composedPath()[0];
  return (
    origin instanceof HTMLTextAreaElement ||
    origin instanceof HTMLInputElement ||
    (origin instanceof HTMLElement && origin.isContentEditable)
  );
}
