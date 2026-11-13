// Fonte única dos dados de contato do site. Alterou telefone, e-mail ou cidade? Mude só aqui.

export const CONTATO = {
  nome: 'Simon Climatização',
  whatsappNumero: '5511942163150',
  whatsappExibicao: '+55 11 94216-3150',
  email: 'simonclimatiza@gmail.com',
  cidade: 'São Paulo / SP',
  areaAtuacao: 'São Paulo, Grande São Paulo e interior do estado',
};

export function linkWhatsApp(mensagem) {
  const base = `https://wa.me/${CONTATO.whatsappNumero}`;
  return mensagem ? `${base}?text=${encodeURIComponent(mensagem)}` : base;
}
