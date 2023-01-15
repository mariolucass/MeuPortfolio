export interface ITextAreaProps {
  placeholder: string;
  children: string;
  id: "message";
  setState: React.Dispatch<React.SetStateAction<string>>;
}
