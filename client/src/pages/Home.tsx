import { useState } from "react";
import { MenuSection } from "@/components/MenuSection";
import { menuData } from "@/data/menu";
import { ChevronDown } from "lucide-react";

export default function Home() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(["comece-leve"])
  );

  const toggleSection = (id: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedSections(newExpanded);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-amber-200 shadow-sm">
        <div className="container max-w-4xl mx-auto px-4 py-6">
          <div className="text-center">
            <div className="inline-block mb-2">
              <div className="text-4xl font-bold text-amber-900">☕</div>
            </div>
            <h1 className="text-4xl font-bold text-amber-900 mb-2">
              Café Du Box
            </h1>
            <p className="text-amber-700 text-sm font-medium">
              Cardápio Completo - Janeiro 2026
            </p>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="sticky top-20 z-40 bg-white border-b border-amber-100 shadow-sm">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="flex overflow-x-auto gap-2 py-3 -mx-4 px-4">
            {menuData.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  toggleSection(section.id);
                  document.getElementById(section.id)?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="flex-shrink-0 px-3 py-2 text-sm font-medium text-amber-900 hover:bg-amber-100 rounded-lg transition-colors whitespace-nowrap"
              >
                {section.title.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container max-w-4xl mx-auto px-4 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="bg-white rounded-lg p-4 text-center border border-amber-100 shadow-sm">
            <div className="text-2xl font-bold text-amber-900">
              {menuData.reduce((acc, section) => acc + section.items.length, 0)}
            </div>
            <div className="text-xs text-amber-700 font-medium">Itens</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-amber-100 shadow-sm">
            <div className="text-2xl font-bold text-amber-900">
              {menuData.length}
            </div>
            <div className="text-xs text-amber-700 font-medium">Seções</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-amber-100 shadow-sm">
            <div className="text-2xl font-bold text-amber-900">24h</div>
            <div className="text-xs text-amber-700 font-medium">Aberto</div>
          </div>
        </div>

        {/* Menu Sections */}
        <div className="space-y-8">
          {menuData.map((section) => (
            <div key={section.id}>
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between p-4 bg-white rounded-lg border border-amber-200 hover:bg-amber-50 transition-colors mb-4"
              >
                <h2 className="text-2xl font-bold text-amber-900">
                  {section.title}
                </h2>
                <ChevronDown
                  className={`w-6 h-6 text-amber-900 transition-transform ${
                    expandedSections.has(section.id) ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expandedSections.has(section.id) && (
                <div className="bg-white rounded-lg p-6 border border-amber-100 shadow-sm animate-in fade-in slide-in-from-top-2 duration-200">
                  <MenuSection section={section} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-16 pt-8 border-t border-amber-200 text-center">
          <p className="text-amber-700 text-sm mb-2">
            💡 Monte seu açaí ou sua vitamina com adicionais da seção{" "}
            <span className="font-bold">ENERGIA EXTRA</span>
          </p>
          <p className="text-amber-600 text-xs">
            Cardápio sujeito a alterações. Consulte disponibilidade em tempo
            real.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-amber-900 text-white mt-16">
        <div className="container max-w-4xl mx-auto px-4 py-8 text-center">
          <p className="text-sm opacity-90">
            © 2026 Café Du Box. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
