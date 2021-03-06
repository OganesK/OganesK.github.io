(function (c) {
    if (isEngineInited()){
        return;
    }

    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = 1;
    script.src = c.managerUrl;
    script.dataset.roxotInited = 'true';

    let head = document.getElementsByTagName('head')[0];
    head.insertBefore(script, head.firstChild);

    window.rom = window.rom || {cmd: [], icmd: []};
    window.rom.icmd = window.rom.icmd || [];
    window.rom.icmd.push(c);

    function isEngineInited(){
        return  document.querySelectorAll('[data-roxot-inited]').length;
    }
})({"publisherId":"4fd6e495-3dd3-49f7-9ea4-c2723f15c54c","adBlockMode":"iframe","iframeSspList":["google","prebid","prebid_dfp","third_party"],"managerUrl":"https:\/\/cdn-plus.roxot-panel.com\/wrapper\/js\/manager-engine.js?v=s-c338c4df-e0d4-434f-82f7-1e7c0b58b9f9","wrapperUrl":"https:\/\/cdn-plus.roxot-panel.com\/wrapper\/js\/wrapper.js?v=s-c338c4df-e0d4-434f-82f7-1e7c0b58b9f9","placementConfigTemplate":"https:\/\/cdn-plus.roxot-panel.com\/wrapper-builder\/placement\/__PLACEMENT_ID__?v=d-1643721057","gfsPlacementOptionsTemplate":"https:\/\/cdn-plus.roxot-panel.com\/wrapper-builder\/gfs-placement\/__PLACEMENT_ID__?v=d-1643721057","isLanguageSpecific":false,"hostConfig":{"coub.com":{"wrapperOptions":[],"isAcceptableAdsEnabled":false},"vc.ru":{"wrapperOptions":[],"isAcceptableAdsEnabled":false},"tjournal.ru":{"wrapperOptions":[],"isAcceptableAdsEnabled":false}},"isBrowserSpecific":true,"isOsSpecific":false,"isDeviceTypeSpecific":false,"dynamicUrlTemplate":"","wrapperConfig":{"prebid":{"adjustment":{"getintent":0.5,"otm":0.9,"rtbhouse":0.7,"rubicon":0.9,"segmento":0.85},"path":"https:\/\/cdn-plus.roxot-panel.com\/wrapper\/js\/prebid.js?v=s-c338c4df-e0d4-434f-82f7-1e7c0b58b9f9"},"adfox":{"hb":{"biddersMap":{"betweenDigital":"1471719","myTarget":"1471718","otm":"1471725","mgid":"1460172","segmento":"1496136","adriver":"1508036","buzzoola":"1547542","rtbhouse":"1393902","criteo":"1393905","getintent":"1393904","videonow":"1407059"},"timeout":1000}},"videojsLibs":{"path":"https:\/\/cdn-plus.roxot-panel.com\/wrapper\/js\/video-libs.js?v=s-c338c4df-e0d4-434f-82f7-1e7c0b58b9f9"},"pageUrlVariableName":"roxotPlusPageUrl","stubVideoPath":"https:\/\/cdn-plus.roxot-panel.com\/wrapper\/js\/video-ad?v=s-c338c4df-e0d4-434f-82f7-1e7c0b58b9f9"},"lazyLoading":[]})