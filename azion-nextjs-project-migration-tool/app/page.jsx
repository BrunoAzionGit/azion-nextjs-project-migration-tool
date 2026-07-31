export default function Home() {
  return (
    <>
      <header style={{ backgroundColor: '#1c1c1c', color: 'white', padding: '2.5rem 1rem', textAlign: 'center', borderBottom: '4px solid #f36523' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Azion Implementation Portal</h1>
        <p style={{ color: '#ccc', fontSize: '1rem' }}>Hub de Automações e Migração para Solutions Engineering, Parceiros e Clientes</p>
      </header>

      <main style={{ maxWidth: '1200px', margin: '2rem auto', padding: '0 1.5rem' }}>
        <section style={{ background: 'white', padding: '1.5rem 2rem', borderRadius: '8px', border: '1px solid #e1e4e8', marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.3rem', color: '#1c1c1c', marginBottom: '0.5rem' }}>🚀 Aceleração do Setup de Onboarding</h2>
          <p>Utilize as automações oficiais para reduzir o tempo de migração de DNS e infraestrutura. Nossas ferramentas aceleram a transferência de zonas complexas em segundos, eliminando o trabalho manual e reduzindo a taxa de insucesso no Go-Live.</p>
        </section>

        <h3 style={{ fontSize: '1.4rem', color: '#1c1c1c', marginBottom: '1.5rem', borderBottom: '2px solid #e1e4e8', paddingBottom: '0.5rem' }}>⚡ Automações Direct Cloudflare & Provisioning</h3>
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          
          <article style={{ background: 'white', borderRadius: '8px', border: '1px solid #e1e4e8', padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ marginBottom: '1rem' }}>
                <span style={{ backgroundColor: '#f36523', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 'bold' }}>Self-Service</span>
                <h4 style={{ fontSize: '1.25rem', color: '#1c1c1c', marginTop: '0.5rem', marginBottom: '0.5rem' }}>Cloudflare DNS Import Tool</h4>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#6c757d', marginBottom: '1.2rem' }}>
                Interface para leitura e migração de registros de DNS da Cloudflare com autonomia para o próprio cliente.
              </p>
              <ul style={{ listStyle: 'none', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>✓ Migração massiva de zonas em poucos segundos</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Self-service: o cliente realiza sem expor credenciais sensíveis</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Validação e mapeamento automatizado de entradas</li>
              </ul>
            </div>
            <a href="/cf-migration" style={{ display: 'inline-block', width: '100%', textAlign: 'center', backgroundColor: '#f36523', color: 'white', textDecoration: 'none', padding: '0.75rem 1rem', borderRadius: '6px', fontWeight: 600, fontSize: '0.95rem' }}>
              Acessar Importador de DNS ↗
            </a>
          </article>

          <article style={{ background: 'white', borderRadius: '8px', border: '1px solid #e1e4e8', padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ marginBottom: '1rem' }}>
                <span style={{ backgroundColor: '#0056b3', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 'bold' }}>Orquestrador API</span>
                <h4 style={{ fontSize: '1.25rem', color: '#1c1c1c', marginTop: '0.5rem', marginBottom: '0.5rem' }}>Provisionamento de Infraestrutura (Proxy / Workloads)</h4>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#6c757d', marginBottom: '1.2rem' }}>
                Crie automaticamente Connectors, Edge Applications e Workloads agrupados por destino no ambiente Azion.
              </p>
              <ul style={{ listStyle: 'none', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>✓ Deduplicação automática por Target Content</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Clona a Edge Application base e vincula os domínios</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Gera relatório em PDF para evidência de entrega</li>
              </ul>
            </div>
            <a href="/cf-migration" style={{ display: 'inline-block', width: '100%', textAlign: 'center', backgroundColor: '#1c1c1c', color: 'white', textDecoration: 'none', padding: '0.75rem 1rem', borderRadius: '6px', fontWeight: 600, fontSize: '0.95rem' }}>
              Iniciar Import / Migração ↗
            </a>
          </article>

        </section>

        <h3 style={{ fontSize: '1.4rem', color: '#1c1c1c', marginBottom: '1.5rem', borderBottom: '2px solid #e1e4e8', paddingBottom: '0.5rem' }}>📂 Automações por Arquivo (BIND Zone File)</h3>
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>

          <article style={{ background: 'white', borderRadius: '8px', border: '1px solid #e1e4e8', padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ marginBottom: '1rem' }}>
                <span style={{ backgroundColor: '#f36523', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 'bold' }}>Multi-Provider</span>
                <h4 style={{ fontSize: '1.25rem', color: '#1c1c1c', marginTop: '0.5rem', marginBottom: '0.5rem' }}>BIND DNS Zone File Import</h4>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#6c757d', marginBottom: '1.2rem' }}>
                Importe arquivos de zona padrão BIND (.zone, .txt, .dns) exportados de provedores como Akamai Edge DNS, Route53, BIND9 ou Windows Server.
              </p>
              
              <div style={{ backgroundColor: '#eef1f6', borderLeft: '3px solid #f36523', padding: '0.75rem 1rem', fontSize: '0.82rem', color: '#444', borderRadius: '0 4px 4px 0', marginBottom: '1.5rem' }}>
                <strong style={{ color: '#1c1c1c', display: 'block', marginBottom: '0.2rem' }}>💡 Vantagens Principais:</strong>
                • <strong>Independência de API:</strong> Não exige Tokens de acesso ao provedor de origem.<br/>
                • <strong>Compatibilidade Universal:</strong> Suporta o padrão RFC BIND usado por Akamai, AWS e DNSs On-Premise.<br/>
                • <strong>High-Volume:</strong> Processa centenas de registros em um único upload.
              </div>

              <ul style={{ listStyle: 'none', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>✓ Parse automático de registros A, CNAME, TXT, MX e SRV</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Higienização e validação de sintaxe pré-importação</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Ideal para cenários com travas rígidas de segurança/compliance</li>
              </ul>
            </div>
            <a href="/bind-import" style={{ display: 'inline-block', width: '100%', textAlign: 'center', backgroundColor: '#f36523', color: 'white', textDecoration: 'none', padding: '0.75rem 1rem', borderRadius: '6px', fontWeight: 600, fontSize: '0.95rem' }}>
              Acessar Importador BIND ↗
            </a>
          </article>

        </section>
      </main>

      <footer style={{ textAlign: 'center', marginTop: '4rem', padding: '2rem 1.5rem', color: '#6c757d', fontSize: '0.85rem', borderTop: '1px solid #e1e4e8', backgroundColor: 'white' }}>
        <p>Azion Solutions Engineering Team &bull; 2026</p>
      </footer>
    </>
  );
}
