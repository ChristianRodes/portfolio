interface SectionLabelProps {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <h3 className="text-lg font-bold text-[#1F4C34] pb-3 mb-8 border-b border-[#1F4C34]">
      {children}
    </h3>
  );
}
