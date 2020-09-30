class ProjectModel {
    constructor (Parse){
        this.Parse = Parse;
        this.collection = []
        this.data = {};
    }
    
    New(obj){
        if(angular.isUndefined(obj)){
            const parseObject = new this.Parse.Object(this.name)
            this.Parse.defineAttributes(parseObject,this.fields);
            return parseObject;
        }
        else {
            this.Parse.defineAttributes(parseObject,this.fields);
            return obj;
        }
    }
    
    getAllProjects(){
        return new this.Parse.Query(this.New())
            .find((results)=> {
                results.forEach((result)=> {
                    this.Parse.defineAttributes(result,this.fields)
                })
                this.collection = results;
                return Promise.resolve(results);
            })
            .catch((error) => Promise.reject(error));
    }
}