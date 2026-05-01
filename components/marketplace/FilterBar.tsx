"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { MARKETPLACE_CATEGORIES, MARKETPLACE_ITEMS } from "@/data/marketplace";
import { MarketplaceCard } from "@/components/marketplace/MarketplaceCard";
import { Eyebrow } from "@/components/ui/Badge";

const ALL_CATEGORY_ID = "all";

export function MarketplaceFilteredGrid() {
  const [active, setActive] = useState<string>(ALL_CATEGORY_ID);
  const items =
    active === ALL_CATEGORY_ID
      ? MARKETPLACE_ITEMS
      : MARKETPLACE_ITEMS.filter((item) => item.category === active);
  const activeMeta =
    active === ALL_CATEGORY_ID
      ? null
      : MARKETPLACE_CATEGORIES.find((c) => c.id === active);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <CategoryChip
          label="All"
          active={active === ALL_CATEGORY_ID}
          onClick={() => setActive(ALL_CATEGORY_ID)}
        />
        {MARKETPLACE_CATEGORIES.map((cat) => (
          <CategoryChip
            key={cat.id}
            label={cat.label}
            active={active === cat.id}
            onClick={() => setActive(cat.id)}
          />
        ))}
      </div>
      {activeMeta && (
        <div className="mb-8 max-w-3xl">
          <Eyebrow>{activeMeta.label}</Eyebrow>
          <p className="mt-2 text-body text-ink-500">{activeMeta.description}</p>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {items.map((item) => (
          <MarketplaceCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

function CategoryChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-pill px-4 py-2 text-sm font-semibold transition",
        active
          ? "bg-ink-900 text-paper"
          : "bg-paper border border-hairline text-ink-700 hover:border-ink-900",
      )}
    >
      {label}
    </button>
  );
}
