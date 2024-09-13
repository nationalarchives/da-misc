javascript: (() => {
    const V1_PATH = '/explorer/explorer.html#';
    const V2_PATH = '/starter/explorer';
    let currentUrl = window.location.href;
    if (!currentUrl.includes('preservica.com')) return;
    const urlBase = currentUrl.split('/').slice(0, 3).join('/');
    const entityRef = currentUrl.match(/IO(%7C|&)[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/)?.[0] || currentUrl.match(/SO(%7C|&)[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/)?.[0];
    const isSO = entityRef?.startsWith('SO');
    let newUrl = urlBase;
    if (currentUrl.includes(V2_PATH)) {
        newUrl += V1_PATH;
        if (entityRef) newUrl += `${isSO ? 'browse' : 'properties'}:${entityRef.replace('%7C', '&')}`;
    } else if (currentUrl.includes(V1_PATH)) {
        newUrl += V2_PATH;
        if (entityRef) newUrl += isSO ? `/sdb:${entityRef.replace('&', '%7C')}` : `?assetReport=sdb:${entityRef.replace('&', '%7C')}`
    } else {
        return;
    }
    location.href = newUrl;
})();
