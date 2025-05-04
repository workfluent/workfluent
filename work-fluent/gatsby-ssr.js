import { wrapRootElement as wrap } from '../wrapRootElement';

// Set HTML attributes (e.g., language)
export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` });
};

export const wrapRootElement = wrap;
