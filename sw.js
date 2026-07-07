// PWA 설치용 최소 서비스워커 — 캐싱 없음(항상 네트워크), 오프라인 지원 안 함
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(clients.claim()));
self.addEventListener("fetch", () => {});
