export type Teacher = {
  name: string;
  subject?: string | null;
  designation?: string;
  headName: string;
  level: number;
  isPresent: boolean;
};

export type Student = {
  name: string;
  subject: string;
  teacher?: string | null;
};

export type ThreeColumnFormRowTy = {
  col1Value?: string;
  col2Value?: string;
  col3Value?: string | null;
  isHeader?: boolean;
};

export type ThreeColumnFormTy = {
  col1Header: string;
  col2Header: string;
  col3Header: string;
  rowData: Array<ThreeColumnFormRowTy>;
};

export type TwoColumnFormRowTy = {
  col1Value: string;
  col2Value: {
    options: { key: string; value: string; isSelected: boolean }[];
    selectedItem: string;
  };
};

export type TwoColumnFormTy = {
  callback: (id: string, val: string) => void;
  col1Header: string;
  col2Header: string;
  rowData: Array<TwoColumnFormRowTy>;
};
