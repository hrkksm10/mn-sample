require.config({
    // キャッシュ防止(開発用)
    urlArgs: `bust=${(new Date()).getTime()}`,
});

require(['app'], (app: any) => {
    app.default.start();
});
