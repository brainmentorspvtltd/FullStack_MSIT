import { URL } from "../utils/constant"

const networkOperations ={
    async getData(){
        const response = await fetch(URL);
        const data = response.json();
        return data;

        //axios
    },
    postData(){

    },
    putData(){

    },
    deleteData(){

    }
}

export default networkOperations;