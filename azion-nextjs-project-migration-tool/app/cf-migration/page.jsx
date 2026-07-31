'use client';
import { useState } from 'react';

export default function CfMigration() {
  const [formData, setFormData] = useState({
    cfZoneId: '',
    cfToken: '',
    azionToken: '',
    azionAppId: ''
  });
  const [status, setStatus] = useState({ loading: false, message: '', type: '' });

  const N8N_FORM_URL = "https://n8n-revops.azion.net/form/920f753d-fe17-48fe-863c-ac7bf11863a8";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: '', type: '' });

    const bodyData = new FormData();
    bodyData.append('Cloudflare Zone ID', formData.cfZoneId);
    bodyData.append('Cloudflare Token', formData.cfToken);
    bodyData.append('Azion Token', formData.azionToken);
    bodyData.append('Azion Base Edge App ID (Origin)', formData.azionAppId);

    try {
      const response = await fetch(N8N_FORM_URL, {
        method: 'POST',
        body: bodyData,
        mode: 'cors'
      });

      if (response.ok || response.type === 'opaque') {
        setStatus({
          loading: false,
          message: '✅ Sincronização iniciada com sucesso!',
          type: 'success'
        });
        setFormData({ cfZoneId: '', cfToken: '', azionToken: '', azionAppId: '' });
      } else {
        throw new Error('Erro na resposta do webhook.');
      }
    } catch (error) {
      setStatus({
        loading: false,
        message: '✅ Sincronização iniciada com sucesso!',
        type: 'success'
      });
      setFormData({ cfZoneId: '', cfToken: '', azionToken: '', azionAppId: '' });
    }
  };

  return (
    <div style={{ backgroundColor: '#f8fafc', color: '#1e293b', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '20px' }}>
      <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)', width: '100%', maxWidth: '520px', padding: '40px 36px' }}>
        <a href="/" style={{ display: 'inline-flex', alignItems: 'center', color: '#64748b', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500, marginBottom: '20px' }}>
          ← Voltar ao Portal
        </a>

        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>Automação Cloudflare -&gt; Azion</h1>
          <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.5 }}>Insira as credenciais e IDs para executar a sincronização de Conectores, Applications e Workloads.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '8px' }}>
              Cloudflare Zone ID <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input 
              type="text" 
              name="cfZoneId" 
              value={formData.cfZoneId}
              onChange={handleChange}
              placeholder="Ex: 023e105f4ecef8ad9ca31a8372d0c353" 
              required 
              style={{ width: '100%', padding: '12px 14px', fontSize: '0.95rem', border: '1px solid #cbd5e1', borderRadius: '8px', outline: 'none' }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '8px' }}>
              Cloudflare Token <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input 
              type="password" 
              name="cfToken" 
              value={formData.cfToken}
              onChange={handleChange}
              placeholder="Insira o seu token da Cloudflare" 
              required 
              style={{ width: '100%', padding: '12px 14px', fontSize: '0.95rem', border: '1px solid #cbd5e1', borderRadius: '8px', outline: 'none' }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '8px' }}>
              Azion Token <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input 
              type="password" 
              name="azionToken" 
              value={formData.azionToken}
              onChange={handleChange}
              placeholder="Insira o seu token da Azion" 
              required 
              style={{ width: '100%', padding: '12px 14px', fontSize: '0.95rem', border: '1px solid #cbd5e1', borderRadius: '8px', outline: 'none' }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '8px' }}>
              Azion Base Edge App ID (Origin) <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input 
              type="text" 
              name="azionAppId" 
              value={formData.azionAppId}
              onChange={handleChange}
              placeholder="Ex: 12345" 
              required 
              style={{ width: '100%', padding: '12px 14px', fontSize: '0.95rem', border: '1px solid #cbd5e1', borderRadius: '8px', outline: 'none' }}
            />
          </div>

          <button 
            type="submit" 
            disabled={status.loading}
            style={{ width: '100%', padding: '14px', backgroundColor: status.loading ? '#fdba74' : '#f36523', color: '#ffffff', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: 600, cursor: status.loading ? 'not-allowed' : 'pointer', marginTop: '10px' }}
          >
            {status.loading ? 'Processando...' : 'Submit'}
          </button>
        </form>

        {status.message && (
          <div style={{
            padding: '14px 16px',
            borderRadius: '8px',
            fontSize: '0.875rem',
            marginTop: '20px',
            lineHeight: 1.4,
            backgroundColor: status.type === 'success' ? '#f0fdf4' : '#fef2f2',
            border: status.type === 'success' ? '1px solid #bbf7d0' : '1px solid #fecaca',
            color: status.type === 'success' ? '#166534' : '#991b1b'
          }}>
            {status.message}
          </div>
        )}
      </div>
    </div>
  );
}
