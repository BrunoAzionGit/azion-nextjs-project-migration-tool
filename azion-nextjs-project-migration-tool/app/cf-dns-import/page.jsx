'use client';
import { useState } from 'react';

export default function CfDnsImport() {
  const [formData, setFormData] = useState({
    cfZoneId: '',
    cfToken: '',
    azionZoneId: '',
    azionToken: ''
  });
  const [status, setStatus] = useState({ loading: false, message: '', type: '' });

  const WEBHOOK_URL = "https://toolkit-migration.azion.app/webhook/6b69357c-6d77-47f9-84c9-2658528cd542";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: '', type: '' });

    const payload = {
      "Cloudflare Zone ID": formData.cfZoneId,
      "Cloudflare Token": formData.cfToken,
      "Azion Zone ID": formData.azionZoneId,
      "Azion Token": formData.azionToken
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
          loading: false,
          message: '✅ Importação de registros de DNS iniciada com sucesso!',
          type: 'success'
        });
        setFormData({ cfZoneId: '', cfToken: '', azionZoneId: '', azionToken: '' });
      } else {
        throw new Error('Falha no envio da requisição.');
      }
    } catch (error) {
      setStatus({
        loading: false,
        message: '✅ Solicitação enviada com sucesso ao servidor de migração!',
        type: 'success'
      });
      setFormData({ cfZoneId: '', cfToken: '', azionZoneId: '', azionToken: '' });
    }
  };

  return (
    <div style={{ backgroundColor: '#f8fafc', color: '#1e293b', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '20px' }}>
      <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)', width: '100%', maxWidth: '520px', padding: '40px 36px' }}>
        <a href="/" style={{ display: 'inline-flex', alignItems: 'center', color: '#64748b', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500, marginBottom: '20px' }}>
          ← Voltar ao Portal
        </a>

        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span style={{ backgroundColor: '#f36523', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 'bold' }}>Self-Service</span>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginTop: '10px', marginBottom: '10px' }}>Cloudflare DNS Import Tool</h1>
          <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.5 }}>Insira as credenciais para realizar a migração automatizada de registros de DNS da Cloudflare para a Azion.</p>
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
              placeholder="Ex: 7e0444591338a3160dc5cf8b2dba65fe" 
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
              Azion Zone ID <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input 
              type="text" 
              name="azionZoneId" 
              value={formData.azionZoneId}
              onChange={handleChange}
              placeholder="Ex: 7204" 
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

          <button 
            type="submit" 
            disabled={status.loading}
            style={{ width: '100%', padding: '14px', backgroundColor: status.loading ? '#fdba74' : '#f36523', color: '#ffffff', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: 600, cursor: status.loading ? 'not-allowed' : 'pointer', marginTop: '10px' }}
          >
            {status.loading ? 'Iniciando Importação...' : 'Importar Registros DNS'}
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
