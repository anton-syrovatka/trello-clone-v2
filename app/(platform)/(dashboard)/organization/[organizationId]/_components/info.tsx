'use client';

import Image from 'next/image';
import { CreditCard } from 'lucide-react';
import { useOrganization } from '@clerk/nextjs';

import { Skeleton } from '@/components/ui/skeleton';

type Props = {
  isPro: boolean;
};

export function Info({ isPro }: Props) {
  const { organization, isLoaded } = useOrganization();

  if (!isLoaded) {
    return <Info.Skeleton />;
  }

  if (!organization) {
    return (
      <div className="flex items-center h-[60px]">
        <span>Organization Info is not found.</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-x-4">
      <div className="w-[60px] h-[60px] relative">
        <Image
          fill
          sizes="(max-width: 60px)"
          src={organization.imageUrl}
          alt="Organization"
          className="rounded-md object-cover"
        />
      </div>
      <div className="space-y-1">
        <p className="font-semibold text-xl">{organization.name}</p>
        <div className="flex items-center text-xs text-muted-foreground">
          <CreditCard className="h-3 w-3 mr-1" />
          {isPro ? 'Pro' : 'Free'}
        </div>
      </div>
    </div>
  );
}

Info.Skeleton = function SkeletonInfo() {
  return (
    <div className="flex items-center gap-x-4">
      <div className="w-[60px] h-[60px] relative">
        <Skeleton className="w-full h-full absolute" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-10 w-[200px]" />
        <div className="flex items-center">
          <Skeleton className="h-4 w-4 mr-2" />
          <Skeleton className="h-4 w-[100px]" />
        </div>
      </div>
    </div>
  );
};
