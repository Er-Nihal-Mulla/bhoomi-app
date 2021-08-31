import http from "../http-common";

class ProductDataService{
    getAllProducts(){
        return http.get("/products");
    }
    getOneProduct(id){
        return http.get(`/products/${id}`);
    }
}

export default new ProductDataService();
