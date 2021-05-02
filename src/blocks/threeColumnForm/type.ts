import FormRowReadTy from "../threeColumnFormRow/type";
type ThreeColumnFormTy = {
  col1Header: string;
  col2Header: string;
  col3Header: string;
  rowData: ReadonlyArray<FormRowReadTy>;
};

export default ThreeColumnFormTy;
