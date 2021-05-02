import FormRowReadTy from "../threeColumnFormRow/type";
type ThreeColumnFormTy = Readonly<{
  title: string;
  col1Header: string;
  col2Header: string;
  col3Header: string;
  rowData: ReadonlyArray<FormRowReadTy>;
}>;

export default ThreeColumnFormTy;
