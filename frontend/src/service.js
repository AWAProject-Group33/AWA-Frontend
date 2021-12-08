import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/api/consumer/all");
  }
}


export default new TutorialDataService();