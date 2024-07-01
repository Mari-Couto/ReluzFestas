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
        imageGallery: ["img/JardimDasBorboletasG.jpg", "img/JardimDasBorboletasP.jpg"],
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
    }
    
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
