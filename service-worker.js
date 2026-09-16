// Finboo Service Worker
// 今回はインストール可能にするための最小構成（オフラインキャッシュ等は行わない）。
// PWAとしてインストール可能にするにはservice workerの「登録」自体が必要なため、
// fetchイベントには介入せず、常にネットワークへそのまま流す。

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// fetchイベントは意図的にハンドリングしない（キャッシュ・オフライン対応なし、常に通常のネットワーク取得）
