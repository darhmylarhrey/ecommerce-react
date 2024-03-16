import { useLayoutEffect } from 'react';

const useDocumentTitle = (title) => {
  useLayoutEffect(() => {
    if (title) {
      document.title = title;
    } else {
      document.title = 'ShopEasy - eCommerce Store';
    }
  }, [title]);
};

export default useDocumentTitle;
