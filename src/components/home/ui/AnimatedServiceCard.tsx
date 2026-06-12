"use client";

import { cn } from "@/utils/cn";
import { IServiceItem } from "@/types";
import Image from "next/image";

export function AnimatedServiceCard({
  item,
}: Readonly<{ item: IServiceItem }>) {
  return (
    <Card className="z-20">
      <CardSkeletonContainer>
        <IconSkeleton item={item} />
      </CardSkeletonContainer>
      <CardTitle>{item.title}</CardTitle>
      <CardDescription>{item.description}</CardDescription>
    </Card>
  );
}

// THIS COMPLETELY REMOVES THE 5 CIRCLES AND FORCES 1 CENTERED LOGO
const IconSkeleton = ({ item }: Readonly<{ item: IServiceItem }>) => {
  return (
    <div className="w-full flex justify-center items-center py-6">
      <div className="relative h-28 w-28 md:h-32 md:w-32 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.1)] shadow-lg p-3">
        {item.icons && item.icons.length > 0 && item.icons[0] !== "" ? (
          <Image
            src={item.icons[0]}
            alt={`${item.title} Logo`}
            width={120}
            height={120}
            className="object-contain w-full h-full"
            priority
          />
        ) : null}
      </div>
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative w-full h-full mx-auto overflow-hidden rounded-[var(--borderRadius)] border border-[rgba(255,255,255,0.10)] dark:bg-[var(--primaryColor5)] bg-[var(--primaryColor5)] shadow-[2px_4px_16px_0px_rgba(100,100,100,0.06)_inset] group",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-lg lg:text-xl xl:text-2xl font-semibold text-[var(--primaryColor)] dark:text-[var(--primaryColor)] py-2 tracking-wide text-center",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-sm/6 lg:text-base/6 font-normal tracking-wide whitespace-pre-line text-center",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "rounded-[var(--borderRadius)] z-40 mb-4",
        className,
        showGradient &&
          "bg-[rgba(40,40,40,0.20)] dark:bg-[rgba(40,40,40,0.20)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};