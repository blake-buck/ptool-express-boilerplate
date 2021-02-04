function dependencyInjector(){
    return {
        dependencies: {},
        store:{},
        register (name, injector) {
            this.store[name] = injector;
        },
        search(name){
            if(this.dependencies[name]){
                return this.dependencies[name];
            }

            // By the time dependencies are getting injected, everything needs to registered. Otherwise an error gets thrown
            if(!this.store[name]){
                throw new Error(`Dependency ${name} not found.`)
            }

            this.dependencies[name] = this.store[name]();

            return this.dependencies[name];
        },
        inject (name) {
            
            return this.search(name);
        },
    }
}

module.exports = dependencyInjector();