import { createContext } from 'react';


type IPageContext = {
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>
};

const PageContext = createContext<Partial<IPageContext>>({});

export { PageContext };
