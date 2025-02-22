import React, { FC } from "react";

type LandingSectionProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

const LandingSection: FC<LandingSectionProps> = ({
  children,
  id,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
  id: string;
}) => {
  return (
    <section className={`w-full flex justify-center ${className}`} id={id}>
      <div className="w-full max-w-7xl px-6 md:px-24">{children}</div>
    </section>
  );
};

export default LandingSection;
