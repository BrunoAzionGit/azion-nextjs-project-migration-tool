'use client';

import { useState } from 'react';

export default function CfNetworklistsImport() {
  const [formData, setFormData] = useState({
    cfAccountId: '',
    cfToken: '',
    azionToken: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const WEBHOOK_URL = 'https://enktjce9wes.map.azionedge.net/webhook/4935b889-d36c-42e5-b6d7-f0858a19c04f';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    const payload = {
      CF_ACCOUNT_ID: formData.cfAccountId.trim(),
      CF_TOKEN: formData.cfToken.trim(),
      AZION_TOKEN: formData.azionToken.trim()
    };

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Sincronização iniciada com sucesso!'
        });
      } else {
        throw new Error(`Servidor retornou status ${response.status}`);
      }
    } catch (err) {
      setStatus({
        type: 'error',
        message: 'Erro ao conectar ao Webhook: ' + err.message
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      backgroundColor: '#f8fafc',
      color: '#1e293b',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '24px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '16px',
        padding: '40px',
        width: '100%',
        maxWidth: '580px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)'
      }}>
        <a href="/" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '0.875rem',
          fontWeight: 500,
          color: '#64748b',
          textDecoration: 'none',
          marginBottom: '32px'
        }}>
          ← Voltar ao Portal
        </a>

        <h1 style={{
          textAlign: 'center',
          fontSize: '1.875rem',
          fontWeight: 700,
          color: '#0f172a',
          marginBottom: '12px',
          letterSpacing: '-0.02em'
        }}>
          Automação Cloudflare -&gt; Azion
        </h1>

        <p style={{
          textAlign: 'center',
          fontSize: '0.95rem',
          color: '#64748b',
          lineHeight: '1.5',
          marginBottom: '36px',
          padding: '0 16px'
        }}>
          Insira as credenciais e IDs para executar a sincronização das Listas de IPs (ACL's) para a Azion Network Lists.
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#334155', marginBottom: '8px' }}>
              Cloudflare Account ID <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input
              type="text"
              name="cfAccountId"
              value={formData.cfAccountId}
              onChange={handleChange}
              placeholder="Ex: 0yyyaaa0ebf9f9dcd4xx33aztujjjjhhd"
              required
              style={{
                width: '100%',
                padding: '14px 16px',
                backgroundColor: '#ffffff',
                border: '1px solid #cbd5e1',
                borderRadius: '10px',
                fontSize: '0.95rem',
                color: '#0f172a',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#334155', marginBottom: '8px' }}>
              Cloudflare Token <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input
              type="password"
              name="cfToken"
              value={formData.cfToken}
              onChange={handleChange}
              placeholder="Insira o seu token da Cloudflare"
              required
              style={{
                width: '100%',
                padding: '14px 16px',
                backgroundColor: '#ffffff',
                border: '1px solid #cbd5e1',
                borderRadius: '10px',
                fontSize: '0.95rem',
                color: '#0f172a',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#334155', marginBottom: '8px' }}>
              Azion Token <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input
              type="password"
              name="azionToken"
              value={formData.azionToken}
              onChange={handleChange}
              placeholder="Insira o seu token da Azion"
              required
              style={{
                width: '100%',
                padding: '14px 16px',
                backgroundColor: '#ffffff',
                border: '1px solid #cbd5e1',
                borderRadius: '10px',
                fontSize: '0.95rem',
                color: '#0f172a',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '16px',
              backgroundColor: loading ? '#fdba74' : '#f97316',
              border: 'none',
              borderRadius: '10px',
              color: '#ffffff',
              fontSize: '1rem',
              fontWeight: 700,
              cursor: loading ? 'not-allowed' : 'pointer',
              marginTop: '12px'
            }}
          >
            {loading ? 'Enviando...' : 'Submit'}
          </button>
        </form>

        {status.message && (
          <div style={{
            marginTop: '20px',
            padding: '14px',
            borderRadius: '8px',
            fontSize: '0.9rem',
            fontWeight: 500,
            textAlign: 'center',
            backgroundColor: status.type === 'success' ? '#f0fdf4' : '#fef2f2',
            color: status.type === 'success' ? '#166534' : '#991b1b',
            border: status.type === 'success' ? '1px solid #bbf7d0' : '1px solid #fecaca'
          }}>
            {status.message}
          </div>
        )}
      </div>
    </div>
  );
}
