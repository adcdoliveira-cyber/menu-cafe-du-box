import { MenuItem as MenuItemType } from "@/data/menu";

interface MenuItemProps {
  item: MenuItemType;
}

export function MenuItem({ item }: MenuItemProps) {
  const priceDisplay =
    typeof item.price === "string"
      ? item.price
      : `${item.price.small} / ${item.price.large}`;

  return (
    <div className="border-b border-amber-100 pb-4 mb-4 last:border-b-0 last:mb-0">
      <div className="flex justify-between items-start gap-4 mb-2">
        <div className="flex-1">
          <h3 className="font-semibold text-amber-900 text-lg">{item.name}</h3>
          {item.badge && (
            <p className="text-xs text-amber-700 font-medium mt-1">
              {item.badge}
            </p>
          )}
        </div>
        <span className="text-amber-800 font-bold text-lg whitespace-nowrap">
          {priceDisplay}
        </span>
      </div>
      <p className="text-amber-800 text-sm leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}
