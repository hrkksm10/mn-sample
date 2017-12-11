import RootView from 'views/rootView'

class App extends Marionette.Application {
    constructor(options?: Marionette.ApplicationOptions) {
        const opt = {region: 'body'};
        super(_.extend(opt, options || {}));
    }

    onStart(): void {
        this.showView(new RootView());
    }
}

export default new App();
