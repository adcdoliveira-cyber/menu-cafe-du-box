export interface MenuItem {
  name: string;
  description: string;
  price: string | { small: string; large: string };
  badge?: string;
}

export interface MenuSection {
  id: string;
  title: string;
  icon?: string;
  items: MenuItem[];
}

export const menuData: MenuSection[] = [
  {
    id: "comece-leve",
    title: "☀️ COMECE LEVE",
    items: [
      {
        name: "Pão na Chapa",
        description: "Pão francês tostado com margarina. Um clássico simples e nutritivo para começar bem o dia!",
        price: "R$ 5,90",
      },
      {
        name: "Pão na Chapa FIT (½ Salgado ½ Doce)",
        description: "Metade com margarina, metade banana, mel e pasta de amendoim finalizado com aveia ou granola. Uma combinação perfeita entre o sabor do salgado e o açúcar do doce!",
        price: "R$ 11,90",
      },
      {
        name: "Pão na Chapa FIT (Doce)",
        description: "Pão francês na chapa com banana, mel, pasta de amendoim e finalizado com aveia ou granola. Energia e sabor no ponto certo para dar aquele gás no seu dia!",
        price: "R$ 13,90",
      },
      {
        name: "Pão na Chapa FAT (Doce)",
        description: "Pão quentinho na chapa, recheado com creme de avelã ou doce de leite, coberto com banana, amendoim crocante e finalizado com calda de chocolate, morango ou caramelo. Doce na medida certa pra matar a vontade sem pensar duas vezes.",
        price: "R$ 15,90",
      },
      {
        name: "Pão na Chapa com Ovos e Queijo",
        description: "Pão francês na chapa com margarina, dois ovos (mexidos, fritos ou omeleta) e queijo muçarela derretido. Simples e perfeito pra quem não abre mão do essencial!",
        price: "R$ 10,90",
      },
      {
        name: "Queijo Quente",
        description: "Pão francês na chapa com margarina e queijo muçarela derretido. Clássico, cremoso e aconchegante. Vai bem em qualquer hora do dia!",
        price: "R$ 7,90",
      },
      {
        name: "Misto Quente",
        description: "Pão francês com margarina, queijo e presunto tostados na chapa. O lanche que nunca sai de moda. Saboroso, completo e sempre bem-vindo!",
        price: "R$ 9,90",
      },
      {
        name: "Pão de Queijo",
        description: "Clássico, leve e sempre quentinho. Uma porção perfeita para acompanhar seu café ou comer o dia com aquele sabor mineiro que todo mundo ama!",
        price: "R$ 7,90",
        badge: "5 unidades",
      },
    ],
  },
  {
    id: "refeicoes-leves",
    title: "🥗 REFEIÇÕES LEVES E PROTEICAS",
    items: [
      {
        name: "Sanduíche de Ovo",
        description: "Pão sírio recheado com ovo, queijo, presunto e bacon. Leve, nutritivo e pronto em minutos.",
        price: "R$ 12,90",
      },
      {
        name: "Sanduíche de Frango",
        description: "Pão sírio recheado com frango, queijo e lombo canadense. Sabor marcante com dose extra de proteína.",
        price: "R$ 14,90",
      },
      {
        name: "Crepioca de Frango com Queijo",
        description: "Crepioca com frango desfiado, queijo muçarela derretido e refogado de cebola e tomate. Uma escolha rica em proteínas e muito sabor.",
        price: "R$ 18,90",
      },
      {
        name: "Waffle de Pão de Queijo",
        description: "Nosso pão de queijo em versão waffle com ovo frito e queijo muçarela derretido.",
        price: "R$ 20,90",
      },
    ],
  },
  {
    id: "hamburgueres-especiais",
    title: "🍔 HAMBÚRGUERES (QUA/QUI/SEX)",
    items: [
      {
        name: "D.U Burguer (Double Under)",
        description: "Dois hambúrgueres de 180g (picanha, fraldinha ou costela), duas fatias de queijo provolone, cebola caramelizada e molho de cheddar no pão com gergelim. Insano no sabor.",
        price: "R$ 49,90",
      },
      {
        name: "S.U Burguer (Single Under)",
        description: "Hambúrguer de 180g (picanha, fraldinha ou costela), queijo provolone, cebola caramelizada e molho de cheddar no pão com gergelim. Potência na medida certa.",
        price: "R$ 39,90",
      },
      {
        name: "Burpee Burguer",
        description: "Hambúrguer de 180g (picanha, fraldinha ou costela), queijo muçarela, alface, cebola, tomate e picles no pão com gergelim. Leve, suculento e cheio de energia.",
        price: "R$ 34,90",
      },
      {
        name: "Sprawl Burguer (Especial da Casa)",
        description: "Linguiça de porco recheada, queijo muçarela, molho à campanha e geleia de pimenta no pão de rosquinha. Agridoce, ousado e viçante.",
        price: "R$ 32,90",
      },
    ],
  },
  {
    id: "hamburgueres-diarios",
    title: "🍔 HAMBÚRGUER (TODOS OS DIAS)",
    items: [
      {
        name: "Hambúrguer",
        description: "Hambúrguer de 180g (picanha, fraldinha ou costela) no pão com gergelim.",
        price: "R$ 20,90",
      },
      {
        name: "X-Burguer",
        description: "Hambúrguer de 180g (picanha, fraldinha ou costela), queijo muçarela no pão com gergelim.",
        price: "R$ 22,90",
      },
      {
        name: "Egg X-Burguer",
        description: "Hambúrguer de 180g (picanha, fraldinha ou costela), ovo frito e queijo muçarela no pão com gergelim.",
        price: "R$ 24,90",
      },
    ],
  },
  {
    id: "hidrate-se",
    title: "💧 HIDRATE-SE",
    items: [
      {
        name: "Água sem gás / com gás",
        description: "Refrescante e pura.",
        price: { small: "R$ 3,90", large: "R$ 4,90" },
        badge: "510ml",
      },
      {
        name: "Água sem gás",
        description: "Refrescante e pura.",
        price: "R$ 6,90",
        badge: "1,5L",
      },
      {
        name: "Coca-Cola Normal / Zero",
        description: "O clássico que nunca sai de moda.",
        price: "R$ 4,90",
        badge: "200ml",
      },
      {
        name: "Coca-Cola Plus Café Espresso",
        description: "O melhor dos dois mundos: café e refrigerante.",
        price: "R$ 5,90",
        badge: "200ml",
      },
      {
        name: "Coca-Cola Normal / Zero",
        description: "O clássico que nunca sai de moda.",
        price: "R$ 6,90",
        badge: "350ml",
      },
      {
        name: "Coca-Cola Normal / Zero",
        description: "O clássico que nunca sai de moda.",
        price: "R$ 14,90",
        badge: "2L",
      },
      {
        name: "Mate Leão / Iced Tea Limão ou Pêssego",
        description: "Refrescante e energético.",
        price: "R$ 5,90",
        badge: "300ml",
      },
      {
        name: "Água Tônica / Schweppes Citrus",
        description: "Sofisticado e refrescante.",
        price: "R$ 6,90",
      },
      {
        name: "Sucos Sabores Variados",
        description: "Natural e saudável.",
        price: "R$ 8,90",
        badge: "300ml",
      },
    ],
  },
  {
    id: "momento-cafe",
    title: "☕ MOMENTO CAFÉ",
    items: [
      {
        name: "Café Espresso Longo",
        description: "Intenso e encorpado.",
        price: "R$ 5,90",
        badge: "50ml",
      },
      {
        name: "Café Espresso Duplo Suave",
        description: "Suave e aromático.",
        price: "R$ 6,90",
        badge: "100ml",
      },
      {
        name: "Café Coado Individual",
        description: "Método Clever. Tradicional e saboroso.",
        price: "R$ 7,90",
        badge: "150ml",
      },
      {
        name: "Café Americano",
        description: "Leve e refrescante.",
        price: "R$ 6,90",
        badge: "150ml",
      },
      {
        name: "Café Pingado",
        description: "Clássico com um toque de leite.",
        price: "R$ 7,90",
        badge: "150ml",
      },
      {
        name: "Cappuccino Trad. / Clássico",
        description: "Cremoso e equilibrado.",
        price: { small: "R$ 9,90", large: "R$ 8,90" },
        badge: "200ml",
      },
      {
        name: "Café Proteico",
        description: "Com Whey Protein. Energia e sabor.",
        price: "R$ 10,90",
        badge: "150ml",
      },
      {
        name: "Affogato",
        description: "Sorvete, borda de creme de avelã ou doce de leite e amendoim.",
        price: "R$ 10,90",
      },
      {
        name: "Café Bombom",
        description: "Iced Spanish Latte. Sofisticado e delicioso.",
        price: "R$ 15,90",
        badge: "300ml",
      },
      {
        name: "Honey Cinnamon Iced Latte",
        description: "Doce, aromático e refrescante.",
        price: "R$ 15,90",
        badge: "300ml",
      },
    ],
  },
  {
    id: "recupere-energias",
    title: "⚡ RECUPERE SUAS ENERGIAS",
    items: [
      {
        name: "Gatorade Sabores",
        description: "Hidratação e energia.",
        price: "R$ 9,00",
        badge: "500ml",
      },
      {
        name: "Monster Normal / Zero / Sabores",
        description: "Energia potente.",
        price: "R$ 12,90",
        badge: "473ml",
      },
      {
        name: "Vitamina de Banana",
        description: "Nutritiva e deliciosa.",
        price: { small: "R$ 10,90", large: "R$ 12,90" },
        badge: "300ml / 500ml",
      },
      {
        name: "Vitamina de Morango",
        description: "Fresca e saudável.",
        price: { small: "R$ 12,90", large: "R$ 14,90" },
        badge: "300ml / 500ml",
      },
      {
        name: "Açaí Natural",
        description: "Antioxidante e poderoso.",
        price: { small: "R$ 11,90", large: "R$ 18,90" },
        badge: "300ml / 500ml",
      },
      {
        name: "Sorvete",
        description: "2 bolas, amendoim e calda.",
        price: "R$ 10,90",
      },
    ],
  },
  {
    id: "energia-extra",
    title: "✨ ENERGIA EXTRA (ADICIONAIS)",
    items: [
      {
        name: "Banana, Leite Condensado, Calda",
        description: "Escolha um adicional.",
        price: "R$ 2,00",
      },
      {
        name: "Aveia",
        description: "Fibras e energia.",
        price: "R$ 2,50",
      },
      {
        name: "Amendoim Triturado, Granola",
        description: "Escolha um adicional.",
        price: "R$ 3,00",
      },
      {
        name: "Mel, Pasta de Amendoim, Creme de Avelã, Doce de Leite",
        description: "Escolha um adicional.",
        price: "R$ 3,50",
      },
      {
        name: "Morango, Creatina",
        description: "Escolha um adicional.",
        price: "R$ 4,00",
      },
      {
        name: "Pré Treino",
        description: "1 dose - 3g.",
        price: "R$ 7,00",
      },
      {
        name: "Whey",
        description: "1 dose - 30g.",
        price: "R$ 9,00",
      },
    ],
  },
  {
    id: "para-relaxar",
    title: "🍺 PARA RELAXAR",
    items: [
      {
        name: "Heineken",
        description: "Cerveja Premium.",
        price: { small: "R$ 11,90", large: "R$ 7,90" },
        badge: "Long Neck / Lata",
      },
      {
        name: "Eisenbahn Pilsen / IPA",
        description: "Artesanal e saborosa.",
        price: { small: "R$ 11,90", large: "R$ 13,90" },
      },
      {
        name: "Stella Artois",
        description: "Clássica e elegante.",
        price: { small: "R$ 11,90", large: "R$ 10,90" },
        badge: "Long Neck / Lata",
      },
      {
        name: "Stella Artois Pure Gold",
        description: "Premium e exclusiva.",
        price: "R$ 11,90",
        badge: "Long Neck",
      },
      {
        name: "Budweiser Zero",
        description: "Sem álcool, cheio de sabor.",
        price: "R$ 9,90",
        badge: "Long Neck",
      },
      {
        name: "Caipirinha / Caipivodka de Limão",
        description: "Refrescante e clássica.",
        price: { small: "R$ 12,90", large: "R$ 14,90" },
      },
      {
        name: "Caipirinha / Caipivodka de Frutas",
        description: "Colorida e saborosa.",
        price: { small: "R$ 14,90", large: "R$ 16,90" },
      },
      {
        name: "Caipirinha de Limão s/ Álcool",
        description: "Refrescante para todos.",
        price: "R$ 10,90",
        badge: "Água Tônica - 300ml",
      },
      {
        name: "Combos com 5 Long Necks",
        description: "Escolha suas cervejas favoritas.",
        price: "R$ 54,50",
      },
    ],
  },
];
