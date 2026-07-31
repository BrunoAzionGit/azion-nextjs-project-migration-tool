'use client';
import { useState } from 'react';

export default function BindImport() {
  const [azionToken, setAzionToken] = useState('');
  const [zoneId, setZoneId] = useState('');
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState({ loading: false, message: '', type: '' });

  const WEBHOOK_URL = 'https://enktjce9wes.map.azionedge.net/webhook/bind-to-azion';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Selecione um arquivo BIND!");
      return;
    }

    const formData = new FormData();
    formData.append('bindFile', file);
    formData.append('azionToken', azionToken);
    formData.append('zoneId', zoneId);

    setStatus({ loading: true, message: '', type: '' });

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setStatus({
          loading: false,
          message: 'Import submetido com Sucesso, verifique os registros importados no Edge DNS',
          type: 'success'
        });
        setAzionToken('');
        setZoneId('');
        setFile(null);
      } else {
        const result = await response.json().catch(() => ({}));
        setStatus({
          loading: false,
          message: `Erro (${response.status}): ` + JSON.stringify(result, null, 2),
          type: 'error'
        });
      }
    } catch (err) {
      setStatus({
        loading: false,
        message: 'Erro de comunicação com o webhook: ' + err.message,
        type: 'error'
      });
    }
  };

  return (
    <div style={{ backgroundColor: '#f4f6f9', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', margin: 0, padding: '20px' }}>
      <div style={{ background: '#ffffff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '480px' }}>
        <a href="/" style={{ display: 'inline-flex', alignItems: 'center', color: '#64748b', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500, marginBottom: '15px' }}>
          ← Voltar ao Portal
        </a>
        <h2 style={{ marginTop: 0, color: '#333', fontSize: '1.4rem', marginBottom: '20px' }}>Importar Arquivo BIND</h2>
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600, color: '#555', fontSize: '0.9rem' }}>Azion Token:</label>
            <input 
              type="text" 
              value={azionToken} 
              onChange={(e) => setAzionToken(e.target.value)}
              placeholder="Digite seu Token da Azion" 
              required 
              style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '0.95rem' }}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600, color: '#555', fontSize: '0.9rem' }}>Zone ID:</label>
            <input 
              type="text" 
              value={zoneId}
              onChange={(e) => setZoneId(e.target.value)}
              placeholder="ID da zona de DNS" 
              required 
              style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '0.95rem' }}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600, color: '#555', fontSize: '0.9rem' }}>Arquivo BIND (.txt / .zone):</label>
            <input 
              type="file" 
              accept=".txt,.zone,.bind" 
              onChange={(e) => setFile(e.target.files[0])}
              required 
              style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '0.95rem', backgroundColor: '#fafafa' }}
            />
          </div>

          <button 
            type="submit" 
            disabled={status.loading}
            style={{ width: '100%', padding: '12px', backgroundColor: status.loading ? '#ccc' : '#ff5b00', color: 'white', border: 'none', borderRadius: '4px', fontSize: '1rem', fontWeight: 'bold', cursor: status.loading ? 'not-allowed' : 'pointer' }}
          >
            {status.loading ? 'Enviando...' : 'Enviar Registros'}
          </button>
        </form>

        {status.message && (
          <div style={{
            marginTop: '18px',
            padding: '12px',
            borderRadius: '4px',
            fontSize: '0.9rem',
            backgroundColor: status.type === 'success' ? '#d4edda' : '#f8d7da',
            color: status.type === 'success' ? '#155724' : '#721c24',
            border: status.type === 'success' ? '1px solid #c3e6cb' : '1px solid #f5c6cb'
          }}>
            {status.message}
          </div>
        )}
      </div>
    </div>
  );
}
