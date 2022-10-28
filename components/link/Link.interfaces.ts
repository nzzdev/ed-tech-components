export interface LinkArgs {
  url: string;
  // TODO: Specify allowed targets
  linkTarget?: string;
  innerHtml: string;
  elementType?: "div" | "span";
}
