const products = [
    // Alcool
    { img: "img/poliakov-20cl.jpg", alt: "Poliakov 20cl", name: "Poliakov 20cl", price: "0.00€", type: "alcool" },
    { img: "img/poliakov-70cl.jpeg", alt: "Poliakov 70cl", name: "Poliakov 70cl", price: "0.00€", type: "alcool" },
    { img: "img/J&B-70cl.jpeg", alt: "J&B 70cl", name: "J&B 70cl", price: "0.00€", type: "alcool" },
    { img: "img/William-70cl.jpeg", alt: "William Lawson's 70cl", name: "William Lawson's 70cl", price: "0.00€", type: "alcool" },
    { img: "img/JackDaniel-70cl.jpeg", alt: "Jack Daniel's 70cl", name: "Jack Daniel's 70cl", price: "0.00€", type: "alcool" },
    { img: "img/Azur-1L.jpeg", alt: "Azur 1L", name: "Azur 1L", price: "0.00€", type: "alcool" },
    { img: "img/CaptainMorganSpicedGold-70cl.jpeg", alt: "Captain Morgan Spiced Gold 70cl", name: "Captain Morgan Spiced Gold 70cl", price: "0.00€", type: "alcool" },
    { img: "img/Rhum3riviere-70cl.jpeg", alt: "Rhum Trois rivière 70cl", name: "Rhum Trois rivière 70cl", price: "0.00€", type: "alcool" },
    { img: "img/GinGordon-70cl.jpeg", alt: "Gin Gordon’s 70cl", name: "Gin Gordon’s 70cl", price: "0.00€", type: "alcool" },
    { img: "img/TequilaSanJose-70cl.jpeg", alt: "Tequila San José 70cl", name: "Tequila San José 70cl", price: "0.00€", type: "alcool" },
    { img: "img/MartiniBlanc-1L.jpeg", alt: "Martini Blanc 1L", name: "Martini Blanc 1L", price: "0.00€", type: "alcool" },
    { img: "img/MartiniRosso-1L.jpeg", alt: "Martini Rouge 1L", name: "Martini Rouge 1L", price: "0.00€", type: "alcool" },
    { img: "img/Jameson-70cl.jpeg", alt: "Jameson 70cl", name: "Jameson 70cl", price: "0.00€", type: "alcool" },
    { img: "img/ClanCampbell-70cl.jpeg", alt: "Clan Campbell 70cl", name: "Clan Campbell 70cl", price: "0.00€", type: "alcool" },
    { img: "img/Label5-70cl.jpeg", alt: "Label 5 20cl", name: "Label 5 20cl", price: "0.00€", type: "alcool" },
    { img: "img/ClanCampbell-20cl.jpeg", alt: "Clan Campbell 20cl", name: "Clan Campbell 20cl", price: "0.00€", type: "alcool" },
    { img: "img/RhumBlanc-20cl.jpeg", alt: "Rhum Blanc 20cl", name: "Rhum Blanc 20cl", price: "0.00€", type: "alcool" },
    { img: "img/RhumAmbre-70cl.jpeg", alt: "Rhum Ambré 20cl", name: "Rhum Ambré 20cl", price: "0.00€", type: "alcool" },
    { img: "img/ChampagneNicolasFeuillate-75cl.jpeg", alt: "Champagne Nicolas Feuillatte 75cl", name: "Champagne Nicolas Feuillatte 75cl", price: "0.00€", type: "alcool" },

    // Boissons
    { img: "img/cristaline-50cl.jpeg", alt: "Cristaline 50cl", name: "Cristaline 50cl", price: "1.00€", type: "boissons" },
    { img: "img/boisson-33cl.jpg", alt: "Boisson 33cl", name: "Boisson 33cl", price: "1.60€", type: "boissons" },
    { img: "img/redbull-25cl.jpeg", alt: "Red Bull 25cl", name: "Red Bull 25cl", price: "3.00€", type: "boissons" },
    { img: "img/monster-50cl.jpeg", alt: "Monster 50cl", name: "Monster 50cl", price: "3.00€", type: "boissons" },
    { img: "img/Boisson-50cl.png", alt: "Boisson 50cl", name: "Boison 50cl", price: "2.50€", type: "boissons" },

    // Snack
    { img: "img/ChipsLays-135g.jpeg", alt: "Chips 135g", name: "Chips 135g", price: "3.00€", type: "snack" },
    { img: "img/ChipsLays-45g.jpeg", alt: "Chips Lays 45g", name: "Chips Lays 45g", price: "1.50€", type: "snack" },
    { img: "img/Prince.jpeg", alt: "Prince xg", name: "Prince xg", price: "2.00€", type: "snack" },
    { img: "img/Granola.jpeg", alt: "Granola xg", name: "Granola xg", price: "2.00€", type: "snack" },
    { img: "img/ChipsBretz.jpeg", alt: "Chips Bretz xg", name: "Chips Bretz xg", price: "1.50€", type: "snack" },

    // Bière
    { img: "img/Heineken-50cl.jpeg", alt: "Heineken 50cl", name: "Heineken 50cl", price: "2.00€", type: "biere" },
    { img: "img/Heineken-12x25cl.jpeg", alt: "Heineken 12x25cl", name: "Heineken 12x25cl", price: "2.00€", type: "biere" },
    { img: "img/Heineken-6x25cl.jpeg", alt: "Heineken 6x25cl", name: "Heineken 6x25cl", price: "2.00€", type: "biere" },
    { img: "img/1664-50cl.jpeg", alt: "1664 50cl", name: "1664 50cl", price: "2.00€", type: "biere" },
    { img: "img/1664-12x25cl.jpeg", alt: "1664 12x25cl", name: "1664 12x25cl", price: "2.00€", type: "biere" },
    { img: "img/1664-6x25cl.png", alt: "1664 6x25cl", name: "1664 6x25cl", price: "2.00€", type: "biere" },
    { img: "img/LaGoudale-50cl .jpeg", alt: "La Goudale 50cl", name: "La Goudale 50cl", price: "2.00€", type: "biere" },
    { img: "img/LaGoudaleAmbree-6x25cl.png", alt: "La Goudale Ambrée 6x25cl", name: "La Goudale Ambrée 6x25cl", price: "2.00€", type: "biere" },
    { img: "img/LaGoudaleBlonde-6x25cl.jpeg", alt: "La Goudale Blonde 6x25cl", name: "La Goudale Blonde 6x25cl", price: "2.00€", type: "biere" },
    { img: "img/Leffe-50cl.jpeg", alt: "Leffe 50cl", name: "Leffe 50cl", price: "2.00€", type: "biere" },
    { img: "img/LeffeBlonde-6x25cl.jpeg", alt: "Leffe Blonde 6x25cl", name: "Leffe Blonde 6x25cl", price: "2.00€", type: "biere" },

    // yaourt 
    { img :"img/activia.jpeg", alt: "activia", name: "ACTIVIA NATURE 4x125g", price: "2,25€", type: "yaourt" },
    { img :"img/veloute.jpeg", alt: "veloute", name: "VELOUTE NATURE 4x125g", price: "1.95€", type: "yaourt" },
    { img :"img/gervita.jpeg", alt: "gervita", name: "GERVITA 4x125g", price: "2.65€", type: "yaourt" },
    { img :"img/fjord.jpeg", alt: "fjord", name: "FJORD NATURE 4x125g", price: "2,55€", type: "yaourt" },
    { img :"img/rizaulait.jpeg", alt: "rizaulait", name: "RIZ AU LAIT SAVEUR VANILLE 4x115g", price: "2,65€", type: "yaourt" },
    { img :"img/cremebrulee.jpeg", alt: "cremebrule", name: "CREME BRULEE VANILLE", price: "3,50€", type: "yaourt" },
    { img :"img/fraismalo0", alt: "fraismalo0%", name: "FROMAGE FRAIS MALO 0% 4x100g", price: "2,65€", type: "yaourt" },
    { img :"img/fraismalo20", alt: "fraismalo20%", name: "FROMAGE FRAIS MALO 20% 4x100g", price: "2,65€", type: "yaourt" },
    { img :"img/yaos", alt: "yaos", name: "YAOURT GRECQUE 4x150g", price: "3,50€", type: "yaourt" },
    { img :"img/danettechocolat.jpeg", alt: "danettechocolat", name: "DANETTE CHOCOLAT 4x125g", price: "2,65€", type: "yaourt" },
    { img :"img/danettevanille.jpeg", alt: "danettevanille", name: "DANETTE VANILLE 4x125g", price: "2,65€", type: "yaourt" },
    { img :"img/maminovaananas.jpeg", alt: "mamienovaananas", name: "MAMIE NOVA ANANAS 2x150g", price: "2,25€", type: "yaourt" },
    { img :"img/maminovafraise.jpeg", alt: "mamienovafraise", name: "MAMIE NOVA FRAISE 2x150g", price: "2,25€", type: "yaourt" },
    { img :"img/maminovapeche.jpeg", alt: "mamienovapeche", name: "MAMIE NOVA PECHE 2x150g", price: "2,25€", type: "yaourt" },
    { img :"img/mousseauchocolat.jpeg", alt: "moussechoco", name: "MOUSSE AU CHOCOLAT", price: "2,20€", type: "yaourt" },
    { img :"img/viennoiscafe.jpeg", alt: "vienoicafe", name: "VIENNOIS CAFE 4x100g", price: "2,65€", type: "yaourt" },
    { img :"img/viennoiscafe.jpeg", alt: "vienoicafe", name: "VIENNOIS CHOCOLAT 4x100g", price: "2,65€", type: "yaourt" },
    { img :"img/compotepommebanane.jpeg", alt: "compotepomme", name: "COMPOTE POMME BANANE 4x100g", price: "2,25€", type: "yaourt" },
    { img :"img/compotepommeframboise.jpeg", alt: "compoteframboise", name: "COMPOTE POMME FRAMBOISE 4x100g ", price: "2,25€", type: "yaourt" },
    { img :"img/compotepommepoire.jpeg", alt: "compotepommepoire", name: "COMPOTE POMME POIRE 4x100g", price: "2,25€", type: "yaourt" },
    
    
    { img :"", alt: "", name: "", price: "", type: "yaourt" },
    { img :"", alt: "", name: "", price: "", type: "yaourt" },
    //Beurre et Fromage
    { img :"img/beurrepresidentdemisel.jpeg", alt: "beurredemiseil", name: "x", price: "1.00", type: "cremerie" },
    { img :"img/beurrepresidentdoux.jpeg", alt: "beureedoux", name: "x", price: "1.00", type: "cremerie" },
   


    // Formule
    { img: "img/Formule10€.png", alt: "Formule P1", name: "Formule P1", price: "10.00€", type: "formule" }
];
