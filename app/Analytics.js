'use client';

import { useEffect, useState } from 'react';

const ID = 'G-LLGWDLC6HF';
const CHOICE_KEY = 'wandu-analytics-consent-v1';
const consent = (allowed) => ({
  analytics_storage: allowed ? 'granted' : 'denied',
  ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied',
});

function enableAnalytics() {
  // Keep previews and the private Sites copy out of production reports.
  if (window.location.hostname !== 'wanduuu.github.io') return;
  window['ga-disable-' + ID] = false;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  if (document.getElementById('wandu-google-analytics')) {
    window.gtag('consent', 'update', consent(true));
    return;
  }
  window.gtag('consent', 'default', consent(true));
  window.gtag('js', new Date());
  window.gtag('config', ID, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    cookie_expires: 60 * 60 * 24 * 180,
  });
  const script = document.createElement('script');
  script.id = 'wandu-google-analytics';
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + ID;
  document.head.appendChild(script);
}

function disableAnalytics() {
  window['ga-disable-' + ID] = true;
  window.gtag?.('consent', 'update', consent(false));
  for (const cookie of document.cookie.split(';')) {
    const name = cookie.trim().split('=')[0];
    if (name !== '_ga' && !name.startsWith('_ga_')) continue;
    for (const domain of ['', '; domain=wanduuu.github.io', '; domain=.wanduuu.github.io']) {
      document.cookie = name + '=; Max-Age=0; path=/' + domain;
    }
  }
}

export default function Analytics() {
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    let saved;
    try { saved = localStorage.getItem(CHOICE_KEY); } catch {}
    setOpen(saved !== 'granted' && saved !== 'denied');
    if (saved === 'granted') enableAnalytics();
    else disableAnalytics();
    setReady(true);
    function sync(event) {
      if (event.key !== CHOICE_KEY && event.key !== null) return;
      if (event.newValue === 'granted') enableAnalytics();
      else disableAnalytics();
      setOpen(event.newValue !== 'granted' && event.newValue !== 'denied');
    }
    window.addEventListener('storage', sync);
    return () => window.removeEventListener('storage', sync);
  }, []);

  function choose(allowed) {
    try { localStorage.setItem(CHOICE_KEY, allowed ? 'granted' : 'denied'); } catch {}
    if (allowed) enableAnalytics(); else disableAnalytics();
    setOpen(false);
  }

  return <aside className="analytics-settings" aria-label="방문 통계 설정">
    <button className="analytics-settings-link" onClick={() => setOpen(true)} aria-expanded={open} aria-controls="analytics-notice">개인정보 · 쿠키 설정</button>
    {ready && open && <section className="analytics-notice" id="analytics-notice" aria-labelledby="analytics-heading">
      <h2 id="analytics-heading">방문 통계 수집 안내</h2>
      <p>포트폴리오 개선을 위해 Google Analytics로 방문자의 쿠키를 분석합니다.</p>
      <details><summary>개인정보 처리 안내</summary><p>운영자: 김종완 · wan102745@gmail.com. 분석 쿠키의 유효기간은 최대 180일이며 방문 시 갱신될 수 있습니다. 이름·이메일 등 방문자의 직접 식별 정보를 보내지 않으며 광고 개인화는 사용하지 않습니다. 아래 설정에서 언제든 수집을 중단할 수 있습니다. 철회 이전에 전송된 데이터는 자동 삭제되지 않습니다. <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">Google의 데이터 처리 안내</a></p></details>
      <div className="analytics-actions"><button onClick={() => choose(false)}>거부</button><button onClick={() => choose(true)}>허용</button></div>
    </section>}
  </aside>;
}

