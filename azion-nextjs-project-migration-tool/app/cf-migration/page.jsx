'use client';

import React, { useState } from 'react';

export default function CfMigrationPage() {
  const [formData, setFormData] = useState({
    'Cloudflare Zone ID': '',
    'Cloudflare Token': '',
    'Azion Token': '',
    'Azion Base Edge App ID (Origin)': '',
  });

  const [loading, setLoading] = useState(false);
  const [htmlReport, setHtmlReport] = useState(null);
  const [error, setError] = useState(null);

  // Insira a URL pública do seu Webhook do n8n
  const WEBHOOK_URL = 'https://toolkit-migration.azion.app/webhook/8469c71d-08fb-4530-ac12-d09a4002a420';
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setHtmlReport(null);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
      }

      const html = await response.text();
      setHtmlReport(html);
    } catch (err) {
      setError(err.message || 'Ocorreu um erro ao processar a solicitação.');
    } finally {
      setLoading(false);
    }
  };

  if (htmlReport) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        <button
          onClick={() => setHtmlReport(null)}
          style={{ marginBottom: '16px', fontSize: '14px', fontWeight: '600', color: '#2563eb', background: 'none', border: 'none', cursor: 'pointer', alignSelf: 'flex-start' }}
        >
          ← Voltar ao Formulário
        </button>
        <div 
          style={{ width: '100%', maxWidth: '1024px', backgroundColor: '#ffffff', padding: '24px', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
          dangerouslySetInnerHTML={{ __html: htmlReport }} 
        />
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div style={{ width: '100%', maxWidth: '560px', margin: '0 auto', backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #f1f5f9', padding: '40px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <a
            href="/"
            style={{ display: 'inline-flex', alignItems: 'center', fontSize: '14px', fontWeight: '500', color: '#475569', textDecoration: 'none', marginBottom: '24px' }}
          >
            ← Voltar ao Portal
          </a>
          <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#0f172a', textAlign: 'center', margin: '0 0 8px 0', letterSpacing: '-0.025em' }}>
            Automação Cloudflare -&gt; Azion
          </h1>
          <p style={{ fontSize: '15px', color: '#64748b', textAlign: 'center', lineHeight: '1.5', margin: '0 auto', maxWidth: '400px' }}>
            Insira as credenciais e IDs para executar a sincronização de Conectores, Applications e Workloads.
          </p>
        </div>

        {/* Mensagem de Erro */}
        {error && (
          <div style={{ marginBottom: '24px', padding: '16px', fontSize: '14px', color: '#b91c1c', backgroundColor: '#fef2f2', borderRadius: '8px', border: '1px solid #fecaca' }}>
            {error}
          </div>
        )}

        {/* Formulário */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>
              Cloudflare Zone ID <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input
              type="text"
              name="Cloudflare Zone ID"
              value={formData['Cloudflare Zone ID']}
              onChange={handleChange}
              placeholder="Ex: 023e105f4ecef8ad9ca31a8372d0c353"
              required
              style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '14px', color: '#334155', boxSizing: 'border-box', outline: 'none' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>
              Cloudflare Token <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input
              type="password"
              name="Cloudflare Token"
              value={formData['Cloudflare Token']}
              onChange={handleChange}
              placeholder="Insira o seu token da Cloudflare"
              required
              style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '14px', color: '#334155', boxSizing: 'border-box', outline: 'none' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>
              Azion Token <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input
              type="password"
              name="Azion Token"
              value={formData['Azion Token']}
              onChange={handleChange}
              placeholder="Insira o seu token da Azion"
              required
              style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '14px', color: '#334155', boxSizing: 'border-box', outline: 'none' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>
              Azion Base Edge App ID (Origin) <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input
              type="text"
              name="Azion Base Edge App ID (Origin)"
              value={formData['Azion Base Edge App ID (Origin)']}
              onChange={handleChange}
              placeholder="Ex: 12345"
              required
              style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '14px', color: '#334155', boxSizing: 'border-box', outline: 'none' }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '14px 16px',
              backgroundColor: loading ? '#f97316' : '#f26422',
              opacity: loading ? 0.7 : 1,
              color: '#ffffff',
              fontWeight: '700',
              fontSize: '16px',
              borderRadius: '8px',
              border: 'none',
              cursor: loading ? 'not-allowed' : 'pointer',
              marginTop: '8px',
              transition: 'background-color 0.2s'
            }}
          >
            {loading ? 'Processando...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}
