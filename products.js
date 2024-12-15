const products = [
    // Alcool
    { img: "img/poliakov-20cl.jpg", alt: "Poliakov 20cl", name: "Poliakov 20cl", price: "100€", type: "Alcool" },
    { img: "img/poliakov-70cl.jpeg", alt: "Poliakov 70cl", name: "Poliakov 70cl", price: "1000€", type: "Alcool" },
    { img: "img/J&B-70cl.jpeg", alt: "J&B 70cl", name: "J&B 70cl", price: "100€", type: "Alcool" },
    { img: "img/William-70cl.jpeg", alt: "William Lawson's 70cl", name: "William Lawson's 70cl", price: "1000€", type: "Alcool" },
    { img: "img/JackDaniel-70cl.jpeg", alt: "Jack Daniel's 70cl", name: "Jack Daniel's 70cl", price: "1000€", type: "Alcool" },
    { img: "img/Azur-1L.jpeg", alt: "Azur 1L", name: "Azur 1L", price: "1000€", type: "Alcool" },
    { img: "img/CaptainMorganSpicedGold-70cl.jpeg", alt: "Captain Morgan Spiced Gold 70cl", name: "Captain Morgan Spiced Gold 70cl", price: "1000€", type: "Alcool" },
    { img: "img/Rhum3riviere-70cl.jpeg", alt: "Rhum Trois rivière 70cl", name: "Rhum Trois rivière 70cl", price: "1000€", type: "Alcool" },
    { img: "img/GinGordon-70cl.jpeg", alt: "Gin Gordon’s 70cl", name: "Gin Gordon’s 70cl", price: "1000€", type: "Alcool" },
    { img: "img/TequilaSanJose-70cl.jpeg", alt: "Tequila San José 70cl", name: "Tequila San José 70cl", price: "1000€", type: "Alcool" },
    { img: "img/MartiniBlanc-1L.jpeg", alt: "Martini Blanc 1L", name: "Martini Blanc 1L", price: "1000€", type: "Alcool" },
    { img: "img/MartiniRosso-1L.jpeg", alt: "Martini Rouge 1L", name: "Martini Rouge 1L", price: "1000€", type: "Alcool" },
    { img: "img/Jameson-70cl.jpeg", alt: "Jameson 70cl", name: "Jameson 70cl", price: "1005€", type: "Alcool" },
    { img: "img/ClanCampbell-70cl.jpeg", alt: "Clan Campbell 70cl", name: "Clan Campbell 70cl", price: "1005€", type: "Alcool" },
    { img: "img/Label5-70cl.jpeg", alt: "Label 5 20cl", name: "Label 5 20cl", price: "100€", type: "Alcool" },
    { img: "img/ClanCampbell-20cl.jpeg", alt: "Clan Campbell 20cl", name: "Clan Campbell 20cl", price: "100€", type: "Alcool" },
    { img: "img/RhumBlanc-20cl.jpeg", alt: "Rhum Blanc 20cl", name: "Rhum Blanc 20cl", price: "100€", type: "Alcool" },
    { img: "img/RhumAmbre-70cl.jpeg", alt: "Rhum Ambré 20cl", name: "Rhum Ambré 20cl", price: "100€", type: "Alcool" },
    { img: "img/ChampagneNicolasFeuillate-75cl.jpeg", alt: "Champagne Nicolas Feuillatte 75cl", name: "Champagne Nicolas Feuillatte 75cl", price: "1000€", type: "Alcool" },

    // Boissons
    { img: "img/boisson-33cl.jpg", alt: "Boisson 33cl", name: "Boisson 33cl", price: "100€", type: "Boissons" },
    { img: "img/Boisson-50cl.png", alt: "Boisson 50cl", name: "Boison 50cl", price: "100€", type: "Boissons" },
    { img: "img/cristaline-50cl.jpeg", alt: "Cristaline 50cl", name: "Cristaline 50cl", price: "100€", type: "Boissons" },
    { img: "img/redbull-25cl.jpeg", alt: "Red Bull 25cl", name: "Red Bull 25cl", price: "100€", type: "Boissons" },
    { img: "img/monster-50cl.jpeg", alt: "Monster 50cl", name: "Monster 50cl", price: "100€", type: "Boissons" },


    // Snack
    { img: "img/ChipsLays-135g.jpeg", alt: "Chips 135g", name: "Chips 135g", price: "100€", type: "Snack" },
    { img: "img/ChipsLays-45g.jpeg", alt: "Chips Lays 45g", name: "Chips Lays 45g", price: "100€", type: "Snack" },
    { img: "img/Prince.jpeg", alt: "Prince xg", name: "Prince xg", price: "100€", type: "Snack" },
    { img: "img/Granola.jpeg", alt: "Granola xg", name: "Granola xg", price: "100€", type: "Snack" },
    { img: "img/ChipsBretz.jpeg", alt: "Chips Bretz xg", name: "Chips Bretz xg", price: "100€", type: "Snack" },

    // Bière
    { img: "img/Guiness-50cl.jpeg", alt: "Guiness 50cl", name: "Guiness 50cl", price: "100€", type: "Biere" },
    { img: "img/86-50cl.jpeg", alt: "8&6", name: "8&6 50cl ", price: "100€", type: "Biere" },
    { img: "img/1664-50cl.jpeg", alt: "1664 50cl", name: "1664 50cl", price: "100€", type: "Biere" },
    { img: "img/Heineken-50cl.jpeg", alt: "Heineken 50cl", name: "Heineken 50cl", price: "100€", type: "Biere" },
    { img: "img/LaGoudale-50cl .jpeg", alt: "La Goudale 50cl", name: "La Goudale 50cl", price: "100€", type: "Biere" },
    { img: "img/Leffe-50cl.jpeg", alt: "Leffe 50cl", name: "Leffe 50cl", price: "100€", type: "Biere" },
    { img: "img/Sombrero-50cl.png", alt: "sombrero", name: "Sombrero 50cl", price: "100€", type: "Biere" },
    { img: "img/DesperadosRed-50cl.jpeg", alt: "despered50cl", name: "DESPERADOS RED 50cl", price: "100€", type: "Biere" },
    { img: "img/Desperados-50cl.jpeg", alt: "despe50cl", name: "DESPERADOS 50cl", price: "100€", type: "Biere" },
    { img: "img/Desperados-65cl.jpeg", alt: "despe65cl", name: "DESPERADOS 65cl", price: "100€", type: "Biere" },
    { img: "img/Heineken-12x25cl.jpeg", alt: "Heineken 12x25cl", name: "Heineken 12x25cl", price: "1000€", type: "Biere" },
    { img: "img/Heineken-6x25cl.jpeg", alt: "Heineken 6x25cl", name: "Heineken 6x25cl", price: "100€", type: "Biere" },
    { img: "img/1664-12x25cl.jpeg", alt: "1664 12x25cl", name: "1664 12x25cl", price: "1000€", type: "Biere" },
    { img: "img/1664-6x25cl.png", alt: "1664 6x25cl", name: "1664 6x25cl", price: "100€", type: "Biere" },
    { img: "img/LaGoudaleAmbree-6x25cl.png", alt: "La Goudale Ambrée 6x25cl", name: "La Goudale Ambrée 6x25cl", price: "100€", type: "Biere" },
    { img: "img/LaGoudaleBlonde-6x25cl.jpeg", alt: "La Goudale Blonde 6x25cl", name: "La Goudale Blonde 6x25cl", price: "100€", type: "Biere" },
    { img: "img/LeffeBlonde-6x25cl.jpeg", alt: "Leffe Blonde 6x25cl", name: "Leffe Blonde 6x25cl", price: "100€", type: "Biere" },
    { img: "img/LeffeRituel-6x25cl.jpeg", alt: "lefferituelpack", name: "LEFFE RITUEL 6x25cl", price: "100€", type: "Biere" },  
    { img: "img/LeffeTripleBlonde-6x25cl.jpeg", alt: "leffetriple", name: "", price: "100€", type: "Biere" },
    { img: "img/Affligen-6x25cl.jpeg", alt: "affligenpack", name: "AFFLIGEN 6x25cl", price: "100€", type: "Biere" }, 
    { img: "img/Pelforth-6x25cl.jpeg", alt: "pelforthpack", name: "PELFORTH 6x25cl", price: "100€", type: "Biere" },
    { img: "img/Jenlain-6x25cl.png", alt: "jenlain", name: "JENLAIN 6x25cl", price: "100€", type: "Biere" },
    { img: "img/Skoll-3x33cl.jpeg", alt: "Skoll", name: "SKOLL 3x33cl", price: "100€", type: "Biere" },





    // Yaourt 
    { img :"img/activia.jpeg", alt: "activia", name: "ACTIVIA NATURE 4x125g", price: "100€", type: "Yaourt" },
    { img :"img/veloute.jpeg", alt: "veloute", name: "VELOUTE NATURE 4x125g", price: "100€", type: "Yaourt" },
    { img :"img/gervita.jpeg", alt: "gervita", name: "GERVITA 4x125g", price: "100€", type: "Yaourt" },
    { img :"img/fjord.jpeg", alt: "fjord", name: "FJORD NATURE 4x125g", price: "100€", type: "Yaourt" },
    { img :"img/rizaulait.jpeg", alt: "rizaulait", name: "RIZ AU LAIT SAVEUR VANILLE 4x115g", price: "100€", type: "Yaourt" },
    { img :"img/cremebrulee.jpeg", alt: "cremebrule", name: "CREME BRULEE VANILLE", price: "100€", type: "Yaourt" },
    { img :"img/fraismalo0.jpeg", alt: "fraismalo0%", name: "FROMAGE FRAIS MALO 0% 4x100g", price: "100€", type: "Yaourt" },
    { img :"img/fraismalo20.jpeg", alt: "fraismalo20%", name: "FROMAGE FRAIS MALO 20% 4x100g", price: "100€", type: "Yaourt" },
    { img :"img/yaos.jpeg", alt: "yaos", name: "YAOURT GRECQUE 4x150g", price: "100€", type: "Yaourt" },
    { img :"img/danettechocolat.jpeg", alt: "danettechocolat", name: "DANETTE CHOCOLAT 4x125g", price: "100€", type: "Yaourt" },
    { img :"img/danettevanille.jpeg", alt: "danettevanille", name: "DANETTE VANILLE 4x125g", price: "100€", type: "Yaourt" },
    { img :"img/maminovaananas.jpeg", alt: "mamienovaananas", name: "MAMIE NOVA ANANAS 2x150g", price: "100€", type: "Yaourt" },
    { img :"img/maminovafraise.jpeg", alt: "mamienovafraise", name: "MAMIE NOVA FRAISE 2x150g", price: "100€", type: "Yaourt" },
    { img :"img/maminovapeche.jpeg", alt: "mamienovapeche", name: "MAMIE NOVA PECHE 2x150g", price: "100€", type: "Yaourt" },
    { img :"img/mousseauchocolat.jpeg", alt: "moussechoco", name: "MOUSSE AU CHOCOLAT", price: "100€", type: "Yaourt" },
    { img :"img/viennoiscafe.jpeg", alt: "vienoicafe", name: "VIENNOIS CAFE 4x100g", price: "100€", type: "Yaourt" },
    { img :"img/viennoiscafe.jpeg", alt: "vienoicafe", name: "VIENNOIS CHOCOLAT 4x100g", price: "100€", type: "Yaourt" },
    { img :"img/compotepommebanane.jpeg", alt: "compotepomme", name: "COMPOTE POMME BANANE 4x100g", price: "100€", type: "Yaourt" },
    { img :"img/compotepommeframboise.jpeg", alt: "compoteframboise", name: "COMPOTE POMME FRAMBOISE 4x100g ", price: "100€", type: "Yaourt" },
    { img :"img/compotepommepoire.jpeg", alt: "compotepommepoire", name: "COMPOTE POMME POIRE 4x100g", price: "100€", type: "Yaourt" },
    
    

    //Beurre et Fromage
    { img :"img/beurrepresidentdemisel.jpeg", alt: "beurredemiseil", name: "BEURRE PRESIDENT DEMI-SEL 250g", price: "100€", type: "Cremerie" },
    { img :"img/beurrepresidentdoux.jpeg", alt: "beureedoux", name: "BEURRE PRESIDENT DOUX 250g", price: "100€", type: "Cremerie" },
    { img :"img/omega3.jpeg", alt: "margarineomega3", name: "ST HUBERT OMEGA3 250g", price: "100€", type: "Cremerie" },
    { img :"img/Plantafin.jpeg", alt: "margarineplantafin", name: "PLANTAFIN 250g", price: "100€", type: "Cremerie" },
    { img :"img/primevere.jpeg", alt: "margarineprimevere", name: "PRIMEVERE 250G", price: "100€", type: "Cremerie" },
    { img :"img/fromagepresident.jpeg", alt: "camenbertpresident", name: "PRESIDENT 250G", price: "100€", type: "Cremerie" },
    { img :"img/fromagecoeurdelion.jpeg", alt: "camenbertcoeurdelion", name: "COEUR DE LION 250g", price: "100€", type: "Cremerie" },
    { img :"img/fromagelerustique.jpeg", alt: "camembertlerustique", name: "LE RUSTIQUE 250g", price: "100€", type: "Cremerie" },
    { img :"img/fromagel'ortolan.jpeg", alt: "cambertlortolan", name: "L'ORTOLAN 220g", price: "100€", type: "Cremerie" },
    { img :"img/fromagechausséeauxmoines.jpeg", alt: "camembertchausse", name: "CHAUSSEE AUX MOINES 340g", price: "100€", type: "Cremerie" },
    { img :"img/fromagebriedesducs.jpeg", alt: "briedesducs", name: "BRIE DES DUCS", price: "100", type: "Cremerie" }, 
    { img :"img/fromagecapricedesdieux.jpeg", alt: "capricedesdieux", name: "CAPRICE DES DIEUX 200g", price: "100", type: "Cremerie" },
    { img :"img/roquefortsociete.jpeg", alt: "roquefort", name: "ROQUEFORT SOCIETE 100g", price: "100€", type: "Cremerie" },
    { img :"img/fromagechevresoignon.jpeg", alt: "chevresognon", name: "BUCHE CHEVRE STE MAURE 200g", price: "100€", type: "Cremerie" },
    { img :"img/feta.jpeg", alt: "feta", name: "FETA 200g", price: "100€", type: "Cremerie" },
    { img :"img/feta.jpeg", alt: "mozzarella", name: "MOZZARELLA 125g", price: "100g€", type: "Cremerie" },
    { img :"img/mascarpone.jpeg", alt: "mascarpone", name: "MASCARPONE 250g", price: "100€", type: "Cremerie" },
    { img :"img/parmesan.jpeg", alt: "parmesan", name: "PERMIGIANO REGGIANO 60g", price: "100g", type: "Cremerie" },
    { img :"img/fromagerape.jpeg", alt: "fromagerape", name: "EMMENTAL RAPE 200g", price: "100€", type: "Cremerie" },

    { img :"img/leerdammer.jpeg", alt: "leerdamer ", name: "LEERDAMMER 200G 8TR", price: "100€", type: "Cremerie" },
    { img :"img/fromageemmental.jpeg", alt: "emmental", name: "COEUR DE MEULE EMMENTAL 250g", price: "100€", type: "Cremerie" },
    { img :"img/fromageconté.jpeg", alt: "comteentremont", name: "ENTREMONT COMTE 200g", price: "100€", type: "Cremerie" },
    { img :"img/philadelphia.jpeg", alt: "philadelphia", name: "PHILADELPHIA 150g", price: "100€", type: "Cremerie" },
    { img :"img/fromagekiri.jpeg", alt: "kiri", name: "KIRI 8PR 144G", price: "100€", type: "Cremerie" },
    { img :"img/fromagevachequirit.jpeg", alt: "vachequirit", name: "VACHE QUI RIT 12PR 192g", price: "100€", type: "Cremerie" },
    { img :"img/Tranchecheddar.jpeg", alt: "tranchetteburger", name: "TRANCHETTE BURGER CHEDDAR 200g", price: "100€", type: "Cremerie" },
    { img :"img/croqueemmental.jpeg", alt: "tranchetteemmental", name: "TRANCHETTE EMMENTAL 200g", price: "100€", type: "Cremerie" },

    
    { img :"img/panzanicoquillette.jpeg", alt: "", name: "", price: "100€", type: "Pate" },
    { img :"img/panzanicouderaye.jpeg", alt: "", name: "", price: "100€", type: "Pate" },
    { img :"img/panzanifarfale.jpeg", alt: "", name: "", price: "100€", type: "Pate" },
    { img :"img/panzaniserpenntini.jpeg", alt: "", name: "", price: "100€", type: "Pate" },
    { img :"img/panzanipiperigate.jpeg", alt: "", name: "", price: "100€", type: "Pate" },
    { img :"img/panzaniprovencale.png", alt: "", name: "", price: "100€", type: "Pate" },
    { img :"img/panzanibolognaise.jpeg", alt: "", name: "", price: "100€", type: "Pate" },
    { img :"img/panzanipesto.jpeg", alt: "", name: "", price: "100€", type: "Pate" },
    { img :"img/panzanitomacouli.jpeg", alt: "", name: "", price: "100€", type: "Pate" },
    { img :"img/zapettitomate.jpeg", alt: "", name: "", price: "100€", type: "Pate" },
    { img :"img/lessieurmayopot.jpeg", alt: "", name: "", price: "100€", type: "Pate" },
    { img :"img/lessieurmayotube.jpeg", alt: "", name: "", price: "100€", type: "Pate" },
    { img :"img/maillecornichon.jpeg", alt: "", name: "", price: "100€", type: "Pate" },
    { img :"img/beneidctamayocitron.jpeg", alt: "", name: "", price: "100€", type: "Pate" },
    { img :"img/benedictabearnaise.png", alt: "", name: "", price: "100€", type: "Pate" },
    { img :"img/barillaarrabiatata.jpeg", alt: "", name: "", price: "100€", type: "Pate" },
    { img :"img/bellefrancecoulitomate.jpeg", alt: "", name: "", price: "100€", type: "Pate" },
    { img :"img/amorasamourai.jpeg", alt: "", name: "", price: "100€", type: "Pate" },
    { img :"img/amoraketchup.jpeg", alt: "", name: "", price: "100€", type: "Pate" },
    { img :"img/amoramoutardetube.jpeg", alt: "", name: "", price: "100€", type: "Pate" },
    { img :"img/amoramoutardepot.jpeg", alt: "", name: "", price: "100€", type: "Pate" },
    { img :"img/amorabbq.jpeg", alt: "", name: "", price: "100€", type: "Pate" },


    { img :"img/williamblanquette.jpeg", alt: "", name: "", price: "100€", type: "Plat Préparé" },
    { img :"img/williamboeufbourgui.jpeg", alt: "", name: "", price: "100€", type: "Plat Préparé" },
    { img :"img/williamtartiflette.jpeg", alt: "", name: "", price: "100€", type: "Plat Préparé" },
    { img :"img/williamcolin.jpeg", alt: "", name: "", price: "100€", type: "Plat Préparé" },
    { img :"img/williamsaurinboeufbourgui.jpeg", alt: "", name: "", price: "100€", type: "Plat Préparé" },
    { img :"img/williamsaurincassouletcanard.jpeg", alt: "", name: "", price: "100€", type: "Plat Préparé" },
    { img :"img/williamsaurinpoulet.jpeg", alt: "", name: "", price: "100€", type: "Plat Préparé" },
    { img :"img/garbitcouscous.jpeg", alt: "", name: "", price: "100€", type: "Plat Préparé" },
    { img :"img/bellefrancecassoulet1:2.jpeg", alt: "", name: "", price: "100€", type: "Plat Préparé" },
    { img :"img/bellefrancechoucroute1:2.jpeg", alt: "", name: "", price: "100€", type: "Plat Préparé" },
    { img :"img/bellefrancepetitsale400g.jpeg", alt: "", name: "", price: "100€", type: "Plat Préparé" },
    { img :"img/bellefranceraviolibolo400g.jpeg", alt: "", name: "", price: "100€", type: "Plat Préparé" },
    { img :"img/bellefranceraviolipurboeuf400g.jpeg", alt: "", name: "", price: "100€", type: "Plat Préparé" },
    { img :"img/bellefrancesaucisselentille420g.jpeg", alt: "", name: "", price: "100€", type: "Plat Préparé" },
    { img :"img/bellefrancechiliconcarne.jpeg", alt: "", name: "", price: "100€", type: "Plat Préparé" },
    { img :"img/bellefrancecassoulet44.jpeg", alt: "", name: "", price: "100€", type: "Plat Préparé" },
    { img :"img/bellefrancechocroute4:4.jpeg", alt: "", name: "", price: "100€", type: "Plat Préparé" },
    { img :"img/bellefrancepetitsale800g.jpeg", alt: "", name: "", price: "100€", type: "Plat Préparé" },
    { img :"img/bellefranceraviolipurboeuf800g.jpeg", alt: "", name: "", price: "100€", type: "Plat Préparé" },
    { img :"img/bellefrancetaviolibolo800g.jpeg", alt: "", name: "", price: "100€", type: "Plat Préparé" },
    { img :"img/bellefrancepaela.jpeg", alt: "", name: "", price: "100€", type: "Plat Préparé" },
    { img :"img/bellefrancesaucisselentille840g.jpeg", alt: "", name: "", price: "100€", type: "Plat Préparé" },
    








   


    // Formule
    { img: "img/Formule10€.png", alt: "Formule P1", name: "Formule P1", price: "1000€", type: "ormule" }
];
