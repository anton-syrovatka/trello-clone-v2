type Props = {
  children: React.ReactNode;
};

export function ListWrapper({ children }: Props) {
  return <li className="shrink-0 h-full w-[272px] select-none">{children}</li>;
}
