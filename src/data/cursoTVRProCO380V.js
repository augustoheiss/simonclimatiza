// src/data/cursoTVRProCO380V.js
// ──────────────────────────────────────────────────────────────────────────────
// TVR Pro CO 380V — Diagnóstico e Service Manual Avançado
// 16 Tópicos em 6 Partes · Conteúdo extraído dos artifacts de treinamento
// ──────────────────────────────────────────────────────────────────────────────

export const cursoTVRProCO380V = {
  id: "tvr-pro-co-380v",
  titulo: "TVR Pro CO 380V — Diagnóstico e Service Manual Avançado",
  subtitulo: "Treinamento Técnico Trane · Série 380V",
  descricao:
    "Treinamento técnico avançado do sistema TRANE TVR Pro CO Series 380V. Domine desde a identificação de capacidades e nomenclatura até o diagnóstico avançado de códigos de erro, troubleshooting de componentes eletrônicos (IPM/Retificador), comunicação RS-485, tubulação VRF e contaminação sistêmica.",

  // ──────────────────────────────────────────────────────────────────────────
  // PARTES DO TREINAMENTO (6 Partes, 16 Tópicos)
  // ──────────────────────────────────────────────────────────────────────────
  partes: [
    // ════════════════════════════════════════════════════════════════════════
    // PARTE 1 — Capacidades, Nomenclatura e Combinações
    // ════════════════════════════════════════════════════════════════════════
    {
      id: 1,
      titulo: "PARTE 1 — Capacidades, Nomenclatura e Combinações",
      descricao:
        "O alicerce do conhecimento técnico: identifique cada unidade do ecossistema TVR Pro CO, decodifique a nomenclatura alfanumérica e domine a lógica de escalamento modular de 8HP a 90HP.",
      icone: "book-open",
      cor: "sky",
      topicos: [
        {
          id: "01-01",
          titulo: "Capacidades de Unidades Internas, Externas e Combinações de Sistema",
          descricao:
            "Análise completa das faixas de capacidade dos 9 tipos de unidades internas (Q1 a F), unidades Fresh Air (FA) e HRV. Tabela de combinações modulares de 8HP (módulo único) a 90HP (3 módulos), incluindo os kits de junção TODK obrigatórios. Classes de chassi A, B e C.",
          tempo_estimado: "45 min",
          nivel: "basico",
          tags: ["capacidades", "combinações", "módulos", "chassi", "TODK"],
          videos: [],
          slides: [],

          // ─── CONTEÚDO COMPLETO DA AULA ─────────────────────────
          conteudo_html: `
<h2>Introdução ao Ecossistema TVR Pro CO Series</h2>
<p>O sistema TRANE TVR Pro CO Series é uma plataforma de climatização comercial VRF (Variable Refrigerant Flow) de alta capacidade, projetada para operar com gás refrigerante <strong>R410A</strong> e alimentação elétrica <strong>380V</strong>. O manual de serviço abrange 12 modelos de unidades externas, com nomenclaturas que vão de <strong>4TVY0077HE000AA</strong> (8HP) até <strong>4TVY0290HE000AA</strong> (30HP) como módulos individuais, e atingem até <strong>90HP</strong> em configurações de três módulos combinados.</p>

<p>Para que o profissional de campo opere, dimensione e diagnostique corretamente um sistema TVR Pro CO, é fundamental dominar três pilares:</p>
<ol>
  <li><strong>O que pode ser conectado internamente</strong> — os tipos e capacidades de evaporadoras (unidades internas).</li>
  <li><strong>Qual é a potência do motor externo</strong> — as capacidades das condensadoras (unidades externas).</li>
  <li><strong>Como os módulos se agrupam</strong> — a lógica de combinação modular e os kits de derivação necessários.</li>
</ol>

<hr/>

<h2>Unidades Internas — Tipos e Códigos de Abreviação</h2>
<p>O sistema TVR Pro CO suporta <strong>9 tipos de unidades internas padrão</strong>, cada uma identificada por um código de abreviação que será utilizado em toda a documentação técnica, diagramas de projeto e na nomenclatura do modelo. O profissional deve memorizar esses códigos, pois eles aparecem em plantas baixas, ordens de serviço e etiquetas de identificação dos equipamentos.</p>

<p><strong>Regra de Campo:</strong> Ao chegar em uma instalação existente e precisar identificar o tipo de unidade interna, o código de abreviação é a chave. Se a planta especifica "Q4" para uma sala de reunião, você sabe que é um <strong>Cassete de 4 vias</strong> — equipamento embutido no forro com distribuição de ar em quatro direções. Se especifica "T1", trata-se de um <strong>Duto de alta pressão estática</strong>, normalmente oculto no forro e conectado a uma rede de dutos, ideal para grandes salões comerciais.</p>

<hr/>

<h2>Faixa de Capacidade das Unidades Internas Padrão</h2>
<p>Cada tipo de unidade interna possui uma faixa de capacidade disponível, medida em <strong>kW</strong> e expressa também em <strong>HP</strong> (Horse Power) e em um <strong>índice de capacidade</strong> (Capacity Index) que é o multiplicador utilizado na nomenclatura do modelo.</p>

<h3>Análise Técnica da Matriz</h3>
<ul>
  <li>A unidade <strong>Q1</strong> (Cassete 1 via) é a mais limitada, disponível apenas de 18 a 71 (1.8 kW a 7.1 kW). É ideal para corredores, recepções e espaços lineares.</li>
  <li>A unidade <strong>T1</strong> (Duto de Alta Pressão) é a mais versátil em potência, cobrindo de 71 até 560 (7.1 kW a 56.0 kW / 20HP). É a única unidade interna capaz de atingir capacidades industriais, sendo utilizada em grandes salões de eventos, centros de convenção e áreas produtivas.</li>
  <li>O Cassete <strong>Q4C</strong> (Compacto de 4 vias) opera na faixa de 22 a 45 (2.2 kW a 4.5 kW), limitado a ambientes de pequeno e médio porte.</li>
  <li>Unidades <strong>G</strong> (Hi-Wall) cobrem de 22 a 90 (2.2 kW a 9.0 kW), representando a faixa residencial e de pequenos escritórios.</li>
  <li>Unidades <strong>DL</strong> (Piso-Teto) vão de 36 a 160 (3.6 kW a 16.0 kW), sendo versáteis para salas comerciais médias.</li>
</ul>

<hr/>

<h2>Unidades de Ar Novo (Fresh Air Processing Unit)</h2>
<p>Além das evaporadoras padrão, o sistema TVR Pro CO é compatível com <strong>unidades de processamento de ar novo</strong> (Fresh Air Processing Unit), identificadas pelo código <strong>FA</strong>. Essas unidades captam ar externo, condicionam-no (resfriam ou aquecem) e insuflam ar tratado no ambiente, sendo obrigatórias em projetos que exigem renovação de ar conforme normas sanitárias.</p>
<p>As unidades FA operam de 12.5 kW (125) a 56 kW (560), com sete opções de capacidade. Elas são geralmente instaladas em casas de máquinas ou no topo de edifícios, conectadas a dutos de distribuição.</p>

<hr/>

<h2>Ventiladores de Recuperação de Calor (HRV)</h2>
<p>O sistema também suporta <strong>ventiladores de recuperação de calor (HRV)</strong>, que realizam a troca térmica entre o ar de exaustão (que sai do ambiente) e o ar de insuflação (que entra), recuperando energia e reduzindo o consumo do sistema de climatização.</p>
<p>Os HRVs estão disponíveis em 8 opções de vazão, de 200 m³/h até 2000 m³/h.</p>

<hr/>

<h2>Unidades Externas — Faixa de Capacidade e Modelos</h2>
<p>As unidades externas (condensadoras) do TVR Pro CO Series cobrem uma faixa massiva de <strong>8HP a 30HP como módulos individuais</strong>. Cada modelo é identificado por um código de nomenclatura de 15 dígitos (que será detalhado no Tópico 1.2).</p>

<hr/>

<h2>Lógica de Escalamento Modular — Como o Sistema Cresce de 8HP a 90HP</h2>
<p>A arquitetura modular do TVR Pro CO opera em <strong>três faixas de escalamento</strong>:</p>

<h3>Faixa 1 — Módulo Único (8HP a 30HP)</h3>
<p>Utiliza um único gabinete de condensação. O sistema é autônomo: um único circuito frigorígeno, uma única placa controladora mestre. Não requer kits de derivação externa. Os chassis se dividem em:</p>
<ul>
  <li><strong>8 a 16HP:</strong> gabinete com ventilador único (single fan).</li>
  <li><strong>18 a 22HP:</strong> gabinete com ventiladores duplos (dual fans).</li>
  <li><strong>24 a 30HP:</strong> gabinete maior com ventiladores duplos (dual fans).</li>
</ul>

<h3>Faixa 2 — Dois Módulos (32HP a 60HP)</h3>
<p>Combina dois gabinetes de unidade externa interligados por um <strong>kit de junção de derivação externa TODK02UTHP</strong>. Esse kit contém as conexões de tubulação refrigerante (juntas Y), os headers de distribuição e os conectores de comunicação necessários para unificar os dois módulos em um sistema único com um módulo Mestre e um módulo Escravo.</p>

<h3>Faixa 3 — Três Módulos (62HP a 90HP)</h3>
<p>Combina três gabinetes, utilizando o <strong>kit de junção de derivação externa TODK03UTHP</strong>. A hierarquia é: um módulo Mestre e dois módulos Escravos. O kit contém os headers de refrigerante e comunicação para a interconexão dos três gabinetes em um circuito unificado.</p>

<h3>Exemplo de Engenharia — Sistema de 90HP</h3>
<ul>
  <li>Combinação: <strong>30HP + 30HP + 30HP</strong> (três módulos iguais de capacidade máxima)</li>
  <li>Modelo do sistema: <strong>4TVY0870HE000AA</strong></li>
  <li>Capacidade total: <strong>255.0 kW</strong></li>
  <li>Kit de junção obrigatório: <strong>TODK03UTHP</strong></li>
  <li>Cada módulo individual usa o chassi de 24-30HP com ventiladores duplos</li>
</ul>

<h3>Exemplo de Engenharia — Sistema de 62HP</h3>
<ul>
  <li>Combinação: <strong>30HP + 16HP + 16HP</strong> (um módulo grande + dois módulos menores)</li>
  <li>Modelo do sistema: <strong>4TVY0600HE000AA</strong></li>
  <li>Capacidade total: <strong>175.0 kW</strong></li>
  <li>Kit de junção obrigatório: <strong>TODK03UTHP</strong></li>
  <li>Nota: os dois módulos de 16HP usam chassi com ventilador único, enquanto o de 30HP usa chassi com ventiladores duplos</li>
</ul>

<h3>Exemplo de Engenharia — Sistema de 32HP</h3>
<ul>
  <li>Combinação: <strong>16HP + 16HP</strong> (dois módulos iguais)</li>
  <li>Modelo do sistema: <strong>4TVY0310HE000AA</strong></li>
  <li>Capacidade total: <strong>90.0 kW</strong></li>
  <li>Kit de junção obrigatório: <strong>TODK02UTHP</strong></li>
</ul>

<hr/>

<h2>Aparência Externa e Classes de Chassi</h2>
<p>O manual classifica as unidades externas em <strong>três classes de chassi</strong> baseadas na capacidade e na quantidade de ventiladores.</p>
          `,

          tabelas_html: `
<h3>Tabela 1-1.1 — Códigos de Abreviação — Unidades Internas Padrão</h3>
<table>
  <thead>
    <tr><th>Código</th><th>Tipo de Unidade</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Q1</strong></td><td>One-way Cassette (Cassete de 1 via)</td></tr>
    <tr><td><strong>Q2</strong></td><td>Two-way Cassette (Cassete de 2 vias)</td></tr>
    <tr><td><strong>Q4C</strong></td><td>Compact Four-way Cassette (Cassete Compacto de 4 vias)</td></tr>
    <tr><td><strong>Q4</strong></td><td>Four-way Cassette (Cassete de 4 vias)</td></tr>
    <tr><td><strong>T2</strong></td><td>Medium Static Pressure Duct (Duto de Média Pressão Estática)</td></tr>
    <tr><td><strong>T1</strong></td><td>High Static Pressure Duct (Duto de Alta Pressão Estática)</td></tr>
    <tr><td><strong>G</strong></td><td>Wall-mounted (Hi-Wall / Parede)</td></tr>
    <tr><td><strong>DL</strong></td><td>Ceiling &amp; Floor (Piso-Teto)</td></tr>
    <tr><td><strong>F</strong></td><td>Floor Standing (Coluna / Gabinete Vertical)</td></tr>
  </tbody>
</table>

<h3>Tabela 1-1.2 — Matriz de Capacidades por Tipo de Unidade Interna (kW)</h3>
<table>
  <thead>
    <tr><th>kW</th><th>HP</th><th>Index</th><th>Q1</th><th>Q2</th><th>Q4C</th><th>Q4</th><th>T2</th><th>T1</th><th>G</th><th>DL</th><th>F</th></tr>
  </thead>
  <tbody>
    <tr><td>1.8</td><td>0.6</td><td>18</td><td>18</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
    <tr><td>2.2</td><td>0.8</td><td>22</td><td>22</td><td>22</td><td>22</td><td>—</td><td>22</td><td>—</td><td>22</td><td>—</td><td>22</td></tr>
    <tr><td>2.8</td><td>1.0</td><td>28</td><td>28</td><td>28</td><td>28</td><td>28</td><td>28</td><td>—</td><td>28</td><td>—</td><td>28</td></tr>
    <tr><td>3.6</td><td>1.25</td><td>36</td><td>36</td><td>36</td><td>36</td><td>36</td><td>36</td><td>—</td><td>36</td><td>36</td><td>36</td></tr>
    <tr><td>4.5</td><td>1.6</td><td>45</td><td>45</td><td>45</td><td>45</td><td>45</td><td>45</td><td>—</td><td>45</td><td>45</td><td>45</td></tr>
    <tr><td>5.6</td><td>2.0</td><td>56</td><td>56</td><td>56</td><td>—</td><td>56</td><td>56</td><td>—</td><td>56</td><td>56</td><td>56</td></tr>
    <tr><td>7.1</td><td>2.5</td><td>71</td><td>71</td><td>71</td><td>—</td><td>71</td><td>71</td><td>71</td><td>71</td><td>71</td><td>71</td></tr>
    <tr><td>8.0</td><td>3.0</td><td>80</td><td>—</td><td>—</td><td>—</td><td>80</td><td>80</td><td>80</td><td>80</td><td>80</td><td>80</td></tr>
    <tr><td>9.0</td><td>3.2</td><td>90</td><td>—</td><td>—</td><td>—</td><td>90</td><td>90</td><td>90</td><td>90</td><td>90</td><td>—</td></tr>
    <tr><td>10.0</td><td>3.6</td><td>100</td><td>—</td><td>—</td><td>—</td><td>100</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
    <tr><td>11.2</td><td>4.0</td><td>112</td><td>—</td><td>—</td><td>—</td><td>112</td><td>112</td><td>112</td><td>—</td><td>112</td><td>—</td></tr>
    <tr><td>14.0</td><td>5.0</td><td>140</td><td>—</td><td>—</td><td>—</td><td>140</td><td>140</td><td>140</td><td>—</td><td>140</td><td>—</td></tr>
    <tr><td>16.0</td><td>6.0</td><td>160</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>160</td><td>—</td><td>160</td><td>—</td></tr>
    <tr><td>20.0</td><td>7.0</td><td>200</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>200</td><td>—</td><td>—</td><td>—</td></tr>
    <tr><td>25.0</td><td>9.0</td><td>250</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>250</td><td>—</td><td>—</td><td>—</td></tr>
    <tr><td>28.0</td><td>10.0</td><td>280</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>280</td><td>—</td><td>—</td><td>—</td></tr>
    <tr><td>40.0</td><td>14.0</td><td>400</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>400</td><td>—</td><td>—</td><td>—</td></tr>
    <tr><td>45.0</td><td>16.0</td><td>450</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>450</td><td>—</td><td>—</td><td>—</td></tr>
    <tr><td>56.0</td><td>20.0</td><td>560</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>560</td><td>—</td><td>—</td><td>—</td></tr>
  </tbody>
</table>

<h3>Tabela 1-1.3 — Faixa de Capacidade Fresh Air (FA)</h3>
<table>
  <thead>
    <tr><th>Capacidade (kW)</th><th>12.5</th><th>14</th><th>20</th><th>25</th><th>28</th><th>45</th><th>56</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Capacity Index</strong></td><td>125</td><td>140</td><td>200</td><td>250</td><td>280</td><td>450</td><td>560</td></tr>
  </tbody>
</table>

<h3>Tabela 1-1.4 — Faixa de Vazão HRV</h3>
<table>
  <thead>
    <tr><th>Vazão de Ar</th><th>200 m³/h</th><th>300 m³/h</th><th>400 m³/h</th><th>500 m³/h</th><th>800 m³/h</th><th>1000 m³/h</th><th>1500 m³/h</th><th>2000 m³/h</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Disponível</strong></td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td></tr>
  </tbody>
</table>

<h3>Tabela 1-1.5 — Modelos de Unidades Externas (Módulo Único)</h3>
<table>
  <thead>
    <tr><th>HP</th><th>Modelo</th><th>Combinação</th></tr>
  </thead>
  <tbody>
    <tr><td>8</td><td>4TVY0077HE000AA</td><td>Módulo Único</td></tr>
    <tr><td>10</td><td>4TVY0096HE000AA</td><td>Módulo Único</td></tr>
    <tr><td>12</td><td>4TVY0115HE000AA</td><td>Módulo Único</td></tr>
    <tr><td>14</td><td>4TVY0140HE000AA</td><td>Módulo Único</td></tr>
    <tr><td>16</td><td>4TVY0155HE000AA</td><td>Módulo Único</td></tr>
    <tr><td>18</td><td>4TVY0170HE000AA</td><td>Módulo Único</td></tr>
    <tr><td>20</td><td>4TVY0192HE000AA</td><td>Módulo Único</td></tr>
    <tr><td>22</td><td>4TVY0210HE000AA</td><td>Módulo Único</td></tr>
    <tr><td>24</td><td>4TVY0229HE000AA</td><td>Módulo Único</td></tr>
    <tr><td>26</td><td>4TVY0249HE000AA</td><td>Módulo Único</td></tr>
    <tr><td>28</td><td>4TVY0268HE000AA</td><td>Módulo Único</td></tr>
    <tr><td>30</td><td>4TVY0290HE000AA</td><td>Módulo Único</td></tr>
  </tbody>
</table>

<h3>Tabela 1-1.6 — Combinações Multi-Módulo (32HP a 90HP)</h3>
<table>
  <thead>
    <tr><th>HP</th><th>Modelo</th><th>Combinação</th></tr>
  </thead>
  <tbody>
    <tr><td>32</td><td>4TVY0310HE000AA</td><td>16HP + 16HP</td></tr>
    <tr><td>34</td><td>4TVY0325HE000AA</td><td>22HP + 12HP</td></tr>
    <tr><td>36</td><td>4TVY0347HE000AA</td><td>20HP + 16HP</td></tr>
    <tr><td>38</td><td>4TVY0365HE000AA</td><td>22HP + 16HP</td></tr>
    <tr><td>40</td><td>4TVY0384HE000AA</td><td>24HP + 16HP</td></tr>
    <tr><td>42</td><td>4TVY0404HE000AA</td><td>26HP + 16HP</td></tr>
    <tr><td>44</td><td>4TVY0423HE000AA</td><td>28HP + 16HP</td></tr>
    <tr><td>46</td><td>4TVY0445HE000AA</td><td>30HP + 16HP</td></tr>
    <tr><td>48</td><td>4TVY0459HE000AA</td><td>26HP + 22HP</td></tr>
    <tr><td>50</td><td>4TVY0478HE000AA</td><td>28HP + 22HP</td></tr>
    <tr><td>52</td><td>4TVY0500HE000AA</td><td>30HP + 22HP</td></tr>
    <tr><td>54</td><td>4TVY0517HE000AA</td><td>28HP + 26HP</td></tr>
    <tr><td>56</td><td>4TVY0536HE000AA</td><td>28HP + 28HP</td></tr>
    <tr><td>58</td><td>4TVY0558HE000AA</td><td>30HP + 28HP</td></tr>
    <tr><td>60</td><td>4TVY0580HE000AA</td><td>30HP + 30HP</td></tr>
    <tr><td>62</td><td>4TVY0600HE000AA</td><td>30HP + 16HP + 16HP</td></tr>
    <tr><td>64</td><td>4TVY0614HE000AA</td><td>26HP + 22HP + 16HP</td></tr>
    <tr><td>66</td><td>4TVY0633HE000AA</td><td>28HP + 22HP + 16HP</td></tr>
    <tr><td>68</td><td>4TVY0655HE000AA</td><td>30HP + 22HP + 16HP</td></tr>
    <tr><td>70</td><td>4TVY0672HE000AA</td><td>28HP + 26HP + 16HP</td></tr>
    <tr><td>72</td><td>4TVY0691HE000AA</td><td>28HP + 28HP + 16HP</td></tr>
    <tr><td>74</td><td>4TVY0713HE000AA</td><td>30HP + 28HP + 16HP</td></tr>
    <tr><td>76</td><td>4TVY0735HE000AA</td><td>30HP + 30HP + 16HP</td></tr>
    <tr><td>78</td><td>4TVY0746HE000AA</td><td>28HP + 28HP + 22HP</td></tr>
    <tr><td>80</td><td>4TVY0768HE000AA</td><td>30HP + 28HP + 22HP</td></tr>
    <tr><td>82</td><td>4TVY0790HE000AA</td><td>30HP + 30HP + 22HP</td></tr>
    <tr><td>84</td><td>4TVY0804HE000AA</td><td>28HP + 28HP + 28HP</td></tr>
    <tr><td>86</td><td>4TVY0826HE000AA</td><td>30HP + 28HP + 28HP</td></tr>
    <tr><td>88</td><td>4TVY0848HE000AA</td><td>30HP + 30HP + 28HP</td></tr>
    <tr><td>90</td><td>4TVY0870HE000AA</td><td>30HP + 30HP + 30HP</td></tr>
  </tbody>
</table>

<h3>Kits de Junção de Derivação Externa (Outdoor Branch Joint Kits)</h3>
<table>
  <thead>
    <tr><th>Kit</th><th>Código do Produto</th><th>Aplicação</th><th>Nº de Módulos</th></tr>
  </thead>
  <tbody>
    <tr><td>Kit para 2 módulos</td><td><strong>TODK02UTHP</strong></td><td>Sistemas de 32HP a 60HP</td><td>2</td></tr>
    <tr><td>Kit para 3 módulos</td><td><strong>TODK03UTHP</strong></td><td>Sistemas de 62HP a 90HP</td><td>3</td></tr>
  </tbody>
</table>

<h3>Classes de Chassi</h3>
<table>
  <thead>
    <tr><th>Classe</th><th>Capacidades</th><th>Ventiladores</th><th>Aparência</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Classe A</strong></td><td>8, 10, 12, 14, 16 HP</td><td>1 ventilador (single fan)</td><td>Gabinete compacto</td></tr>
    <tr><td><strong>Classe B</strong></td><td>18, 20, 22 HP</td><td>2 ventiladores (dual fans)</td><td>Gabinete médio</td></tr>
    <tr><td><strong>Classe C</strong></td><td>24, 26, 28, 30 HP</td><td>2 ventiladores (dual fans)</td><td>Gabinete grande</td></tr>
  </tbody>
</table>

<h3>Faixas de Capacidade por Tipo de Unidade Interna</h3>
<table>
  <thead>
    <tr><th>Código</th><th>Tipo</th><th>Cap. Mín. (kW)</th><th>Cap. Máx. (kW)</th><th>Faixa HP</th></tr>
  </thead>
  <tbody>
    <tr><td>Q1</td><td>Cassete 1 via</td><td>1.8</td><td>7.1</td><td>0.6 – 2.5</td></tr>
    <tr><td>Q2</td><td>Cassete 2 vias</td><td>2.2</td><td>7.1</td><td>0.8 – 2.5</td></tr>
    <tr><td>Q4C</td><td>Cassete Compacto 4 vias</td><td>2.2</td><td>4.5</td><td>0.8 – 1.6</td></tr>
    <tr><td>Q4</td><td>Cassete 4 vias</td><td>2.8</td><td>10.0</td><td>1.0 – 3.6</td></tr>
    <tr><td>T2</td><td>Duto Média Pressão</td><td>2.2</td><td>9.0</td><td>0.8 – 3.2</td></tr>
    <tr><td>T1</td><td>Duto Alta Pressão</td><td>7.1</td><td>56.0</td><td>2.5 – 20.0</td></tr>
    <tr><td>G</td><td>Hi-Wall (Parede)</td><td>2.2</td><td>9.0</td><td>0.8 – 3.2</td></tr>
    <tr><td>DL</td><td>Piso-Teto</td><td>3.6</td><td>16.0</td><td>1.25 – 6.0</td></tr>
    <tr><td>F</td><td>Coluna (Floor Standing)</td><td>2.2</td><td>8.0</td><td>0.8 – 3.0</td></tr>
  </tbody>
</table>
          `,

          infobox_campo: `
<div class="infobox infobox-danger">
  <h4>⛔ REGRA INEGOCIÁVEL — Kit de Derivação Obrigatório</h4>
  <p>Todo sistema com 2 ou mais módulos de unidade externa <strong>OBRIGATORIAMENTE</strong> requer o kit de junção de derivação correspondente (TODK02UTHP ou TODK03UTHP). Esses kits são vendidos separadamente e <strong>não estão incluídos</strong> no fornecimento padrão da unidade externa. A instalação sem o kit correto resulta em falha de comunicação entre módulos e impossibilidade de operação do sistema.</p>
</div>

<div class="infobox infobox-warning">
  <h4>⚠️ IDENTIFICAÇÃO RÁPIDA EM CAMPO — Contagem de Ventiladores</h4>
  <p>Use esta regra de ouro para identificar rapidamente a faixa de capacidade de uma unidade externa no campo:</p>
  <ul>
    <li><strong>1 ventilador</strong> → 8 a 16 HP (Classe A)</li>
    <li><strong>2 ventiladores</strong> → 18 a 30 HP (Classes B e C)</li>
    <li><strong>2 gabinetes lado a lado</strong> → 32 a 60 HP (sistema de 2 módulos)</li>
    <li><strong>3 gabinetes em linha</strong> → 62 a 90 HP (sistema de 3 módulos)</li>
  </ul>
</div>

<div class="infobox infobox-info">
  <h4>💡 DICA DE DIMENSIONAMENTO — Unidade Interna T1</h4>
  <p>A unidade de Duto de Alta Pressão Estática (T1) é a <strong>ÚNICA</strong> evaporadora que alcança capacidades de 14HP a 20HP (40.0 kW a 56.0 kW). Se o projeto exige climatizar um salão de grande porte (&gt;200m²) com uma única evaporadora de alta vazão conectada a uma rede de dutos, o código T1 é a única opção disponível no portfólio TVR Pro CO.</p>
</div>

<div class="infobox infobox-tip">
  <h4>🔍 VERIFICAÇÃO DE COMPATIBILIDADE — Fresh Air e HRV</h4>
  <p>As unidades de Ar Novo (FA) possuem capacidades que iniciam em 12.5 kW (index 125). Isso significa que elas <strong>NÃO</strong> são compatíveis com unidades externas de 8HP (22.4 kW) de forma isolada se o projeto exigir múltiplas FA, pois uma única FA de 12.5 kW já consumiria mais de metade da capacidade da condensadora. Sempre dimensione a carga total somando FA + evaporadoras padrão.</p>
</div>
          `,
        },
        {
          id: "01-02",
          titulo: "Decodificação da Nomenclatura — Guia Definitivo para Técnicos de Campo",
          descricao:
            "Desmembramento posição por posição dos códigos de 13-15 dígitos de Unidades Internas, HRVs e Unidades Externas. Mapeamento de refrigerante (R-410A), plataforma (H=TVR Pro CO vs E=TVR Ultra), tensão, capacidade, tratamento anticorrosivo e exercícios práticos de decodificação.",
          tempo_estimado: "35 min",
          nivel: "basico",
          tags: ["nomenclatura", "codificação", "identificação", "campo"],
          videos: [],
          slides: [],

          // ─── CONTEÚDO COMPLETO DA AULA 1.2 ─────────────────────────
          conteudo_html: `
<h2>Por que Dominar a Nomenclatura?</h2>
<p>No dia a dia do técnico de campo, a etiqueta de identificação da máquina é a <strong>primeira e mais importante fonte de informação</strong>. Antes de abrir qualquer painel, medir qualquer grandeza ou acessar qualquer menu de diagnóstico, o profissional precisa saber exatamente com qual equipamento está lidando. A nomenclatura não é apenas um código de fábrica — ela é um <strong>DNA técnico</strong> que revela:</p>
<ul>
  <li>O tipo de refrigerante utilizado</li>
  <li>O fabricante e a família do produto</li>
  <li>O tipo de evaporadora ou condensadora</li>
  <li>A capacidade nominal em Btu/h</li>
  <li>A plataforma de controle (TVR Pro CO ou TVR Ultra)</li>
  <li>A tensão e frequência de alimentação elétrica</li>
  <li>Se há tratamento anticorrosivo</li>
  <li>A sequência de projeto e de serviço (revisões de engenharia)</li>
</ul>
<p>O sistema TVR Pro CO utiliza três formatos de nomenclatura distintos, um para cada categoria de equipamento: <strong>Unidades Internas Padrão</strong> (15 dígitos), <strong>Ventiladores de Recuperação de Calor — HRV</strong> (13 dígitos) e <strong>Unidades Externas</strong> (15 dígitos).</p>

<hr/>

<h2>Nomenclatura das Unidades Internas Padrão (Standard Indoor Units)</h2>
<p>O modelo de uma unidade interna padrão segue o formato de <strong>15 caracteres alfanuméricos</strong>. O manual utiliza o exemplo:</p>
<p><code>4 T V E 0 0 0 7 E F 0 0 0 A A</code><br/>
<code>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15</code></p>

<h3>Decodificação Posição por Posição</h3>
<ul>
  <li><strong>Posição 1 → "4"</strong> — Tipo de Refrigerante: <strong>R-410A</strong>. O dígito "4" identifica que o equipamento opera exclusivamente com o refrigerante R-410A.</li>
  <li><strong>Posição 2 → "T"</strong> — Fabricante: <strong>Trane</strong>. Identifica a marca do fabricante.</li>
  <li><strong>Posição 3 → "V"</strong> — Família do Produto: <strong>TVR</strong>. Indica que o equipamento pertence à família VRF (Variable Refrigerant Flow) da Trane.</li>
  <li><strong>Posição 4 → "E"</strong> — Tipo de Unidade Interna: Identifica o formato físico da evaporadora. Veja a tabela de códigos nas Tabelas &amp; Parâmetros.</li>
  <li><strong>Posições 5-6 → "00"</strong> — Reservado: Atualmente não utilizado.</li>
  <li><strong>Posições 7-8 → "07"</strong> — Capacidade (Btu/h × 1000): O valor deve ser lido como o número formado pelos dígitos 7 e 8, multiplicado por 1.000. No exemplo, "07" = 7.000 Btu/h.</li>
  <li><strong>Posição 9 → "E"</strong> — Plataforma de Controle: <strong>TVR Ultra</strong>. O dígito "E" indica a plataforma TVR Ultra. Já o dígito "F" indica a plataforma TVR Pro CO.</li>
  <li><strong>Posição 10 → "F"</strong> — Tensão / Frequência: <strong>380V, 50-60Hz, 1 Fase (1P)</strong>.</li>
  <li><strong>Posições 11-12-13 → "000"</strong> — Reservado: Atualmente não utilizados.</li>
  <li><strong>Posição 14 → "A"</strong> — Sequência de Projeto: Primeira sequência de projeto ("First design sequence").</li>
  <li><strong>Posição 15 → "A"</strong> — Sequência de Serviço: Primeira sequência de serviço ("First service sequence").</li>
</ul>

<hr/>

<h2>Nomenclatura dos Ventiladores de Recuperação de Calor (HRV)</h2>
<p>Os ventiladores de recuperação de calor (Heat Recovery Ventilator) da série AC utilizam um formato de <strong>13 caracteres alfanuméricos</strong>:</p>
<p><code>T E R V 0 1 2 0 A B 0 A A</code><br/>
<code>1 2 3 4 5 6 7 8 9 10 11 12 13</code></p>

<h3>Decodificação Posição por Posição</h3>
<ul>
  <li><strong>Posições 1-2-3 → "TER"</strong> — Combinação que identifica "Trane Energy Recovery".</li>
  <li><strong>Posição 4 → "V"</strong> — Reservado: Parte da sigla do produto.</li>
  <li><strong>Posição 5 → "0"</strong> — Reservado: Atualmente não utilizado.</li>
  <li><strong>Posições 6-7 → "12"</strong> — Capacidade (CFM): A vazão de ar nominal. No exemplo, "12" corresponde a 1200 CFM.</li>
  <li><strong>Posição 8 → "0"</strong> — Reservado: Atualmente não utilizado.</li>
  <li><strong>Posição 9 → "A"</strong> — Plataforma de Controle: <strong>TVR</strong>. Identifica que o HRV é compatível com a plataforma de controle da família TVR.</li>
  <li><strong>Posição 10 → "B"</strong> — Tensão / Frequência: <strong>1 = 380V/60Hz/1Ph</strong> ou <strong>B = 380V/50Hz/1Ph</strong>.</li>
  <li><strong>Posição 11 → "0"</strong> — Reservado: Atualmente não utilizado.</li>
  <li><strong>Posição 12 → "A"</strong> — Sequência de Projeto: Primeira sequência de projeto.</li>
  <li><strong>Posição 13 → "A"</strong> — Sequência de Serviço: Primeira sequência de serviço.</li>
</ul>

<hr/>

<h2>Nomenclatura das Unidades Externas (Outdoor Units)</h2>
<p>As unidades externas utilizam um formato de <strong>15 caracteres alfanuméricos</strong>, similar ao das unidades internas, porém com diferenças críticas nas posições 3, 4, 9, e 13:</p>
<p><code>4 T V Y 0 0 7 7 H E 0 0 0 A A</code><br/>
<code>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15</code></p>

<h3>Decodificação Posição por Posição</h3>
<ul>
  <li><strong>Posição 1 → "4"</strong> — Tipo de Refrigerante: <strong>R-410A</strong>. Idêntico às unidades internas.</li>
  <li><strong>Posição 2 → "T"</strong> — Fabricante: <strong>Trane</strong>.</li>
  <li><strong>Posição 3 → "V"</strong> — Família do Produto: <strong>VRF</strong>.</li>
  <li><strong>Posição 4 → "Y"</strong> — Tipo de Produto: <strong>Cooling Only</strong> (Apenas Refrigeração). O código "Y" identifica que esta unidade opera exclusivamente no modo de refrigeração, sem bomba de calor (heat pump) reversível.</li>
  <li><strong>Posições 5-6 → "00"</strong> — Reservado.</li>
  <li><strong>Posições 7-8 → "77"</strong> — Capacidade (Btu/h × 1000): No exemplo, "77" = 77.000 Btu/h (8HP). Para modelos de maior capacidade, como o 30HP: "290" ocupa as posições 6-7-8, pois o campo se expande.</li>
  <li><strong>Posição 9 → "H"</strong> — Plataforma de Controle: <strong>TVR Pro CO</strong>. O dígito "H" é exclusivo das unidades externas da série TVR Pro CO. Diferencia-se do "E" usado na plataforma TVR Ultra.</li>
  <li><strong>Posição 10 → "E"</strong> — Tensão / Frequência: <strong>380V, 50-60Hz, 1 Fase (1P)</strong>.</li>
  <li><strong>Posições 11-12 → "00"</strong> — Reservado.</li>
  <li><strong>Posição 13 → "0"</strong> — Acabamento / Tratamento: <strong>0 = Standard</strong> (acabamento padrão) ou <strong>C = Corrosion treatment</strong> (tratamento anticorrosivo). Unidades com código "C" possuem revestimento especial para ambientes agressivos.</li>
  <li><strong>Posição 14 → "A"</strong> — Sequência de Projeto: Primeira sequência de projeto.</li>
  <li><strong>Posição 15 → "A"</strong> — Sequência de Serviço: Primeira sequência de serviço.</li>
</ul>

<hr/>

<h2>Exemplos Práticos de Decodificação — Exercícios de Campo</h2>

<h3>Exemplo 1: Decodificando 4TVY0290HE000AA</h3>
<ul>
  <li><strong>Posição 1 (4)</strong> — Refrigerante R-410A</li>
  <li><strong>Posição 2 (T)</strong> — Fabricante: Trane</li>
  <li><strong>Posição 3 (V)</strong> — Família: VRF</li>
  <li><strong>Posição 4 (Y)</strong> — Cooling Only (Apenas Refrigeração)</li>
  <li><strong>Posições 6-7-8 (290)</strong> — Capacidade: 290.000 Btu/h (<strong>30HP</strong>)</li>
  <li><strong>Posição 9 (H)</strong> — Plataforma: <strong>TVR Pro CO</strong></li>
  <li><strong>Posição 10 (E)</strong> — Alimentação: 380V / 50-60Hz / 1P</li>
  <li><strong>Posição 13 (0)</strong> — Acabamento: <strong>Standard</strong> (sem tratamento anticorrosivo)</li>
  <li><strong>Posições 14-15 (AA)</strong> — Primeira sequência de projeto e serviço</li>
</ul>
<p><strong>Resultado:</strong> Unidade externa Trane TVR Pro CO, 30HP, Cooling Only, R-410A, 380V, acabamento padrão.</p>

<h3>Exemplo 2: Decodificando 4TVY0077HE0C0AA</h3>
<ul>
  <li><strong>Posições 1-4 (4TVY)</strong> — R-410A / Trane / VRF / Cooling Only</li>
  <li><strong>Posições 5-8 (0077)</strong> — 77.000 Btu/h (<strong>8HP</strong>)</li>
  <li><strong>Posição 9 (H)</strong> — <strong>TVR Pro CO</strong></li>
  <li><strong>Posição 10 (E)</strong> — 380V / 50-60Hz / 1P</li>
  <li><strong>Posição 13 (C)</strong> — <strong>Tratamento anticorrosivo</strong></li>
  <li><strong>Posições 14-15 (AA)</strong> — Primeira sequência de projeto e serviço</li>
</ul>
<p><strong>Resultado:</strong> Unidade externa de 8HP com <strong>tratamento anticorrosivo</strong> — indicada para instalações em ambiente agressivo (litoral, áreas industriais com presença de substâncias corrosivas).</p>

<h3>Exemplo 3: Identificando a Plataforma — TVR Pro CO vs. TVR Ultra</h3>
<p>A <strong>diferença crítica</strong> entre as duas plataformas da Trane está codificada na <strong>Posição 9</strong>:</p>
<ul>
  <li><strong>"H"</strong> → TVR Pro CO — Série coberta por este manual de serviço</li>
  <li><strong>"E"</strong> → TVR Ultra — Série diferente — manual de serviço separado</li>
</ul>
<p>Quando o técnico chega a um site com múltiplas unidades Trane e precisa saber qual manual consultar, a <strong>posição 9</strong> da nomenclatura é a resposta instantânea: "H" = TVR Pro CO, "E" = TVR Ultra.</p>
          `,

          tabelas_html: `
<h3>Tabela de Decodificação — Unidade Interna Padrão (15 dígitos)</h3>
<table>
  <thead>
    <tr><th>Posição</th><th>Código</th><th>Significado</th><th>Descrição</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>1</strong></td><td>4</td><td>Tipo de Refrigerante</td><td>R-410A</td></tr>
    <tr><td><strong>2</strong></td><td>T</td><td>Fabricante</td><td>Trane</td></tr>
    <tr><td><strong>3</strong></td><td>V</td><td>Família do Produto</td><td>TVR (VRF)</td></tr>
    <tr><td><strong>4</strong></td><td>E</td><td>Tipo de Unidade Interna</td><td>Veja tabela de códigos abaixo</td></tr>
    <tr><td><strong>5-6</strong></td><td>00</td><td>Reservado</td><td>Atualmente não utilizado</td></tr>
    <tr><td><strong>7-8</strong></td><td>07</td><td>Capacidade (Btu/h × 1000)</td><td>7.000 Btu/h</td></tr>
    <tr><td><strong>9</strong></td><td>E</td><td>Plataforma de Controle</td><td>E = TVR Ultra / F = TVR Pro CO</td></tr>
    <tr><td><strong>10</strong></td><td>F</td><td>Tensão / Frequência</td><td>380V, 50-60Hz, 1P</td></tr>
    <tr><td><strong>11-13</strong></td><td>000</td><td>Reservado</td><td>Atualmente não utilizados</td></tr>
    <tr><td><strong>14</strong></td><td>A</td><td>Sequência de Projeto</td><td>Primeira sequência</td></tr>
    <tr><td><strong>15</strong></td><td>A</td><td>Sequência de Serviço</td><td>Primeira sequência</td></tr>
  </tbody>
</table>

<h3>Códigos de Tipo de Unidade Interna (Posição 4)</h3>
<table>
  <thead>
    <tr><th>Código na Nomenclatura</th><th>Tipo de Evaporadora</th><th>Código na Tabela de Capacidade</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>E</strong></td><td>One-way Cassette</td><td>Q1</td></tr>
    <tr><td><strong>G</strong></td><td>Two-way Cassette</td><td>Q2</td></tr>
    <tr><td><strong>B</strong></td><td>Compact Four-way Cassette</td><td>Q4C</td></tr>
    <tr><td><strong>C</strong></td><td>Four-way Cassette / Ceiling &amp; Floor</td><td>Q4 / DL</td></tr>
    <tr><td><strong>D</strong></td><td>Medium Static Pressure Duct</td><td>T2</td></tr>
    <tr><td><strong>A</strong></td><td>High Static Pressure Duct</td><td>T1</td></tr>
    <tr><td><strong>W</strong></td><td>Wall-Mounted (Hi-Wall)</td><td>G</td></tr>
    <tr><td><strong>S, N, U</strong></td><td>Floor Standing</td><td>F</td></tr>
    <tr><td><strong>F</strong></td><td>Fresh Air Processing Unit</td><td>FA</td></tr>
  </tbody>
</table>

<h3>Tabela de Decodificação — HRV (13 dígitos)</h3>
<table>
  <thead>
    <tr><th>Posição</th><th>Código</th><th>Significado</th><th>Descrição</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>1-3</strong></td><td>TER</td><td>Fabricante + Tipo</td><td>Trane Energy Recovery</td></tr>
    <tr><td><strong>4</strong></td><td>V</td><td>Reservado</td><td>Parte da sigla</td></tr>
    <tr><td><strong>5</strong></td><td>0</td><td>Reservado</td><td>Não utilizado</td></tr>
    <tr><td><strong>6-7</strong></td><td>12</td><td>Capacidade (CFM)</td><td>1200 CFM</td></tr>
    <tr><td><strong>8</strong></td><td>0</td><td>Reservado</td><td>Não utilizado</td></tr>
    <tr><td><strong>9</strong></td><td>A</td><td>Plataforma</td><td>TVR</td></tr>
    <tr><td><strong>10</strong></td><td>B</td><td>Tensão / Frequência</td><td>1 = 380V/60Hz · B = 380V/50Hz</td></tr>
    <tr><td><strong>11</strong></td><td>0</td><td>Reservado</td><td>Não utilizado</td></tr>
    <tr><td><strong>12</strong></td><td>A</td><td>Sequência de Projeto</td><td>Primeira sequência</td></tr>
    <tr><td><strong>13</strong></td><td>A</td><td>Sequência de Serviço</td><td>Primeira sequência</td></tr>
  </tbody>
</table>

<h3>Tabela de Decodificação — Unidade Externa (15 dígitos)</h3>
<table>
  <thead>
    <tr><th>Posição</th><th>Código</th><th>Significado</th><th>Descrição</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>1</strong></td><td>4</td><td>Tipo de Refrigerante</td><td>R-410A</td></tr>
    <tr><td><strong>2</strong></td><td>T</td><td>Fabricante</td><td>Trane</td></tr>
    <tr><td><strong>3</strong></td><td>V</td><td>Família do Produto</td><td>VRF</td></tr>
    <tr><td><strong>4</strong></td><td>Y</td><td>Tipo de Produto</td><td>Cooling Only (Apenas Refrigeração)</td></tr>
    <tr><td><strong>5-6</strong></td><td>00</td><td>Reservado</td><td>Não utilizado</td></tr>
    <tr><td><strong>7-8</strong></td><td>77</td><td>Capacidade (Btu/h × 1000)</td><td>77.000 Btu/h (8HP)</td></tr>
    <tr><td><strong>9</strong></td><td>H</td><td>Plataforma de Controle</td><td><strong>TVR Pro CO</strong> (este manual)</td></tr>
    <tr><td><strong>10</strong></td><td>E</td><td>Tensão / Frequência</td><td>380V, 50-60Hz, 1P</td></tr>
    <tr><td><strong>11-12</strong></td><td>00</td><td>Reservado</td><td>Não utilizado</td></tr>
    <tr><td><strong>13</strong></td><td>0</td><td>Acabamento / Tratamento</td><td>0 = Standard · C = Anticorrosivo</td></tr>
    <tr><td><strong>14</strong></td><td>A</td><td>Sequência de Projeto</td><td>Primeira sequência</td></tr>
    <tr><td><strong>15</strong></td><td>A</td><td>Sequência de Serviço</td><td>Primeira sequência</td></tr>
  </tbody>
</table>

<h3>Códigos de Tensão/Frequência (Posição 10)</h3>
<table>
  <thead>
    <tr><th>Código</th><th>Unidade Interna</th><th>Unidade Externa</th><th>HRV</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>E</strong></td><td>380V/50-60Hz/1P</td><td>380V/50-60Hz/1P</td><td>—</td></tr>
    <tr><td><strong>F</strong></td><td>380V/50-60Hz/1P</td><td>—</td><td>—</td></tr>
    <tr><td><strong>1</strong></td><td>—</td><td>—</td><td>380V/60Hz/1Ph</td></tr>
    <tr><td><strong>B</strong></td><td>—</td><td>—</td><td>380V/50Hz/1Ph</td></tr>
  </tbody>
</table>

<h3>Código de Plataforma (Posição 9)</h3>
<table>
  <thead>
    <tr><th>Código</th><th>Equipamento</th><th>Plataforma</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>H</strong></td><td>Unidade Externa</td><td>TVR Pro CO (este manual)</td></tr>
    <tr><td><strong>E</strong></td><td>Unidade Interna / Externa</td><td>TVR Ultra (manual separado)</td></tr>
    <tr><td><strong>A</strong></td><td>HRV</td><td>TVR (genérico)</td></tr>
  </tbody>
</table>

<h3>Mapa Comparativo das Três Nomenclaturas</h3>
<table>
  <thead>
    <tr><th>Posição</th><th>Unidade Interna (15 dígitos)</th><th>HRV (13 dígitos)</th><th>Unidade Externa (15 dígitos)</th></tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>Refrigerante (4 = R-410A)</td><td>Fabricante (T)</td><td>Refrigerante (4 = R-410A)</td></tr>
    <tr><td>2</td><td>Fabricante (T = Trane)</td><td>Tipo (E = Energy Recovery)</td><td>Fabricante (T = Trane)</td></tr>
    <tr><td>3</td><td>Família (V = TVR)</td><td>Família (R = Trane TVR)</td><td>Família (V = VRF)</td></tr>
    <tr><td>4</td><td><strong>Tipo de Unidade Interna</strong></td><td>Reservado (V)</td><td><strong>Cooling Only (Y)</strong></td></tr>
    <tr><td>5-8</td><td>Reservado + Capacidade Btu/h</td><td>Reservado + Capacidade CFM</td><td>Reservado + Capacidade Btu/h</td></tr>
    <tr><td>9</td><td>Plataforma (E=Ultra, F=ProCO)</td><td>Plataforma (A = TVR)</td><td><strong>Plataforma (H = TVR Pro CO)</strong></td></tr>
    <tr><td>10</td><td>Tensão/Frequência</td><td>Tensão/Frequência</td><td>Tensão/Frequência</td></tr>
    <tr><td>11-13</td><td>Reservados</td><td>Reservado + Projeto + Serviço</td><td>Reservados + <strong>Tratamento (0/C)</strong></td></tr>
    <tr><td>14-15</td><td>Projeto + Serviço</td><td>—</td><td>Projeto + Serviço</td></tr>
  </tbody>
</table>
          `,

          infobox_campo: `
<div class="infobox infobox-danger">
  <h4>⛔ REGRA DE OURO — NUNCA CONFUNDIR "H" COM "E" NA POSIÇÃO 9</h4>
  <p>Ao chegar em um site com equipamentos Trane, a PRIMEIRA verificação obrigatória é a posição 9 da nomenclatura da unidade externa. Se o código for <strong>"H"</strong> → use este manual (TVR Pro CO). Se for <strong>"E"</strong> → o equipamento pertence à família TVR Ultra e exige um manual de serviço completamente diferente. Usar o manual errado durante diagnóstico resultará em leituras incorretas de parâmetros, configurações de DIP switch incompatíveis e potencial dano ao equipamento.</p>
</div>

<div class="infobox infobox-warning">
  <h4>⚠️ ATENÇÃO — DUPLA CONVENÇÃO DE CÓDIGOS DE UNIDADE INTERNA</h4>
  <p>O sistema utiliza dois conjuntos de códigos para as unidades internas. Os códigos <strong>Q1, Q2, Q4C, Q4, T1, T2, G, DL, F</strong> (Tópico 1.1) são usados em tabelas de capacidade e diagramas de projeto. Os códigos <strong>E, G, B, C, D, A, W, S/N/U, F</strong> são usados na nomenclatura do modelo. O técnico deve memorizar a correspondência entre ambos para não cometer erros de identificação.</p>
</div>

<div class="infobox infobox-info">
  <h4>💡 POSIÇÃO 13 DA UNIDADE EXTERNA — TRATAMENTO ANTICORROSIVO</h4>
  <p>Ao realizar manutenção em uma unidade externa instalada em ambiente costeiro ou industrial, verifique se a posição 13 da nomenclatura é <strong>"C"</strong> (Corrosion treatment). Equipamentos sem tratamento anticorrosivo (código "0") instalados em ambientes agressivos sofrerão degradação acelerada das aletas do condensador, reduzindo a eficiência de troca térmica e a vida útil do compressor.</p>
</div>

<div class="infobox infobox-tip">
  <h4>🔍 DICA RÁPIDA — LEITURA DE CAPACIDADE EM CAMPO</h4>
  <p>Para converter rapidamente a capacidade codificada na nomenclatura (posições 7-8 ou 6-7-8) em HP:</p>
  <ul>
    <li>Divida o valor em Btu/h × 1000 por <strong>9.616</strong> para obter uma estimativa aproximada em HP.</li>
    <li>Exemplo: 4TVY0<strong>290</strong>HE000AA → 290.000 Btu/h ÷ 9.616 ≈ <strong>30HP</strong> ✔</li>
    <li>Exemplo: 4TVY00<strong>77</strong>HE000AA → 77.000 Btu/h ÷ 9.616 ≈ <strong>8HP</strong> ✔</li>
  </ul>
</div>
          `,
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════════
    // PARTE 2 — Componentes e Diagramas
    // ════════════════════════════════════════════════════════════════════════
    {
      id: 2,
      titulo: "PARTE 2 — Componentes e Diagramas de Refrigeração",
      descricao:
        "Raio-X completo da unidade externa: layout físico dos 13 componentes funcionais, diagramas de tubulação com todos os acessórios e o fluxo do refrigerante R-410A nos modos cooling, heating e defrost.",
      icone: "cpu",
      cor: "blue",
      topicos: [
        {
          id: "02-01",
          titulo: "Layout Físico dos Componentes — Mapeamento Interno por Classe de Chassi",
          descricao:
            "Estudo detalhado da disposição física dos 13 componentes funcionais (compressor, oil separator, EXV, acumulador, etc.) nas 3 classes de chassi. Metodologia de inspeção visual por zonas: Topo → Superior → Central → Inferior → Conexões de serviço.",
          tempo_estimado: "40 min",
          nivel: "intermediario",
          tags: ["layout", "componentes", "chassi", "inspeção"],
          videos: [],
          slides: [],

          // ─── CONTEÚDO COMPLETO DA AULA 2.1 ─────────────────────────
          conteudo_html: `
<h2>Introdução — Por que Conhecer o Layout Interno?</h2>
<p>Antes de abrir o painel de qualquer condensadora, o técnico de campo precisa ter um <strong>mapa mental</strong> de onde cada componente está localizado. Isso é essencial por três razões:</p>
<ol>
  <li><strong>Segurança:</strong> Saber onde estão os compressores, as válvulas solenoides e os sensores de alta pressão evita acidentes ao manusear ferramentas dentro do gabinete energizado.</li>
  <li><strong>Eficiência no diagnóstico:</strong> Quando um código de erro indica falha em um componente específico (ex.: sensor de temperatura de descarga), o técnico que conhece o layout chega ao sensor em segundos, sem precisar rastrear tubulações aleatoriamente.</li>
  <li><strong>Manutenção preventiva:</strong> A inspeção visual sistemática (verificar conexões elétricas, estado de isolamento, integridade de válvulas) só é produtiva quando o técnico sabe exatamente o que procurar e onde procurar.</li>
</ol>
<p>O TVR Pro CO utiliza <strong>três configurações de chassi</strong> para as unidades externas de módulo único, e cada configuração posiciona os mesmos 13 componentes funcionais em arranjos ligeiramente diferentes. Os sistemas multi-módulo (32-90HP) utilizam réplicas desses mesmos chassi interligados.</p>

<hr/>

<h2>Os 13 Componentes Funcionais — Identificação e Função</h2>
<p>O manual (Figures 2-1.1, 2-1.2 e 2-1.3) identifica <strong>13 componentes funcionais</strong> numerados que estão presentes em todas as classes de chassi. A numeração é <strong>idêntica</strong> nos três layouts, o que permite ao técnico usar uma única referência independente do porte da unidade.</p>

<h3>Lista Completa dos Componentes</h3>
<ul>
  <li><strong>1 — Compressor:</strong> Componente motor do ciclo frigorígeno. Comprime o gás refrigerante R-410A de baixa pressão para alta pressão. No chassi 8-16HP, há <strong>1 compressor</strong>; nos chassi 18-22HP e 24-30HP, há <strong>2 compressores</strong>.</li>
  <li><strong>2 — Discharge temperature sensor:</strong> Sensor tipo termistor instalado na tubulação de descarga do compressor. Monitora a temperatura do gás superaquecido. Valor crítico para proteção contra superaquecimento.</li>
  <li><strong>3 — High pressure sensor:</strong> Transdutor de pressão instalado na linha de alta pressão (descarga). Monitora continuamente a pressão do lado de alta do sistema. Usado para controle de capacidade e proteção contra sobrepressão.</li>
  <li><strong>4 — Oil separator:</strong> Dispositivo que separa o óleo lubrificante do gás refrigerante comprimido. O óleo separado retorna ao cárter do compressor. Fundamental para manter a lubrificação em sistemas VRF com longas tubulações.</li>
  <li><strong>5 — Heat exchanger (Condensador):</strong> Serpentina de troca térmica onde o gás refrigerante cede calor para o ar externo. Composto por tubos de cobre com aletas de alumínio.</li>
  <li><strong>6 — Electronic Expansion Valve (EXV):</strong> Válvula de controle de fluxo acionada por motor de passo. Regula a quantidade de refrigerante líquido com base nos sinais dos sensores. Principal componente de controle de capacidade do sistema VRF.</li>
  <li><strong>7 — Fan motor:</strong> Motor elétrico que aciona o ventilador do condensador. Velocidade controlada eletronicamente para otimizar a troca térmica.</li>
  <li><strong>8 — Fan (Ventilador):</strong> Hélice axial que força a passagem de ar através das aletas do condensador.</li>
  <li><strong>9 — Stop valve (liquid side):</strong> Válvula de bloqueio manual na conexão de saída da linha de líquido. Utilizada durante instalação, manutenção e pump-down.</li>
  <li><strong>10 — Stop valve (gas side):</strong> Válvula de bloqueio manual na conexão da linha de gás (sucção). Permite isolar o circuito durante serviços.</li>
  <li><strong>11 — Accumulator:</strong> Reservatório na linha de sucção que evita golpe de líquido no compressor, retendo o líquido e permitindo apenas a passagem de gás.</li>
  <li><strong>12 — Low pressure switch:</strong> Chave de segurança que desliga o compressor se a pressão de sucção cair abaixo do limite mínimo.</li>
  <li><strong>13 — Solenoid valve:</strong> Válvula eletromagnética de duas posições usada para controlar o fluxo de refrigerante em diferentes pontos do circuito.</li>
</ul>

<hr/>

<h2>Chassi Classe A — Unidades de 8 a 16HP</h2>
<p><strong>Configuração geral:</strong></p>
<ul>
  <li><strong>1 compressor</strong> (item 1) — localizado na parte inferior direita do gabinete</li>
  <li><strong>1 ventilador</strong> (item 8) + <strong>1 motor</strong> (item 7) — localizados no topo do gabinete</li>
  <li><strong>1 acumulador</strong> (item 11) — parte superior esquerda, acima do compartimento do compressor</li>
</ul>
<p><strong>Característica exclusiva do Classe A:</strong> Por possuir <strong>um único compressor</strong>, o layout é mais compacto. O sensor de temperatura de descarga (2) monitora apenas uma linha, e o oil separator (4) atende um único circuito. Isso simplifica o diagnóstico em comparação com os chassi de 2 compressores.</p>

<hr/>

<h2>Chassi Classe B — Unidades de 18 a 22HP</h2>
<p><strong>Configuração geral:</strong></p>
<ul>
  <li><strong>2 compressores</strong> (item 1, 1) — localizados lado a lado na parte inferior direita</li>
  <li><strong>2 ventiladores</strong> (item 8, 8) + <strong>2 motores</strong> (item 7, 7) — lado a lado no topo</li>
  <li><strong>2 sensores de descarga</strong> (item 2, 2) — um para cada compressor</li>
</ul>
<p><strong>Diferença em relação ao Classe A:</strong> A duplicação dos compressores, ventiladores e sensores de descarga é a principal mudança. O técnico precisa testar <strong>ambos</strong> os sensores de descarga ao diagnosticar códigos de erro relacionados a superaquecimento, pois cada sensor está vinculado ao seu compressor respectivo.</p>

<hr/>

<h2>Chassi Classe C — Unidades de 24 a 30HP</h2>
<p><strong>Configuração geral:</strong></p>
<ul>
  <li><strong>2 compressores</strong> (item 1, 1) — na parte inferior direita, com mais espaçamento</li>
  <li><strong>2 ventiladores</strong> (item 8, 8) + <strong>2 motores</strong> (item 7, 7) — no topo</li>
  <li><strong>2 acumuladores</strong> (item 11, 11) — o gabinete ampliado permite dois acumuladores visíveis no topo</li>
</ul>
<p><strong>Diferença em relação ao Classe B:</strong> O gabinete é fisicamente maior para acomodar compressores de maior capacidade. A principal diferença prática é o <strong>maior espaçamento interno</strong>, que facilita o acesso aos compressores e ao circuito frigorígeno durante a manutenção. O high pressure sensor (3) e as válvulas solenoides (13) ficam mais acessíveis na lateral esquerda do gabinete.</p>

<hr/>

<h2>Metodologia de Inspeção Visual por Zonas</h2>
<p>Para realizar uma inspeção preventiva eficiente, o técnico deve seguir a <strong>metodologia de zonas</strong>, trabalhando de cima para baixo:</p>

<h3>ZONA 1 — Topo (Ventilação)</h3>
<ol>
  <li>Verificar rotação livre dos ventiladores (sem ruídos ou vibrações anormais)</li>
  <li>Inspecionar fixação dos motores (7) nos suportes</li>
  <li>Verificar integridade das hélices (8) — sem trincas ou deformações</li>
</ol>

<h3>ZONA 2 — Superior Interno (Troca Térmica)</h3>
<ol>
  <li>Inspecionar as aletas do heat exchanger (5) — sem amassamentos, sujeira ou obstrução</li>
  <li>Verificar o oil separator (4) — sem sinais de vazamento ou oxidação nas conexões</li>
  <li>Verificar o acumulador (11) — sem sinais de condensação anormal na superfície externa</li>
</ol>

<h3>ZONA 3 — Central (Controle Frigorígeno)</h3>
<ol>
  <li>Verificar a EXV (6) — testar movimentação do motor de passo, ouvir o clique de acionamento</li>
  <li>Verificar válvulas solenoides (13) — sem ruído anormal de bobina, sem vazamentos</li>
  <li>Verificar o low pressure switch (12) — fiação íntegra, sem oxidação nos terminais</li>
</ol>

<h3>ZONA 4 — Inferior (Compressores)</h3>
<ol>
  <li>Medir a vibração do compressor (1) durante operação — comparar com padrão de fábrica</li>
  <li>Verificar o sensor de descarga (2) — fixação firme na tubulação, pasta térmica íntegra</li>
  <li>Verificar o high pressure sensor (3) — conexão elétrica firme, sem dano ao transdutor</li>
</ol>

<h3>ZONA 5 — Inferior Frontal (Conexões de Serviço)</h3>
<ol>
  <li>Verificar stop valves (9, 10) — tampas de proteção presentes, sem sinais de vazamento</li>
  <li>Verificar torque das conexões flare — sem manchas de óleo indicando micro-vazamentos</li>
</ol>
          `,

          tabelas_html: `
<h3>Mapa de Componentes por Número</h3>
<table>
  <thead>
    <tr><th>Nº</th><th>Componente (EN)</th><th>Componente (PT-BR)</th><th>Localização Típica</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>1</strong></td><td>Compressor</td><td>Compressor</td><td>Inferior direita</td></tr>
    <tr><td><strong>2</strong></td><td>Discharge temperature sensor</td><td>Sensor de temperatura de descarga</td><td>Tubulação de descarga</td></tr>
    <tr><td><strong>3</strong></td><td>High pressure sensor</td><td>Sensor de alta pressão</td><td>Lateral / Inferior</td></tr>
    <tr><td><strong>4</strong></td><td>Oil separator</td><td>Separador de óleo</td><td>Superior interno</td></tr>
    <tr><td><strong>5</strong></td><td>Heat exchanger</td><td>Condensador / Trocador de calor</td><td>Superior interno (serpentina)</td></tr>
    <tr><td><strong>6</strong></td><td>Electronic expansion valve (EXV)</td><td>Válvula de expansão eletrônica</td><td>Central</td></tr>
    <tr><td><strong>7</strong></td><td>Fan motor</td><td>Motor do ventilador</td><td>Topo</td></tr>
    <tr><td><strong>8</strong></td><td>Fan</td><td>Ventilador (hélice)</td><td>Topo</td></tr>
    <tr><td><strong>9</strong></td><td>Stop valve (liquid side)</td><td>Válvula de serviço (líquido)</td><td>Inferior frontal</td></tr>
    <tr><td><strong>10</strong></td><td>Stop valve (gas side)</td><td>Válvula de serviço (gás)</td><td>Inferior frontal</td></tr>
    <tr><td><strong>11</strong></td><td>Accumulator</td><td>Acumulador de sucção</td><td>Superior (variável)</td></tr>
    <tr><td><strong>12</strong></td><td>Low pressure switch</td><td>Pressostato de baixa</td><td>Central</td></tr>
    <tr><td><strong>13</strong></td><td>Solenoid valve</td><td>Válvula solenoide</td><td>Múltiplas posições</td></tr>
  </tbody>
</table>

<h3>Distribuição por Zonas — Chassi Classe A (8-16HP)</h3>
<table>
  <thead>
    <tr><th>Zona do Gabinete</th><th>Componentes Localizados</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Topo</strong> (seção de ventilação)</td><td>Ventilador (8), Motor do ventilador (7)</td></tr>
    <tr><td><strong>Superior interno</strong> (condensador)</td><td>Oil separator (4), Acumulador (11), Heat exchanger (5), Sensor de descarga (2)</td></tr>
    <tr><td><strong>Central</strong> (controle frigorígeno)</td><td>EXV (6), Válvulas solenoides (13), Low pressure switch (12)</td></tr>
    <tr><td><strong>Inferior</strong> (compressor)</td><td>Compressor (1), High pressure sensor (3)</td></tr>
    <tr><td><strong>Inferior frontal</strong> (serviço)</td><td>Stop valve liquid (9), Stop valve gas (10)</td></tr>
  </tbody>
</table>

<h3>Distribuição por Zonas — Chassi Classe B (18-22HP)</h3>
<table>
  <thead>
    <tr><th>Zona do Gabinete</th><th>Componentes Localizados</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Topo</strong></td><td>2× Ventilador (8), 2× Motor do ventilador (7)</td></tr>
    <tr><td><strong>Superior interno</strong></td><td>Oil separator (4), Acumulador (11), Heat exchanger (5), 2× Sensor de descarga (2)</td></tr>
    <tr><td><strong>Central</strong></td><td>EXV (6), Válvulas solenoides (13), Low pressure switch (12)</td></tr>
    <tr><td><strong>Inferior</strong></td><td>2× Compressor (1), High pressure sensor (3)</td></tr>
    <tr><td><strong>Inferior frontal</strong></td><td>Stop valve liquid (9), Stop valve gas (10)</td></tr>
  </tbody>
</table>

<h3>Distribuição por Zonas — Chassi Classe C (24-30HP)</h3>
<table>
  <thead>
    <tr><th>Zona do Gabinete</th><th>Componentes Localizados</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Topo</strong></td><td>2× Ventilador (8), 2× Motor (7), 2× Acumulador (11)</td></tr>
    <tr><td><strong>Superior interno</strong></td><td>Oil separator (4), Heat exchanger (5), 2× Sensor de descarga (2)</td></tr>
    <tr><td><strong>Lateral esquerda</strong></td><td>High pressure sensor (3), Válvulas solenoides (13)</td></tr>
    <tr><td><strong>Central</strong></td><td>EXV (6), Low pressure switch (12)</td></tr>
    <tr><td><strong>Inferior</strong></td><td>2× Compressor (1)</td></tr>
    <tr><td><strong>Inferior frontal</strong></td><td>Stop valve liquid (9), Stop valve gas (10)</td></tr>
  </tbody>
</table>

<h3>Comparativo de Hardware por Classe de Chassi</h3>
<table>
  <thead>
    <tr><th>Componente</th><th>Classe A (8-16HP)</th><th>Classe B (18-22HP)</th><th>Classe C (24-30HP)</th></tr>
  </thead>
  <tbody>
    <tr><td>Compressores</td><td>1</td><td>2</td><td>2</td></tr>
    <tr><td>Ventiladores</td><td>1</td><td>2</td><td>2</td></tr>
    <tr><td>Motores de ventilador</td><td>1</td><td>2</td><td>2</td></tr>
    <tr><td>Sensores de descarga</td><td>1</td><td>2</td><td>2</td></tr>
    <tr><td>Oil separator</td><td>1</td><td>1</td><td>1</td></tr>
    <tr><td>Heat exchanger</td><td>1</td><td>1 (maior)</td><td>1 (maior)</td></tr>
    <tr><td>EXV</td><td>1</td><td>1</td><td>1</td></tr>
    <tr><td>Acumulador</td><td>1</td><td>1</td><td>2</td></tr>
    <tr><td>Low pressure switch</td><td>1</td><td>1</td><td>1</td></tr>
    <tr><td>High pressure sensor</td><td>1</td><td>1</td><td>1</td></tr>
    <tr><td>Stop valve (liquid)</td><td>1</td><td>1</td><td>1</td></tr>
    <tr><td>Stop valve (gas)</td><td>1</td><td>1</td><td>1</td></tr>
    <tr><td>Válvulas solenoides</td><td>Múltiplas</td><td>Múltiplas</td><td>Múltiplas</td></tr>
    <tr><td><strong>Tamanho do gabinete</strong></td><td>Compacto</td><td>Médio</td><td>Grande</td></tr>
  </tbody>
</table>

<h3>Multiplicidade por Classe de Chassi</h3>
<table>
  <thead>
    <tr><th>Classe</th><th>HP</th><th>Compressores</th><th>Ventiladores</th><th>Sensores de Descarga</th><th>Acumuladores</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>A</strong></td><td>8-16</td><td>1</td><td>1</td><td>1</td><td>1</td></tr>
    <tr><td><strong>B</strong></td><td>18-22</td><td>2</td><td>2</td><td>2</td><td>1</td></tr>
    <tr><td><strong>C</strong></td><td>24-30</td><td>2</td><td>2</td><td>2</td><td>2</td></tr>
  </tbody>
</table>
          `,

          infobox_campo: `
<div class="infobox infobox-danger">
  <h4>⛔ SEGURANÇA — NUNCA ACESSE O COMPARTIMENTO DO COMPRESSOR SEM EPI ADEQUADO</h4>
  <p>Os compressores (item 1) operam com tensão de alimentação de <strong>380V</strong> e as tubulações de descarga podem atingir temperaturas superiores a <strong>100°C</strong>. Ao realizar qualquer inspeção ou manutenção na Zona 4 (compressores), o técnico DEVE usar luvas isolantes, óculos de proteção e garantir que o disjuntor principal esteja desligado e sinalizado (Lock-Out/Tag-Out), a menos que o procedimento exija operação energizada (ex.: leitura de sensores em tempo real).</p>
</div>

<div class="infobox infobox-warning">
  <h4>⚠️ DIAGNÓSTICO — CHASSI CLASSE B/C: TESTE AMBOS OS SENSORES DE DESCARGA</h4>
  <p>Nas unidades de 18 a 30HP, existem <strong>2 sensores de temperatura de descarga</strong> (item 2), um para cada compressor. Um código de erro de superaquecimento pode estar vinculado a apenas UM dos compressores. Sempre identifique QUAL sensor está na tubulação de descarga do compressor que está apresentando o erro — o Compressor 1 (principal/inverter) ou o Compressor 2 (fixed-speed). Trocar o sensor errado não resolverá o problema.</p>
</div>

<div class="infobox infobox-info">
  <h4>💡 ACESSO RÁPIDO EM CAMPO — STOP VALVES (9 e 10)</h4>
  <p>As válvulas de serviço (stop valves) do lado líquido (9) e do lado gás (10) estão <strong>SEMPRE</strong> na parte inferior frontal do gabinete, em TODAS as classes de chassi. Este é o ponto de acesso primário para conectar o manifold de serviço, realizar vácuo, carga de refrigerante e pump-down. Não confundir com as válvulas solenoides (13), que são componentes internos de controle automático e NÃO devem ser operadas manualmente.</p>
</div>

<div class="infobox infobox-tip">
  <h4>🔍 DICA DE INSPEÇÃO — CONTANDO COMPRESSORES PELA HÉLICE</h4>
  <p>Método rápido de verificação sem abrir o gabinete: se a unidade tem <strong>1 hélice</strong> visível no topo, ela possui <strong>1 compressor</strong> (Classe A, 8-16HP). Se tem <strong>2 hélices</strong>, ela possui <strong>2 compressores</strong> (Classes B/C, 18-30HP). Isso confirma a classe do chassi antes de abrir qualquer painel e ajuda a determinar quais peças de reposição solicitar.</p>
</div>
          `,
        },
        {
          id: "02-02",
          titulo: "Diagramas de Tubulação — Válvulas, Sensores e Acessórios",
          descricao:
            "Leitura completa do piping diagram do TVR Pro CO. Identificação de todos os acessórios: válvula de 4 vias, válvulas solenoides (SV1-SV6), EXVs (EXV-A, EXV-B), check valves, capillaries e oil equalization line. Comparativo entre sistemas de 1 e 2 compressores.",
          tempo_estimado: "45 min",
          nivel: "intermediario",
          tags: ["tubulação", "diagramas", "válvulas", "solenoides", "EXV"],
          videos: [],
          slides: [],

          // ─── CONTEÚDO COMPLETO DA AULA 2.2 ─────────────────────────
          conteudo_html: `
<h2>Do Layout Físico ao Diagrama Esquemático</h2>
<p>No Tópico 2.1, o técnico aprendeu <strong>onde</strong> os componentes estão fisicamente dentro do gabinete. Agora, no Tópico 2.2, o foco muda para <strong>como</strong> esses componentes se conectam entre si através da tubulação de cobre. Os diagramas de tubulação (Piping Diagrams) são representações esquemáticas do circuito frigorígeno — eles mostram o caminho completo do refrigerante R-410A desde a compressão até o retorno ao compressor, passando por todos os componentes de troca, expansão e controle.</p>
<p>A grande diferença em relação ao Tópico 2.1 é a introdução de <strong>7 componentes adicionais</strong> que aparecem nos diagramas esquemáticos mas que não foram numerados nos layouts físicos. Esses componentes são essencialmente <strong>sensores e válvulas solenoides específicas</strong>, cada uma com uma função e temporização de operação definida.</p>

<hr/>

<h2>Componentes Adicionais nos Diagramas de Tubulação</h2>
<p>Os diagramas de tubulação (Figures 2-2.1, 2-2.2 e 2-2.3) expandem a legenda de 13 componentes para <strong>16+ componentes</strong>, adicionando:</p>
<ul>
  <li><strong>T3 — Heat exchanger temperature sensor:</strong> Sensor tipo termistor instalado na saída do condensador. Mede a temperatura do refrigerante após a condensação, indicando o grau de subresfriamento (subcooling). Usado pela placa controladora para ajustar a abertura da EXV.</li>
  <li><strong>T4 — Outdoor ambient temperature sensor:</strong> Sensor tipo termistor instalado na entrada de ar do condensador. Mede a temperatura do ar externo. Usado para ajustar a velocidade do ventilador, controlar a pressão de condensação e ativar proteções contra temperatura ambiente extrema.</li>
  <li><strong>EXVA — Main Electronic Expansion Valve:</strong> A EXV principal do circuito. Opera por motor de passo e é o componente central de modulação de capacidade. Regula o fluxo de refrigerante líquido entre o condensador e a linha de líquido.</li>
  <li><strong>SV2 — Liquid injection valve:</strong> Válvula solenoide de proteção do compressor. Injeta uma pequena quantidade de refrigerante líquido diretamente na linha de sucção para resfriar o compressor quando a temperatura de descarga está perigosamente alta.</li>
  <li><strong>SV4 — Oil return valve:</strong> Válvula solenoide que controla o retorno de óleo lubrificante do separador de óleo para o cárter do compressor. Opera em ciclos temporizados.</li>
  <li><strong>SV7 — Pressure valve (bypass):</strong> Válvula solenoide que permite o retorno direto de refrigerante ao compressor em condições específicas. Atua como bypass de segurança.</li>
</ul>

<hr/>

<h2>Parâmetros Operacionais das Válvulas Solenoides</h2>
<p>O manual fornece os <strong>parâmetros de operação exatos</strong> de cada válvula solenoide. Esses dados são fundamentais para diagnóstico e verificação em campo:</p>

<h3>SV2 — Liquid Injection Valve</h3>
<ul>
  <li><strong>Condição de abertura:</strong> Temperatura de descarga do compressor ultrapassa <strong>100°C</strong></li>
  <li><strong>Ação:</strong> Abre e injeta refrigerante líquido na sucção para resfriar o compressor</li>
  <li><strong>Condição de fechamento:</strong> Temperatura de descarga cai abaixo de <strong>90°C</strong></li>
  <li><strong>Histerese:</strong> 10°C (abre a 100°C, fecha a 90°C)</li>
</ul>
<p><strong>Importância para Diagnóstico:</strong> Se a SV2 está constantemente aberta (ruído contínuo de fluxo na linha de injeção), indica que o compressor está superaquecendo cronicamente. Causas possíveis: falta de refrigerante, EXV com defeito, condensador sujo, ou ventilador travado.</p>

<h3>SV4 — Oil Return Valve</h3>
<ul>
  <li><strong>Condição de primeira abertura:</strong> Compressor em operação por <strong>200 segundos</strong> (3 min 20 s)</li>
  <li><strong>Ciclo de reabertura:</strong> Fecha após a abertura, e reabre a cada <strong>20 minutos</strong> por <strong>3 minutos</strong></li>
  <li><strong>Ciclo resumido:</strong> 200s após partida → abre → fecha → 600s fechada → 3 min aberta → repete</li>
</ul>
<p><strong>Importância para Diagnóstico:</strong> Se o compressor apresenta ruído anormal (batidas metálicas) ou falhas frequentes, uma SV4 com defeito pode estar impedindo o retorno adequado de óleo. Verifique a pulsação térmica na tubulação do separador de óleo — a cada 20 minutos, a linha deve esquentar brevemente.</p>

<h3>SV7 — Pressure Valve / Bypass</h3>
<ul>
  <li><strong>Condição de abertura 1:</strong> Temperatura do ar interior está próxima do setpoint</li>
  <li><strong>Objetivo 1:</strong> Evitar short cycling (ligações/desligamentos frequentes do compressor)</li>
  <li><strong>Condição de abertura 2:</strong> Grau de superaquecimento (superheat) insuficiente na linha de sucção</li>
  <li><strong>Objetivo 2:</strong> Evitar golpe de líquido (liquid hammer) no compressor</li>
</ul>
<p><strong>Importância para Diagnóstico:</strong> Se a SV7 falhar fechada → short cycling com códigos intermitentes. Se falhar aberta → capacidade de refrigeração cai significativamente pois parte do refrigerante faz bypass.</p>

<hr/>

<h2>Dados Expandidos dos Componentes-Chave</h2>

<h3>Oil Separator (Separador de Óleo — Item 4)</h3>
<ul>
  <li>Separa o óleo do gás refrigerante bombeado pelo compressor</li>
  <li><strong>Eficiência de separação: até 99%</strong></li>
  <li>Componente crítico para sistemas VRF com tubulações longas (até 175m)</li>
</ul>

<h3>Accumulator (Acumulador — Item 11)</h3>
<ul>
  <li>Armazena refrigerante líquido e óleo na linha de sucção</li>
  <li><strong>Protege o compressor contra golpe de líquido</strong> (liquid hammering)</li>
  <li>Permite que apenas gás e uma quantidade controlada de óleo entrem no compressor</li>
</ul>

<h3>Low Pressure Switch (Pressostato de Baixa — Item 12)</h3>
<ul>
  <li>Quando a pressão cai abaixo do limite inferior, <strong>desliga o compressor</strong></li>
  <li><strong>Após desligamento: reinício fixo de 10 minutos</strong> — não configurável em campo</li>
</ul>

<hr/>

<h2>Diagrama de Tubulação — Classe A (8-16HP)</h2>
<p>O circuito do 8-16HP é o mais simples e serve como base para os demais. O fluxo segue:</p>
<p><code>COMPRESSOR (1) → Sensor de descarga (2) → Oil separator (4) → Heat exchanger (5) → Sensor T3 + T4 → EXVA (6) → Stop valve líquido (9) → UNIDADES INTERNAS → Stop valve gás (10) → Acumulador (11) → COMPRESSOR</code></p>
<p>Válvulas de proteção no circuito: <strong>SV2</strong> (injeção de líquido), <strong>SV4</strong> (retorno de óleo) e <strong>SV7</strong> (bypass/pressão).</p>

<h2>Diagrama de Tubulação — Classe B (18-22HP)</h2>
<p><strong>Diferenças em relação ao 8-16HP:</strong></p>
<ul>
  <li><strong>2 compressores</strong> em paralelo — ambos alimentam o mesmo oil separator</li>
  <li><strong>2 sensores de descarga</strong> — um por compressor</li>
  <li><strong>2 ventiladores + 2 motores</strong> — capacidade de ventilação duplicada</li>
  <li>Válvulas SV2, SV4 e SV7 operam com os mesmos parâmetros, protegendo ambos os compressores</li>
</ul>

<h2>Diagrama de Tubulação — Classe C (24-30HP)</h2>
<p><strong>Diferenças em relação ao 18-22HP:</strong></p>
<ul>
  <li><strong>2 acumuladores</strong> — um para cada compressor, proteção independente contra golpe de líquido</li>
  <li>A válvula <strong>SV2</strong> aparece posicionada entre os dois acumuladores</li>
  <li>O retorno de óleo (SV4) é integrado à solenoide genérica (13)</li>
  <li>Circuito suporta maior vazão de refrigerante (24-30HP)</li>
</ul>

<hr/>

<h2>Codificação de Estados do Refrigerante nos Diagramas</h2>
<p>Os diagramas utilizam <strong>três representações visuais</strong> para os estados do refrigerante:</p>
<ul>
  <li><strong>Linha contínua grossa (vermelha):</strong> Gás de alta temperatura, alta pressão — Descarga do compressor → Oil separator → entrada do Condensador</li>
  <li><strong>Linha contínua média (vermelha/rosa):</strong> Líquido de alta temperatura, alta pressão — Saída do condensador → EXVA → Stop valve líquido (9)</li>
  <li><strong>Linha contínua fina (azul/verde):</strong> Gás/mistura de baixa temperatura, baixa pressão — Stop valve gás (10) → Acumulador (11) → Sucção do compressor</li>
</ul>
          `,

          tabelas_html: `
<h3>Componentes Adicionais nos Piping Diagrams</h3>
<table>
  <thead>
    <tr><th>Código</th><th>Componente</th><th>Função Detalhada</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>T3</strong></td><td>Heat exchanger temp. sensor</td><td>Mede temp. na saída do condensador → cálculo de subresfriamento</td></tr>
    <tr><td><strong>T4</strong></td><td>Outdoor ambient temp. sensor</td><td>Mede temp. do ar externo → ajuste de velocidade do ventilador</td></tr>
    <tr><td><strong>EXVA</strong></td><td>Main Electronic Expansion Valve</td><td>EXV principal — modulação de capacidade por motor de passo</td></tr>
    <tr><td><strong>SV2</strong></td><td>Liquid injection valve</td><td>Injeta líquido na sucção quando descarga &gt; 100°C</td></tr>
    <tr><td><strong>SV4</strong></td><td>Oil return valve</td><td>Retorno de óleo do separador em ciclos temporizados</td></tr>
    <tr><td><strong>SV7</strong></td><td>Pressure valve / bypass</td><td>Bypass de segurança contra short cycling e liquid hammer</td></tr>
  </tbody>
</table>

<h3>Parâmetros Operacionais das Válvulas Solenoides</h3>
<table>
  <thead>
    <tr><th>Válvula</th><th>Tipo</th><th>Condição de Abertura</th><th>Condição de Fechamento</th><th>Parâmetro Crítico</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>SV2</strong></td><td>Injeção de líquido</td><td>Temp. descarga &gt; <strong>100°C</strong></td><td>Temp. descarga &lt; <strong>90°C</strong></td><td>Histerese: 10°C</td></tr>
    <tr><td><strong>SV4</strong></td><td>Retorno de óleo</td><td>200s após partida do compressor</td><td>Após ciclo de abertura</td><td>Ciclo: 600s fechada / 3 min aberta</td></tr>
    <tr><td><strong>SV7</strong></td><td>Bypass / Pressão</td><td>Temp. ambiente ≈ setpoint OU superheat insuficiente</td><td>Condições normalizadas</td><td>Proteção contra short cycling e liquid hammer</td></tr>
  </tbody>
</table>

<h3>Sensores nos Piping Diagrams</h3>
<table>
  <thead>
    <tr><th>Código</th><th>Sensor</th><th>Grandeza Medida</th><th>Função Principal</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>T3</strong></td><td>Heat exchanger temp.</td><td>Temp. na saída do condensador (°C)</td><td>Cálculo de subresfriamento (subcooling)</td></tr>
    <tr><td><strong>T4</strong></td><td>Outdoor ambient temp.</td><td>Temp. do ar externo (°C)</td><td>Ajuste de velocidade do ventilador + proteções</td></tr>
    <tr><td><strong>2</strong></td><td>Discharge temp.</td><td>Temp. do gás de descarga (°C)</td><td>Proteção contra superaquecimento + controle SV2</td></tr>
    <tr><td><strong>3</strong></td><td>High pressure sensor</td><td>Pressão na linha de alta (MPa)</td><td>Proteção contra sobrepressão + controle de capacidade</td></tr>
    <tr><td><strong>12</strong></td><td>Low pressure switch</td><td>Pressão na linha de baixa (MPa)</td><td>Proteção contra operação em vácuo, reinício em 10 min</td></tr>
  </tbody>
</table>

<h3>Proteção do Compressor — Matriz de Atuação</h3>
<table>
  <thead>
    <tr><th>Condição de Risco</th><th>Componente de Proteção</th><th>Ação Automática</th></tr>
  </thead>
  <tbody>
    <tr><td>Descarga &gt; 100°C</td><td>SV2 (Liquid injection)</td><td>Abre → injeta líquido na sucção</td></tr>
    <tr><td>Descarga &lt; 90°C (normalizado)</td><td>SV2</td><td>Fecha → operação normal</td></tr>
    <tr><td>Falta de lubrificação (contínuo)</td><td>SV4 (Oil return)</td><td>Ciclo 600s/3min → garante retorno de óleo</td></tr>
    <tr><td>Pressão de sucção muito baixa</td><td>Low pressure switch (12)</td><td>Desliga compressor → reinício em 10 min</td></tr>
    <tr><td>Superheat insuficiente</td><td>SV7 (Bypass)</td><td>Abre → bypass de refrigerante</td></tr>
    <tr><td>Temp. ambiente ≈ setpoint</td><td>SV7 (Bypass)</td><td>Abre → evita short cycling</td></tr>
  </tbody>
</table>

<h3>Codificação Visual nos Diagramas</h3>
<table>
  <thead>
    <tr><th>Representação Visual</th><th>Estado do Refrigerante</th><th>Localização no Circuito</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Linha grossa (vermelha)</strong></td><td>Gás de alta temp., alta pressão</td><td>Descarga → Oil separator → Condensador</td></tr>
    <tr><td><strong>Linha média (rosa)</strong></td><td>Líquido de alta temp., alta pressão</td><td>Saída do condensador → EXVA → Stop valve (9)</td></tr>
    <tr><td><strong>Linha fina (azul)</strong></td><td>Gás/mistura de baixa temp., baixa pressão</td><td>Stop valve (10) → Acumulador → Sucção</td></tr>
  </tbody>
</table>
          `,

          infobox_campo: `
<div class="infobox infobox-danger">
  <h4>⛔ PROTEÇÃO CRÍTICA — A VÁLVULA SV2 É A ÚLTIMA LINHA DE DEFESA DO COMPRESSOR</h4>
  <p>Se a temperatura de descarga ultrapassa 100°C e a SV2 não abrir (bobina queimada, fiação rompida), o compressor continuará superaquecendo até atingir o limite de proteção térmica interna (OLP — Overload Protector), que desligará o compressor bruscamente. Esse desligamento repetitivo causa dano mecânico ao compressor. Sempre verifique a operação da SV2 como parte da manutenção preventiva — aplique tensão diretamente na bobina e escute o clique de acionamento.</p>
</div>

<div class="infobox infobox-warning">
  <h4>⚠️ DIAGNÓSTICO — LOW PRESSURE SWITCH: REINÍCIO FIXO DE 10 MINUTOS</h4>
  <p>Quando o pressostato de baixa (item 12) desliga o compressor, ele NÃO reinicia imediatamente. O sistema impõe um tempo de espera fixo de <strong>10 minutos</strong>. Se o técnico está tentando restartar o sistema após uma falha de baixa pressão e o compressor não liga, NÃO é necessariamente uma falha adicional — é o timer de 10 minutos em contagem. Espere o tempo completo antes de diagnosticar falha no compressor.</p>
</div>

<div class="infobox infobox-info">
  <h4>💡 VERIFICAÇÃO DE SV4 — CICLO DE RETORNO DE ÓLEO</h4>
  <p>A SV4 não é uma válvula que fica permanentemente aberta. Ela opera em ciclos: abre 200 segundos após a partida do compressor, depois fecha, e reabre por 3 minutos a cada 20 minutos. Se o técnico verificar a SV4 e ela estiver fechada, isso é <strong>normal</strong> — ela pode estar no intervalo de 600 segundos entre ciclos. Para confirmar operação correta, monitore por pelo menos 25 minutos e verifique se a válvula completa um ciclo completo.</p>
</div>

<div class="infobox infobox-tip">
  <h4>🔍 DICA RÁPIDA — EFICIÊNCIA DO OIL SEPARATOR</h4>
  <p>O separador de óleo do TVR Pro CO tem eficiência de <strong>até 99%</strong>. Se o sistema apresenta retorno de óleo visível no visor de líquido (sight glass) da tubulação principal ou nas evaporadoras, o problema provavelmente NÃO é o separador, mas sim: (a) carga excessiva de óleo no sistema, (b) conexões com diâmetro inadequado reduzindo a velocidade do refrigerante, ou (c) tubulação sem inclinação adequada (mínimo de 1% de declive em trechos horizontais).</p>
</div>
          `,
        },
        {
          id: "02-03",
          titulo: "Fluxo de Refrigerante — Cooling, Heating e Defrost Mode",
          descricao:
            "Rastreamento completo do caminho do R-410A em cada modo de operação. Estados das válvulas solenoides, posição da válvula de 4 vias, papel do acumulador e oil separator. Tabela resumo de estados para todos os modos operacionais do sistema.",
          tempo_estimado: "50 min",
          nivel: "intermediario",
          tags: ["refrigerante", "fluxo", "cooling", "heating", "defrost", "válvula-4-vias"],
          videos: [],
          slides: [],

          // ─── CONTEÚDO COMPLETO DA AULA 2.3 ─────────────────────────
          conteudo_html: `
<h2>Dois Modos de Operação — Dois Comportamentos Distintos</h2>
<p>O sistema TVR Pro CO opera em dois modos fundamentais que o técnico precisa distinguir ao analisar os diagramas de fluxo:</p>
<ol>
  <li><strong>Cooling Operation (Operação de Refrigeração):</strong> O modo normal de trabalho. O refrigerante percorre o ciclo completo: compressão → condensação → expansão → evaporação → retorno ao compressor.</li>
  <li><strong>Oil Return Operation in Cooling Mode (Retorno de Óleo):</strong> Um modo periódico e automático que o sistema executa para garantir que o óleo lubrificante retorne das evaporadoras e tubulações de campo para o compressor. Durante este modo, o comportamento das unidades internas muda significativamente.</li>
</ol>
<p>O manual apresenta <strong>6 diagramas</strong> no total — 2 para cada classe de chassi (Figures 2-3.1 a 2-3.6).</p>

<hr/>

<h2>Os Três Estados Termodinâmicos do Refrigerante</h2>
<p>Todos os 6 diagramas utilizam a mesma codificação visual de <strong>três estados do refrigerante</strong> na tubulação:</p>
<ul>
  <li><strong>Estado 1 — Gás de alta temperatura, alta pressão:</strong> Saída do compressor → Oil separator → Entrada do condensador. Representado por linha contínua grossa (vermelha).</li>
  <li><strong>Estado 2 — Líquido de alta temperatura, alta pressão:</strong> Saída do condensador → EXVA → Stop valve líquido (9) → Tubulação de campo → Entrada das EXVs das unidades internas. Linha contínua média (rosa).</li>
  <li><strong>Estado 3 — Gás/mistura de baixa temperatura, baixa pressão:</strong> Saída das evaporadoras → Tubulação de campo → Stop valve gás (10) → Acumulador (11) → Sucção do compressor. Linha contínua fina (azul).</li>
</ul>
<p><strong>Importância para Diagnóstico:</strong> Se o técnico mede a temperatura de uma tubulação e encontra valores inconsistentes com o estado esperado (ex.: tubulação de sucção muito quente), isso indica um problema no ciclo — pode ser superaquecimento excessivo, EXV com abertura incorreta, ou falta de refrigerante.</p>

<hr/>

<h2>Modo de Refrigeração Normal (Cooling Operation)</h2>
<p>O ciclo de refrigeração segue o percurso clássico de um sistema VRF Cooling Only:</p>

<h3>Etapa 1 — Compressão</h3>
<p>O compressor (1) aspira o gás refrigerante R-410A de baixa pressão e baixa temperatura proveniente do acumulador (11), e o comprime para alta pressão e alta temperatura. O sensor de descarga (2) monitora a temperatura do gás na saída.</p>

<h3>Etapa 2 — Separação de Óleo</h3>
<p>O gás comprimido passa pelo oil separator (4), que retém o óleo lubrificante arrastado pelo fluxo de refrigerante. O óleo é retornado ao cárter do compressor pela válvula SV4 em ciclos temporizados (conforme Tópico 2.2).</p>

<h3>Etapa 3 — Condensação</h3>
<p>O gás de alta pressão entra no condensador/heat exchanger (5), onde cede calor para o ar externo forçado pelos ventiladores (8). O refrigerante muda de estado gasoso para líquido. Os sensores T3 (temperatura do trocador) e T4 (temperatura ambiente) monitoram este processo.</p>

<h3>Etapa 4 — Expansão Principal (EXVA)</h3>
<p>O líquido de alta pressão passa pela válvula EXVA, onde sofre uma primeira redução de pressão controlada antes de seguir para a stop valve de líquido (9) e sair para a tubulação de campo.</p>

<h3>Etapa 5 — Distribuição para Unidades Internas</h3>
<p>O refrigerante líquido percorre a tubulação de campo até as unidades internas, onde passa pelas EXVs individuais de cada evaporadora. Cada EXV regula o fluxo conforme a demanda específica daquele ambiente.</p>

<h3>Etapa 6 — Evaporação</h3>
<p>Nas evaporadoras (unidades internas), o refrigerante líquido absorve calor do ar interior e muda de estado líquido para gasoso. O ar resfriado é insuflado no ambiente pelos ventiladores das unidades internas.</p>

<h3>Etapa 7 — Retorno</h3>
<p>O gás de baixa pressão retorna pela tubulação de campo, entra pela stop valve de gás (10), passa pelo acumulador (11) — que retém qualquer líquido remanescente — e retorna ao compressor, reiniciando o ciclo.</p>

<hr/>

<h2>Os 4 Estados Operacionais das Unidades Internas</h2>
<p>Os diagramas de fluxo mostram <strong>4 estados operacionais possíveis</strong> para as unidades internas durante a refrigeração:</p>
<ul>
  <li><strong>Estado 1 — Unit ON / Thermostat ON:</strong> Operação plena. A evaporadora está climatizando o ambiente. A EXV modula conforme a demanda. Ventilador ligado.</li>
  <li><strong>Estado 2 — Unit ON / Thermostat ON:</strong> Idêntico ao Estado 1. Múltiplas evaporadoras operam simultaneamente em controle normal.</li>
  <li><strong>Estado 3 — Unit OFF:</strong> A unidade está desligada. A EXV fecha completamente (0 steps), impedindo passagem de refrigerante. O ventilador para.</li>
  <li><strong>Estado 4 — Unit ON / Thermostat OFF:</strong> O ambiente atingiu a temperatura de setpoint. O termostato desativa a refrigeração, mas o ventilador continua ligado para circulação de ar. A EXV fecha completamente.</li>
</ul>
<p><strong>Regra Fundamental:</strong> Quando a EXV de uma unidade interna está <strong>fechada</strong> (estados 3 e 4), aquela evaporadora <strong>não consome refrigerante</strong>. Todo o fluxo é redirecionado para as evaporadoras em "Normal control". Isso é o princípio VRF: <strong>Volume de Refrigerante Variável</strong> — cada evaporadora consome apenas o que precisa.</p>

<hr/>

<h2>Modo de Retorno de Óleo (Oil Return Operation)</h2>
<p>O modo de Oil Return é uma <strong>operação automática e periódica</strong> que o sistema executa para forçar o retorno de óleo lubrificante das evaporadoras e tubulação de campo. Em sistemas VRF com longas tubulações (até 175m), o óleo tende a migrar para pontos baixos e evaporadoras inativas.</p>

<h3>Diferença Crítica: O que muda no Oil Return?</h3>
<p>A grande mudança está no comportamento das <strong>unidades internas que estão desligadas ou com termostato off</strong>:</p>
<ul>
  <li><strong>Estados 1 e 2:</strong> Sem mudança — continuam em "Normal control".</li>
  <li><strong>Estado 3 (Unit OFF):</strong> A EXV abre para <strong>300 steps</strong> (parcialmente). O ventilador permanece <strong>desligado</strong>. O objetivo não é climatizar, mas circular refrigerante para arrastar o óleo.</li>
  <li><strong>Estado 4 (Thermostat OFF):</strong> A EXV abre para <strong>300 steps</strong>. O ventilador permanece <strong>ligado</strong>, pois a unidade está nominalmente "ligada".</li>
</ul>

<h3>O Que São "300 Steps"?</h3>
<p>A EXV das unidades internas opera por <strong>motor de passo</strong> (stepper motor). A abertura é medida em "steps" (passos):</p>
<ul>
  <li><strong>0 steps</strong> = Válvula completamente fechada</li>
  <li><strong>300 steps</strong> = Abertura parcial específica para retorno de óleo</li>
  <li><strong>480-500 steps</strong> (típico) = Abertura plena durante refrigeração máxima</li>
</ul>

<hr/>

<h2>Fluxo de Refrigerante por Classe de Chassi</h2>

<h3>8-16HP (Figures 2-3.1 e 2-3.2)</h3>
<p><strong>Cooling:</strong> Circuito simples com 1 compressor. Fluxo unidirecional compressor → condensador → EXVA → campo → retorno.</p>
<p><strong>Oil Return:</strong> O compressor continua operando normalmente. As EXVs das unidades inativas abrem a 300 steps. O óleo retornado é retido no acumulador (11) e separado pelo oil separator (4).</p>

<h3>18-22HP (Figures 2-3.3 e 2-3.4)</h3>
<p><strong>Cooling:</strong> 2 compressores em paralelo alimentam o mesmo oil separator e condensador.</p>
<p><strong>Oil Return:</strong> Idêntico ao 8-16HP em lógica, porém com maior vazão de refrigerante (2 compressores), tornando o retorno de óleo mais eficiente em tubulações longas.</p>

<h3>24-30HP (Figures 2-3.5 e 2-3.6)</h3>
<p><strong>Cooling:</strong> 2 compressores + 2 acumuladores (11, 11). Cada compressor tem seu próprio acumulador de proteção.</p>
<p><strong>Oil Return:</strong> Com 2 acumuladores, o óleo retornado é distribuído entre ambos, garantindo proteção individual para cada compressor. O comportamento das EXVs internas (300 steps) é idêntico.</p>

<hr/>

<h2>Cenários de Diagnóstico — Correlacionando Fluxo e Sintomas</h2>

<h3>Cenário A: "Algumas evaporadoras não resfriam"</h3>
<p>Checar se as EXVs das unidades problemáticas estão em "Normal control" ou travadas em "Closed". Se a EXV está travada fechada, o refrigerante não chega à evaporadora. Possíveis causas: falha na bobina do motor de passo, erro de comunicação, ou código de erro ativo bloqueando a EXV.</p>

<h3>Cenário B: "Compressor apresenta ruído de batida após longo período"</h3>
<p>Suspeitar de falha no ciclo de Oil Return. Se a SV4 está defeituosa (Tópico 2.2) ou se as EXVs das unidades internas não abrem a 300 steps durante o Oil Return, o óleo se acumula nas evaporadoras. Verificar: (a) operação da SV4, (b) abertura das EXVs durante Oil Return via menu de diagnóstico.</p>

<h3>Cenário C: "Sistema entra em proteção por baixa pressão repetidamente"</h3>
<p>Se múltiplas evaporadoras estão com EXVs fechadas (estados 3/4) e o sistema opera com poucas unidades ativas, a pressão de sucção pode cair abaixo do limite do pressostato (12). Verificar se o número de evaporadoras ativas é suficiente para manter a pressão de sucção dentro da faixa operacional.</p>
          `,

          tabelas_html: `
<h3>Estados das Unidades Internas — Cooling vs. Oil Return</h3>
<table>
  <thead>
    <tr><th>Estado</th><th>Condição</th><th>Ventilador (Cooling)</th><th>EXV (Cooling)</th><th>Ventilador (Oil Return)</th><th>EXV (Oil Return)</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>1</strong></td><td>Unit ON / Thermostat ON</td><td>ON</td><td>Normal control</td><td>ON</td><td>Normal control</td></tr>
    <tr><td><strong>2</strong></td><td>Unit ON / Thermostat ON</td><td>ON</td><td>Normal control</td><td>ON</td><td>Normal control</td></tr>
    <tr><td><strong>3</strong></td><td>Unit OFF</td><td>OFF</td><td><strong>Closed</strong></td><td>OFF</td><td><strong>300 steps</strong></td></tr>
    <tr><td><strong>4</strong></td><td>Unit ON / Thermostat OFF</td><td>ON</td><td><strong>Closed</strong></td><td>ON</td><td><strong>300 steps</strong></td></tr>
  </tbody>
</table>

<h3>Diagramas de Fluxo por Classe de Chassi</h3>
<table>
  <thead>
    <tr><th>Classe</th><th>HP</th><th>Cooling Operation</th><th>Oil Return Operation</th><th>Compressores</th><th>Acumuladores</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>A</strong></td><td>8-16</td><td>Figure 2-3.1</td><td>Figure 2-3.2</td><td>1</td><td>1</td></tr>
    <tr><td><strong>B</strong></td><td>18-22</td><td>Figure 2-3.3</td><td>Figure 2-3.4</td><td>2</td><td>1</td></tr>
    <tr><td><strong>C</strong></td><td>24-30</td><td>Figure 2-3.5</td><td>Figure 2-3.6</td><td>2</td><td>2</td></tr>
  </tbody>
</table>

<h3>Abertura da EXV em Steps</h3>
<table>
  <thead>
    <tr><th>Condição</th><th>Abertura (Steps)</th><th>Modo</th><th>Função</th></tr>
  </thead>
  <tbody>
    <tr><td>Fechada completamente</td><td><strong>0 steps</strong></td><td>Cooling — unidade off/thermostat off</td><td>Impede passagem de refrigerante</td></tr>
    <tr><td>Abertura parcial (Oil Return)</td><td><strong>300 steps</strong></td><td>Oil Return — unidade off/thermostat off</td><td>Permite fluxo parcial para arrastar óleo</td></tr>
    <tr><td>Controle normal</td><td><strong>Variável</strong> (0-500+)</td><td>Cooling — unidade ativa</td><td>Modula conforme demanda de refrigeração</td></tr>
  </tbody>
</table>

<h3>Estados Termodinâmicos do Refrigerante</h3>
<table>
  <thead>
    <tr><th>Estado</th><th>Representação</th><th>Descrição Termodinâmica</th><th>Trecho do Circuito</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>1</strong></td><td>Linha grossa (vermelha)</td><td>Gás de alta temp., alta pressão</td><td>Compressor → Oil separator → Condensador</td></tr>
    <tr><td><strong>2</strong></td><td>Linha média (rosa)</td><td>Líquido de alta temp., alta pressão</td><td>Condensador → EXVA → Stop valve (9) → Campo</td></tr>
    <tr><td><strong>3</strong></td><td>Linha fina (azul)</td><td>Gás/mistura de baixa temp., baixa pressão</td><td>Campo → Stop valve (10) → Acumulador → Compressor</td></tr>
  </tbody>
</table>
          `,

          infobox_campo: `
<div class="infobox infobox-danger">
  <h4>⛔ REGRA CRÍTICA — NÃO INTERROMPA O CICLO DE OIL RETURN</h4>
  <p>O sistema executa o Oil Return automaticamente em intervalos definidos pela placa controladora. Se o técnico desligar o sistema durante um ciclo de Oil Return (identificável pela abertura das EXVs a 300 steps em unidades inativas), o óleo que estava sendo retornado ficará retido na tubulação de campo. Desligamentos frequentes durante Oil Return podem levar ao acúmulo progressivo de óleo nas evaporadoras e, eventualmente, à falha por falta de lubrificação no compressor.</p>
</div>

<div class="infobox infobox-warning">
  <h4>⚠️ DIAGNÓSTICO — "300 STEPS" NÃO É UM DEFEITO</h4>
  <p>Se durante uma inspeção o técnico observa (via menu de diagnóstico da placa) que as EXVs de unidades desligadas estão com abertura de 300 steps, isso é <strong>comportamento normal</strong> durante o ciclo de Oil Return. NÃO tente "corrigir" forçando a EXV para 0 steps. O Oil Return é essencial para a longevidade do compressor.</p>
</div>

<div class="infobox infobox-info">
  <h4>💡 PRINCÍPIO VRF — VOLUME DE REFRIGERANTE VARIÁVEL</h4>
  <p>A diferença fundamental entre o TVR Pro CO e um sistema split convencional é que cada evaporadora controla <strong>independentemente</strong> seu fluxo de refrigerante via EXV. Em um sistema com 10 evaporadoras, se apenas 3 estão demandando refrigeração (estados 1/2), as outras 7 fecham suas EXVs (estados 3/4) e o compressor reduz automaticamente sua frequência (via inverter) para produzir apenas o volume necessário. Isso resulta em economia de energia de <strong>30-50%</strong> em comparação com sistemas de capacidade fixa.</p>
</div>

<div class="infobox infobox-tip">
  <h4>🔍 VERIFICAÇÃO RÁPIDA EM CAMPO — TEMPERATURA DAS TUBULAÇÕES</h4>
  <p>Para confirmar o estado do refrigerante sem instrumentos sofisticados:</p>
  <ul>
    <li><strong>Tubulação de descarga (estado 1):</strong> Deve estar <strong>QUENTE</strong> (60-100°C) — se estiver morna, o compressor pode estar com válvulas danificadas.</li>
    <li><strong>Tubulação de líquido (estado 2):</strong> Deve estar <strong>MORNA a QUENTE</strong> (35-50°C) — se estiver fria, indica flash gas na linha de líquido.</li>
    <li><strong>Tubulação de sucção (estado 3):</strong> Deve estar <strong>FRIA</strong> com condensação superficial — se estiver gelada com gelo, indica superheat muito baixo e risco de liquid slugging.</li>
  </ul>
</div>
          `,
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════════
    // PARTE 3 — Controle e Operação
    // ════════════════════════════════════════════════════════════════════════
    {
      id: 3,
      titulo: "PARTE 3 — Controle, Operação e Proteção",
      descricao:
        "A inteligência do sistema: sequências de partida, algoritmos de controle de capacidade (frequência do compressor e velocidade do ventilador), proteções térmicas/elétricas e modos especiais como oil return e descongelamento.",
      icone: "shield",
      cor: "emerald",
      topicos: [
        {
          id: "03-01",
          titulo: "Controle Geral e Sequência de Partida",
          descricao:
            "A sequência completa de startup: pré-aquecimento do cárter → verificação de sensores → controle de frequência do inverter → ramp-up. Controle de capacidade do ventilador (RPM vs temperatura ambiente) e algoritmos de distribuição de carga entre compressores.",
          tempo_estimado: "45 min",
          nivel: "intermediario",
          tags: ["partida", "startup", "inverter", "frequência", "ventilador"],
          videos: [],
          slides: [],

          // ─── CONTEÚDO COMPLETO DA AULA 3.1 ─────────────────────────
          conteudo_html: `
<h2>Fluxograma Geral de Controle — Visão Sistêmica</h2>
<p>A placa controladora principal (main PCB) da unidade externa opera seguindo um <strong>fluxograma mestre de controle</strong> composto por 5 blocos sequenciais. Entender este fluxograma é fundamental porque todo diagnóstico de falha começa por identificar <strong>em qual bloco</strong> o sistema se encontra no momento do problema.</p>

<h3>Os 5 Blocos de Controle</h3>
<ul>
  <li><strong>Bloco 1 — Stop Operation (Operação de Parada):</strong> Define as condições em que o sistema para ou permanece parado.</li>
  <li><strong>Bloco 2 — Startup Control (Controle de Partida):</strong> Gerencia a sequência de inicialização dos componentes após comando de ligar.</li>
  <li><strong>Bloco 3 — Normal Operation Control:</strong> Controla todos os componentes durante a operação em regime permanente.</li>
  <li><strong>Bloco 4 — Protection Control:</strong> Monitora limites de pressão, temperatura e corrente, acionando proteções quando ultrapassados.</li>
  <li><strong>Bloco 5 — Special Control:</strong> Gerencia operações especiais como duty cycling e oil return automático.</li>
</ul>

<h3>Fluxo de Transições</h3>
<p>O ciclo principal é:</p>
<ol>
  <li>O sistema começa em <strong>Stop Operation</strong> (parado)</li>
  <li>Quando o termostato é ativado ("Thermo on"), entra em <strong>Startup Control</strong></li>
  <li>Após a sequência de partida, transiciona para <strong>Normal Operation Control</strong></li>
  <li>Se condições de proteção forem violadas, entra em <strong>Protection Control</strong></li>
  <li>Periodicamente, o <strong>Special Control</strong> assume para executar oil return ou duty cycling</li>
  <li>Após o Special Control, o sistema retorna para <strong>Startup Control</strong> (re-sequência) e depois para <strong>Normal Operation</strong></li>
</ol>

<hr/>

<h2>Stop Operation — As 3 Condições de Parada</h2>
<p>O sistema entra em parada (Stop Operation) por <strong>uma de três razões</strong>:</p>
<ul>
  <li><strong>1. Abnormal shutdown (Desligamento anormal):</strong> Condição anormal detectada (sobrepressão, sobrecorrente, sobretemperatura). O sistema executa um "stop with thermo off". Um <strong>código de erro</strong> é exibido no display digital da unidade externa. O sistema NÃO reinicia automaticamente em caso de erro grave (H5, H6, C7).</li>
  <li><strong>2. System stops (Parada por setpoint):</strong> A temperatura configurada foi atingida em todas as unidades internas ativas. Não há erro — reinicia automaticamente quando a temperatura sobe acima do setpoint + histerese.</li>
  <li><strong>3. Load decrease (Redução de carga):</strong> A demanda diminui a ponto de ser atendida por menos módulos externos. Os módulos excedentes param. Princípio de modulação de carga do VRF multi-módulo.</li>
</ul>

<hr/>

<h2>Startup Control — Controle de Partida</h2>

<h3>Atraso na Partida do Compressor</h3>
<p>O sistema TVR Pro CO impõe <strong>dois tipos de atraso</strong> antes de ligar os compressores:</p>
<ul>
  <li><strong>Atraso inicial (primeira energização): 12 minutos</strong> — Permite que a unidade master faça a <strong>busca de endereços</strong> (address search) de todas as unidades internas no barramento de comunicação.</li>
  <li><strong>Atraso de reinício: mínimo 7 minutos</strong> — Após qualquer parada do compressor (exceto durante oil return). Previne short cycling e permite equalização de pressão.</li>
</ul>
<p><strong>Exceção importante:</strong> O atraso de 7 minutos <strong>NÃO se aplica</strong> quando o reinício ocorre durante a operação de oil return. Nesse caso, o compressor pode reiniciar imediatamente.</p>

<h3>Controle de Componentes durante a Partida (Table 3-3.1)</h3>
<p>A tabela do manual detalha como cada componente é controlado durante a sequência de partida:</p>
<ul>
  <li><strong>BP1/BP2 (Inverter compressors):</strong> Controlados conforme a demanda de carga. Frequência aumentada em incrementos de <strong>1 step/s</strong> (1 rps por segundo).</li>
  <li><strong>FAN1/FAN2 (DC fan motors):</strong> Velocidade controlada pela <strong>pressão de descarga (Pc)</strong>. Inicia em velocidade fixa por <strong>90 segundos</strong>, depois Pc é verificada a cada <strong>10 segundos</strong>.</li>
  <li><strong>EXVA:</strong> Posição controlada de <strong>0 steps</strong> (fechada) a <strong>3000 steps</strong> (aberta), ajustada conforme a <strong>temperatura de descarga</strong>.</li>
  <li><strong>SV2:</strong> Controlada pela temperatura de descarga (abre a >100°C, fecha a <90°C).</li>
  <li><strong>SV4:</strong> <strong>Fechada por 200 segundos</strong> após partida, depois <strong>abre por 600 segundos</strong>, depois fecha (ciclo).</li>
  <li><strong>SV7:</strong> Controlada conforme a demanda de carga e a pressão de descarga.</li>
</ul>

<h3>Lógica de Controle do Ventilador durante Startup</h3>
<p>O controle do ventilador DC segue uma lógica baseada na <strong>pressão de descarga (Pc)</strong>:</p>
<ul>
  <li><strong>Fase 1 (0 a 90s):</strong> Ventilador opera em <strong>velocidade fixa</strong> inicial</li>
  <li><strong>Fase 2 (após 90s):</strong> Pressão Pc é monitorada a cada <strong>10 segundos</strong>:
    <ul>
      <li>Pc ≥ <strong>2.7 MPa</strong> → Velocidade <strong>aumenta em 1 step</strong></li>
      <li>Pc ≤ <strong>2.1 MPa</strong> → Velocidade <strong>diminui em 1 step</strong></li>
      <li>2.1 < Pc < 2.7 MPa → Velocidade <strong>mantém-se inalterada</strong></li>
    </ul>
  </li>
</ul>
<p><strong>Tradução prática:</strong> Se a pressão está alta (condensação insuficiente), o ventilador acelera. Se está baixa (condensação excessiva ou frio extremo), o ventilador desacelera.</p>

<hr/>

<h2>Resumo da Sequência de Partida — Timeline</h2>
<p>Para um sistema 18-22HP (Classe B) sendo ligado pela primeira vez:</p>
<ul>
  <li><strong>T = 0 min</strong> → Sistema energizado. Início da busca de endereços</li>
  <li><strong>T = 12 min</strong> → Busca concluída. Comando "Thermo on" recebido. EXVA posicionada. SV4 fechada (timer 200s). BP1+BP2 iniciam rampa. FAN1+FAN2 em velocidade fixa</li>
  <li><strong>T = 13.5 min</strong> → FAN1+FAN2 entram em controle por Pc (após 90s)</li>
  <li><strong>T = 15.3 min</strong> → SV4 abre (após 200s = 3 min 20s desde a partida)</li>
  <li><strong>T = 25.3 min</strong> → SV4 fecha. Entra no ciclo: fecha 600s → abre 3 min → repete</li>
</ul>
          `,

          tabelas_html: `
<h3>Componentes por Classe durante Startup</h3>
<table>
  <thead>
    <tr><th>Componente</th><th>Label</th><th>8-12HP</th><th>14-16HP</th><th>18-22HP</th><th>24-30HP</th></tr>
  </thead>
  <tbody>
    <tr><td>Inverter compressor A</td><td><strong>BP1</strong></td><td>✔</td><td>✔</td><td>✔</td><td>✔</td></tr>
    <tr><td>Inverter compressor B</td><td><strong>BP2</strong></td><td>—</td><td>—</td><td>✔</td><td>✔</td></tr>
    <tr><td>DC fan motor A</td><td><strong>FAN1</strong></td><td>✔</td><td>✔</td><td>✔</td><td>✔</td></tr>
    <tr><td>DC fan motor B</td><td><strong>FAN2</strong></td><td>—</td><td>—</td><td>✔</td><td>✔</td></tr>
    <tr><td>Electronic expansion valve A</td><td><strong>EXVA</strong></td><td>✔</td><td>✔</td><td>✔</td><td>✔</td></tr>
    <tr><td>Solenoid SV2</td><td><strong>SV2</strong></td><td>✔</td><td>✔</td><td>✔</td><td>✔</td></tr>
    <tr><td>Solenoid SV4</td><td><strong>SV4</strong></td><td>✔</td><td>✔</td><td>✔</td><td>✔</td></tr>
    <tr><td>Solenoid SV7</td><td><strong>SV7</strong></td><td>✔</td><td>✔</td><td>✔</td><td>✔</td></tr>
  </tbody>
</table>

<h3>Tempos de Atraso do Sistema</h3>
<table>
  <thead>
    <tr><th>Evento</th><th>Tempo</th><th>Observação</th></tr>
  </thead>
  <tbody>
    <tr><td>Busca de endereços (primeiro boot)</td><td><strong>12 min</strong></td><td>Master busca todas as IDUs</td></tr>
    <tr><td>Atraso mínimo de reinício</td><td><strong>7 min</strong></td><td>Após qualquer parada (exceto oil return)</td></tr>
    <tr><td>SV4 — primeiro open após partida</td><td><strong>200 s</strong> (3 min 20 s)</td><td>Timer fixo</td></tr>
    <tr><td>Fan — velocidade fixa inicial</td><td><strong>90 s</strong></td><td>Antes de entrar em controle por Pc</td></tr>
    <tr><td>Fan — intervalo de verificação de Pc</td><td><strong>10 s</strong></td><td>Após os 90s iniciais</td></tr>
  </tbody>
</table>

<h3>Limiares de Pressão de Descarga para Controle de Fan</h3>
<table>
  <thead>
    <tr><th>Condição</th><th>Limiar (Pc)</th><th>Ação no Fan</th></tr>
  </thead>
  <tbody>
    <tr><td>Pressão alta</td><td>Pc ≥ <strong>2.7 MPa</strong></td><td>+1 step velocidade</td></tr>
    <tr><td>Pressão normal</td><td>2.1 &lt; Pc &lt; 2.7 MPa</td><td>Sem alteração</td></tr>
    <tr><td>Pressão baixa</td><td>Pc ≤ <strong>2.1 MPa</strong></td><td>-1 step velocidade</td></tr>
  </tbody>
</table>

<h3>Os 5 Blocos de Controle do Sistema</h3>
<table>
  <thead>
    <tr><th>Bloco</th><th>Nome</th><th>Função</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>1</strong></td><td>Stop Operation</td><td>Condições de parada e permanência em parada</td></tr>
    <tr><td><strong>2</strong></td><td>Startup Control</td><td>Sequência de inicialização dos componentes</td></tr>
    <tr><td><strong>3</strong></td><td>Normal Operation Control</td><td>Controle em regime permanente</td></tr>
    <tr><td><strong>4</strong></td><td>Protection Control</td><td>Monitoramento de limites e acionamento de proteções</td></tr>
    <tr><td><strong>5</strong></td><td>Special Control</td><td>Oil return e duty cycling</td></tr>
  </tbody>
</table>
          `,

          infobox_campo: `
<div class="infobox infobox-danger">
  <h4>⛔ ATRASO DE 12 MINUTOS — NÃO É DEFEITO, É BUSCA DE ENDEREÇOS</h4>
  <p>Quando o sistema TVR Pro CO é energizado pela primeira vez (ou após um reset completo da placa master), os compressores <strong>NÃO iniciam por 12 minutos</strong>. Isso é comportamento <strong>normal</strong> — a placa master está fazendo a busca de endereços (address search) para mapear todas as unidades internas conectadas ao barramento. Se reportarem "o sistema não liga por 12 minutos", NÃO é uma falha. Aguardar.</p>
</div>

<div class="infobox infobox-warning">
  <h4>⚠️ REINÍCIO MÍNIMO DE 7 MINUTOS — PROTEÇÃO CONTRA SHORT CYCLING</h4>
  <p>Após qualquer parada do compressor (por erro, por setpoint atingido, ou por redução de carga), o sistema impõe um atraso mínimo de <strong>7 minutos</strong> antes de religar. Isso é para <strong>equalizar a pressão</strong> no circuito frigorígeno e evitar partida com alta pressão diferencial, que pode danificar o compressor. A única exceção é o reinício após oil return, que é imediato.</p>
</div>

<div class="infobox infobox-info">
  <h4>💡 EXVA: RANGE TOTAL DE 0 A 3000 STEPS</h4>
  <p>A válvula de expansão eletrônica principal (EXVA) opera em um range de <strong>0 steps</strong> (totalmente fechada) a <strong>3000 steps</strong> (totalmente aberta). Durante a partida, a posição é controlada pela temperatura de descarga. Se o técnico observar a EXVA travada em 0 steps (ou em posição fixa que não responde) durante a operação, isso indica possível falha no motor de passo ou na placa controladora.</p>
</div>

<div class="infobox infobox-tip">
  <h4>🔍 VERIFICAÇÃO RÁPIDA DO CONTROLE DE FAN — OUVIR A MUDANÇA DE VELOCIDADE</h4>
  <p>Após a partida do sistema, nos primeiros 90 segundos os ventiladores operam em velocidade fixa. Depois dos 90s, o técnico deve perceber <strong>mudanças sutis de velocidade a cada ~10 segundos</strong> enquanto o sistema ajusta com base na pressão Pc. Se o ventilador permanece em velocidade fixa constante após 2-3 minutos de operação, pode haver falha no sensor de alta pressão (3) ou no circuito de controle do motor DC.</p>
</div>
          `,
        },
        {
          id: "03-02",
          titulo: "Operação Normal — Controle de Capacidade e Eficiência",
          descricao:
            "Como o sistema modula em tempo real: curva de carga vs frequência, limites de operação do compressor (mín/máx Hz), controle de subcooling/superheat via EXV, e a lógica de prioridade entre conforto térmico e proteção do equipamento.",
          tempo_estimado: "40 min",
          nivel: "intermediario",
          tags: ["operação", "modulação", "EXV", "subcooling", "superheat"],
          videos: [],
          slides: [],

          // ─── CONTEÚDO COMPLETO DA AULA 3.2 ─────────────────────────
          conteudo_html: `
<h2>Controle de Componentes durante Operação Normal (Table 3-4.1)</h2>
<p>Após a sequência de partida (Tópico 3.1), o sistema entra no regime de <strong>Operação Normal</strong>, onde cada componente é controlado por uma lógica específica e contínua:</p>
<ul>
  <li><strong>BP1/BP2 (Inverter compressors):</strong> Controlados conforme a <strong>demanda de carga</strong> (load requirement)</li>
  <li><strong>FAN1/FAN2 (DC fan motors):</strong> Controlados conforme a <strong>pressão de descarga (Pc)</strong></li>
  <li><strong>EXVA:</strong> Posição de <strong>0</strong> (fechada) a <strong>3000 steps</strong> (aberta), controlada pela <strong>temperatura de descarga</strong></li>
  <li><strong>SV2:</strong> Controlada pela <strong>temperatura de descarga</strong> (abre >100°C, fecha <90°C)</li>
  <li><strong>SV4:</strong> <strong>Aberta regularmente</strong> — ciclo automático contínuo de retorno de óleo</li>
  <li><strong>SV7:</strong> A mais complexa — controlada por <strong>5 variáveis simultâneas:</strong> temperatura ambiente, pressão de descarga, frequência do compressor, grau de superaquecimento e demanda de carga</li>
</ul>
<p><strong>Diferença Startup vs. Normal Operation:</strong> Na partida, a SV4 tem timer fixo de 200s. Na operação normal, opera em ciclo contínuo. A SV7 passa a ser controlada por 5 variáveis simultâneas.</p>

<hr/>

<h2>Compressor Output Control — Controle de Frequência</h2>
<p>O compressor inverter modula sua frequência (rps) conforme a demanda de carga em dois estágios:</p>

<h3>Estágio 1 — Antes da Partida</h3>
<ol>
  <li>As unidades externas <strong>estimam a demanda</strong> com base na capacidade nominal das unidades internas ligadas</li>
  <li>A estimativa é <strong>corrigida pela temperatura ambiente</strong> (sensor T4)</li>
  <li>Os compressores iniciam na frequência correspondente à demanda corrigida</li>
</ol>

<h3>Estágio 2 — Durante a Operação</h3>
<ol>
  <li>Compressores controlados pela capacidade nominal das IDUs e pela <strong>temperatura do heat exchanger</strong> de cada IDU</li>
  <li>Se a demanda pode ser atendida por <strong>um único módulo</strong>, apenas um opera</li>
  <li>Se exige <strong>todos os módulos</strong>, a carga é distribuída em <strong>média ponderada</strong> (weighted average)</li>
</ol>

<hr/>

<h2>Compressor Step Control — Incremento de Frequência</h2>
<p>A velocidade do compressor é ajustada em <strong>incrementos discretos</strong> medidos em rps:</p>
<ul>
  <li><strong>Incremento (aceleração):</strong> +1 rps por step — lento, evita picos de corrente e permite estabilização de pressão</li>
  <li><strong>Decremento (desaceleração):</strong> -2 rps por step — rápido, resposta imediata a quedas de demanda</li>
</ul>
<p><strong>Regra assimétrica intencional:</strong> O compressor desacelera <strong>2× mais rápido</strong> do que acelera. Protege o compressor e economiza energia.</p>

<hr/>

<h2>Prioridade e Rotação de Compressores</h2>
<p>Em sistemas com múltiplos compressores/módulos, a placa implementa <strong>prioridade e rotação</strong> para equalizar o desgaste:</p>

<h3>Regra Fundamental</h3>
<p>O <strong>BP1 (Inverter compressor A)</strong> sempre opera com <strong>prioridade</strong> sobre o <strong>BP2</strong>. Em carga parcial, o BP1 liga primeiro.</p>

<h3>Rotação com 1 Módulo (18-30HP)</h3>
<p>Com 2 compressores: Ciclo 1 → BP1 opera, BP2 em espera. Ciclo 2 → BP2 opera, BP1 em espera. Alternância a cada partida.</p>

<h3>Rotação com 2 e 3 Módulos</h3>
<p>A rotação é por <strong>módulo</strong> (não por compressor individual). Com 2 módulos: No.1 → No.2, depois No.2 → No.1. Com 3 módulos: rotação em 3 ciclos para que cada módulo assuma todas as posições.</p>
<p><strong>Nota:</strong> Os endereços "master unit", "slave unit 1" e "slave unit 2" na placa principal <strong>NÃO mudam</strong> durante a rotação. A rotação é apenas de <strong>prioridade operacional</strong>, não de endereçamento.</p>

<hr/>

<h2>Electronic Expansion Valve Control — Controle da EXVA</h2>
<p>A EXVA é controlada em steps (motor de passo):</p>
<ul>
  <li><strong>Range total:</strong> 0 steps (fechada) a <strong>3000 steps</strong> (aberta)</li>
  <li><strong>Posição de standby:</strong> 352 × 6 = <strong>2112 steps</strong></li>
</ul>

<h3>Lógica por Estado do Sistema</h3>
<ul>
  <li><strong>Todos os módulos em standby:</strong> EXVA em <strong>2112 steps</strong> — mantém leve fluxo para prevenir pressão diferencial excessiva e permitir partida suave</li>
  <li><strong>Alguns running + alguns standby:</strong> Running → controlada por temp. de descarga; Standby → <strong>0 steps</strong> (fechada)</li>
  <li><strong>Todos running:</strong> Modulação contínua por temperatura de descarga</li>
</ul>

<hr/>

<h2>Outdoor Fan Control — Velocidade dos Ventiladores DC</h2>
<p>A velocidade dos ventiladores DC é controlada por um <strong>índice de 0 a 37</strong>, resultando em <strong>38 níveis de velocidade</strong>. A velocidade real (rpm) varia conforme a classe de chassi.</p>
<p>Velocidades máximas por classe: <strong>8-16HP:</strong> 1100 rpm (FANA), <strong>18-22HP:</strong> 1100/1100 rpm (FANA/FANB), <strong>24-30HP:</strong> 950/950 rpm (FANA/FANB).</p>

<h3>Histerese na Transição de 1 para 2 Ventiladores</h3>
<p>Nas unidades 18-22HP (índices 5-8) e 24-30HP (índices 7-10), a transição não é simétrica:</p>
<ul>
  <li><strong>Subindo de velocidade:</strong> Mantém apenas FANA em alta rotação antes de ligar FANB</li>
  <li><strong>Descendo de velocidade:</strong> Mantém ambos os fans em velocidade reduzida antes de desligar FANB</li>
</ul>
<p>Essa histerese evita liga-desliga frequente do FANB.</p>
          `,

          tabelas_html: `
<h3>Componentes durante Operação Normal (Table 3-4.1)</h3>
<table>
  <thead>
    <tr><th>Componente</th><th>Label</th><th>8-12HP</th><th>14-16HP</th><th>18-22HP</th><th>24-30HP</th><th>Controle</th></tr>
  </thead>
  <tbody>
    <tr><td>Inverter compressor A</td><td><strong>BP1</strong></td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>Demanda de carga</td></tr>
    <tr><td>Inverter compressor B</td><td><strong>BP2</strong></td><td>—</td><td>—</td><td>✔</td><td>✔</td><td>Demanda de carga</td></tr>
    <tr><td>DC fan motor A</td><td><strong>FAN1</strong></td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>Pressão de descarga (Pc)</td></tr>
    <tr><td>DC fan motor B</td><td><strong>FAN2</strong></td><td>—</td><td>—</td><td>✔</td><td>✔</td><td>Pressão de descarga (Pc)</td></tr>
    <tr><td>EXV A</td><td><strong>EXVA</strong></td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>Temp. descarga (0-3000 steps)</td></tr>
    <tr><td>Solenoid SV2</td><td><strong>SV2</strong></td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>Temp. descarga</td></tr>
    <tr><td>Solenoid SV4</td><td><strong>SV4</strong></td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>Ciclo automático contínuo</td></tr>
    <tr><td>Solenoid SV7</td><td><strong>SV7</strong></td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>5 variáveis simultâneas</td></tr>
  </tbody>
</table>

<h3>Regras de Incremento do Compressor</h3>
<table>
  <thead>
    <tr><th>Direção</th><th>Incremento</th><th>Velocidade</th></tr>
  </thead>
  <tbody>
    <tr><td>Aceleração (↑)</td><td><strong>+1 rps</strong> por step</td><td>Lenta (protege contra picos de corrente)</td></tr>
    <tr><td>Desaceleração (↓)</td><td><strong>-2 rps</strong> por step</td><td>Rápida (resposta a queda de demanda)</td></tr>
  </tbody>
</table>

<h3>Posições da EXVA por Estado do Sistema</h3>
<table>
  <thead>
    <tr><th>Estado do Sistema</th><th>EXVA Position</th></tr>
  </thead>
  <tbody>
    <tr><td>Todos outdoor em standby</td><td><strong>2112 steps</strong> (352×6)</td></tr>
    <tr><td>Módulos running</td><td>Controlada por temp. descarga (0-3000)</td></tr>
    <tr><td>Módulos standby (com outros running)</td><td><strong>0 steps</strong> (fully closed)</td></tr>
  </tbody>
</table>

<h3>Velocidade Máxima do Fan por Classe</h3>
<table>
  <thead>
    <tr><th>Classe</th><th>Vel. Máx. FANA (rpm)</th><th>Vel. Máx. FANB (rpm)</th><th>Index Máx.</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>8-16HP</strong></td><td>1100</td><td>—</td><td>37</td></tr>
    <tr><td><strong>18-22HP</strong></td><td>1100</td><td>1100</td><td>37</td></tr>
    <tr><td><strong>24-30HP</strong></td><td>950</td><td>950</td><td>37</td></tr>
  </tbody>
</table>

<h3>Rotação de Compressores — 2 Módulos</h3>
<table>
  <thead>
    <tr><th>Configuração</th><th>Ciclo ①</th><th>Ciclo ②</th></tr>
  </thead>
  <tbody>
    <tr><td>2 módulos, 1 comp. cada</td><td>No. 1 → No. 2</td><td>No. 2 → No. 1</td></tr>
    <tr><td>2 módulos, 2 comp. cada</td><td>No. 1→2→3→4</td><td>No. 3→4→1→2</td></tr>
  </tbody>
</table>
          `,

          infobox_campo: `
<div class="infobox infobox-danger">
  <h4>⛔ PRIORIDADE BP1 > BP2 — NÃO ALTERE O ENDEREÇAMENTO PARA "BALANCEAR"</h4>
  <p>O manual especifica que o BP1 (Inverter compressor A) <strong>sempre</strong> tem prioridade sobre o BP2. Técnicos às vezes tentam trocar os endereços na placa para "equalizar" o desgaste. Isso é <strong>desnecessário e potencialmente perigoso</strong>: o sistema já implementa rotação automática. Os endereços "master unit", "slave unit 1" e "slave unit 2" na placa principal <strong>NÃO devem ser alterados</strong>.</p>
</div>

<div class="infobox infobox-warning">
  <h4>⚠️ EXVA EM 2112 STEPS DURANTE STANDBY — NÃO É DEFEITO</h4>
  <p>Se o técnico verificar a posição da EXVA pelo menu de diagnóstico e encontrar <strong>2112 steps</strong> (352×6) com todos os módulos em standby, isso é <strong>comportamento normal</strong>. A válvula fica parcialmente aberta para manter equilíbrio de pressão. Forçar a EXVA para 0 steps durante standby pode causar dificuldade na próxima partida.</p>
</div>

<div class="infobox infobox-info">
  <h4>💡 CONTROLE DO FAN — HISTERESE NA TRANSIÇÃO DE 1 PARA 2 VENTILADORES</h4>
  <p>Nas unidades 18-22HP e 24-30HP, a transição entre 1 e 2 ventiladores não é simétrica. Quando a velocidade <strong>aumenta</strong>, o sistema mantém apenas o FANA em alta rotação antes de ligar o FANB. Quando <strong>diminui</strong>, ambos continuam em velocidade reduzida antes de desligar o FANB. Essa histerese evita liga-desliga frequente do FANB.</p>
</div>

<div class="infobox infobox-tip">
  <h4>🔍 DIAGNÓSTICO — VELOCIDADE ASSIMÉTRICA DO COMPRESSOR</h4>
  <p>Se o compressor parece <strong>demorar para acelerar</strong> mas <strong>desacelera rapidamente</strong>, isso é <strong>comportamento normal</strong>: +1 rps para subir, -2 rps para descer. Essa assimetria é intencional para proteção e economia. Se o comportamento for o oposto (acelera rápido mas não desacelera), pode indicar falha na comunicação entre a placa e o módulo inverter.</p>
</div>
          `,
        },
        {
          id: "03-03",
          titulo: "Controle e Proteção — Alarmes, Limites e Shutdown",
          descricao:
            "Os escudos do sistema: proteção por alta/baixa pressão (P1/P2), superaquecimento de descarga (P4), proteção do motor (xH4), proteção contra corrente excessiva, desbalanceamento de fase e perda de comunicação. Níveis de proteção: alerta → redução → shutdown.",
          tempo_estimado: "50 min",
          nivel: "avancado",
          tags: ["proteção", "alarmes", "shutdown", "P1", "P2", "P4", "corrente"],
          videos: [],
          slides: [],

          // ─── CONTEÚDO COMPLETO DA AULA 3.3 ─────────────────────────
          conteudo_html: `
<h2>Visão Geral — A Camada de Proteção</h2>
<p>O bloco de Protection Control é a <strong>rede de segurança</strong> do sistema TVR Pro CO. Ele monitora continuamente 4 grandezas físicas e intervém automaticamente quando qualquer uma ultrapassa seus limites. O técnico deve entender dois conceitos-chave:</p>
<ul>
  <li><strong>Erro primário (auto-recuperável):</strong> O sistema detecta a condição anormal, atua (reduz capacidade ou desliga o compressor), e <strong>retorna automaticamente</strong> quando a condição normaliza. Exemplos: P1, P2, P4, PL.</li>
  <li><strong>Erro secundário (escalation — reinício manual):</strong> Se o erro primário ocorre <strong>repetidamente</strong> dentro de uma janela de tempo, o sistema gera um <strong>erro crítico</strong> que exige <strong>reinício manual</strong> (desligar/ligar o disjuntor ou reset na placa). Exemplos: H5, H6, C7.</li>
</ul>

<hr/>

<h2>High Pressure Protection — Proteção contra Alta Pressão (P1)</h2>
<p>Protege contra pressão anormalmente alta no lado de descarga. Causas típicas: condensador sujo, ventilador travado, excesso de refrigerante, temperatura ambiente extremamente alta.</p>
<ul>
  <li><strong>Limiar de atuação:</strong> Pc > <strong>4.4 MPa</strong></li>
  <li><strong>Código de erro:</strong> <strong>P1</strong></li>
  <li><strong>Ação:</strong> Compressores param</li>
  <li><strong>Limiar de recuperação:</strong> Pc < <strong>3.2 MPa</strong></li>
  <li><strong>Histerese:</strong> 1.2 MPa (4.4 - 3.2)</li>
  <li><strong>Tipo:</strong> Auto-recuperável — volta a operar quando Pc < 3.2 MPa</li>
</ul>

<hr/>

<h2>Low Pressure Protection — Proteção contra Baixa Pressão (P2 → H5)</h2>
<p>Protege contra pressão anormalmente baixa no lado de sucção. Causas típicas: falta de refrigerante, EXV travada fechada, filtro de linha bloqueado, válvula de serviço parcialmente fechada.</p>
<ul>
  <li><strong>Limiar de atuação:</strong> Pe < <strong>0.05 MPa</strong></li>
  <li><strong>Código de erro primário:</strong> <strong>P2</strong></li>
  <li><strong>Ação:</strong> Compressores param</li>
  <li><strong>Limiar de recuperação:</strong> Pe > <strong>0.15 MPa</strong></li>
  <li><strong>Histerese:</strong> 0.10 MPa</li>
  <li><strong>Tipo:</strong> Auto-recuperável (P2) → Escalation para <strong>H5</strong></li>
  <li><strong>Condição de escalation:</strong> P2 ocorre <strong>3 vezes em 60 minutos</strong></li>
  <li><strong>Código crítico:</strong> <strong>H5</strong> — reinício manual obrigatório</li>
</ul>

<hr/>

<h2>Discharge Temperature Protection — Proteção por Temperatura de Descarga (P4 → H6)</h2>
<p>Protege os compressores contra superaquecimento. Causas típicas: falta de refrigerante, EXV com defeito, SV2 com defeito, condensador extremamente sujo.</p>

<h3>Proteção em Duas Camadas</h3>
<ul>
  <li><strong>Camada 1 — SV2 (100°C):</strong> Tentativa de correção automática por injeção de líquido
    <ul>
      <li>Temp. descarga > <strong>100°C</strong> → <strong>SV2 abre</strong> (injeta líquido)</li>
      <li>Temp. descarga < <strong>90°C</strong> → <strong>SV2 fecha</strong> → operação normal</li>
    </ul>
  </li>
  <li><strong>Camada 2 — Desligamento (120°C):</strong> Quando a SV2 não é suficiente
    <ul>
      <li>Temp. descarga > <strong>120°C</strong> → <strong>Compressor desliga</strong> → Erro <strong>P4</strong></li>
      <li>Temp. descarga < <strong>90°C</strong> → Compressor pode reiniciar</li>
    </ul>
  </li>
</ul>
<ul>
  <li><strong>Condição de escalation:</strong> P4 ocorre <strong>3 vezes em 100 minutos</strong></li>
  <li><strong>Código crítico:</strong> <strong>H6</strong> — reinício manual obrigatório</li>
</ul>

<hr/>

<h2>Compressor and Inverter Module Protection (xH4 / PL → C7)</h2>

<h3>Proteção por Corrente do Compressor</h3>
<p>Monitora a corrente elétrica do compressor e desliga se ultrapassar o limite máximo do modelo:</p>
<ul>
  <li><strong>LNB53:</strong> Current_max = <strong>48.5 A</strong></li>
  <li><strong>LNB65:</strong> Current_max = <strong>59 A</strong></li>
  <li><strong>Código de erro:</strong> <strong>xH4(xL0)</strong> — o "x" indica o número do compressor/módulo</li>
  <li><strong>Tipo:</strong> Auto-recuperável quando corrente normaliza</li>
</ul>

<h3>Proteção por Temperatura do Módulo Inverter — 3 Níveis</h3>
<p>O módulo inverter possui um dissipador de calor (heat sink) cuja temperatura (Tf) é monitorada em 3 níveis:</p>
<ul>
  <li><strong>Nível 1 — Redução:</strong> Tf > <strong>74°C</strong> → frequência do compressor <strong>reduzida</strong>. Recuperação: Tf < <strong>71°C</strong> (histerese: 3°C)</li>
  <li><strong>Nível 2 — Proteção PL:</strong> Tf > <strong>79°C</strong> → <strong>compressor para</strong>, erro <strong>PL</strong>. Recuperação: Tf < <strong>65°C</strong> (histerese: 14°C)</li>
  <li><strong>Nível 3 — Escalation C7:</strong> PL ocorre <strong>3 vezes em 100 minutos</strong> → erro crítico <strong>C7</strong> — reinício manual obrigatório</li>
</ul>
          `,

          tabelas_html: `
<h3>Tabela Mestra — Todos os Códigos de Proteção</h3>
<table>
  <thead>
    <tr><th>Código</th><th>Tipo</th><th>Grandeza</th><th>Limiar de Atuação</th><th>Limiar de Recuperação</th><th>Escalation</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>P1</strong></td><td>Alta Pressão</td><td>Pc</td><td>&gt; <strong>4.4 MPa</strong></td><td>&lt; <strong>3.2 MPa</strong></td><td>—</td></tr>
    <tr><td><strong>P2</strong></td><td>Baixa Pressão</td><td>Pe</td><td>&lt; <strong>0.05 MPa</strong></td><td>&gt; <strong>0.15 MPa</strong></td><td>→ <strong>H5</strong> (3× em 60 min)</td></tr>
    <tr><td><strong>P4</strong></td><td>Temp. Descarga</td><td>Td</td><td>&gt; <strong>120°C</strong></td><td>&lt; <strong>90°C</strong></td><td>→ <strong>H6</strong> (3× em 100 min)</td></tr>
    <tr><td><strong>xH4(xL0)</strong></td><td>Sobrecorrente</td><td>I</td><td>≥ Current_max</td><td>&lt; Current_max</td><td>—</td></tr>
    <tr><td><strong>PL</strong></td><td>Temp. Inverter</td><td>Tf</td><td>&gt; <strong>79°C</strong></td><td>&lt; <strong>65°C</strong></td><td>→ <strong>C7</strong> (3× em 100 min)</td></tr>
  </tbody>
</table>

<h3>Erros Críticos que Exigem Reinício Manual</h3>
<table>
  <thead>
    <tr><th>Código Crítico</th><th>Erro Primário</th><th>Condição de Escalation</th><th>Janela de Tempo</th><th>Ação Necessária</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>H5</strong></td><td>P2 (Low pressure)</td><td>3 ocorrências</td><td><strong>60 minutos</strong></td><td>Reinício manual (reset/disjuntor)</td></tr>
    <tr><td><strong>H6</strong></td><td>P4 (Discharge temp.)</td><td>3 ocorrências</td><td><strong>100 minutos</strong></td><td>Reinício manual</td></tr>
    <tr><td><strong>C7</strong></td><td>PL (Inverter temp.)</td><td>3 ocorrências</td><td><strong>100 minutos</strong></td><td>Reinício manual</td></tr>
  </tbody>
</table>

<h3>Interação SV2 × Temperatura de Descarga</h3>
<table>
  <thead>
    <tr><th>Faixa de Temperatura</th><th>SV2</th><th>Compressor</th><th>Status</th></tr>
  </thead>
  <tbody>
    <tr><td>&lt; 90°C</td><td><strong>Fechada</strong></td><td>Operando</td><td>Normal</td></tr>
    <tr><td>90°C - 100°C</td><td><strong>Fechada</strong></td><td>Operando</td><td>Normal (zona de atenção)</td></tr>
    <tr><td>100°C - 120°C</td><td><strong>Aberta</strong> (injeção)</td><td>Operando</td><td>Proteção Camada 1 ativa</td></tr>
    <tr><td>&gt; 120°C</td><td><strong>Aberta</strong></td><td><strong>Desligado</strong> (P4)</td><td>Proteção Camada 2 ativa</td></tr>
  </tbody>
</table>

<h3>Limites de Corrente por Modelo de Compressor</h3>
<table>
  <thead>
    <tr><th>Modelo do Compressor</th><th>Current_max (A)</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>LNB53</strong></td><td><strong>48.5 A</strong></td></tr>
    <tr><td><strong>LNB65</strong></td><td><strong>59 A</strong></td></tr>
  </tbody>
</table>

<h3>Proteção do Inverter — 3 Níveis</h3>
<table>
  <thead>
    <tr><th>Nível</th><th>Condição</th><th>Ação</th><th>Recuperação</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Nível 1</strong></td><td>Tf &gt; <strong>74°C</strong></td><td>Saída do compressor reduzida</td><td>Tf &lt; <strong>71°C</strong></td></tr>
    <tr><td><strong>Nível 2</strong></td><td>Tf &gt; <strong>79°C</strong></td><td>Compressor para — Erro <strong>PL</strong></td><td>Tf &lt; <strong>65°C</strong></td></tr>
    <tr><td><strong>Nível 3</strong></td><td>PL 3× em 100 min</td><td>Erro crítico <strong>C7</strong> — reinício manual</td><td>—</td></tr>
  </tbody>
</table>
          `,

          infobox_campo: `
<div class="infobox infobox-danger">
  <h4>⛔ ERROS H5, H6 E C7 EXIGEM REINÍCIO MANUAL — NÃO SE RESOLVEM SOZINHOS</h4>
  <p>Os erros críticos H5 (baixa pressão repetida), H6 (superaquecimento repetido) e C7 (inverter superaquecido repetido) são "latching errors" — o sistema trava e <strong>NÃO retorna automaticamente</strong>. É necessário desligar o disjuntor principal, aguardar 30 segundos, e religar. Antes de fazer o reset, o técnico DEVE investigar a causa raiz, pois o reset sem correção resultará no mesmo erro novamente.</p>
</div>

<div class="infobox infobox-warning">
  <h4>⚠️ DIAGNÓSTICO P2 (BAIXA PRESSÃO) — VERIFICAR ANTES DO RESET</h4>
  <p>O erro P2 (Pe &lt; 0.05 MPa) frequentemente indica <strong>falta de refrigerante</strong>. Antes de fazer reset: (1) Conectar o manifold nas stop valves (9/10), (2) Verificar a pressão de sucção real, (3) Se a pressão é zero ou muito baixa → verificar vazamento antes de recarregar. Fazer reset repetido sem verificar vazamento pode causar operação do compressor sem refrigerante, resultando em dano irreversível.</p>
</div>

<div class="infobox infobox-info">
  <h4>💡 PROTEÇÃO EM DUAS CAMADAS — SV2 (100°C) + DESLIGAMENTO (120°C)</h4>
  <p>A proteção por temperatura de descarga tem <strong>duas camadas</strong>: a SV2 atua primeiro (a 100°C) tentando corrigir automaticamente. Se não funcionar, o compressor desliga a 120°C. Se o técnico observa que a SV2 abre mas a temperatura não cai, a SV2 está funcionando corretamente — o problema é <strong>a montante</strong> (falta de refrigerante, condensador sujo, ventilador parado). Trocar a SV2 neste caso não resolverá o problema.</p>
</div>

<div class="infobox infobox-tip">
  <h4>🔍 CORRENTE MÁXIMA — IDENTIFICAR O MODELO DO COMPRESSOR</h4>
  <p>O código xH4(xL0) indica sobrecorrente. Para verificar, o técnico precisa saber o modelo: <strong>LNB53</strong> (limite 48.5A) ou <strong>LNB65</strong> (limite 59A). O modelo está na etiqueta do compressor dentro do gabinete. Se a corrente medida com alicate amperímetro está <strong>próxima mas abaixo</strong> do limite, o sensor de corrente da placa pode estar descalibrado.</p>
</div>
          `,
        },
        {
          id: "03-04",
          titulo: "Controle Especial — Oil Return, Defrost e Modos de Emergência",
          descricao:
            "Algoritmos especiais: oil return mode (surge a 124 Hz), defrost automático (reversão da válvula de 4 vias), modo de teste forçado, operação de emergência e controle de reequilíbrio de óleo entre compressores em sistemas multi-módulo.",
          tempo_estimado: "45 min",
          nivel: "avancado",
          tags: ["oil-return", "defrost", "emergência", "teste-forçado", "reequilíbrio"],
          videos: [],
          slides: [],

          // ─── CONTEÚDO COMPLETO DA AULA 3.4 ─────────────────────────
          conteudo_html: `
<h2>Outdoor Unit Duty Cycling — Rotação de Serviço</h2>
<p>Em sistemas com <strong>múltiplas unidades externas</strong> (2 ou 3 módulos), o Duty Cycling é um mecanismo automático que <strong>alterna a prioridade operacional</strong> entre os módulos para prevenir a <strong>queima do compressor</strong> por desbalanceamento nos níveis de óleo.</p>

<h3>Problema que Resolve</h3>
<p>Em carga parcial, o módulo de maior prioridade opera mais tempo. O óleo lubrificante migra para os módulos que operam mais, deixando os outros com nível insuficiente. Quando esses módulos são acionados, o compressor pode operar com lubrificação inadequada.</p>

<h3>Condições de Ativação</h3>
<ul>
  <li><strong>Após Oil Return Operation:</strong> Imediatamente após a conclusão de um ciclo de retorno de óleo</li>
  <li><strong>Após Defrosting Operation:</strong> Imediatamente após a conclusão de um ciclo de degelo</li>
  <li><strong>Após reinício por setpoint:</strong> Quando o compressor reinicia após parada por temperatura atingida</li>
</ul>

<h3>Diagrama de Rotação — 3 Unidades Externas</h3>
<p>Exemplo com Master, Slave 1, Slave 2:</p>
<ul>
  <li><strong>Ciclo 1:</strong> Master=Prioridade 1, S1=2, S2=3</li>
  <li><strong>Ciclo 2:</strong> Master=3, S1=<strong>1</strong>, S2=2</li>
  <li><strong>Ciclo 3:</strong> Master=2, S1=3, S2=<strong>1</strong></li>
  <li><strong>Ciclo 4:</strong> Volta ao Ciclo 1 (rotação completa)</li>
</ul>
<p><strong>Regra fundamental:</strong> Os endereços na placa principal ("master unit", "slave unit 1", "slave unit 2") <strong>NÃO mudam</strong>. Apenas a <strong>prioridade operacional</strong> é rotacionada. O Master continua sendo Master para comunicação — ele apenas pode ser o último a ligar.</p>

<hr/>

<h2>Oil Return Operation — Retorno de Óleo</h2>
<p>Ciclo automático de <strong>recuperação do óleo lubrificante</strong> que migrou dos compressores para a tubulação de campo e evaporadoras. Sem essa operação, os compressores operam com nível insuficiente.</p>

<h3>Características Principais</h3>
<ul>
  <li><strong>Primeiro disparo:</strong> Quando o tempo de operação acumulado atinge <strong>140 minutos</strong></li>
  <li><strong>Disparos subsequentes:</strong> A cada <strong>8 horas</strong> de operação acumulada</li>
  <li><strong>Abrangência:</strong> Executada para <strong>TODAS as unidades</strong>, incluindo as em standby</li>
  <li><strong>Indicação no display:</strong> Código <strong>"d0"</strong> — NÃO é erro</li>
  <li><strong>Timer:</strong> <strong>Acumulado</strong>, não contínuo (se opera 60min + para + opera 80min = 140min)</li>
</ul>

<hr/>

<h2>Controle ODU durante Oil Return (Table 3-6.1)</h2>
<p>Durante o Oil Return, os componentes da unidade externa operam em modo diferente:</p>
<ul>
  <li><strong>BP1/BP2:</strong> <strong>Frequência fixa</strong> (não modula por carga) — gera fluxo constante para arrastar óleo</li>
  <li><strong>EXVA:</strong> Posição fixa de <strong>480 steps</strong> (abertura parcial controlada)</li>
  <li><strong>FAN1/FAN2:</strong> Controlados por pressão de descarga (sem diferença)</li>
  <li><strong>SV2, SV4, SV7:</strong> Normal control (sem diferença)</li>
</ul>

<hr/>

<h2>Controle IDU durante Oil Return (Table 3-6.2)</h2>
<p>O comportamento das unidades internas é o elemento mais importante para diagnóstico:</p>
<ul>
  <li><strong>IDU com Thermo on (demandando refrigeração):</strong> Fan conforme controle remoto, EXV em controle normal</li>
  <li><strong>IDU em Standby:</strong> Fan <strong>OFF</strong>, EXV abre para <strong>300 steps</strong></li>
  <li><strong>IDU com Thermo off (setpoint atingido):</strong> Fan <strong>OFF</strong>, EXV abre para <strong>300 steps</strong></li>
</ul>
<p><strong>Lógica dos 300 steps:</strong> O refrigerante flui parcialmente pelas evaporadoras inativas, arrastando o óleo acumulado. Ventiladores desligados porque o objetivo <strong>não é climatizar</strong> — é apenas <strong>circular refrigerante para arrastar óleo</strong>.</p>

<hr/>

<h2>Comparação: EXVA Position por Modo de Operação</h2>
<p>Reunindo dados de todos os tópicos:</p>
<ul>
  <li><strong>Standby total:</strong> EXVA em <strong>2112 steps</strong> (352×6)</li>
  <li><strong>Cooling Normal:</strong> EXVA de 0 a 3000 (por temp. descarga), EXV IDU inativa = 0 steps</li>
  <li><strong>Oil Return:</strong> EXVA em <strong>480 steps</strong> (fixa), EXV IDU inativa = <strong>300 steps</strong></li>
  <li><strong>Startup:</strong> EXVA por temperatura de descarga</li>
</ul>
          `,

          tabelas_html: `
<h3>Temporização do Oil Return</h3>
<table>
  <thead>
    <tr><th>Parâmetro</th><th>Valor</th></tr>
  </thead>
  <tbody>
    <tr><td>Primeiro disparo</td><td><strong>140 minutos</strong> de operação acumulada</td></tr>
    <tr><td>Disparos subsequentes</td><td>A cada <strong>8 horas</strong> de operação acumulada</td></tr>
    <tr><td>Display durante Oil Return</td><td><strong>"d0"</strong></td></tr>
    <tr><td>Tipo de timer</td><td><strong>Acumulado</strong> (não contínuo)</td></tr>
  </tbody>
</table>

<h3>Triggers para Duty Cycling</h3>
<table>
  <thead>
    <tr><th>Trigger</th><th>Descrição</th></tr>
  </thead>
  <tbody>
    <tr><td>Após Oil Return</td><td>Imediatamente após conclusão do ciclo de retorno de óleo</td></tr>
    <tr><td>Após Defrost</td><td>Imediatamente após degelo (se aplicável)</td></tr>
    <tr><td>Após restart por setpoint</td><td>Quando compressor reinicia após parada por temperatura atingida</td></tr>
  </tbody>
</table>

<h3>Controle ODU durante Oil Return (Table 3-6.1)</h3>
<table>
  <thead>
    <tr><th>Componente</th><th>Label</th><th>8-12HP</th><th>14-16HP</th><th>18-22HP</th><th>24-30HP</th><th>Controle Oil Return</th></tr>
  </thead>
  <tbody>
    <tr><td>Inverter compressor A</td><td><strong>BP1</strong></td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td><strong>Frequência fixa</strong></td></tr>
    <tr><td>Inverter compressor B</td><td><strong>BP2</strong></td><td>—</td><td>—</td><td>✔</td><td>✔</td><td><strong>Frequência fixa</strong></td></tr>
    <tr><td>DC fan motor A</td><td><strong>FAN1</strong></td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>Por pressão de descarga (Pc)</td></tr>
    <tr><td>DC fan motor B</td><td><strong>FAN2</strong></td><td>—</td><td>—</td><td>✔</td><td>✔</td><td>Por pressão de descarga (Pc)</td></tr>
    <tr><td>EXV A</td><td><strong>EXVA</strong></td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td><strong>480 steps</strong> (fixa)</td></tr>
    <tr><td>Solenoid SV2</td><td><strong>SV2</strong></td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>Normal control</td></tr>
    <tr><td>Solenoid SV4</td><td><strong>SV4</strong></td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>Normal control</td></tr>
    <tr><td>Solenoid SV7</td><td><strong>SV7</strong></td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>Normal control</td></tr>
  </tbody>
</table>

<h3>Controle IDU durante Oil Return (Table 3-6.2)</h3>
<table>
  <thead>
    <tr><th>Estado IDU</th><th>Fan</th><th>EXV</th></tr>
  </thead>
  <tbody>
    <tr><td>Thermo on (demandando)</td><td>Conforme controle remoto</td><td>Normal control</td></tr>
    <tr><td>Standby (em espera)</td><td><strong>Off</strong></td><td><strong>300 steps</strong></td></tr>
    <tr><td>Thermo off (setpoint atingido)</td><td><strong>Off</strong></td><td><strong>300 steps</strong></td></tr>
  </tbody>
</table>

<h3>EXVA Position — Comparação por Modo</h3>
<table>
  <thead>
    <tr><th>Modo de Operação</th><th>EXVA (ODU)</th><th>EXV IDU ativa</th><th>EXV IDU inativa</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Standby total</strong></td><td><strong>2112 steps</strong> (352×6)</td><td>—</td><td>—</td></tr>
    <tr><td><strong>Cooling Normal</strong></td><td>0-3000 (temp. descarga)</td><td>Normal control</td><td><strong>0 steps</strong> (closed)</td></tr>
    <tr><td><strong>Oil Return</strong></td><td><strong>480 steps</strong> (fixa)</td><td>Normal control</td><td><strong>300 steps</strong></td></tr>
    <tr><td><strong>Startup</strong></td><td>Por temp. descarga</td><td>—</td><td>—</td></tr>
  </tbody>
</table>
          `,

          infobox_campo: `
<div class="infobox infobox-danger">
  <h4>⛔ "d0" NO DISPLAY NÃO É ERRO — É OIL RETURN</h4>
  <p>O código "d0" exibido no display digital da unidade externa indica Oil Return automático. O técnico <strong>NÃO deve</strong> desligar o sistema, fazer reset, ou reportar como falha. A operação dura poucos minutos e é essencial para a longevidade dos compressores. Interromper repetidamente o Oil Return pode levar à falha do compressor por falta de lubrificação.</p>
</div>

<div class="infobox infobox-warning">
  <h4>⚠️ PRIMEIRO OIL RETURN — 140 MINUTOS ACUMULADOS, NÃO CONTÍNUOS</h4>
  <p>O timer de 140 minutos é <strong>acumulado</strong>. Se o cliente opera por períodos curtos (30 min de manhã + 30 min à tarde), o primeiro Oil Return só ocorre quando a soma total atingir 140 min. Pode levar vários dias em uso intermitente. Se suspeitar de problema de óleo em sistema novo, verificar se o primeiro Oil Return já ocorreu consultando o display ("d0").</p>
</div>

<div class="infobox infobox-info">
  <h4>💡 EXVA A 480 STEPS DURANTE OIL RETURN — DIFERENTE DOS 2112 DE STANDBY</h4>
  <p>Não confundir as posições: EXVA a <strong>480 steps</strong> é o valor durante Oil Return (módulos operando em frequência fixa). EXVA a <strong>2112 steps</strong> é quando TODOS os módulos estão em standby completo. Se o técnico verificar EXVA em 480 steps com display mostrando "d0", tudo está normal.</p>
</div>

<div class="infobox infobox-tip">
  <h4>🔍 DUTY CYCLING — COMO VERIFICAR SE ESTÁ FUNCIONANDO</h4>
  <p>Para confirmar que o Duty Cycling está ativo em sistema multi-módulo: (1) Antes de um Oil Return, anotar qual módulo liga primeiro em carga parcial. (2) Após o Oil Return (quando "d0" desaparece), observar qual liga primeiro na próxima demanda. Se a ordem mudou, Duty Cycling funciona. Se <strong>não mudou</strong>, pode haver problema de comunicação entre Master e Slaves ou configuração incorreta dos endereços.</p>
</div>
          `,
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════════
    // PARTE 4 — Field Settings
    // ════════════════════════════════════════════════════════════════════════
    {
      id: 4,
      titulo: "PARTE 4 — Field Settings e Configuração",
      descricao:
        "A parametrização que define o comportamento do sistema: DIP switches, endereçamento de rede, limites de temperatura, configuração de capacidade e chaves de comissionamento.",
      icone: "settings",
      cor: "amber",
      topicos: [
        {
          id: "04-01",
          titulo: "Field Settings — DIP Switches, Endereçamento e Configuração de Capacidade",
          descricao:
            "Guia completo de configuração em campo: endereço de rede RS-485 (SW1), modo de operação master/slave (SW2), limites de temperatura do controle remoto, configuração de capacidade por DIP switch, número máximo de IDUs e procedimentos de reset. Tabela mestre de todas as configurações disponíveis.",
          tempo_estimado: "50 min",
          nivel: "avancado",
          tags: ["field-settings", "DIP-switch", "endereçamento", "comissionamento"],
          videos: [],
          slides: [],

          // ─── CONTEÚDO COMPLETO DA AULA 4.1 ─────────────────────────
          conteudo_html: `
<h2>Localização dos Switches e Encoders na Placa Principal</h2>
<p>A placa principal (main PCB) da unidade externa possui <strong>DIP switches</strong> e <strong>encoders rotativos</strong> localizados na área superior direita da placa:</p>
<ul>
  <li><strong>Linha superior:</strong> S7, S6, ENC2, ENC1, ENC5</li>
  <li><strong>Linha inferior:</strong> S13, S8, S6, S12, ENC3, ENC4</li>
</ul>

<hr/>

<h2>DIP Switches — Configuração Completa</h2>

<h3>Switches Reservados (NÃO ALTERAR)</h3>
<p>S5, S6-1, S7, S8-1 e S8-3 são <strong>reservados</strong> sem função definida. Não alterar.</p>

<h3>S6-2 — Limpar Endereços das Unidades Internas</h3>
<ul>
  <li><strong>Default (OFF):</strong> No action — nenhuma ação</li>
  <li><strong>ON-ON-ON:</strong> Clear indoor unit addresses — apaga todos os endereços da memória</li>
</ul>
<p><strong>Quando usar:</strong> Apenas durante reconfiguração completa (evaporadoras removidas, adicionadas ou substituídas). Após limpar, nova busca de endereços em 12 minutos.</p>

<h3>S6-3 — Modo de Endereçamento</h3>
<ul>
  <li><strong>Default (OFF):</strong> Auto addressing — endereçamento automático (recomendado)</li>
  <li><strong>ON-ON-ON:</strong> Manual addressing</li>
</ul>

<h3>S8-2 — Tempo de Start-up</h3>
<ul>
  <li><strong>Default (OFF):</strong> Start-up time = <strong>12 minutos</strong></li>
  <li><strong>ON-ON-ON:</strong> Start-up time = <strong>7 minutos</strong></li>
</ul>
<p>Em sistemas já configurados e estáveis, pode reduzir para 7 min. Se novas evaporadoras forem adicionadas, restaurar para 12 min.</p>

<h3>S13 — Tipo de Controlador</h3>
<ul>
  <li><strong>Default (OFF):</strong> Controlador centralizado <strong>novo</strong></li>
  <li><strong>ON:</strong> Controlador centralizado <strong>antigo</strong> (legado)</li>
</ul>

<hr/>

<h2>Encoders Rotativos — Configuração Completa</h2>

<h3>ENC1 — Endereço da Unidade Externa</h3>
<ul>
  <li><strong>0:</strong> Master unit (mestre) — default</li>
  <li><strong>1:</strong> Slave unit 1</li>
  <li><strong>2:</strong> Slave unit 2</li>
</ul>
<p>Em sistemas multi-módulo, apenas UMA unidade pode ser 0 (Master). Estes endereços <strong>NÃO mudam</strong> durante Duty Cycling.</p>

<h3>ENC2 — Capacidade da Unidade Externa (FACTORY-SET)</h3>
<p>Posições de 0 (8HP) a B (30HP). O ENC2 é <strong>configurado em fábrica</strong> e <strong>NÃO deve ser alterado em campo</strong>.</p>

<h3>ENC3 + S12 — Número de Unidades Internas</h3>
<p>Combinação de ENC3 (dezenas) e S12 (faixas de 16) configura de <strong>0 a 64 unidades internas</strong>.</p>

<h3>ENC4 — Endereço de Rede</h3>
<p>Posições de 0 a 7. Para múltiplos grupos de outdoor+indoor conectados a controlador centralizado.</p>

<hr/>

<h2>ENC5 — Modo Silencioso (14 Configurações)</h2>

<h3>Night Silent Time (ENC5 = 0, 1, 2, 3)</h3>
<p>Reduz automaticamente a velocidade do ventilador durante o período noturno. Ativação baseada no pico de temperatura diurno (sensor T4):</p>
<ul>
  <li><strong>ENC5=0 (default):</strong> Night silent 6h/10h — ativa 6h após pico, dura 10h. Redução máxima: <strong>15 dB</strong></li>
  <li><strong>ENC5=1:</strong> Night silent 6h/12h</li>
  <li><strong>ENC5=2:</strong> Night silent 8h/10h</li>
  <li><strong>ENC5=3:</strong> Night silent 8h/12h</li>
</ul>

<h3>No Silent Mode (ENC5 = 4)</h3>
<p>Sem modo silencioso — operação plena 24h.</p>

<h3>Silent Mode (ENC5 = 5, 6, 7)</h3>
<p>Limita <strong>apenas a velocidade máxima do fan</strong> (capacidade mantida a 100%):</p>
<ul>
  <li><strong>ENC5=5:</strong> Silent mode 1 — redução leve</li>
  <li><strong>ENC5=6:</strong> Silent mode 2 — redução moderada</li>
  <li><strong>ENC5=7:</strong> Silent mode 3 — maior redução</li>
</ul>

<h3>Super Silent Mode (ENC5 = 8, 9, A, B)</h3>
<p>Limita fan <strong>E frequência do compressor</strong>:</p>
<ul>
  <li><strong>ENC5=8:</strong> Super silent 1 — capacidade máxima <strong>80%</strong></li>
  <li><strong>ENC5=9:</strong> Super silent 2 — capacidade máxima <strong>70%</strong></li>
  <li><strong>ENC5=A:</strong> Super silent 3 — capacidade máxima <strong>60%</strong></li>
  <li><strong>ENC5=B:</strong> Super silent 4 — capacidade máxima <strong>50%</strong></li>
</ul>

<h3>Via Controlador Centralizado (ENC5 = F)</h3>
<p>Modo silencioso definido remotamente pelo controlador centralizado.</p>

<p><strong>Nota de segurança:</strong> Se a pressão de descarga (Pc) ultrapassar <strong>3.5 MPa</strong>, o sistema <strong>sai automaticamente</strong> do modo silencioso para proteger o compressor.</p>
          `,

          tabelas_html: `
<h3>DIP Switches Reservados (NÃO ALTERAR)</h3>
<table>
  <thead>
    <tr><th>Switch</th><th>Status</th></tr>
  </thead>
  <tbody>
    <tr><td>S5</td><td>Reservado</td></tr>
    <tr><td>S6-1</td><td>Reservado</td></tr>
    <tr><td>S7</td><td>Reservado</td></tr>
    <tr><td>S8-1</td><td>Reservado</td></tr>
    <tr><td>S8-3</td><td>Reservado</td></tr>
  </tbody>
</table>

<h3>DIP Switches Configuráveis</h3>
<table>
  <thead>
    <tr><th>Switch</th><th>Função</th><th>Default</th><th>Alternativa</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>S6-2</strong></td><td>Clear indoor addresses</td><td>No action</td><td>Clear all</td></tr>
    <tr><td><strong>S6-3</strong></td><td>Addressing mode</td><td><strong>Auto</strong></td><td>Manual</td></tr>
    <tr><td><strong>S8-2</strong></td><td>Start-up time</td><td><strong>12 min</strong></td><td>7 min</td></tr>
    <tr><td><strong>S13</strong></td><td>Controller type</td><td><strong>New</strong></td><td>Old</td></tr>
  </tbody>
</table>

<h3>Encoders Rotativos</h3>
<table>
  <thead>
    <tr><th>Encoder</th><th>Função</th><th>Default</th><th>Range</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>ENC1</strong></td><td>Outdoor unit address</td><td><strong>0</strong> (Master)</td><td>0-2</td></tr>
    <tr><td><strong>ENC2</strong></td><td>Outdoor unit capacity</td><td><strong>0</strong> (8HP)</td><td>0-B (8-30HP)</td></tr>
    <tr><td><strong>ENC3+S12</strong></td><td>Number of indoor units</td><td>—</td><td>0-64</td></tr>
    <tr><td><strong>ENC4</strong></td><td>Network address</td><td><strong>0</strong></td><td>0-7</td></tr>
    <tr><td><strong>ENC5</strong></td><td>Silent mode</td><td><strong>0</strong> (Night 6h/10h)</td><td>0-B, F</td></tr>
  </tbody>
</table>

<h3>ENC2 — Capacidade por Posição</h3>
<table>
  <thead>
    <tr><th>Posição</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>A</th><th>B</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>HP</strong></td><td>8</td><td>10</td><td>12</td><td>14</td><td>16</td><td>18</td><td>20</td><td>22</td><td>24</td><td>26</td><td>28</td><td>30</td></tr>
  </tbody>
</table>

<h3>Velocidade Máxima do Fan e Capacidade por Modo Silencioso</h3>
<table>
  <thead>
    <tr><th>ENC5</th><th>Modo</th><th>8-10HP</th><th>12HP</th><th>14-16HP</th><th>18HP</th><th>20-22HP</th><th>24-26HP</th><th>28-30HP</th><th>Cap. Máx.</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>0</strong></td><td>Night 6h/10h</td><td>28</td><td>28</td><td>30</td><td>29</td><td>29</td><td>31</td><td>31</td><td>100%</td></tr>
    <tr><td><strong>1</strong></td><td>Night 6h/12h</td><td>28</td><td>28</td><td>30</td><td>29</td><td>29</td><td>31</td><td>31</td><td>100%</td></tr>
    <tr><td><strong>2</strong></td><td>Night 8h/10h</td><td>28</td><td>28</td><td>30</td><td>29</td><td>29</td><td>31</td><td>31</td><td>100%</td></tr>
    <tr><td><strong>3</strong></td><td>Night 8h/12h</td><td>28</td><td>28</td><td>30</td><td>29</td><td>29</td><td>31</td><td>31</td><td>100%</td></tr>
    <tr><td><strong>4</strong></td><td>No silent</td><td>29</td><td>30</td><td>33</td><td>33</td><td>35</td><td>33</td><td>35</td><td>100%</td></tr>
    <tr><td><strong>5</strong></td><td>Silent 1</td><td>28</td><td>28</td><td>30</td><td>31</td><td>31</td><td>31</td><td>31</td><td>100%</td></tr>
    <tr><td><strong>6</strong></td><td>Silent 2</td><td>26</td><td>26</td><td>28</td><td>29</td><td>29</td><td>29</td><td>29</td><td>100%</td></tr>
    <tr><td><strong>7</strong></td><td>Silent 3</td><td>24</td><td>24</td><td>27</td><td>27</td><td>27</td><td>27</td><td>27</td><td>100%</td></tr>
    <tr><td><strong>8</strong></td><td>Super silent 1</td><td>28</td><td>28</td><td>29</td><td>23</td><td>23</td><td>28</td><td>28</td><td><strong>80%</strong></td></tr>
    <tr><td><strong>9</strong></td><td>Super silent 2</td><td>27</td><td>27</td><td>28</td><td>22</td><td>22</td><td>27</td><td>27</td><td><strong>70%</strong></td></tr>
    <tr><td><strong>A</strong></td><td>Super silent 3</td><td>26</td><td>26</td><td>27</td><td>21</td><td>21</td><td>26</td><td>26</td><td><strong>60%</strong></td></tr>
    <tr><td><strong>B</strong></td><td>Super silent 4</td><td>25</td><td>25</td><td>26</td><td>20</td><td>20</td><td>25</td><td>25</td><td><strong>50%</strong></td></tr>
  </tbody>
</table>
          `,

          infobox_campo: `
<div class="infobox infobox-danger">
  <h4>⛔ ENC2 (CAPACIDADE) É CONFIGURADO EM FÁBRICA — NÃO ALTERE</h4>
  <p>O manual especifica que o ENC2 é "factory-set and its setting should not be changed". Alterar o ENC2 em campo pode causar operação do compressor em frequências incompatíveis, resultando em sobrecorrente (xH4), superaquecimento (P4/H6), ou dano permanente. Se a unidade foi recebida com ENC2 incorreto, contatar a Trane.</p>
</div>

<div class="infobox infobox-warning">
  <h4>⚠️ SAÍDA AUTOMÁTICA DO SILENT MODE A 3.5 MPa</h4>
  <p>Se o sistema está em Silent ou Super Silent Mode e a pressão Pc ultrapassa <strong>3.5 MPa</strong>, o sistema <strong>sai automaticamente</strong> do modo silencioso. Se o cliente reclama que "faz barulho à noite mesmo com modo silencioso", pode ser pressão alta (condensador sujo, temperatura extrema). Verificar e limpar o condensador.</p>
</div>

<div class="infobox infobox-info">
  <h4>💡 S8-2: REDUZIR STARTUP DE 12 MIN PARA 7 MIN — COM CUIDADO</h4>
  <p>O switch S8-2 permite reduzir o startup de 12 para 7 minutos. Só deve ser feito em sistemas onde <strong>todas as evaporadoras já estão configuradas e estáveis</strong>. Se novas evaporadoras forem adicionadas, restaurar para 12 min para garantir detecção na busca de endereços.</p>
</div>

<div class="infobox infobox-tip">
  <h4>🔍 SUPER SILENT MODE B = 50% DE CAPACIDADE — ATENÇÃO AO DIMENSIONAMENTO</h4>
  <p>O Super Silent 4 (ENC5=B) limita capacidade a <strong>50%</strong>. Em sistema 24HP, máximo disponível é 12HP. Se a carga térmica noturna excede 12HP, o sistema <strong>não conseguirá manter temperatura</strong>. Verificar compatibilidade do modo silencioso com a carga térmica do projeto.</p>
</div>
          `,
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════════
    // PARTE 5 — Elétrica e Fiação
    // ════════════════════════════════════════════════════════════════════════
    {
      id: 5,
      titulo: "PARTE 5 — Elétrica, PCB e Fiação",
      descricao:
        "O sistema nervoso da máquina: navegação pelo menu de diagnóstico da Main PCB, arquitetura do módulo inversor, módulo do fan motor e conexões elétricas de potência e comunicação.",
      icone: "zap",
      cor: "violet",
      topicos: [
        {
          id: "05-01",
          titulo: "Main PCB — Menu de Diagnóstico e Monitoramento em Tempo Real",
          descricao:
            "Navegação completa pelos botões e LEDs da Main PCB: display de 7 segmentos, leitura de temperatura em tempo real (Tₐ descarga, Tₐ sucção, Tₐ ambiente), pressões, frequência do compressor, posição da EXV. Tabela de parâmetros monitoráveis e seus valores normais de operação.",
          tempo_estimado: "45 min",
          nivel: "avancado",
          tags: ["main-pcb", "diagnóstico", "display", "monitoramento", "sensores"],
          videos: [],
          slides: [],

          // ─── CONTEÚDO COMPLETO DA AULA 5.1 ─────────────────────────
          conteudo_html: `
<h2>Layout da Caixa de Controle</h2>
<p>A caixa de controle elétrico da unidade externa possui <strong>duas camadas</strong> (top layer e bottom layer):</p>

<h3>Chassi 8-16HP</h3>
<ul>
  <li><strong>Top layer:</strong> Main PCB + Filter board + Power supply terminals + 2× Inductor</li>
  <li><strong>Bottom layer:</strong> <strong>1×</strong> Inverter module + Reactor + <strong>1×</strong> Fan module</li>
</ul>

<h3>Chassi 18-30HP</h3>
<ul>
  <li><strong>Top layer:</strong> Main PCB + Filter board + Power supply terminals + 2× Inductor</li>
  <li><strong>Bottom layer:</strong> <strong>2×</strong> Inverter module + <strong>2×</strong> Reactor + <strong>2×</strong> Fan module</li>
</ul>
<p><strong>Diferença fundamental:</strong> O chassi 18-30HP possui dois módulos inverter (BP1+BP2), dois reatores e dois módulos fan (FAN1+FAN2), refletindo a configuração de compressor dual.</p>

<hr/>

<h2>Portas da Placa Principal — 24 Portas (CN)</h2>

<h3>Portas de Sensores (0-5V DC)</h3>
<ul>
  <li><strong>CN19:</strong> Low pressure switch (pressostato de baixa) — 0V ou 5V DC</li>
  <li><strong>CN4:</strong> Sensor temperatura topo compressor A — 0-5V DC</li>
  <li><strong>CN5:</strong> Sensor temperatura tubo descarga / compressor B top — 0-5V DC</li>
  <li><strong>CN3:</strong> Sensor temperatura módulo inverter A — 0-5V DC</li>
  <li><strong>CN13:</strong> Sensor temperatura módulo inverter B — 0-5V DC</li>
  <li><strong>CN17:</strong> Sensor de alta pressão — 0-5V DC</li>
  <li><strong>CN1:</strong> Sensor temp. ambiente (T4) + temp. trocador de calor — 0-5V DC</li>
</ul>

<h3>Portas de Comunicação (2.5-2.7V DC)</h3>
<ul>
  <li><strong>CN22-CN23:</strong> Comunicação com outras unidades externas (master-slave)</li>
  <li><strong>CN26:</strong> Comunicação com placa de drive do compressor</li>
  <li><strong>CN27:</strong> Comunicação com placa de drive do fan</li>
  <li><strong>CN9:</strong> Comunicação USB</li>
</ul>

<h3>Portas de Drive/Controle</h3>
<ul>
  <li><strong>CN70:</strong> Drive da EXVA — 0V ou 12V DC</li>
  <li><strong>CN82:</strong> Controle do relé para placa de filtro AC — 0V ou 12V DC</li>
  <li><strong>CN41/CN43/CN46:</strong> Drive das válvulas solenoides (SV2, SV4, SV7) — 0V ou 220V AC</li>
</ul>

<h3>Portas de Alimentação (Alta Tensão)</h3>
<ul>
  <li><strong>CN30:</strong> Entrada de alimentação principal — 220V AC ou 380V AC</li>
  <li><strong>CN66-CN67:</strong> Alimentação do aquecedor de cárter (crankcase heater) — 220V AC</li>
</ul>

<hr/>

<h2>Botões de Operação da Main PCB</h2>
<ul>
  <li><strong>SW3 (UP):</strong> Navegação anterior/próximo no menu</li>
  <li><strong>SW4 (DOWN):</strong> Navegação no menu. <strong>Fora do menu:</strong> System Check (exibir parâmetros)</li>
  <li><strong>SW5 (MENU):</strong> <strong>Pressão longa 5 segundos</strong> para entrar no menu. Pressão curta para sair</li>
  <li><strong>SW6 (OK):</strong> Confirmar seleção</li>
</ul>

<hr/>

<h2>Sistema de Menu Hierárquico</h2>
<p>Navegação: Long press SW5 → Display "n1" → UP/DOWN para selecionar → OK para entrar → UP/DOWN submenu → OK para confirmar → Short press SW5 para sair.</p>

<h3>Menus de Diagnóstico</h3>
<ul>
  <li><strong>n14 — Debug mode:</strong> Apenas Master. Todas as IDU em modo cooling</li>
  <li><strong>n16 — Maintenance mode:</strong> Apenas Master. Não verifica nº de IDUs. Auto-exit: 60 min</li>
  <li><strong>n26 — Backup run:</strong> Apenas dual compressor (18-30HP). Se 1 falhar, outro opera até <strong>4 dias</strong></li>
  <li><strong>n27 — Vacuum mode:</strong> Manutenção. Display "R006". Todas as solenoides abrem, EXVs ao máximo. Auto-exit: 8 horas</li>
  <li><strong>n31 — History error codes:</strong> 10 erros mais recentes</li>
  <li><strong>n32 — Cleaning history:</strong> Limpa histórico de erros</li>
  <li><strong>n34 — Factory reset:</strong> Apenas Master. Restaura fábrica</li>
</ul>

<h3>Power Limitation (n41-n47)</h3>
<p>7 níveis de limitação de capacidade: n41 (100%), n42 (90%), n43 (80%), n44 (70%), n45 (60%), n46 (50%), n47 (40%).</p>

<h3>Configurações Especiais</h3>
<ul>
  <li><strong>nb1/nb2:</strong> Fahrenheit / Celsius</li>
  <li><strong>nb3/nb4:</strong> Sair / Entrar auto power save mode</li>
  <li><strong>nb5/nb6:</strong> Auto snow-blowing mode 1/2 (fan para 15/30 min, opera 2 min)</li>
  <li><strong>nb7:</strong> Sair auto snow-blowing</li>
  <li><strong>nb8:</strong> VIP address setting — display "IdXX"</li>
</ul>

<hr/>

<h2>System Check — 40+ Parâmetros em Tempo Real</h2>
<p>Pressionar <strong>SW4 (DOWN)</strong> fora do menu (após 1 hora de operação) exibe parâmetros em DSP1/DSP2:</p>
<ul>
  <li><strong>DSP1=0:</strong> Unit address (0=Master, 1=Slave1, 2=Slave2)</li>
  <li><strong>DSP1=1:</strong> Unit capacity (0=8HP a C=30HP)</li>
  <li><strong>DSP1=7:</strong> Operating mode (0=off, 2=cooling, 4=forced cooling)</li>
  <li><strong>DSP1=13:</strong> Temperatura ambiente T4 (°C)</li>
  <li><strong>DSP1=14/15:</strong> Temp. descarga compressor A/B (°C)</li>
  <li><strong>DSP1=16/17:</strong> Temp. heatsink inverter A/B (°C)</li>
  <li><strong>DSP1=21:</strong> Posição EXVA (steps = valor × 4)</li>
  <li><strong>DSP1=22:</strong> Pressão de descarga Pc (MPa = display × 0.1)</li>
  <li><strong>DSP1=37:</strong> Quantidade de refrigerante (0=normal a 5=critically insufficient)</li>
  <li><strong>DSP1=39:</strong> Power mode (0=100% a 6=40%, 10-16=auto power save)</li>
  <li><strong>DSP1=40:</strong> Último erro/proteção ("--" = nenhum erro desde startup)</li>
</ul>
          `,

          tabelas_html: `
<h3>Botões de Operação da Main PCB</h3>
<table>
  <thead>
    <tr><th>Botão</th><th>Nome</th><th>Função</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>SW3</strong></td><td>UP</td><td>Navegação no menu</td></tr>
    <tr><td><strong>SW4</strong></td><td>DOWN</td><td>Navegação no menu / System Check fora do menu</td></tr>
    <tr><td><strong>SW5</strong></td><td>MENU</td><td>Entrar (5s) / Sair do menu</td></tr>
    <tr><td><strong>SW6</strong></td><td>OK</td><td>Confirmar seleção</td></tr>
  </tbody>
</table>

<h3>Funções do Menu — Diagnóstico</h3>
<table>
  <thead>
    <tr><th>Display</th><th>Função</th><th>Auto-exit</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>n14</strong></td><td>Debug mode</td><td>120 min</td></tr>
    <tr><td><strong>n16</strong></td><td>Maintenance mode</td><td>60 min</td></tr>
    <tr><td><strong>n26</strong></td><td>Backup run (dual comp.)</td><td>4 dias</td></tr>
    <tr><td><strong>n27</strong></td><td>Vacuum mode</td><td>8 horas</td></tr>
    <tr><td><strong>n31</strong></td><td>History error codes</td><td>—</td></tr>
    <tr><td><strong>n32</strong></td><td>Cleaning history</td><td>—</td></tr>
    <tr><td><strong>n34</strong></td><td>Factory reset</td><td>—</td></tr>
  </tbody>
</table>

<h3>Power Limitation</h3>
<table>
  <thead>
    <tr><th>Display</th><th>Capacidade Máxima</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>n41</strong></td><td>100%</td></tr>
    <tr><td><strong>n42</strong></td><td>90%</td></tr>
    <tr><td><strong>n43</strong></td><td>80%</td></tr>
    <tr><td><strong>n44</strong></td><td>70%</td></tr>
    <tr><td><strong>n45</strong></td><td>60%</td></tr>
    <tr><td><strong>n46</strong></td><td>50%</td></tr>
    <tr><td><strong>n47</strong></td><td>40%</td></tr>
  </tbody>
</table>

<h3>Refrigerant Quantity — Interpretação (DSP1=37)</h3>
<table>
  <thead>
    <tr><th>Valor</th><th>Interpretação</th></tr>
  </thead>
  <tbody>
    <tr><td>0</td><td>Normal</td></tr>
    <tr><td>1</td><td>Slightly excessive</td></tr>
    <tr><td>2</td><td>Significantly excessive</td></tr>
    <tr><td>3</td><td>Slightly insufficient</td></tr>
    <tr><td>4</td><td>Significantly insufficient</td></tr>
    <tr><td>5</td><td><strong>Critically insufficient</strong></td></tr>
  </tbody>
</table>

<h3>Display — Saída por Estado da ODU</h3>
<table>
  <thead>
    <tr><th>Estado da ODU</th><th>DSP1 exibe</th><th>DSP2 exibe</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Standby</strong></td><td>Endereço da unidade</td><td>Nº de IDUs em comunicação</td></tr>
    <tr><td><strong>Normal (1 comp.)</strong></td><td>--</td><td>Velocidade compressor (rps)</td></tr>
    <tr><td><strong>Normal (2 comp.)</strong></td><td>Velocidade comp. A (rps)</td><td>Velocidade comp. B (rps)</td></tr>
    <tr><td><strong>Erro/proteção</strong></td><td>-- ou placeholder</td><td>Código de erro</td></tr>
    <tr><td><strong>System check</strong></td><td>Nº do parâmetro</td><td>Valor do parâmetro</td></tr>
  </tbody>
</table>

<h3>Layout da Caixa de Controle por Chassi</h3>
<table>
  <thead>
    <tr><th>Chassi</th><th>Top Layer</th><th>Bottom Layer</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>8-16HP</strong></td><td>Main PCB + Filter + Terminals + 2× Inductor</td><td>1× Inverter + 1× Reactor + 1× Fan module</td></tr>
    <tr><td><strong>18-30HP</strong></td><td>Main PCB + Filter + Terminals + 2× Inductor</td><td>2× Inverter + 2× Reactor + 2× Fan module</td></tr>
  </tbody>
</table>
          `,

          infobox_campo: `
<div class="infobox infobox-danger">
  <h4>⛔ CN30 — ALIMENTAÇÃO PRINCIPAL: TENSÃO PERIGOSA (220V/380V AC)</h4>
  <p><strong>NUNCA desconectar CN30 com o sistema energizado.</strong> Desligar o disjuntor e aguardar 5 minutos (descarga dos capacitores do módulo inverter) antes de manipular. A tensão nos capacitores pode atingir <strong>485-645V DC</strong> mesmo após desligar o disjuntor.</p>
</div>

<div class="infobox infobox-warning">
  <h4>⚠️ VACUUM MODE (n27) — ABRE TODAS AS VÁLVULAS E EXVs</h4>
  <p>O modo n27 é usado EXCLUSIVAMENTE durante manutenção para vácuo ou pressurização. Abre todas as solenoides e EXVs ao máximo. Display mostra "R006". <strong>NÃO ativar durante operação normal</strong> — inundará os compressores com líquido. Auto-exit: 8 horas.</p>
</div>

<div class="infobox infobox-info">
  <h4>💡 BACKUP RUN (n26) — MÁXIMO 4 DIAS, APENAS DUAL COMPRESSOR</h4>
  <p>O modo n26 permite que um compressor funcione quando o outro falhou. Opera por no máximo <strong>4 dias</strong> e depois para automaticamente. É solução de <strong>emergência temporária</strong>. Disponível apenas em modelos 18-30HP. Programar reparo dentro de 4 dias.</p>
</div>

<div class="infobox infobox-tip">
  <h4>🔍 SYSTEM CHECK (SW4/DOWN) — FERRAMENTA MAIS PODEROSA</h4>
  <p>Pressionar SW4 fora do menu exibe 40+ parâmetros. Mais úteis: <strong>DSP1=13</strong> (T4 temp. ambiente), <strong>DSP1=14/15</strong> (temp. descarga A/B), <strong>DSP1=21</strong> (EXVA position), <strong>DSP1=22</strong> (Pc pressão), <strong>DSP1=37</strong> (refrigerante), <strong>DSP1=40</strong> (último erro). Operar no mínimo <strong>1 hora</strong> antes de usar para leituras estáveis.</p>
</div>
          `,
        },
        {
          id: "05-02",
          titulo: "Módulo Inversor, Fan Module e Fiação de Potência/Comunicação",
          descricao:
            "Arquitetura elétrica do módulo inversor: retificador ponte trifásico → DC bus (450-650V) → IPM → motor trifásico do compressor. Fan module DC Inverter (540V). Barramento de comunicação RS-485 (PQE/M1M2). Diagramas de fiação com especificações de cabos e conectores.",
          tempo_estimado: "50 min",
          nivel: "avancado",
          tags: ["inverter", "IPM", "retificador", "DC-bus", "fan-module", "fiação", "RS-485"],
          videos: [],
          slides: [],

          // ─── CONTEÚDO COMPLETO DA AULA 5.2 ─────────────────────────
          conteudo_html: `
<h2>Módulo Inverter do Compressor</h2>
<p>Placa de potência que converte alimentação trifásica 380V AC em tensão/frequência variável para controlar a velocidade do compressor.</p>

<h3>Mapeamento de Portas (8 Portas)</h3>
<ul>
  <li><strong>CN6/CN7/CN11:</strong> Entrada de alimentação <strong>3-fásica</strong> — <strong>380V AC</strong></li>
  <li><strong>CN12/CN13/CN14:</strong> Saída de potência para o <strong>compressor</strong> (fases U, V, W)</li>
  <li><strong>CN20:</strong> Saída de potência para o <strong>fan module</strong> — <strong>18-22V DC</strong></li>
  <li><strong>CN2/CN3:</strong> Porta de <strong>controle</strong> do módulo inverter — <strong>220V AC</strong></li>
  <li><strong>LED1/LED2:</strong> Indicadores de operação e erro — 0-3.3V DC</li>
  <li><strong>CN8/CN9:</strong> Porta de <strong>comunicação</strong> com main board — 0-5V DC</li>
  <li><strong>CN38:</strong> Alimentação do <strong>fan module IPM</strong> — <strong>485-645V DC</strong></li>
  <li><strong>CN1/CN5:</strong> Conexão com o <strong>reator</strong> (reactor)</li>
</ul>
<p><strong>Barramento DC interno:</strong> Opera na faixa de <strong>485 a 645V DC</strong> — tensão armazenada nos capacitores eletrolíticos. Mesmo com disjuntor desligado, permanece por vários minutos.</p>

<hr/>

<h2>LEDs do Módulo Inverter</h2>
<ul>
  <li><strong>LED1 ON contínuo + LED2 OFF:</strong> ✅ Normal — compressor operando</li>
  <li><strong>LED1 Piscando + LED2 ON:</strong> ❌ Erro no módulo inverter — verificar código (xH4, PL, C7)</li>
</ul>

<h3>Dial Switch S7 — Endereçamento</h3>
<ul>
  <li><strong>S7 = 0</strong> (default): Módulo A → <strong>Compressor BP1</strong></li>
  <li><strong>S7 = 1</strong>: Módulo B → <strong>Compressor BP2</strong></li>
</ul>
<p>Se módulos forem trocados durante manutenção, configurar S7 conforme a <strong>posição física</strong>, não o módulo original.</p>

<hr/>

<h2>Módulo Fan</h2>
<p>Placa de potência que controla a velocidade dos ventiladores DC da unidade externa.</p>

<h3>Mapeamento de Portas (11 Portas)</h3>
<ul>
  <li><strong>CN5/CN6:</strong> Alimentação do módulo fan (controle) — <strong>18-22V DC</strong></li>
  <li><strong>CN2:</strong> Porta de <strong>atualização de firmware</strong></li>
  <li><strong>CN1/CN4:</strong> Portas de <strong>comunicação</strong> com main board — 0-5V DC</li>
  <li><strong>CN7 (N) / CN8 (P):</strong> Alimentação do <strong>fan module IPM</strong> — <strong>485-645V DC</strong> entre P e N</li>
  <li><strong>CN3:</strong> Conexão do <strong>motor do ventilador</strong></li>
  <li><strong>SW1:</strong> Dial switch de endereço</li>
  <li><strong>LED1/LED2:</strong> Indicadores de operação e erro</li>
</ul>
<p><strong>Mesma precaução:</strong> Módulo fan recebe <strong>485-645V DC</strong> do barramento DC do módulo inverter via CN7/CN8.</p>

<h3>Dial Switch SW1 — Endereçamento</h3>
<ul>
  <li><strong>SW1 = 0</strong> (default): Módulo A → <strong>Fan A (FAN1)</strong></li>
  <li><strong>SW1 = 1</strong>: Módulo B → <strong>Fan B (FAN2)</strong></li>
</ul>

<hr/>

<h2>Diagramas de Fiação</h2>

<h3>8-16HP — Configuração Single</h3>
<p><strong>Layout PCBA:</strong> Top: Main board → Bottom: Compressor module A + AC filter board + DC fan module A</p>
<p><strong>Conexões:</strong> Power in → AC filter → Main board (CN30) → Compressor module A → COMP A + DC fan module A → FAN A + Sensores (T3, T4, TFC1, TF1) + Solenoides (SV2, SV4, SV7) + EEVA</p>

<h3>18-30HP — Configuração Dual</h3>
<p><strong>Layout PCBA:</strong> Top: Main board → Bottom: Compressor module A + B + AC filter + DC fan module A + B</p>
<p><strong>Diferenças do 8-16HP:</strong></p>
<ul>
  <li>2× Compressor modules (A+B), 2× Fan modules (A+B), 2× Reactors (RA,A + RA,B)</li>
  <li>2× Temperature sensors TFC (TFC1+TFC2), 2× Heatsink sensors TF (TF1+TF2)</li>
  <li>Porta USB de upgrade (presente apenas no 18-30HP)</li>
  <li>Cabo do COMP B tem <strong>uma marca (belt) adicional</strong> para identificação visual</li>
</ul>
          `,

          tabelas_html: `
<h3>Tensões Críticas nos Módulos</h3>
<table>
  <thead>
    <tr><th>Ponto</th><th>Tensão</th><th>Tipo</th><th>Perigo</th></tr>
  </thead>
  <tbody>
    <tr><td>CN6/CN7/CN11 (Inverter input)</td><td><strong>380V AC</strong></td><td>Trifásico</td><td>⚡ Alta tensão</td></tr>
    <tr><td>Barramento DC (capacitores)</td><td><strong>485-645V DC</strong></td><td>Contínuo</td><td>⚡⚡ Muito perigosa</td></tr>
    <tr><td>CN7/CN8 (Fan module IPM)</td><td><strong>485-645V DC</strong></td><td>P e N</td><td>⚡⚡ Muito perigosa</td></tr>
    <tr><td>CN2/CN3 (Inverter control)</td><td><strong>220V AC</strong></td><td>Monofásico</td><td>⚡ Alta tensão</td></tr>
    <tr><td>CN20 (Fan power from inverter)</td><td><strong>18-22V DC</strong></td><td>Baixa tensão</td><td>✅ Seguro</td></tr>
    <tr><td>CN8/CN9 (Communication)</td><td><strong>0-5V DC</strong></td><td>Sinal</td><td>✅ Seguro</td></tr>
    <tr><td>LED1/LED2</td><td><strong>0-3.3V DC</strong></td><td>Indicação</td><td>✅ Seguro</td></tr>
  </tbody>
</table>

<h3>Endereçamento dos Módulos</h3>
<table>
  <thead>
    <tr><th>Módulo</th><th>Switch</th><th>Posição A (default)</th><th>Posição B</th></tr>
  </thead>
  <tbody>
    <tr><td>Compressor Inverter</td><td><strong>S7</strong></td><td>0 → BP1</td><td>1 → BP2</td></tr>
    <tr><td>Fan Module</td><td><strong>SW1</strong></td><td>0 → FAN1</td><td>1 → FAN2</td></tr>
  </tbody>
</table>

<h3>Diagnóstico por LEDs (Todos os Módulos)</h3>
<table>
  <thead>
    <tr><th>Módulo</th><th>LED1 (Operação)</th><th>LED2 (Erro)</th><th>Status</th></tr>
  </thead>
  <tbody>
    <tr><td>Inverter</td><td>ON contínuo</td><td>OFF</td><td>✅ Normal</td></tr>
    <tr><td>Inverter</td><td>Flashing</td><td>ON contínuo</td><td>❌ Erro</td></tr>
    <tr><td>Fan</td><td>ON contínuo</td><td>OFF</td><td>✅ Normal</td></tr>
    <tr><td>Fan</td><td>Flashing</td><td>ON contínuo</td><td>❌ Erro</td></tr>
  </tbody>
</table>

<h3>Diferenças de Fiação — 8-16HP vs 18-30HP</h3>
<table>
  <thead>
    <tr><th>Componente</th><th>8-16HP</th><th>18-30HP</th></tr>
  </thead>
  <tbody>
    <tr><td>Compressor modules</td><td><strong>1</strong> (A)</td><td><strong>2</strong> (A + B)</td></tr>
    <tr><td>Fan modules</td><td><strong>1</strong> (A)</td><td><strong>2</strong> (A + B)</td></tr>
    <tr><td>Reactors</td><td><strong>1</strong> (RA,A)</td><td><strong>2</strong> (RA,A + RA,B)</td></tr>
    <tr><td>Temp. sensors TFC</td><td><strong>1</strong> (TFC1)</td><td><strong>2</strong> (TFC1 + TFC2)</td></tr>
    <tr><td>Heatsink sensors TF</td><td><strong>1</strong> (TF1)</td><td><strong>2</strong> (TF1 + TF2)</td></tr>
    <tr><td>USB upgrade port</td><td>—</td><td>✔ Presente</td></tr>
  </tbody>
</table>

<h3>Portas do Módulo Inverter do Compressor</h3>
<table>
  <thead>
    <tr><th>Label</th><th>Port Code</th><th>Função</th><th>Tensão</th></tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>CN6/CN7/CN11</td><td>Entrada 3-fásica</td><td><strong>380V AC</strong></td></tr>
    <tr><td>2</td><td>CN12/CN13/CN14</td><td>Saída UVW compressor</td><td>/</td></tr>
    <tr><td>3</td><td>CN20</td><td>Saída para fan module</td><td><strong>18-22V DC</strong></td></tr>
    <tr><td>4</td><td>CN2/CN3</td><td>Controle do inverter</td><td><strong>220V AC</strong></td></tr>
    <tr><td>5</td><td>LED1/LED2</td><td>Indicadores</td><td>0-3.3V DC</td></tr>
    <tr><td>6</td><td>CN8/CN9</td><td>Comunicação com main board</td><td>0-5V DC</td></tr>
    <tr><td>7</td><td>CN38</td><td>Alimentação fan module IPM</td><td><strong>485-645V DC</strong></td></tr>
    <tr><td>8</td><td>CN1/CN5</td><td>Conexão com reator</td><td>/</td></tr>
  </tbody>
</table>
          `,

          infobox_campo: `
<div class="infobox infobox-danger">
  <h4>⛔ BARRAMENTO DC — 485 A 645V DC NOS CAPACITORES</h4>
  <p>Tanto o módulo inverter quanto o módulo fan operam com <strong>485 a 645V DC</strong> armazenada nos capacitores eletrolíticos. Após desligar o disjuntor, <strong>aguardar MÍNIMO 5 minutos</strong> para descarga. Verificar com multímetro DC entre P e N antes de iniciar trabalho. Técnicos já sofreram choque grave por não aguardar a descarga.</p>
</div>

<div class="infobox infobox-warning">
  <h4>⚠️ S7 E SW1 — CONFIGURAR CONFORME POSIÇÃO FÍSICA, NÃO MÓDULO ORIGINAL</h4>
  <p>Se um módulo inverter ou fan for substituído, o dial switch (S7 ou SW1) deve ser configurado pela <strong>posição física</strong> (A=esquerda, B=direita conforme diagrama de fiação), não pela configuração do módulo antigo. Endereço incorreto causa conflito de comunicação e operação errática.</p>
</div>

<div class="infobox infobox-info">
  <h4>💡 LED1 FLASHING + LED2 ON = FALHA NO MÓDULO</h4>
  <p>Quando os LEDs indicam erro (LED1 piscando, LED2 aceso), o código aparece no display digital da placa principal (DSP2). Códigos comuns: <strong>xH4</strong> (sobrecorrente), <strong>PL</strong> (overtemperature heatsink), <strong>C7</strong> (falha repetida). Consultar Part 6 do manual para troubleshooting.</p>
</div>

<div class="infobox infobox-tip">
  <h4>🔍 CABO DO COMP B TEM UMA MARCA A MAIS (18-30HP)</h4>
  <p>Na instalação ou manutenção de unidades 18-30HP, o cabo do Compressor B possui <strong>um belt (marca/faixa) adicional</strong> vs Compressor A. Facilita identificação visual durante reconexão. Inverter os cabos A e B causa conflito de fase e pode danificar o compressor.</p>
</div>
          `,
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════════
    // PARTE 6 — Diagnóstico e Troubleshooting
    // ════════════════════════════════════════════════════════════════════════
    {
      id: 6,
      titulo: "PARTE 6 — Diagnóstico e Troubleshooting",
      descricao:
        "O coração do Service Manual: 75+ códigos de erro com fluxogramas de diagnóstico, troubleshooting de sensores e componentes eletrônicos, análise avançada de comunicação RS-485, IPM/retificador, tubulação e contaminação sistêmica.",
      icone: "search",
      cor: "red",
      topicos: [
        {
          id: "06-01",
          titulo: "Códigos de Erro e Comunicação — Tabela Mestre e Fluxogramas",
          descricao:
            "Tabela mestre completa com 75+ códigos de erro do TVR Pro CO 380V, organizados por categoria: comunicação (E0-E9), sensores (F0-F9), pressão e temperatura (P1-P9, H1-H9), sistema elétrico (L0-L9). Fluxogramas de diagnóstico para os erros mais frequentes em campo.",
          tempo_estimado: "60 min",
          nivel: "avancado",
          tags: ["códigos-de-erro", "troubleshooting", "fluxogramas", "E0", "E2", "P1", "P4"],
          videos: [],
          slides: [],

          // ─── CONTEÚDO COMPLETO DA AULA 6.1 ─────────────────────────
          conteudo_html: `
<h2>Notação dos Códigos de Erro</h2>
<ul>
  <li><strong>"x" (prefixo):</strong> Placeholder para o sistema compressor — x=1 → Compressor A (BP1), x=2 → Compressor B (BP2)</li>
  <li><strong>"y" (prefixo):</strong> Placeholder para o endereço da unidade slave — y=1 ou 2</li>
  <li><strong>Sem prefixo:</strong> Código aplicável ao sistema como um todo</li>
</ul>
<p><strong>Exemplo:</strong> "xH4" → <strong>1H4</strong> (proteção inverter A) ou <strong>2H4</strong> (proteção inverter B). Em unidades single compressor (8-16HP), o prefixo será sempre <strong>1</strong>.</p>

<hr/>

<h2>Categoria 1 — Erros de Comunicação</h2>
<ul>
  <li><strong>E0:</strong> Comunicação entre ODUs (slave não recebe sinal do master por 60s) — exibido na slave</li>
  <li><strong>E2:</strong> Comunicação IDU-Master (sem comunicação por 2 min após 20 min energizado) — exibido no master</li>
  <li><strong>E8:</strong> Endereço da unidade externa incorreto — reinício manual</li>
  <li><strong>xE9:</strong> EEPROM mismatch — reinício manual</li>
  <li><strong>xH0:</strong> Comunicação entre main control chip e inverter driver chip</li>
  <li><strong>H2:</strong> Nº de slaves detectado pelo master diminuiu</li>
  <li><strong>H3:</strong> Nº de slaves detectado pelo master aumentou</li>
  <li><strong>H7:</strong> Nº de IDUs difere do configurado na PCB</li>
  <li><strong>yHd:</strong> Slave unit malfunction</li>
</ul>

<h2>Categoria 2 — Erros de Sensor e Alimentação</h2>
<ul>
  <li><strong>E4:</strong> Sensor T3 (trocador) ou T4 (ambiente outdoor) — auto-recuperável</li>
  <li><strong>E5:</strong> Tensão de alimentação anormal (&lt; 165V trigger, &gt; 180V recover)</li>
  <li><strong>E7:</strong> Sensor temp. topo/descarga compressor (T7C1/T7C2) — reinício manual</li>
  <li><strong>H8:</strong> Sensor de alta pressão</li>
  <li><strong>XF6:</strong> Conexão da EXV — reinício manual</li>
</ul>

<h2>Categoria 3 — Erros de Módulo Inverter e Potência</h2>
<ul>
  <li><strong>xF1:</strong> Tensão do barramento DC</li>
  <li><strong>xH4:</strong> Proteção do módulo inverter — reinício manual</li>
  <li><strong>PL:</strong> Overtemperature do módulo inverter</li>
  <li><strong>xL0 a xL9:</strong> Proteções diversas (DC baixo/alto, MCE, velocidade zero, sequência de fase, variação &gt;15Hz)</li>
  <li><strong>C7:</strong> PL 3× em 100 min — reinício manual</li>
</ul>

<h2>Categoria 4 — Proteções de Pressão e Temperatura</h2>
<ul>
  <li><strong>P1:</strong> Alta pressão descarga (&gt; 4.4 MPa)</li>
  <li><strong>P2:</strong> Baixa pressão sucção (&lt; 0.05 MPa)</li>
  <li><strong>P4:</strong> Temperatura de descarga (&gt; 120°C)</li>
  <li><strong>P5:</strong> Temperatura do trocador outdoor</li>
  <li><strong>H5:</strong> P2 3× em 60 min — reinício manual</li>
  <li><strong>H6:</strong> P4 3× em 100 min — reinício manual</li>
</ul>

<hr/>

<h2>Troubleshooting E0 — Comunicação entre ODUs</h2>
<p><strong>Trigger:</strong> Slave não recebe sinal do master por <strong>60 segundos</strong>. Todas as unidades param.</p>
<p><strong>Flowchart:</strong></p>
<ol>
  <li>Endereços ENC1 incorretos? → Corrigir (Master=0, Slave1=1, Slave2=2)</li>
  <li>Fios de comunicação desconectados? → Reconectar cabo blindado 3 vias (H1→H1)</li>
  <li>Fios soltos entre Main PCB e terminal? → Reconectar firmemente</li>
  <li>Substituir Main PCB resolve? → PCB danificada</li>
  <li>Substituir bloco terminal de comunicação</li>
</ol>
<p><strong>Referência de medição:</strong> P→Q = <strong>120Ω</strong> | P→E = ∞ | Q→E = ∞</p>

<hr/>

<h2>Troubleshooting E2 — Comunicação IDU-Master</h2>
<p><strong>Trigger:</strong> IDUs e ODUs sem comunicação por <strong>2 minutos</strong> após 20 min de energização.</p>
<p><strong>Flowchart:</strong></p>
<ol>
  <li>Fios P/Q/E em curto ou desconectados? → Reconectar</li>
  <li>Fios NÃO estão em daisy chain? → Conectar em cascata</li>
  <li>Alimentação da IDU anormal? → Normalizar</li>
  <li>Fios soltos entre Main PCB e terminal? → Reconectar</li>
  <li>Interferência de fios de alta tensão (220V+)? → Separar fios</li>
  <li>Próximo a fonte de EMI (transformador, lâmpada)? → Remover ou blindar</li>
  <li>Comprimento do fio &gt; <strong>1200m</strong>? → Reduzir ou reforçar sinal</li>
  <li>Substituir Main PCB ou bloco terminal</li>
</ol>

<hr/>

<h2>Troubleshooting E4 — Sensor T3/T4</h2>
<p><strong>Trigger:</strong> Main PCB não recebe sinal do sensor T3 ou T4.</p>
<p><strong>Flowchart:</strong></p>
<ol>
  <li>Conexão do sensor na Main PCB (CN1) solta? → Reconectar em CN1</li>
  <li>Sensor em curto ou com falha? → Medir resistência (ref. Table 6-3.1) → Substituir</li>
  <li>Substituir Main PCB outdoor</li>
</ol>

<hr/>

<h2>Troubleshooting E5 — Tensão Anormal</h2>
<p><strong>Trigger:</strong> Tensão de fase &lt; <strong>165V</strong>. <strong>Recover:</strong> Tensão de fase &gt; <strong>180V</strong>.</p>
<p><strong>Causas:</strong> Tensão de alimentação anormal, fase faltando, fiação solta, circuito de alta tensão com erro, Main PCB danificada.</p>
          `,

          tabelas_html: `
<h3>Tabela Mestre — Erros de Comunicação</h3>
<table>
  <thead>
    <tr><th>Código</th><th>Descrição</th><th>Exibido em</th><th>Restart Manual</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>E0</strong></td><td>Comunicação entre ODUs</td><td>Slave com erro</td><td>Não</td></tr>
    <tr><td><strong>E2</strong></td><td>Comunicação IDU-Master</td><td>Master</td><td>Não</td></tr>
    <tr><td><strong>E8</strong></td><td>Endereço da ODU</td><td>Unidade com erro</td><td>Sim</td></tr>
    <tr><td><strong>xE9</strong></td><td>EEPROM mismatch</td><td>Unidade com erro</td><td>Sim</td></tr>
    <tr><td><strong>xH0</strong></td><td>Main chip ↔ inverter driver</td><td>Unidade com erro</td><td>Não</td></tr>
    <tr><td><strong>H2</strong></td><td>Slaves diminuíram</td><td>Master</td><td>Não</td></tr>
    <tr><td><strong>H3</strong></td><td>Slaves aumentaram</td><td>Master</td><td>Não</td></tr>
    <tr><td><strong>H7</strong></td><td>Nº IDUs difere do configurado</td><td>Master</td><td>Não</td></tr>
    <tr><td><strong>yHd</strong></td><td>Slave malfunction</td><td>Master</td><td>Não</td></tr>
  </tbody>
</table>

<h3>Tabela Mestre — Erros de Sensor e Alimentação</h3>
<table>
  <thead>
    <tr><th>Código</th><th>Descrição</th><th>Restart Manual</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>E4</strong></td><td>Sensor T3 (trocador) ou T4 (ambiente)</td><td>Não</td></tr>
    <tr><td><strong>E5</strong></td><td>Tensão anormal (&lt;165V / &gt;180V)</td><td>Não</td></tr>
    <tr><td><strong>E7</strong></td><td>Sensor temp. topo/descarga compressor</td><td>Sim</td></tr>
    <tr><td><strong>H8</strong></td><td>Sensor de alta pressão</td><td>Não</td></tr>
    <tr><td><strong>XF6</strong></td><td>Conexão da EXV</td><td>Sim</td></tr>
  </tbody>
</table>

<h3>Tabela Mestre — Inverter e Potência</h3>
<table>
  <thead>
    <tr><th>Código</th><th>Descrição</th><th>Restart Manual</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>xF1</strong></td><td>Tensão barramento DC</td><td>Não</td></tr>
    <tr><td><strong>xH4</strong></td><td>Proteção módulo inverter</td><td>Sim</td></tr>
    <tr><td><strong>PL</strong></td><td>Overtemperature inverter</td><td>Não</td></tr>
    <tr><td><strong>PP</strong></td><td>Superaquecimento descarga insuficiente</td><td>Não</td></tr>
    <tr><td><strong>xL0</strong></td><td>Proteção inverter (genérica)</td><td>Sim</td></tr>
    <tr><td><strong>xL1</strong></td><td>Tensão baixa DC bus</td><td>Sim</td></tr>
    <tr><td><strong>xL2</strong></td><td>Tensão alta DC bus</td><td>Sim</td></tr>
    <tr><td><strong>xL4</strong></td><td>Erro MCE</td><td>Sim</td></tr>
    <tr><td><strong>xL5</strong></td><td>Velocidade zero compressor</td><td>Sim</td></tr>
    <tr><td><strong>xL7</strong></td><td>Erro sequência de fase</td><td>Sim</td></tr>
    <tr><td><strong>xL8</strong></td><td>Variação &gt; 15Hz/s</td><td>Sim</td></tr>
    <tr><td><strong>xL9</strong></td><td>Frequência difere &gt; 15Hz do target</td><td>Sim</td></tr>
    <tr><td><strong>C7</strong></td><td>PL 3× em 100 min</td><td>Sim</td></tr>
    <tr><td><strong>xP9</strong></td><td>P9 10× em 120 min</td><td>Sim</td></tr>
  </tbody>
</table>

<h3>Tabela Mestre — Pressão e Temperatura</h3>
<table>
  <thead>
    <tr><th>Código</th><th>Descrição</th><th>Restart Manual</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>P1</strong></td><td>Alta pressão descarga</td><td>Não</td></tr>
    <tr><td><strong>P2</strong></td><td>Baixa pressão sucção</td><td>Não</td></tr>
    <tr><td><strong>P4</strong></td><td>Temperatura descarga</td><td>Não</td></tr>
    <tr><td><strong>P5</strong></td><td>Temperatura trocador outdoor</td><td>Não</td></tr>
    <tr><td><strong>H5</strong></td><td>P2 3× em 60 min</td><td>Sim</td></tr>
    <tr><td><strong>H6</strong></td><td>P4 3× em 100 min</td><td>Sim</td></tr>
    <tr><td><strong>xH9</strong></td><td>P9 10× em 120 min</td><td>Sim</td></tr>
  </tbody>
</table>

<h3>Resistência de Comunicação (Referência E0)</h3>
<table>
  <thead>
    <tr><th>Medição</th><th>Resistência Normal</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>P → Q</strong></td><td><strong>120Ω</strong></td></tr>
    <tr><td><strong>P → E</strong></td><td>∞ (circuito aberto)</td></tr>
    <tr><td><strong>Q → E</strong></td><td>∞ (circuito aberto)</td></tr>
  </tbody>
</table>
          `,

          infobox_campo: `
<div class="infobox infobox-danger">
  <h4>⛔ AVISO DE SEGURANÇA OBRIGATÓRIO (WARNING 2.1)</h4>
  <p>Todo trabalho elétrico deve ser executado por profissionais <strong>qualificados e credenciados</strong>. <strong>DESLIGAR a unidade externa</strong> (disjuntor principal) antes de conectar ou desconectar qualquer fio. Choque elétrico pode causar <strong>lesão grave ou morte</strong>.</p>
</div>

<div class="infobox infobox-warning">
  <h4>⚠️ E2 — COMPRIMENTO MÁXIMO DO FIO DE COMUNICAÇÃO: 1200 METROS</h4>
  <p>Se o fio IDU-ODU ultrapassar <strong>1200m</strong>, o sinal pode gerar E2 intermitente. Usar <strong>cabo 3 vias blindado</strong> (three-core shielded cable), conectar em <strong>daisy chain</strong>, e separar dos cabos de força (220V/380V). Evitar roteamento próximo a transformadores ou fontes de EMI.</p>
</div>

<div class="infobox infobox-info">
  <h4>💡 CÓDIGOS COM "x" — IDENTIFICAR QUAL COMPRESSOR (A OU B)</h4>
  <p>Prefixo "x" indica o compressor: <strong>1</strong> = Compressor A (BP1), <strong>2</strong> = Compressor B (BP2). Exemplo: <strong>1H4</strong> = inverter A com proteção, <strong>2L5</strong> = compressor B velocidade zero. Em single compressor (8-16HP), sempre <strong>1</strong>. No display: DSP1 mostra o número, DSP2 o código.</p>
</div>

<div class="infobox infobox-tip">
  <h4>🔍 OS 5 ERROS MAIS COMUNS NO CAMPO</h4>
  <p>1. <strong>E2</strong> (comunicação IDU-ODU) → Verificar fiação P/Q/E, alimentação IDU, comprimento do cabo<br/>
  2. <strong>E4</strong> (sensor T3/T4) → Verificar CN1, medir resistência do sensor<br/>
  3. <strong>P1</strong> (alta pressão) → Carga de refrigerante, ventilador, trocador sujo<br/>
  4. <strong>xH4</strong> (proteção inverter) → LEDs do módulo inverter, barramento DC<br/>
  5. <strong>E5</strong> (tensão anormal) → Tensão de fase, fase faltando, disjuntor</p>
</div>
          `,
        },
        {
          id: "06-02",
          titulo: "Troubleshooting — Sensores de Temperatura/Pressão e Inversor",
          descricao:
            "Procedimentos de diagnóstico avançado para: sensores termistores NTC (curva R×T, teste com multímetro), transdutores de pressão (0.5-4.5V), módulo inversor (modo diodo forward 0.35-0.70V), e correlação entre subcódigos xF/xL e componentes falhos.",
          tempo_estimado: "55 min",
          nivel: "avancado",
          tags: ["sensores", "termistor", "NTC", "transdutor", "inversor", "modo-diodo"],
          videos: [],
          slides: [],

          // ─── CONTEÚDO COMPLETO DA AULA 6.2 ─────────────────────────
          conteudo_html: `
<h2>Troubleshooting E5 — Procedimento Completo</h2>
<p><strong>Trigger:</strong> Tensão de fase < <strong>165V</strong>. <strong>Recover:</strong> > <strong>180V</strong>.</p>
<p><strong>Flowchart:</strong></p>
<ol>
  <li>Alimentação anormal ou fase faltando? (Medir A-N, B-N, C-N = <strong>198-242V</strong>) → Fornecer alimentação normal</li>
  <li>Fios entre Main PCB, filtro AC e terminais soltos? → Reconectar</li>
  <li>Erro no circuito de alta tensão? (Compressor/Fan/Inverter) → Reparar ou substituir</li>
  <li>Substituir Main PCB outdoor</li>
</ol>

<h3>Referências de Medição para E5</h3>
<ul>
  <li><strong>Compressor (bobinas U-V, V-W, U-W):</strong> <strong>0,7 — 1,5Ω</strong></li>
  <li><strong>Compressor (isolamento U/V/W vs terra):</strong> <strong>∞ (infinito)</strong></li>
  <li><strong>Fan motor (bobina par a par):</strong> <strong>< 10Ω</strong> (0Ω = curto)</li>
  <li><strong>Inverter module (buzzer):</strong> P, N, U, V, W — se buzzer apita → módulo em curto</li>
</ul>

<hr/>

<h2>Troubleshooting E7 — Sensor Temp. Compressor (T7C1/T7C2)</h2>
<p><strong>Trigger:</strong> Pressão descarga ≥ <strong>3 MPa</strong> E temp. descarga < <strong>15°C</strong> por <strong>2 minutos</strong>. Reset: <strong>Manual</strong>.</p>
<p><strong>Flowchart:</strong></p>
<ol>
  <li>Conexão do sensor na Main PCB solta? (CN4=Label 3, CN5=Label 4) → Reconectar</li>
  <li>Sensor em curto ou com falha? (Medir resistência ref. Table 6-3.2) → Substituir</li>
  <li>Substituir Main PCB outdoor</li>
</ol>

<hr/>

<h2>Troubleshooting E8 — Endereço da ODU</h2>
<p><strong>Trigger:</strong> Endereço configurado > <strong>2</strong>. Reset: <strong>Manual</strong>.</p>
<p><strong>Regra:</strong> Master=0, Slave1=1, Slave2=2. Endereços NÃO podem repetir.</p>
<p><strong>Flowchart:</strong></p>
<ol>
  <li>Endereço fora do range 0-2? → Corrigir via ENC1</li>
  <li>Substituir Main PCB outdoor</li>
</ol>

<hr/>

<h2>Troubleshooting xE9 — EEPROM Mismatch</h2>
<p><strong>Causa principal:</strong> Unidade energizada imediatamente após desligar, sem tempo para ciclo de escrita da EEPROM.</p>
<p><strong>Procedimento:</strong> DESLIGAR a unidade e <strong>aguardar até o display digital apagar completamente</strong> antes de religar. Reset: <strong>Manual</strong>.</p>

<hr/>

<h2>Troubleshooting xF1 — Tensão Barramento DC</h2>
<p><strong>Trigger:</strong> DC bus < <strong>350V</strong> ou > <strong>700V</strong> por <strong>10 segundos</strong>. Reset: Automático.</p>
<p><strong>Flowchart:</strong></p>
<ol>
  <li>Fiação do módulo inverter solta? → Reconectar conforme diagrama</li>
  <li>Alimentação anormal? → Verificar equipamento</li>
  <li>Substituir módulo inverter</li>
</ol>

<hr/>

<h2>Troubleshooting XF6 — EXV (Válvula de Expansão Eletrônica)</h2>
<p><strong>Trigger:</strong> Main board não recebe feedback da EXV. Reset: <strong>Manual</strong> (F6 pisca ao reconectar).</p>
<p><strong>Flowchart:</strong></p>
<ol>
  <li>Conexão da bobina EXV na Main PCB (CN70, Label 19) solta? → Reconectar</li>
  <li>Bobina EXV com defeito? (Resistência entre fios = <strong>40-50Ω</strong>) → Substituir</li>
  <li>Substituir Main PCB outdoor</li>
</ol>
<p><strong>5 fios da EXV:</strong> Red, Blue, Orange, Yellow, White. Resistência entre <strong>qualquer par</strong> = 40-50Ω.</p>

<hr/>

<h2>Troubleshooting xH0 — Comunicação Main Chip → Inverter Driver</h2>
<p><strong>Trigger:</strong> Sem comunicação por <strong>2 minutos</strong>. Reset: Automático.</p>
<p><strong>Flowchart:</strong></p>
<ol>
  <li>Endereço S7 do inverter module incorreto? → S7=0 (Comp A esquerdo), S7=1 (Comp B direito)</li>
  <li>Fio comunicação Main PCB CN26 → Inverter CN8/CN9 solto? → Reconectar</li>
  <li>LED1 e LED2 apagados quando energizado? → Verificar circuito de alimentação</li>
  <li>Substituir Main PCB ou módulo inverter</li>
</ol>

<hr/>

<h2>Troubleshooting H2/H3 — Contagem de Slaves Alterada</h2>
<p><strong>H2:</strong> Slaves diminuíram. <strong>H3:</strong> Slaves aumentaram. Exibido no master.</p>
<p><strong>Flowchart:</strong></p>
<ol>
  <li>Alguma ODU desligada? → Ligar TODAS</li>
  <li>Alimentação anormal? → Verificar</li>
  <li>Seguir procedimento E0 (ENC1, fios, PCB, terminal)</li>
</ol>

<hr/>

<h2>Troubleshooting xH4 — Proteção do Módulo Inverter (ERRO CRÍTICO)</h2>
<p><strong>Trigger:</strong> Compressor acumula <strong>3 proteções</strong> do módulo inverter. Reset: <strong>Manual</strong>.</p>
<p>xH4 é um "código guarda-chuva" com <strong>8 subcódigos</strong> (xL0 a xL9). Identificar via menu <strong>"n31"</strong> (histórico de erros) ou <strong>contagem de flashes do LED1</strong>.</p>

<h3>Diagnóstico por LED do Módulo Inverter</h3>
<p>Quando LED2 aceso fixo + LED1 piscando: contar flashes entre pausas de 1 segundo:</p>
<ul>
  <li><strong>8 flashes</strong> → xL0 (proteção genérica)</li>
  <li><strong>9 flashes</strong> → xL1 (DC bus low voltage)</li>
  <li><strong>10 flashes</strong> → xL2 (DC bus high voltage)</li>
  <li><strong>12 flashes</strong> → xL4 (MCE error)</li>
  <li><strong>13 flashes</strong> → xL5 (velocidade zero)</li>
  <li><strong>15 flashes</strong> → xL7 (sequência de fase)</li>
  <li><strong>16 flashes</strong> → xL8 (variação > 15Hz/s)</li>
  <li><strong>17 flashes</strong> → xL9 (frequência difere > 15Hz)</li>
</ul>
          `,

          tabelas_html: `
<h3>Subcódigos do xH4 — Proteção Inverter</h3>
<table>
  <thead>
    <tr><th>Subcódigo</th><th>Descrição</th><th>LED1 Flashes</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>xL0</strong></td><td>Proteção inverter (genérica)</td><td>8</td></tr>
    <tr><td><strong>xL1</strong></td><td>Tensão baixa DC bus</td><td>9</td></tr>
    <tr><td><strong>xL2</strong></td><td>Tensão alta DC bus</td><td>10</td></tr>
    <tr><td><strong>xL4</strong></td><td>Erro MCE</td><td>12</td></tr>
    <tr><td><strong>xL5</strong></td><td>Velocidade zero compressor</td><td>13</td></tr>
    <tr><td><strong>xL7</strong></td><td>Erro sequência de fase</td><td>15</td></tr>
    <tr><td><strong>xL8</strong></td><td>Variação frequência > 15Hz/s</td><td>16</td></tr>
    <tr><td><strong>xL9</strong></td><td>Frequência difere > 15Hz do target</td><td>17</td></tr>
  </tbody>
</table>

<h3>Referências de Medição para Troubleshooting</h3>
<table>
  <thead>
    <tr><th>Parâmetro</th><th>Componente</th><th>Valor Normal</th><th>Erro</th></tr>
  </thead>
  <tbody>
    <tr><td>Tensão de fase (A-N, B-N, C-N)</td><td>Alimentação trifásica</td><td><strong>198-242V</strong></td><td>E5</td></tr>
    <tr><td>Tensão barramento DC</td><td>Inverter module</td><td><strong>350-700V</strong></td><td>xF1</td></tr>
    <tr><td>Resistência bobinas compressor</td><td>Compressor (U-V, V-W, U-W)</td><td><strong>0,7-1,5Ω</strong></td><td>E5</td></tr>
    <tr><td>Isolamento compressor</td><td>U/V/W vs ground</td><td><strong>∞</strong></td><td>E5</td></tr>
    <tr><td>Resistência bobina fan</td><td>Fan motor (par a par)</td><td><strong>< 10Ω</strong></td><td>E5</td></tr>
    <tr><td>Resistência bobina EXV</td><td>EXV (5 fios, qualquer par)</td><td><strong>40-50Ω</strong></td><td>XF6</td></tr>
    <tr><td>Resistência comunicação P-Q</td><td>Terminal block ODU</td><td><strong>120Ω</strong></td><td>E0/E2</td></tr>
    <tr><td>Comprimento máx. fio comunicação</td><td>IDU-ODU</td><td><strong>1200m</strong></td><td>E2</td></tr>
    <tr><td>Range endereço ODU</td><td>ENC1 switch</td><td><strong>0-2</strong></td><td>E8</td></tr>
    <tr><td>Trigger pressão E7</td><td>Sensor descarga</td><td><strong>≥ 3 MPa</strong></td><td>E7</td></tr>
    <tr><td>Trigger temperatura E7</td><td>Sensor descarga</td><td><strong>< 15°C</strong></td><td>E7</td></tr>
    <tr><td>Trigger DC bus xF1 (low/high)</td><td>Barramento DC</td><td><strong>< 350V / > 700V</strong></td><td>xF1</td></tr>
  </tbody>
</table>

<h3>Cores dos Fios da EXV</h3>
<table>
  <thead>
    <tr><th>Fio</th><th>Cor</th><th>Resistência (par a par)</th></tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>Red (Vermelho)</td><td rowspan="5" style="text-align:center"><strong>40-50Ω</strong></td></tr>
    <tr><td>2</td><td>Blue (Azul)</td></tr>
    <tr><td>3</td><td>Orange (Laranja)</td></tr>
    <tr><td>4</td><td>Yellow (Amarelo)</td></tr>
    <tr><td>5</td><td>White (Branco)</td></tr>
  </tbody>
</table>

<h3>Endereçamento S7 do Módulo Inverter</h3>
<table>
  <thead>
    <tr><th>S7 DIP Switch</th><th>Endereço</th><th>Módulo</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>0</strong> (OFF)</td><td>A</td><td>Compressor inverter A (esquerdo)</td></tr>
    <tr><td><strong>1</strong> (ON)</td><td>B</td><td>Compressor inverter B (direito)</td></tr>
  </tbody>
</table>
          `,

          infobox_campo: `
<div class="infobox infobox-danger">
  <h4>⛔ xH4 — ERRO MAIS CRÍTICO DO SISTEMA INVERTER</h4>
  <p>xH4 = <strong>3 proteções consecutivas</strong> do módulo inverter. É um "código guarda-chuva" com <strong>8 causas raiz</strong> (xL0-xL9). <strong>NUNCA substitua o módulo sem antes:</strong> (1) Consultar histórico via menu "n31"; (2) Contar flashes do LED1 (LED2 aceso fixo); (3) Medir DC bus, resistência compressor e bobina fan.</p>
</div>

<div class="infobox infobox-warning">
  <h4>⚠️ xE9 — NÃO RELIGAR A ODU IMEDIATAMENTE APÓS DESLIGAR</h4>
  <p>O erro xE9 é causado por energização prematura antes da EEPROM completar escrita. <strong>Procedimento obrigatório:</strong> após desligar, <strong>aguardar até o display apagar completamente</strong>. Se religar com display aceso, parâmetros de drive ficam inconsistentes.</p>
</div>

<div class="infobox infobox-info">
  <h4>💡 XF6 — CORES DOS FIOS DA EXV PARA MEDIÇÃO</h4>
  <p>Bobina EXV: 5 fios — <strong>Red, Blue, Orange, Yellow, White</strong>. Resistência entre <strong>qualquer par = 40-50Ω</strong>. Conexão: porta <strong>CN70</strong> (Label 19). Ao reconectar, F6 <strong>pisca</strong> indicando reconexão — restart manual obrigatório.</p>
</div>

<div class="infobox infobox-tip">
  <h4>🔍 DIAGNÓSTICO RÁPIDO POR LED — SEM MULTÍMETRO</h4>
  <p><strong>LED2 apagado + LED1 apagado</strong> → Sem alimentação no módulo<br/>
  <strong>LED2 aceso + LED1 piscando</strong> → Erro (contar flashes: 8=xL0, 9=xL1, 10=xL2, 12=xL4, 13=xL5, 15=xL7, 16=xL8, 17=xL9)<br/>
  <strong>LED2 apagado + LED1 aceso fixo</strong> → Operação normal</p>
</div>
          `,
        },
        {
          id: "06-03",
          titulo: "Troubleshooting — Pressão, Temperatura, Fan e Subcódigos Avançados",
          descricao:
            "22 códigos de erro com fluxogramas Mermaid completos. Cobertura: alta/baixa pressão (P1/P2), descarga quente (P4), proteção heat exchanger (P5), fan motor (PF), e todos os subcódigos avançados de proteção (xH4, xL0-xL9). Valores de referência críticos para cada parâmetro.",
          tempo_estimado: "65 min",
          nivel: "avancado",
          tags: ["pressão", "temperatura", "fan", "subcódigos", "P1", "P2", "P4", "xH4", "xL"],
          videos: [],
          slides: [],

          // ─── CONTEÚDO COMPLETO DA AULA 6.3 ─────────────────────────
          conteudo_html: `
<h2>Bloco A — Proteções de Pressão</h2>

<h3>P1 — Alta Pressão na Descarga</h3>
<p><strong>Trigger:</strong> Pressão descarga ≥ <strong>4,3 MPa</strong>. <strong>Recover:</strong> ≤ <strong>4,0 MPa</strong> por 2 min. Reset: Automático. Sensor: <strong>CN17</strong>.</p>
<p><strong>Flowchart P1:</strong></p>
<ol>
  <li>Válvulas de serviço (stop valves) fechadas? → Abrir</li>
  <li>Conexão sensor alta pressão (CN17) solta? → Reconectar</li>
  <li>Sensor em curto ou defeituoso? (Resistência MΩ/∞ = defeito) → Substituir</li>
  <li>Excesso de refrigerante? (Tₐ descarga baixa, pressões altas) → Descarregar parte</li>
  <li>Sistema contém ar/nitrogênio? (Ruído anormal, manômetro instável) → Evacuar, vácuo, recarregar</li>
  <li>Lado de alta bloqueado? (Tubo amassado, EXV travada) → Desbloqueio</li>
  <li>Troca de calor deficiente? (Cooling: trocadores outdoor. Heating: indoor) → Inspecionar</li>
  <li>Substituir Main PCB outdoor</li>
</ol>

<h3>P2 / H5 — Baixa Pressão na Sucção</h3>
<p><strong>P2 Trigger:</strong> Pressão sucção ≤ <strong>0,05 MPa</strong>. <strong>Recover:</strong> ≥ <strong>0,15 MPa</strong>. Reset: Automático.</p>
<p><strong>H5 = Proteção Escalada:</strong> P2 aparece <strong>3× em 60 min</strong> → H5 com <strong>reinício manual</strong>.</p>
<p><strong>Flowchart P2/H5:</strong></p>
<ol>
  <li>Válvulas de serviço fechadas? → Abrir</li>
  <li>Refrigerante insuficiente? (Pressões baixas, gelo na sucção) → Adicionar + inspecionar vazamentos</li>
  <li>Lado de baixa bloqueado? (Tubo amassado, EXV, filtro sujo) → Inspecionar</li>
  <li>Troca de calor do evaporador deficiente? → Inspecionar</li>
  <li>Substituir Main PCB outdoor</li>
</ol>

<h3>H8 — Sensor de Alta Pressão com Erro</h3>
<p><strong>Trigger:</strong> Pressão descarga ≤ <strong>0,3 MPa</strong>. <strong>Recover:</strong> > 0,3 MPa. Sensor: <strong>CN17</strong>.</p>
<p><strong>Flowchart H8:</strong></p>
<ol>
  <li>Conexão CN17 solta? → Reconectar</li>
  <li>Sensor curto/defeituoso? (MΩ/∞ = defeito) → Substituir</li>
  <li>Refrigerante insuficiente? → Adicionar</li>
  <li>Lado de baixa bloqueado? → Inspecionar</li>
  <li>Troca de calor deficiente? → Inspecionar</li>
  <li>Substituir Main PCB</li>
</ol>

<hr/>

<h2>Bloco B — Proteções de Temperatura</h2>

<h3>P4 / H6 — Temperatura de Descarga</h3>
<p><strong>P4 Trigger:</strong> T7C1/2 ≥ <strong>120°C</strong>. <strong>Recover:</strong> ≤ <strong>90°C</strong>. Reset: Automático.</p>
<p><strong>H6 = Proteção Escalada:</strong> P4 aparece <strong>3× em 100 min</strong> → H6 com <strong>reinício manual</strong>.</p>
<p><strong>Flowchart P4/H6:</strong></p>
<ol>
  <li>Válvulas de serviço fechadas? → Abrir</li>
  <li>Sensores CN4/CN5 soltos? → Reconectar</li>
  <li>Sensores curto/defeituosos? (ref. Table 6-3.2) → Substituir</li>
  <li>Refrigerante insuficiente? → Adicionar + inspecionar vazamentos</li>
  <li>Sistema bloqueado? → Inspecionar</li>
  <li>Carga térmica interna excessiva? → Taxa de combinação < 130%</li>
  <li>Ar/nitrogênio no sistema? → Evacuar, vácuo, recarregar</li>
  <li>Troca de calor deficiente? → Inspecionar</li>
  <li>Substituir Main PCB</li>
</ol>

<h3>P5 — Temperatura do Trocador Outdoor</h3>
<p><strong>Trigger:</strong> T3 ≥ <strong>65°C</strong>. <strong>Recover:</strong> < <strong>55°C</strong>. Sensor: <strong>CN1</strong>. Reset: Automático.</p>
<p><strong>Flowchart P5:</strong> Válvulas → Sensor CN1 → Carga térmica → Ar/N₂ → Condensador → Lado de alta bloqueado → Main PCB.</p>

<h3>PL / C7 — Temperatura do Módulo Inversor (Heat Sink)</h3>
<p><strong>PL Trigger:</strong> TF1/2 ≥ <strong>80°C</strong>. <strong>Recover:</strong> < <strong>65°C</strong>. Sensores: <strong>CN3/CN3_1</strong>.</p>
<p><strong>C7 = Proteção Escalada:</strong> PL aparece <strong>3× em 100 min</strong> → C7 com <strong>reinício manual</strong>.</p>
<p><strong>Flowchart PL/C7:</strong></p>
<ol>
  <li>Heat sink bloqueado/sujo? → Limpar ou substituir</li>
  <li>Parafusos do heat sink soltos? → Apertar (boa conexão térmica)</li>
  <li>Sensor CN3/CN3_1 solto? → Reconectar</li>
  <li>Sensor curto/defeituoso? (ref. Table 6-3.3) → Substituir</li>
  <li>Substituir Main PCB</li>
</ol>

<h3>PP — Superheat Insuficiente (Risco de Liquid Slugging)</h3>
<p><strong>Trigger:</strong> Superheat ≤ <strong>0°C por 20 min</strong> OU ≤ <strong>5°C por 60 min</strong>. Sensores: <strong>CN4, CN5</strong>.</p>
<p><strong>⚠️ PP indica risco de retorno de líquido ao compressor!</strong></p>
<p><strong>Flowchart PP:</strong></p>
<ol>
  <li>Sensores CN4/CN5 soltos? → Reconectar</li>
  <li>Sensores curto/defeituosos? → Substituir</li>
  <li>Isolamento térmico do sensor inadequado? → Garantir isolamento</li>
  <li>Excesso de refrigerante? → Descarregar parte</li>
  <li>Pressão descarga muito alta? → Aplicar troubleshooting P1</li>
  <li>Substituir Main PCB</li>
</ol>

<hr/>

<h2>Bloco C — Fan Module (xP9 / xH9)</h2>
<p><strong>xP9 Trigger:</strong> Velocidade fan muito baixa. <strong>xH9 = Proteção Escalada:</strong> xP9 aparece <strong>10× em 120 min</strong> → reinício manual.</p>
<p><strong>Referência:</strong> Tensão DC normal entre P e N no fan module = <strong>540V DC</strong>.</p>
<p><strong>Flowchart xP9/xH9:</strong></p>
<ol>
  <li>ENC2 não coincide com a plaqueta? → Corrigir configuração</li>
  <li>Fios de alimentação/comunicação desconectados? → Reconectar</li>
  <li>Motor do fan bloqueado/defeituoso? → Remover obstrução ou substituir</li>
  <li>Alimentação anormal? → Verificar</li>
  <li>Tensão P-N no fan module anormal? (≠ 540V DC) → Substituir placa AC filter</li>
  <li>Substituir fan module resolve? → Fan module defeituoso</li>
  <li>Substituir Main PCB</li>
</ol>

<hr/>

<h2>Bloco D — Subcódigos xL do Módulo Inversor</h2>
<p>Quando xH4 aparece, os subcódigos xL identificam a causa raiz:</p>

<h3>xL0 — Inverter Module Protection</h3>
<ol>
  <li>Fiação compressor incorreta? → Reconectar</li>
  <li>Resistência entre 3 fases > 5Ω? → Substituir compressor</li>
  <li>Resistência isolação < 100kΩ? → Substituir compressor</li>
  <li>IPM soltos ou sem gel silicone? → Apertar/reaplicar</li>
  <li>Compressor < 12h preheating? → Garantir tempo</li>
  <li>Não resolveu? → Verificar IPM → Substituir módulo inversor</li>
</ol>

<h3>xL1 — DC Bus Low Voltage (< 350V)</h3>
<ol>
  <li>Alimentação anormal? → Verificar</li>
  <li>Tensão DC P-N anormal? → Reactor funciona? → Substituir reactor ou módulo inversor</li>
</ol>

<h3>xL2 — DC Bus High Voltage (> 700V)</h3>
<ol>
  <li>Alimentação anormal? → Verificar</li>
  <li>Tensão DC P-N anormal? → Substituir 3-phase bridge rectifier ou módulo inversor</li>
</ol>

<h3>xL4 — MCE Error (Multi-Cause)</h3>
<ol>
  <li>Ventilação ODU inadequada? → Remover obstruções</li>
  <li>Stop valves fechadas? → Abrir</li>
  <li>Fiação compressor incorreta? → Reconectar</li>
  <li>Endereço S7 e sensor Tₐ incorretos? → Resetar</li>
  <li>Resistência fases > 5Ω ou isolação < 100kΩ? → Substituir compressor</li>
  <li>Substituir inverter board → Investigar P1/P3</li>
</ol>

<h3>xL5 / xL7 — Desmagnetização e Sequência de Fase</h3>
<ol>
  <li>Fiação compressor solta? → Reconectar</li>
  <li>Circuito aberto U/V/W? → Substituir compressor</li>
  <li>Nenhum anterior? → Substituir módulo inversor</li>
</ol>

<h3>xL8 / xL9 — Variação de Frequência</h3>
<ol>
  <li>Stop valves fechadas? → Abrir</li>
  <li>Fiação compressor incorreta? → Reconectar</li>
  <li>Resistência fases > 5Ω ou isolação < 100kΩ? → Substituir compressor</li>
  <li>< 12h preheating? → Garantir tempo</li>
  <li>Substituir inverter board → Investigar P1/P3</li>
</ol>

<hr/>

<h2>Procedimento de Substituição de Compressor (8 Passos)</h2>
<ol>
  <li><strong>Remover compressor</strong> e drenar óleo (agitar antes, drenar por tubo de descarga)</li>
  <li><strong>Inspecionar óleo:</strong> Claro/transparente = OK. Escuro/preto = sistema contaminado</li>
  <li><strong>Verificar óleo nos outros compressores:</strong> Limpo → Passo 6. Contaminado → Passos 4-5</li>
  <li><strong>Substituir separadores de óleo e acumuladores</strong> se contaminado</li>
  <li><strong>Verificar filtros</strong> entre stop valve e válvula 4 vias</li>
  <li><strong>Instalar compressor novo</strong> (se houve drenagem, limpar com óleo limpo)</li>
  <li><strong>Adicionar óleo FV50S:</strong> 8-12HP→4L, 14-16HP→5L, 18-22HP→6L, 24-30HP→9L</li>
  <li><strong>Vácuo completo e recarga</strong> de refrigerante</li>
</ol>
          `,

          tabelas_html: `
<h3>Todos os Códigos de Proteção — Referência Completa</h3>
<table>
  <thead>
    <tr><th>Código</th><th>Proteção</th><th>Trigger</th><th>Recover</th><th>Reset</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>P1</strong></td><td>Alta pressão descarga</td><td>≥ 4,3 MPa</td><td>≤ 4,0 MPa / 2 min</td><td>Auto</td></tr>
    <tr><td><strong>P2</strong></td><td>Baixa pressão sucção</td><td>≤ 0,05 MPa</td><td>≥ 0,15 MPa</td><td>Auto</td></tr>
    <tr><td><strong>H5</strong></td><td>P2 × 3 em 60 min</td><td>Escalado</td><td>—</td><td>Manual</td></tr>
    <tr><td><strong>H8</strong></td><td>Sensor HP com erro</td><td>≤ 0,3 MPa</td><td>> 0,3 MPa</td><td>Auto</td></tr>
    <tr><td><strong>P4</strong></td><td>Temperatura descarga</td><td>T7C ≥ 120°C</td><td>T7C ≤ 90°C</td><td>Auto</td></tr>
    <tr><td><strong>H6</strong></td><td>P4 × 3 em 100 min</td><td>Escalado</td><td>—</td><td>Manual</td></tr>
    <tr><td><strong>P5</strong></td><td>Temperatura trocador ODU</td><td>T3 ≥ 65°C</td><td>T3 < 55°C</td><td>Auto</td></tr>
    <tr><td><strong>xPL</strong></td><td>Temp. módulo inversor</td><td>TF ≥ 80°C</td><td>TF < 65°C</td><td>Auto</td></tr>
    <tr><td><strong>C7</strong></td><td>xPL × 3 em 100 min</td><td>Escalado</td><td>—</td><td>Manual</td></tr>
    <tr><td><strong>PP</strong></td><td>Superheat insuficiente</td><td>≤ 0°C/20min ou ≤5°C/60min</td><td>Normal</td><td>Auto</td></tr>
    <tr><td><strong>xP9</strong></td><td>Fan module protection</td><td>Fan speed baixa</td><td>Normal</td><td>Auto</td></tr>
    <tr><td><strong>xH9</strong></td><td>xP9 × 10 em 120 min</td><td>Escalado</td><td>—</td><td>Manual</td></tr>
    <tr><td><strong>H7</strong></td><td>Nº evaporadoras ≠ config</td><td>Detecção ≠ config</td><td>= config</td><td>Auto</td></tr>
    <tr><td><strong>yHd</strong></td><td>Slave malfunction</td><td>Slave com falha</td><td>Slave OK</td><td>Auto</td></tr>
  </tbody>
</table>

<h3>Subcódigos xL — Ações Primárias</h3>
<table>
  <thead>
    <tr><th>Subcódigo</th><th>Nome</th><th>Causa Principal</th><th>Ação Primária</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>xL0</strong></td><td>Inverter protect</td><td>IPM defeituoso</td><td>Fiação → resistência → isolação → IPM → inverter</td></tr>
    <tr><td><strong>xL1</strong></td><td>DC bus low</td><td>< 350V</td><td>Alimentação → reactor → inverter</td></tr>
    <tr><td><strong>xL2</strong></td><td>DC bus high</td><td>> 700V</td><td>Alimentação → bridge rectifier → inverter</td></tr>
    <tr><td><strong>xL4</strong></td><td>MCE error</td><td>Multi-causa</td><td>Ventilação → valves → fiação → S7 → compressor → inverter</td></tr>
    <tr><td><strong>xL5</strong></td><td>Demagnetization</td><td>Motor desmagnetizado</td><td>Fiação → U/V/W aberto → compressor/inverter</td></tr>
    <tr><td><strong>xL7</strong></td><td>Phase sequence</td><td>Sequência errada</td><td>Fiação → U/V/W → compressor/inverter</td></tr>
    <tr><td><strong>xL8</strong></td><td>Freq > 15Hz/s</td><td>Instabilidade</td><td>Valves → fiação → compressor → preheating → inverter</td></tr>
    <tr><td><strong>xL9</strong></td><td>Freq ≠ target</td><td>Real ≠ target > 15Hz</td><td>Mesmo procedimento xL8</td></tr>
  </tbody>
</table>

<h3>Sensor de Temperatura Ambiente/Trocador (kΩ)</h3>
<table>
  <thead>
    <tr><th>Temp (°C)</th><th>Resistência (kΩ)</th><th>Temp (°C)</th><th>Resistência (kΩ)</th></tr>
  </thead>
  <tbody>
    <tr><td>-20</td><td>115,3</td><td>25</td><td><strong>10,00</strong></td></tr>
    <tr><td>-10</td><td>62,28</td><td>30</td><td>7,971</td></tr>
    <tr><td>0</td><td>35,20</td><td>40</td><td>5,175</td></tr>
    <tr><td>10</td><td>20,72</td><td>50</td><td>3,451</td></tr>
    <tr><td>15</td><td>16,12</td><td>60</td><td>2,358</td></tr>
    <tr><td>20</td><td>12,64</td><td>80</td><td>1,174</td></tr>
  </tbody>
</table>

<h3>Sensor Temp. Topo Compressor/Descarga (kΩ)</h3>
<table>
  <thead>
    <tr><th>Temp (°C)</th><th>Resistência (kΩ)</th><th>Temp (°C)</th><th>Resistência (kΩ)</th></tr>
  </thead>
  <tbody>
    <tr><td>-20</td><td>542,7</td><td>25</td><td><strong>54,89</strong></td></tr>
    <tr><td>-10</td><td>307,7</td><td>40</td><td>29,15</td></tr>
    <tr><td>0</td><td>180,9</td><td>60</td><td>13,59</td></tr>
    <tr><td>10</td><td>109,8</td><td>80</td><td>6,859</td></tr>
    <tr><td>20</td><td>68,66</td><td>100</td><td>3,702</td></tr>
    <tr><td>—</td><td>—</td><td>120</td><td>2,117</td></tr>
  </tbody>
</table>

<h3>Óleo FV50S — Quantidades por Capacidade</h3>
<table>
  <thead>
    <tr><th>Capacidade</th><th>Óleo FV50S</th></tr>
  </thead>
  <tbody>
    <tr><td>8-12HP</td><td><strong>4 litros</strong></td></tr>
    <tr><td>14-16HP</td><td><strong>5 litros</strong></td></tr>
    <tr><td>18-22HP</td><td><strong>6 litros</strong></td></tr>
    <tr><td>24-30HP</td><td><strong>9 litros</strong></td></tr>
  </tbody>
</table>
          `,

          infobox_campo: `
<div class="infobox infobox-danger">
  <h4>⛔ PROTEÇÕES ESCALADAS (H5, H6, C7, xH9)</h4>
  <p>Quatro códigos usam <strong>proteção escalada</strong>: quando um erro simples se repete, o sistema ativa bloqueio com <strong>reinício manual</strong>. P2→H5 (3×/60min), P4→H6 (3×/100min), PL→C7 (3×/100min), xP9→xH9 (10×/120min). Indicam <strong>problema sistêmico</strong> — nunca apenas religar sem investigar causa raiz.</p>
</div>

<div class="infobox infobox-warning">
  <h4>⚠️ ÓLEO FV50S — EXCLUSIVO E CONTAMINAÇÃO</h4>
  <p>Na substituição de compressor, usar <strong>exclusivamente FV50S</strong>. Óleo escuro/preto = contaminação, exigindo limpeza de todos compressores, separadores, acumuladores e filtros. Quantidades: <strong>4L</strong> (8-12HP), <strong>5L</strong> (14-16HP), <strong>6L</strong> (18-22HP), <strong>9L</strong> (24-30HP).</p>
</div>

<div class="infobox infobox-info">
  <h4>💡 TENSÕES DC DE REFERÊNCIA</h4>
  <p><strong>Módulo inversor P-N = 450-650V</strong> (normal). <350V = xL1, >700V = xL2. <strong>Fan module P-N = 540V DC</strong>. Sempre medir com multímetro DC antes de substituir placas. Resistência fases compressor > 5Ω ou isolação < 100kΩ = substituir compressor.</p>
</div>

<div class="infobox infobox-tip">
  <h4>🔍 LEITURA RÁPIDA DOS SENSORES DE TEMPERATURA</h4>
  <p>A 25°C: sensor ambiente/trocador = ~<strong>10 kΩ</strong>, sensor topo compressor/descarga = ~<strong>55 kΩ</strong>. Valor muito baixo = curto. MΩ/infinito = aberto. Inconsistente com temp. = defeituoso. Consultar Tables 6-3.1 e 6-3.2.</p>
</div>
          `,
        },
        {
          id: "06-04",
          titulo: "Troubleshooting Avançado — RS-485, IPM/Retificador, Tubulação e Contaminação",
          descricao:
            "O tópico mais avançado do treinamento. 4 blocos: (A) Comunicação RS-485 — topologia, terminação 120Ω, ground loops, diagnóstico com osciloscópio; (B) IPM e Retificador — teste modo diodo step-by-step, segurança DC bus 450-650V, Megger; (C) Tubulação — oil logging, P-traps, velocidade mínima 1500 FPM; (D) Contaminação — evacuação 500µ, hidrólise POE vs pirólise R410A, copper plating galvânico, destruição dos scrolls.",
          tempo_estimado: "75 min",
          nivel: "avancado",
          tags: [
            "RS-485",
            "comunicação",
            "IPM",
            "retificador",
            "Megger",
            "tubulação",
            "oil-return",
            "contaminação",
            "copper-plating",
            "evacuação",
          ],
          videos: [],
          slides: [],

          // ─── CONTEÚDO COMPLETO DA AULA 6.4 ─────────────────────────
          conteudo_html: `
<h2>Bloco A — Comunicação RS-485 Avançada</h2>

<h3>Arquitetura da Rede RS-485</h3>
<p>O VRF usa comunicação serial <strong>RS-485 half-duplex</strong> a <strong>9600 baud</strong> com CRC. Terminais:</p>
<ul>
  <li><strong>P</strong> = Data+ (linha diferencial positiva)</li>
  <li><strong>Q</strong> = Data- (linha diferencial negativa)</li>
  <li><strong>E</strong> = Signal Ground (referência de terra)</li>
  <li><strong>M1/M2</strong> = HyperLink (rede secundária V8+)</li>
</ul>

<h3>Topologia Obrigatória: Daisy-Chain</h3>
<ul>
  <li><strong>Daisy-chain</strong> ✅ Obrigatória — impedância controlada</li>
  <li><strong>Estrela (star)</strong> ❌ Proibida — reflexões destrutivas</li>
  <li><strong>T / stub</strong> ❌ Proibida — descasamento de impedância</li>
</ul>
<p>Terminação: <strong>dois resistores de 120Ω</strong> (extremidades). Resistência total P↔Q (OFF) = <strong>≈60Ω</strong> (paralelo).</p>

<h3>EMI — Interferência Eletromagnética</h3>
<ul>
  <li>Separação mínima paralelo: <strong>5-30 cm</strong></li>
  <li>Cruzamento: <strong>exclusivamente a 90°</strong></li>
  <li>Conduto compartilhado: <strong>PROIBIDO</strong></li>
  <li>Mitigação: anel de ferrite nos cabos PQE/M1M2</li>
</ul>

<h3>Ground Loops — O Erro Mais Comum</h3>
<p>Aterrar o shield nas <strong>duas extremidades</strong> = ground loop → corrente parasita → ruído → E0/E2.</p>
<p><strong>Solução — Aterramento Single-Ended:</strong></p>
<ul>
  <li>Shield na ODU (master): ✅ Aterrar no chassis junto ao bloco PQE</li>
  <li>Shield nas IDUs: ❌ Deixar flutuando (floating)</li>
  <li>Emendas entre IDUs: shield twisted + isolado com fita</li>
</ul>

<h3>Diagnóstico com Multímetro — Checklist</h3>
<p><strong>Teste 1 — Resistência (Sistema OFF):</strong></p>
<ul>
  <li>P↔Q = <strong>≈60Ω</strong> (normal) | 120Ω (falta 1 resistor) | ∞ (sem terminação) | ≈0Ω (curto)</li>
  <li>P↔GND e Q↔GND = <strong>∞</strong> (normal) | Valor finito (isolação comprometida)</li>
</ul>
<p><strong>Teste 2 — Tensão DC Bias (Sistema ON):</strong></p>
<ul>
  <li>V diferencial P-Q = <strong>200-500 mV DC</strong></li>
  <li>V(P) ref. E e V(Q) ref. E = <strong>2,5-2,7V DC</strong> (Midea)</li>
  <li>V(E master) − V(E distante) < <strong>1V</strong> = OK | > <strong>2V</strong> = ground loop severo</li>
</ul>

<h3>Diagnóstico com Osciloscópio</h3>
<p>Ch1 = P, Ch2 = Q, Ground = E, Math = Ch1−Ch2, Timebase ~100µs/div:</p>
<ul>
  <li>Onda quadrada limpa ±1,5V = ✅ <strong>Normal</strong></li>
  <li>Ringing após transições = <strong>Impedância descasada</strong> (falta 120Ω / stubs)</li>
  <li>Trace "grosso" / espículas >2V = <strong>EMI externo</strong></li>
  <li>Bordas arredondadas / amplitude <200mV = <strong>Bus sobrecarregado</strong></li>
</ul>

<hr/>

<h2>Bloco B — IPM e Retificador Ponte Trifásico</h2>

<h3>⛔ Segurança — Descarga do DC Bus</h3>
<p><strong>PERIGO LETAL:</strong> Capacitores armazenam <strong>450-650V DC</strong> com sistema desligado.</p>
<ol>
  <li>Desligar disjuntor da alimentação trifásica</li>
  <li>Aguardar mínimo <strong>15 minutos</strong></li>
  <li>Verificar V(P,N) < <strong>50V</strong> antes de proceder</li>
  <li>Nunca curto direto P-N — usar resistor 10kΩ/10W se necessário</li>
</ol>

<h3>Teste com Modo Diodo (NÃO Ohms!)</h3>
<p>Forward bias saudável = <strong>0,35-0,70V</strong> | Reverse = <strong>OL</strong> | Curto = <strong>0V</strong> (bip)</p>

<h3>Teste do Retificador Ponte — 12 Medições</h3>
<p><strong>Fase 1 — Diodos Superiores (Rail+):</strong> Preta em P, Vermelha em L1/L2/L3 → <strong>0,4-0,7V</strong></p>
<p><strong>Fase 2 — Diodos Inferiores (Rail−):</strong> Vermelha em N, Preta em L1/L2/L3 → <strong>0,4-0,7V</strong></p>
<p><strong>Fase 3 — Reversa:</strong> Inverter polaridade → todas <strong>OL</strong>. Se valor → diodo vazando → substituir.</p>

<h3>Teste do IPM — 8 Medições</h3>
<p>⚠️ <strong>Desconectar U/V/W do compressor antes de testar!</strong></p>
<p><strong>FWDs High-Side:</strong> Preta em P, Vermelha em U/V/W → <strong>0,35-0,50V</strong></p>
<p><strong>FWDs Low-Side:</strong> Vermelha em N, Preta em U/V/W → <strong>0,35-0,50V</strong></p>
<p><strong>DC Bus Interno:</strong> P→N forward = <strong>0,7-1,2V</strong> (2 FWDs série) | Reverso = <strong>OL</strong></p>

<h3>Teste Megger — Isolação do Compressor</h3>
<ul>
  <li>Resistência entre fases (U↔V, V↔W, U↔W): diferença < <strong>5Ω</strong></li>
  <li>Isolação (Megger 500V): cada fase ↔ chassis > <strong>100 MΩ</strong> | < 100kΩ → substituir</li>
</ul>

<h3>Ordem de Diagnóstico para Subcódigos xL</h3>
<ol>
  <li>Descarregar DC bus, V(P,N) < 50V</li>
  <li>Desconectar U/V/W do compressor</li>
  <li>Testar IPM (modo diodo)</li>
  <li>Testar retificador (modo diodo)</li>
  <li>Reconectar U/V/W, testar resistência entre fases</li>
  <li>Teste Megger de isolação</li>
  <li>Verificar gel silicone no heat sink</li>
</ol>

<hr/>

<h2>Bloco C — Tubulação VRF e Oil Return</h2>

<h3>Oil Logging — A Cascata Parasitária Silenciosa</h3>
<p>Erro de tubulação → velocidade cai → óleo se separa do vapor → <strong>oil logging</strong> → compressor perde óleo → P4/H6 → óleo no evaporador → P2/H5 → flash gas → P1.</p>

<h3>Regras Críticas</h3>
<ul>
  <li><strong>Riser vertical (sucção):</strong> velocidade mínima ≥ <strong>1.500 FPM</strong> (7,62 m/s)</li>
  <li><strong>P-trap na base</strong> de cada riser vertical de sucção: <strong>Obrigatório</strong></li>
  <li><strong>P-trap intermediário:</strong> a cada <strong>10 metros</strong> de altura vertical</li>
  <li>Sem P-trap → óleo escorre continuamente → oil logging permanente</li>
</ul>

<h3>Erros de Tubulação → Códigos de Erro</h3>
<ul>
  <li>Sem P-trap → oil starvation → <strong>P4/H6</strong></li>
  <li>Riser oversized (diâmetro grande) → velocidade < 1500 FPM → <strong>P4/H6 + P2/H5</strong></li>
  <li>Linha líquida longa sem subcooling → flash gas → <strong>P1</strong></li>
  <li>Horizontal sem inclinação → restrição → <strong>P2/H5</strong></li>
  <li>Tubo amassado/bloqueado → <strong>P2/H5 ou P1</strong></li>
</ul>

<h3>Oil Return Mode — Recuperação Automática</h3>
<ul>
  <li>Frequência: a cada <strong>6-8 horas</strong> de operação</li>
  <li>Compressor acelera a <strong>124 Hz</strong></li>
  <li>Todas EEVs abrem totalmente (<strong>300-700 pulsos</strong>)</li>
  <li>Meta: velocidade > 1.500 FPM para varrer óleo</li>
  <li><strong>Limitação:</strong> não substitui P-traps corretamente instalados!</li>
</ul>

<hr/>

<h2>Bloco D — Contaminação e Falha do Compressor</h2>

<h3>Evacuação — Ponto Crítico #1</h3>
<p><strong>A causa #1 de falha prematura de compressor VRF é evacuação inadequada.</strong></p>
<ul>
  <li>Vácuo mínimo: <strong>500 microns</strong> (0,5 mmHg)</li>
  <li>Holding test: manter 30 min sem subir</li>
  <li>Se subir: vazamento → localizar e corrigir</li>
</ul>

<h3>Lei de Dalton — Ar/Umidade no Sistema</h3>
<p>P_total = P_refrigerante + P_ar → Pressão total ↑ → Tₐ condensação ↑ → Tₐ descarga ↑↑ → Eficiência ↓↓</p>

<h3>Dois Caminhos para Destruição</h3>
<p><strong>Pathway A — POE (Polyolester):</strong> Éster + H₂O → Ácido Carboxílico + Álcool (<strong>autocatalítico</strong>). TAN sobe rapidamente. Entalpia ativação: 11,8 kcal/mol.</p>
<p><strong>Pathway B — PVE/FV50S:</strong> R410A decompõe > <strong>250°C</strong> → <strong>HF</strong> (ácido fluorídrico) + CO₂. PVE resiste à hidrólise, mas o <strong>refrigerante decompõe</strong>.</p>
<p>⚠️ <strong>Resultado idêntico:</strong> ambos → ácido → corrosão cobre → íons Cu²⁺ → copper plating → destruição.</p>

<h3>Copper Plating — Reação Galvânica</h3>
<p><strong>Reação:</strong> Cu²⁺ + Fe⁰ → Cu⁰ (deposita no aço) + Fe²⁺ (dissolve)</p>
<ul>
  <li>Cu²⁺/Cu⁰ = <strong>+0,34V</strong> (mais nobre, catódico)</li>
  <li>Fe²⁺/Fe⁰ = <strong>−0,44V</strong> (menos nobre, anódico)</li>
  <li>ΔG negativo = reação <strong>espontânea</strong>, sem corrente externa</li>
</ul>

<h3>Destruição do Scroll — 8 Etapas</h3>
<ol>
  <li>TAN sobe → óleo vira lama abrasiva</li>
  <li>Regime muda: hidrodinâmico → boundary (metal-metal)</li>
  <li>Tolerâncias < 20µm comprometidas</li>
  <li>Copper plating espessa nos bearings e scrolls</li>
  <li>Clearances zero</li>
  <li>Seized/Galling — scrolls soldam a frio</li>
  <li>Locked rotor — motor puxa LRA contínuo</li>
  <li><strong>Burnout</strong> — isolação derrete, curto, arco elétrico</li>
</ol>

<h3>Identificação de Contaminação em Campo</h3>
<ul>
  <li><strong>Cor do óleo:</strong> Claro = OK. Escuro/preto/partículas = contaminado</li>
  <li><strong>Cheiro ácido:</strong> degradação química</li>
  <li><strong>Copper plating:</strong> camada acobreada nas superfícies internas</li>
  <li><strong>TAN:</strong> kit de acidez → alto = contaminação</li>
  <li><strong>Megger:</strong> isolação < 100kΩ = motor danificado</li>
</ul>
          `,

          tabelas_html: `
<h3>Valores de Referência Críticos — Tópico 6.4</h3>
<table>
  <thead>
    <tr><th>Parâmetro</th><th>Valor</th><th>Contexto</th></tr>
  </thead>
  <tbody>
    <tr><td>R(P↔Q) rede RS-485</td><td><strong>≈60Ω</strong></td><td>2× 120Ω em paralelo</td></tr>
    <tr><td>V bias diferencial P-Q</td><td><strong>200-500 mV DC</strong></td><td>Bus idle saudável</td></tr>
    <tr><td>V(P) e V(Q) ref. E</td><td><strong>2,5-2,7V DC</strong></td><td>Midea/Trane</td></tr>
    <tr><td>Ground potential máx</td><td><strong>< 1V DC</strong></td><td>Entre E master e distante</td></tr>
    <tr><td>V(P,N) inversor normal</td><td><strong>450-650V DC</strong></td><td>DC bus energizado</td></tr>
    <tr><td>V(P,N) fan module</td><td><strong>540V DC</strong></td><td>DC bus energizado</td></tr>
    <tr><td>Diodo mode — forward</td><td><strong>0,35-0,70V</strong></td><td>IPM e retificador</td></tr>
    <tr><td>Diodo mode — reverse</td><td><strong>OL</strong></td><td>IPM e retificador</td></tr>
    <tr><td>DC bus IPM P→N</td><td><strong>0,7-1,2V</strong></td><td>2 FWDs em série</td></tr>
    <tr><td>Resistência fases compressor</td><td><strong>Diferença < 5Ω</strong></td><td>U↔V, V↔W, U↔W</td></tr>
    <tr><td>Isolação (Megger 500V)</td><td><strong>> 100 MΩ</strong></td><td>Cada fase ↔ chassis</td></tr>
    <tr><td>Isolação mín aceitável</td><td><strong>≥ 100 kΩ</strong></td><td>Abaixo → substituir</td></tr>
    <tr><td>Velocidade mín riser</td><td><strong>≥ 1.500 FPM</strong></td><td>7,62 m/s para oil return</td></tr>
    <tr><td>Frequência oil return</td><td><strong>124 Hz</strong></td><td>Compressor em surge</td></tr>
    <tr><td>EEV oil return</td><td><strong>300-700 pulsos</strong></td><td>Todas IDUs abertas</td></tr>
    <tr><td>Vácuo mín evacuação</td><td><strong>500 microns</strong></td><td>0,5 mmHg</td></tr>
    <tr><td>T decomposição R410A</td><td><strong>> 250°C</strong></td><td>Pirólise com NCGs</td></tr>
    <tr><td>Potencial Cu²⁺/Cu⁰</td><td><strong>+0,34V</strong></td><td>Mais nobre (catódico)</td></tr>
    <tr><td>Potencial Fe²⁺/Fe⁰</td><td><strong>−0,44V</strong></td><td>Menos nobre (anódico)</td></tr>
    <tr><td>Tolerância scroll</td><td><strong>< 20 µm</strong></td><td>Folga radial/axial</td></tr>
    <tr><td>Óleo exclusivo</td><td><strong>FV50S (PVE)</strong></td><td>Idemitsu Daphne Hermetic</td></tr>
  </tbody>
</table>

<h3>Subcódigos xL ↔ Componente Mais Provável</h3>
<table>
  <thead>
    <tr><th>Subcódigo</th><th>Componente</th><th>Teste Prioritário</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>xL0</strong></td><td>IPM shorted/open</td><td>Modo diodo no IPM</td></tr>
    <tr><td><strong>xL1</strong></td><td>Retificador + Reactor</td><td>Modo diodo retificador + V(P,N)</td></tr>
    <tr><td><strong>xL2</strong></td><td>Retificador</td><td>Modo diodo retificador</td></tr>
    <tr><td><strong>xL4</strong></td><td>Compressor + IPM</td><td>Fases + Megger + IPM</td></tr>
    <tr><td><strong>xL5</strong></td><td>Compressor motor</td><td>Fases U/V/W (aberto)</td></tr>
    <tr><td><strong>xL7</strong></td><td>Fiação U/V/W</td><td>Conexão + fases</td></tr>
  </tbody>
</table>

<h3>Retificador Ponte — 12 Medições (Modo Diodo)</h3>
<table>
  <thead>
    <tr><th>Fase</th><th>Preta (−)</th><th>Vermelha (+)</th><th>Esperado</th></tr>
  </thead>
  <tbody>
    <tr><td rowspan="3">Superiores</td><td>P</td><td>L1</td><td>0,4-0,7V</td></tr>
    <tr><td>P</td><td>L2</td><td>0,4-0,7V</td></tr>
    <tr><td>P</td><td>L3</td><td>0,4-0,7V</td></tr>
    <tr><td rowspan="3">Inferiores</td><td>L1</td><td>N</td><td>0,4-0,7V</td></tr>
    <tr><td>L2</td><td>N</td><td>0,4-0,7V</td></tr>
    <tr><td>L3</td><td>N</td><td>0,4-0,7V</td></tr>
    <tr><td colspan="3">Reversa (6 medições invertidas)</td><td><strong>Todas OL</strong></td></tr>
  </tbody>
</table>

<h3>IPM — 8 Medições (Modo Diodo)</h3>
<table>
  <thead>
    <tr><th>Fase</th><th>Preta (−)</th><th>Vermelha (+)</th><th>Esperado</th></tr>
  </thead>
  <tbody>
    <tr><td rowspan="3">High-Side</td><td>P</td><td>U</td><td>0,35-0,50V</td></tr>
    <tr><td>P</td><td>V</td><td>0,35-0,50V</td></tr>
    <tr><td>P</td><td>W</td><td>0,35-0,50V</td></tr>
    <tr><td rowspan="3">Low-Side</td><td>U</td><td>N</td><td>0,35-0,50V</td></tr>
    <tr><td>V</td><td>N</td><td>0,35-0,50V</td></tr>
    <tr><td>W</td><td>N</td><td>0,35-0,50V</td></tr>
    <tr><td>DC Bus</td><td>P</td><td>N</td><td>0,7-1,2V</td></tr>
    <tr><td>DC Bus Rev</td><td>N</td><td>P</td><td><strong>OL</strong></td></tr>
  </tbody>
</table>
          `,

          infobox_campo: `
<div class="infobox infobox-danger">
  <h4>⛔ GROUND LOOP: O ASSASSINO SILENCIOSO DA COMUNICAÇÃO</h4>
  <p>Em E0/E2, a causa mais comum NÃO é cabo rompido — é <strong>ground loop</strong> pelo aterramento do shield nas duas pontas. Solução: aterrar shield <strong>apenas na ODU master</strong>, flutuando nas IDUs. Confirme: R(P↔Q) = ≈60Ω e V(E) entre extremidades < 1V.</p>
</div>

<div class="infobox infobox-warning">
  <h4>⚠️ MODO DIODO: O TESTE QUE SALVA TEMPO E DINHEIRO</h4>
  <p>Antes de substituir IPM ou retificador, teste com multímetro em <strong>modo diodo</strong> (NÃO Ohms!). Forward = 0,35-0,70V; Reverso = OL. Se 0V → curto → substituir. Se OL em forward → aberto → substituir. <strong>Desconectar U/V/W do compressor antes!</strong></p>
</div>

<div class="infobox infobox-info">
  <h4>💡 TUBULAÇÃO ERRADA = COMPRESSOR MORTO EM MESES</h4>
  <p>P-trap ausente em riser vertical causa <strong>oil logging</strong> silencioso. Óleo migra para evaporadores, compressor opera sem lubrificação → P4→H6→carbonização→falha mecânica. Oil return automático (124 Hz) <strong>não substitui P-traps</strong>. Velocidade mín: 1.500 FPM.</p>
</div>

<div class="infobox infobox-tip">
  <h4>🔍 EVACUAÇÃO INADEQUADA: A SENTENÇA DE MORTE QUÍMICA</h4>
  <p>Vácuo < 500 microns? Ar + umidade desencadeiam cascata irreversível. <strong>POE:</strong> hidrólise autocatalítica → ácido carboxílico. <strong>PVE (FV50S):</strong> R410A decompõe > 250°C → HF. Ambos → corrosão cobre → Cu²⁺ transportado → <strong>copper plating galvânico</strong> nos scrolls (Cu²⁺+Fe→Cu⁰+Fe²⁺). Tolerância scroll < 20µm destruída → burnout.</p>
</div>
          `,
        },
      ],
    },
  ],
};
