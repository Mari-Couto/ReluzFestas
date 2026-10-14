const THEMES = [
{id:'Moranguinho',name:'Moranguinho',category:'Infantis',images:['MoranguinhoG','MoranguinhoP'],description:'Cores vibrantes, delicadeza e um toque de doçura para uma comemoração cheia de charme.',featured:true},
{id:'Mario',name:'Super Mario',category:'Infantis',images:['mario'],description:'Uma festa colorida inspirada no universo de Mario e seus personagens.',featured:true},
{id:'JardimDasBorboletas',name:'Jardim das Borboletas',category:'Infantis',images:['JardimDasBorboletas','JardimDasBorboletasP','JardimDasBorboletasG'],description:'Borboletas, natureza e cores delicadas em uma decoração encantadora.',featured:true},
{id:'Formatura',name:'Formatura',category:'Celebrações',images:['formatura'],description:'Uma decoração especial para celebrar conquistas e novos começos.',featured:true},
{id:'PatrulhaCanina',featured:true,name:'Patrulha Canina',category:'Infantis',images:['PatrulhaCaninaG','PatrulhaCaninaP'],description:'Os personagens da Patrulha Canina em um cenário cheio de cor e aventura.'},
{id:'Hulk',name:'Hulk',category:'Infantis',images:['hulk'],description:'O universo dos super-heróis para uma comemoração cheia de energia.'},
{id:'FundoDoMar',name:'Fundo do Mar',category:'Infantis',images:['FundoDoMarG','FundoDoMarP'],description:'Cores e elementos do oceano para mergulhar em uma festa especial.'},
{id:'Pokemon',name:'Pokémon',category:'Infantis',images:['pokemon'],description:'Uma composição divertida e colorida para fãs do universo Pokémon.'},
{id:'Safari',featured:true,name:'Safari',category:'Infantis',images:['Safari2','Safari'],description:'Animais e natureza em uma decoração para pequenos exploradores.'},
{id:'PoolParty',name:'Pool Party',category:'Celebrações',images:['PoolParty','PoolParty2'],description:'Uma decoração alegre para celebrar com o clima de uma festa na piscina.'},
{id:'BosqueEncantado',name:'Bosque Encantado',category:'Infantis',images:['bosqueEncantado','boqueEncantado2','BosqueEncantadocake'],description:'Um cenário inspirado na natureza, com detalhes que remetem a um bosque mágico.'},
{id:'HarmoniaSuave',name:'Harmonia Suave',category:'Celebrações',images:['festaCorClara','festaCorClara2'],description:'Tons suaves e uma composição delicada para celebrar com elegância.'},
{id:'ElegânciaNoturna',name:'Elegância Noturna',category:'Celebrações',images:['festaCorEscura'],description:'Uma composição em tons escuros para uma celebração sofisticada.'},
{id:'FestaDoFutebol',name:'Futebol',category:'Celebrações',images:['futebol 2','Futebol'],description:'Uma decoração para comemorar a paixão pelo futebol.'},
{id:'HarryPotter',name:'Harry Potter — Mini Table',category:'Infantis',format:'Mini Table',images:['harrymini'],description:'Uma composição compacta inspirada no universo de Harry Potter para pequenas celebrações.'},
{id:'Stitch',name:'Stitch — Mini Table',category:'Infantis',format:'Mini Table',images:['stitchmini'],description:'Uma Mini Table com o tema Stitch, pensada para uma comemoração em um espaço menor.'},
{id:'SafariMickey',name:'Safari do Mickey — Mini Table',category:'Infantis',format:'Mini Table',images:['safarimickeymini'],description:'Mickey e safari em uma composição compacta e cheia de detalhes.'},
{id:'JardimDasBorboletasMini',name:'Jardim das Borboletas — Mini Table',category:'Infantis',format:'Mini Table',images:['borboletamini'],description:'Borboletas e cores delicadas em uma versão Mini Table para uma pequena celebração.'},
{id:'SkyePatrulhaCanina',name:'Skye da Patrulha Canina — Mini Table',category:'Infantis',format:'Mini Table',images:['patrulharosamini'],description:'A personagem Skye em uma composição compacta da Patrulha Canina.'},
{id:'Flamengo',name:'Flamengo — Mini Table',category:'Celebrações',format:'Mini Table',images:['flamengomini'],description:'Uma Mini Table temática para celebrar com as cores do Flamengo.'}
];
const PHONE = '5579996650148';
const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
const escapeHTML = text => String(text).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const whatsappURL = message => 'https://wa.me/'+PHONE+'?text='+encodeURIComponent(message);
const themeMessage = (name,mode='theme') => mode==='pickup' ? `Olá! Tenho interesse no Pegue e Monte do tema ${name} e gostaria de mais detalhes.` : mode==='setup' ? `Olá! Tenho interesse no tema ${name} com montagem inclusa e gostaria de mais detalhes.` : `Olá! Tenho interesse no tema ${name} e gostaria de mais detalhes.`;
const findThemes = (query,category='Todos',format='Todos') => THEMES.filter(t=>(category==='Todos'||t.category===category)&&(format==='Todos'||(t.format||'Peças normais')===format)&&normalize(t.name).includes(normalize(query)));
