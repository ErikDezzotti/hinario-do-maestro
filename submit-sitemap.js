const axios = require('axios');

/**
 * Script para enviar o sitemap do Hinário do Maestro aos principais motores de busca
 * Para executar: node submit-sitemap.js
 */

const sitemapUrl = 'https://hinariodomaestro.com.br/sitemap.xml';

async function submitSitemap() {
  console.log('Iniciando envio do sitemap para os motores de busca...');
  
  try {
    // Google
    console.log('Enviando para o Google...');
    const googleResponse = await axios.get(`https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`);
    console.log(`Google: ${googleResponse.status === 200 ? 'Sucesso!' : 'Falha!'}`);
    
    // Bing
    console.log('Enviando para o Bing...');
    const bingResponse = await axios.get(`https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`);
    console.log(`Bing: ${bingResponse.status === 200 ? 'Sucesso!' : 'Falha!'}`);
    
    // Yandex
    console.log('Enviando para o Yandex...');
    const yandexResponse = await axios.get(`https://webmaster.yandex.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`);
    console.log(`Yandex: ${yandexResponse.status === 200 ? 'Sucesso!' : 'Falha!'}`);
    
    console.log('\nProcesso concluído! O sitemap foi enviado aos principais motores de busca.');
    console.log('Nota: Pode levar alguns dias para que os motores de busca processem completamente o sitemap.');
    
  } catch (error) {
    console.error('Erro ao enviar o sitemap:', error.message);
  }
}

// Execute a função
submitSitemap(); 