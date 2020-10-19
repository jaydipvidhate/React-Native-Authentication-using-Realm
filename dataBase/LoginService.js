
import realm from './realm.config';


export const addNewUser = (userName,password) => new Promise(async (resolve, reject) =>  {
    try{
        realm.write(()=>{
            realm.create('User',{userName: userName,password: password});
            let users=realm.objects('User')
            console.log(users);
            resolve()
        }
        )

    }
    catch(err){
        
        reject(err);
    }
    
});

export const findUserByUserNameAndPassword = (userName, password) => new Promise(async (resolve, reject) =>  {
    
    let users=realm.objects('User').filtered('userName="'+userName+'" AND password="'+password+'"')
    resolve(users)
    
});
