import { MenuSection as MenuSectionType } from "@/data/menu";
import { MenuItem } from "./MenuItem";

interface MenuSectionProps {
  section: MenuSectionType;
}

export function MenuSection({ section }: MenuSectionProps) {
  return (
    <section className="mb-12 scroll-mt-20" id={section.id}>
      <div className="mb-6 pb-4 border-b-2 border-amber-300">
        <h2 className="text-3xl font-bold text-amber-900">{section.title}</h2>
      </div>
      <div className="space-y-0">
        {section.items.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
}
