var mongoose= require("mongoose");
mongoose.connect('mongodb+srv://new-Shashank:ShAsHaNk@cluster0.loytd.mongodb.net/<dbname>?retryWrites=true&w=majority', {useNewUrlParser: true});
var conn=mongoose.connection;
var employeeSchema=new mongoose.Schema({
    name: String,
    email: String,
    etype:String,
    hourlyrate: Number,
    totalhour:Number
});

var employeeModel=mongoose.model('Employee',employeeSchema);
var employees=new employeeModel({name:'SHashnk',email:'sasnnd'
,etype:'sabdkjasbdkj',hourlyrate:90,totalhour:8});

console.log(employees.hourlyrate*employees.totalhour);

conn.on("connected",function(){
    console.log("disconntd successfully")
});

conn.on('disconnected',function(){
    console.log("disconnected successfully");
});

conn.on('error',console.error.bind(console,'connection error:'));

conn.once('open',function(){
    employees.save(function(err,res){
        if(err) throw err;

        console.log(res);
        conn.close();
    })
});