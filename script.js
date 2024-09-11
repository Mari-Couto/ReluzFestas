// Navbar
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', function () {
            navLinks.classList.toggle('visible');
        });

        navLinks.addEventListener('click', function (event) {
            if (event.target.tagName === 'A') {
                navLinks.classList.remove('visible');
            }
        });
    }
});

// Detalhes das festas
const festas = {
    Moranguinho: {
        title: "Festa da Moranguinho",
        themeDescription: "Explore a doçura e a diversão com nossa festa temática da Moranguinho. Com cores vibrantes, decorações encantadoras e um ambiente festivo, esta celebração é perfeita para quem busca uma experiência alegre e cheia de charme. Deixe-se envolver pela magia dos detalhes cuidadosamente planejados que transformam cada momento em um doce e memorável encontro.",
        imageGallery: ["img/MoranguinhoG.jpg", "img/MoranguinhoP.jpg"],
        servicesIncluded: "Nossos serviços são projetados para atender desde festas menores até eventos de grande porte. Incluem decoração completa do ambiente, locação de móveis temáticos da Moranguinho, montagem e desmontagem. Cada detalhe é meticulosamente planejado para garantir que sua festa, independentemente do tamanho, seja uma experiência encantadora e livre de preocupações.",
        contactInfo:  "Entre em contato conosco para informações detalhadas e solicitação de orçamento personalizado.",
    },
    Mario: {
        title: "Festa do Mario World",
        themeDescription: "Explore o universo fantástico e colorido do Mario World na sua festa temática. Com decorações inspiradas nos icônicos personagens e cenários deste jogo clássico, mergulhe em uma atmosfera de aventura e diversão. Ideal para os fãs de todas as idades, esta celebração promete transformar seu evento em uma experiência inesquecível.",
        imageGallery: ["img/mario.jpg"],
        servicesIncluded: "Nossos serviços são projetados para atender desde festas menores até eventos de grande porte. Incluem decoração completa do ambiente, locação de móveis temáticos da Moranguinho, montagem e desmontagem. Cada detalhe é meticulosamente planejado para garantir que sua festa, independentemente do tamanho, seja uma experiência encantadora e livre de preocupações.",
        contactInfo:  "Entre em contato conosco para informações detalhadas e solicitação de orçamento personalizado.",
    },
    PatrulhaCanina: {
        title: "Festa Patrulha Canina",
        themeDescription: "Traga a alegria e a aventura da Patrulha Canina para sua festa temática. Com cores vibrantes, decorações encantadoras e um ambiente festivo, esta celebração é perfeita para quem busca uma experiência alegre e cheia de diversão. Deixe-se envolver pela magia dos detalhes cuidadosamente planejados que transformam cada momento em um encontro memorável.",
        imageGallery: ["img/PatrulhaCaninaG.jpg", "img/PatrulhaCaninaP.jpg"],
        servicesIncluded: "Inclui decoração completa do ambiente com temas da Patrulha Canina, locação de móveis temáticos, montagem e desmontagem. Garantimos que sua festa, independentemente do tamanho, seja uma experiência encantadora e livre de preocupações.",
        contactInfo: "Entre em contato conosco para informações detalhadas e solicitação de orçamento personalizado.",
    },
    Formatura: {
        title: "Festa de Formatura",
        themeDescription: "Celebre sua conquista com uma festa de formatura memorável. Com decorações elegantes e sofisticadas, criamos um ambiente que reflete seu sucesso e alegria. Esta celebração é perfeita para comemorar essa conquista importante em sua vida.",
        imageGallery: ["img/formatura.jpg"],
        servicesIncluded: "Oferecemos decoração personalizada para sua festa de formatura, incluindo layout e design exclusivos, coordenação no dia do evento e suporte completo para garantir que sua celebração seja um sucesso.",
        contactInfo: "Entre em contato conosco para informações detalhadas e solicitação de orçamento personalizado.",
    },
    JardimDasBorboletas: {
        title: "Festa Jardim das Borboletas",
        themeDescription: "Entre no mundo encantador do Jardim das Borboletas com nossa festa temática. Com decorações delicadas, inspiradas na natureza e nas borboletas, criamos um ambiente mágico e sereno para sua celebração. Ideal para quem busca uma experiência suave e harmoniosa.",
        imageGallery: ["img/JardimDasBorboletasG.jpg", "img/JardimDasBorboletasP.jpg", "img/jardimdasborboletas2.jpg"],
        servicesIncluded: "Inclui decoração completa do ambiente com tema do Jardim das Borboletas, elementos naturais, montagem e desmontagem. Cada detalhe é planejado para proporcionar uma atmosfera encantadora e relaxante.",
        contactInfo: "Entre em contato conosco para informações detalhadas e solicitação de orçamento personalizado.",
    },
    Hulk: {
        title: "Festa Hulk",
        themeDescription: "Explore a força e a energia do Hulk em sua festa temática. Com decorações vibrantes e poderosas, criamos um ambiente dinâmico e empolgante para os fãs deste herói icônico. Esta celebração é perfeita para quem busca uma experiência cheia de adrenalina.",
        imageGallery: ["img/hulk.jpg"],
        servicesIncluded: "Inclui decoração completa do ambiente com tema do Hulk, elementos impactantes, montagem e desmontagem. Garantimos que sua festa seja uma experiência memorável e repleta de emoção.",
        contactInfo: "Entre em contato conosco para informações detalhadas e solicitação de orçamento personalizado.",
    },
    FundoDoMar: {
        title: "Festa Fundo do Mar",
        themeDescription: "Mergulhe nas profundezas do oceano com nossa festa temática do Fundo do Mar. Com decorações aquáticas e criativas, criamos um ambiente submarino encantador para sua celebração. Ideal para quem busca uma experiência única e refrescante.",
        imageGallery: ["img/FundoDoMarG.png", "img/FundoDoMarP.jpg"],
        servicesIncluded: "Inclui decoração completa do ambiente com tema do Fundo do Mar, elementos marinhos, montagem e desmontagem. Cada detalhe é cuidadosamente planejado para criar uma atmosfera mágica e memorável.",
        contactInfo: "Entre em contato conosco para informações detalhadas e solicitação de orçamento personalizado.",
    },
    Pokemon: {
        title: "Festa Pokémon",
        themeDescription: "Entre no mundo dos Pokémon com nossa festa temática. Com decorações coloridas e divertidas, criamos um ambiente animado e cativante para sua celebração. Ideal para os fãs de todas as idades que desejam uma experiência cheia de aventura e criatividade.",
        imageGallery: ["img/pokemon.jpg"],
        servicesIncluded: "Inclui decoração completa do ambiente com tema Pokémon, elementos temáticos, montagem e desmontagem. Garantimos que sua festa seja um evento inesquecível e repleto de diversão.",
        contactInfo: "Entre em contato conosco para informações detalhadas e solicitação de orçamento personalizado.",
    },
    Safari: {
        title: "Festa Safari",
        themeDescription: "Aventure-se na selva com nossa Festa Safari! Com uma decoração cheia de animais selvagens, plantas exuberantes e detalhes que remetem à savana africana, criamos um ambiente envolvente e divertido. Perfeito para os pequenos exploradores e amantes da natureza.",
        imageGallery: ["img/safari2.jpg"],
        servicesIncluded: "Inclui decoração completa do ambiente com tema Safari, elementos temáticos, montagem e desmontagem. Garantimos que sua festa seja uma aventura inesquecível e cheia de emoção.",
        contactInfo: "Entre em contato conosco para informações detalhadas e solicitação de orçamento personalizado.",
    },
    PoolParty: {
        title: "Festa Pool Party",
        themeDescription: "Mergulhe na diversão com nossa Festa Pool Party! Com decorações coloridas, infláveis e tudo que você precisa para uma festa à beira da piscina, criamos um ambiente refrescante e vibrante. Ideal para comemorar os dias ensolarados com muito estilo e alegria.",
        imageGallery: ["img/PoolParty.jpg"],
        servicesIncluded: "Inclui decoração completa do ambiente com tema Pool Party, elementos temáticos, montagem e desmontagem. Garantimos que sua festa seja um evento inesquecível e cheio de diversão.",
        contactInfo: "Entre em contato conosco para informações detalhadas e solicitação de orçamento personalizado.",
    },
    BosqueEncantado: {
            title: "Festa Bosque Encantado",
            themeDescription: "Entre em um mundo mágico com nossa Festa Bosque Encantado! Com decorações que evocam a serenidade e mistério de uma floresta encantada, sua festa será repleta de elementos mágicos e iluminação suave que transportará todos para um cenário de conto de fadas.",
            imageGallery: ["img/boqueEncantado2.jpeg", "img/BosqueEncantadocake.jpeg"],
            servicesIncluded: "Inclui decoração completa do ambiente com tema Bosque Encantado, pode elementos temáticos como árvores de balões, iluminação especial, personagens amigáveis, montagem e desmontagem. Criamos um ambiente encantador para uma celebração mágica.",
            contactInfo: "Entre em contato conosco para informações detalhadas e solicitação de orçamento personalizado.",
        },
    HarmoniaSuave: {
            title: "Festa Harmonia Suave",
            themeDescription: "Celebre com elegância e tranquilidade em nossa Festa Harmonia Suave! Este tema é ideal para quem aprecia a beleza de uma paleta de cores delicadas, criando uma atmosfera serena e envolvente. Perfeito para eventos que buscam sofisticação e um toque de leveza.",
            imageGallery: ["img/festaCorClara.jpeg", "img/festaCorClara2.jpeg"],
            servicesIncluded: "Inclui decoração completa do ambiente com tons suaves, balões de cores claras ou tons pastéis, pode incluir flores delicadas, iluminação sutil, e montagem e desmontagem. Cada detalhe é cuidadosamente planejado para criar um ambiente harmonioso e encantador.",
            contactInfo: "Entre em contato conosco para informações detalhadas e solicitação de orçamento personalizado.",
        },
    ElegânciaNoturna: {
            title: "Festa Elegância Noturna",
            themeDescription: "Mergulhe em um ambiente sofisticado e intrigante com nossa Festa Elegância Noturna! Este tema utiliza uma paleta de tons escuros e ricos, criando uma atmosfera luxuosa e misteriosa. Ideal para celebrações que desejam um toque de glamour e exclusividade.",
            imageGallery: ["img/festaCorEscura.jpeg"],
            servicesIncluded: "Inclui decoração completa do ambiente com tons escuros, iluminação dramática, detalhes sofisticados, e montagem e desmontagem. Criamos um cenário elegante e envolvente, perfeito para uma festa inesquecível.",
            contactInfo: "Entre em contato conosco para informações detalhadas e solicitação de orçamento personalizado.",
        },
    FestaDoFutebol: {
            title: "Festa do Futebol",
            themeDescription: "Celebre o amor pelo futebol com nossa Festa do Futebol! Este tema é perfeito para os fãs do esporte, trazendo elementos decorativos que refletem a paixão pelo jogo, de forma descontraída e divertida. Ideal para aniversários e confraternizações entre amigos e familiares.",
            imageGallery: ["img/futebol.jpeg"],
            servicesIncluded: "Inclui decoração temática de futebol, e pequenos detalhes que trazem a essência do esporte, além de montagem e desmontagem. Criamos um ambiente acolhedor e animado para uma celebração esportiva inesquecível.",
            contactInfo: "Entre em contato conosco para informações detalhadas e solicitação de orçamento personalizado.",
        }, 
//Mini Tables
        HarryPotter: {
            title: "Mini Table Harry Potter",
            themeDescription: "Entre no mundo mágico de Harry Potter com nossa festa temática encantadora! Com decorações inspiradas nos feitiçaria e nas aventuras de Hogwarts, criamos um ambiente mágico e misterioso, perfeito para fãs da saga. Transforme sua celebração em um conto de fadas com detalhes mágicos e uma atmosfera encantadora.",
            imageGallery: ["img/harrymini.jpeg"],
            servicesIncluded: "Inclui decoração completa do ambiente com tema Harry Potter, elementos mágicos, montagem e desmontagem. Garantimos que sua festa seja um evento inesquecível e cheio de encantamento.",
            contactInfo: "Entre em contato conosco para informações detalhadas e solicitação de orçamento personalizado.",
        },
        Stitch: {
            title: "Mini Table Stitch",
            themeDescription: "Aventuras e diversão esperam por você com a Festa do Stitch! Com decorações vibrantes e inspiradas no adorável alienígena de Lilo & Stitch, esta festa traz um toque exótico e cativante ao seu evento. Ideal para criar momentos inesquecíveis e cheios de personalidade.",
            imageGallery: ["img/stitchmini.jpeg"],
            servicesIncluded: "Inclui decoração completa do ambiente com tema Stitch, elementos inspirados em Lilo & Stitch, montagem e desmontagem. Garantimos que sua festa será uma celebração cheia de personalidade e charme.",
            contactInfo: "Entre em contato conosco para informações detalhadas e solicitação de orçamento personalizado.",
        },
        SafariMickey: {
            title: "Mini Table Safari do Mickey",
            themeDescription: "Explore a savana com o Mickey Mouse em nossa Festa Safari! Com decorações inspiradas nas aventuras do Mickey e seus amigos em um cenário selvagem, esta festa é perfeita para jovens exploradores e amantes da natureza. Um evento animado e cheio de diversão!",
            imageGallery: ["img/safarimickeymini.jpeg"],
            servicesIncluded: "Inclui decoração completa do ambiente com tema Safari do Mickey, elementos temáticos inspirados na savana, montagem e desmontagem. Garantimos uma festa animada e inesquecível.",
            contactInfo: "Entre em contato conosco para informações detalhadas e solicitação de orçamento personalizado.",
        },
        JardimDasBorboletasMini: {
            title: "Mini Table Jardim das Borboletas",
            themeDescription: "Desfrute da tranquilidade e da beleza do Jardim das Borboletas em sua festa temática. Com decorações delicadas e inspiradas na natureza, criamos um ambiente sereno e mágico, ideal para quem busca uma celebração suave e encantadora.",
            imageGallery: ["img/borboletamini.jpeg"],
            servicesIncluded: "Inclui decoração completa do ambiente com tema Jardim das Borboletas, elementos naturais e delicados, montagem e desmontagem. Cada detalhe é planejado para criar um ambiente harmonioso e encantador.",
            contactInfo: "Entre em contato conosco para informações detalhadas e solicitação de orçamento personalizado.",
        },
        SkyePatrulhaCanina: {
            title: "Mini Table Skye da Patrulha Canina",
            themeDescription: "Leve a diversão ao céu com a Festa da Skye da Patrulha Canina! Com decorações inspiradas na corajosa cachorrinha da Patrulha Canina, esta festa traz uma atmosfera vibrante e aventureira, perfeita para fãs da série e para uma celebração cheia de energia.",
            imageGallery: ["img/patrulharosamini.jpeg"],
            servicesIncluded: "Inclui decoração completa do ambiente com tema Skye da Patrulha Canina, elementos coloridos e aventureiros, montagem e desmontagem. Garantimos uma festa animada e cheia de diversão.",
            contactInfo: "Entre em contato conosco para informações detalhadas e solicitação de orçamento personalizado.",
        },
        Flamengo: {
            title: "Mini Table Flamengo",
            themeDescription: "Celebre o amor pelo futebol com a Festa do Flamengo! Com decorações temáticas e detalhes que refletem a paixão pelo time, criamos um ambiente animado e vibrante, ideal para torcedores e para uma festa esportiva inesquecível.",
            imageGallery: ["img/flamengomini.jpeg"],
            servicesIncluded: "Inclui decoração completa do ambiente com tema Flamengo, elementos esportivos e vibrantes, montagem e desmontagem. Garantimos uma festa inesquecível e cheia de energia.",
            contactInfo: "Entre em contato conosco para informações detalhadas e solicitação de orçamento personalizado.",
        },
};




function getParameterByName(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
}

function updatePageContent() {
    const festaKey = getParameterByName('festa');
    const festa = festas[festaKey];
    if (festa) {
        document.getElementById('festa-title').innerText = festa.title;
        document.getElementById('festa-theme-description').innerText = festa.themeDescription;

        const imgContainer = document.getElementById('festa-images');
        if (imgContainer) {
            imgContainer.innerHTML = '';
            festa.imageGallery.forEach(imgSrc => {
                const img = document.createElement('img');
                img.src = imgSrc;
                img.alt = festa.title;
                imgContainer.appendChild(img);
            });
        }

        document.getElementById('festa-services-included').innerText = festa.servicesIncluded;
        document.getElementById('festa-contact-info').innerText = festa.contactInfo;
        const whatsappLink = `https://api.whatsapp.com/send?phone=5579996650148&text=Ol%C3%A1%2C%20quero%20solicitar%20um%20or%C3%A7amento%20para%20a%20festa%20${encodeURIComponent(festa.title)}`;
        const solicitarOrcamentoBtn = document.getElementById('solicitar-orcamento');
        if (solicitarOrcamentoBtn) {
            solicitarOrcamentoBtn.setAttribute('href', whatsappLink);
        }

    } else {
        document.getElementById('festa-title').innerText = "Festa não encontrada";
        document.getElementById('festa-theme-description').innerText = "";
        document.getElementById('festa-images').innerHTML = "";
        document.getElementById('festa-services-included').innerText = "";
        document.getElementById('festa-contact-info').innerText = "";
    }
}

document.addEventListener('DOMContentLoaded', updatePageContent);
