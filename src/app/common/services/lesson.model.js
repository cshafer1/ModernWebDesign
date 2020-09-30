// This is an example we're not really using it

class LessonModel {
    constructor(Parse){
        this.Parse = Parse;
        this.name = 'Lesson';
        this.fields = [
            'course',
            'teacableUrl',
            'name',
            'source',
            'tumbnail',
            'views',
            'tinkificUrl'
        ] // No need for objectid createdAt and updatedAt
        this.data = {};
        this.collection = {};
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
    
    getById(id){
        return new this.Parse.Query(this.New())
            .include('course')
            .get(id)
            .then(result => {
                this.Parse.defineAttributes(result, this.fields);
                this.Parse.defineAttributes(result.course, this.CourseModel.fields);
                return Promise.result;
        })
        .catch()
        
    }
}