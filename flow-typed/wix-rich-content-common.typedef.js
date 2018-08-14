declare module 'wix-rich-content-common' {
  declare export function hasLinksInSelection(editorState: any): boolean;
  declare export function removeLinksInSelection(editorState: any): void;
  declare export function getModalStyles(value : any) : any;
  declare export function mergeStyles<T>(value : { styles: T, theme: any}) : T;
  declare export var EditorModals;
  declare export var MODIFIERS;
  declare export var TOOLBARS;
}
