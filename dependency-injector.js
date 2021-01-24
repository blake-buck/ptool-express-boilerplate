function dependencyInjector(){
    return {
        dependencies: {},
        register (name, dependency) {
            this.dependencies[name] = dependency;
        },
        inject (name) {
            if(!this.dependencies[name]){
                throw new Error(`Dependency ${name} not found.`)
            }
            return this.dependencies[name];
        }
    }
}

module.exports = dependencyInjector();