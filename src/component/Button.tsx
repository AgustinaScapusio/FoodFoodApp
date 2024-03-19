type ButtonProps = {
    text: string;
    onClick: () => void;
    className?: string;
    };

export default function Button({className,text, onClick}: ButtonProps) {
  return (
    <button className={className} onClick={onClick}>{text}</button>
  );
}