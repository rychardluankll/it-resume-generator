// Padrões de detecção de injeção de script (XSS, HTML tags, handlers de eventos, esquemas maliciosos)
export const REGEX_SCRIPT_INJECTION =
  /(<\s*\/?\s*[a-z!][^>]*>|[<>`\\]|javascript\s*:|vbscript\s*:|data\s*:\s*text\/html|\bon[a-z]{2,}\s*=|\b(eval|Function|setTimeout|setInterval|alert|confirm|prompt)\s*\(|\b(document\.(cookie|write|location)|window\.location|innerHTML|outerHTML)\b|&#x?[0-9a-f]+;?)/i;

// Expressões regulares de validação por tipo de campo
export const REGEX_NOME = /^[a-zA-ZÀ-ÿ][a-zA-ZÀ-ÿ\s'-]{9,99}$/;
export const REGEX_CIDADE = /^[a-zA-ZÀ-ÿ][a-zA-ZÀ-ÿ\s.'-]{2,99}$/;
export const REGEX_ESTADO = /^[a-zA-ZÀ-ÿ][a-zA-ZÀ-ÿ\s.'-]{1,99}$/;
export const REGEX_DATA_ISO = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
export const REGEX_TELEFONE = /^\d{10,11}$/;
export const REGEX_EMAIL = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const REGEX_URL_SEGURA = /^https?:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/[^\s<>"'`;\\]*)?$/i;
export const REGEX_FERRAMENTA_VALIDA = /^[a-zA-ZÀ-ÿ0-9\s.+#\-/()]{1,50}$/;
export const REGEX_TEXTO_CURTO = /^[a-zA-ZÀ-ÿ0-9\s.,+#&'/:()\-]{1,200}$/;
export const REGEX_TEXTO_LONGO = /^[^<>`{}\\]+$/s;
export const REGEX_CREDENCIAL = /^[a-zA-ZÀ-ÿ0-9\s.:/?&=%#\-_]{1,150}$/;
export const REGEX_ANO = /^\d{4}$/;

/**
 * Verifica se uma string contém qualquer tentativa de injeção de script ou código malicioso.
 */
export function contemInjecaoScript(valor) {
  if (typeof valor !== "string") return false;
  return REGEX_SCRIPT_INJECTION.test(valor);
}

/**
 * Remove tags HTML, caracteres de injeção (<, >, `, \) e padrões de execução de scripts.
 */
export function removerPadroesMaliciosos(valor) {
  if (typeof valor !== "string") return "";
  return valor
    .replace(/<[^>]*>/g, "")
    .replace(/[<>`\\]/g, "")
    .replace(/(javascript|vbscript|data)\s*:/gi, "")
    .replace(/\bon[a-z]{2,}\s*=/gi, "")
    .replace(/\b(eval|Function|setTimeout|setInterval|alert|confirm|prompt)\s*\(/gi, "")
    .replace(/\b(document\.(cookie|write|location)|window\.location|innerHTML|outerHTML)\b/gi, "")
    .replace(/&#x?[0-9a-f]+;?/gi, "");
}

/**
 * Sanitizadores específicos para uso em tempo real nos eventos onChange dos inputs.
 */
export function sanitizarNome(valor, maxLen = 100) {
  return removerPadroesMaliciosos(valor)
    .replace(/[^a-zA-ZÀ-ÿ\s'-]/g, "")
    .slice(0, maxLen);
}

export function sanitizarLocalidade(valor, maxLen = 100) {
  return removerPadroesMaliciosos(valor)
    .replace(/[^a-zA-ZÀ-ÿ\s.'-]/g, "")
    .slice(0, maxLen);
}

export function sanitizarTelefone(valor, maxLen = 11) {
  return String(valor || "")
    .replace(/\D/g, "")
    .slice(0, maxLen);
}

export function sanitizarEmail(valor, maxLen = 100) {
  return removerPadroesMaliciosos(valor)
    .replace(/[^a-zA-Z0-9._%+-@]/g, "")
    .slice(0, maxLen);
}

export function sanitizarUrl(valor, maxLen = 200) {
  return removerPadroesMaliciosos(valor)
    .replace(/[\s<>"'`;\\]/g, "")
    .slice(0, maxLen);
}

export function sanitizarFerramenta(valor, maxLen = 50) {
  return removerPadroesMaliciosos(valor)
    .replace(/[^a-zA-ZÀ-ÿ0-9\s.+#\-/()]/g, "")
    .slice(0, maxLen);
}

export function sanitizarTextoCurto(valor, maxLen = 100) {
  return removerPadroesMaliciosos(valor)
    .replace(/[^a-zA-ZÀ-ÿ0-9\s.,+#&'/:()\-]/g, "")
    .slice(0, maxLen);
}

export function sanitizarTextoLongo(valor, maxLen = 500) {
  return removerPadroesMaliciosos(valor)
    .replace(/[<>`{}\\;$]/g, "")
    .slice(0, maxLen);
}

export function sanitizarCredencial(valor, maxLen = 150) {
  return removerPadroesMaliciosos(valor)
    .replace(/[^a-zA-ZÀ-ÿ0-9\s.:/?&=%#\-_]/g, "")
    .slice(0, maxLen);
}

export function sanitizarAno(valor) {
  return String(valor || "")
    .replace(/\D/g, "")
    .slice(0, 4);
}

/**
 * Validadores completos para bloqueio no envio/anexo caso algum valor seja inválido ou suspeito.
 */
export function validarTextoCurto(valor, minLen = 1, maxLen = 100) {
  const texto = String(valor || "").trim();
  if (texto.length < minLen || texto.length > maxLen) return false;
  if (contemInjecaoScript(texto)) return false;
  return REGEX_TEXTO_CURTO.test(texto);
}

export function validarTextoLongo(valor, minLen = 1, maxLen = 500) {
  const texto = String(valor || "").trim();
  if (texto.length < minLen || texto.length > maxLen) return false;
  if (contemInjecaoScript(texto)) return false;
  return REGEX_TEXTO_LONGO.test(texto);
}

export function validarUrl(valor, obrigatorio = false) {
  const url = String(valor || "").trim();
  if (!url) return !obrigatorio;
  if (contemInjecaoScript(url)) return false;
  return REGEX_URL_SEGURA.test(url);
}

export function validarFerramenta(valor) {
  const ferramenta = String(valor || "").trim();
  if (!ferramenta || contemInjecaoScript(ferramenta)) return false;
  return REGEX_FERRAMENTA_VALIDA.test(ferramenta);
}
