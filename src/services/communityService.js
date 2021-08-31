import http from "../http-common";

class communityService{
    getAllCommunity(){
        return http.get("/community");
    }
}

export default new communityService();
